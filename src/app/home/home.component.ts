import { Component, OnInit } from '@angular/core';
import {NutritionserviceService} from '../nutritionservice.service';
declare  const responsiveVoice: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private nutritionService: NutritionserviceService) { }
  nutritionData = null;
  public item;
  ngOnInit() {
  }
  getNutritionDetails() {
    responsiveVoice.speak('the searched keyword is' + this.item);

    this.nutritionService.getNutritionDetails(this.item).subscribe(data => {
      this.nutritionData = data;
    });
  }
}
