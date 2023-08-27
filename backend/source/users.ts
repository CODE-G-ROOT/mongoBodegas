import { Expose, Transform } from 'class-transformer';
import { IsDate, IsDefined, IsNumber, IsString, Matches} from 'class-validator';

export class Users {
    @Expose({ name: "name"})
    @IsString({ message: () => { throw { status: 400, message: "name must be a string type", reference: "https://http.cat/400"}}})
    @IsDefined({ message: () => { throw { status: 400, message: "name param is required"}}})
    nombre: string = '';

    @Expose({ name: "mail"})
    @IsString({ message: () => { throw { status: 400, message: "mail must be a string type", reference: "https://http.cat/400"}}})
    @IsDefined({ message: () => { throw { status: 400, message: "mail param is required"}}})
    email: string = '';

    @Expose({ name: "status"})
    @IsString({ message: () => { throw { status: 400, message: "status must be a string type", reference: "https://http.cat/400"}}})
    @IsDefined({ message: () => { throw { status: 400, message: "status param is required"}}})
    estado: string = '';

    @Expose({ name: "photo"})
    @IsString({ message: () => { throw { status: 400, message: "photo must be a string type", reference: "https://http.cat/400"}}})
    @IsDefined({ message: () => { throw { status: 400, message: "photo param is required"}}})
    foto: string = '';

    @Expose({ name: "password"})
    @IsString({ message: () => { throw { status: 400, message: "password must be a string type", reference: "https://http.cat/400"}}})
    @IsDefined({ message: () => { throw { status: 400, message: "password param is required"}}})
    password: string = '';

    constructor(data: Partial<Users>) {
        Object.assign(this, data);
    }
}
