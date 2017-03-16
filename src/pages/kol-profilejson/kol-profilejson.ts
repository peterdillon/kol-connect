import { Component, OnInit, ViewChild } from '@angular/core';
import { SocialSharing } from 'ionic-native';
import { NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
import { KOLsService } from '../../app/kols.service';
import { EngagementDetails } from '../engagement-details/engagement-details';

declare let d3: any;

@Component({
  selector: 'page-kol-profilejson',
  templateUrl: './kol-profilejson.html'
})

export class KOLProfileJson implements OnInit {

  @ViewChild('addNoteInput') addNoteInput;

  kols: any;
  kol: any;
  privacy: any;
  privacyKeys: any;
  engagement: any;
  engagementKeys: any;

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    public modalCtrl: ModalController,
    public loadingController: LoadingController,
    public http: Http,
    private kolService: KOLsService) {
    this.kol = {};
    this.privacy = { "type": "Public" }
    this.privacyKeys = ["Private", "Public"]
    this.engagement = { "name": "General Note" }
    this.engagementKeys = ["General Note", "Engagement 1", "Engagement 2", "Engagement 3",]
  }


  addNoteTo(currentEngagement) {
    // alert("Get current engagement... add focus on note input.")
    this.addNoteInput.setFocus();
 }

  generalShare(){
    SocialSharing.share("Message",null, null, "Message 2")
    .then(()=>{
       // alert("Success");
      },
      ()=>{
        // alert("Failed")
      })
  }

  viewDetails() {
    let modal = this.modalCtrl.create(EngagementDetails);
    modal.present();
  }

  hiddenEngagments = true;
  showEngagements() {
    this.hiddenEngagments = !this.hiddenEngagments;
  }

  // Save note ---------------------
  rows = [];
  noteContent = "";
  today: number;
  isClassVisible = false;
  noteClassSetter = "";

    addNote() {
        this.today = Date.now();
      //  alert(this.privacy.type);
        if (this.privacy.type == "Private") {
          this.noteClassSetter = "private-note"
        }
        if (this.privacy.type == "Public") {
          this.noteClassSetter = "public-note"
        }
        this.rows.push({ 
          noteContent: this.noteContent,
          notePrivacyType: this.privacy.type,
          noteEngagementName: this.engagement.name,
          noteDate: this.today,
          noteClass: this.noteClassSetter
          });
        this.noteContent = '';
        
    }
    removeNote(index) {
        this.rows.splice(index, 1);
    }
  // END Save note -----------------


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
    });
  }

  options;
  data;

  ngOnInit() {
    console.log('init');

    this.options = {
      chart: {
        type: 'forceDirectedGraph',
        width: 800,
        height: 650,
        linkDist: 50,
        margin: { top: 20, right: 20, bottom: 20, left: 20 },
        color: function (d) {
          return "orange";
        },
        tooltip: {
          contentGenerator: function (d) {
            var series = d.series[0];
            if (series.value === null) return;
            return "<div class='kol-card'><header><img src='./assets/custom/user-icon.png' /></span></header><section><h1 class='name'>" + d.name + "</h1><p>Allergy and Immunology</p><a href='#'>View KOL</a></section></div>";
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
        { "name": "Dr. John Davis", "group": 1, "imgPath": "./assets/custom/doctor-4.png" }
      ],
      "links": [
        { "source": 1, "target": 0, "value": 1 },
        { "source": 3, "target": 0, "value": 10 },
        { "source": 4, "target": 0, "value": 1 },
        { "source": 5, "target": 0, "value": 1 },
        { "source": 6, "target": 0, "value": 1 },
        { "source": 7, "target": 0, "value": 1 },
        { "source": 9, "target": 0, "value": 1 }]
    }
  }




}// keep