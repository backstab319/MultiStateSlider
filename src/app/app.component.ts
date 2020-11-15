import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public slideVal: string = String();
  public toggleForm: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.toggleForm = this.fb.group({
      toggle: ['']
    });
    this.toggleForm.valueChanges.subscribe(val => this.toggleHandler(val));
  }

  public toggleHandler = (val: any): void => {
    this.snackBar.open(`The value is ${val.toggle}`, 'Ok');
    console.log(val);
  };
}
