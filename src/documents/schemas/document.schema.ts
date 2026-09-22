import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document as MongooseDocument, Types } from 'mongoose';
import { Site } from '../../sites/schemas/site.schema';

export type SearchDocumentType = DocumentEntity & MongooseDocument;

@Schema({ timestamps: true })
export class DocumentEntity {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  url: string;

  @Prop()
  content: string;

  // Relación One-to-Many / HasMany: Referencia al ID del Sitio dueño
  @Prop({ type: Types.ObjectId, ref: Site.name, required: true })
  site: Types.ObjectId;
}

export const DocumentSchema = SchemaFactory.createForClass(DocumentEntity);