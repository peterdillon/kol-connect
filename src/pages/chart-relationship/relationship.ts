import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: './relationship.html'
})
export class Main {
  constructor(public navCtrl: NavController) {
  }
}

declare let d3: any;

@Component({
  templateUrl: './relationship.html',
  selector: 'relationship'
})

export class Relationship implements OnInit {
  options;
  data;

  constructor() { }

  ngOnInit() {
    console.log('init');
    var color = d3.scale.category20();

    this.options = {

      chart: {
        type: 'forceDirectedGraph',
        width: 1182,
        height: 600,
        radius: 9,
        linkDist: 400,
        margin: {
          top: 10,
          right: 20,
          bottom: 50,
          left: 160
        },
        color: function (d) {
          return color(d.region)
        },
        // title not working...
        title: {
          enable: true,
          text: "Write Your Title",
          className: "h4",
          css: {
            width: "1182px",
            textAlign: "center",
            color: "red"
          }
        },
        tooltip: {
          contentGenerator: function (d) {
            var series = d.series[0];
            if (series.value === null) return;
            return "<div class='kol-card'><header><img src='" + d.imgPath + "' /></span></header><section><h1 class='name'>" + d.name + "</h1><p>" + d.region + "</p><a href='#'>View KOL</a></section></div>";
          },
          duration: 1000,
          gravity: "w",
          distance: 25,
          snapDistance: 0,
          enabled: true,
          hideDelay: 1000
        },
        legend: {
          margin: {
            top: 5,
            right: 35,
            bottom: 5,
            left: 0
          }
        },

        nodeExtras: function (node) {
          node && node
            .append("text")
            // svg text node style controllers
            .attr("dx", "1em")
            .attr("dy", ".4em")
            .text(function (d) { return d.name })
            .style('font-size', '14px');
        }
      }
    }

    // tooltip.headerFormatter(function(d) {return "Node";});
    // this.data = this.kolService.getKOLsForScatter();

var width = 640,
    height = 480;
    this.data = {
        "nodes" : [
            { "name": "Myriel Hemmingway", "region": "North East", "Degree": "PhD", "imgPath": "../assets/custom/doctor-1.png" },
            { "name": "Jimmy Kimmel", "region": "North East", "Degree": "PhD", "imgPath": "../assets/custom/doctor-2.png" },
            
            { "name": "Nolan Fauchelevent", "region": "North West", "Degree": "PhD", "imgPath": "../assets/custom/doctor-4.png" },
            { "name": "Scott Simplice", "region": "North West", "Degree": "PhD", "imgPath": "../assets/custom/doctor-1.png" },
            
            { "name": "Daphne Dahlia", "region": "South West", "Degree": "PhD", "imgPath": "../assets/custom/doctor-5.png" },
            { "name": "Frank Zephine", "region": "South West", "Degree": "MD", "imgPath": "../assets/custom/doctor-4.png" },
            
            { "name": "Mr. Cosette", "region": "South East", "Degree": "PhD", "imgPath": "../assets/custom/doctor-2.png" },
            { "name": "Amy Goodman", "region": "South East", "Degree": "PhD", "imgPath": "../assets/custom/doctor-1.png" },
            
            { "name": "Mme. Thenardier", "region": "West", "Degree": "MD", "imgPath": "../assets/custom/doctor-2.png" },
            { "name": "Coster Thenardier", "region": "West", "Degree": "PhD", "imgPath": "../assets/custom/doctor-1.png" },
            { "name": "Dr. J. Javert", "region": "West", "Degree": "PhD", "imgPath": "../assets/custom/doctor-3.png" },
            
            { "name": "Cochepaille", "region": "Mid West", "Degree": "MD", "imgPath": "../assets/custom/doctor-2.png" },
            { "name": "Mr. Hucheloup", "region": "Mid West", "Degree": "MD", "imgPath": "../assets/custom/doctor-4.png" },

            { "name": "Middle", "region": "Middle", "Degree": "None" },
      ],
      "links" : [
        // Source = item in array above
        // Target = person they are connected to
        { source: 0, target: 3 },
        { source: 1, target: 3 },
        { source: 2, target: 3 },
        { source: 3, target: 3 },
        { source: 4, target: 1 },
        { source: 5, target: 1 },
        { source: 6, target: 1 },
        { source: 7, target: 1 },
        { source: 8, target: 10 },
        { source: 9, target: 10 },
        { source: 10, target: 10 },
        { source: 11, target: 10 },
        { source: 12, target: 13 },

        { source: 0, target: 13 },
        { source: 1, target: 13 },
        { source: 2, target: 13 },
        { source: 3, target: 13 },
        { source: 4, target: 13 },
        { source: 5, target: 13 },
        
        { source: 6, target: 1 },
        { source: 7, target: 1 },
        { source: 8, target: 1 },
        { source: 9, target: 1 },
        { source: 10, target: 1 },
        { source: 11, target: 1 },
        { source: 12, target: 1 },

        { source: 0, target: 8 },
        { source: 1, target: 8 },
        { source: 2, target: 8 },
        { source: 3, target: 8 },
        { source: 4, target: 8 },
        { source: 5, target: 8 },
        { source: 6, target: 8 },

        { source: 13, target: 0 }
        
      ]
    }

  }
}
