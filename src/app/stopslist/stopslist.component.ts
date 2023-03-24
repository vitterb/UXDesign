import { Component } from '@angular/core';
import { UXserviceService } from '../services/uxservice.service';

@Component({
  selector: 'app-stopslist',
  templateUrl: './stopslist.component.html',
  styleUrls: ['./stopslist.component.css']
})
export class StopslistComponent {

  Stops: string[] = [];

  constructor(private uxService: UXserviceService){}

  ngOnInit(){
    this.Stops = this.uxService.GetStops();
  }
  removeStop(index:number){
    this.uxService.removeStop(index);
  }
}
