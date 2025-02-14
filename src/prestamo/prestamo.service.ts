import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
import { Prestamo } from './entities/prestamo.entity';
import { Pago } from 'src/pago/entities/pago.entity';

@Injectable()
export class PrestamoService {
  private prestamos:Prestamo[] = []
  private pagos:Pago[] = []

  create(clienteId: number, monto: number, tasaInteres: number, plazoMeses: number) {
    const prestamo = new Prestamo(this.prestamos.length + 1, clienteId, monto, tasaInteres, plazoMeses)
    this.prestamos.push(prestamo)

    return prestamo
  }

  findAll():Prestamo[] {
    return this.prestamos
  }

  realizarPago(prestamoId:number, pago:number): Pago  {

    const prestamo = this.prestamos.find(p => p.id === prestamoId )

    if(!prestamo)
      throw new BadRequestException(`Prestamo con id: ${prestamoId} no existe`)


    prestamo.saldoPendiente -= pago

    const pago1 = new Pago(this.pagos.length + 1, prestamoId,pago, new Date())
    this.pagos.push(pago1)

    return pago1
  }


  findOne(id: number) {
    return `This action returns a #${id} prestamo`;
  }

  update(id: number, updatePrestamoDto: UpdatePrestamoDto) {
    return `This action updates a #${id} prestamo`;
  }

  remove(id: number) {
    return `This action removes a #${id} prestamo`;
  }
}
