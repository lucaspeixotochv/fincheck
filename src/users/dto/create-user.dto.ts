import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password;
}
