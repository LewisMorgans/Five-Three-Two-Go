import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.scss']
})
export class ModalPageComponent implements OnInit {
  @Output() fifty: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.fifty.emit([500, 300, 200]);
  }

}
