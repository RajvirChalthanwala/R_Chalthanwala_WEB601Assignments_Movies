import { Component } from '@angular/core';
@Component({
  selector: 'app-content-card',
  template: `
    <div class="card">
    <h3>Content List</h3>
      <ul>
          <li *ngFor="let item of contentList.getItems()">{{item}}</li>
      </ul>
    </div>
  `
})
export class ContentCardComponent {
  private contentList: ContentList;

  constructor() {
    this.contentList = new ContentList();
    this.contentList.add("Item 1");
    this.contentList.add('Item 2');
    this.contentList.add('Item 3');
  }
  getContentList() {
    return this.contentList;
  }
}

const contentCard = new ContentCardComponent();
console.log(contentCard.getContentList().getItems());

export class ContentList {
  private items: string[] = [];

  add(item: string) {
    this.items.push(item);
  }
  getItems() {
    return this.items;
  }
}
