import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Person } from '../../../core/models/person.model';
import { formValidators } from '../../../constants/formvalidations';
import { NotoficationsComponent } from '../notofications-component/notofications-component';
import { SkeltonLoaderComponent } from '../skelton-loader-component/skelton-loader-component';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { StoreService } from '../../../core/data/userStore.service';
@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [FormsModule, CommonModule, NotoficationsComponent, SkeltonLoaderComponent],
  templateUrl: './person-form.html',
  styleUrls: ['./person-form.css']
})
export class PersonForm {
  person: Person = {
    companyName: '',
    name: '',
    email: '',
    password: '',
    isRegister: true
  };

  notifications: string[] = [];


  constructor(private authService: AuthService, private router: Router, private userstoreService: StoreService ) {}


  handelForm() {
    if (this.person.isRegister) {
      console.log('Registering:', this.person);
      this.notifications = formValidators(this.person, ['companyName', 'name', 'email', 'password']); 
      if (this.notifications.length > 0) {
        console.error('Validation Errors:', this.notifications);
        return;
      }
      // Add logic for registration (e.g., API call)
      this.authService.registerUser(this.person).subscribe(
        (responce) => {
          console.log('Registration is cool', responce);
          this.notifications = ['Register is Sucessfull - You can login now!'];
          // Reset form fields
          this.person = {
            companyName: '',
            name: '',
            email: '',
            password: '',
            isRegister: false,
          };
          // Redirect to /dashboard
        //  this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error('Registration failed:', error);
        }
      );
    } else {
      console.log('Logging in:', this.person);
      this.notifications = formValidators(this.person, ['email', 'password']); 
      if (this.notifications.length > 0) {
        console.error('Validation Errors:', this.notifications);
        return;
      }
      
      // Add logic for login (e.g., API call)
      this.authService.loginUser({ email: this.person.email, password: this.person.password }).subscribe(
        (response) => {
          console.log('Login successful:', response);
          this.userstoreService.setUser(response);
          this.notifications = ['Login successful! Redirecting to dashboard...'];
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error('Login failed:', error);
          this.notifications = ['Login failed. Please check your credentials and try again.'];
        }
      );
    }
  }

  toggleForm() {
    this.person.isRegister = !this.person.isRegister;
  }
}
