import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ExperiencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-experience',
  templateUrl: 'experience.html',
})
export class ExperiencePage {

  items = [
    {
      title: 'FPT Software',
      content: `Project:

      1. BMSWeb
      
      Description: this is web application used to manage and control broadcast, channel, satellite in US, outsourced by DIRECTV in US
      
      Team Size: 7
      
      Position: Senior developer
      
      Responsibility: Coding Nonlinear module
      
      Accomplishment: Know how to use GWT and the business logic in TV management
      
      Tools and technologies: Java, JSP, GWT, Strut, Hibernate, DB2, Oracle, Linux, Red Hat, apache tomcat
      
       
      
      2. BracService
      
      Description: This is web service used to get approval data from bmsWeb above and working with Zip system (third party) to send to data to satellite
      
      Team Size: 2
      
      Position: Senior developer
      
      Responsibility: Coding this web service
      
      Accomplishment: Know how to integrate between systems
      
      Tools and technologies: Java, wsdl, xsd, Hibernate, DB2, Oracle, Linux, Red Hat, JBoss
      
      3. Status Display:
      
      Description: This is web application used to show status of channel for the user, the data got form EventScheduler and SRM system developed by another team.
      
      Team Size: 4
      
      Position: Senior developer
      
      Responsibility: Coding on front end
      
      Accomplishment: Enhance the business logic of TV broadcast and GWT, Weblogic of Oracle.
      
      Tools and technologies: Java, GWT, Weblogic, Oracle, Sybase, EJB, Linux, Red Hat  
      
      4. CA Adapter: 
      
      Description: Schedule application that can listen another system (PADB) and then get the schedule to create message header and generate PAD based on PAD library after that sending to another system named SPS and SPS web.
      
      PAD is hecxa String that cantains all information to send to Set-top box
      
      Technologies: Java, Jboss, Quartz, EJB
      
      Team size: 2 
      
       5. Proconcoapp
      
      Description: Web application for user create and update their daily report about product process.
      
      Technologies: AngularJS, Bootstrap, HTML5, Google Cloud Endpoint
      
      Team size: 2
      
      url test: www.proconcoapp.appspot.com (user:admin/pass:admin)
      
      6. Smart-home
      
      Description: This is mobile app, a kind of IoT to allow user to be able to control lights in house.
      
      This app just for android and ios. it controls lights throughout bluetooth.
      
      Responsibility: backend
      
      Technologies: AWS Lambda, API Gateway, AWS SES, Dynamodb
      
      Team size: 5
      
       7. Video-conference
      
       
      
      Description: This is mobile app that allows user to be able to call video each other. It is like skype but no chatting.
      
      It can be run on mobile (android and IOS) and web app.
      
      Responsibility: backend
      
      Technologies: AWS Lambda, API Gateway, AWS SES, AWS SNS, Dynamodb, Swagger, Tokbox, Firebase
      
      Team size: 5`,
      icon: 'calendar',
      time: { subtitle: '05/2013 - now', title: 'Java Developer' }
    },
    {
      title: 'Wanek Company – US Company - 1 year located in Binh Duong City, VN',
      content: ` Software developer worked on ERP system, Mapics AS 400

      Description: Modify ERP system based on company requirement, support production issues and make report by using SQL statement.
      Besides having training to users for ERP business logics.
      
      Database: DB2`,
      icon: 'calendar',
      time: { subtitle: '04/2011 - 04/2012', title: 'ERP Developer' }
    },
    {
      title: 'Starseed Vietnam - French Company - 1 year located in HCM City, VN',
      content: `Develop web and applications on web, phone, tablet… base on Adobe Flex 4.5.

      Develop game on web.
      
      Build web applications used Flex 4.5 for Front-end and Java for Back-end.
      
      Languages used: Action Script, mxml, Java, PHP, SQL, UML
      
      Database: HSQL, MySQL, DB2, Oracle
      
      Others: Red5, Hibernate, Spring, Socket Server, Google App Engine
      
      Projects:
      
      Heroes Game
      Description: Making animation for the presentation of this game
      
      Motorola Atrix
      Description: Making animation for the presentation of this Device
      
      Transformer 3 Game.
      Description: Making animation for the presentation of this game
      
           Building web application named PK-PDM
      Description: This application is used to show the patterns that are drawn by Optitex and data in ERP system.
      
      Our customer majors in producing bags for Nike, Adidas, Mammut,… So they need to show how to make bag step by step and How much it costs by calculating from the data in their ERP system.
      
      Design Website`,
      icon: 'calendar',
      time: { subtitle: '04/2011 - 04/2012', title: 'Flex Developer' }
    },
    {
      title: 'Pungkook - 2 years located in Binh Duong City, VN',
      content: `My jobs were to work with a developer in Korean for PK-JITTS project by Java and manage a web team in Viet nam in Flex project. 1. Project 01. PKJITTS Project Description: pkjitts (PungKook Just In Time Tracking System ) is web application to manger goods between my Company and buyer. Language: JSP, Java Database: Oracle Technology: Ibatis, Spring, Flex, Ireport, Servlet IDE: Eclipse, Ireport My task: coding for Iteminfo page, Payment Material page, Treatment Oder, report … 2. Project 02. PK3DWEB Project Description: Sharing 3D images in designing bag, suitcase… between PungKook and NIKE. My task: Designing and coding this web application Language: Flex, mxml, Action script 3.0, ASP.NET, C# Database: Oracle (using store procedure, package) Tools: CodeSmith, Nunit, FlourineFx Ref: http://203.113.151.195/pungkook/rd/index.html 3. Project 03. PKERP Project Maintenance and develop ERP system of Pungkook Corp. Database: Oracle IDE: Power builder 4. Project 04. Cruisecontrol Description: Continuous integration Java projects for automating builds Technology: CVS, apache ant My task: Building this system in server Reference: http://203.113.151.193:8080/dashboard/tab/dashboard 5. Project 05: PK-QAM Description: Web application is used to manage QC system. My task: Designing and coding this web application Language: Flex, mxml, Action script 3.0, ASP.NET, C# Database: Oracle (using store procedure, package) Tools: CodeSmith, Nunit, FlourineFx Ref: http://203.113.151.195/pkqam/web/index.html 6. PK-EQUI Description: Web application is used to manage Equipment in company. Task: Designing and coding this web application Font end: Flex, mxml, Action script 3.0 Back end: Java Database: Oracle Tools: CodeSmith, iBatis Ref: http://203.113.151.195:7777/pkequi/web/Index.html 7. PK - EVAL Description: This Web application allows managers to evaluate their staffs in company. Task: Designing and coding this web application Font end: Flex, mxml, Action script 3.0 Back end: Java Database: Oracle Tools: CodeSmith, iBatis Url: http://203.113.151.195:7777/pkequi/eval/index.html 8. PK - WorkingPlan Description: This Web application is used to manage projects in the company Task: Designing and coding this web application Font end: Flex, mxml, Action script 3.0 Back end: C# Database: Oracle Tools: CodeSmith Url: http://203.113.151.195/pkworkingplan/`,
      icon: 'calendar',
      time: { subtitle: '04/2009 - 03/2011', title: 'ERP Developer' }
    },
    {
      title: 'Di An Party Committee - 3 years located in Binh Duong City, VN',
      content: `I have been working in Di An Party Committee as Database ma nager for 3 years. It belongs to Government and located in Binh Duong Province, Vietnam.
      It is 25 km far from Ho Chi Minh City. This is the first job I took after just graduated.
      
      Description:
      This is the system used to manage the profile of all party members on over the country. Database here is used SQL server 2000, each province has one server to synchronize data with main server of government.
      My main task is to input data, control the system to make sure it is always run well. In additional I write the SQL to in tegrate the system and of course back-up is very necessary here.
      Besides the main task, I also took the assume to control the local network in the office and even repaired Computer, laptop or a nother devices such as printer, photocopy machine, fax as well.
      
      Some things I needed to make training for the users in my office and joined in some seminars to get information about new techn ology or widen my knowledge from the meeting of high level in their system.
      `,
      icon: 'calendar',
      time: { subtitle: '05/2006 - 04/2009', title: 'Database Admin' }
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.description = this.filterFilter(this.description);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExperiencePage');
  }

  filterFilter(text) {
    if (!text || !text.length) {
      return text;
    }

    return text.replace(/(\\r\\n)|([\r\n])/gmi, '<br/>');
  }

}
