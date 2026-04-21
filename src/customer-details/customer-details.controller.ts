import { Controller, Get, Post, Body } from '@nestjs/common';
import { CustomerDetailsService } from './customer-details.service';

@Controller('customer-details')
export class CustomerDetailsController {
  constructor(private customerDetailsService: CustomerDetailsService) {}

  @Get()
  getCustomerDetails() {
    this.customerDetailsService.findAll();
  }

  @Post()
  createCustomerDetails(@Body() body: any) {
    this.customerDetailsService.createData(body);
  }
}
