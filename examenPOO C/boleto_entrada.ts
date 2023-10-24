import { area_atraccion } from "./area_atraccion";
import { zona } from "./zona";
import { montaña_rusa } from "./montaña_rusa";
import { carrusel } from "./carrusel";
import { rueda_fortuna } from "./rueda_fortuna";
import { laberinto_encantado } from "./laberinto_encantado";
import { parque } from "./parque_atraccion";
import { IImprimir } from "./parque_atraccion";
export class boleto_entrada extends area_atraccion implements IImprimir{
    private _nombre_visitante: string;
    public get nombre_visitante(): string {
        return this._nombre_visitante;
    }
    public set nombre_visitante(value: string) {
        this._nombre_visitante = value;
    }
    private _zona_atraccion: zona[] = [];
    public get zona_atraccion(): zona[] {
        return this._zona_atraccion;
    }
    public set zona_atraccion(value: zona[]) {
        this._zona_atraccion = value;
    }

    constructor(nombre:string){
        super();
       
        this._zona_atraccion.push(Zona1, Zona2,Zona3)
        this._nombre_visitante = nombre;
    }

    escoger_atraccion(atraccion_elegida:number){
        console.log(`La atracción elegida fue: ${parque1.atraccion[atraccion_elegida]}`)
        
    }
    escoger_zona(zona_elegida:number){
        console.log(`La zona elegida fue: ${this._zona_atraccion[zona_elegida]}`)
        
    }
    escoger_alimentos(alimentos_elegidos:number){
        console.log(`El alimento elegido fue: ${Zona1.lista_alimentos[alimentos_elegidos]}`)
          
    }
    escoger_bebidas(bebidas_elegidas:number){
        console.log(`La bebida que eligio fue: ${Zona1.lista_bebidas[bebidas_elegidas]}`)
       
    }
    escoger_accesorio(accesorios_elegidos:number){
        console.log(`El accesorio que eligio fue: ${Zona1.accesorios_gratuitos[accesorios_elegidos]}`)
       
    }

    imprimir_datos(): void {
        console.log(`El nombre del visitante es ${this._nombre_visitante}\n`);
        console.log(`${this.escoger_atraccion(0)}`);
        console.log(`${this.escoger_zona(0)}`)
        console.log(`${this.escoger_alimentos(0)} y ${this.escoger_bebidas(0)}`)
        console.log(`${this.escoger_accesorio(0)}`)
        console.log(`Los productos consumidos fueron${Zona1.lista_alimentos[0]}, ${Zona1.lista_bebidas[0]},${Zona1.accesorios_gratuitos[0]} `)
    }
}
const Zona1 = new zona;
const Zona2 = new zona;
const Zona3 = new zona;
const parque1 = new parque();
const area_atraccion1 = new area_atraccion();
const montaña_rusa1 = new montaña_rusa();
const rueda_fortuna1 = new rueda_fortuna();
const carrusel1= new carrusel();
const laberinto_encantado1 = new laberinto_encantado();


