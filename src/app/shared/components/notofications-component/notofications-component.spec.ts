import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotoficationsComponent } from './notofications-component';

describe('NotoficationsComponent', () => {
  let component: NotoficationsComponent;
  let fixture: ComponentFixture<NotoficationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotoficationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotoficationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
