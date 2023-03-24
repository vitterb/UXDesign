import { Component, OnInit } from '@angular/core';
import { UXserviceService } from '../services/uxservice.service';

@Component({
  selector: 'app-scrollwheel',
  templateUrl: './scrollwheel.component.html',
  styleUrls: ['./scrollwheel.component.css']
})
export class ScrollwheelComponent implements OnInit {

  location: string = "";
  locations: string[] = ["Costa","Toilets","Classroom","Offices", "Janitors","Receptionist","Entrance"];
  start: boolean = false;

  constructor(private uxService: UXserviceService){}

  ngOnInit(){
    this.start = this.uxService.startbutton();
  }

  addStop(){
    if(this.location == 'Classroom'){
      let input = prompt('please enter the 4 digit number of the classroom');
      if(input && input.length == 4){
        this.location = "p" + input;
      } else
      {
        alert('invalid');
        return;
      }
    }
    if(this.location == 'Offices'){
      let input = prompt('please enter the 4 digit number of the office');
      if(input && input.length == 4){
        this.location = "s" + input;
      } else
      {
        alert('invalid');
        return;
      }
    }
    this.uxService.addStop(this.location);
  }
}

