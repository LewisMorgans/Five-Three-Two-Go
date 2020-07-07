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

  constructor(private readonly _fb: FormBuilder,
    private readonly _data: DataRetrievalService) { }

  ngOnInit(): void {
    this.initialiseForm();
    // this.getUserFinance();

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
      actual50: ['', Validators.required],
      actual30: ['', Validators.required],
      actual20: ['', Validators.required]
    })
  }

  get f() {
    return this.financesform.controls;
  }

  public calculations(e: Event): void {
    this.fifty = (50 * this.salary) / 100;
    this.thirty = (30 * this.salary) / 100;
    this.twenty = (20 * this.salary) / 100;
  }

  private getUserFinance(): void {
    this._data.getFinances$()
      .subscribe(finances => {
        this.salary = //finainces.salary
          this.actualFifty = //finances.fifty;
          this.actualThirty = //finances.thirty;
          this.actualTwenty  //finances.twenty;
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

}
