import { Expose, Transform } from 'class-transformer';
import { IsDate, IsDefined, IsNumber, IsString, Matches} from 'class-validator';

export class Productos {
    @Expose({ name: "name"})
    @IsString({ message: () => { throw { status: 400, message: "name must be a string type", reference: "https://http.cat/400"}}})
    @IsDefined({ message: () => { throw { status: 400, message: "name param is required"}}})
    nombre: string = '';

    @Expose({ name: "mail"})
    @IsString({ message: () => { throw { status: 400, message: "name must be a string type", reference: "https://http.cat/400"}}})
    @IsDefined({ message: () => { throw { status: 400, message: "name param is required"}}})
    email: string = '';

    @Expose({ name: "status"})
    @IsString({ message: () => { throw { status: 400, message: "name must be a string type", reference: "https://http.cat/400"}}})
    @IsDefined({ message: () => { throw { status: 400, message: "name param is required"}}})
    estado: string = '';

    @Expose({ name: "photo"})
    @IsString({ message: () => { throw { status: 400, message: "name must be a string type", reference: "https://http.cat/400"}}})
    @IsDefined({ message: () => { throw { status: 400, message: "name param is required"}}})
    foto: string = '';

    @Expose({ name: "password"})
    @IsString({ message: () => { throw { status: 400, message: "name must be a string type", reference: "https://http.cat/400"}}})
    @IsDefined({ message: () => { throw { status: 400, message: "name param is required"}}})
    password: string = '';

    constructor(data: Partial<Productos>) {
        Object.assign(this, data);
    }
}
