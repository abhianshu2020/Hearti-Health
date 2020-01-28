export class LivePrediction {
   SymptomType: string;
   TodaysPrediction: number;
   Predictions :Predictions[];
  }

export class Predictions{
    TimeStamp: Date;
    Count : number;
}  