import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class KOLsService {
    constructor(private http: Http) { }

    // public baseURL = 'http://localhost:8100/assets/data/kols.json';

    getKOLs() {
        // return this.http.get(this.baseURL).map(res => res.json());

        //Hard-coded
        return Observable.of([
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
                "pubsCount": 2,
                "PersonContactId": "003j000000HysvSAAR",
                "top40": true,
                "imgPath": "./assets/custom/doctor-1.png",
                "Publications__pr": {
                    "pubsCount": 1,
                    "done": false,
                    "records": [
                        {
                            "Contact__c": "003j000000HysvSAAR",
                            "Id": "a0lj0000001uDzeAAE",
                            "Journal_Name__c": "The Journal of allergy and clinical immunology",
                            "Title__c": "Subsets of airway myeloid-derived regulatory cells distinguish mild asthma from chronic obstructive pulmonary disease.",
                            "Publication_Date__c": "2014-10-25"
                        }
                    ]
                }
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
                "pubsCount": 10,
                "PersonContactId": "003j000000HysvUAAR",
                "top40": true,
                "imgPath": "./assets/custom/doctor-2.png",
                "Publications__pr": {
                    "pubsCount": 10,
                    "done": true,
                    "records": [
                        {
                            "Contact__c": "003j000000HysvUAAR",
                            "Id": "a0lj0000001uDzwAAE",
                            "Journal_Name__c": "Allergy and asthma proceedings : the official journal of regional and state allergy societies",
                            "Title__c": "Efficacy of C1 esterase inhibitor concentrate in treatment of cutaneous attacks of hereditary angioedema.",
                            "Publication_Date__c": "2015-03-23"
                        },
                        {
                            "Contact__c": "003j000000HysvUAAR",
                            "Id": "a0lj0000001uDzuAAE",
                            "Journal_Name__c": "Allergy",
                            "Title__c": "Phase II study results of a replacement therapy for hereditary angioedema with subcutaneous C1-inhibitor concentrate.",
                            "Publication_Date__c": "2015-05-28"
                        },
                        {
                            "Contact__c": "003j000000HysvUAAR",
                            "Id": "a0lj0000001uDztAAE",
                            "Journal_Name__c": "Immunotherapy",
                            "Title__c": "Recombinant replacement therapy for hereditary angioedema due to C1 inhibitor deficiency.",
                            "Publication_Date__c": "2015-08-07"
                        },
                        {
                            "Contact__c": "003j000000HysvUAAR",
                            "Id": "a0lj0000001uDzxAAE",
                            "Journal_Name__c": "The journal of allergy and clinical immunology. In practice",
                            "Title__c": "Recombinant human-C1 inhibitor is effective and safe for repeat hereditary angioedema attacks.",
                            "Publication_Date__c": "2015-02-11"
                        },
                        {
                            "Contact__c": "003j000000HysvUAAR",
                            "Id": "a0lj0000001uDzzAAE",
                            "Journal_Name__c": "The journal of allergy and clinical immunology. In practice",
                            "Title__c": "Characterization of anaphylaxis after ecallantide treatment of hereditary angioedema attacks.",
                            "Publication_Date__c": "2014-10-29"
                        },
                        {
                            "Contact__c": "003j000000HysvUAAR",
                            "Id": "a0lj0000001uDzyAAE",
                            "Journal_Name__c": "The journal of allergy and clinical immunology. In practice",
                            "Title__c": "Clinical features of pediatric hereditary angioedema.",
                            "Publication_Date__c": "2015-01-15"
                        },
                        {
                            "Contact__c": "003j000000HysvUAAR",
                            "Id": "a0lj0000001uE0SAAU",
                            "Journal_Name__c": "Allergy and asthma proceedings : the official journal of regional and state allergy societies",
                            "Title__c": "Current state of hereditary angioedema management: a patient survey.",
                            "Publication_Date__c": "2015-06-01"
                        },
                        {
                            "Contact__c": "003j000000HysvUAAR",
                            "Id": "a0lj0000001uE02AAE",
                            "Journal_Name__c": "International archives of allergy and immunology",
                            "Title__c": "Diagnosis and treatment of bradykinin-mediated angioedema: outcomes from an angioedema expert consensus meeting.",
                            "Publication_Date__c": "2014-11-15"
                        },
                        {
                            "Contact__c": "003j000000HysvUAAR",
                            "Id": "a0lj0000001uE01AAE",
                            "Journal_Name__c": "The journal of allergy and clinical immunology. In practice",
                            "Title__c": "Idiopathic nonhistaminergic angioedema successfully treated with ecallantide, icatibant, and C1 esterase inhibitor replacement.",
                            "Publication_Date__c": "2014-07-03"
                        },
                        {
                            "Contact__c": "003j000000HysvUAAR",
                            "Id": "a0lj0000001uE00AAE",
                            "Journal_Name__c": "Allergy and asthma proceedings : the official journal of regional and state allergy societies",
                            "Title__c": "Facilitating home-based treatment of hereditary angioedema.",
                            "Publication_Date__c": "2014-12-30"
                        }
                    ]
                }
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
                "pubsCount": 1,
                "PersonContactId": "003j000000HysvcAAB",
                "top40": false,
                "imgPath": "./assets/custom/doctor-3.png",
                "Publications__pr": {
                    "pubsCount": 1,
                    "done": true,
                    "records": [
                        {
                            "Contact__c": "003j000000HysvcAAB",
                            "Id": "a0lj0000001uE0oAAE",
                            "Journal_Name__c": "The World Allergy Organization journal",
                            "Title__c": "Hereditary angioedema caused by c1-esterase inhibitor deficiency: a literature-based analysis and clinical commentary on prophylaxis treatment strategies.",
                            "Publication_Date__c": "2011-02-01"
                        }
                    ]
                }
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
                "pubsCount": 10,
                "PersonContactId": "003j000000HysviAAB",
                "top40": true,
                "imgPath": "./assets/custom/doctor-4.png",
                "Publications__pr": {
                    "pubsCount": 10,
                    "done": true,
                    "records": [
                        {
                            "Contact__c": "003j000000HysviAAB",
                            "Id": "a0lj0000001uE0jAAE",
                            "Journal_Name__c": "Allergy and asthma proceedings : the official journal of regional and state allergy societies",
                            "Title__c": "Prevalence of hereditary angioedema in untested first-degree blood relatives of known subjects with hereditary angioedema.",
                            "Publication_Date__c": "2015-03-23"
                        },
                        {
                            "Contact__c": "003j000000HysviAAB",
                            "Id": "a0lj0000001uE0kAAE",
                            "Journal_Name__c": "The journal of allergy and clinical immunology. In practice",
                            "Title__c": "Comparison of chromogenic and ELISA functional C1 inhibitor tests in diagnosing hereditary angioedema.",
                            "Publication_Date__c": "2014-10-11"
                        },
                        {
                            "Contact__c": "003j000000HysviAAB",
                            "Id": "a0lj0000001uE0lAAE",
                            "Journal_Name__c": "The journal of allergy and clinical immunology. In practice",
                            "Title__c": "Characterization of anaphylaxis after ecallantide treatment of hereditary angioedema attacks.",
                            "Publication_Date__c": "2014-10-29"
                        },
                        {
                            "Contact__c": "003j000000HysviAAB",
                            "Id": "a0lj0000001uE1KAAU",
                            "Journal_Name__c": "Allergy and asthma proceedings : the official journal of regional and state allergy societies",
                            "Title__c": "Quality of life in patients with hereditary angioedema receiving therapy for routine prevention of attacks.",
                            "Publication_Date__c": "2014-10-01"
                        },
                        {
                            "Contact__c": "003j000000HysviAAB",
                            "Id": "a0lj0000001uE19AAE",
                            "Journal_Name__c": "American journal of rhinology & allergy",
                            "Title__c": "Nanofiltered C1 esterase inhibitor for treatment of laryngeal attacks in patients with hereditary angioedema.",
                            "Publication_Date__c": "2013-12-01"
                        },
                        {
                            "Contact__c": "003j000000HysviAAB",
                            "Id": "a0lj0000001uE0vAAE",
                            "Journal_Name__c": "The American journal of managed care",
                            "Title__c": "Management and prevention of hereditary angioedema attacks.",
                            "Publication_Date__c": "2013-06-01"
                        },
                        {
                            "Contact__c": "003j000000HysviAAB",
                            "Id": "a0lj0000001uE0qAAE",
                            "Journal_Name__c": "The journal of allergy and clinical immunology. In practice",
                            "Title__c": "US Hereditary Angioedema Association Medical Advisory Board 2013 recommendations for the management of hereditary angioedema due to C1 inhibitor deficiency.",
                            "Publication_Date__c": "2013-08-30"
                        },
                        {
                            "Contact__c": "003j000000HysviAAB",
                            "Id": "a0lj0000001uE0pAAE",
                            "Journal_Name__c": "The journal of allergy and clinical immunology. In practice",
                            "Title__c": "Escalating doses of C1 esterase inhibitor (CINRYZE) for prophylaxis in patients with hereditary angioedema.",
                            "Publication_Date__c": "2013-11-11"
                        },
                        {
                            "Contact__c": "003j000000HysviAAB",
                            "Id": "a0lj0000001uDzjAAE",
                            "Journal_Name__c": "Academic emergency medicine : official journal of the Society for Academic Emergency Medicine",
                            "Title__c": "A consensus parameter for the evaluation and management of angioedema in the emergency department.",
                            "Publication_Date__c": "2014-04-01"
                        },
                        {
                            "Contact__c": "003j000000HysviAAB",
                            "Id": "a0lj0000001uE0nAAE",
                            "Journal_Name__c": "Allergy and asthma proceedings : the official journal of regional and state allergy societies",
                            "Title__c": "Treatment of hereditary angioedema with icatibant: efficacy in clinical trials versus effectiveness in the real-world setting.",
                            "Publication_Date__c": "2014-08-06"
                        }
                    ]
                }
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
                "pubsCount": 10,
                "PersonContactId": "003j000000rPAlTAAW",
                "top40": true,
                "imgPath": "./assets/custom/doctor-5.png",
                "Publications__pr": {
                    "pubsCount": 10,
                    "done": true,
                    "records": [
                        {
                            "Contact__c": "003j000000rPAlTAAW",
                            "Id": "a0lj00000029FCcAAM",
                            "Journal_Name__c": "Annals of allergy, asthma & immunology : official publication of the American College of Allergy, Asthma, & Immunology",
                            "Title__c": "Type III hereditary angioedema: defined, but not understood."
                        },
                        {
                            "Contact__c": "003j000000rPAlTAAW",
                            "Id": "a0lj00000029FCbAAM",
                            "Journal_Name__c": "Allergy and asthma proceedings : the official journal of regional and state allergy societies",
                            "Title__c": "Hereditary angioedema with normal C1 inhibitor function: consensus of an international expert panel.",
                            "Topic__c": "A new form of hereditary angioedema (HAE) with normal C1 inhibitor (C1INH) was first described in 2000. The lack of clear diagnostic criteria, the heterogeneity among affected patients, and the varying names given to this disease have led to substantial confusion among both physicians and patients. This study was designed to bring more clarity to the diagnosis and potential treatment of HAE with normal C1INH. An international symposium of experts was convened to review the field and develop consensus opinions that could help clinicians who evaluate and manage these patients. Criteria were developed for the diagnosis of HAE with normal C1INH in patients with recurrent angioedema in the absence of concurrent urticaria. In addition, potential therapeutic strategies are discussed. The consensus criteria developed during this symposium will allow physicians to better diagnose and treat patients with HAE with normal C1INH."
                        },
                        {
                            "Contact__c": "003j000000rPAlTAAW",
                            "Id": "a0lj00000029FCaAAM",
                            "Journal_Name__c": "The World Allergy Organization journal",
                            "Title__c": "Bradykinin and the pathogenesis of hereditary angioedema."
                        },
                        {
                            "Contact__c": "003j000000rPAlTAAW",
                            "Id": "a0lj00000029FCZAA2",
                            "Journal_Name__c": "The Journal of allergy and clinical immunology",
                            "Title__c": "Enzymatic pathways in the pathogenesis of hereditary angioedema: the role of C1 inhibitor therapy.",
                            "Topic__c": "A functional abnormality of C1 inhibitor (C1INH) is present in types I and II hereditary angioedema (HAE), and normal C1INH may be rendered ineffective in the newly described type III HAE. C1INH inhibits factor XIIa, factor XII fragment (XIIf), kallikrein, and plasmin. Thus, in its absence, there is marked activation of the bradykinin-forming cascade resulting in severe angioedema. Factor XII may autoactivate on binding to endothelial cell surface gC1qR (receptor for the globular heads of C1q) thus initiating the cascade. Alternatively, stimuli that activate endothelial cells may liberate (or express at the cell surface) heat shock protein 90 or the enzyme prolylcarboxypeptidase, either of which can interact with the prekallikrein-high-molecular-weight kininogen complex to convert prekallikrein to kallikrein stoichiometrically. The kallikrein produced can cleave high-molecular-weight kininogen to produce bradykinin and also recruit factor XII by enzymatically activating it. Patients with type I or II HAE have mutant C1INH so that control of C1 activation is lost. Autoactivation of C1r in the absence of C1INH leads to C1s activation followed by C4 cleavage and depletion. An attack of swelling is accompanied by conversion of factor XIIa to factor XIIf and further enzymatic activation of C1r so that C4 levels drop further and C2 is depleted. New therapies for HAE focus on the bradykinin-forming cascade and include a kallikrein inhibitor and a bradykinin B-2 receptor antagonist in addition to administration of purified C1INH."
                        },
                        {
                            "Contact__c": "003j000000rPAlTAAW",
                            "Id": "a0lj00000029FCYAA2",
                            "Journal_Name__c": "The Journal of allergy and clinical immunology",
                            "Title__c": "Kinin formation in C1 inhibitor deficiency.",
                            "Publication_Date__c": "2010-04-09"
                        },
                        {
                            "Contact__c": "003j000000rPAlTAAW",
                            "Id": "a0lj00000029FCXAA2",
                            "Journal_Name__c": "Annals of allergy, asthma & immunology : official publication of the American College of Allergy, Asthma, & Immunology",
                            "Title__c": "Treatment of episodes of hereditary angioedema with C1 inhibitor: serial assessment of observed abnormalities of the plasma bradykinin-forming pathway and fibrinolysis.",
                            "Topic__c": "The plasma levels of factor XIIa, kallikrein, and bradykinin decreased when measured serially subsequent to the infusion of nanofiltered C1-INH."
                        },
                        {
                            "Contact__c": "003j000000rPAlTAAW",
                            "Id": "a0lj00000029FCWAA2",
                            "Journal_Name__c": "Molecular immunology",
                            "Title__c": "The plasma bradykinin-forming pathways and its interrelationships with complement.",
                            "Topic__c": "The plasma bradykinin-forming cascade and the complement pathways share many elements, including cross-activation, common control mechanisms, and shared binding proteins. The C1 inhibitor (C1 INH) is not only the inhibitor of activated C1r and C1s, but it is the key control protein of the plasma bradykinin-forming cascade. It inhibits the autoactivation of Factor XII, the ability of Factor XIIa to activate prekallikrein and Factor XI, the activation of high molecular weight kininogen (HK) by kallikrein, and the feedback activation of Factor XII by kallikrein. Thus in the absence of C1 INH (hereditary angioedema or acquired C1 INH deficiency) there is unimpeded formation of bradykinin leading to angioedema. Activated Factor XII (Factor XIIa, 80,000 kDa) is further cleaved by kallikrein or plasmin to yield Factor XII fragment (Factor XIIf, 30,000 kDa) and Factor XIIf can activate the C1r subcomponent of C1, particularly when C1 INH (which inhibits Factor XIIf) is absent. Once bradykinin is formed, it causes vasodilatation and increased vascular permeability by interaction with constitutively expressed B-2 receptors. However degradation of bradykinin by carboxypeptidase N (in plasma) or carboxypeptidase M (on endothelial cells) yields des-arg-9 (Kerbiriou and Griffin, 1979) bradykinin which interacts with B-1 receptors. B-1 receptors are induced in inflammatory states by cytokines such as Interleukin 1 and its interaction with bradykinin may prolong or perpetuate the vascular response until bradykinin is completely inactivated by angiotensin converting enzyme or aminopeptidase P, or neutral endopeptidase. The entire bradykinin-forming cascade is assembled and can be activated along the surface of endothelial cells in zinc dependent reactions involving gC1qR, cytokeratin 1, and the urokinase plasminogen activated receptor (u-PAR). Although Factors XII and HK can be shown to bind to each one of these proteins, they exist in endothelial cells as two bimolecular complexes; gC1qR-cytokeratin 1, which preferentially binds HK, and cytokeratin 1-u-PAR which preferentially binds Factor XII. The gC1qR, which binds the globular heads of C1q is present in excess and can bind either Factor XII or HK however the binding sites for HK and C1q have been shown to reside at opposite ends of gC1qR. Activation of the bradykinin-forming pathway can be initiated at the cell surface by gC1qR-induced autoactivation of Factor XII or direct activation of the prekallikrein-HK complex by endothelial cell-derived heat-shock protein 90 (HSP 90) or prolylcarboxypeptidase with recruitment or Factor XII by the kallikrein produced."
                        },
                        {
                            "Contact__c": "003j000000rPAlTAAW",
                            "Id": "a0lj00000029FCVAA2",
                            "Journal_Name__c": "The Journal of allergy and clinical immunology",
                            "Title__c": "Factor XII-independent cleavage of high-molecular-weight kininogen by prekallikrein and inhibition by C1 inhibitor.",
                            "Topic__c": "PK is an enzyme that can cleave HK to release bradykinin, and this reaction is inhibited by C1INH. This might account, in part, for circulating bradykinin levels and initiation of kinin formation in C1INH deficiency.",
                            "Publication_Date__c": "2009-04-01"
                        },
                        {
                            "Contact__c": "003j000000rPAlTAAW",
                            "Id": "a0lj00000029FCdAAM",
                            "Journal_Name__c": "PloS one",
                            "Title__c": "Hereditary angioedema attacks resolve faster and are shorter after early icatibant treatment.",
                            "Topic__c": "Early blockade of the bradykinin B(2) receptor with icatibant, particularly within the first hour of attack onset, significantly reduced attack duration and time to attack resolution.",
                            "Publication_Date__c": "2013-02-04"
                        },
                        {
                            "Contact__c": "003j000000rPAlTAAW",
                            "Id": "a0lj00000029FCeAAM",
                            "Journal_Name__c": "Allergy",
                            "Title__c": "A novel assay to diagnose hereditary angioedema utilizing inhibition of bradykinin-forming enzymes.",
                            "Topic__c": "Diagnosis of HAE types I and II can be ascertained by inhibition of enzymes of the bradykinin-forming cascade, namely factor XIIa and kallikrein. Either method yields functional C1-INH levels in patients with HAE (types I and II) that are clearly abnormal with less variance or uncertainty than the commercial method.",
                            "Publication_Date__c": "2014-10-15"
                        }
                    ]
                }
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
                "pubsCount": 0,
                "top40": false,
                "imgPath": "./assets/custom/doctor-2.png",
                "Degree": "MD",
                "PersonContactId": "003j000000HysveAAB"
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
                "pubsCount": 10,
                "PersonContactId": "003j000000HysvpAAB",
                "top40": true,
                "imgPath": "./assets/custom/doctor-6.png",
                "Publications__pr": {
                    "pubsCount": 10,
                    "done": true,
                    "records": [
                        {
                            "Contact__c": "003j000000HysvpAAB",
                            "Id": "a0lj0000001uE11AAE",
                            "Journal_Name__c": "Allergy",
                            "Title__c": "Classification, diagnosis, and approach to treatment for angioedema: consensus report from the Hereditary Angioedema International Working Group.",
                            "Publication_Date__c": "2014-03-27"
                        },
                        {
                            "Contact__c": "003j000000HysvpAAB",
                            "Id": "a0lj0000001uE0zAAE",
                            "Journal_Name__c": "The journal of allergy and clinical immunology. In practice",
                            "Title__c": "Current medical management of hereditary angioedema: follow-up survey of US physicians.",
                            "Publication_Date__c": "2014-11-18"
                        },
                        {
                            "Contact__c": "003j000000HysvpAAB",
                            "Id": "a0lj0000001uE0yAAE",
                            "Journal_Name__c": "Annals of allergy, asthma & immunology : official publication of the American College of Allergy, Asthma, & Immunology",
                            "Title__c": "Critical appraisal of androgen use in hereditary angioedema: a systematic review.",
                            "Publication_Date__c": "2015-02-21"
                        },
                        {
                            "Contact__c": "003j000000HysvpAAB",
                            "Id": "a0lj0000001uE0xAAE",
                            "Journal_Name__c": "Allergy and asthma proceedings : the official journal of regional and state allergy societies",
                            "Title__c": "Prevalence of hereditary angioedema in untested first-degree blood relatives of known subjects with hereditary angioedema.",
                            "Publication_Date__c": "2015-03-23"
                        },
                        {
                            "Contact__c": "003j000000HysvpAAB",
                            "Id": "a0lj0000001uE1RAAU",
                            "Journal_Name__c": "Annals of allergy, asthma & immunology : official publication of the American College of Allergy, Asthma, & Immunology",
                            "Title__c": "The therapeutic landscape for hereditary angioedema: more change on the horizon?",
                            "Publication_Date__c": "2014-10-01"
                        },
                        {
                            "Contact__c": "003j000000HysvpAAB",
                            "Id": "a0lj0000001uE13AAE",
                            "Journal_Name__c": "Annals of allergy, asthma & immunology : official publication of the American College of Allergy, Asthma, & Immunology",
                            "Title__c": "Recombinant human C1-esterase inhibitor relieves symptoms of hereditary angioedema attacks: phase 3, randomized, placebo-controlled trial.",
                            "Publication_Date__c": "2014-01-07"
                        },
                        {
                            "Contact__c": "003j000000HysvpAAB",
                            "Id": "a0lj0000001uE15AAE",
                            "Journal_Name__c": "Immunology and allergy clinics of North America",
                            "Title__c": "Creating a comprehensive treatment plan for hereditary angioedema.",
                            "Publication_Date__c": "2013-08-26"
                        },
                        {
                            "Contact__c": "003j000000HysvpAAB",
                            "Id": "a0lj0000001uE16AAE",
                            "Journal_Name__c": "Annals of allergy, asthma & immunology : official publication of the American College of Allergy, Asthma, & Immunology",
                            "Title__c": "Efficacy and safety of recombinant C1 inhibitor for the treatment of hereditary angioedema attacks: a North American open-label study.",
                            "Publication_Date__c": "2013-03-06"
                        },
                        {
                            "Contact__c": "003j000000HysvpAAB",
                            "Id": "a0lj0000001uE1EAAU",
                            "Journal_Name__c": "American journal of rhinology & allergy",
                            "Title__c": "Nanofiltered C1 esterase inhibitor for treatment of laryngeal attacks in patients with hereditary angioedema.",
                            "Publication_Date__c": "2013-12-01"
                        },
                        {
                            "Contact__c": "003j000000HysvpAAB",
                            "Id": "a0lj0000001uE12AAE",
                            "Journal_Name__c": "The journal of allergy and clinical immunology. In practice",
                            "Title__c": "Hereditary angioedema with normal C1-INH (HAE type III).",
                            "Publication_Date__c": "2013-08-02"
                        }
                    ]
                }
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
                "pubsCount": 0,
                "top40": true,
                "imgPath": "./assets/custom/doctor-2.png",
                "Degree": "MD, MS",
                "PersonContactId": "003j000000rtwbqAAA"
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
                "pubsCount": 10,
                "PersonContactId": "003j000000HysvXAAR",
                "top40": true,
                "imgPath": "./assets/custom/doctor-1.png",
                "Publications__pr": {
                    "pubsCount": 10,
                    "done": true,
                    "records": [
                        {
                            "Contact__c": "003j000000HysvXAAR",
                            "Id": "a0lj0000001uE0EAAU",
                            "Journal_Name__c": "Allergy and asthma proceedings : the official journal of regional and state allergy societies",
                            "Title__c": "Efficacy of C1 esterase inhibitor concentrate in treatment of cutaneous attacks of hereditary angioedema.",
                            "Publication_Date__c": "2015-03-23"
                        },
                        {
                            "Contact__c": "003j000000HysvXAAR",
                            "Id": "a0lj0000001uE0BAAU",
                            "Journal_Name__c": "Annals of allergy, asthma & immunology : official publication of the American College of Allergy, Asthma, & Immunology",
                            "Title__c": "Patients perception of self-administrated medication in the treatment of hereditary angioedema.",
                            "Publication_Date__c": "2015-06-26"
                        },
                        {
                            "Contact__c": "003j000000HysvXAAR",
                            "Id": "a0lj0000001uE07AAE",
                            "Journal_Name__c": "Allergy and asthma proceedings : the official journal of regional and state allergy societies",
                            "Title__c": "Barriers to self-administered therapy for hereditary angioedema.",
                            "Publication_Date__c": "2014-06-01"
                        },
                        {
                            "Contact__c": "003j000000HysvXAAR",
                            "Id": "a0lj0000001uDziAAE",
                            "Journal_Name__c": "Academic emergency medicine : official journal of the Society for Academic Emergency Medicine",
                            "Title__c": "A consensus parameter for the evaluation and management of angioedema in the emergency department.",
                            "Publication_Date__c": "2014-04-01"
                        },
                        {
                            "Contact__c": "003j000000HysvXAAR",
                            "Id": "a0lj0000001uE0GAAU",
                            "Journal_Name__c": "Transfusion",
                            "Title__c": "Treatment of hereditary angioedema: a review (CME).",
                            "Publication_Date__c": "2014-04-16"
                        },
                        {
                            "Contact__c": "003j000000HysvXAAR",
                            "Id": "a0lj0000001uE1IAAU",
                            "Journal_Name__c": "Pediatric allergy and immunology : official publication of the European Society of Pediatric Allergy and Immunology",
                            "Title__c": "Plasma-derived C1-INH for managing hereditary angioedema in pediatric patients: A systematic review.",
                            "Publication_Date__c": "2015-09-01"
                        },
                        {
                            "Contact__c": "003j000000HysvXAAR",
                            "Id": "a0lj0000001uE1HAAU",
                            "Journal_Name__c": "Allergy & rhinology (Providence, R.I.)",
                            "Title__c": "Perioperative management for patients with hereditary angioedema.",
                            "Publication_Date__c": "2015-01-01"
                        },
                        {
                            "Contact__c": "003j000000HysvXAAR",
                            "Id": "a0lj0000001uE14AAE",
                            "Journal_Name__c": "American journal of rhinology & allergy",
                            "Title__c": "Nanofiltered C1 esterase inhibitor for treatment of laryngeal attacks in patients with hereditary angioedema.",
                            "Publication_Date__c": "2013-12-01"
                        },
                        {
                            "Contact__c": "003j000000HysvXAAR",
                            "Id": "a0lj0000001uE0KAAU",
                            "Journal_Name__c": "International archives of allergy and immunology",
                            "Title__c": "Recent advances in hereditary angioedema self-administration treatment: summary of an International Hereditary Angioedema Expert Meeting.",
                            "Publication_Date__c": "2013-05-28"
                        },
                        {
                            "Contact__c": "003j000000HysvXAAR",
                            "Id": "a0lj0000001uE0JAAU",
                            "Journal_Name__c": "Annals of allergy, asthma & immunology : official publication of the American College of Allergy, Asthma, & Immunology",
                            "Title__c": "Effect of time to treatment on response to C1 esterase inhibitor concentrate for hereditary angioedema attacks.",
                            "Publication_Date__c": "2013-07-16"
                        }
                    ]
                }
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
                "pubsCount": 10,
                "PersonContactId": "003j000000IzhgIAAR",
                "top40": true,
                "imgPath": "./assets/custom/doctor-2.png",
                "Publications__pr": {
                    "pubsCount": 10,
                    "done": true,
                    "records": [
                        {
                            "Contact__c": "003j000000IzhgIAAR",
                            "Id": "a0lj0000001uE0ZAAU",
                            "Journal_Name__c": "Pediatric allergy and immunology : official publication of the European Society of Pediatric Allergy and Immunology",
                            "Title__c": "Safety and efficacy of C1 esterase inhibitor for acute attacks in children with hereditary angioedema.",
                            "Publication_Date__c": "2015-07-14"
                        },
                        {
                            "Contact__c": "003j000000IzhgIAAR",
                            "Id": "a0lj0000001uE0aAAE",
                            "Journal_Name__c": "Allergy",
                            "Title__c": "Phase II study results of a replacement therapy for hereditary angioedema with subcutaneous C1-inhibitor concentrate.",
                            "Publication_Date__c": "2015-05-28"
                        },
                        {
                            "Contact__c": "003j000000IzhgIAAR",
                            "Id": "a0lj0000001uE0bAAE",
                            "Journal_Name__c": "Allergy and asthma proceedings : the official journal of regional and state allergy societies",
                            "Title__c": "Prevalence of hereditary angioedema in untested first-degree blood relatives of known subjects with hereditary angioedema.",
                            "Publication_Date__c": "2015-03-23"
                        },
                        {
                            "Contact__c": "003j000000IzhgIAAR",
                            "Id": "a0lj0000001uE0cAAE",
                            "Journal_Name__c": "The journal of allergy and clinical immunology. In practice",
                            "Title__c": "Recombinant human-C1 inhibitor is effective and safe for repeat hereditary angioedema attacks.",
                            "Publication_Date__c": "2015-02-11"
                        },
                        {
                            "Contact__c": "003j000000IzhgIAAR",
                            "Id": "a0lj0000001uE18AAE",
                            "Journal_Name__c": "American journal of rhinology & allergy",
                            "Title__c": "Nanofiltered C1 esterase inhibitor for treatment of laryngeal attacks in patients with hereditary angioedema.",
                            "Publication_Date__c": "2013-12-01"
                        },
                        {
                            "Contact__c": "003j000000IzhgIAAR",
                            "Id": "a0lj0000001uE0gAAE",
                            "Journal_Name__c": "The journal of allergy and clinical immunology. In practice",
                            "Title__c": "US Hereditary Angioedema Association Medical Advisory Board 2013 recommendations for the management of hereditary angioedema due to C1 inhibitor deficiency.",
                            "Publication_Date__c": "2013-08-30"
                        },
                        {
                            "Contact__c": "003j000000IzhgIAAR",
                            "Id": "a0lj0000001uE0fAAE",
                            "Journal_Name__c": "Allergy and asthma proceedings : the official journal of regional and state allergy societies",
                            "Title__c": "Treatment of hereditary angioedema with icatibant: efficacy in clinical trials versus effectiveness in the real-world setting.",
                            "Publication_Date__c": "2014-08-06"
                        },
                        {
                            "Contact__c": "003j000000IzhgIAAR",
                            "Id": "a0lj0000001uE0eAAE",
                            "Journal_Name__c": "The journal of allergy and clinical immunology. In practice",
                            "Title__c": "Characterization of anaphylaxis after ecallantide treatment of hereditary angioedema attacks.",
                            "Publication_Date__c": "2014-10-29"
                        },
                        {
                            "Contact__c": "003j000000IzhgIAAR",
                            "Id": "a0lj0000001uE0dAAE",
                            "Journal_Name__c": "The journal of allergy and clinical immunology. In practice",
                            "Title__c": "Comparison of chromogenic and ELISA functional C1 inhibitor tests in diagnosing hereditary angioedema.",
                            "Publication_Date__c": "2014-10-11"
                        },
                        {
                            "Contact__c": "003j000000IzhgIAAR",
                            "Id": "a0lj0000001uE0iAAE",
                            "Journal_Name__c": "Annals of allergy, asthma & immunology : official publication of the American College of Allergy, Asthma, & Immunology",
                            "Title__c": "Analysis of hereditary angioedema attacks requiring a second dose of ecallantide.",
                            "Publication_Date__c": "2013-01-08"
                        }
                    ]
                }
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
                "pubsCount": 2,
                "PersonContactId": "003j000000HysvuAAB",
                "top40": true,
                "imgPath": "./assets/custom/doctor-3.png",
                "Publications__pr": {
                    "pubsCount": 2,
                    "done": true,
                    "records": [
                        {
                            "Contact__c": "003j000000HysvuAAB",
                            "Id": "a0lj0000001uE0XAAU",
                            "Journal_Name__c": "Allergy and asthma proceedings : the official journal of regional and state allergy societies",
                            "Title__c": "Efficacy and safety of ecallantide in treatment of recurrent attacks of hereditary angioedema: open-label continuation study.",
                            "Publication_Date__c": "2013-04-01"
                        },
                        {
                            "Contact__c": "003j000000HysvuAAB",
                            "Id": "a0lj0000001uE17AAE",
                            "Journal_Name__c": "Annals of allergy, asthma & immunology : official publication of the American College of Allergy, Asthma, & Immunology",
                            "Title__c": "Analysis of hereditary angioedema attacks requiring a second dose of ecallantide.",
                            "Publication_Date__c": "2013-01-08"
                        }
                    ]
                }
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
                "pubsCount": 0,
                "top40": false,
                "imgPath": "./assets/custom/doctor-2.png",
                "Degree": "MD, PhD",
                "PersonContactId": "003j000000rtwkTAAQ"
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
                "pubsCount": 2,
                "PersonContactId": "003j000000HysvxAAB",
                "top40": false,
                "imgPath": "./assets/custom/doctor-4.png",
                "Publications__pr": {
                    "pubsCount": 2,
                    "done": true,
                    "records": [
                        {
                            "Contact__c": "003j000000HysvxAAB",
                            "Id": "a0lj0000001uE03AAE",
                            "Journal_Name__c": "Current opinion in allergy and clinical immunology",
                            "Title__c": "Aspirin desensitization for cardiovascular disease.",
                            "Publication_Date__c": "2015-08-01"
                        },
                        {
                            "Contact__c": "003j000000HysvxAAB",
                            "Id": "a0lj0000001uE1PAAU",
                            "Journal_Name__c": "Allergy and asthma proceedings : the official journal of regional and state allergy societies",
                            "Title__c": "Surfer's asthma.",
                            "Publication_Date__c": "2009-04-01"
                        }
                    ]
                }
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
                "pubsCount": 10,
                "PersonContactId": "003j000000bcuksAAA",
                "top40": false,
                "imgPath": "./assets/custom/doctor-5.png",
                "Publications__pr": {
                    "pubsCount": 10,
                    "done": true,
                    "records": [
                        {
                            "Contact__c": "003j000000bcuksAAA",
                            "Id": "a0lj0000001uDzmAAE",
                            "Journal_Name__c": "The journal of allergy and clinical immunology. In practice",
                            "Title__c": "Current medical management of hereditary angioedema: follow-up survey of US physicians.",
                            "Publication_Date__c": "2014-11-18"
                        },
                        {
                            "Contact__c": "003j000000bcuksAAA",
                            "Id": "a0lj0000001uDznAAE",
                            "Journal_Name__c": "The journal of allergy and clinical immunology. In practice",
                            "Title__c": "Safety and outcomes of test doses for the evaluation of adverse drug reactions: a 5-year retrospective review.",
                            "Publication_Date__c": "2014-09-10"
                        },
                        {
                            "Contact__c": "003j000000bcuksAAA",
                            "Id": "a0lj0000001uDzpAAE",
                            "Journal_Name__c": "Annals of allergy, asthma & immunology : official publication of the American College of Allergy, Asthma, & Immunology",
                            "Title__c": "Assessment of home infusion program for treating nonlaryngeal hereditary angioedema attacks.",
                            "Publication_Date__c": "2014-03-13"
                        },
                        {
                            "Contact__c": "003j000000bcuksAAA",
                            "Id": "a0lj0000001uDzqAAE",
                            "Journal_Name__c": "The journal of allergy and clinical immunology. In practice",
                            "Title__c": "US Hereditary Angioedema Association Medical Advisory Board 2013 recommendations for the management of hereditary angioedema due to C1 inhibitor deficiency.",
                            "Publication_Date__c": "2013-08-30"
                        },
                        {
                            "Contact__c": "003j000000bcuksAAA",
                            "Id": "a0lj0000001uDzrAAE",
                            "Journal_Name__c": "Annals of allergy, asthma & immunology : official publication of the American College of Allergy, Asthma, & Immunology",
                            "Title__c": "The burden of illness in patients with hereditary angioedema.",
                            "Publication_Date__c": "2013-09-18"
                        },
                        {
                            "Contact__c": "003j000000bcuksAAA",
                            "Id": "a0lj0000001uE09AAE",
                            "Journal_Name__c": "Allergy and asthma proceedings : the official journal of regional and state allergy societies",
                            "Title__c": "Before and after, the impact of available on-demand treatment for HAE.",
                            "Publication_Date__c": "2015-04-01"
                        },
                        {
                            "Contact__c": "003j000000bcuksAAA",
                            "Id": "a0lj0000001uE0DAAU",
                            "Journal_Name__c": "Allergy and asthma proceedings : the official journal of regional and state allergy societies",
                            "Title__c": "Current characteristics associated with hereditary angioedema attacks and treatment: the home infusion based patient experience.",
                            "Publication_Date__c": "2015-04-01"
                        },
                        {
                            "Contact__c": "003j000000bcuksAAA",
                            "Id": "a0lj0000001uE0QAAU",
                            "Journal_Name__c": "Allergy and asthma proceedings : the official journal of regional and state allergy societies",
                            "Title__c": "Current state of hereditary angioedema management: a patient survey.",
                            "Publication_Date__c": "2015-06-01"
                        },
                        {
                            "Contact__c": "003j000000bcuksAAA",
                            "Id": "a0lj0000001uE10AAE",
                            "Journal_Name__c": "Allergy and asthma proceedings : the official journal of regional and state allergy societies",
                            "Title__c": "Nanofiltered C1 esterase inhibitor (human) for hereditary angioedema attacks in pregnant women.",
                            "Publication_Date__c": "2013-04-01"
                        },
                        {
                            "Contact__c": "003j000000bcuksAAA",
                            "Id": "a0lj0000001uE1MAAU",
                            "Journal_Name__c": "Clinical and experimental immunology",
                            "Title__c": "Repeat treatment of acute hereditary angioedema attacks with open-label icatibant in the FAST-1 trial.",
                            "Publication_Date__c": "2014-08-01"
                        }
                    ]
                }
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
                "pubsCount": 7,
                "PersonContactId": "003j000000HysvbAAB",
                "top40": true,
                "imgPath": "./assets/custom/doctor-6.png",
                "Publications__pr": {
                    "pubsCount": 7,
                    "done": true,
                    "records": [
                        {
                            "Contact__c": "003j000000HysvbAAB",
                            "Id": "a0lj0000001uE0MAAU",
                            "Journal_Name__c": "Allergy and asthma proceedings : the official journal of regional and state allergy societies",
                            "Title__c": "Current options for prophylactic treatment of hereditary angioedema in the United States: patient-based considerations.",
                            "Publication_Date__c": "2012-06-01"
                        },
                        {
                            "Contact__c": "003j000000HysvbAAB",
                            "Id": "a0lj0000001uE0NAAU",
                            "Journal_Name__c": "The journal of allergy and clinical immunology. In practice",
                            "Title__c": "Escalating doses of C1 esterase inhibitor (CINRYZE) for prophylaxis in patients with hereditary angioedema.",
                            "Publication_Date__c": "2013-11-11"
                        },
                        {
                            "Contact__c": "003j000000HysvbAAB",
                            "Id": "a0lj0000001uE0PAAU",
                            "Journal_Name__c": "Annals of allergy, asthma & immunology : official publication of the American College of Allergy, Asthma, & Immunology",
                            "Title__c": "Hereditary angioedema: implications of treating a rare disease.",
                            "Publication_Date__c": "2012-06-28"
                        },
                        {
                            "Contact__c": "003j000000HysvbAAB",
                            "Id": "a0lj0000001uE0RAAU",
                            "Journal_Name__c": "Annals of allergy, asthma & immunology : official publication of the American College of Allergy, Asthma, & Immunology",
                            "Title__c": "Current medical management of hereditary angioedema: results from a large survey of US physicians.",
                            "Publication_Date__c": "2011-02-05"
                        },
                        {
                            "Contact__c": "003j000000HysvbAAB",
                            "Id": "a0lj0000001uE0YAAU",
                            "Journal_Name__c": "Allergy and asthma proceedings : the official journal of regional and state allergy societies",
                            "Title__c": "HAE update: determining optimal patient specific therapy.",
                            "Publication_Date__c": "2013-02-01"
                        },
                        {
                            "Contact__c": "003j000000HysvbAAB",
                            "Id": "a0lj0000001uE0mAAE",
                            "Journal_Name__c": "The World Allergy Organization journal",
                            "Title__c": "Hereditary angioedema caused by c1-esterase inhibitor deficiency: a literature-based analysis and clinical commentary on prophylaxis treatment strategies.",
                            "Publication_Date__c": "2011-02-01"
                        },
                        {
                            "Contact__c": "003j000000HysvbAAB",
                            "Id": "a0lj0000001uE1SAAU",
                            "Journal_Name__c": "Annals of allergy, asthma & immunology : official publication of the American College of Allergy, Asthma, & Immunology",
                            "Title__c": "When is prophylaxis for hereditary angioedema necessary?",
                            "Publication_Date__c": "2009-05-01"
                        }
                    ]
                }
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
                "pubsCount": 4,
                "PersonContactId": "003j000000HysvkAAB",
                "top40": false,
                "imgPath": "./assets/custom/doctor-1.png",
                "Publications__pr": {
                    "pubsCount": 4,
                    "done": true,
                    "records": [
                        {
                            "Contact__c": "003j000000HysvkAAB",
                            "Id": "a0lj0000001uE05AAE",
                            "Journal_Name__c": "Postgraduate medicine",
                            "Title__c": "Aspirin sensitivity. A distressing reaction that is now often treatable.",
                            "Publication_Date__c": "1991-10-01"
                        },
                        {
                            "Contact__c": "003j000000HysvkAAB",
                            "Id": "a0lj0000001uE0CAAU",
                            "Journal_Name__c": "Medical education",
                            "Title__c": "Co-teaching: a faculty development strategy.",
                            "Publication_Date__c": "2000-04-01"
                        },
                        {
                            "Contact__c": "003j000000HysvkAAB",
                            "Id": "a0lj0000001uE0tAAE",
                            "Journal_Name__c": "The journal of allergy and clinical immunology. In practice",
                            "Title__c": "Escalating doses of C1 esterase inhibitor (CINRYZE) for prophylaxis in patients with hereditary angioedema.",
                            "Publication_Date__c": "2013-11-11"
                        },
                        {
                            "Contact__c": "003j000000HysvkAAB",
                            "Id": "a0lj0000001uE0uAAE",
                            "Journal_Name__c": "The Journal of pediatrics",
                            "Title__c": "Nanofiltered C1-esterase inhibitor for the acute management and prevention of hereditary angioedema attacks due to C1-inhibitor deficiency in children.",
                            "Publication_Date__c": "2013-01-11"
                        }
                    ]
                }
            },
            {
                "Id": "001j000000MVrIQAA1",
                "FirstName": "Mark",
                "Specialty": "Allergy and Immunology",
                "CityState": "Fair Lawn, NJ",
                "Affiliation": "Winthrop-University Hospital",
                "Phone": "(516) 663-3519",
                "Score": 49,
                "Email": "mdavislorton@winthrop.org",
                "LastName": "Davis-Lorton",
                "Degree": "MD",
                "pubsCount": 2,
                "PersonContactId": "003j000000HysvYAAR",
                "top40": true,
                "imgPath": "./assets/custom/doctor-2.png",
                "Publications__pr": {
                    "pubsCount": 2,
                    "done": true,
                    "records": [
                        {
                            "Contact__c": "003j000000HysvYAAR",
                            "Id": "a0lj0000001uE0IAAU",
                            "Journal_Name__c": "Allergy and asthma proceedings : the official journal of regional and state allergy societies",
                            "Title__c": "Current options for prophylactic treatment of hereditary angioedema in the United States: patient-based considerations.",
                            "Publication_Date__c": "2012-06-01"
                        },
                        {
                            "Contact__c": "003j000000HysvYAAR",
                            "Id": "a0lj0000001uE0LAAU",
                            "Journal_Name__c": "The journal of allergy and clinical immunology. In practice",
                            "Title__c": "Escalating doses of C1 esterase inhibitor (CINRYZE) for prophylaxis in patients with hereditary angioedema.",
                            "Publication_Date__c": "2013-11-11"
                        }
                    ]
                }
            },
            {
                "Id": "001j000000MVrIXAA1",
                "FirstName": "Jay",
                "Specialty": "Allergy and Immunology",
                "CityState": "Arlington, VA",
                "Affiliation": "Allergy, Asthma and Immunology",
                "Phone": "(201) 794-7400",
                "Score": 48,
                "Email": "floffice2@aol.com",
                "LastName": "Kashkin",
                "pubsCount": 0,
                "top40": true,
                "imgPath": "./assets/custom/doctor-2.png",
                "Degree": "MD",
                "PersonContactId": "003j000000HysvfAAB"
            },
            {
                "Id": "001j000000iapaBAAQ",
                "FirstName": "Richard",
                "Specialty": "Allergy and Immunology",
                "CityState": "Philadelphia, PA",
                "Affiliation": "University of South Florida",
                "Phone": "(813) 974-2271",
                "Score": 48,
                "Email": "rlockey@health.usf.edu",
                "LastName": "Lockey",
                "pubsCount": 8,
                "PersonContactId": "003j000000rPAtrAAG",
                "top40": false,
                "imgPath": "./assets/custom/doctor-3.png",
                "Publications__pr": {
                    "pubsCount": 8,
                    "done": true,
                    "records": [
                        {
                            "Contact__c": "003j000000rPAtrAAG",
                            "Id": "a0lj00000029FCfAAM",
                            "Journal_Name__c": "The World Allergy Organization journal",
                            "Title__c": "Dermatology for the allergist.",
                            "Topic__c": "Allergists/immunologists see patients with a variety of skin disorders. Some, such as atopic and allergic contact dermatitis, are caused by abnormal immunologic reactions, whereas others, such as seborrheic dermatitis or rosacea, lack an immunologic basis. This review summarizes a select group of dermatologic problems commonly encountered by an allergist/immunologist.",
                            "Publication_Date__c": "2010-06-15"
                        },
                        {
                            "Contact__c": "003j000000rPAtrAAG",
                            "Id": "a0lj00000029FCgAAM",
                            "Journal_Name__c": "The World Allergy Organization journal",
                            "Title__c": "WAO Guideline for the Management of Hereditary Angioedema.",
                            "Topic__c": ": Hereditary Angioedema (HAE) is a rare disease and for this reason proper diagnosis and appropriate therapy are often unknown or not available for physicians and other health care providers. For this reason we convened a group of specialists that focus upon HAE from around the world to develop not only a consensus on diagnosis and management of HAE, but to also provide evidence based grades, strength of evidence and classification for the consensus. Since both consensus and evidence grading were adhered to the document meets criteria as a guideline. The outcome of the guideline is to improve diagnosis and management of patients with HAE throughout the world and to help initiate uniform care and availability of therapies to all with the diagnosis no matter where the residence of the individual with HAE exists."
                        },
                        {
                            "Contact__c": "003j000000rPAtrAAG",
                            "Id": "a0lj00000029FChAAM",
                            "Journal_Name__c": "Annals of allergy, asthma & immunology : official publication of the American College of Allergy, Asthma, & Immunology",
                            "Title__c": "Efficacy and safety of recombinant C1 inhibitor for the treatment of hereditary angioedema attacks: a North American open-label study.",
                            "Topic__c": "The results of this open-label extension support continued efficacy of rhC1INH after repeated treatments for subsequent HAE attacks. There was no increase in adverse event reporting after repeated exposure to rhC1INH.",
                            "Publication_Date__c": "2013-03-06"
                        },
                        {
                            "Contact__c": "003j000000rPAtrAAG",
                            "Id": "a0lj00000029FCiAAM",
                            "Journal_Name__c": "The journal of allergy and clinical immunology. In practice",
                            "Title__c": "Case of recurrent exophthalmos: angioedema versus idiopathic orbital pseudotumor.",
                            "Publication_Date__c": "2013-07-24"
                        },
                        {
                            "Contact__c": "003j000000rPAtrAAG",
                            "Id": "a0lj00000029FCjAAM",
                            "Journal_Name__c": "International archives of allergy and immunology",
                            "Title__c": "World Allergy Organization Anaphylaxis Guidelines: 2013 update of the evidence base.",
                            "Topic__c": "The World Allergy Organization (WAO) Guidelines for the assessment and management of anaphylaxis are a widely disseminated and used resource for information about anaphylaxis. They focus on patients at risk, triggers, clinical diagnosis, treatment in health care settings, self-treatment in the community, and prevention of recurrences. Their unique strengths include a global perspective informed by prior research on the global availability of essentials for anaphylaxis assessment and management and a global agenda for anaphylaxis research. Additionally, detailed colored illustrations are linked to key concepts in the text [Simons et al.: J Allergy Clin Immunol 2011;127:593.e1-e22]. The recommendations in the original WAO Anaphylaxis Guidelines for management of anaphylaxis in health care settings and community settings were based on evidence published in peer-reviewed, indexed medical journals to the end of 2010. These recommendations remain unchanged and clinically relevant. An update of the evidence base was published in 2012 [Simons et al.: Curr Opin Allergy Clin Immunol 2012;12:389-399]. In 2012 and early 2013, major advances were reported in the following areas: further characterization of patient phenotypes; development of in vitro tests (for some allergens) that help distinguish clinical risk of anaphylaxis from asymptomatic sensitization; epinephrine (adrenaline) research, including studies of a new epinephrine auto-injector for use in community settings, and randomized controlled trials of immunotherapy to prevent food-induced anaphylaxis. Despite these advances, the need for additional prospective studies, including randomized controlled trials of interventions in anaphylaxis is increasingly apparent. This 2013 Update highlights publications from 2012 and 2013 that further contribute to the evidence base for the recommendations made in the original WAO Anaphylaxis Guidelines. Ideally, it should be used in conjunction with these Guidelines and with the 2012 Guidelines Update.",
                            "Publication_Date__c": "2013-09-05"
                        },
                        {
                            "Contact__c": "003j000000rPAtrAAG",
                            "Id": "a0lj00000029FCkAAM",
                            "Journal_Name__c": "The journal of allergy and clinical immunology. In practice",
                            "Title__c": "Allergy immunotherapy adherence and delivery route: location does not matter."
                        },
                        {
                            "Contact__c": "003j000000rPAtrAAG",
                            "Id": "a0lj00000029FClAAM",
                            "Journal_Name__c": "The journal of allergy and clinical immunology. In practice",
                            "Title__c": "Oral manifestations of allergic, infectious, and immune-mediated disease.",
                            "Topic__c": "Patients often have oral symptoms, and physicians frequently identify lesions during routine oral examination. Being able to associate these concerns and findings with systemic disease is important to providing effective management of these conditions. This review summarizes the etiology, presentation, and treatment of many oral lesions associated with systemic diseases and infections. The primary focus was on lesions associated with allergic, infectious, and immune-mediated disease; however, other common concerns are addressed as well as lesions that may be misinterpreted as disease and how to address unknown lesions.",
                            "Publication_Date__c": "2014-11-06"
                        },
                        {
                            "Contact__c": "003j000000rPAtrAAG",
                            "Id": "a0lj00000029FCmAAM",
                            "Journal_Name__c": "Journal of managed care & specialty pharmacy",
                            "Title__c": "Administration and Burden of Subcutaneous Immunotherapy for Allergic Rhinitis in U.S. and Canadian Clinical Practice.",
                            "Topic__c": "Analyses revealed substantial variation in SCIT regimens among sites, but the sites had commonalities in the injection process components. SCIT requires patient commitment to a long-term treatment regimen involving numerous clinic visits and resources for administration."
                        }
                    ]
                }
            },
            {
                "Id": "001j000000ZtGnCAAV",
                "FirstName": "Bruce",
                "Specialty": "Allergy and Immunology",
                "CityState": "Chestnut Hill, MA",
                "Affiliation": "UC San Diego School of Medicine: Rheumatology, Allergy & Immunology",
                "Phone": "858-822-6597",
                "Score": 36,
                "Email": "bzuraw@ucsd.edu",
                "LastName": "Zuraw",
                "Degree": "MD",
                "pubsCount": 10,
                "PersonContactId": "003j000000bcv5bAAA",
                "top40": true,
                "imgPath": "./assets/custom/doctor-4.png",
                "Publications__pr": {
                    "pubsCount": 10,
                    "done": true,
                    "records": [
                        {
                            "Contact__c": "003j000000bcv5bAAA",
                            "Id": "a0lj0000001uDzkAAE",
                            "Journal_Name__c": "Academic emergency medicine : official journal of the Society for Academic Emergency Medicine",
                            "Title__c": "A consensus parameter for the evaluation and management of angioedema in the emergency department.",
                            "Publication_Date__c": "2014-04-01"
                        },
                        {
                            "Contact__c": "003j000000bcv5bAAA",
                            "Id": "a0lj0000001uDzlAAE",
                            "Journal_Name__c": "The Journal of allergy and clinical immunology",
                            "Title__c": "A focused parameter update: hereditary angioedema, acquired C1 inhibitor deficiency, and angiotensin-converting enzyme inhibitor-associated angioedema.",
                            "Publication_Date__c": "2013-06-01"
                        },
                        {
                            "Contact__c": "003j000000bcv5bAAA",
                            "Id": "a0lj0000001uE0AAAU",
                            "Journal_Name__c": "Allergy and asthma proceedings : the official journal of regional and state allergy societies",
                            "Title__c": "Before and after, the impact of available on-demand treatment for HAE.",
                            "Publication_Date__c": "2015-04-01"
                        },
                        {
                            "Contact__c": "003j000000bcv5bAAA",
                            "Id": "a0lj0000001uE0TAAU",
                            "Journal_Name__c": "Allergy and asthma proceedings : the official journal of regional and state allergy societies",
                            "Title__c": "Current state of hereditary angioedema management: a patient survey.",
                            "Publication_Date__c": "2015-06-01"
                        },
                        {
                            "Contact__c": "003j000000bcv5bAAA",
                            "Id": "a0lj0000001uE0sAAE",
                            "Journal_Name__c": "Immunology and allergy clinics of North America",
                            "Title__c": "Immunology and Allergy Clinics of North America. Angioedema. Preface.",
                            "Publication_Date__c": "2013-11-01"
                        },
                        {
                            "Contact__c": "003j000000bcv5bAAA",
                            "Id": "a0lj0000001uE1JAAU",
                            "Journal_Name__c": "Allergy",
                            "Title__c": "Phase II study results of a replacement therapy for hereditary angioedema with subcutaneous C1-inhibitor concentrate.",
                            "Publication_Date__c": "2015-05-28"
                        },
                        {
                            "Contact__c": "003j000000bcv5bAAA",
                            "Id": "a0lj0000001uE1LAAU",
                            "Journal_Name__c": "Cleveland Clinic journal of medicine",
                            "Title__c": "Recognizing and managing hereditary angioedema.",
                            "Publication_Date__c": "2013-05-01"
                        },
                        {
                            "Contact__c": "003j000000bcv5bAAA",
                            "Id": "a0lj0000001uE1NAAU",
                            "Journal_Name__c": "The journal of allergy and clinical immunology. In practice",
                            "Title__c": "US Hereditary Angioedema Association Medical Advisory Board 2013 recommendations for the management of hereditary angioedema due to C1 inhibitor deficiency.",
                            "Publication_Date__c": "2013-08-30"
                        },
                        {
                            "Contact__c": "003j000000bcv5bAAA",
                            "Id": "a0lj0000001uE1OAAU",
                            "Journal_Name__c": "Annals of allergy, asthma & immunology : official publication of the American College of Allergy, Asthma, & Immunology",
                            "Title__c": "Current update on cellular and molecular mechanisms of hereditary angioedema.",
                            "Publication_Date__c": "2014-01-29"
                        },
                        {
                            "Contact__c": "003j000000bcv5bAAA",
                            "Id": "a0lj0000001uE1QAAU",
                            "Journal_Name__c": "Immunology and allergy clinics of North America",
                            "Title__c": "Rare disease partnership: the role of the US HAEA in angioedema care.",
                            "Publication_Date__c": "2013-08-24"
                        }
                    ]
                }
            },
            {
                "Id": "001j000000MVrINAA1",
                "FirstName": "Autumn",
                "Specialty": "Allergy and Immunology",
                "CityState": "Portland, OR",
                "Affiliation": "Howard University",
                "Phone": "(202) 865-1521",
                "Score": 33,
                "Email": "autumnfb@gmail.com",
                "LastName": "Burnette",
                "Degree": "MD",
                "pubsCount": 0,
                "PersonContactId": "003j000000HysvVAAR",
                "top40": false,
                "imgPath": "./assets/custom/doctor-3.png"
            },
            {
                "Id": "001j000000j0n94AAA",
                "FirstName": "John",
                "Specialty": "Allergy and Immunology",
                "CityState": "New York, NY",
                "Affiliation": "Jefferson University",
                "Phone": "(215) 955-7410",
                "Score": 32,
                "Email": "john.cohn@asthmallergy.com",
                "LastName": "Cohn",
                "Degree": "MD",
                "pubsCount": 0,
                "PersonContactId": "003j000000rtwVnAAI",
                "top40": true,
                "imgPath": "./assets/custom/doctor-4.png"
            },
            {
                "Id": "001j000000j0nBAAAY",
                "FirstName": "Anna",
                "Specialty": "Allergy and Immunology",
                "CityState": "Waxhaw, NC",
                "Affiliation": "Brigham and Women's Hospital",
                "Phone": "617-732-9850",
                "Score": 30,
                "Email": "afeldweg@partners.org",
                "LastName": "Feldweg",
                "Degree": "MD",
                "pubsCount": 0,
                "PersonContactId": "003j000000rtwY8AAI",
                "top40": false,
                "imgPath": "./assets/custom/doctor-5.png"
            },
            {
                "Id": "001j000000MVrILAA1",
                "FirstName": "James",
                "Specialty": "Allergy and Immunology",
                "CityState": "Los Angeles, CA",
                "Affiliation": "Baker Allergy Asthma & Dermatology Research Center, LLC",
                "Phone": "503-636-9011",
                "Score": 25,
                "Email": "jameswbaker@aadrc.com",
                "LastName": "Baker",
                "Degree": "MD, FACAAI",
                "pubsCount": 3,
                "PersonContactId": "003j000000HysvTAAR",
                "top40": true,
                "imgPath": "./assets/custom/doctor-5.png",
                "Publications__pr": {
                    "pubsCount": 3,
                    "done": true,
                    "records": [
                        {
                            "Contact__c": "003j000000HysvTAAR",
                            "Id": "a0lj0000001uDzgAAE",
                            "Journal_Name__c": "Annals of allergy, asthma & immunology : official publication of the American College of Allergy, Asthma, & Immunology",
                            "Title__c": "Efficacy and safety of recombinant C1 inhibitor for the treatment of hereditary angioedema attacks: a North American open-label study.",
                            "Publication_Date__c": "2013-03-06"
                        },
                        {
                            "Contact__c": "003j000000HysvTAAR",
                            "Id": "a0lj0000001uE06AAE",
                            "Journal_Name__c": "Allergy and asthma proceedings : the official journal of regional and state allergy societies",
                            "Title__c": "Asthma control in pediatric patients treated with once-daily or twice-daily nebulized budesonide inhalation suspension (Pulmicort Respules).",
                            "Publication_Date__c": "2008-06-01"
                        },
                        {
                            "Contact__c": "003j000000HysvTAAR",
                            "Id": "a0lj0000001uE0wAAE",
                            "Journal_Name__c": "Allergy and asthma proceedings : the official journal of regional and state allergy societies",
                            "Title__c": "Nanofiltered C1 esterase inhibitor (human) for hereditary angioedema attacks in pregnant women.",
                            "Publication_Date__c": "2013-04-01"
                        }
                    ]
                }
            },
            {
                "Id": "001j000000ZtGVvAAN",
                "FirstName": "Paula",
                "Specialty": "Allergy and Immunology",
                "CityState": "San Juan, PR",
                "Affiliation": "Mount Sinai Hospital",
                "Phone": "212-241-0764",
                "Score": 18,
                "Email": "pbusse@entandallergy.com",
                "LastName": "Busse",
                "Degree": "MD",
                "pubsCount": 8,
                "PersonContactId": "003j000000bcujBAAQ",
                "top40": false,
                "imgPath": "./assets/custom/doctor-6.png",
                "Publications__pr": {
                    "pubsCount": 8,
                    "done": true,
                    "records": [
                        {
                            "Contact__c": "003j000000bcujBAAQ",
                            "Id": "a0lj0000001uDzhAAE",
                            "Journal_Name__c": "Academic emergency medicine : official journal of the Society for Academic Emergency Medicine",
                            "Title__c": "A consensus parameter for the evaluation and management of angioedema in the emergency department.",
                            "Publication_Date__c": "2014-04-01"
                        },
                        {
                            "Contact__c": "003j000000bcujBAAQ",
                            "Id": "a0lj0000001uDzvAAE",
                            "Journal_Name__c": "Allergy and asthma proceedings : the official journal of regional and state allergy societies",
                            "Title__c": "Angioedema: differential diagnosis and treatment.",
                            "Publication_Date__c": "2011-03-01"
                        },
                        {
                            "Contact__c": "003j000000bcujBAAQ",
                            "Id": "a0lj0000001uE04AAE",
                            "Journal_Name__c": "The journal of allergy and clinical immunology. In practice",
                            "Title__c": "US Hereditary Angioedema Association Medical Advisory Board 2013 recommendations for the management of hereditary angioedema due to C1 inhibitor deficiency.",
                            "Publication_Date__c": "2013-08-30"
                        },
                        {
                            "Contact__c": "003j000000bcujBAAQ",
                            "Id": "a0lj0000001uE08AAE",
                            "Journal_Name__c": "Annals of allergy, asthma & immunology : official publication of the American College of Allergy, Asthma, & Immunology",
                            "Title__c": "Nanofiltered C1 esterase inhibitor (human) for the treatment of acute attacks of hereditary angioedema: an open-label trial.",
                            "Publication_Date__c": "2011-11-21"
                        },
                        {
                            "Contact__c": "003j000000bcujBAAQ",
                            "Id": "a0lj0000001uE0HAAU",
                            "Journal_Name__c": "Allergy and asthma proceedings : the official journal of regional and state allergy societies",
                            "Title__c": "Current options for prophylactic treatment of hereditary angioedema in the United States: patient-based considerations.",
                            "Publication_Date__c": "2012-06-01"
                        },
                        {
                            "Contact__c": "003j000000bcujBAAQ",
                            "Id": "a0lj0000001uE0hAAE",
                            "Journal_Name__c": "The World Allergy Organization journal",
                            "Title__c": "Hereditary angioedema caused by c1-esterase inhibitor deficiency: a literature-based analysis and clinical commentary on prophylaxis treatment strategies.",
                            "Publication_Date__c": "2011-02-01"
                        },
                        {
                            "Contact__c": "003j000000bcujBAAQ",
                            "Id": "a0lj0000001uE1FAAU",
                            "Journal_Name__c": "The New England journal of medicine",
                            "Title__c": "Nanofiltered C1 inhibitor concentrate for treatment of hereditary angioedema.",
                            "Publication_Date__c": "2010-08-05"
                        },
                        {
                            "Contact__c": "003j000000bcujBAAQ",
                            "Id": "a0lj0000001uE1GAAU",
                            "Journal_Name__c": "Clinical and experimental allergy : journal of the British Society for Allergy and Clinical Immunology",
                            "Title__c": "Non-histaminergic angioedema: focus on bradykinin-mediated angioedema.",
                            "Publication_Date__c": "2013-04-01"
                        }
                    ]
                }
            },
            {
                "Id": "001j000000MVrIVAA1",
                "FirstName": "Douglas",
                "Specialty": "Allergy and Immunology",
                "CityState": "Waxhaw, NC",
                "Affiliation": "Allergy & Asthma Specialists, PA",
                "Phone": "(704) 341-9600, 7463",
                "Score": 13,
                "Email": "djohnston@asthmanc.com",
                "LastName": "Johnston",
                "Degree": "MD",
                "pubsCount": 4,
                "PersonContactId": "003j000000HysvdAAB",
                "top40": true,
                "imgPath": "./assets/custom/doctor-1.png",
                "Publications__pr": {
                    "pubsCount": 4,
                    "done": true,
                    "records": [
                        {
                            "Contact__c": "003j000000HysvdAAB",
                            "Id": "a0lj0000001uE0OAAU",
                            "Journal_Name__c": "Allergy and asthma proceedings : the official journal of regional and state allergy societies",
                            "Title__c": "Current options for prophylactic treatment of hereditary angioedema in the United States: patient-based considerations.",
                            "Publication_Date__c": "2012-06-01"
                        },
                        {
                            "Contact__c": "003j000000HysvdAAB",
                            "Id": "a0lj0000001uE0UAAU",
                            "Journal_Name__c": "The Journal of the American Osteopathic Association",
                            "Title__c": "Diagnosis and management of hereditary angioedema.",
                            "Publication_Date__c": "2011-01-01"
                        },
                        {
                            "Contact__c": "003j000000HysvdAAB",
                            "Id": "a0lj0000001uE0WAAU",
                            "Journal_Name__c": "Acta haematologica",
                            "Title__c": "Hereditary and acquired complement component 1 esterase inhibitor deficiency: a review for the hematologist.",
                            "Publication_Date__c": "2012-03-27"
                        },
                        {
                            "Contact__c": "003j000000HysvdAAB",
                            "Id": "a0lj0000001uE0rAAE",
                            "Journal_Name__c": "The World Allergy Organization journal",
                            "Title__c": "Hereditary angioedema caused by c1-esterase inhibitor deficiency: a literature-based analysis and clinical commentary on prophylaxis treatment strategies.",
                            "Publication_Date__c": "2011-02-01"
                        }
                    ]
                }
            },
            {
                "Id": "001j000000MVrInAAL",
                "FirstName": "Raffi",
                "Specialty": "Allergy and Immunology",
                "CityState": "Los Angeles, CA",
                "Affiliation": "David Geffen School of Medicine, UCLA",
                "Phone": "(310) 998-0060",
                "Score": 16,
                "Email": "ucladoc@gmail.com",
                "LastName": "Tachdjian",
                "pubsCount": 6,
                "PersonContactId": "003j000000HysvvAAB",
                "top40": false,
                "imgPath": "./assets/custom/doctor-2.png",
                "Publications__pr": {
                    "pubsCount": 6,
                    "done": true,
                    "records": [
                        {
                            "Contact__c": "003j000000HysvvAAB",
                            "Id": "a0lj0000001uE0FAAU",
                            "Journal_Name__c": "Allergy and asthma proceedings : the official journal of regional and state allergy societies",
                            "Title__c": "Current characteristics associated with hereditary angioedema attacks and treatment: the home infusion based patient experience.",
                            "Publication_Date__c": "2015-04-01"
                        },
                        {
                            "Contact__c": "003j000000HysvvAAB",
                            "Id": "a0lj0000001uE0VAAU",
                            "Journal_Name__c": "Annals of allergy, asthma & immunology : official publication of the American College of Allergy, Asthma, & Immunology",
                            "Title__c": "Effect of environmental intervention on mouse allergen levels in homes of inner-city Boston children with asthma.",
                            "Publication_Date__c": "2004-04-01"
                        },
                        {
                            "Contact__c": "003j000000HysvvAAB",
                            "Id": "a0lj0000001uE1AAAU",
                            "Journal_Name__c": "Annals of allergy, asthma & immunology : official publication of the American College of Allergy, Asthma, & Immunology",
                            "Title__c": "Assessment of home infusion program for treating nonlaryngeal hereditary angioedema attacks.",
                            "Publication_Date__c": "2014-03-13"
                        },
                        {
                            "Contact__c": "003j000000HysvvAAB",
                            "Id": "a0lj0000001uE1BAAU",
                            "Journal_Name__c": "Pediatrics",
                            "Title__c": "Use of ecallantide in pediatric hereditary angioedema.",
                            "Publication_Date__c": "2013-07-22"
                        },
                        {
                            "Contact__c": "003j000000HysvvAAB",
                            "Id": "a0lj0000001uE1CAAU",
                            "Journal_Name__c": "The Journal of allergy and clinical immunology",
                            "Title__c": "In vivo regulation of the allergic response by the IL-4 receptor alpha chain immunoreceptor tyrosine-based inhibitory motif.",
                            "Publication_Date__c": "2010-04-14"
                        },
                        {
                            "Contact__c": "003j000000HysvvAAB",
                            "Id": "a0lj0000001uE1DAAU",
                            "Journal_Name__c": "The Journal of experimental medicine",
                            "Title__c": "Pathogenicity of a disease-associated human IL-4 receptor allele in experimental asthma.",
                            "Publication_Date__c": "2009-09-21"
                        }
                    ]
                }
            },
            {
                "Id": "001j000000MVrIrAAL",
                "FirstName": "Rafael",
                "Specialty": "Allergy and Immunology",
                "CityState": "San Juan, PR",
                "Affiliation": "Auxilio Mutuo and Ashford Presbyterian Hospitals",
                "Phone": "(787) 764-5715",
                "Score": 2,
                "Email": "zaragoza.urdaz@gmail.com",
                "LastName": "Zaragoza Urdaz",
                "Degree": "MD",
                "pubsCount": 2,
                "PersonContactId": "003j000000HysvzAAB",
                "top40": false,
                "imgPath": "./assets/custom/doctor-3.png",
                "Publications__pr": {
                    "pubsCount": 2,
                    "done": true,
                    "records": [
                        {
                            "Contact__c": "003j000000HysvzAAB",
                            "Id": "a0lj0000001uDzoAAE",
                            "Journal_Name__c": "Puerto Rico health sciences journal",
                            "Title__c": "Allergen sensitivity (mites, insects, and pets) in a Puerto Rican population.",
                            "Publication_Date__c": "2012-03-01"
                        },
                        {
                            "Contact__c": "003j000000HysvzAAB",
                            "Id": "a0lj0000001uDzsAAE",
                            "Journal_Name__c": "Bolet’n de la Asociaci—n MŽdica de Puerto Rico",
                            "Title__c": "Allergist role in asthma care in Puerto Rico.",
                            "Publication_Date__c": "2011-03-01"
                        }
                    ]
                }
            }
        ]);
    }

    getKOLsForScatter() {
        // return [
        //     { status: "Oncology Research, CO", imgPath: "../assets/custom/doctor-1.png", name: "Dr. Margaret Holmes", key: 'key1', values: [{ x: 31, y: 73 }, { x: 54, y: 39 }, { x: -35, y: 11 }, { x: 93, y: 73 }, { x: 90, y: 21 }] },
        //     { status: "Carodiolgy Research, CA", imgPath: "../assets/custom/doctor-2.png", name: "Dr. William O'Neil", key: 'key2', values: [{ x: 88, y: 52 }, { x: 23, y: 43 }, { x: 13, y: 33 }, { x: 98, y: 76 }, { x: 5, y: 69 }] },
        //     { status: "Allergy Research, NY", imgPath: "../assets/custom/doctor-3.png", name: "Dr. Kurt Schmidt", key: 'key3', values: [{ x: 10, y: 10 }, { x: -20, y: 20 }, { x: 30, y: 30 }, { x: -40, y: 40 }, { x: 50, y: 50 }] },
        //     { status: "Hepatology Research, WY", imgPath: "../assets/custom/doctor-4.png", name: "Dr. Jim Stewart", key: 'key4', values: [{ x: 81, y: 173 }, { x: 14, y: 39 }, { x: -15, y: 76 }, { x: 34, y: 92 }, { x: 10, y: 61 }] },
        //     { status: "Urology Research, NV", imgPath: "../assets/custom/doctor-5.png", name: "Dr. Michele Jones", key: 'key5', values: [{ x: 38, y: 22 }, { x: 93, y: -43 }, { x: 13, y: 133 }, { x: 12, y: 66 }, { x: 2, y: 96 }] },
        //     { status: "Cadiovascular Research, MI", imgPath: "../assets/custom/doctor-6.png", name: "Dr. Karen Lauchester", key: 'key6', values: [{ x: 3, y: 70 }, { x: -10, y: -60 }, { x: 30, y: 100 }, { x: -90, y: 56 }, { x: 21, y: 63 }] }
        // ];
        return [
            {
                "Id": "001j000000MVrIKAA1",
                "name": "John Anderson, PhD",
                "values": [{ "x": 31, "y": 73 }],
                "imgPath": "./assets/custom/doctor-1.png",
                "status": "Oncology Research, CO",
                "key": "key1"
            },
            {
                "Id": "001j000000MVrIMAA1",
                "name": "Jonathan Bernstein, PhD",
                "values": [{ "x": -54, "y": 39 }],
                "imgPath": "./assets/custom/doctor-2.png",
                "status": "Carodiolgy Research, CA",
                "key": "key2"
            },
            {
                "Id": "001j000000MVrIUAA1",
                "name": "Joshua Jacobs, PhD",
                "values": [{ "x": -35, "y": 1 }],
                "imgPath": "./assets/custom/doctor-3.png",
                "status": "Allergy Research, NY",
                "key": "key3"
            },
            {
                "Id": "001j000000MVrIaAAL",
                "name": "William Lumry, PhD",
                "values": [{ "x": -93, "y": 73 }],
                "imgPath": "./assets/custom/doctor-4.png",
                "status": "Hepatology Research, WY",
                "key": "key4"
            },
            {
                "Id": "001j000000iapRnAAI",
                "name": "Allen Kaplan, Ed.D.",
                "values": [{ "x": 90, "y": 21 }],
                "imgPath": "./assets/custom/doctor-5.png",
                "status": "Urology Research, NV",
                "key": "key5"
            },
            {
                "Id": "001j000000MVrIhAAL",
                "name": "Marc Riedl, MD",
                "values": [{ "x": -88, "y": 52 }],
                "imgPath": "./assets/custom/doctor-1.png",
                "status": "Cadiovascular Research, MI",
                "key": "key6"
            },
            {
                "Id": "001j000000MVrIPAA1",
                "name": "Timothy Craig, MD",
                "values": [{ "x": -23, "y": -43 }],
                "imgPath": "./assets/custom/doctor-5.png",
                "status": "Oncology Research, CO",
                "key": "key7"
            },
            {
                "Id": "001j000000NhZVuAAN",
                "name": "Huamin Li, MD",
                "values": [{ "x": 13, "y": 33 }],
                "imgPath": "./assets/custom/doctor-2.png",
                "status": "Carodiolgy Research, CA",
                "key": "key8"
            },
            {
                "Id": "001j000000MVrImAAL",
                "name": "Daniel Soteres, MD",
                "values": [{ "x": 98, "y": 76 }],
                "imgPath": "./assets/custom/doctor-3.png",
                "status": "Allergy Research, NY",
                "key": "key9"
            },
            {
                "Id": "001j000000j0nOYAAY",
                "name": "Isaac Melamed, MD",
                "values": [{ "x": 5, "y": 69 }],
                "imgPath": "./assets/custom/doctor-3.png",
                "status": "Hepatology Research, WY",
                "key": "key10"
            },
            {
                "Id": "001j000000MVrIpAAL",
                "name": "Katharine Woessner, PhD",
                "values": [{ "x": 10, "y": 10 }],
                "imgPath": "./assets/custom/doctor-4.png",
                "status": "Urology Research, NV",
                "key": "key11"
            },
            {
                "Id": "001j000000ZtGXNAA3",
                "name": "Aleena Banerji, M.A.",
                "values": [{ "x": -20, "y": 2 }],
                "imgPath": "./assets/custom/doctor-5.png",
                "status": "Cadiovascular Research, MI",
                "key": "key12"
            },
            {
                "Id": "001j000000MVrITAA1",
                "name": "Richard Gower, M.A.",
                "values": [{ "x": 30, "y": -30 }],
                "imgPath": "./assets/custom/doctor-6.png",
                "status": "Oncology Research, CO",
                "key": "key13"
            },
            {
                "Id": "001j000000MVrIcAAL",
                "name": "Michael Manning, PhD",
                "values": [{ "x": -40, "y": 4 }],
                "imgPath": "./assets/custom/doctor-1.png",
                "status": "Carodiolgy Research, CA",
                "key": "key14"
            },
            {
                "Id": "001j000000MVrIQAA1",
                "name": "Mark Davis-Lorton, PhD",
                "values": [{ "x": 50, "y": -50 }],
                "imgPath": "./assets/custom/doctor-2.png",
                "status": "Allergy Research, NY",
                "key": "key15"
            },
            {
                "Id": "001j000000MVrIXAA1",
                "name": "Jay Kashkin, MD",
                "values": [{ "x": 81, "y": 173 }],
                "imgPath": "./assets/custom/doctor-2.png",
                "status": "Hepatology Research, WY",
                "key": "key16"
            },
            {
                "Id": "001j000000ZtGnCAAV",
                "name": "Bruce Zuraw, MD",
                "values": [{ "x": 14, "y": -39 }],
                "imgPath": "./assets/custom/doctor-4.png",
                "status": "Urology Research, NV",
                "key": "key17"
            },
            {
                "Id": "001j000000MVrINAA1",
                "name": "Autumn Burnette, MD",
                "values": [{ "x": -15, "y": 7 }],
                "imgPath": "./assets/custom/doctor-3.png",
                "status": "Cadiovascular Research, MI",
                "key": "key18"
            },
            {
                "Id": "001j000000j0n94AAA",
                "name": "John Cohn, MD",
                "values": [{ "x": 34, "y": -92 }],
                "imgPath": "./assets/custom/doctor-4.png",
                "status": "Oncology Research, CO",
                "key": "key19"
            },
            {
                "Id": "001j000000j0nBAAAY",
                "name": "Anna Feldweg, MD",
                "values": [{ "x": 10, "y": -61 }],
                "imgPath": "./assets/custom/doctor-5.png",
                "status": "Carodiolgy Research, CA",
                "key": "key20"
            },
            {
                "Id": "001j000000MVrILAA1",
                "name": "James Baker, MD",
                "values": [{ "x": -38, "y": -173 }],
                "imgPath": "./assets/custom/doctor-5.png",
                "status": "Allergy Research, NY",
                "key": "key21"
            },
            {
                "Id": "001j000000ZtGVvAAN",
                "name": "Paula Busse, MD",
                "values": [{ "x": -98, "y": -4 }],
                "imgPath": "./assets/custom/doctor-6.png",
                "status": "Hepatology Research, WY",
                "key": "key22"
            },
            {
                "Id": "001j000000MVrIVAA1",
                "name": "Douglas Johnston, MD",
                "values": [{ "x": 13, "y": 133 }],
                "imgPath": "./assets/custom/doctor-1.png",
                "status": "Urology Research, NV",
                "key": "key23"
            },
            {
                "Id": "001j000000MVrInAAL",
                "name": "Raffi Tachdjian, MD",
                "values": [{ "x": -12, "y": 66 }],
                "imgPath": "./assets/custom/doctor-1.png",
                "status": "Cadiovascular Research, MI",
                "key": "key24"
            },
            {
                "Id": "001j000000MVrIrAAL",
                "name": "Rafael Zaragoza Urdaz, PhD",
                "values": [{ "x": -2, "y": 96 }],
                "imgPath": "./assets/custom/doctor-3.png",
                "status": "Oncology Research, CO",
                "key": "key25"
            }
        ];
    }



}
