import { IsInt, IsPositive, IsString, MinLength } from "class-validator";

export class CreatePagoDto {

    @IsInt()
    @IsPositive()
    prestamoId:number

    @IsInt()
    @IsPositive()
    pago:number


}
