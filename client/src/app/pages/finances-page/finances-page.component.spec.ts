import { FinancesPageComponent } from './finances-page.component';

describe('FinancesPageComponent', () => {
  let component: FinancesPageComponent;
  let _dataService;

  beforeEach(() => {
    component = new FinancesPageComponent(_dataService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should assign the emitted values from the child to the local variables', () => {

    let mockEvent = {
      actualSpend: [500, 300, 200],
      budget: [550, 250, 220]
    }

    component.setValues(mockEvent);
    expect(component.barChartData).not.toEqual(undefined);
    expect(component.financeData.budget).toEqual(mockEvent.budget);
    expect(component.financeData.actualSpend).toEqual(mockEvent.actualSpend);
  });

})
