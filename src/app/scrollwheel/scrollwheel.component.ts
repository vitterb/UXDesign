import { Component } from '@angular/core';
import { UXserviceService } from '../services/uxservice.service';

@Component({
  selector: 'app-scrollwheel',
  templateUrl: './scrollwheel.component.html',
  styleUrls: ['./scrollwheel.component.css']
})
export class ScrollwheelComponent {

  location: string = "";
  locations: string[] = ["Costa","Toilets","Classroom","Offices"];

  constructor(private uxService: UXserviceService){}

  addStop(){
    if(this.location == 'Classroom'){
      let input = prompt('please enter the number of the classroom');
      if(input && input.length == 4){
        this.location = input;
      } else
      {
        console.log('invalid');
        return;
      }
    }
    this.uxService.addStop(this.location);
  }
}

