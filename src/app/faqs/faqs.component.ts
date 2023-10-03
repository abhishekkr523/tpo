import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FaqdialogComponent } from '../faqdialog/faqdialog.component';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {

  displayedColumns: string[] = ['position', 'question'];
  dataSource = [
    {
      "position": 1,
      "question": "Campus Recruitment Program in which final year students participate?", "answer": "Summer Internship Program for pre final year students which can be converted into a pre placement offer"
    },
    {
      "position": 2,
      "question": "How can a company register itself for the Campus Recruitment Program?", "answer": "To participate in the Campus Recruitment Program, a company must first contact the placement office or register on the website. The company is then sent the login details which would let them login in our Placement Automation System (PAS) enabling them to post job opportunities."
    },
    {
      "position": 3,
      "question": "Is there any fee associated with the process?",
      "answer": "No. There is no fees associated with the registration or the placement process."
    },
    {
      "position": 4,
      "question": " What is the procedure to schedule a pre-placement talk (PPT)?",
      "answer": "A company will only be allowed to hold its PPT after filling up the job announcement form. A typical pre placement session is scheduled for 60 minutes. In view of the academic calendar of the students, the session are scheduled between 10AM and 5PM hours. Student volunteers will get in touch with the company to fix a mutual convenient time for the session."
    },
    {
      "position": 5,
      "question": "What kind of information do the students expect in PPTs?",
      "answer": "The pre-placement talk is a platform for interaction between the company and the students. The presentation is followed by a Q&A session where students interact with company officials to get a better understanding of the company and potential roles. The important insights that the students expect from the PPT are: 1>Profile and reputation of the corporation.2>Career roles and responsibilities offered in different types of profiles.3>Locations where the student is likely to be posted.4>Compensation packages."
    }
  ];


  // constructor(public dialog: MatDialog) {}

  // openDialog() {
  //   this.dialog.open(FaqdialogComponent);
  // }

  title: any;
  // title = 'testing';
  constructor(public dialog: MatDialog) { }
  opendialog(question:any,answer: any) {
    // alert()
    this.dialog.open(FaqdialogComponent, {
      data:{question,answer} // Pass the JSON data to the dialog component
    });

  }
}
