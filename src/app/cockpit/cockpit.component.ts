import {Component, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() nameo = new EventEmitter<{ name: string , content: string }>();
  @Output() nameo1 = new EventEmitter<{ name: string , content: string }>();


  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit() {
  }
  happen() {
    this.nameo.emit({name: this.newServerName , content: this.newServerContent});
  }

  happen1() {
    this.nameo1.emit({name: this.newServerName , content: this.newServerContent});
  }
}
