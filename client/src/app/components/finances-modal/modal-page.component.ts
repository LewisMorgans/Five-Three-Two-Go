import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.scss']
})
export class ModalPageComponent implements OnInit {
  @Output() finances: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

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

}
