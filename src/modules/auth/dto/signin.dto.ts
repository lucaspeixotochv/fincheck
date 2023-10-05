import { IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class SigninDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password;
}
