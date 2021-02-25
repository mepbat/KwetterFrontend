import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {
  profileName: string = "Simon";
  //fileToUpload: File = null;

  constructor() { }


/*  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }*/

  ngOnInit(): void {
  }

}
