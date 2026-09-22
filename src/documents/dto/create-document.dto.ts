import { IsString, IsUrl, IsNotEmpty, IsMongoId } from 'class-validator';

export class CreateDocumentDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsUrl()
  @IsNotEmpty()
  url: string;

  @IsString()
  content: string;

  @IsMongoId()
  siteId: string;
}