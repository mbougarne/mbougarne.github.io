import {
  Dispatch,
  FC,
  forwardRef,
  ReactElement,
  Ref,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  Typography,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import {
  Close as CloseIcon,
  DeleteSweepOutlined,
  DoneAllOutlined,
} from '@mui/icons-material';
import { useErrorNotification, useSuccessNotification } from '@/hooks';
import { userContext } from '@/store';
import { sendRequest } from '@/helpers';

const SlideTransition = forwardRef(function SlideTransition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>,
) {
  return (
    <Slide
      ref={ref}
      direction="down"
      timeout={1000}
      {...props}
    />
  );
});

interface DeleteRoleProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  id: string;
}

export const DeleteRole: FC<DeleteRoleProps> = ({ open, setOpen, id }) => {
  const [deleting, setDeleting] = useState<boolean>(false);
  const [deleted, setDeleted] = useState<boolean>(false);
  const [disableDelete, setDisableDelete] = useState<boolean>(false);
  const [disableCancel, setDisableCancel] = useState<boolean>(false);
  const { dispatch, state } = useContext(userContext);

  const { setError } = useErrorNotification();
  const { setSuccess } = useSuccessNotification(900);

  const abortController = new AbortController();

  const onCancel = () => {
    setDeleting(false);
    setError('You canceled the delete role request');
    abortController.abort('Request cancelled by the user');
    setOpen(false);
  };

  const onDelete = async () => {
    setDeleting(true);
    setDisableDelete(true);
    const result = await sendRequest(
      { endPoint: 'DeleteRole', id },
      abortController.signal,
    );

    if (!result.ok) {
      const text = await result.text();
      setError(`Cannot delete the user ${result.statusText}: ${text}`);
      setDeleting(false);
      setOpen(false);
      setDisableDelete(false);
    }

    setDisableCancel(true);

    setTimeout(() => {
      setDeleted(true);
      setSuccess('You delete the role');
      dispatch({
        type: 'set/roles',
        payload: {
          roles: [...state.roles.filter((role) => role.id !== id)],
        },
      });
    }, 1000);

    // Cleanup
    setTimeout(() => {
      setDisableCancel(false);
      setDisableDelete(false);
      setDeleted(false);
      setDeleting(false);
      setOpen(false);
    }, 2000);
  };

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={SlideTransition}
        aria-label="Delete role form"
        PaperProps={{
          sx: {
            width: '560px',
          },
        }}
        keepMounted>
        {deleting && (
          <Alert
            variant="filled"
            icon={
              deleted ? (
                <DoneAllOutlined fontSize="inherit" />
              ) : (
                <DeleteSweepOutlined fontSize="inherit" />
              )
            }
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 0,
              backgroundColor: deleted ? 'colors.buttonBg' : 'colors.textBody',
              color: 'colors.white',
            }}>
            <Typography variant="body1">
              {deleted ? 'Role Deleted' : 'Deleting role...'}
            </Typography>
          </Alert>
        )}
        <DialogTitle
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            textTransform: 'uppercase',
          }}>
          <Typography
            variant="body2"
            component="span">
            Are you sure?
          </Typography>
          {!deleting && (
            <IconButton
              size="small"
              aria-label="close"
              color="primary"
              onClick={() => setOpen(false)}>
              <CloseIcon fontSize="small" />
            </IconButton>
          )}
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1">This action is unrecoverable</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            disabled={disableCancel}
            onClick={onCancel}
            sx={{
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}>
            <Typography
              variant="body2"
              component="span"
              sx={{
                textTransform: 'uppercase',
                color: 'colors.textButton',
                '&:hover': {
                  color: 'primary.main',
                },
              }}>
              Cancel
            </Typography>
          </Button>
          <Button
            disabled={disableDelete}
            onClick={onDelete}
            sx={{
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}>
            <Typography
              variant="body2"
              component="span"
              sx={{
                textTransform: 'uppercase',
                color: 'error.main',
              }}>
              Delete
            </Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
