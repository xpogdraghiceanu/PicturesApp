import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Poze App';
  users: any;
 
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUSers();
  }

  getUSers() {
    this.http.get("https://localhost:5003/api/users").subscribe(result => {
      this.users = result;
    });
  }

}
