import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NutritionserviceService {
  constructor(private httpClient: HttpClient) { }

  getNutritionDetails(search) {
    const url = 'https://api.nutritionix.com/v1_1/search/' + search +
      '?results=0:1&fields=*&appId=3f5fd639&appKey=94d28f887c5cf3e3d3ea1cdc34fc83d1';
    return this.httpClient.get(url);
  }

}
