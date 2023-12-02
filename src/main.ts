import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {config} from './config';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
    await app.listen(config.port);
}

bootstrap();
