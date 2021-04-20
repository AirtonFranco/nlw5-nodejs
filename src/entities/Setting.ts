import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid} from "uuid"

@Entity("settings")
class Setting {

    @PrimaryColumn() //gerado pelo uuid
    id: string;

    @Column()
    username: string;

    @Column()
    chat: boolean;

    @UpdateDateColumn() //gerado automaticamente
    updated_at: Date;

    @CreateDateColumn() //gerado automaticamente
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { Setting }