import {Component, Input } from 'angular2/core';

@Component({
  selector: 'graph-viz',
  template: `
    <h1>graph viz here</h1>
    <p>Options->3d: {{ options.layout.is3d }}</p>
  `
})
export class GraphViz {
  @Input() options:any;

  constructor() {
  }

}
