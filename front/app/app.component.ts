import { Component } from "@angular/core";
import { Http } from "@angular/http";

@Component({ template: "hello world", selector: "my-app", providers: [] })
export class AppComponent {
  constructor(private http: Http) {
    this.http.get("/test").subscribe((res) => console.log(res));
  }
}
