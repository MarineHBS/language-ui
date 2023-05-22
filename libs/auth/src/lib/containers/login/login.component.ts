import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'language-ui-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit{
  ngOnInit() {
  }

  public login(event: any) {
    console.log(event);
  }
}
