import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private isCallStartedBs = new BehaviorSubject(false);
  public isCallStarted$ = this.isCallStartedBs.asObservable();
}
