import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceModule } from './service/service.module';
import { ReviewModule } from './review/review.module';
import { LeadModule } from './lead/lead.module';
import { CompanyModule } from './company/company.module';
import { TechnicianModule } from './technician/technician.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ServiceModule, UserModule, ReviewModule, LeadModule, CompanyModule, TechnicianModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}