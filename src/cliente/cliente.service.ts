import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClienteService {

  private clientes:Cliente[] = []

  create(createClienteDto: CreateClienteDto) {
    const cliente = new Cliente(this.clientes.length +1, createClienteDto.nombre)
    this.clientes.push(cliente)

    return cliente

  }

  findAll():Cliente[] {
    return this.clientes
  }

  findOne(id: number) {
    return `This action returns a #${id} cliente`;
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }
}
