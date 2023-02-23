import { HttpService } from './http.service';
import { Component } from '@angular/core';
import { MyService } from './my.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "my-app"
  data: any[];

  constructor(
    private myService: MyService,
    private http: HttpService,
    ) {
    this.data = this.myService.getData();
    console.log(this.data);
    console.log(http.fetchData().pipe((res) => res))
  }
}
