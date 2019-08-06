import { Component, OnInit, NgZone, Input, Output, EventEmitter } from '@angular/core';
import { from } from 'rxjs';
// import Web3 from 'web3';
// import solc from 'solc';
// const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8546', null, {});

@Component({
  selector: 'app-admin-token-view',
  templateUrl: './admin-token-view.component.html',
  styleUrls: ['./admin-token-view.component.scss']
})
export class AdminTokenViewComponent implements OnInit {
  @Input() token: any;
  @Output() closingTrigger = new  EventEmitter<boolean>();
  constructor(private zone: NgZone) {
  }

  ngOnInit() {
    // this.grantAccess().then(() => this.getAccounts());
  }

//  getAccounts() {
//     this.zone.run(() => {
//       from(web3.eth.getAccounts()).subscribe(res => {
//         console.log(res);
//         console.log(web3.eth.net.isListening().then(console.log(true)));
//       });
//     }
//     ); 
//   }
  closeView() {
    this.closingTrigger.emit(true);
  }
  // grantAccess() {
  //   let promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if ((window as any)[ 'ethereum' ]) {
  //         console.log('inPromise');
  //         try {
  //             // Request account access if needed
  //             if ((window as any)['ethereum'].enable()) {
  //               resolve();
  //             }
  //         } catch (error) {
  //           reject();
  //         }
  //         console.log('calling resolve')
  //     }
  //     }, 1000);
  //   });
  //   return promise;
  // }
  deployToken() {
    console.log(this.token);
  }
}
