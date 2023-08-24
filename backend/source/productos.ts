import { Expose, Transform } from 'class-transformer';
import { IsDate, IsDefined, IsNumber, IsString, Matches} from 'class-validator';

export class Productos {
    @Expose({ name: "id"})
    @IsNumber({}, { message: () => { throw { status: 400, message: "id param must be a Number type", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () =>  { throw { status: 400, message: "id the param is required", reference: "https://http.cat/400"}}})
    id_productos: number = 0;

    @Expose({ name: "name"})
    @IsString({ message: () => { throw { status: 400, message: "name must be a string type", reference: "https://http.cat/400"}}})
    @IsDefined({ message: () => { throw { status: 400, message: "name param is required"}}})
    nombre: string = '';

    @Expose({ name: "description"})
    @IsString({ message: () => { throw { status: 400, message: "name must be a string type", reference: "https://http.cat/400"}}})
    @IsDefined({ message: () => { throw { status: 400, message: "name param is required"}}})
    descripcion: string = '';

    @Expose({ name: "status"})
    @IsString({ message: () => { throw { status: 400, message: "name must be a string type", reference: "https://http.cat/400"}}})
    @IsDefined({ message: () => { throw { status: 400, message: "name param is required"}}})
    estado: string = '';

    @Expose({ name: "description"})
    @IsString({ message: () => { throw { status: 400, message: "name must be a string type", reference: "https://http.cat/400"}}})
    @IsDefined({ message: () => { throw { status: 400, message: "name param is required"}}})
    description: string = '';

    constructor(data: Partial<Productos>) {
        Object.assign(this, data);
    }
}
