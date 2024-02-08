import { Role } from "../../models/role";

export class AuthResponse {
  access_token?: string;
  refresh_token?: string;
  role?: Role;
}
