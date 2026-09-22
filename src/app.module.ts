import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SitesModule } from './sites/sites.module';
import { DocumentsModule } from './documents/documents.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Gabriela:SaritaHerrera@m0.xmkbmjd.mongodb.net/search-service?appName=M0'),
    SitesModule,
    DocumentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}