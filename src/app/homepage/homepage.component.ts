import { Component,OnInit  } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit  {
  name = 'eman';
  constructor() { }

  public day = new Date().getDay();
    ngOnInit(): void {

  }
}
