import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
    `
    <div>
<h1>Welcome to my App</h1>
<content-card></content-card>
</div>
`,
  styleUrls: ['./app.component.scss']
})

@Component({
  selector: 'content-card',
  template: `
    <div>
<h3>Content List</h3>
<ul>
<li *ngFor="let item of contentList.getItems()">{{item}}</li>
</ul>
</div>
`
})
export class AppComponent {
  title = 'R_Chalthanwala_Movies';
}
