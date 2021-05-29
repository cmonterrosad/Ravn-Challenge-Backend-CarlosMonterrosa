import { BaseEntity, BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class authors extends BaseEntity{

    @PrimaryGeneratedColumn('uuid')
    id:String;

    @Column()
    name:String

    @Column({type:'timestamp',name:'date_of_birth'})
    dateOfBirth:Date

}