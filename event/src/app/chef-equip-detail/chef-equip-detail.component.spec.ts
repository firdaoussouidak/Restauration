import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefEquipDetailComponent } from './chef-equip-detail.component';

describe('ChefEquipDetailComponent', () => {
  let component: ChefEquipDetailComponent;
  let fixture: ComponentFixture<ChefEquipDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefEquipDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefEquipDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
