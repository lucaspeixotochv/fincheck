import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignupDto {
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
