// service-provider.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'prisma/prisma.service';
import { ServiceProviderService } from './service-provider.service';

describe('ServiceProviderService', () => {
  let service: ServiceProviderService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ServiceProviderService,
        {
          provide: PrismaService,
          useValue: {
            serviceProvider: {
              create: jest.fn(),
              findMany: jest.fn(),
              findUnique: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<ServiceProviderService>(ServiceProviderService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a ServiceProvider', async () => {
    const dto = { name: 'John Doe', email: 'john@example.com', serviceId: 1 } as any;
    jest.spyOn(prisma.serviceProvider, 'create').mockResolvedValue(dto);
    const result = await service.create(dto);
    expect(result).toEqual(dto);
    expect(prisma.serviceProvider.create).toHaveBeenCalledWith({ data: dto });
  });

  // Add similar tests for findAll, findOne, update, and remove.
});