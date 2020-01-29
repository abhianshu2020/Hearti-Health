import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from '../../services/auth/auth-service.service';

@Component({
  selector: 'ngx-p-login',
  templateUrl: './p-login.component.html',
  styleUrls: ['./p-login.component.scss']
})
export class PLoginComponent implements OnInit {
  items;
  checkoutForm; 
  submitted;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthServiceService) {
   this.checkoutForm = this.formBuilder.group({
     email: ['', Validators.required],
     password: ['', Validators.required],
   });
 }

 onSubmit() {
  this.submitted = true;

  //this.checkoutForm.reset();

  this.authService.login(this.checkoutForm.value).subscribe((response: any) => {
   alert(response);
    });

  // stop here if form is invalid
  if (this.checkoutForm.invalid) {
      return;
  }
}

  ngOnInit() {
  }

}
