/*
import { Component } from '@angular/core';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
}
*/


//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  title: string = '';
  errTxt: boolean = false;


  

  contentArray: Content[] = [
      {
        id: 1,
        title: 'Harry Potter',
        description: 'Harry Potter is a series of seven fantasy novels',
        creator: 'J. K. Rowling',
        imgURL: 'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg',
        type: 'Fantacy',
        tags: ['Tag 9.1', 'Tag 1.2'],
      },
      {
        id: 2,
        title: 'Pathaan',
        description: 'Pathaan is a 2023 Indian Hindi-language action thriller film directed by Siddharth Anand',
        creator: 'Yash Raj Flims',
         imgURL: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcReYm0cslhCuOEdZw105khAzKgu0_b9-iAvVCSWe4Qg_mbIZ0EL',
        type: 'Action',
        tags: ['Tag 8.1', 'Tag 1.2'],
      },
      {
        id: 3,
        title: 'Fate: The WINX Saga',
        description: 'This is a complete pack of Sci-fi and Fatnacy movie',
        creator: 'Jhon William',
         imgURL: 'https://resizing.flixster.com/ctMqrfzTFaDm2sbYPS4KSJgjp2Y=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvOWUyZGViZDgtNmNhOS00MTJiLTk5YTAtOGUwNDQ5NWRkOTVhLmpwZw==',
        type: 'Fantacy',
        tags: ['Tag 7.1', 'Tag 1.2'],
      },
      {
        id: 4,
        title: 'Skyscraper',
        description: 'Will Sawyer is a former FBI agent and U.S. war veteran who now assesses security for skyscrapers.',
        creator: 'Rawson Thurber',
        imgURL: 'http://www.movienewsletters.net/photos/004978R1.jpg',
        type: '',
        tags: ['Tag 6.1', 'Tag 1.2'],
      },
      {
        id: 5,
        title: 'Antim',
        description: 'A man from humble origins works his way up to an influential position within organised crime.',
        creator: 'Mahesh Manjrekar',
         imgURL: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Antim-_The_Final_Truth.jpg',
        type: 'Action',
        tags: ['Tag 5.1', 'Tag 1.2'],
      },
      {
        id: 6,
        title: 'Stranger Things',
        description: 'In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits.',
        creator: 'Duffer Brothers',
        imgURL: 'https://occ-0-38-769.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABS6v2gvwesuRN6c28ZykPq_fpmnQCJwELBU-kAmEcuC9HhWX-DfuDbtA-bfo-IrfgNtxl0qwJJlhI6DENsGFXknKkjhxPGTV-qhp.jpg?r=608',
        type: '',
        tags: ['Tag 4.1', 'Tag 1.2'],
      },
      {
        id: 7,
        title: 'The Gray Man',
        description: 'When the CIAs top asset -- his identity known to no one best',
        creator: 'Joe Russo',
         imgURL: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQYpfFPwwcvE1q2_TPViUEfzAnalhWMCh4qPHUFD5tDXnN2NP2e',
        type: 'Action',
        tags: ['Tag 3.1', 'Tag 1.2'],
      },
      {
        id: 8,
        title: 'Etenarls',
        description: 'The Eternals, a race of immortal beings with superhuman powers who have secretly lived on Earth for thousands of years',
        creator: 'Chloe Zhao',
         imgURL: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTFInBWWtvbKulV6xz1RHgrFjSrbPUX0PvwGWwYYr54OiuCh_I5',
        type: 'Action',
        tags: ['Tag 2.1', 'Tag 1.2'],
      }
    ];
  


  searchTerm = '';
  searchResults: Content[] = [];
  searchExists = false;

  checkExistence() {

    if (this.searchTerm.trim() === '') {
      this.searchExists = false;
      return;
  }

    /*
    this.searchResults = this.contentArray.filter(item => item.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
    this.searchExists = this.searchResults.length > 0;*/
  }

    addContent(newContent: Content) {
      const AddPromise = new Promise((resolve, reject) => {
        this.contentArray.push(newContent);
        console.log(`Content Added successfully, Country: ${this.title}`);
        this.contentArray = [...this.contentArray];
        resolve(newContent.title);
      });

      AddPromise.then(title => {

        this.errTxt = false;
      }).catch(err => {
        this.errTxt = true;
      });

    }
  }
