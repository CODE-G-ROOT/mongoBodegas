import { Expose, Transform } from 'class-transformer';
import { IsDate, IsDefined, IsNumber, IsString, Matches} from 'class-validator';

export class Bodegas {
    @Expose({ name: "id"})
    @IsNumber({}, { message: () => { throw { status: 400, message: "id param must be a Number type", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () =>  { throw { status: 400, message: "id the param is required", reference: "https://http.cat/400"}}})
    id_bodega: number = 0;

    @Expose({ name: "name"})
    @IsString({ message: () => { throw { status: 400, message: "name must be a string type", reference: "https://http.cat/400"}}})
    @IsDefined({ message: () => { throw { status: 400, message: "name param is required"}}})
    nombre: string = '';

    @Expose({ name: "status"})
    @IsString({ message: () => { throw { status: 400, message: "status must be a string type", reference: "https://http.cat/400"}}})
    @IsDefined({ message: () => { throw { status: 400, message: "status param is required", reference:"https://http.cat/400"}}})
    estado: string = '';

    @Expose({ name: "reference"})
    @IsNumber({}, { message: () => { throw { status: 400, message: "reference must be a number type", reference: "https://http.cat/400"}}})
    @IsDefined({ message: () => { throw { status: 400, message: "reference param is required", reference: "https://http.cat/400"}}})
    responsable: number = 0;

    constructor(data: Partial<Bodegas>) {
        Object.assign(this, data);
    }
}
