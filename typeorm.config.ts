import { TypeOrmModule } from '@nestjs/typeorm';

const typeOrmConfig = TypeOrmModule.forRoot({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '1234',
  database: 'vegan_begun',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
});

export default typeOrmConfig;
