import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public slideVal: string = String();
  public toggleForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.toggleForm = this.fb.group({
      toggle: ['']
    });

    this.toggleForm.valueChanges.subscribe(val => this.toggleHandler(val));
  }

  public toggleHandler = (val: string): void => {
    console.log(val);
  };
}
