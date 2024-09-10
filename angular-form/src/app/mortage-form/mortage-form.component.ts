import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-mortage-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './mortage-form.component.html',
  styleUrl: './mortage-form.component.css'
})
export class MortageFormComponent {

  mortageForm = new FormGroup({

  })

  get f() {
    return this.mortageForm.controls;
  }
}
