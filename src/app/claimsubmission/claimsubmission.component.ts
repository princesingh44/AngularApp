import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ClaimspopupComponent } from './claimspopup/claimspopup.component';

@Component({
  selector: 'app-claimsubmission',
  templateUrl: './claimsubmission.component.html',
  styleUrls: ['./claimsubmission.component.css']
})
export class ClaimsubmissionComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  submit(){
    const dialogRef = this.dialog.open(ClaimspopupComponent, {
      width: 'auto',
      height:'auto',
      data: {}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
}
