import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmedValidator } from '../custom-validators';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  title: 'registration';
  showModal: boolean;
  // registerForm: FormGroup;
  submitted = false;

  constructor(public service: UserService,private formBuilder: FormBuilder, private _router: Router) { }
  
  ngOnInit(): void {
    this.service.formModel.reset();

    //Add User form validations
    // this.registerForm = this.formBuilder.group({
    
    //   FirstName: ['',[Validators.required,  Validators.minLength(2), Validators.pattern('^[_A-z]*((-|\s)*[_A-z])*$')]],

    //   LastName: ['',[Validators.required,  Validators.minLength(2), Validators.pattern('^[_A-z]*((-|\s)*[_A-z])*$')]],

    //   UserName: ['',[Validators.required,  Validators.minLength(2), Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],

    //   Email: ['', [Validators.required, Validators.email]],
     
    //   Password: ['', [Validators.required, Validators.minLength(8),Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],

    //   confirmpassword: ['', [Validators.required, Validators.minLength(6),Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]]
    //   },{ 
    //     validator: ConfirmedValidator('password', 'confirmpassword')
    //   }
    //   );
  }

  get f() { return this.service.formModel.controls; }
  
  onSubmit() {



    this.submitted = true;
    // stop here if form is invalid
    if (this.service.formModel.invalid) {
        return;
    }
    if(this.submitted)
    {
      this.service.register().subscribe(
        (res : any) => {
          if(res.succeeded){
            this.service.formModel.reset();
            // this._router.navigate(['/user/login']);
            this._router.navigate(['/login'])
            this.showModal = false;
            console.log("WOW!! You have successfully Registered..Directing to Login");
          } else{
            res.errors.forEach((element: any) => {
              switch(element.code){
                case 'DuplicateUserName':
                  alert('UserName already exist');
                  break;
                default:
                  alert('Error Occured');
                  break;
              }
            });
          }
        },
        err => 
        {
          console.log(err);
        }
      );
    }
  }
  gotologin(){
    this._router.navigate(['/login'])
  }
  close(){
    this._router.navigate(['/'])
  }
}
