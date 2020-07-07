import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { DataRetrievalService } from 'src/app/services/data-retrieval.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-finances-page',
  templateUrl: './finances-page.component.html',
  styleUrls: ['./finances-page.component.scss']
})
export class FinancesPageComponent implements OnInit {


  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: Label[] = ['50%', '30%', '20%'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[]

  constructor(private readonly _dataService: DataRetrievalService) {
    // this.setChartData$();
  }

  ngOnInit() {
    this.setChartData$()
  }

  public async setValues(e: Event) {

     let values = {
      five: e[0], // 500
      three: e[1], // 300
      two: e[2] // 200
    }

    let result = await values;

    return result;

  }

  private setChartData$() {

    this.setValues() // missing event value, not sure what to do for the param?
      .then((value) => {
        this.barChartData = [
          { data: [value.five, value.three, value.two], label: 'Budget', backgroundColor: ['#364F6B', '#364F6B', '#364F6B'] },
          { data: [1020, 740, 594.60], label: 'Actual Spend', backgroundColor: ['#d72323', '#d72323', '#d72323'] }
        ];
      })







    // this._dataService.getFinances$()
    //   .subscribe(resp => {
    //     this.barChartData = [
    //       { data: [this.fifty, this.thirty, this.twenty], label: 'Budget', backgroundColor: ['#364F6B', '#364F6B', '#364F6B'] },
    //       { data: [1020, 740, 594.60], label: 'Actual Spend', backgroundColor: ['#d72323', '#d72323', '#d72323'] }
    //     ];
    //   })

  }
}