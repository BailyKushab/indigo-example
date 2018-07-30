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
    name: "Trevor Robinson"
  }
  options: Option[] = [
    {display: "My Schedule & Bidding", suboptions: [{
          display: "Reporting", 
          suboptions:[{
              display: "I-21 Injury Reporting", 
              suboptions:[]
            },{
              display: "ASAP Reporting", 
              suboptions:[]
            },{
              display: "General ASAP Information", 
              suboptions:[]
            },{
              display: "FlightAttendant Incident Report", 
              suboptions:[]
          }]
        },{
          display: "Agriculture and Customs", 
          suboptions:[]
        },{
          display: "Known Crewmember", 
          suboptions:[]
        },{
          display: "Product Safety Data Search", 
          suboptions:[]
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

  constructor(private menuService:MenuService) { }

  ngOnInit() {
    // this.menu = this.menuService.getData();
    this.getMenuData();
  }

  getMenuData() {
    this.menuService.getData().subscribe(menu => this.menu = menu);
  }

  selectedOption: Option;
  selectedSubOption: Option;

  onSelect(option: Option): void {
    this.selectedOption = option;
    console.log(this.selectedOption.display);
    if(this.selectedOption.suboptions != undefined){
      console.log(this.selectedOption.suboptions);
    }
  }
  onSelectSub(option: Option): void {
    this.selectedSubOption = option;
    console.log(this.selectedSubOption.display);
    if(this.selectedSubOption.suboptions != undefined){
      console.log(this.selectedSubOption.suboptions);
    }
  }

}
