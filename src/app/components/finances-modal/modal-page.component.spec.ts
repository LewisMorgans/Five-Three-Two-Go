import { async } from '@angular/core/testing';
import { ModalPageComponent } from './modal-page.component';
import { FormBuilder } from '@angular/forms';
import { DataRetrievalService } from 'src/app/services/data/data-retrieval.service';
import { of } from 'rxjs';

describe('ModalPageComponent', () => {
  let component: ModalPageComponent;
  let mockFormBuilder = new FormBuilder();
  let mockDataService: DataRetrievalService;

  beforeEach(async(() => {
    mockDataService = {
      getFinances$: () => of({}),
      setFinances$: () => of({})
    } as any
    component = new ModalPageComponent(mockFormBuilder, mockDataService)
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('[InitialiseForm] Should build the form group', () => {
    expect(component.financesform).toBeUndefined();
    component.ngOnInit();
    expect(component.financesform.controls['actual50']).toBeTruthy();
  });

  it('[F] It should return the form controls', () => {
    component.ngOnInit();
    expect(component.f).toBeInstanceOf(Object);
  });

  it('[GetBudget] It should make calculations and assign value to global variable', () => {
    component.salary = 20;
    expect(component.fifty).toBeUndefined();
    component.getBudget();
    expect(component.fifty).toEqual(10)
  });

  it('[CalculateBudget] On keyup $event it should call the getBudget method', () => {
    const spy = spyOn(component, 'getBudget').and.callThrough();
    const event = new KeyboardEvent("keypress", {
      "key": "2"
    });
    component.calculateNewBudget(event);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('[GetUserFinances$] Method calls', () => {

    it('[GetUserFinance$] It should call the getFinance$ service', () => {
      const spy = spyOn(mockDataService, 'getFinances$').and.callThrough();
      component.ngOnInit();
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('[GetUserFinances$] It should assign response values to global variables', () => {
      spyOn(mockDataService, 'getFinances$').and.returnValue(of({
        salary: 2000,
        fifty: 500,
        thirty: 300,
        twenty: 200
      }));

      component.ngOnInit();
      expect(component.salary).toEqual(2000);
      expect(component.fifty).toEqual(1000);
      expect(component.thirty).toEqual(600);
      expect(component.twenty).toEqual(400);
    });

    it('[GetUserFinances$] It should call multiple methods', () => {
      spyOn(mockDataService, 'getFinances$').and.returnValue(of({
        salary: 2000,
        fifty: 500,
        thirty: 300,
        twenty: 200
      }));
      const differentialSpy = spyOn(component.differential, 'emit').and.callThrough();
      const financesSpy = spyOn(component.finances, 'emit').and.callThrough();
      const budgetSpy = spyOn(component, 'getBudget').and.callThrough();
      component.ngOnInit();
      expect(budgetSpy).toHaveBeenCalledTimes(1);
      expect(component.f.actual50.value).toEqual(500);
      expect(component.diffFifty).toEqual(-500);
      expect(financesSpy).toHaveBeenCalled();
      expect(differentialSpy).toHaveBeenCalled();
    })

  })

  it('[SetUserFinances] It should call the setFinances service and getFinanceMethod', () => {
    const spy = spyOn(mockDataService, 'setFinances$').and.callThrough();
    const functionSpy = spyOn(mockDataService, 'getFinances$').and.callThrough();
    component.ngOnInit();
    component.setUserFinances();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(functionSpy).toHaveBeenCalledTimes(2)
  })


});
