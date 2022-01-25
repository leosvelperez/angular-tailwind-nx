import { Component, Input } from '@angular/core';

@Component({
  selector: 'angular-tailwind-nx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() href?: string;
}
