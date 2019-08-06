import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/index';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuShowSignal = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  menuShow() {
    this.menuShowSignal = !this.menuShowSignal;
  }
  logout() {
    this.authService.logout();
  }
}
