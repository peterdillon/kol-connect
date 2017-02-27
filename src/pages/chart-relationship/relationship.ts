import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

// @Component({
//   templateUrl: './relationship.html'
// })
// export class Main {
//   constructor(public navCtrl: NavController) {
//   }
// }

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

    // this.options = {

    //   chart: {
    //     type: 'forceDirectedGraph',
    //     width: 1182,
    //     height: 600,
    //     radius: 9,
    //     linkDist: 400,
    //     margin: {
    //       top: 10,
    //       right: 20,
    //       bottom: 50,
    //       left: 160
    //     },
    //     color: function (d) {
    //       return color(d.region)
    //     },
    //     // title not working...
    //     title: {
    //       enable: true,
    //       text: "Write Your Title",
    //       className: "h4",
    //       css: {
    //         width: "1182px",
    //         textAlign: "center",
    //         color: "red"
    //       }
    //     },
    //     tooltip: {
    //       contentGenerator: function (d) {
    //         var series = d.series[0];
    //         if (series.value === null) return;
    //         return "<div class='kol-card'><header><img src='" + d.imgPath + "' /></span></header><section><h1 class='name'>" + d.name + "</h1><p>" + d.region + "</p><a href='#'>View KOL</a></section></div>";
    //       },
    //       duration: 1000,
    //       gravity: "w",
    //       distance: 25,
    //       snapDistance: 0,
    //       enabled: true,
    //       hideDelay: 1000
    //     },
    //     legend: {
    //       margin: {
    //         top: 5,
    //         right: 35,
    //         bottom: 5,
    //         left: 0
    //       }
    //     },

    //     nodeExtras: function (node) {
    //       node && node
    //         .append("text")
    //         // svg text node style controllers
    //         .attr("dx", "1em")
    //         .attr("dy", ".4em")
    //         .text(function (d) { return d.name })
    //         .style('font-size', '14px');
    //     }
    //   }
    // }

    this.options = {
      chart: {
        type: 'forceDirectedGraph',
        width: 1182,
        height: 650,
        linkDist: 50,
        margin: { top: 20, right: 20, bottom: 20, left: 20 },
        color: function (d) {
          return color(d.group)
        },
        tooltip: {
          contentGenerator: function (d) {
            var series = d.series[0];
            if (series.value === null) return;
            return "<div class='kol-card'><header><img src='" + d.imgPath + "' /></span></header><section><h1 class='name'>" + d.name + "</h1><p>Allergy and Immunology</p><a href='#'>View KOL</a></section></div>";
          }
        },
        nodeExtras: function (node) {
          node && node
            .append("text")
            .attr("dx", ".8em")
            .attr("dy", ".4em")
            .text(function (d) { return d.name })
            .style('font-size', '10px');
        }
      }
    };

    // tooltip.headerFormatter(function(d) {return "Node";});
    // this.data = this.kolService.getKOLsForScatter();

    // var width = 640,
    //   height = 480;
    // this.data = {
    //     "nodes" : [
    //         { "name": "Dr. Myriel Hemmingway", "region": "North East", "Degree": "PhD", "imgPath": "./assets/custom/doctor-1.png", "group": 1 },
    //         { "name": "Dr. Jimmy Kimmel", "region": "North East", "Degree": "PhD", "imgPath": "./assets/custom/doctor-2.png", "group": 1 },

    //         { "name": "Dr. Nolan Fauchelevent", "region": "North West", "Degree": "PhD", "imgPath": "./assets/custom/doctor-4.png", "group": 1 },
    //         { "name": "Dr. Scott Simplice", "region": "North West", "Degree": "PhD", "imgPath": "./assets/custom/doctor-1.png", "group": 1 },

    //         { "name": "Dr. Daphne Dahlia", "region": "South West", "Degree": "PhD", "imgPath": "./assets/custom/doctor-5.png", "group": 1 },
    //         { "name": "Dr. Frank Zephine", "region": "South West", "Degree": "MD", "imgPath": "./assets/custom/doctor-4.png", "group": 2 },

    //         { "name": "Dr. Mr. Cosette", "region": "South East", "Degree": "PhD", "imgPath": "./assets/custom/doctor-2.png", "group": 2 },
    //         { "name": "Dr. Amy Goodman", "region": "South East", "Degree": "PhD", "imgPath": "./assets/custom/doctor-1.png", "group": 2 },

    //         { "name": "Dr. Mme. Thenardier", "region": "West", "Degree": "MD", "imgPath": "./assets/custom/doctor-2.png", "group": 2 },
    //         { "name": "Dr. Coster Thenardier", "region": "West", "Degree": "PhD", "imgPath": "./assets/custom/doctor-1.png", "group": 3 },
    //         { "name": "Dr. Dr. J. Javert", "region": "West", "Degree": "PhD", "imgPath": "./assets/custom/doctor-3.png", "group": 3 },

    //         { "name": "Dr. Cochepaille", "region": "Mid West", "Degree": "MD", "imgPath": "./assets/custom/doctor-2.png", "group": 3 },
    //         { "name": "Dr. Mr. Hucheloup", "region": "Mid West", "Degree": "MD", "imgPath": "./assets/custom/doctor-4.png", "group": 3 },

    //         { "name": "Dr. Middle", "region": "Middle", "Degree": "None", "group": 4 }
    //   ],
    //   "links" : [
    //     // Source = item in array above
    //     // Target = person they are connected to
    //     { source: 0, target: 3, value: 5 },
    //     { source: 1, target: 3, value: 5 },
    //     { source: 2, target: 3, value: 5 },
    //     { source: 3, target: 3, value: 5 },
    //     { source: 4, target: 1, value: 5 },
    //     { source: 5, target: 1, value: 5 },
    //     { source: 6, target: 1, value: 5 },
    //     { source: 7, target: 1, value: 5 },
    //     { source: 8, target: 10 },
    //     { source: 9, target: 10 },
    //     { source: 10, target: 10 },
    //     { source: 11, target: 10 },
    //     { source: 12, target: 13 },

    //     { source: 0, target: 13 },
    //     { source: 1, target: 13 },
    //     { source: 2, target: 13 },
    //     { source: 3, target: 13 },
    //     { source: 4, target: 13 },
    //     { source: 5, target: 13 },

    //     { source: 6, target: 1 },
    //     { source: 7, target: 1 },
    //     { source: 8, target: 1 },
    //     { source: 9, target: 1 },
    //     { source: 10, target: 1 },
    //     { source: 11, target: 1 },
    //     { source: 12, target: 1 },

    //     { source: 0, target: 8 },
    //     { source: 1, target: 8 },
    //     { source: 2, target: 8 },
    //     { source: 3, target: 8 },
    //     { source: 4, target: 8 },
    //     { source: 5, target: 8 },
    //     { source: 6, target: 8 },

    //     { source: 13, target: 0 }

    //   ]
    // }

    this.data = {
      "nodes": [
        { "name": "Dr. Margaret Myriel", "group": 1, "imgPath": "./assets/custom/doctor-1.png" },
        { "name": "Dr. Jim Bellow", "group": 1, "imgPath": "./assets/custom/doctor-2.png" },
        { "name": "Dr. John Anderson, PhD", "group": 1, "imgPath": "./assets/custom/doctor-3.png" },
        { "name": "Dr. Wilson Magloire", "group": 1, "imgPath": "./assets/custom/doctor-4.png" },
        { "name": "Dr. Jim Jones", "group": 1, "imgPath": "./assets/custom/doctor-5.png" },
        { "name": "Dr. Joyce Geborand", "group": 1, "imgPath": "./assets/custom/doctor-6.png" },
        { "name": "Dr. Jonathan Bernstein", "group": 1, "imgPath": "./assets/custom/doctor-1.png" },
        { "name": "Dr. Norma Cravatte", "group": 1, "imgPath": "./assets/custom/doctor-2.png" },
        { "name": "Dr. Kathleen Waldman", "group": 1, "imgPath": "./assets/custom/doctor-3.png" },
        { "name": "Dr. John Davis", "group": 1, "imgPath": "./assets/custom/doctor-4.png" },
        { "name": "Dr. Vincent Labarre", "group": 2, "imgPath": "./assets/custom/doctor-5.png" },
        { "name": "Dr. Joshua Jacobs", "group": 2, "imgPath": "./assets/custom/doctor-6.png" },
        { "name": "Dr. Louis Marguerite", "group": 3, "imgPath": "./assets/custom/doctor-1.png" },
        { "name": "Dr. Bella Seldan", "group": 2, "imgPath": "./assets/custom/doctor-2.png" },
        { "name": "Dr. William Lumry", "group": 2, "imgPath": "./assets/custom/doctor-3.png" },
        { "name": "Dr. Ricky Gervais", "group": 2, "imgPath": "./assets/custom/doctor-4.png" },
        { "name": "Dr. Thomas Tholomyes", "group": 3, "imgPath": "./assets/custom/doctor-5.png" },
        { "name": "Dr. Lenoard Listolier", "group": 3, "imgPath": "./assets/custom/doctor-6.png" },
        { "name": "Dr. Bill Fameuil", "group": 3, "imgPath": "./assets/custom/doctor-1.png" },
        { "name": "Dr. Frank Blacheville", "group": 3, "imgPath": "./assets/custom/doctor-2.png" },
        { "name": "Dr. Allen Kaplan", "group": 3, "imgPath": "./assets/custom/doctor-3.png" },
        { "name": "Dr. Jim Dahlia", "group": 3, "imgPath": "./assets/custom/doctor-4.png" },
        { "name": "Dr. Marc Riedl", "group": 3, "imgPath": "./assets/custom/doctor-5.png" },
        { "name": "Dr. Thomas Fantine", "group": 3, "imgPath": "./assets/custom/doctor-6.png" },
        { "name": "Dr. Timothy Craig", "group": 4, "imgPath": "./assets/custom/doctor-1.png" },
        { "name": "Dr. Hillman Buglieri", "group": 4, "imgPath": "./assets/custom/doctor-2.png" },
        { "name": "Dr. Jacob Cosette", "group": 5, "imgPath": "./assets/custom/doctor-3.png" },
        { "name": "Dr. Huamin Li", "group": 4, "imgPath": "./assets/custom/doctor-4.png" },
        { "name": "Dr. Bill Fauchelevent", "group": 0, "imgPath": "./assets/custom/doctor-5.png" },
        { "name": "Dr. Daniel Soteres", "group": 2, "imgPath": "./assets/custom/doctor-6.png" },
        { "name": "Dr. Isaac Melamed", "group": 3, "imgPath": "./assets/custom/doctor-1.png" },
        { "name": "Dr. Jim Jakobs", "group": 2, "imgPath": "./assets/custom/doctor-2.png" },
        { "name": "Dr. Wilson Scaufflaire", "group": 2, "imgPath": "./assets/custom/doctor-3.png" },
        { "name": "Dr. Andrew Scoffield", "group": 2, "imgPath": "./assets/custom/doctor-4.png" },
        { "name": "Dr. Judy Templeton", "group": 2, "imgPath": "./assets/custom/doctor-5.png" },
        { "name": "Dr. Brigette Champer", "group": 2, "imgPath": "./assets/custom/doctor-6.png" },
        { "name": "Dr. Carson Brevet", "group": 2, "imgPath": "./assets/custom/doctor-1.png" },
        { "name": "Dr. Copper Chenildieu", "group": 2, "imgPath": "./assets/custom/doctor-2.png" },
        { "name": "Dr. Katharine Woessner", "group": 2, "imgPath": "./assets/custom/doctor-3.png" },
        { "name": "Dr. Bill Pontmercy", "group": 4, "imgPath": "./assets/custom/doctor-4.png" },
        { "name": "Dr. Aleena Banerji", "group": 6, "imgPath": "./assets/custom/doctor-5.png" },
        { "name": "Dr. Allan Eponine", "group": 4, "imgPath": "./assets/custom/doctor-6.png" },
        { "name": "Dr. Richard Gower", "group": 4, "imgPath": "./assets/custom/doctor-1.png" },
        { "name": "Dr. Margie Cohn", "group": 5, "imgPath": "./assets/custom/doctor-2.png" },
        { "name": "Dr. Gilbert Carson", "group": 0, "imgPath": "./assets/custom/doctor-3.png" },
        { "name": "Dr. Jim Gribier", "group": 0, "imgPath": "./assets/custom/doctor-4.png" },
        { "name": "Dr. Sarah Jondrette", "group": 7, "imgPath": "./assets/custom/doctor-5.png" },
        { "name": "Dr. Glen Burgon", "group": 7, "imgPath": "./assets/custom/doctor-6.png" },
        { "name": "Dr. John Gavroche", "group": 8, "imgPath": "./assets/custom/doctor-1.png" },
        { "name": "Dr. Michael Manning", "group": 5, "imgPath": "./assets/custom/doctor-2.png" },
        { "name": "Dr. Susan Magnon", "group": 5, "imgPath": "./assets/custom/doctor-3.png" },
        { "name": "Dr. Milford Gillenormand", "group": 5, "imgPath": "./assets/custom/doctor-4.png" },
        { "name": "Dr. Mark Davis-Lorton", "group": 5, "imgPath": "./assets/custom/doctor-5.png" },
        { "name": "Dr. Jay Kashkin", "group": 5, "imgPath": "./assets/custom/doctor-6.png" },
        { "name": "Dr. Mak Gillenormand", "group": 5, "imgPath": "./assets/custom/doctor-1.png" },
        { "name": "Dr. Martha Marius", "group": 8, "imgPath": "./assets/custom/doctor-2.png" },
        { "name": "Dr. Bruce Zuraw", "group": 5, "imgPath": "./assets/custom/doctor-3.png" },
        { "name": "Dr. Emily Conrad", "group": 8, "imgPath": "./assets/custom/doctor-4.png" },
        { "name": "Dr. Louis Parkington", "group": 8, "imgPath": "./assets/custom/doctor-5.png" },
        { "name": "Dr. Autumn Burnette", "group": 8, "imgPath": "./assets/custom/doctor-6.png" },
        { "name": "Dr. John Cohn", "group": 8, "imgPath": "./assets/custom/doctor-1.png" },
        { "name": "Dr. Connie Feuilly", "group": 8, "imgPath": "./assets/custom/doctor-2.png" },
        { "name": "Dr. Katrina Courten", "group": 8, "imgPath": "./assets/custom/doctor-3.png" },
        { "name": "Dr. Anna Feldweg", "group": 8, "imgPath": "./assets/custom/doctor-4.png" },
        { "name": "Dr. Judy Bossuet", "group": 8, "imgPath": "./assets/custom/doctor-5.png" },
        { "name": "Dr. Wilson Phillips", "group": 8, "imgPath": "./assets/custom/doctor-6.png" },
        { "name": "Dr. James Baker", "group": 8, "imgPath": "./assets/custom/doctor-1.png" },
        { "name": "Dr. Yi Zhu", "group": 9, "imgPath": "./assets/custom/doctor-2.png" },
        { "name": "Dr. Paula Busse", "group": 4, "imgPath": "./assets/custom/doctor-3.png" },
        { "name": "Dr. Vince Babet", "group": 4, "imgPath": "./assets/custom/doctor-4.png" },
        { "name": "Dr. Douglas Johnston", "group": 4, "imgPath": "./assets/custom/doctor-5.png" },
        { "name": "Dr. Raffi Tachdjian", "group": 4, "imgPath": "./assets/custom/doctor-6.png" },
        { "name": "Dr. Julie Toussaint", "group": 5, "imgPath": "./assets/custom/doctor-1.png" },
        { "name": "Dr. Rafael Zaragoza Urdaz", "group": 10, "imgPath": "./assets/custom/doctor-2.png" },
        { "name": "Dr. Sue Johnson", "group": 10, "imgPath": "./assets/custom/doctor-3.png" },
        { "name": "Dr. Wilma Brujon", "group": 4, "imgPath": "./assets/custom/doctor-4.png" },
        { "name": "Dr. Tammy Carter", "group": 8, "imgPath": "./assets/custom/doctor-5.png" }
      ],
      "links": [
        { "source": 1, "target": 0, "value": 1 },
        { "source": 2, "target": 0, "value": 8 },
        { "source": 3, "target": 0, "value": 10 },
        { "source": 3, "target": 2, "value": 6 },
        { "source": 4, "target": 0, "value": 1 },
        { "source": 5, "target": 0, "value": 1 },
        { "source": 6, "target": 0, "value": 1 },
        { "source": 7, "target": 0, "value": 1 },
        { "source": 8, "target": 0, "value": 2 },
        { "source": 9, "target": 0, "value": 1 },
        { "source": 11, "target": 10, "value": 1 },
        { "source": 11, "target": 3, "value": 3 },
        { "source": 11, "target": 2, "value": 3 },
        { "source": 11, "target": 0, "value": 5 },
        { "source": 12, "target": 11, "value": 1 },
        { "source": 13, "target": 11, "value": 1 },
        { "source": 14, "target": 11, "value": 1 },
        { "source": 15, "target": 11, "value": 1 },
        { "source": 17, "target": 16, "value": 4 },
        { "source": 18, "target": 16, "value": 4 },
        { "source": 18, "target": 17, "value": 4 },
        { "source": 19, "target": 16, "value": 4 },
        { "source": 19, "target": 17, "value": 4 },
        { "source": 19, "target": 18, "value": 4 },
        { "source": 20, "target": 16, "value": 3 },
        { "source": 20, "target": 17, "value": 3 },
        { "source": 20, "target": 18, "value": 3 },
        { "source": 20, "target": 19, "value": 4 },
        { "source": 21, "target": 16, "value": 3 },
        { "source": 21, "target": 17, "value": 3 },
        { "source": 21, "target": 18, "value": 3 },
        { "source": 21, "target": 19, "value": 3 },
        { "source": 21, "target": 20, "value": 5 },
        { "source": 22, "target": 16, "value": 3 },
        { "source": 22, "target": 17, "value": 3 },
        { "source": 22, "target": 18, "value": 3 },
        { "source": 22, "target": 19, "value": 3 },
        { "source": 22, "target": 20, "value": 4 },
        { "source": 22, "target": 21, "value": 4 },
        { "source": 23, "target": 16, "value": 3 },
        { "source": 23, "target": 17, "value": 3 },
        { "source": 23, "target": 18, "value": 3 },
        { "source": 23, "target": 19, "value": 3 },
        { "source": 23, "target": 20, "value": 4 },
        { "source": 23, "target": 21, "value": 4 },
        { "source": 23, "target": 22, "value": 4 },
        { "source": 23, "target": 12, "value": 2 },
        { "source": 23, "target": 11, "value": 9 },
        { "source": 24, "target": 23, "value": 2 },
        { "source": 24, "target": 11, "value": 7 },
        { "source": 25, "target": 24, "value": 13 },
        { "source": 25, "target": 23, "value": 1 },
        { "source": 25, "target": 11, "value": 12 },
        { "source": 26, "target": 24, "value": 4 },
        { "source": 26, "target": 11, "value": 31 },
        { "source": 26, "target": 16, "value": 1 },
        { "source": 26, "target": 25, "value": 1 },
        { "source": 27, "target": 11, "value": 17 },
        { "source": 27, "target": 23, "value": 5 },
        { "source": 27, "target": 25, "value": 5 },
        { "source": 27, "target": 24, "value": 1 },
        { "source": 27, "target": 26, "value": 1 },
        { "source": 28, "target": 11, "value": 8 },
        { "source": 28, "target": 27, "value": 1 },
        { "source": 29, "target": 23, "value": 1 },
        { "source": 29, "target": 27, "value": 1 },
        { "source": 29, "target": 11, "value": 2 },
        { "source": 30, "target": 23, "value": 1 },
        { "source": 31, "target": 30, "value": 2 },
        { "source": 31, "target": 11, "value": 3 },
        { "source": 31, "target": 23, "value": 2 },
        { "source": 31, "target": 27, "value": 1 },
        { "source": 32, "target": 11, "value": 1 },
        { "source": 33, "target": 11, "value": 2 },
        { "source": 33, "target": 27, "value": 1 },
        { "source": 34, "target": 11, "value": 3 },
        { "source": 34, "target": 29, "value": 2 },
        { "source": 35, "target": 11, "value": 3 },
        { "source": 35, "target": 34, "value": 3 },
        { "source": 35, "target": 29, "value": 2 },
        { "source": 36, "target": 34, "value": 2 },
        { "source": 36, "target": 35, "value": 2 },
        { "source": 36, "target": 11, "value": 2 },
        { "source": 36, "target": 29, "value": 1 },
        { "source": 37, "target": 34, "value": 2 },
        { "source": 37, "target": 35, "value": 2 },
        { "source": 37, "target": 36, "value": 2 },
        { "source": 37, "target": 11, "value": 2 },
        { "source": 37, "target": 29, "value": 1 },
        { "source": 38, "target": 34, "value": 2 },
        { "source": 38, "target": 35, "value": 2 },
        { "source": 38, "target": 36, "value": 2 },
        { "source": 38, "target": 37, "value": 2 },
        { "source": 38, "target": 11, "value": 2 },
        { "source": 38, "target": 29, "value": 1 },
        { "source": 39, "target": 25, "value": 1 },
        { "source": 40, "target": 25, "value": 1 },
        { "source": 41, "target": 24, "value": 2 },
        { "source": 41, "target": 25, "value": 3 },
        { "source": 42, "target": 41, "value": 2 },
        { "source": 42, "target": 25, "value": 2 },
        { "source": 42, "target": 24, "value": 1 },
        { "source": 43, "target": 11, "value": 3 },
        { "source": 43, "target": 26, "value": 1 },
        { "source": 43, "target": 27, "value": 1 },
        { "source": 44, "target": 28, "value": 3 },
        { "source": 44, "target": 11, "value": 1 },
        { "source": 45, "target": 28, "value": 2 },
        { "source": 47, "target": 46, "value": 1 },
        { "source": 48, "target": 47, "value": 2 },
        { "source": 48, "target": 25, "value": 1 },
        { "source": 48, "target": 27, "value": 1 },
        { "source": 48, "target": 11, "value": 1 },
        { "source": 49, "target": 26, "value": 3 },
        { "source": 49, "target": 11, "value": 2 },
        { "source": 50, "target": 49, "value": 1 },
        { "source": 50, "target": 24, "value": 1 },
        { "source": 51, "target": 49, "value": 9 },
        { "source": 51, "target": 26, "value": 2 },
        { "source": 51, "target": 11, "value": 2 },
        { "source": 52, "target": 51, "value": 1 },
        { "source": 52, "target": 39, "value": 1 },
        { "source": 53, "target": 51, "value": 1 },
        { "source": 54, "target": 51, "value": 2 },
        { "source": 54, "target": 49, "value": 1 },
        { "source": 54, "target": 26, "value": 1 },
        { "source": 55, "target": 51, "value": 6 },
        { "source": 55, "target": 49, "value": 12 },
        { "source": 55, "target": 39, "value": 1 },
        { "source": 55, "target": 54, "value": 1 },
        { "source": 55, "target": 26, "value": 21 },
        { "source": 55, "target": 11, "value": 19 },
        { "source": 55, "target": 16, "value": 1 },
        { "source": 55, "target": 25, "value": 2 },
        { "source": 55, "target": 41, "value": 5 },
        { "source": 55, "target": 48, "value": 4 },
        { "source": 56, "target": 49, "value": 1 },
        { "source": 56, "target": 55, "value": 1 },
        { "source": 57, "target": 55, "value": 1 },
        { "source": 57, "target": 41, "value": 1 },
        { "source": 57, "target": 48, "value": 1 },
        { "source": 58, "target": 55, "value": 7 },
        { "source": 58, "target": 48, "value": 7 },
        { "source": 58, "target": 27, "value": 6 },
        { "source": 58, "target": 57, "value": 1 },
        { "source": 58, "target": 11, "value": 4 },
        { "source": 59, "target": 58, "value": 15 },
        { "source": 59, "target": 55, "value": 5 },
        { "source": 59, "target": 48, "value": 6 },
        { "source": 59, "target": 57, "value": 2 },
        { "source": 60, "target": 48, "value": 1 },
        { "source": 60, "target": 58, "value": 4 },
        { "source": 60, "target": 59, "value": 2 },
        { "source": 61, "target": 48, "value": 2 },
        { "source": 61, "target": 58, "value": 6 },
        { "source": 61, "target": 60, "value": 2 },
        { "source": 61, "target": 59, "value": 5 },
        { "source": 61, "target": 57, "value": 1 },
        { "source": 61, "target": 55, "value": 1 },
        { "source": 62, "target": 55, "value": 9 },
        { "source": 62, "target": 58, "value": 17 },
        { "source": 62, "target": 59, "value": 13 },
        { "source": 62, "target": 48, "value": 7 },
        { "source": 62, "target": 57, "value": 2 },
        { "source": 62, "target": 41, "value": 1 },
        { "source": 62, "target": 61, "value": 6 },
        { "source": 62, "target": 60, "value": 3 },
        { "source": 63, "target": 59, "value": 5 },
        { "source": 63, "target": 48, "value": 5 },
        { "source": 63, "target": 62, "value": 6 },
        { "source": 63, "target": 57, "value": 2 },
        { "source": 63, "target": 58, "value": 4 },
        { "source": 63, "target": 61, "value": 3 },
        { "source": 63, "target": 60, "value": 2 },
        { "source": 63, "target": 55, "value": 1 },
        { "source": 64, "target": 55, "value": 5 },
        { "source": 64, "target": 62, "value": 12 },
        { "source": 64, "target": 48, "value": 5 },
        { "source": 64, "target": 63, "value": 4 },
        { "source": 64, "target": 58, "value": 10 },
        { "source": 64, "target": 61, "value": 6 },
        { "source": 64, "target": 60, "value": 2 },
        { "source": 64, "target": 59, "value": 9 },
        { "source": 64, "target": 57, "value": 1 },
        { "source": 64, "target": 11, "value": 1 },
        { "source": 65, "target": 63, "value": 5 },
        { "source": 65, "target": 64, "value": 7 },
        { "source": 65, "target": 48, "value": 3 },
        { "source": 65, "target": 62, "value": 5 },
        { "source": 65, "target": 58, "value": 5 },
        { "source": 65, "target": 61, "value": 5 },
        { "source": 65, "target": 60, "value": 2 },
        { "source": 65, "target": 59, "value": 5 },
        { "source": 65, "target": 57, "value": 1 },
        { "source": 65, "target": 55, "value": 2 },
        { "source": 66, "target": 64, "value": 3 },
        { "source": 66, "target": 58, "value": 3 },
        { "source": 66, "target": 59, "value": 1 },
        { "source": 66, "target": 62, "value": 2 },
        { "source": 66, "target": 65, "value": 2 },
        { "source": 66, "target": 48, "value": 1 },
        { "source": 66, "target": 63, "value": 1 },
        { "source": 66, "target": 61, "value": 1 },
        { "source": 66, "target": 60, "value": 1 },
        { "source": 67, "target": 57, "value": 3 },
        { "source": 68, "target": 25, "value": 5 },
        { "source": 68, "target": 11, "value": 1 },
        { "source": 68, "target": 24, "value": 1 },
        { "source": 68, "target": 27, "value": 1 },
        { "source": 68, "target": 48, "value": 1 },
        { "source": 68, "target": 41, "value": 1 },
        { "source": 69, "target": 25, "value": 6 },
        { "source": 69, "target": 68, "value": 6 },
        { "source": 69, "target": 11, "value": 1 },
        { "source": 69, "target": 24, "value": 1 },
        { "source": 69, "target": 27, "value": 2 },
        { "source": 69, "target": 48, "value": 1 },
        { "source": 69, "target": 41, "value": 1 },
        { "source": 70, "target": 25, "value": 4 },
        { "source": 70, "target": 69, "value": 4 },
        { "source": 70, "target": 68, "value": 4 },
        { "source": 70, "target": 11, "value": 1 },
        { "source": 70, "target": 24, "value": 1 },
        { "source": 70, "target": 27, "value": 1 },
        { "source": 70, "target": 41, "value": 1 },
        { "source": 70, "target": 58, "value": 1 },
        { "source": 71, "target": 27, "value": 1 },
        { "source": 71, "target": 69, "value": 2 },
        { "source": 71, "target": 68, "value": 2 },
        { "source": 71, "target": 70, "value": 2 },
        { "source": 71, "target": 11, "value": 1 },
        { "source": 71, "target": 48, "value": 1 },
        { "source": 71, "target": 41, "value": 1 },
        { "source": 71, "target": 25, "value": 1 },
        { "source": 72, "target": 26, "value": 2 },
        { "source": 72, "target": 27, "value": 1 },
        { "source": 72, "target": 11, "value": 1 },
        { "source": 73, "target": 48, "value": 2 },
        { "source": 74, "target": 48, "value": 2 },
        { "source": 74, "target": 73, "value": 3 },
        { "source": 75, "target": 69, "value": 3 },
        { "source": 75, "target": 68, "value": 3 },
        { "source": 75, "target": 25, "value": 3 },
        { "source": 75, "target": 48, "value": 1 },
        { "source": 75, "target": 41, "value": 1 },
        { "source": 75, "target": 70, "value": 1 },
        { "source": 75, "target": 71, "value": 1 },
        { "source": 76, "target": 64, "value": 1 },
        { "source": 76, "target": 65, "value": 1 },
        { "source": 76, "target": 66, "value": 1 },
        { "source": 76, "target": 63, "value": 1 },
        { "source": 76, "target": 62, "value": 1 },
        { "source": 76, "target": 48, "value": 1 },
        { "source": 76, "target": 58, "value": 1 }
      ]
    }
  }
}
