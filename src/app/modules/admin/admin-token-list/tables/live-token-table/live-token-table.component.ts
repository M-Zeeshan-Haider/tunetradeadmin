import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetTokenRequestsService } from 'src/app/shared/services';
import { tokenListViewTransition } from 'src/app/shared/animations/token-list-view-animation';

@Component({
  selector: 'live-token-table',
  templateUrl: './live-token-table.component.html',
  styleUrls: ['./live-token-table.component.scss'],
  animations: [
    tokenListViewTransition
  ]
})
export class LiveTokenTableComponent implements OnInit {
  viewToken: any;
  @Output() refreshTokenTableTriggerForParent = new EventEmitter<boolean>();
  constructor(private tokenService: GetTokenRequestsService) { }
  liveTokens: any[];
  ngOnInit() {
    this.getLiveTokens();
  }
  getLiveTokens() {
    this.tokenService.getTokenData().subscribe(
      res => {
        console.log(res.body.data)
        this.liveTokens = res.body.data;
      }
    );
  }
  showToken(token) {
    this.viewToken = token;
    window.scroll(0, 0);
  }
  closeView(event) {
    this.viewToken = null;
  }
  removeToken(token) {
    this.tokenService.removeToken(token).subscribe(
      res => {
        if (res.body.status) {
          this.refreshTokenTableTriggerForParent.emit(true);
          this.getLiveTokens();
        }
      }
    );
  }
}
