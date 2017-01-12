import { Component, OnInit, Injectable } from '@angular/core';
import { incomeData } from './income-data.interface';
import { incomeDataService } from './income-data.service';

@Component({
  moduleId: module.id,
  selector: 'income-calculator',
  templateUrl: 'app.component.html',
})
@Injectable()
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
        secondary: '',
        tertiary: ''
      },
      dependent: null
    }
  }

  save(model: incomeData, isValid: boolean) {
    
    @Inject('incomeDataService');
  
    console.log(JSON.stringify(model), isValid);
  }
}