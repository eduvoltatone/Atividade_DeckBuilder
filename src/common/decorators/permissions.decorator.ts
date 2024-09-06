import { SetMetadata } from '@nestjs/common';
import { Permissions } from '../enums/permissions.enum';

export const PERMISSIONS_KEY = 'permissions';
export const PermissionsDecorator = (...permissions: Permissions[]) =>
    SetMetadata(PERMISSIONS_KEY, permissions);
