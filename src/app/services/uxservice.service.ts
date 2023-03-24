import { Injectable } from '@angular/core';
import * as _ from "lodash"

@Injectable({
  providedIn: 'root'
})
export class UXserviceService {

  stops: string[] = []
  start: boolean = false;

  constructor() { }

  GetStops() {
    return this.stops;
  }
  addStop(stop: string){
    this.stops.push(stop);
  }
  removeStop = (index:number) => this.stops.splice(index,1)

  startbutton = () => this.start = true;
}
