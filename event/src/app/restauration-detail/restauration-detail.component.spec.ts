import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurationDetailComponent } from './restauration-detail.component';

describe('RestaurationDetailComponent', () => {
  let component: RestaurationDetailComponent;
  let fixture: ComponentFixture<RestaurationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurationDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
