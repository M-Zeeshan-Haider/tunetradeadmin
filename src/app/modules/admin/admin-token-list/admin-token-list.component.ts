import { Component, OnInit } from '@angular/core';
import { tokenListViewTransition } from 'src/app/shared/animations/token-list-view-animation';
import { GetTokenRequestsService } from 'src/app/shared/services/index';


@Component({
  selector: 'app-admin-token-list',
  templateUrl: './admin-token-list.component.html',
  styleUrls: ['./admin-token-list.component.scss'],
})
export class AdminTokenListComponent implements OnInit {
  viewToken = null;
  // private viewTable = true;
  // windowsPosition = null;
  tokens = [
  ];
  constructor() { }

  ngOnInit() {
  }
};
