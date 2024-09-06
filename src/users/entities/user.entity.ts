import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Roles } from '../enums/roles.enum';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column({
        type: 'enum',
        enum: Roles,
        array: true,
        default: [Roles.USER],
    })
    roles: Roles[];
}