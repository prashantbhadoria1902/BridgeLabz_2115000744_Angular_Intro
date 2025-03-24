import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule], // ✅ Use FormsModule instead of NgModel
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName: string = ""; // ✅ Make sure this property exists
}
