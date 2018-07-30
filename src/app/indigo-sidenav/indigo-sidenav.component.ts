import { Component, OnInit } from '@angular/core';
import { Option } from '../option';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-indigo-sidenav',
  templateUrl: './indigo-sidenav.component.html',
  styleUrls: ['./indigo-sidenav.component.css']
})
export class IndigoSidenavComponent implements OnInit {
  user = {
    name: "John Smith"
  }
  options: Option[] = [
    {display: "My Schedule & Bidding", suboptions: [{
          display: "Reporting", 
          suboptions:[{
              display: "I-21 Injury Reporting"
            },{
              display: "ASAP Reporting"
            },{
              display: "General ASAP Information"
            },{
              display: "FlightAttendant Incident Report"
          }]
        },{
          display: "Agriculture and Customs"
        },{
          display: "Known Crewmember"
        },{
          display: "Product Safety Data Search"
        }]
    },
    {display: "Safety", suboptions: [{
          display: "Reporting", 
          suboptions:[{
              display: "I-21 Injury Reporting"
            },{
              display: "ASAP Reporting"
            },{
              display: "General ASAP Information"
            },{
              display: "FlightAttendant Incident Report"
          }]
        },{
          display: "Agriculture and Customs", 
          suboptions:[{
              display: "I-21 Injury Reporting"
            },{
              display: "ASAP Reporting"
            },{
              display: "General ASAP Information"
            },{
              display: "FlightAttendant Incident Report"
          }]
        },{
          display: "Known Crewmember"
        },{
          display: "Product Safety Data Search"
        }]
    },
    {display: "Training"},
    {display: "Administration"},
    {display: "Catering & Brand"},
    {display: "Hotels"},
    {display: "My Base"},
    {display: "Recognition"},
    {display: "My Leadership Team"}
  ]

  menu:any = {active:false};

  nullOption:Option = {
    display: "null"
  }

  constructor(private menuService:MenuService) { }

  ngOnInit() {
    // this.menu = this.menuService.getData();
    this.getMenuData();
  }

  getMenuData() {
    this.menuService.getData().subscribe(menu => this.menu = menu);
  }

  selectedOption: Option;
  hideSubOptions: boolean = false;
  selectedSubOption: Option;
  hideOtherSubOptions: boolean = false;

  onSelect(option: Option): void {
    this.selectedOption = option;
    console.log(this.selectedOption.display);
    if(this.selectedOption.suboptions != undefined){
      console.log(this.selectedOption.suboptions);
    }
    this.hideSubOptions = !this.hideSubOptions;
  }
  onSelectSub(option: Option): void {
    if(this.selectedSubOption === option){
      //reset the submenu
      this.selectedSubOption = this.nullOption;
    }
    else{
      this.selectedSubOption = option;
    }
    console.log(this.selectedSubOption.display);
    if(this.selectedSubOption.suboptions != undefined){
      console.log(this.selectedSubOption.suboptions);
    }
    this.hideOtherSubOptions = !this.hideOtherSubOptions;
  }

  onResetMenu(): void{
    this.selectedOption = this.nullOption;
    this.selectedSubOption = this.nullOption; 
    this.hideOtherSubOptions = false;
    this.hideSubOptions = false;
  }
  
}

