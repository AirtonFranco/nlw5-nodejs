import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMessages1619016621983 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "messages",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "admin_id",
                        type: "uuid",
                        isNullable: true
                    },
                    {
                        name: "user_id",
                        type: "uuid",
                    },
                    {
                        name: "text",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
                //relacionamento de tabelas
                //chave estrangeira (chave que vem de fora)
                foreignKeys: [
                    {
                        name: "FKUser", //nome do relacionamento
                        referencedTableName: "users", //tabela no qual vai ser relacionar
                        referencedColumnNames: ["id"], //quais colunas irão relacionar
                        columnNames: ["user_id"], //qual coluna irei relacionar com a coluna acima
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("messages");
    }

}
