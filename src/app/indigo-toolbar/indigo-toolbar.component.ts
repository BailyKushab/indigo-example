import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-indigo-toolbar',
  templateUrl: './indigo-toolbar.component.html',
  styleUrls: ['./indigo-toolbar.component.css']
})
export class IndigoToolbarComponent implements OnInit {

  constructor(private menuService:MenuService) { }

  ngOnInit() {
    //this.menuService.setData(this.data);
  }
  data:any = {active:false};

  toggleMenu(menu){
    this.data.active =!this.data.active;
    this.menuService.setData(this.data);
  }

}
