import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class CustomerDetails {
  @Prop()
  customerName: string;

  @Prop()
  customerId: string;

  @Prop({
    type: Object,
  })
  primaryContactPerson: {
    fname: string;
    lname: string;
  };
  @Prop()
  jobTitle: string;

  @Prop()
  emailAddress: string;

  @Prop()
  phoneNumber: string;
}
export const CustomerDetailsSchema =
  SchemaFactory.createForClass(CustomerDetails);
