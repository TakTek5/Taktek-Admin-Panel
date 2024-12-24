import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceProviderModule } from './service-provider/service-provider.module';
import { ServiceModule } from './service/service.module';
import { UserModule } from './user/user.module';
import { ReviewModule } from './review/review.module';
import { CallModule } from './call/call.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [ServiceProviderModule, ServiceModule, UserModule, ReviewModule, CallModule, TransactionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
