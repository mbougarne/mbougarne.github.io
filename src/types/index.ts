export enum PermissionType {
  Locks = '1',
  ActivateLocks = '2',
  Inventory = '3',
  TenantLocks = '4',
  Facilities = '5',
  TransferFacilities = '6',
  Users = '7',
  EditAdmins = '8',
  Subdomains = '9',
  ApiSettings = '10',
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
