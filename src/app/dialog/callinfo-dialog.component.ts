import { Inject } from '@angular/core';
import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'app-call-info-dialog',
    templateUrl: './callinfo-dialog.component.html',
    styleUrls: ['./callinfo-dialog.component.scss']
})
export class CallInfoDialogComponents {
    constructor(
        public dialogRef: MatDialogRef<CallInfoDialogComponents>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) { }
}

export interface DialogData {
    peerId?: string;
    isEditMode: boolean
}