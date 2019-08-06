import { Component, OnInit } from '@angular/core';
import { GetTokenRequestsService } from 'src/app/shared/services';

@Component({
  selector: 'app-deploy-token-table',
  templateUrl: './deploy-token-table.component.html',
  styleUrls: ['./deploy-token-table.component.scss']
})
export class DeployTokenTableComponent implements OnInit {
  tokens : any[];
  constructor(private tokenService: GetTokenRequestsService) { 
    this.getDeployedTokens();
  }

  ngOnInit() {
  }
  getDeployedTokens() {
    this.tokenService.getDeployTokens().subscribe(
      res => {
        console.log(res.body);
        this.tokens = res.body.data;
      }
    );
  }
}
