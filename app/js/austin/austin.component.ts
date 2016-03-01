import { Component } from 'angular2/core';

import { VizMenu } from './viz-menu.component';
import { GraphViz } from './graph-viz.component';

@Component({
  selector: 'austin-component',
  directives: [ VizMenu, GraphViz ],
  template: `
    <div>
      <viz-menu (setIs3d)="setIs3d($event)"></viz-menu>
      <graph-viz [options]="options"></graph-viz>
    </div>
  `
})
export class AustinComponent {
  options: any;

  constructor() {
    this.options = { layout: { is3d: false } };
  }

  setIs3d(val) {
    this.options.layout.is3d = val;
  }

}