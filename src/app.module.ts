import {Module} from '@nestjs/common';
import {config} from './config';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserModule} from '@modules/user/user.module';
import {AuthModule} from '@modules/auth/auth.module';
import {WinstonModule} from "nest-winston";
import {
    format,
    transports,
} from "winston";
const { combine, timestamp, label, printf } = format;

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot(config.database),
        WinstonModule.forRoot({
            format: combine(
                format.colorize(),
                label({ label: 'Application' }),
                timestamp(),
                printf((info) => {
                    return `[${info.level}][${info.label}][${info.context}]: ${info.message}`;
                })
            ),
            transports: [new transports.Console()],
        }),
        UserModule,
        AuthModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
