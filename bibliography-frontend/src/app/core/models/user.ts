import { Role } from "./role";
import { UserForm } from "./user-form";

export class User {
  username?: string;
  password?: string;
  token?: string;
  role?: Role
}
