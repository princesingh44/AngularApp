import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-popupmember',
  templateUrl: './popupmember.component.html',
  styleUrls: ['./popupmember.component.css']
})
export class PopupmemberComponent implements OnInit {


  ngOnInit() {
  }
  constructor(
    public dialogRef: MatDialogRef<PopupmemberComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
