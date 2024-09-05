import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService} from './auth.service'
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(
    private auth: AuthService, 
    private router: Router, 
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

      return this.auth.user$.pipe(
           take(1),
           map(user => !!user), // <-- map to boolean
           tap(loggedIn => {
             if (!loggedIn) {
               this.toastCtrl.create({
                  message: 'Please login first.',
                  duration: 4000
               }).then(toastEl => toastEl.present()).catch(err => console.log(err));
               console.log('access denied');
               this.router.navigate(['/auth']);
             }
         })
    )
  }
}