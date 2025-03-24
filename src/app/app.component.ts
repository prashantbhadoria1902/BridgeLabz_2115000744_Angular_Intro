import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule for NgIf

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule], // ✅ Add CommonModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName: string = ""; // ✅ Input value
  errorMessage: string = ""; // ✅ Error message holder

  // ✅ Function to validate the name input
  validateName() {
    const nameRegex = /^[A-Z][a-zA-Z]{2,}$/; // ✅ Starts with Capital & min 3 letters
    if (!nameRegex.test(this.userName)) {
      this.errorMessage = "Invalid Name! It must start with a capital letter and have at least 3 letters.";
    } else {
      this.errorMessage = ""; // ✅ Clear error if valid
    }
  }
}
