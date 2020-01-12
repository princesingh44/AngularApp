import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ClaimspopupComponent } from '../../claimsubmission/claimspopup/claimspopup.component';
import { payment } from '../../shared/modal/payment';
import { memberdetails } from '../../shared/modal/memberdetails';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  memberDetails = new memberdetails;
  codeGenerated: string;
  paymentJSON = new payment;
  constructor(public dialog: MatDialog, private _APIService: ServiceService) { }

  ngOnInit() {

  }
  confirm() {
    let details = {
      "member_id": this._APIService.id,
      "visit_status": "paid"
    };
    this._APIService.getPayment(details).subscribe(
      (data) => {
        
        console.log(data);
        const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
        const stringLength = 10;
        let randomstring = '';
        for (let i = 0; i < stringLength; i++) {
          const rnum = Math.floor(Math.random() * chars.length);
          randomstring += chars.substring(rnum, rnum + 1);
        }
        this.paymentJSON.username = this.memberDetails.id;
        this.paymentJSON.payment_status = "Successful";
        this.paymentJSON.unique_id = randomstring;
        console.log("i am groot");
        const dialogRef = this.dialog.open(ClaimspopupComponent, {
          width: 'auto',
          height: 'auto',
          data: {}
        });

        dialogRef.afterClosed().subscribe(result => {
          this._APIService.selectedId=0;

        });
      },
      (error) => { }
    );
  }
}

