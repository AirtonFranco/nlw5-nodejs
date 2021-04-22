import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid} from "uuid"
import { User } from "./User";

@Entity("connections") //nome da tabela
class Connection {
    
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
    socket_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    //se nao existir id, entao criar o uuid
    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }

}

export { Connection }
