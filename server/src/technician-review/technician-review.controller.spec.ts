import { Test, TestingModule } from '@nestjs/testing';
import { TechnicianReviewController } from './technician-review.controller';

describe('TechnicianReviewController', () => {
  let controller: TechnicianReviewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechnicianReviewController],
    }).compile();

    controller = module.get<TechnicianReviewController>(TechnicianReviewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
