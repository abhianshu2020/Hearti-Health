import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { ProfitBarAnimationChartData } from '../data/profit-bar-animation-chart';
import { HeartAttackCounter } from '../data/heart-attack-counter';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import *  as  HeartAttackPredictor from '../../../assets/mock/heartAttackCounter.json';


@Injectable()
export class ProfitBarAnimationChartService extends ProfitBarAnimationChartData {

  private HeartAttackCounter: HeartAttackCounter[];
  private data: any;

  constructor(private http: HttpClient) {
    super();
    this.getDataForHeartAttackCounter().subscribe(
      res => {
        this.HeartAttackCounter = res;
        this.data = {
          firstLine: this.getDataForFirstLine(),
          secondLine: this.getDataForSecondLine(),
        };
      });    
  }
  ngOnInit() {
   
  }
  getDataForHeartAttackCounter(): Observable<HeartAttackCounter[]> {

    //  this.HeartAttackCounter  = (HeartAttackPredictor as any).default;
    //this.HeartAttackCounter= HeartAttackPredictor;
    //this.HeartAttackCounter = DummyJSON;
    return observableOf((HeartAttackPredictor as any).default);

 

    // return this.http.get<HeartAttackCounter[]>("http://172.30.12.171:8083/intervalReport/weeklyreport/");
   

   
  }

  getDataForFirstLine(): number[] {   

    //Write the code to get predicted value from our object
    let firstLinedata: number[] = [];
    for (let i = 0; i < this.HeartAttackCounter.length; i++) {
      firstLinedata[i] = this.HeartAttackCounter[i].predicted;
    }

    return firstLinedata;
    // return this.createEmptyArray(100)
    //   .map((_, index) => {
    //     const oneFifth = index / 5;

    //     return (Math.sin(oneFifth) * (oneFifth - 10) + index / 6) * 5;
    //   });
  }

  getDataForSecondLine(): number[] {

    //Write the code to get predicted value from our object
    let secondLinedata: number[] = [];
    for (let i = 0; i < this.HeartAttackCounter.length; i++) {
      
      secondLinedata[i] = this.HeartAttackCounter[i].cured;
    }

    return secondLinedata;
    // return this.createEmptyArray(100)
    //   .map((_, index) => {
    //     const oneFifth = index / 5;

    //     return (Math.cos(oneFifth) * (oneFifth - 10) + index / 6) * 5;
    //   });
  }

  createEmptyArray(nPoints: number) {
    return Array.from(Array(nPoints));
  }

  getChartData(): Observable<{ firstLine: number[]; secondLine: number[]; }> {
    return observableOf(this.data);
  }
}
