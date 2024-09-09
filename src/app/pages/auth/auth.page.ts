import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AuthService } from './auth.service';
import { StargazerService } from 'src/app/services/stargazer.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isWalletConnected = false;

  constructor(
    public auth: AuthService,
    private platform: Platform,
    private stargazer: StargazerService
  ) { }

  ngOnInit() {
  }

  onConnectStargazer() {
    this.stargazer.conect();
  }

}
