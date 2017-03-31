import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KOLsService } from '../../app/kols.service';
import { KOLProfileJson } from '../kol-profilejson/kol-profilejson';

declare let d3: any;

@Component({
  templateUrl: './scatterplot.html',
  selector: 'scatterplot'
})

export class Scatterplot implements OnInit {
  options;
  data;
  kols: any[];
  id: any;

  constructor(
    public navCtrl: NavController,
    private kolService: KOLsService ) { }


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
          axisLabel: 'Belief',
          tickFormat: function (d) {
            return d3.format('.02f')(d);
          }
        },
        yAxis: {
          axisLabel: 'Behavior',
          tickFormat: function (d) {
            return d3.format('.02f')(d);
          },
          axisLabelDistance: -5
        },
        showLegend: false,
        tooltip: {
          contentGenerator: function (e) {
            var series = e.series[0];
            if (series.value === null) return;

            return "<div class='kol-card'><header><img src='./assets/custom/user-icon.png' /></header><section><h1 class='name'>" + series.name + "</h1><p>" + series.status + "</p><a href='goToKOL("+series.Id+")'>View KOL</a></section></div>";
          }
        }
      }
    }
    this.data = this.kolService.getKOLsForScatter();
  }

  // Load a single KOL
  goToKOL(id) {
    console.log(id);
    this.navCtrl.push(KOLProfileJson, {
      id: id
    });
  }
  
}
