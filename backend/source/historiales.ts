import { Expose, Transform } from 'class-transformer';
import { IsDate, IsDefined, IsNumber, IsString, Matches} from 'class-validator';

export class Historiales {
    @Expose({ name: "id"})
    @IsNumber({}, { message: () => { throw { status: 400, message: "id param must be a Number type", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () =>  { throw { status: 400, message: "id the param is required", reference: "https://http.cat/400"}}})
    id_historiales: number = 0;

    @Expose({ name: "name"})
    @IsNumber({}, { message: () => { throw { status: 400, message: "name must be a string type", reference: "https://http.cat/400"}}})
    @IsDefined({ message: () => { throw { status: 400, message: "name param is required"}}})
    cantidad: number = 0;

    constructor(data: Partial<Historiales>) {
        Object.assign(this, data);
    }
}
