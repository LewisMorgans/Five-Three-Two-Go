import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPageComponent } from './modal-page.component';
import { FormBuilder } from '@angular/forms';
import { DataRetrievalService } from 'src/app/services/data-retrieval.service';

describe('ModalPageComponent', () => {
  let component: ModalPageComponent;
  let mockFormBuilder = new FormBuilder();
  let mockDataService: DataRetrievalService;

  beforeEach(async(() => {

    component = new ModalPageComponent(mockFormBuilder, mockDataService)
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
