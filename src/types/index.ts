export enum PermissionType {
  Locks = 1,
  ActivateLocks = 2,
  Inventory = 3,
  TenantLocks = 4,
  Facilities = 5,
  TransferFacilities = 6,
  Users = 7,
  EditAdmins = 8,
  Subdomains = 9,
  ApiSettings = 10,
}

export enum AccessLevel {
  None = 0,
  Read = 1,
  Write = 2,
}

export interface IPermission {
  id: PermissionType;
  accessLevel: AccessLevel;
}

export interface IUserRole {
  id: string;
  name: string;
  isCustom: boolean;
  roleIcon: number;
  permissions: IPermission[];
  usersAssigned: number;
}

export interface ICreateUserRole {
  name: string;
  roleIcon: number;
  permissions: IPermission[];
}

export interface IUpdateUserRole {
  id: string;
  name: string;
  roleIcon: number;
  permissions: IPermission[];
}

export interface UserFormState {
  name: string;
  roleIcon: number;
  permissions: IPermission[];
}

export const initialState: UserFormState = {
  name: '',
  roleIcon: 1,
  permissions: [
    { id: PermissionType.Locks, accessLevel: AccessLevel.None },
    { id: PermissionType.ActivateLocks, accessLevel: AccessLevel.None },
    { id: PermissionType.Inventory, accessLevel: AccessLevel.None },
    { id: PermissionType.TenantLocks, accessLevel: AccessLevel.None },
    { id: PermissionType.Facilities, accessLevel: AccessLevel.None },
    { id: PermissionType.TransferFacilities, accessLevel: AccessLevel.None },
    { id: PermissionType.Users, accessLevel: AccessLevel.None },
    { id: PermissionType.EditAdmins, accessLevel: AccessLevel.None },
    { id: PermissionType.Subdomains, accessLevel: AccessLevel.None },
    { id: PermissionType.ApiSettings, accessLevel: AccessLevel.None },
  ],
};
