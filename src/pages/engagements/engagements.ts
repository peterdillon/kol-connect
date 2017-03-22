import { Component } from '@angular/core';
import { LoadingController, NavParams, NavController } from 'ionic-angular';
import { KOLProfileJson } from '../kol-profilejson/kol-profilejson';

@Component({
    selector: 'page-engagements',
    templateUrl: 'engagements.html',

})
export class Engagements { 

    constructor( public navCtrl: NavController ) {}

    showKOLs = false;

    itemSelected(item: string) {
      this.showKOLs = true;
      console.log("Selected Item", item);
    }
    
    goToKOL(id) {
      console.log(id);
      this.navCtrl.push(KOLProfileJson, {
        id: id
      });
    }

  engagements =  
    [{
        "engId": "001",
        "engName": "Endocrinology and Cancer Treatment Program",
        "engDate": "October 10, 2017",
        "engCity": "Brooklyn",
        "engState": "New York",
        "registered": "50",
        "attended": "43",
        "walkIns": "6",
        "engInfo": "Voluptatem itaque, dolores autem at, culpa cum quam ratione laborum quo totam, nemo sed dolor, hic nisi nobis illo."
    },{
        "engId": "002",
        "engName": "Modern Allergy Antihistamine Protocols",
        "engDate": "Novermber 22, 2017",
        "engCity": "Stanford",
        "engState": "Connecticut",
        "registered": "60",
        "attended": "53",
        "walkIns": "3",
        "engInfo": "Magnam dolores, enim consectetur veniam illum error eaque ea necessitatibus nam ipsam maxime dolore temporibus animi odio eum molestiae iure."
      },{
        "engId": "003",
        "engName": "Cancer Treatments 2017",
        "engDate": "December 22, 2017",
        "engCity": "New Brunswick",
        "engState": "New Jersey",
        "registered": "80",
        "attended": "68",
        "walkIns": "4",
        "engInfo": "Magnam dolores, enim consectetur veniam illum error eaque ea necessitatibus nam ipsam maxime dolore temporibus animi odio eum molestiae iure."
      }
    ];

