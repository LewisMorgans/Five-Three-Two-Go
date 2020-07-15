import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponentComponent } from './navbar-component.component';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NavbarComponentComponent', () => {
  let component: NavbarComponentComponent;
  let fixture: ComponentFixture<NavbarComponentComponent>;
  let mockRouter;

  beforeEach(async(() => {

    mockRouter = { 
      navigate: jasmine.createSpy('navigate') 
    };

    TestBed.configureTestingModule({
      declarations: [NavbarComponentComponent],
      providers: [
        { provide: Router, useValue: mockRouter }
      ],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
    fixture = TestBed.createComponent(NavbarComponentComponent);
    component = fixture.componentInstance;

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should handle which page to navigate to depending on the params passed', () => {
    let params = 'signin';
    component.handleClick(params)
    expect(mockRouter.navigate).toHaveBeenCalledWith(['sign-in']);

    params = 'register';
    component.handleClick(params);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['register']);
  })
});
