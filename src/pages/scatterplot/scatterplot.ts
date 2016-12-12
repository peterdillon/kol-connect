import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-scatterplot',
  templateUrl: 'scatterplot.html'
})
export class Scatterplot {
  constructor(public navCtrl: NavController) {
  }
}

declare let d3: any;

@Component({
  // templateUrl: 'scatterplot.html',
  selector: 'main',
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

export class Main implements OnInit{
  options;
  data;
  ngOnInit(){
    this.options = {
      chart: {
        type: 'discreteBarChart',
        height: 450,
         //color: ['#2ca02c', 'darkred'],
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function(d){return d.label;},
        y: function(d){return d.value;},
        showValues: true,
        valueFormat: function(d){
          return d3.format(',.4f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: -10
        }
      }
    }
    this.data = [
      {
        key: "Cumulative Return",
        values: [
          {
            "label" : "A" ,
            "value" : -29.765957771107
          } ,
          {
            "label" : "B" ,
            "value" : 0
          } ,
          {
            "label" : "C" ,
            "value" : 32.807804682612
          } ,
          {
            "label" : "D" ,
            "value" : 196.45946739256
          } ,
          {
            "label" : "E" ,
            "value" : 0.19434030906893
          } ,
          {
            "label" : "F" ,
            "value" : -98.079782601442
          } ,
          {
            "label" : "G" ,
            "value" : -13.925743130903
          } ,
          {
            "label" : "H" ,
            "value" : -5.1387322875705
          }
        ]
      }
    ];
  }

}