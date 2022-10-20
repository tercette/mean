import { Subscription } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;

  constructor(private AuthService: AuthService) {}

  ngOnInit() {
    this.authListenerSubs = this.AuthService
    .getAuthStatusListener()
    .subscribe(
      (isAuthenticated) => {
        this.userIsAuthenticated = isAuthenticated
      }
    );
  }

  ngOnDestroy() {}
}
