import { Component, OnInit , OnDestroy } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { AlertService } from '../_service/alert.service'
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})


export class AlertComponent implements OnDestroy {
  private subscription: ISubscription;
  message: any;

  constructor(private alertService: AlertService) { 
    this.subscription = alertService.getMessage().subscribe(message => {this.message = message;})
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
