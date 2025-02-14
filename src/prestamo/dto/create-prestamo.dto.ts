import { IsEmpty, isEmpty, IsInt, IsOptional, IsPositive } from "class-validator"


export class CreatePrestamoDto {

    @IsInt()
    @IsPositive()
    clienteId:number
    @IsInt()
    @IsPositive()
    monto:number
    @IsInt()
    @IsPositive()
    tasaInteres:number
    @IsInt()
    @IsPositive()
    plazoMeses:number


    @IsOptional()
    saldoPendiente:number
}
