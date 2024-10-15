import { Component, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() form!: FormGroup;
  @Input() labelFor: string = '';
  @Input() labelText: string = '';
  @Input() placeholder: string = '';
  inputValue: string = '';

  constructor(){
  }
  
}


