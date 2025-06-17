import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Person } from '../../../core/models/person.model';
import { formValidators } from '../../../constants/formvalidations';
import { NotoficationsComponent } from '../notofications-component/notofications-component';
import { SkeltonLoaderComponent } from '../skelton-loader-component/skelton-loader-component';

@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [FormsModule, CommonModule, NotoficationsComponent, SkeltonLoaderComponent],
  templateUrl: './person-form.html',
  styleUrls: ['./person-form.css']
})
export class PersonForm {
  person: Person = {
    businessName: '',
    fullName: '',
    userName: '',
    password: '',
    isRegister: true
  };

  errors: string[] = [];

  handelForm() {
    if (this.person.isRegister) {
      console.log('Registering:', this.person);
      this.errors = formValidators(this.person, ['businessName', 'fullName', 'userName', 'password']); 
      if (this.errors.length > 0) {
        console.error('Validation Errors:', this.errors);
        return;
      }
      // Add logic for registration (e.g., API call)
    } else {
      console.log('Logging in:', this.person);
      this.errors = formValidators(this.person, ['userName', 'password']); 
      if (this.errors.length > 0) {
        console.error('Validation Errors:', this.errors);
        return;
      }
      // Add logic for login (e.g., API call)
    }
  }

  toggleForm() {
    this.person.isRegister = !this.person.isRegister;
  }
}
