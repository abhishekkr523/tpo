import { Component ,Inject} from '@angular/core';
import {  MAT_DIALOG_DATA, } from '@angular/material/dialog';

@Component({
  selector: 'app-faqdialog',
  templateUrl: './faqdialog.component.html',
  styleUrls: ['./faqdialog.component.css']
})
export class FaqdialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
