import { Component, OnInit } from '@angular/core';
import { KycService } from 'src/app/shared/services';

@Component({
  selector: 'app-kyc-req-table',
  templateUrl: './kyc-req-table.component.html',
  styleUrls: ['./kyc-req-table.component.scss']
})
export class KycReqTableComponent implements OnInit {
  kycrequests = [];
  id:any={};
  constructor(private kyc: KycService) { }
  showImageAddress=""
  ngOnInit() {
    this.getKycReq();
  }
  getKycReq() {
    this.kyc.getKycReq().subscribe(
      res => {
        if (res.status) {
          this.kycrequests = res.data;
        }
      }
    );
  }
  showImage(address) {
    this.showImageAddress = address;
  }

  verify(id)
  {
    
    this.id.id=id;
    this.kyc.verifyReq(this.id).subscribe(
      res => {
        if (res.status) {
          console.log(res.status);
          this.getKycReq();
        }
      }
    );
  }
}
