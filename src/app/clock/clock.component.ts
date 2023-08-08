import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit{
  currentTime: Date = new Date(); // Initialize with the current date and time
  ngOnInit() {
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    this.currentTime = new Date();
  }

  formatNumber(number: number): string {
    return number < 10 ? '0' + number : number.toString();
  }
  
}
