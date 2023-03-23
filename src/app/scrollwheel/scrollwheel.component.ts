import { Component } from '@angular/core';

@Component({
  selector: 'app-scrollwheel',
  templateUrl: './scrollwheel.component.html',
  styleUrls: ['./scrollwheel.component.css']
})
export class ScrollwheelComponent {

  location: number = 1;
  locations: string[] = ["Costa","Toilets","Classroom","Offices"];
}

