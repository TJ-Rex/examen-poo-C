import { parque } from "./parque_atraccion";
export class area_atraccion extends parque{
    private _aperitivos: string[] = [];
    public get aperitivos(): string[] {
        return this._aperitivos;
    }
    public set aperitivos(value: string[]) {
        this._aperitivos = value;
    }

    private _disponibilidad_horaria: string;
    public get disponibilidad_horaria(): string {
        return this._disponibilidad_horaria;
    }
    public set disponibilidad_horaria(value: string) {
        this._disponibilidad_horaria = value;
    }
    
    private _accesorios_gratuitos: string[] = [];
    public get accesorios_gratuitos(): string[] {
        return this._accesorios_gratuitos;
    }
    public set accesorios_gratuitos(value: string[]) {
        this._accesorios_gratuitos = value;
    }

    constructor(){
        super()
        this._aperitivos.push("Chocolates", "Chicles", "Paletas");
        this._accesorios_gratuitos = ["Pulsera","Collar"];
        this._disponibilidad_horaria = "De 2 pm a 5 pm ";

    }

}