import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { KOLsService } from '../../app/kols.service';



declare let d3: any;

@Component({
  selector: 'page-kol-profilejson',
  templateUrl: './kol-profilejson.html'
})

export class KOLProfileJson implements OnInit {

  kols: any;
  kol: any;

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    public loadingController: LoadingController,
    public http: Http,
    private kolService: KOLsService) {
    this.kol = {};
  }

  ionViewWillEnter(id) {
    let loader = this.loadingController.create({
      content: "Loading profile..."
    });

    id = this.params.get('id');

    loader.present().then(() => {
      this.kolService.getKOLs().subscribe(data => {
        var filteredData = data.filter(item => {
          return item.Id == id;
        });
        if (filteredData.length) {
          this.kol = filteredData[0];
        }
        loader.dismiss();
      });

      // this.kolService.getKOL(id).subscribe(data => {
      //   // this.kols = data;
      //   console.log(data);
      //   loader.dismiss();
      // }, 
      // error => {
      //   console.log(error);
      // });
    });
  }

  options;
  data;

  ngOnInit() {
    console.log('init');

    this.options = {
      chart: {
        type: 'scatterChart',
        height: 650,
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




}// keep