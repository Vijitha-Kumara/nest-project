import { Module } from '@nestjs/common';
import { CustomerDetailsController } from './customer-details.controller';
import { CustomerDetailsService } from './customer-details.service';
import {
  CustomerDetails,
  CustomerDetailsSchema,
} from '../schemas/customer-details.schema';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
    imports: [
      MongooseModule.forFeature([{ name: CustomerDetails.name, schema: CustomerDetailsSchema }]),
    ],
  controllers: [CustomerDetailsController],
  providers: [CustomerDetailsService],
})
export class CustomerDetailsModule {}
