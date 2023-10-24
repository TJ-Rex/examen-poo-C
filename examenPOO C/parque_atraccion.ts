export interface IImprimir{
    imprimir_datos():void;
}
export class parque{

    private _atraccion: string[] = [];
    public get atraccion(): string[] {
        return this._atraccion;
    }
    public set atraccion(value: string[]) {
        this._atraccion = value;
    }
    
    constructor(){
        this._atraccion.push("Montaña rusa", "Rueda de la fortuna", "Carrusel", "Laberinto encantado");

    }

    
    
}