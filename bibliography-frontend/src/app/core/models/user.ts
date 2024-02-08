import { Role } from "./role";
import { UserForm } from "./user-form";

export class User {
  username?: string;
  password?: string;
  access_token?: string;
  refresh_token?: string;
  role?: Role
}
