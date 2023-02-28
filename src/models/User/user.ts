import { UserRole } from "./user-role-enum";

export interface User {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  role: UserRole;
}

/**
 * isValidUserMail
 */
export function isValidUserMail(User: User): boolean {
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(User.email);
}

/**
 * isValidPassword
 */
export function isValidPassword(User: User): boolean {
  const passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;
  return passwordRegex.test(User.password);
}
