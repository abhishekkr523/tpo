import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gecjTpoApp';

   // Initialize a variable to track the menu's open state
  isMenuOpen = false;

 // Function to toggle the menu's open/close state
toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}




  lastDate!: Date;

  ngOnInit() {
    // Initially set the last date
    this.updateLastDate();

    // Update the last date every second (adjust the interval as needed)
    setInterval(() => {
      this.updateLastDate();
    }, 1000);
  }

  updateLastDate() {
    this.lastDate = new Date();
  }
}
