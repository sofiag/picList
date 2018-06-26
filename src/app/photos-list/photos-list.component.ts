import {Component, OnInit} from '@angular/core';
import {PhotosService} from '../photos.service';


@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  photos: any;
  // [
  // {
  //   albumId: 1,
  //   id: 1,
  //   title: 'accusamus beatae ad facilis cum similique qui sunt',
  //   url: 'http://placehold.it/600/92c952',
  //   thumbnailUrl: 'http://placehold.it/150/92c952'
  // },
  // {
  //   albumId: 1,
  //   id: 2,
  //   title: 'reprehenderit est deserunt velit ipsam',
  //   url: 'http://placehold.it/600/771796',
  //   thumbnailUrl: 'http://placehold.it/150/771796'
  // },
  // {
  //   albumId: 1,
  //   id: 3,
  //   title: 'officia porro iure quia iusto qui ipsa ut modi',
  //   url: 'http://placehold.it/600/24f355',
  //   thumbnailUrl: 'http://placehold.it/150/24f355'
  // },
  // {
  //   albumId: 1,
  //   id: 4,
  //   title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
  //   url: 'http://placehold.it/600/d32776',
  //   thumbnailUrl: 'http://placehold.it/150/d32776'
  // },
  // {
  //   albumId: 1,
  //   id: 5,
  //   title: 'natus nisi omnis corporis facere molestiae rerum in',
  //   url: 'http://placehold.it/600/f66b97',
  //   thumbnailUrl: 'http://placehold.it/150/f66b97'
  // }];

  constructor(private _photosService: PhotosService) {
  }

  ngOnInit() {
    this._photosService.getPhotos()
      .subscribe(photos => this.photos = photos);

  }

  showDetail(photo) {
    this.photos = photo;
    // console.log('button works');
  }
}
