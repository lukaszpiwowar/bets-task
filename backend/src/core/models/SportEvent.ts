
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class SportEvent {
    @PrimaryGeneratedColumn()
    event_id: number;

    @Column('text', { nullable: false, name: 'event_name'})
    eventName: string;

    @Column('float', { nullable: false })
    odds: Number;
};
