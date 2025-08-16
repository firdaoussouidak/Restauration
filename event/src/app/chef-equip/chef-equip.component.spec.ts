import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefEquipComponent } from './chef-equip.component';

describe('ChefEquipComponent', () => {
  let component: ChefEquipComponent;
  let fixture: ComponentFixture<ChefEquipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefEquipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
