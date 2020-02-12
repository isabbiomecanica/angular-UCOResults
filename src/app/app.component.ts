import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

//import { AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import 'firebase/firestore';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  title = 'Tour of Heroes';
  items: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
   // this.items = firestore.collection('items').valueChanges();
  }
}
