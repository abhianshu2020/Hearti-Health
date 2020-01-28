import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { interval , Subscription } from 'rxjs';
import { switchMap, takeWhile } from 'rxjs/operators';
import { LiveUpdateChart, EarningData } from '../../../../@core/data/earning';
import { LivePrediction } from '../../../../@core/data/live-prediction';
import { symptomPrediction } from '../../../../@core/data/symptomPrediction';
import { SymptomPredictonMapper } from '../../../../@core/data/symptomPredictionMapper';

@Component({
  selector: 'ngx-earning-card-front',
  styleUrls: ['./earning-card-front.component.scss'],
  templateUrl: './earning-card-front.component.html',
})
export class EarningCardFrontComponent implements OnDestroy, OnInit {
  private alive = true;

  @Input() selectedCurrency: string = 'ChestPain';

  intervalSubscription: Subscription;
  currencies: string[] = ['ChestPain', 'BloodSugar', 'Cholesterol'];
  currentTheme: string;
  predictionLiveUpdateCardData : LivePrediction;
 // earningLiveUpdateCardData: LiveUpdateChart;
  //liveUpdateChartData: { value: [string, number] }[];
  liveUpdateChartData : SymptomPredictonMapper[] =[];
 
  //liveUpdateChartData : symptomPrediction[];
  


  constructor(private themeService: NbThemeService,
              private earningService: EarningData) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
      });
  }

  ngOnInit() {
    this.getEarningCardData(this.selectedCurrency);
  }

  changeCurrency(currency) {
    if (this.selectedCurrency !== currency) {
      this.selectedCurrency = currency;

      this.getEarningCardData(this.selectedCurrency);
    }
  }


  private getEarningCardData(currency) {
    this.earningService.getEarningCardData(currency)
      .pipe(takeWhile(() => this.alive))
      .subscribe((predictionLiveUpdateCardData: LivePrediction ) => {
        this.predictionLiveUpdateCardData = predictionLiveUpdateCardData;
      this.mapSymptomPredictionMapper(predictionLiveUpdateCardData.symptomPrediction);
      //  for(let i=0;i<this.earningLiveUpdateCardData.symptomPrediction.length;i++)
      //  {        
      //     this.liveUpdateChartData[i].symptomPredictons[0]=this.earningLiveUpdateCardData.symptomPrediction[i].timeStamp;
      //     this.liveUpdateChartData[i].symptomPredictons[1]=this.earningLiveUpdateCardData.symptomPrediction[i].symptomValue;
       
      //   }

       
     
       // this.liveUpdateChartData = earningLiveUpdateCardData.symptomPrediction;

       // this.startReceivingLiveData(currency);
      });
  }

   private mapSymptomPredictionMapper(symptomPredictions :symptomPrediction[])
   {

    for(let i=0;i<symptomPredictions.length;i++)
     {     
     this.liveUpdateChartData.push({value: [symptomPredictions[i].timeStamp,
      symptomPredictions[i].symptomValue]});  
    }
  
  }
  // private getEarningCardData(currency) {
  //   this.earningService.getEarningCardData(currency)
  //     .pipe(takeWhile(() => this.alive))
  //     .subscribe((earningLiveUpdateCardData: LiveUpdateChart) => {
  //       this.earningLiveUpdateCardData = earningLiveUpdateCardData;
  //       this.liveUpdateChartData = earningLiveUpdateCardData.liveChart;

  //       this.startReceivingLiveData(currency);
  //     });
  // }

  startReceivingLiveData(currency) {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }

    this.intervalSubscription = interval(200)
      .pipe(
        takeWhile(() => this.alive),
        switchMap(() => this.earningService.getEarningLiveUpdateCardData(currency)),
      )
      .subscribe((liveUpdateChartData: any[]) => {
        this.liveUpdateChartData = [...liveUpdateChartData];
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
