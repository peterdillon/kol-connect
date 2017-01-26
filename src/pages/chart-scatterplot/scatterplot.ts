import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KOLsService } from '../../app/kols.service'


// @Component({
//   templateUrl: './scatterplot.html'
// })
// export class Main {
//   constructor(public navCtrl: NavController) {
//   }
// }

declare let d3: any;

@Component({
  templateUrl: './scatterplot.html',
  selector: 'scatterplot'
})

export class Scatterplot implements OnInit {
  options;
  data;

  constructor(private kolService: KOLsService) { }

  ngOnInit() {
    console.log('init');

    this.options = {
      chart: {
        type: 'scatterChart',
        height: 600,
        margin: {
          top: 10,
          right: 20,
          bottom: 50,
          left: 60
        },
        color: d3.scale.category10().range(),
        scatter: {
          onlyCircles: false,
          dispatch: {
            elementClick: function (e) { console.log('clicked: ', e); }
          }
        },
        pointRange: [200, 700],
        showDistX: true,
        showDistY: true,
        duration: 650,
        xAxis: {
          axisLabel: 'X Axis',
          tickFormat: function (d) {
            return d3.format('.02f')(d);
          }
        },
        yAxis: {
          axisLabel: 'Y Axis',
          tickFormat: function (d) {
            return d3.format('.02f')(d);
          },
          axisLabelDistance: -5
        },
        tooltip: {
          contentGenerator: function (e) {
            var series = e.series[0];
            if (series.value === null) return;

            return "<div class='kol-card'><header><img src='" + series.imgPath + "' /></span></header><section><h1 class='name'>" + series.name + "</h1><p>" + series.status + "</p><a href='#'>View KOL</a></section></div>";
          }
        }
      }
    }

    this.data = this.kolService.getKOLsForScatter();
  }

}
