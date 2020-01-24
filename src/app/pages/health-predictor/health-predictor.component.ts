import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-health-predictor',
  templateUrl: './health-predictor.component.html',
  styleUrls: ['./health-predictor.component.scss']
})
export class HealthPredictorComponent implements OnInit {
  items;
  checkoutForm; 
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({      
      age: ['', Validators.required],
      sex: ['', Validators.required],
      cp: ['', Validators.required],
      trestbps: ['', Validators.required],
      chol: ['', Validators.required],
      fbs: ['', Validators.required],
      restecg: ['', Validators.required],
      thalach: ['', Validators.required],
      exang: ['', Validators.required],
      oldpeak: ['', Validators.required],
      slope: ['', Validators.required],
      ca: ['', Validators.required],
      thal: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit(predictionData) {
    // Process checkout data here
    console.warn('Your form has been submitted', predictionData);

    this.submitted = true;

    this.checkoutForm.reset();
    // stop here if form is invalid
    if (this.checkoutForm.invalid) {
        return;
    }
    
  }

  // convenience getter for easy access to form fields
  get f() { return this.checkoutForm.controls; }
}
