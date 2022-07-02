import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup,  Validators } from '@angular/forms';
import { ApiService } from '../../servicios/api/api.service';
import { Login } from 'src/app/model/login.interface';
import { Response } from 'src/app/model/response.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    correo : new FormControl('',Validators.required),
    pass: new FormControl('', Validators.required)
  })

  constructor(private api:ApiService, private router:Router) { }
  errorStatus: boolean = false;
  errorMsj:any = "";

  ngOnInit(): void {
  }

  onLogin(form:FormGroup){

    this.api.loginByEmail(form.value).subscribe(data=>{
      let dataResponse:Response = data;
      if(dataResponse.message == "ok"){
        this.router.navigate(['dashboard']);
      }else{
        this.errorStatus=true;
        this.errorMsj="Datos invalidos";
      }
    })

  }

}
