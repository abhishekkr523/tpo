import { Component } from '@angular/core';

@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.css']
})
export class PlacementsComponent {
  
  displayedColumns: string[] = ['sn','name', 'branch', 'company'];
  dataSource1st = [
    {
      "sn":"1",
      "name": "Saurabh Singh",
      "branch":"Informtion Technology",
      "company": "Secure Learning Pvt. Ltd."
    },
    {
      "sn":"2",
        "name": "Vaibhav Chaudhary",
        "branch":"Computer Science & Enginnering",
        "company": "Secure Learning Pvt. Ltd."
      },
      {
        "sn":"3",
        "name": "Muskan Dasani",
        "branch":"Computer Science & Enginnering",
        "company": "Secure Learning Pvt. Ltd."
      },
      {
        "sn":"4",
        "name": "Afsha Ansari",
        "branch":"Computer Science & Enginnering",
        "company": "Secure Learning Pvt. Ltd."
      },
      {
        "sn":"5",
        "name": "Yash Sharma",
        "branch":"Computer Science & Enginnering",
        "company": "Aloha Technologies Pvt. Ltd."
      },
      {
        "sn":"6",
        "name": "Praveen Kumar",
        "branch":"Computer Science & Enginnering",
        "company": "Erricson Pvt. Ltd."
      },
      {
        "sn":"7",
        "name": "Saloni Mittal",
        "branch":"Computer Science & Enginnering",
        "company": "Erricson Pvt. Ltd."
      },
      {
        "sn":"8",
        "name": "Jyoti Verma",
        "branch":"Computer Science & Enginnering",
        "company": "Erricson Pvt. Ltd."
      },
      {
        "sn":"9",
        "name": "Mohammad Rizwan",
        "branch":"Computer Science & Enginnering",
        "company": "Aklen IT Solutions Pvt. Ltd."
      },
      {
        "sn":"10",
        "name": "Laxita Acharya",
        "branch":"Computer Science & Enginnering",
        "company": "Aklen IT Solutions Pvt. Ltd."
      },
      {
        "sn":"11",
        "name": "Amit Yadav",
        "branch":"Computer Science & Enginnering",
        "company": "Aklen IT Solutions Pvt. Ltd."
      },
      {
        "sn":"12",
        "name": "Rajendra Meena",
        "branch":"Computer Science & Enginnering",
        "company": "Aklen IT Solutions Pvt. Ltd."
      },
      {
        "sn":"13",
        "name": "Komal Randhava",
        "branch":"Mechanical Engineering",
        "company": "A-1 Fench Product Company Pvt. Ltd."
      },
      {
        "sn":"14",
        "name": "Shubham Gochar",
        "branch":"Mechanical Engineering",
        "company": "Byju"
      },
      {
        "sn":"15",
        "name": "Pranjal Mittal",
        "branch":"Mechanical Engineering",
        "company": "Vishal Bearing Ltd."
      },
      {
        "sn":"16",
        "name": "Ashish Mahlonia",
        "branch":"Mechanical Engineering",
        "company": "Apollo Tyres"
      },
      {
        "sn":"17",
        "name": "Vishal Pankaj",
        "branch":"Mechanical Engineering",
        "company": "Himile Molds India Pvt. Ltd."
      },
      {
        "sn":"18",
        "name": "Yogendra Sharma",
        "branch":"Mechanical Engineering",
        "company": "Saint Goben India"
      },
      {
        "sn":"19",
        "name": "Sanoj Kumar",
        "branch":"AKA Logistics Pvt. Ltd.",
        "company": "Secure Learning Pvt. Ltd."
      },
      {
        "sn":"20",
        "name": "Narendra Kumar Meena",
        "branch":"AKA Logistics Pvt. Ltd.",
        "company": "Secure Learning Pvt. Ltd."
      },
      {
        "sn":"21",
        "name": "Aakash Ahmad Khan",
        "branch":"AKA Logistics Pvt. Ltd.",
        "company": "Secure Learning Pvt. Ltd."
      },
      {
        "sn":"22",
        "name": "Manish Chaudhary",
        "branch":"AKA Logistics Pvt. Ltd.",
        "company": "Secure Learning Pvt. Ltd."
      },
      {
        "sn":"23",
        "name": "Tokir Khan",
        "branch":"Mechanical Engineering",
        "company": "PinClick"
      },
      {
        "sn":"24",
        "name": "Darpan Jaiswal",
        "branch":"Mechanical Engineering",
        "company": "PinClick"
      },
      {
        "sn":"25",
        "name": "Mohammad Shadab Rizwan",
        "branch":"Civil Engineering",
        "company": "PinClick"
      },
      {
        "sn":"26",
        "name": "Ashish Gupta",
        "branch":"Civil Engineering",
        "company": "PinClick"
      },
      {
        "sn":"27",
        "name": "Tanmay Kulshreshtha",
        "branch":"Civil Engineering",
        "company": "PinClick"
      },
      {
        "sn":"28",
        "name": "Ashutosh Kumar Tiwari",
        "branch":"Civil Engineering",
        "company": "PinClick"
      },
      {
        "sn":"29",
        "name": "Bajrang Lal Goswami",
        "branch":"Computer Science & Enginnerin",
        "company": "PinClick"
      },
      {
        "sn":"30",
        "name": "Abhishek Kumar Kushwah",
        "branch":"Electronics & Communication Engineering",
        "company": "PinClick"
      }
  
  ]
  // displayedColumns: string[] = ['sn','name', 'branch', 'company'];
  dataSource2nd=[
    {
      "sn":"1",
      "name": "Abhishek Mehta",
      "branch":"Informtion Technology",
      "company": "Mediacity Corporation, Bhilwara"
    },
    {
      "sn":"2",
        "name": "Anshul Upadhyay",
        "branch":"Computer Science & Enginnering",
        "company": "Sigma Info Solutions, Jodhpur"
      },
      {
        "sn":"3",
        "name": "Aryan Raj",
        "branch":"Computer Science & Enginnering",
        "company": "MailMoDo, Bangalore"
      },
      {
        "sn":"4",
        "name": "Ishan Dixit",
        "branch":"Computer Science & Enginnering",
        "company": "Rinex Technology, Bangalore"
      },
      {
        "sn":"5",
        "name": "Jag Mohan Kumar",
        "branch":"Computer Science & Enginnering",
        "company": "Entity Digital Sports Pvt. Ltd., Jaipur"
      },
      {
        "sn":"6",
        "name": "Joel Shaji",
        "branch":"Computer Science & Enginnering",
        "company": "Intellipaat, Bangalore"
      },
      {
        "sn":"7",
        "name": "Manav Pareek",
        "branch":"Computer Science & Enginnering",
        "company": "Appcino A. Xebia, Jaipur"
      },
      {
        "sn":"8",
        "name": "Mukesh Singh",
        "branch":"Computer Science & Enginnering",
        "company": "Entity Digital Sports Pvt. Ltd., Jaipur"
      },
      {
        "sn":"9",
        "name": "Rajesh",
        "branch":"Computer Science & Enginnering",
        "company": "Streebo, Ahemedabad"
      },
      {
        "sn":"10",
        "name": "Sidhharth Malav",
        "branch":"Computer Science & Enginnering",
        "company": "TechOn Dators, Udaipur"
      },
      {
        "sn":"11",
        "name": "Utsav Pareek",
        "branch":"Computer Science & Enginnering",
        "company": "TechOn Dators, Udaipur"
      },
      {
        "sn":"12",
        "name": "Divyansh Chourasiya",
        "branch":"Information Technology",
        "company": "Lexus Technology"
      },
      {
        "sn":"13",
        "name": "Chirag Singh Sisodiya",
        "branch":"Information Technology",
        "company": "Rinex Technology, Bangalore"
      },
      {
        "sn":"14",
        "name": "Devesh Sharma",
        "branch":"Information Technology",
        "company": "Intellipaat, Bangalore"
      }
  ]
  
}
