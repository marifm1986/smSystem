import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataPassService {
  // private messageSource = new BehaviorSubject<string>('');
  // currentMessage = this.messageSource.asObservable();
  showComponentName = new Subject
  showComponentitle = new Subject
  
  constructor() { }
  transferData(msg: any) {
    this.showComponentName.next(msg);
  }
  componentTtle(title: any) {
    this.showComponentitle.next(title);
  }
}
