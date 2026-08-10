import { SetMetadata } from '@nestjs/common';
import { UserRole } from '@hybrid-banking/types';

export const ROLES_KEY = 'roles';

/**
 * Restrict endpoint to specific roles.
 * Usage: @Roles(UserRole.ADMIN, UserRole.COMPLIANCE)
 */
export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);
