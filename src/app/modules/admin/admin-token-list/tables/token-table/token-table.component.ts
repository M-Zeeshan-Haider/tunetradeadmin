import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetTokenRequestsService } from 'src/app/shared/services';
import { tokenListViewTransition } from 'src/app/shared/animations/token-list-view-animation';

@Component({
  selector: 'token-table',
  templateUrl: './token-table.component.html',
  styleUrls: ['./token-table.component.scss'],
  animations: [
    tokenListViewTransition
  ]
})
export class TokenTableComponent implements OnInit {
  tokens: any[];
  viewToken: any;
  @Output() refreshLiveTokenTrigger = new EventEmitter<boolean>();
  constructor(private getTokenService: GetTokenRequestsService) { }

  ngOnInit() {
    this.getListTokens();
  }
  getListTokens() {
    this.getTokenService.getListTokens().subscribe(
      res => {
        this.tokens = res.body.data;
      }
    )
  }
  showToken(token) {
    this.viewToken = token;
    window.scroll(0, 0);
  }
  closeView(event) {
    this.viewToken = null;
  }
  refreshTable(event) {
    console.log('in refresh table in token table component')
    this.getListTokens();
    this.refreshLiveTokenTrigger.emit(true);
    this.closeView(event);

  }
}
