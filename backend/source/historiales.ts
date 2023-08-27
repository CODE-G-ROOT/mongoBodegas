import { Expose, Transform } from 'class-transformer';
import { IsDate, IsDefined, IsNumber, IsString, Matches} from 'class-validator';

export class Historiales {
    @Expose({ name: "id"})
    @IsNumber({}, { message: () => { throw { status: 400, message: "id param must be a Number type", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () =>  { throw { status: 400, message: "id the param is required", reference: "https://http.cat/400"}}})
    id_historiales: number = 0;

    @Expose({ name: "amount"})
    @IsNumber({}, { message: () => { throw { status: 400, message: "amount must be a string type", reference: "https://http.cat/400"}}})
    @IsDefined({ message: () => { throw { status: 400, message: "amount param is required"}}})
    cantidad: number = 0;

    constructor(data: Partial<Historiales>) {
        Object.assign(this, data);
    }
}
