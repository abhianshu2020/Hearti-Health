import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-health-predictor-result',
  templateUrl: './health-predictor-result.component.html',
  styleUrls: ['./health-predictor-result.component.scss']
})
export class HealthPredictorResultComponent implements OnInit {

  isHeartOK: Boolean;

  constructor(private dialogService: NbDialogService) {
  }

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, { hasScroll: true });
  }
  ngOnInit() {
    this.isHeartOK = false;
  }

}
