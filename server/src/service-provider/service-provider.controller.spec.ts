// service-provider.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { ServiceProviderController } from './service-provider.controller';
import { ServiceProviderService } from './service-provider.service';

describe('ServiceProviderController', () => {
  let controller: ServiceProviderController;
  let service: ServiceProviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceProviderController],
      providers: [
        {
          provide: ServiceProviderService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ServiceProviderController>(ServiceProviderController);
    service = module.get<ServiceProviderService>(ServiceProviderService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call service.create when creating a ServiceProvider', async () => {
    const dto = { name: 'John Doe', email: 'john@example.com', serviceId: 1 } as any;
    jest.spyOn(service, 'create').mockResolvedValue(dto);
    const result = await controller.create(dto);
    expect(result).toEqual(dto);
    expect(service.create).toHaveBeenCalledWith(dto);
  });

  // Add similar tests for findAll, findOne, update, and remove.
});