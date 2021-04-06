import {Component, Input, OnInit} from '@angular/core';
import {Account} from '../../shared/models/account';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() account = {} as Account
  constructor() { }

  ngOnInit(): void {
  }

}
