import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ConsultService } from 'src/app/components/consultas/consult.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email = "consulta.med@gmail.com"
  senha = "123456"
  constructor( private router : Router, private consultService : ConsultService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email : new FormControl('', [Validators.required, Validators.required, Validators.email]),
      senha : new FormControl('', [Validators.required, Validators.required, Validators.minLength(6)]),
    });
  }

  login() {
    if (this.loginForm.controls['email'].value !== this.email && 
    this.loginForm.controls['senha'].value !== this.senha){
      this.consultService.showMessage("Email ou senha incorretos!");
    }else {
      this.router.navigate([""]);
    }
  }

}
