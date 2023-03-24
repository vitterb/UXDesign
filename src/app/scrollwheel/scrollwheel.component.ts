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
    this.uxService.addStop(this.location);
  }
}

