import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginUser(signInForm: NgForm) {
    console.log(signInForm);
  }
}
