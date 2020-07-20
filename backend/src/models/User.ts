import { Model, Table, Column, DataType } from "sequelize-typescript";
import { ObjectType, Field, Int } from "type-graphql";

@Table
@ObjectType()
export class User extends Model<User> {
  @Field(() => Int)
  id: number;

  @Field()
  @Column
  email: string;

  @Column
  password: string;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  tokenVersion: number;
}
