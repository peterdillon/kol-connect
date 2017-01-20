import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'relationship.html'
})
export class Main {
  constructor(public navCtrl: NavController) {
  }
}

declare let d3: any;

@Component({
  templateUrl: 'relationship.html',
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
          height: 750,
          radius: 9,
          linkDist: 200,
          margin: {
            top: 10,
            right: 20,
            bottom: 50,
            left: 160
          },
          color: function(d){
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
          
          nodeExtras: function(node) {
              node && node
                .append("text")
                // svg text node style controllers
                .attr("dx", "1em")
                .attr("dy", ".4em")
                .text(function(d) { return d.name })
                .style('font-size', '14px');
          }
      }
    }
    // tooltip.headerFormatter(function(d) {return "Node";});
    // this.data = this.kolService.getKOLsForScatter();

    this.data = {
            "nodes":[
                {"name":"Myriel","region":"Northeast","Degree":"PhD","imgPath":"../assets/custom/doctor-1.png"},
                {"name":"Jimmy Kimmel","region":"Northeast","Degree":"PhD","imgPath":"../assets/custom/doctor-2.png"},
                {"name":"Mlle Baptistine","region":"Northeast","Degree":"PhD","imgPath":"../assets/custom/doctor-3.png"},
                {"name":"Morgan Magloire","region":"Northeast","Degree":"PhD","imgPath":"../assets/custom/doctor-1.png"},
                {"name":"Wilma DeLo","region":"Northeast","Degree":"PhD","imgPath":"../assets/custom/doctor-2.png"},
                {"name":"William Geborand","region":"Northeast","Degree":"PhD","imgPath":"../assets/custom/doctor-3.png"},
                {"name":"Peter Champtercier","region":"Northeast","Degree":"PhD","imgPath":"../assets/custom/doctor-1.png"},
                {"name":"Holden Cravatte","region":"Northeast","Degree":"PhD","imgPath":"../assets/custom/doctor-2.png"},
                {"name":"Dr. James Cagney","region":"Northeast","Degree":"PhD","imgPath":"../assets/custom/doctor-3.png"},
                {"name":"Hellman Controller","region":"Northeast","Degree":"MD","imgPath":"../assets/custom/doctor-1.png"},
                {"name":"Mille Labarre","region":"Mid West","Degree":"MD","imgPath":"../assets/custom/doctor-2.png"},
                {"name":"Jean Valjean","region":"Mid West","Degree":"MD","imgPath":"../assets/custom/doctor-3.png"},
                {"name":"Wilson Marguerite","region":"South West","Degree":"PhD","imgPath":"../assets/custom/doctor-4.png"},
                {"name":"Mme. Deruins","region":"Mid West","Degree":"PhD","imgPath":"../assets/custom/doctor-5.png"},
                {"name":"Isabelle Isabeau","region":"Mid West","Degree":"PhD","imgPath":"../assets/custom/doctor-6.png"},
                {"name":"Ricky Gervais","region":"Mid West","Degree":"MD","imgPath":"../assets/custom/doctor-1.png"},
                {"name":"Thomas Tholomyes","region":"South West","Degree":"PhD","imgPath":"../assets/custom/doctor-2.png"},
                {"name":"Lucy Listolier","region":"South West","Degree":"PhD","imgPath":"../assets/custom/doctor-3.png"},
                {"name":"Frederick Fameuil","region":"South West","Degree":"PhD","imgPath":"../assets/custom/doctor-4.png"},
                {"name":"Bill Blacheville","region":"South West","Degree":"MD","imgPath":"../assets/custom/doctor-5.png"},
                {"name":"Dr. Favourite","region":"South West","Degree":"MD","imgPath":"../assets/custom/doctor-6.png"},
                {"name":"Daphne Dahlia","region":"South West","Degree":"PhD","imgPath":"../assets/custom/doctor-5.png"},
                {"name":"Frank Zephine","region":"South West","Degree":"MD","imgPath":"../assets/custom/doctor-4.png"},
                {"name":"Mark Fantine","region":"South West","Degree":"PhD","imgPath":"../assets/custom/doctor-3.png"},
                {"name":"Mme. Thenardier","region":"West","Degree":"MD","imgPath":"../assets/custom/doctor-2.png"},
                {"name":"Coster Thenardier","region":"West","Degree":"PhD","imgPath":"../assets/custom/doctor-1.png"},
                {"name":"Mr. Cosette","region":"South East","Degree":"PhD","imgPath":"../assets/custom/doctor-2.png"},
                {"name":"Dr. J. Javert","region":"West","Degree":"PhD","imgPath":"../assets/custom/doctor-3.png"},
                {"name":"Nolan Fauchelevent","region":"Hello","Degree":"PhD","imgPath":"../assets/custom/doctor-4.png"},
                {"name":"Peter Bamatabois","region":"Mid West","Degree":"MD","imgPath":"../assets/custom/doctor-5.png"},
                {"name":"Selma Perpetue","region":"South West","Degree":"PhD","imgPath":"../assets/custom/doctor-6.png"},
                {"name":"Scott Simplice","region":"Mid West","Degree":"PhD","imgPath":"../assets/custom/doctor-1.png"},
                {"name":"Mary Scaufflaire","region":"Mid West","Degree":"PhD","imgPath":"../assets/custom/doctor-2.png"},
                {"name":"Jean Folger","region":"Mid West","Degree":"PhD","imgPath":"../assets/custom/doctor-3.png"},
                {"name":"Judge Judy","region":"Mid West","Degree":"MD","imgPath":"../assets/custom/doctor-4.png"},
                {"name":"Champ Mathieu","region":"Mid West","Degree":"PhD","imgPath":"../assets/custom/doctor-5.png"},
                {"name":"Brevet","region":"Mid West","Degree":"PhD","imgPath":"../assets/custom/doctor-6.png"},
                {"name":"Brent Chenildieu","region":"Mid West","Degree":"MD","imgPath":"../assets/custom/doctor-1.png"},
                {"name":"Cochepaille","region":"Mid West","Degree":"MD","imgPath":"../assets/custom/doctor-2.png"},
                {"name":"Carla Pontmercy","region":"West","Degree":"MD","imgPath":"../assets/custom/doctor-3.png"},
                {"name":"Peter Boulatruelle","region":"Mid West","Degree":"PhD","imgPath":"../assets/custom/doctor-4.png"},
                {"name":"Hello Eponine","region":"West","Degree":"PhD","imgPath":"../assets/custom/doctor-5.png"},
                {"name":"Anzelma","region":"West","Degree":"MD","imgPath":"../assets/custom/doctor-6.png"},
                {"name":"Amy Goodman","region":"South East","Degree":"PhD","imgPath":"../assets/custom/doctor-1.png"},
                {"name":"Sheldon Ionic","region":"Mid West","Degree":"PhD","imgPath":"../assets/custom/doctor-2.png"},
                {"name":"Gribier","region":"Mid West","Degree":"MD","imgPath":"../assets/custom/doctor-3.png"},
                {"name":"Michael Jondrette","region":"Mid West","Degree":"PhD","imgPath":"../assets/custom/doctor-4.png"},
                {"name":"Gilbert Burgon","region":"Mid West","Degree":"MD","imgPath":"../assets/custom/doctor-5.png"},
                {"name":"Jim Gavroche","region":"Mid West","Degree":"MD","imgPath":"../assets/custom/doctor-6.png"},
                {"name":"Filmore Gillenormand","region":"South East","Degree":"PhD","imgPath":"../assets/custom/doctor-1.png"},
                {"name":"Lt. Gillenormand","region":"South East","Degree":"MD","imgPath":"../assets/custom/doctor-2.png"},
                {"name":"Nora Joly","region":"Mid West","Degree":"PhD","imgPath":"../assets/custom/doctor-3.png"},
                {"name":"Julie Grantaire","region":"Mid West","Degree":"MD","imgPath":"../assets/custom/doctor-4.png"},
                {"name":"James Gollum","region":"Mid West","Degree":"PhD","imgPath":"../assets/custom/doctor-5.png"},
                {"name":"Mr. Gueulemer","region":"West","Degree":"PhD","imgPath":"../assets/custom/doctor-6.png"},
                {"name":"Tara Montparnasse","region":"West","Degree":"MD","imgPath":"../assets/custom/doctor-1.png"},
                {"name":"Braille Toussaint","region":"South East","Degree":"PhD","imgPath":"../assets/custom/doctor-2.png"},
                {"name":"Charlene Brujon","region":"West","Degree":"MD","imgPath":"../assets/custom/doctor-3.png"},
                {"name":"Mr. Hucheloup","region":"Mid West","Degree":"MD","imgPath":"../assets/custom/doctor-4.png"}
            ],
            "links":[
                {"source":1,"target":0,"value":1},
                {"source":2,"target":0,"value":8},
                {"source":3,"target":0,"value":10},
                {"source":3,"target":2,"value":6},
                {"source":4,"target":0,"value":1},
                {"source":5,"target":0,"value":1},
                {"source":6,"target":0,"value":1},
                {"source":7,"target":0,"value":1},
                {"source":8,"target":0,"value":2},
                {"source":9,"target":0,"value":1},
                {"source":11,"target":10,"value":1},
                {"source":11,"target":3,"value":3},
                {"source":11,"target":2,"value":3},
                {"source":11,"target":0,"value":5},
                {"source":12,"target":11,"value":1},
                {"source":13,"target":11,"value":1},
                {"source":14,"target":11,"value":1},
                {"source":15,"target":11,"value":1},
                {"source":17,"target":16,"value":4},
                {"source":18,"target":16,"value":4},
                {"source":18,"target":17,"value":4},
                {"source":19,"target":16,"value":4},
                {"source":19,"target":17,"value":4},
                {"source":19,"target":18,"value":4},
                {"source":20,"target":16,"value":3},
                {"source":20,"target":17,"value":3},
                {"source":20,"target":18,"value":3},
                {"source":20,"target":19,"value":4},
                {"source":21,"target":16,"value":3},
                {"source":21,"target":17,"value":3},
                {"source":21,"target":18,"value":3},
                {"source":21,"target":19,"value":3},
                {"source":21,"target":20,"value":5},
                {"source":22,"target":16,"value":3},
                {"source":22,"target":17,"value":3},
                {"source":22,"target":18,"value":3},
                {"source":41,"target":24,"value":2},
                {"source":41,"target":25,"value":5},
                {"source":42,"target":11,"value":7},
                {"source":42,"target":25,"value":4},
                {"source":42,"target":24,"value":1},
                {"source":43,"target":27,"value":9},
                {"source":44,"target":2,"value":6},
                {"source":44,"target":11,"value":9},
                {"source":45,"target":28,"value":2},
                {"source":47,"target":46,"value":5},
                {"source":48,"target":47,"value":6},
                {"source":48,"target":4,"value":9},
                {"source":49,"target":26,"value":7},
                {"source":49,"target":11,"value":2},
                {"source":50,"target":24,"value":1},
                {"source":51,"target":6,"value":2},
                {"source":52,"target":51,"value":9},
                {"source":52,"target":39,"value":1},
                {"source":53,"target":51,"value":1},
                {"source":54,"target":9,"value":2},
                {"source":54,"target":49,"value":8},
                {"source":54,"target":26,"value":7},
                {"source":55,"target":39,"value":6},
                {"source":56,"target":3,"value":5},
                {"source":56,"target":55,"value":4},
                {"source":57,"target":48,"value":1},
                {"source":58,"target":55,"value":7}
            ]
        }
        
  }

}
