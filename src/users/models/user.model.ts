import {
  Column,
  Model,
  Table,
  PrimaryKey,
  DataType,
  Default,
  NotEmpty,
} from 'sequelize-typescript';

@Table
export class User extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @NotEmpty
  @Column
  name: string;

  @NotEmpty
  @Column({
    unique: true,
  })
  email: string;

  @NotEmpty
  @Column
  password: string;
}
