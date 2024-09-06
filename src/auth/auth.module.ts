import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { UserSchema } from './user.schema'; // Verifique se esse schema está correto
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from '../users/services/user.service'; // Certifique-se de que o caminho está correto

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '1h' },
        }),
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    ],
    providers: [AuthService, JwtStrategy, LocalStrategy, UserService], // Adicione o UserService aqui
    controllers: [AuthController],
    exports: [AuthService],
})
export class AuthModule { }