import { Component } from '@angular/core';
import { PersonForm } from '../../shared/components/person-form/person-form';

@Component({
  selector: 'app-welcome-page-component',
  standalone: true,
  imports: [PersonForm],
  templateUrl: './welcome-page-component.html',
  styleUrl: './welcome-page-component.css'
})
export class WelcomePageComponent {

}
