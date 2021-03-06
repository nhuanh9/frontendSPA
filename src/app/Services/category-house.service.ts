import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {House} from '../model/House';
import {CategoryHouse} from '../model/categoryHouse';

@Injectable({
  providedIn: 'root'
})
export class CategoryHouseService {
  API_URL = 'https://spa-hometay.herokuapp.com/categoryHouse';

  constructor(private http: HttpClient) {
  }

  getList(): Observable<CategoryHouse[]> {
    return this.http.get<CategoryHouse[]>(this.API_URL);
  }
}
