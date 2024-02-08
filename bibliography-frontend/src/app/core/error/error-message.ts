import { HttpApiErrorStatus } from './http-api-error-status';

export class ErrorMessage {
  statusCode!: HttpApiErrorStatus;
  timestamp!: Date;
  message!: string;
  description!: string;
}
