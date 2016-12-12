import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-relationship',
  templateUrl: 'relationship.html'
})
export class Relationship {
  constructor(public navCtrl: NavController) {
  }
}

declare let d3: any;

@Component({
  selector: 'relamain',
  template: `
  <ion-content>
   <div class="global-nav cf">
        <div class="logo">
            <img src="../assets/custom/logo.png" />
        </div>
        <ul>
            <li><a href="#"><ion-icon name="md-heart"></ion-icon></a></li>
            <li><a href="#"><ion-icon name="ios-ribbon"></ion-icon> Top 40</a></li>
            <li><a href="#">Rising Stars</a> </li>
            <li><a href="#">Export List</a></li>
        </ul>
        <div class="actions">
            <button>Compare KOLs</button>
            <button>Adjust Filters</button>
        </div>
    </div> 


    <div class="filter-nav cf">
        <div class="filter-title"> Viewing: </div>
        <div class="filter-list">
            <div class="filter-item"><a href="#">Surgery (25)</a></div>
            <div class="filter-item"><a href="#">M.D. (45)</a></div>
            <div class="filter-item"><a href="#">Ph.D. (15)</a></div>
        </div>
    </div> 
    <div>
      <nvd3 [options]="options" [data]="data"></nvd3>
    </div>
    </ion-content>
  `
})

export class Relamain implements OnInit {
  options;
  data;
  ngOnInit(){
    this.options = {
        chart: {
          type: 'scatterChart',
          height: 450,
          color: d3.scale.category10().range(),
          scatter: {
            onlyCircles: true
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
