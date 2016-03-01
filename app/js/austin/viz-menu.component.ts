import {Component, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'viz-menu',
  template: `
    <h1>Viz menu here</h1>
    <p>is3d: {{ is3d }}</p>
    <button (click)="is3d=!is3d;setIs3d.emit(is3d)">Toggle 3d</button>
  `
})
export class VizMenu {
  @Output() setIs3d: EventEmitter<boolean> = new EventEmitter();
  private is3d: boolean = false;

  // toggle3d() {
  //   this.is3d = !this.is3d;
  //   this.setIs3d.emit(this.is3d);
  // }

}