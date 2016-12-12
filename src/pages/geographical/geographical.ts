import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-geographical',
  templateUrl: 'Geographical.html'
})
export class Geographical {
  constructor(public navCtrl: NavController) {
  }
}


declare let d3: any;

@Component({
  selector: 'geomain',
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

export class Geomain implements OnInit{
  options;
  data;
  ngOnInit(){
    this.options = {
      chart: {
        type: 'multiBarChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 45,
          left: 45
        },
        clipEdge: true,
        //staggerLabels: true,
        duration: 500,
        stacked: true,
        xAxis: {
          axisLabel: 'Time (ms)',
          showMaxMin: false,
          tickFormat: function(d){
            return d3.format(',f')(d);
          }
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: -20,
          tickFormat: function(d){
            return d3.format(',.1f')(d);
          }
        }
      }
    }
    this.data = [
      generateDataMultiBar()

    ]
  }
}
function generateDataMultiBar() {
  return stream_layers(3,50+Math.random()*50,.1).map(function(data, i) {
    return {
      key: 'Stream' + i,
      values: data
    };
  });
}

function stream_layers(n, m, o) {
  if (arguments.length < 3) o = 0;
  function bump(a) {
    var x = 1 / (.1 + Math.random()),
      y = 2 * Math.random() - .5,
      z = 10 / (.1 + Math.random());
    for (var i = 0; i < m; i++) {
      var w = (i / m - y) * z;
      a[i] += x * Math.exp(-w * w);
    }
  }
  return d3.range(n).map(function() {
    var a = [], i;
    for (i = 0; i < m; i++) a[i] = o + o * Math.random();
    for (i = 0; i < 5; i++) bump(a);
    return a.map(stream_index);
  });
}

function stream_index(d, i) {
  return {x: i, y: Math.max(0, d)};
}