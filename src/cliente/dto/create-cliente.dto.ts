import { IsEmail, IsOptional, IsString, length, MinLength } from "class-validator"


export class CreateClienteDto {

    @IsString()
    @MinLength(1)
    nombre:string

    @IsString()
    @MinLength(1)
    @IsOptional()
    apellido:string

    @IsString()
    @MinLength(1)
    @IsOptional()
    telefono:string

    @IsString()
    @MinLength(1)
    @IsEmail()
    @IsOptional()
    correo:string

    @IsString()
    @MinLength(1)
    @IsOptional()
    direccion:string

}
