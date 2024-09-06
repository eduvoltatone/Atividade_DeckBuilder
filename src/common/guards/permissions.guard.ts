// src/common/guards/permissions.guard.ts
import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Permissions } from '../enums/permissions.enum';

@Injectable()
export class PermissionsGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const requiredPermissions = this.reflector.get<Permissions[]>('permissions', context.getHandler());
        if (!requiredPermissions) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const user = request.user; // Supondo que o usuário esteja anexado ao request

        if (!user || !user.permissions) {
            throw new ForbiddenException('No permissions found');
        }

        return requiredPermissions.some(permission => user.permissions.includes(permission));
    }
}