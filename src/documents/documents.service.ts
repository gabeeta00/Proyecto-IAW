import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DocumentEntity, SearchDocumentType } from './schemas/document.schema';
import { CreateDocumentDto } from './dto/create-document.dto';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectModel(DocumentEntity.name) private documentModel: Model<SearchDocumentType>,
  ) {}

  async create(createDocumentDto: CreateDocumentDto): Promise<DocumentEntity> {
    const newDoc = new this.documentModel({
      title: createDocumentDto.title,
      url: createDocumentDto.url,
      content: createDocumentDto.content,
      site: createDocumentDto.siteId,
    });
    return newDoc.save();
  }

  async findAll(): Promise<DocumentEntity[]> {
    return this.documentModel.find().populate('site').exec();
  }

  // Nuevo método para obtener documentos por el ID del Sitio
  async findBySite(siteId: string): Promise<DocumentEntity[]> {
    return this.documentModel.find({ site: siteId }).populate('site').exec();
  }
}