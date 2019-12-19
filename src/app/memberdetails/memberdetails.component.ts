import { Component, OnInit, Inject } from '@angular/core';
import { memberdetails } from '../shared/modal/memberdetails';
import { ServiceService } from '../service.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { PopupmemberComponent } from './popupmember/popupmember.component';


@Component({
  selector: 'app-memberdetails',
  templateUrl: './memberdetails.component.html',
  styleUrls: ['./memberdetails.component.css']
})
export class MemberdetailsComponent implements OnInit {

  constructor(private _APIService:ServiceService,public dialog: MatDialog) { }
  public details = new memberdetails;
  ngOnInit() {

  }
  verify(){
    // console.log(this.details);
    const dialogRef = this.dialog.open(PopupmemberComponent, {
      width: 'auto',
      height:'auto',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
    this._APIService.getValidation(this.details).subscribe(
      data=>{
        console.log(data);
      }
    );
 }
}
