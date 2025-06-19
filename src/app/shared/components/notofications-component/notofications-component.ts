import { Component, input, Input  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notofications-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notofications-component.html',
  styleUrl: './notofications-component.css'
})
export class NotoficationsComponent {
  @Input() notifications: string[] = [];
}
