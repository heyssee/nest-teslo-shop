import { join } from 'path';

import { BadRequestException, Injectable } from '@nestjs/common';
import { existsSync } from 'fs';

@Injectable()
export class FilesService {


  getStatiProductImage(imageName: string) {
    console.log('servce')
    const path = join(__dirname, '../../static/products', imageName)

    if (!existsSync) {
      throw new BadRequestException(`No product found with image ${imageName}`)
    }

    return path;
  }
}
