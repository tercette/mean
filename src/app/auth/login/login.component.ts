import { AuthService } from './../auth.service';
import { HttpClient } from '@angular/common/http';
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading = false;

  constructor( public authservice: AuthService ,private http: HttpClient){}

  onLogin(form: NgForm) {
    if(form.invalid) {
      return;
    }
    this.authservice.login(form.value.email, form.value.password);
  }
}
