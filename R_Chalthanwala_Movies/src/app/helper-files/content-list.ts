class ContentList{
  private contentArray: Content[]=[];

  constructor() {
  }

  getContentArray(): Content[]{
    return this.contentArray;
  }

  addContent(content: Content){
    this.contentArray.push(content);
  }

  getLength(): number{
    return this.contentArray.length;
  }
  getContentHTML(index: number): string {
    if (index < 0 || index >= this.contentArray.length){
      return '<p>Error: Index out of bounds</p>';
    }

    const content = this.contentArray[index];
    return `
    <h2>${content.title}</h2>
    <p>${content.description}</p>
    <p>By ${content.creator}</p>
    <img src="${content.imgURL}" alt="${content.title}">
    <p>Type: ${content.type}</p>
    `;
  }
}
