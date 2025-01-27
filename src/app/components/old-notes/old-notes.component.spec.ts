import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldNotesComponent } from './old-notes.component';

describe('OldNotesComponent', () => {
  let component: OldNotesComponent;
  let fixture: ComponentFixture<OldNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldNotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
