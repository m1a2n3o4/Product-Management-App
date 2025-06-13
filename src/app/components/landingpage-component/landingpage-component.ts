import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './user.model'; // Adjust the path as needed

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './landingpage-component.html',
  styleUrls: ['./landingpage-component.css']
})
export class LandingPageComponent {
  user: User = {
    email: '',
    password: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted:', this.user);
    }
  }
}
