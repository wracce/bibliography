import { Inject, Injectable } from '@angular/core';
import { TuiAlertService, TuiNotification } from '@taiga-ui/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(@Inject(TuiAlertService) private readonly alerts: TuiAlertService) { }

  showError(msg:string) {
    this.alerts.open(msg,{status: TuiNotification.Error, label:'Привет'}).subscribe()
  }

  showInfo(msg:string) {
    this.alerts.open(msg,{status: TuiNotification.Error}).subscribe()
  }

}
