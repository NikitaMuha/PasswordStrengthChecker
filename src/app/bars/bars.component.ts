import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bars.component.html',
  styleUrl: './bars.component.scss'
})
export class BarsComponent {
@Input() strength: string = '';

}
