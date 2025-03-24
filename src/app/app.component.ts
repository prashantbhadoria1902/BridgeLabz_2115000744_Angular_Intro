import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  logoUrl: string = "assets/BL_logo_square_png.png"; // Path to the logo

  launchBridgeLabz() {
    window.open("https://www.bridgelabz.com", "_blank"); // Opens in a new tab
  }
}
