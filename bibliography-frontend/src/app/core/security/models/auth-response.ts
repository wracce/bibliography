import { Role } from "../../models/role";

export class AuthResponse {
  access_token?: string;
  role?: Role;
}
