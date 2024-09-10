import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgClass, NgIf } from "@angular/common";

@Component({
  selector: 'app-mortage-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './mortage-form.component.html',
  styleUrl: './mortage-form.component.css'
})
export class MortageFormComponent {

  repaymentAmount: string = '';
  totalRepayment: string = '';

  mortageForm = new FormGroup({
    mortageAmount: new FormControl(10000, [Validators.required, Validators.min(1000)]),
    mortageTerm: new FormControl(15, [Validators.required, Validators.min(10)]),
    interestRate: new FormControl(3, [Validators.required, Validators.min(3), Validators.max(7)]),
  })

  get f() {
    return this.mortageForm.controls;
  }

  calculateRepayments() {
    const { mortageAmount, mortageTerm, interestRate } = this.mortageForm.value;
    if (mortageAmount !== null && mortageTerm !== null && interestRate !== null) {
      const monthlyInterest = (interestRate as number) / 100 / 12;
      const monthlyPayment = (mortageAmount as number) * monthlyInterest / (1 - Math.pow(1 + monthlyInterest, -(mortageTerm as number) * 12));

      this.repaymentAmount = monthlyPayment.toFixed(2);
      this.totalRepayment = (monthlyPayment * (mortageTerm as number) * 12).toFixed(2);
    }
  }

  resetForm() {
    this.mortageForm.reset();
    this.repaymentAmount = '';
    this.totalRepayment = '';
  }
}
