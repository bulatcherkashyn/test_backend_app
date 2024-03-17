import {
  Column,
  Model,
  Table,
  PrimaryKey,
  DataType,
  Default,
} from 'sequelize-typescript';

@Table
export class User extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @Column
  name: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column
  password: string;
}
