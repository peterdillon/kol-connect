import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-scatterplot',
  templateUrl: 'scatterplot.html'
})
export class Main {
  constructor(public navCtrl: NavController) {
  }
}

declare let d3: any;

@Component({
  templateUrl: 'scatterplot.html',
  selector: 'scatterplot'
})

export class Scatterplot implements OnInit {
  options;
  data;
  ngOnInit(){
    this.options = {
        chart: {
          type: 'scatterChart',
          height: 550,
          margin : {
            top: 150,
            right: 20,
            bottom: 50,
            left: 60
          },
          color: d3.scale.category10().range(),
          scatter: {
            onlyCircles: false
          },
          showDistX: true,
          showDistY: true,
          duration: 350,
          xAxis: {
            axisLabel: 'X Axis',
            tickFormat: function(d){
              return d3.format('.02f')(d);
            }
          },
          yAxis: {
            axisLabel: 'Y Axis',
            tickFormat: function(d){
              return d3.format('.02f')(d);
            },
            axisLabelDistance: -5
          }
        }
    }
    this.data = [
          { key: 'key1', values: [{x: 31, y: 73},{x: 54, y: 39},{x: 35, y: 11},{x: 93, y: 73},{x: 90, y: 21}] },
          { key: 'key2', values: [{x: 88, y: 52},{x: 23, y: 43},{x: 13, y: 33},{x: 98, y: 76},{x: 5, y: 69}] },
          { key: 'key3', values: [{x: 10, y: 10},{x: 20, y: 20},{x: 30, y: 30},{x: 40, y: 40},{x: 50, y: 50}] }
    ];
  }

}
