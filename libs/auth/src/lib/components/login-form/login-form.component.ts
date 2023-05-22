import {Component, EventEmitter, Output} from '@angular/core';
import {Authenticate} from "@language-ui/data-models";

@Component({
  selector: 'language-ui-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  @Output() submit = new EventEmitter<Authenticate>();

  public login(authenticate: Authenticate) {
    this.submit.emit(authenticate);
  }
}
