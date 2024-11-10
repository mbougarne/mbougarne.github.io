/* eslint-disable react/no-unknown-property */
import { FC } from 'react';
import { css } from '@emotion/react';

enum IconsNamesEnum {
  addRole = 'add-role',
  delete = 'delete',
  mannaLogo = 'manna_logo',
}

type IconName = `${IconsNamesEnum}`;

interface IconProps {
  name: IconName;
  color: string;
  hover?: string;
}

export const Icon: FC<IconProps> = ({ name, color, hover }) => {
  return (
    <i
      css={css`
        -webkit-mask-size: cover;
        mask-size: cover;
        -webkit-mask-image: url(/assets/${name}.svg);
        mask-image: url(/assets/${name}.svg);
        background-color: ${color};
        width: 65px;
        height: 65px;
        display: inline-block;
        &:hover {
          color: ${hover ?? color};
        }
      `}></i>
  );
};
