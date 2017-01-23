import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-barchart',
  templateUrl: './barchart.html'
})

export class Main {
  constructor(public navCtrl: NavController) {
  }
}

declare let d3: any;

@Component({
  templateUrl: './barchart.html',
  selector: 'barchart'
})

export class Barchart implements OnInit {

  options;
  data;

  constructor() { }

  ngOnInit() {
    this.options = {
      chart: {
        type: 'discreteBarChart',
        height: 650,
        margin: {
          top: 10,
          right: 20,
          bottom: 50,
          left: 60
        },
        x: function (d) { return d.label; },
        y: function (d) { return d.value; },
        showValues: true,
        valueFormat: function (d) {
          return d3.format(',.4f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: -10
        },
        tooltip: {
          contentGenerator: function (data) {

            return "<div class='kol-card'><header><img src='" + data.name + "' /></span></header><section><h1 class='name'>" + data.name + "</h1><p>" + data.region + "</p><a href='#'>View KOL</a></section></div>";
          }
        },
      }
    }
    this.data = [
      {
        values: [
          { "label": "A", "value": -29, "name": "Dr. Gillenbrand", "imgPath": "../assets/custom/doctor-1.png" },
          { "label": "B", "value": 2, "name": "Dr. Wilson", "imgPath": "../assets/custom/doctor-2.png" },
          { "label": "C", "value": 32, "name": "Dr. Hostetter", "imgPath": "../assets/custom/doctor-3.png" },
          { "label": "D", "value": 196, "name": "Dr. Cravatte", "imgPath": "../assets/custom/doctor-4.png" },
          { "label": "E", "value": 10, "name": "Dr. Tholomyes", "imgPath": "../assets/custom/doctor-5.png" },
          { "label": "F", "value": -98.07, "name": "Dr. Marguerite", "imgPath": "../assets/custom/doctor-6.png" },
          { "label": "G", "value": -13.92, "name": "Dr. Zephine", "imgPath": "../assets/custom/doctor-1.png" },
          { "label": "H", "value": -5.138, "name": "Dr. Thenardier", "imgPath": "../assets/custom/doctor-2.png" },
          { "label": "I", "value": -25.13, "name": "Dr. Perpetue", "imgPath": "../assets/custom/doctor-3.png" },
          { "label": "J", "value": 15.138, "name": "Dr. Mathieu", "imgPath": "../assets/custom/doctor-4.png" }
        ]
      }
    ];
  }
}