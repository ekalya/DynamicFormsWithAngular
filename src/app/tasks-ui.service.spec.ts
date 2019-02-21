import { TestBed } from '@angular/core/testing';

import { TasksUIService } from './tasks-ui.service';

describe('TasksUIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TasksUIService = TestBed.get(TasksUIService);
    expect(service).toBeTruthy();
  });
});
