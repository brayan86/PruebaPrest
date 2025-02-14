export class Prestamo {
    public saldoPendiente: number;
    constructor(
        public id:number,
        public clienteId:number,
        public monto:number,
        public tasaInteres:number,
        public plazoMeses:number,
    ){this.saldoPendiente = monto;}
}
