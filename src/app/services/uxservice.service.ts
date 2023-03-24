import { Injectable } from '@angular/core';
import * as _ from "lodash"

@Injectable({
  providedIn: 'root'
})
export class UXserviceService {

  stops: string[] = []

  constructor() { }

  GetStops() { 
    return this.stops;
  }
  addStop(stop: string){
    this.stops.push(stop);
    console.log('adding:', stop)
  }
  removeStop = (index:number) => this.stops.splice(index,1)
}
