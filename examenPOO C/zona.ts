import { area_atraccion } from "./area_atraccion";
export class zona extends area_atraccion{
    private _lista_zonas: string[] = [];
    public get lista_zonas(): string[] {
        return this._lista_zonas;
    }
    public set lista_zonas(value: string[]) {
        this._lista_zonas = value;
    }

    private _lista_alimentos: string[] = [];
    public get lista_alimentos(): string[] {
        return this._lista_alimentos;
    }
    public set lista_alimentos(value: string[]) {
        this._lista_alimentos = value;
    }

    private _lista_bebidas: string[] = [];
    public get lista_bebidas(): string[] {
        return this._lista_bebidas;
    }
    public set lista_bebidas(value: string[]) {
        this._lista_bebidas = value;
    }

    constructor(){
        super()
        this.lista_alimentos.push("Palomitas de maiz","Hotdog", "Algodon de azucar");
        this._lista_bebidas.push("Soda","Te helado","Agua");

    }
}