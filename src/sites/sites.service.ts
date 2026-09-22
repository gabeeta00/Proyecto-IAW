import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Site, SiteDocument } from './schemas/site.schema';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';

@Injectable()
export class SitesService {
  constructor(@InjectModel(Site.name) private siteModel: Model<SiteDocument>) {}

  async create(createSiteDto: CreateSiteDto): Promise<Site> {
    const newSite = new this.siteModel(createSiteDto);
    return newSite.save();
  }

  async findAll(): Promise<Site[]> {
    return this.siteModel.find().exec();
  }

  async findOne(id: string): Promise<Site> {
    const site = await this.siteModel.findById(id).exec();
    if (!site) throw new NotFoundException('Sitio no encontrado');
    return site;
  }

  async update(id: string, updateSiteDto: UpdateSiteDto): Promise<Site> {
    const updated = await this.siteModel.findByIdAndUpdate(id, updateSiteDto, { new: true }).exec();
    if (!updated) throw new NotFoundException('Sitio no encontrado');
    return updated;
  }

  async remove(id: string): Promise<Site> {
    const deleted = await this.siteModel.findByIdAndDelete(id).exec();
    if (!deleted) throw new NotFoundException('Sitio no encontrado');
    return deleted;
  }
}