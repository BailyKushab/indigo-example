import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class Menu{
  active: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menu: BehaviorSubject<Menu>;

  constructor() {
    this.menu = <BehaviorSubject<Menu>>new BehaviorSubject({});
  }
  setData(active: boolean){
    console.log(active);
    this.menu.next({active: active});
  }
  getData():any{
    return this.menu.asObservable();
  }
}
