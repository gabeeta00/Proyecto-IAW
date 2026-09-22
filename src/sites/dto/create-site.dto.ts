import { IsString, IsUrl, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateSiteDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsUrl()
  @IsNotEmpty()
  url: string;

  @IsNumber()
  depth: number;

  @IsString()
  frequency: string;
}