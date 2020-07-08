import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataRetrievalService } from 'src/app/services/data-retrieval.service';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.scss']
})
export class ModalPageComponent implements OnInit {
  @Output() finances: EventEmitter<any> = new EventEmitter();
  public financesform: FormGroup
  public salary: number = 500; // salary service call use async pipe in template
  public fifty: number;
  public thirty: number;
  public twenty: number;
  public actualFifty: number;
  public actualThirty: number;
  public actualTwenty: number;
  public diffFifty: number;
  public diffThirty: number;
  public diffTwenty: number;

  constructor(private readonly _fb: FormBuilder,
    private readonly _data: DataRetrievalService) { }

  ngOnInit(): void {
    this.initialiseForm();
    // this.getUserFinance();
    this.getBudget(); // move to getUserfinance once API made.
    // this.setDifferential();

    let x = {
      actualSpend: [
        500,
        300,
        200
      ],
      budget: [
        550,
        250,
        220
      ]
    }

    this.finances.emit(x)

  }

  private initialiseForm(): void {
    this.financesform = this._fb.group({
      actual50: [this.actualFifty, Validators.required],
      actual30: [this.actualThirty, Validators.required],
      actual20: [this.actualTwenty, Validators.required]
    })
  }

  get f() {
    return this.financesform.controls;
  }

  private getBudget(): void { // move to getUserFinance function once API created.
    this.fifty = (50 * this.salary) / 100;
    this.thirty = (30 * this.salary) / 100;
    this.twenty = (20 * this.salary) / 100;
  }

  public calculateBudget(e: Event): void {
    this.fifty = (50 * this.salary) / 100;
    this.thirty = (30 * this.salary) / 100;
    this.twenty = (20 * this.salary) / 100;
  }

  private getUserFinance(): void {
    this._data.getFinances$()
      .subscribe(finances => {
        this.salary = //finances.salary
          this.actualFifty = //finances.fifty;
          this.actualThirty = //finances.thirty;
          this.actualTwenty  //finances.twenty;
        this.setDifferential();
      });
  }

  public setUserFinances(): void {
    let payload = {
      actualSpend: [
        this.f.fifty.value,
        this.f.thirty.value,
        this.f.twenty.value
      ],
      budget: [
        this.fifty,
        this.thirty,
        this.twenty
      ]
    }
    this._data.setFinances$(payload).subscribe();
  }

  private setDifferential(): void {

    this.diffFifty = (this.actualFifty - this.fifty);
    this.diffThirty = (this.actualThirty - this.thirty);
    this.diffTwenty = (this.actualTwenty - this.twenty);

  }

}
