import { Component, OnInit } from '@angular/core';
import { ServiceService } from "./service.service";

export interface Users {
  id: number,
  name: string,
  phone: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  expression: boolean = true;
  deepObject: any = null;

  // users: Users[] = [
  //   { id: 1, name: 'Almas', template: 'bold' },
  //   { id: 2, name: 'Arsen', template: 'italic' },
  //   { id: 3, name: 'Marlen', template: 'unknown' },
  // ];

  table = 'List of users';

  users$: Users[] = [];

  template = `<b>Bold text</b>`;

  public phone = '546546';
  public user = {
    name: 'John',
    surname: 'Dos',
  };


  login = '';
  password = '';

  constructor(private service: ServiceService) {
    this.service.getUsers().subscribe(data => this.users$ = data);
  }

  get fullName() {
    return this.user.name + ' ' + this.user.surname;
  }

  ngOnInit(): void {
    setTimeout(() => this.updatePhone(), 2000);
  }

  updatePhone(): void {
    this.phone = Math.round(Math.random() * 1000000) + '';
  }

  onInput(event: Event, num: number, user: any): void {
    const target = event.target as HTMLInputElement;
    this.phone = target.value;
    console.log(num, user);
  }

  onSubmit() {
    if (this.login && this.password) {
      alert(
        `You are aithorized as ${this.login} with password ${this.password}`
      );
      this.login = this.password = '';

      return;
    }

    alert('login and password are required fields!');
  }

  generateUser() {
    this.deepObject = {
      user: {
        name: 'Joseph',
        surname: 'Day',
      },
    };
  }

  trackBy(index: number, user: Users) {
    return user.id;
  }
}
