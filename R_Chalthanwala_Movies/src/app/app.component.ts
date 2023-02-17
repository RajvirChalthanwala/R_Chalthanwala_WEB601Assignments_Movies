import { Component } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'R_Chalthanwala_Movies';
  contentArray: Content[] = [];
}
/*
export class ContentListComponent {
  contentArray: any[] = [];
}
*/
