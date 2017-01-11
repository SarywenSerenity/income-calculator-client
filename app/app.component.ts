import { Component, OnInit } from '@angular/core';
import { incomeData } from './income-data.interface';

@Component({
  moduleId: module.id,
  selector: 'income-calculator',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  public data: incomeData; // our model

  ngOnInit() {
    this.data = {
      payment: null, 
      frequency: '', 
      taxableInterest: null, 
      unemploymentBenefits: null, 
      filingStatus: {
        primary: '', 
        secondary: ''
      },
      dependent: null
    }
  }

  save(model: incomeData, isValid: boolean) {
    // check if model is valid
    // if valid, call API to save customer
    console.log(model, isValid);
  }
}