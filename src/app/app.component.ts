import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angualar-routing';

  ngOnInit(): void {
    console.log('%cAppComponent.init', 'background-color:green;color:white');
  }
  
}
