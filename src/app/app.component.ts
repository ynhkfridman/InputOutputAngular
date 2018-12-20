import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];

  onAddServe( data: {name: string , content: string}) {
    this.serverElements.push({type: 'server' , name: data.name , content: data.content});
  }
  onAddBlue( data: {name: string , content: string}) {
    this.serverElements.push({type: 'blueprint' , name: data.name , content: data.content});
  }

}
