import { HttpApiErrorStatus } from './http-api-error-status';

export class ErrorMessage {
  statusCode!: string;
  timestamp!: string;
  message!: string;
  description!: string;
}
