import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid} from "uuid"
import { User } from "./User";

@Entity("messages") //nome da tabela
class Message {
    
    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;

    @JoinColumn({name: "user_id"})
    @ManyToOne(() => User) //Informa que esse item se relaciona com varias mensagens
    user: User; //realacionamento

    @Column() //relacionamento
    user_id: string;

    @Column()
    text: string;

    @CreateDateColumn()
    created_at: Date;

    //se nao existir id, entao criar o uuid
    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }

}

export { Message }
