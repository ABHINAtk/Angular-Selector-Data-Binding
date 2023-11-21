import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  public firstName='Abhina';
  public  LastName='TK';
  public Email='abhinashaji@gmail.com';
  public Education='BTech in Computer Engineering';
  public Address='Kozhikode,Kerala,India';
  public Phone='123456789';
  public Skills='HTML,CSS,JavaScript'

}
