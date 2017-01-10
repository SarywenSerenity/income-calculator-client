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
    // payment: number; // required with minimum 5 characters
    // frequency: string;
    // taxableInterest: number;
    // unemploymentBenefits: number;
    // filingStatus: {
    //   primary ?: string; // required
    //   secondary ?: string;
    // }
    this.data = {
      payment: 0, 
      frequency: 'weekly', 
      
    }
  }

  save(model: incomeData, isValid: boolean) {
    // check if model is valid
    // if valid, call API to save customer
    console.log(model, isValid);
  }
}