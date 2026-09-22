import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dto/create-document.dto';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Post()
  create(@Body() createDocumentDto: CreateDocumentDto) {
    return this.documentsService.create(createDocumentDto);
  }

  @Get()
  findAll() {
    return this.documentsService.findAll();
  }

  // Nuevo endpoint GET /documents/site/:siteId
  @Get('site/:siteId')
  findBySite(@Param('siteId') siteId: string) {
    return this.documentsService.findBySite(siteId);
  }
}