     kols = [
        {
          "Id": "001j000000MVrIKAA1",
          "FirstName": "John",
          "Specialty": "Allergy and Immunology",
          "CityState": "Birmingham, AL",
          "Affiliation": "Alabama Allergy & Asthma Center",
          "Phone": "(205) 871-9661",
          "Score": 100,
          "Email": "janderson@alabamaallergy.com",
          "LastName": "Anderson",
          "Degree": "MD",
          "status": "Upcoming",
          "statusColor": "grey"
          
        },
        {
          "Id": "001j000000MVrIMAA1",
          "FirstName": "Jonathan",
          "Specialty": "Allergy and Immunology",
          "CityState": "Cincinnati, OH",
          "Affiliation": "University of Cincinnati College of Medicine",
          "Phone": "513-324-4964",
          "Score": 100,
          "Email": "jonathan.bernstein@uc.edu",
          "LastName": "Bernstein",
          "Degree": "MD",
          "status": "Successful",
          "statusColor": "secondary"
        },
        {
          "Id": "001j000000MVrIUAA1",
          "FirstName": "Joshua",
          "Specialty": "Allergy and Immunology",
          "CityState": "Walnut Creek, CA",
          "Affiliation": "Allergy & Asthma Medical Group of The Bay Area, Inc",
          "Phone": "925-935-6252 press 0 for receptionist",
          "Score": 97,
          "Email": "jsjacobsmd@sbcglobal.net",
          "LastName": "Jacobs",
          "Degree": "MD",
          "status": "Canceled",
          "statusColor": "danger"
        },
        {
          "Id": "001j000000MVrIaAAL",
          "FirstName": "William",
          "Specialty": "Allergy and Immunology",
          "CityState": "Dallas, TX",
          "Affiliation": "Allergy & Asthma Specialists",
          "Phone": "214-373-7374",
          "Score": 96,
          "Email": "lumrymd@allergyspecialists.us",
          "LastName": "Lumry",
          "Degree": "MD",
          "status": "Upcoming",
          "statusColor": "grey"
        },
        {
          "Id": "001j000000iapRnAAI",
          "FirstName": "Allen",
          "Specialty": "Allergy and Immunology",
          "CityState": "Dallas, TX",
          "Affiliation": "National Allergy, Asthma and Urticaria Centers of Charleston",
          "Phone": "(843) 797-8162",
          "Score": 94,
          "Email": "kaplana@musc.edu",
          "LastName": "Kaplan",
          "Degree": "MD",
          "status": "Canceled",
          "statusColor": "danger"
        },
        {
          "Id": "001j000000MVrIWAA1",
          "FirstName": "Douglas",
          "Specialty": "Allergy and Immunology",
          "CityState": "Layton, UT",
          "Affiliation": "Rocky Mountain Allergy, Asthma, and Immunology, LLC",
          "Phone": "801-775-9800",
          "Score": 92,
          "Email": "jonesallergy@gmail.com",
          "LastName": "Jones",
          "Degree": "MD",
          "status": "Successful",
          "statusColor": "secondary"
        },
        {
          "Id": "001j000000MVrIhAAL",
          "FirstName": "Marc",
          "Specialty": "Allergy and Immunology",
          "CityState": "Encinitas, CA",
          "Affiliation": "US HAEA Angioedema Center University of California, San Diego",
          "Phone": "858-822-6766",
          "Score": 85,
          "Email": "mriedl@ucsd.edu",
          "LastName": "Riedl",
          "Degree": "MD",
          "status": "Successful",
          "statusColor": "secondary"
        },
        {
          "Id": "001j000000j0nFrAAI",
          "FirstName": "Karen",
          "Specialty": "Allergy and Immunology",
          "CityState": "CHESTNUT HILL, MA",
          "Affiliation": "Brigham and Women's Hospital",
          "Phone": "617-732-9850",
          "Score": 84,
          "Email": "khsublatman@partners.org",
          "LastName": "Blatman",
          "Degree": "MD, MS",
          "status": "Successful",
          "statusColor": "secondary"
        },
        {
          "Id": "001j000000MVrIPAA1",
          "FirstName": "Timothy",
          "Specialty": "Allergy and Immunology",
          "CityState": "Hummelstown, PA",
          "Affiliation": "Penn State University",
          "Phone": "717- 531-6525",
          "Score": 79,
          "Email": "tcraig@pennstatehealth.psu.edu",
          "LastName": "Craig",
          "Degree": "MD, MS",
          "status": "Successful",
          "statusColor": "secondary"
        },
        {
          "Id": "001j000000NhZVuAAN",
          "FirstName": "Huamin",
          "Specialty": "Allergy and Immunology",
          "CityState": "Ellicott City, MD",
          "Affiliation": "Institute for Asthma & Allergy",
          "Phone": "(301) 986-9262",
          "Score": 78,
          "Email": "h_li3@yahoo.com",
          "LastName": "Li",
          "Degree": "MD",
          "status": "Canceled",
          "statusColor": "danger"
        },
        {
          "Id": "001j000000MVrImAAL",
          "FirstName": "Daniel",
          "Specialty": "Allergy and Immunology",
          "CityState": "Colorado Springs, CO",
          "Affiliation": "Asthma & Allergy Associates, P.C. and Research Center",
          "Phone": "",
          "Score": 75,
          "Email": "dsoteres@yahoo.com",
          "LastName": "Soteres",
          "Degree": "DO",
          "status": "Upcoming",
          "statusColor": "grey"
        },
        {
          "Id": "001j000000j0nOYAAY",
          "FirstName": "Isaac",
          "Specialty": "Allergy and Immunology",
          "CityState": "San Diego, CA",
          "Affiliation": "Immuno Health Centers",
          "Phone": "(303) 773-9000",
          "Score": 69,
          "Email": "",
          "LastName": "Melamed",
          "Degree": "MD, PhD",
          "status": "Successful",
          "statusColor": "secondary"
        },
        {
          "Id": "001j000000MVrIpAAL",
          "FirstName": "Katharine",
          "Specialty": "Allergy and Immunology",
          "CityState": "Boston, MA",
          "Affiliation": "Scripps Clinic Medical Group",
          "Phone": "(858) 764-9010",
          "Score": 65,
          "Email": "kwoessnermd@yahoo.com",
          "LastName": "Woessner",
          "Degree": "MD, MPH",
          "status": "Successful",
          "statusColor": "secondary"
        },
         {
          "Id": "001j000000ZtGXNAA3",
          "FirstName": "Aleena",
          "Specialty": "Allergy and Immunology",
          "CityState": "Spokane, WA",
          "Affiliation": "Massachusetts General Hospital",
          "Phone": "617-726-3850",
          "Score": 64,
          "Email": "abanerji@partners.org",
          "LastName": "Banerji",
          "Degree": "MD",
          "status": "Upcoming",
          "statusColor": "grey"
         },
         {
          "Id": "001j000000MVrITAA1",
          "FirstName": "Richard",
          "Specialty": "Allergy and Immunology",
          "CityState": "Paradise Valley, AZ",
          "Affiliation": "Marycliff Allergy Specialists",
          "Phone": "509-838-3655, 1952",
          "Score": 60,
          "Email": "rgower@marycliffallergy.com",
          "LastName": "Gower",
          "Degree": "MD",
          "status": "Successful",
          "statusColor": "secondary"
         },
         {
          "Id": "001j000000MVrIcAAL",
          "FirstName": "Michael",
          "Specialty": "Allergy and Immunology",
          "CityState": "Mineola, NY",
          "Affiliation": "Allergy, Asthma & Immunology Associates, Ltd.",
          "Phone": "(480) 949-7377",
          "Score": 57,
          "Email": "michaelmanningmd@aol.com",
          "LastName": "Manning",
          "Degree": "MD",
          "status": "Canceled",
          "statusColor": "danger"
         }
      ];

}



