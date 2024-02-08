import { Injectable } from '@angular/core';
import { TuiAlertService, TuiNotification } from '@taiga-ui/core';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private alerts: TuiAlertService) {}

  showError(msg: string) {
    this.alerts.open(msg, { status: TuiNotification.Error }).subscribe();
  }

  showInfo(msg: string) {
    this.alerts.open(msg, { status: TuiNotification.Info }).subscribe();
  }

  showSuccess(msg: string) {
    this.alerts.open(msg, { status: TuiNotification.Success }).subscribe();
  }

  showWarning(msg: string) {
    this.alerts.open(msg, { status: TuiNotification.Warning }).subscribe();
  }
}
