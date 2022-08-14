import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'beinex-app';
  showSideBar: Boolean = false;
  constructor(private cookieService: CookieService) {

  }

  ngOnInit(): void {
    this.showSideBar = this.cookieService.get('show-nav') && this.cookieService.get('show-nav') == 'true' ? true : false;
  }

  showHideNavBar() {
    this.showSideBar = !this.showSideBar;
    this.cookieService.set('show-nav', "true");
  }
}
