import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Users } from "./app.component";

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  readonly api_url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get<Users[]>(this.api_url);
  }

}
