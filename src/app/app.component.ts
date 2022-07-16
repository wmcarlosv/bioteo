import { Component } from '@angular/core';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent{
  constructor(private firebaseX: FirebaseX, private plt: Platform) {
    this.plt.ready().then(()=>{
      this.firebaseX.getToken()
        .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
        .catch(error => console.error('Error getting token', error));
      this.firebaseX.onMessageReceived()
        .subscribe(data => console.log(`User opened a notification ${data}`));

      this.firebaseX.onTokenRefresh()
        .subscribe((token: string) => console.log(`Got a new token ${token}`));

        this.firebaseX.subscribe('kinglottery').then((response)=>{
          console.log(response);
        });

      });
  }
}
