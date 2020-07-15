import { FinancesPageComponent } from './finances-page.component';

describe('FinancesPageComponent', () => {
  let component: FinancesPageComponent;

  beforeEach(() => {
    component = new FinancesPageComponent()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('[SetValues] Should assign the emitted values from the child to the local variables', () => {

    let mockEvent = {
      actualSpend: [500, 300, 200],
      budget: [550, 250, 220]
    }

    component.setValues(mockEvent);
    expect(component.barChartData).not.toEqual(undefined);
    expect(component.financeData.budget).toEqual(mockEvent.budget);
    expect(component.financeData.actualSpend).toEqual(mockEvent.actualSpend);
  });

  it('[SetDifferential] Should map event values to local array', () => {
    let mockEvent = [
      100, 200, 300
    ];

    expect(component.differential).toEqual([]);
    component.setDifferential(mockEvent);
    expect(component.differential).toEqual([100, 200, 300]);
  })

})
