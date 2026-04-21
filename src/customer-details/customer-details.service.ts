import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CustomerDetails } from '../schemas/customer-details.schema';

@Injectable()
export class CustomerDetailsService {
  constructor(
    @InjectModel(CustomerDetails.name)
    private CustomerModel: Model<CustomerDetails>,
  ) {}

  createData(data: any) {
    return this.CustomerModel.create(data);
  }

  findAll() {
    return this.CustomerModel.find();
  }
}
