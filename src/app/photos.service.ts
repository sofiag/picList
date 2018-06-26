import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PhotosService {

  urlPhotos: string;

  constructor(private http: HttpClient) {
  }

  getPhotos(): Observable<any> {
    this.urlPhotos = 'https://jsonplaceholder.typicode.com/photos';
    return this.http.get(this.urlPhotos);
  }

}
