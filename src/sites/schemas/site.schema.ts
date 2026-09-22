import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document as MongooseDocument } from 'mongoose';

export type SiteDocument = Site & MongooseDocument;

@Schema({ timestamps: true })
export class Site {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  url: string;

  @Prop({ required: true, default: 2 })
  depth: number;

  @Prop({ required: true })
  frequency: string;
}

export const SiteSchema = SchemaFactory.createForClass(Site);