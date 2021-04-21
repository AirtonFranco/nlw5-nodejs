import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid} from "uuid"

@Entity("users")
class User {

    @PrimaryColumn() //gerado pelo uuid
    id: string;

    @Column()
    email: string;

    @CreateDateColumn() //gerado automaticamente
    created_at: Date;

    constructor() {
        //se o id não vier preenchido, preencher com uuid
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { User }