import {Component, Input, OnInit} from '@angular/core';
import {Account} from '../../shared/models/account';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {
  @Input() account = {} as Account

  //fileToUpload: File = null;

  constructor() { }


/*  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }*/

  ngOnInit(): void {
  }

}
