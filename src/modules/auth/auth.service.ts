import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
import { compare, hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersRepo: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async signin(signinDto: SigninDto) {
    const { email, password } = signinDto;

    const user = await this.usersRepo.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return new UnauthorizedException('Email ou senha incorretos');
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      return new UnauthorizedException('Email ou senha incorretos');
    }

    const accessToken = await this.generateAccessToken(user.id);

    return {
      accessToken,
    };
  }

  async signup(signupDto: SignupDto) {
    const { email } = signupDto;

    const emailTaken = await this.usersRepo.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
      },
    });

    if (emailTaken) throw new ConflictException('Email already taken');

    const hashedPassword = await hash(signupDto.password, 12);
    signupDto.password = hashedPassword;

    const user = await this.usersRepo.create({
      data: {
        ...signupDto,
        categories: {
          createMany: {
            data: [
              // Income
              { name: 'Salário', icon: 'salary', type: 'INCOME' },
              { name: 'Freelance', icon: 'freelance', type: 'INCOME' },
              { name: 'Outro', icon: 'other', type: 'INCOME' },
              // Expense
              { name: 'Casa', icon: 'home', type: 'EXPENSE' },
              { name: 'Alimentação', icon: 'food', type: 'EXPENSE' },
              { name: 'Educação', icon: 'education', type: 'EXPENSE' },
              { name: 'Lazer', icon: 'fun', type: 'EXPENSE' },
              { name: 'Mercado', icon: 'grocery', type: 'EXPENSE' },
              { name: 'Roupas', icon: 'clothes', type: 'EXPENSE' },
              { name: 'Transporte', icon: 'transport', type: 'EXPENSE' },
              { name: 'Viagem', icon: 'travel', type: 'EXPENSE' },
              { name: 'Outro', icon: 'other', type: 'EXPENSE' },
            ],
          },
        },
      },
    });

    if (!user.id) {
      throw new ConflictException('Error creating user');
      return;
    }

    const accessToken = await this.generateAccessToken(user.id);

    return {
      accessToken,
    };
  }

  private async generateAccessToken(userId: string) {
    const payload = { sub: userId };
    const access_token = await this.jwtService.signAsync(payload);
    return access_token;
  }
}
