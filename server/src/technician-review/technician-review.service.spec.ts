import { Test, TestingModule } from '@nestjs/testing';
import { TechnicianReviewService } from './technician-review.service';

describe('TechnicianReviewService', () => {
  let service: TechnicianReviewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechnicianReviewService],
    }).compile();

    service = module.get<TechnicianReviewService>(TechnicianReviewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
