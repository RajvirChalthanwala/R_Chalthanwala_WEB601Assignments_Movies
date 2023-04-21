import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent {
  id: number = 0;
  content: any = {};
  defaultMovie: string = '/assets/images/defaultImage.png';

  constructor(private route: ActivatedRoute, private SuperBikeService: MovieService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id') ?? 0);

      this.SuperBikeService.getMovieById(this.id).subscribe(movie => {
        this.content = movie;
      })
    });
  }

  handleClick(content: Content) {
    console.log(`ID: ${content.id}, Title: ${content.title}`);
  }
}
