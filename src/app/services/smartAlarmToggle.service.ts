import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SmartAlarmToggleService {
  private buttonClickedSource = new Subject<void>();
  buttonClicked$ = this.buttonClickedSource.asObservable();

  emitButtonClick() {
    this.buttonClickedSource.next();
  }
}
