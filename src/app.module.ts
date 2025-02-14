import { Module } from '@nestjs/common';

import { ClienteModule } from './cliente/cliente.module';
import { PrestamoModule } from './prestamo/prestamo.module';
import { PagoModule } from './pago/pago.module';

@Module({
  imports: [ClienteModule, PrestamoModule, PagoModule],

})
export class AppModule {}
