import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
// declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router:Router) {
  }

  ngOnInit() {
    // this.setUpAnalytics();
  }
  title = 'LTHD-FE';

  // setUpAnalytics() {
  //   this.router.events.pipe(filter(event => event instanceof NavigationEnd))
  //     .subscribe((event: any) => {
  //       console.log(event.urlAfterRedirects)
  //       gtag('config', 'G-CS300YPFLY',
  //         {
  //           'page_path': event.urlAfterRedirects
  //         }
  //       );
  //     }
  //   );
  // }
  
}
