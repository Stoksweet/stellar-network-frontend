import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Firestore } from '@angular/fire/firestore';

import { collection, doc, getFirestore, updateDoc } from 'firebase/firestore';
import { User } from '../pages/auth/user.model';
import { AuthService } from '../pages/auth/auth.service';
import { StargazerService } from '../services/stargazer.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  private db: Firestore = getFirestore();
  user: User;
  isLoading = true;

  constructor(
    public auth: AuthService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private stargazer: StargazerService
  ) { }

  ngOnInit() {
    this.auth.user$.subscribe(res => {
      this.user = res;
      this.isLoading = false;
    });
  }

  onConnectStargazer() {
    this.stargazer.conect();
  }

}
