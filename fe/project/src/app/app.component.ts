import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  message = '';
  users: any[] = [];
  constructor(private http: HttpClient) { }
  getMessage() {
    this.http.get<any>('http://localhost:3000/api/message')
      .subscribe((res: { message: string; }) => this.message = res.message);
  }
  getUsers() {
    this.http.get<any[]>('http://localhost:3000/api/users')
      .subscribe((res: any[]) => this.users = res);
  }
}
