import { Component, OnInit } from '@angular/core';
import { KycService } from 'src/app/shared/services';
@Component({
  selector: 'app-kyc-vfy-table',
  templateUrl: './kyc-vfy-table.component.html',
  styleUrls: ['./kyc-vfy-table.component.scss']
})
export class KycVfyTableComponent implements OnInit {

  constructor(private kyc: KycService) { }
  kycrequests2 = [];
  id:any={};
  showImageAddress="";
  ngOnInit() {
    this.getKycReq();
  }
  getKycReq() {
    this.kyc.getKycReq().subscribe(
      res => {
        if (res.status) {
          for (let index = 0; index < res.data.length; index++) {
            
            if(res.data[index].status==1)
            this.kycrequests2.push(res.data[index]);
          }
          console.log(this.kycrequests2);
          
        }
      }
    );
  }
  showImage(address) {
    this.showImageAddress = address;
  }

  
}
