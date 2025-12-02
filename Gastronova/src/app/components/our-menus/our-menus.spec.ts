import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMenus } from './our-menus';

describe('OurMenus', () => {
  let component: OurMenus;
  let fixture: ComponentFixture<OurMenus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurMenus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurMenus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
