import { BadRequestException, Controller, Post, Get, UploadedFile, UseInterceptors, Param, Res } from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Response } from 'express';
import { fileFilter, fileNamer } from './helpers';
import { ConfigService } from '@nestjs/config';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService,
    private readonly configService: ConfigService) { }

  @Get('product/:imageName')
  findProductImage(
    @Param('imageName') imageName: string,
    @Res() res: Response) {

    const path = this.filesService.getStatiProductImage(imageName);

    res.sendFile(path);

  }


  @Post('product')
  @UseInterceptors(FileInterceptor('file', {//interceptan las solicitudes, y también pueden interceptar y mutar y lo que sea las respuestas.
    fileFilter: fileFilter,
    // limits:{fileSize:1000} // ejemplo de restriccion 
    storage: diskStorage({
      destination: './static/products',
      filename: fileNamer
    })
  }))
  uploadProductFile(@UploadedFile() file: Express.Multer.File) {

    if (!file) {
      throw new BadRequestException('Make sure that the file is an image');
    }

    const secureUrl = `${this.configService.get('HOST_API')}/files/product/${file.filename}`;

    return {secureUrl};
  }

}
