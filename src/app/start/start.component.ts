import { Component, OnInit } from '@angular/core';
import { UXserviceService } from '../services/uxservice.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  destinations:string[] = [];
  startButtonPressed: boolean = false;

  constructor(private uxService: UXserviceService){}

  ngOnInit(){
    this.destinations = this.uxService.GetStops();
    this.startButtonPressed = this.uxService.startbutton();
  }

  ShowDestinations(){
    return this.destinations;
  }
  buttonpressed =() => this.startButtonPressed = true;

  removeStop(index:number){
    this.uxService.removeStop(index);
  }
}
