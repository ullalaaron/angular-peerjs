import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { CallInfoDialogComponents, DialogData } from './dialog/callinfo-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private isCallStartedBs = new BehaviorSubject(false);
  public isCallStarted$ = this.isCallStartedBs.asObservable();

  @ViewChild('localVideo') localVideo: ElementRef<HTMLVideoElement>;
  @ViewChild('remoteVideo') remoteVideo: ElementRef<HTMLVideoElement>;

  constructor(public dialog: MatDialog) { }

  public showModal(startCall: boolean): void {
    let dialogData: DialogData = startCall ? ({ peerId: 'test-id', isEditMode: false }) : ({ peerId: null, isEditMode: true });
    const dialogRef = this.dialog.open(CallInfoDialogComponents, {
      width: '250px',
      data: dialogData
    });

    dialogRef.afterClosed()
      .subscribe(result => {
      console.log(result);
    });
  }
}
