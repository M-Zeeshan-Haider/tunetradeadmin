import { Component, OnInit } from '@angular/core';
import { GetTokenRequestsService } from 'src/app/shared/services';

@Component({
  selector: 'app-create-token-table',
  templateUrl: './create-token-table.component.html',
  styleUrls: ['./create-token-table.component.scss']
})
export class CreateTokenTableComponent implements OnInit {
  viewToken: any;
  tokens = [

  ];
  showToken = false;
  constructor(private tokenService: GetTokenRequestsService) { }

  ngOnInit() {
    this.getTokens();
  }
  getTokens() {
    this.tokenService.getAllTokens().subscribe(
      res => {
        this.tokens = res.body.data;
      }
    )
  }
  showTokenTrigger(data) {
    this.viewToken = data;
    this.showToken = !this.showToken;
  }
  closeView(event) {
    this.showToken = false;
  }
}
