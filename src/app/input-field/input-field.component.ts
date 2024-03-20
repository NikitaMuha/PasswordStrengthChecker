import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { StrenghtService } from '../strenght-service';
import { BarsComponent } from '../bars/bars.component';



@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BarsComponent,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputFieldComponent,
    }
  ],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss'
})

export class InputFieldComponent {
  passwordControl = new FormControl('');
  inputValue: string = '';
  pStr: string = '';

  constructor(private strCheck: StrenghtService, private cdr: ChangeDetectorRef) {}

  onInputChange() {
    this.inputValue = this.passwordControl.value as string;

    if (this.inputValue !== null) {
      this.pStr = this.strCheck.getPasswordStrength(this.inputValue);
      this.cdr.detectChanges();
    } else {
      console.log("Input value is null.");
    }
  }
}

