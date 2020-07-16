import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataRetrievalService } from 'src/app/services/data/data-retrieval.service';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.scss']
})
export class ModalPageComponent implements OnInit {
  @Output() finances: EventEmitter<any> = new EventEmitter();
  @Output() differential: EventEmitter<any> = new EventEmitter();
  public financesform: FormGroup
  public salary: number = 0;
  public fifty: number;
  public thirty: number;
  public twenty: number;
  public actualFifty = 1
  public actualThirty = 1
  public actualTwenty = 1
  public diffFifty: number;
  public diffThirty: number;
  public diffTwenty: number;

  constructor(private readonly _fb: FormBuilder,
    private readonly _data: DataRetrievalService) { }

  ngOnInit(): void {
    this.initialiseForm();
    this.getUserFinance();
    this.updateFormGroup();


  }

  private initialiseForm(): void {
    this.financesform = this._fb.group({
      actual50: [0, Validators.required],
      actual30: [0, Validators.required],
      actual20: [0, Validators.required]
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
        this.salary = finances.salary
        this.actualFifty = finances.fifty;
        this.actualThirty = finances.thirty;
        this.actualTwenty = finances.twenty;
        this.updateFormGroup();
        this.getBudget();
        this.setDifferential();
        let x = {
          actualSpend: [
            this.actualFifty,
            this.actualThirty,
            this.actualTwenty
          ],
          budget: [
            this.fifty,
            this.thirty,
            this.twenty
          ]
        }
    
        this.finances.emit(x)
      });
  }

  private updateFormGroup(): void {
    this.f.actual50.setValue(this.actualFifty);
    this.f.actual30.setValue(this.actualThirty);
    this.f.actual20.setValue(this.actualTwenty);

  }

  public setUserFinances(): void {
    let payload = {
      actualSpend: {
        salary: this.salary,
        fifty: this.f.actual50.value,
        thirty: this.f.actual30.value,
        twenty: this.f.actual20.value
      }
    }
    this._data.setFinances$(payload)
      .subscribe(resp => {
        this.getUserFinance();
      });
  }

  private setDifferential(): void {

    this.diffFifty = (this.actualFifty - this.fifty);
    this.diffThirty = (this.actualThirty - this.thirty);
    this.diffTwenty = (this.actualTwenty - this.twenty);

    let x = [this.diffFifty, this.diffThirty, this.diffTwenty];

    this.differential.emit(x);

  }

}
