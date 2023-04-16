import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';


export class PaginationDto {

    @IsOptional()
    @IsPositive()
    @Type( () => Number ) // es igual a enableImplicitConversions: true
    limit?: number;
    
    @IsOptional()
    @Min(0)
    @Type( () => Number ) // es igual a enableImplicitConversions: true
    offset?: number;

}