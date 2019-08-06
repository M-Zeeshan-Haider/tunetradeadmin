import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { insertTokenFromListModel } from 'src/app/shared/models';
import { GetTokenRequestsService } from 'src/app/shared/services';

@Component({
  selector: 'app-admin-list-token-view',
  templateUrl: './admin-list-token-view.component.html',
  styleUrls: ['./admin-list-token-view.component.scss']
})
export class AdminListTokenViewComponent implements OnInit {
  statusMassage = "";
  @Input() token: any;
  @Output() closeViewTrgger = new EventEmitter<boolean>();
  @Output() refreshTableTrigger    = new EventEmitter<boolean>();
  constructor(private tokenService: GetTokenRequestsService) { }

  ngOnInit() {
  }
  closeView() {
    this.closeViewTrgger.emit(true);
  }
  refreshTableTriggerForParent() {
    this.refreshTableTrigger.emit(true);
  }
  insertToken() {
    let newToken: insertTokenFromListModel = {
      tokenName: this.token.name,
      tokenSymbol: this.token.symbol,
      tokenAddress: this.token.ethAddress,
      tokenDecimals: this.token.decimals
    };
    this.tokenService.insertTokenFromList(newToken).subscribe(res => {
      if ( res.body.status ) {
        this.statusMassage = "created";
        this.refreshTableTriggerForParent();
      } else {
        this.statusMassage = "Internal Server Error"
      }
    });
  }
}
