import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { LiveUpdateChart, PieChart, EarningData } from '../data/earning';
import { LivePrediction } from '../data/live-prediction';
import { HttpClient } from '@angular/common/http';
import * as LivePredictions from '../../../assets/mock/livePrediction.json'

@Injectable()

export class EarningService  {
//export class EarningService extends EarningData {


  
  private LivePredictions: LivePrediction[];
  private Predictions :any;

  constructor(private http: HttpClient) {

    this.getDataForHeartAttackCounter().subscribe(
      res => {
        this.LivePredictions = res;
        this.Predictions = this.GetLiveRecords();
        
      })
    
  }


  getDataForHeartAttackCounter(): Observable<LivePrediction[]> {

    //  this.HeartAttackCounter  = (HeartAttackPredictor as any).default;
    //this.HeartAttackCounter= HeartAttackPredictor;
    //this.HeartAttackCounter = DummyJSON;
    return observableOf((LivePredictions as any).default);    
  }

  GetLiveRecords():Observable< LivePrediction[]>
  {
    return observableOf((LivePredictions as any).default);
  }


  getLiveRecordsbyType(type : string): LivePrediction
  {    
    var a =this.LivePredictions.filter((value) => value.symptomType.toLowerCase().includes(type.toLowerCase()));
    return a[0];
  }

  // private currentDate: Date = new Date();
  // private currentValue = Math.random() * 1000;
  // private ONE_DAY = 24 * 3600 * 1000;

  
  private pieChartData = [
    {
      value: 50,
      name: 'ChestPain',
    },
    {
      value: 25,
      name: 'BloodSugar',
    },
    {
      value: 25,
      name: 'Cholesterol',
    },
  ]

  private liveUpdateChartData = {
    bitcoin: {
      liveChart: [],
      delta: {
        up: true,
        value: 4,
      },
      dailyIncome: 45895,
    },
    tether: {
      liveChart: [],
      delta: {
        up: false,
        value: 9,
      },
      dailyIncome: 5862,
    },
    ethereum: {
      liveChart: [],
      delta: {
        up: false,
        value: 21,
      },
      dailyIncome: 584,
    },
  };

  // getDefaultLiveChartData(elementsNumber: number) {
  //   //write the logic to fetch the data from Object
  //   this.currentDate = new Date();
  //   this.currentValue = Math.random() * 1000;

  //   var a=Array.from(Array(elementsNumber))
  //   .map(item => this.generateRandomLiveChartData());

  //   return a;
  // }

  // generateRandomLiveChartData() {
  //   this.currentDate = new Date(+this.currentDate + this.ONE_DAY);
  //   this.currentValue = this.currentValue + Math.random() * 20 - 11;

  //   if (this.currentValue < 0) {
  //     this.currentValue = Math.random() * 100;
  //   }

  //   return {
  //     value: [
  //       [
  //         this.currentDate.getFullYear(),
  //         this.currentDate.getMonth(),
  //         this.currentDate.getDate(),
  //       ].join('/'),
  //       Math.round(this.currentValue),
  //     ],
  //   };
  // }

  // getEarningLiveUpdateCardData(currency): Observable<any[]> {
  //   const data = this.liveUpdateChartData[currency.toLowerCase()];
  //   const newValue = this.generateRandomLiveChartData();

  //   data.liveChart.shift();
  //   data.liveChart.push(newValue);

  //   return observableOf(data.liveChart);
  // }

  getEarningCardData(currency: string): Observable<LivePrediction> {
   // const data = this.liveUpdateChartData[currency.toLowerCase()];

    const data=this.getLiveRecordsbyType(currency);


//     let dataFormatter: {value: [string,number]}[];
// for(let i: 0;i<data.symptomPrediction.length;i++){
//      let value :[string,number];
//      value[0]=data.symptomPrediction[i].timeStamp;
//      value[1]=data.symptomPrediction[i].symptomValue;
//      dataFormatter[i]=value;
//}

    //data.liveChart = this.getDefaultLiveChartData(150);

    return observableOf(data);
  }

  getEarningPieChartData(): Observable<PieChart[]> {
    return observableOf(this.pieChartData);
  }
}
