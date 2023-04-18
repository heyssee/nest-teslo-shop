import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity({ name: 'product_images' })// cambia el nombre de la tabla para añadir la 's' al final.
export class ProductImage {

    @PrimaryGeneratedColumn()//Crea id incrementales por defecto
    id: number;


    @Column('text')
    url: string;


    @ManyToOne(
        () => Product,
        product => product.images,
        { onDelete: 'CASCADE' }
    )
    product: Product;
}