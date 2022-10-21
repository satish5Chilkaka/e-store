import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCComponent } from './p-c.component';

describe('PCComponent', () => {
  let component: PCComponent;
  let fixture: ComponentFixture<PCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
