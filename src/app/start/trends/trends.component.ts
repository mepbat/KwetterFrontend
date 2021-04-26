import { Component, OnInit } from '@angular/core';
import {TagService} from '../../shared/services/tag/tag.service';
import {Tag} from '../../shared/models/tag';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent {
  trends = [] as Tag[];

  constructor(private tagService: TagService) {
    tagService.getTrends().subscribe(
      data => {
        if(data !== null) {
          this.trends = data;
        }
      },
      error => {
        console.log(error);
      }
    )
  }
}
