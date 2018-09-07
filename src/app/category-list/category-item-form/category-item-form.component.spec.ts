import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryItemFormComponent } from './category-item-form.component';

describe('CategoryItemFormComponent', () => {
  let component: CategoryItemFormComponent;
  let fixture: ComponentFixture<CategoryItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
