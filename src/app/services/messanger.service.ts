import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessangerService {

  subject = new Subject();

  constructor() { }

  // called from the product item
  sendMsg (product) {
    this.subject.next(product); // triggering an event
  }

  // to be cold inside cart component
  getMsg () {
    return this.subject.asObservable();
  }
}
