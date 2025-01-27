import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisproofComponent } from './disproof.component';

describe('DisproofComponent', () => {
  let component: DisproofComponent;
  let fixture: ComponentFixture<DisproofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisproofComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisproofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
