import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env.development",
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (serviceConfig: ConfigService) => ({
        type: "mysql",
        host: serviceConfig.getOrThrow<string>("MYSQL_HOST"),
        port: serviceConfig.getOrThrow<number>("MYSQL_PORT"),
        username: serviceConfig.getOrThrow<string>("MYSQL_USERNAME"),
        password: serviceConfig.getOrThrow<string>("MYSQL_ROOT_PASSWORD"),
        database: serviceConfig.getOrThrow<string>("MYSQL_DATABASE"),
        autoLoadEntities: true,
        synchronize: serviceConfig.getOrThrow<boolean>("MYSQL_SYNCHRONIZE"),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class DatabaseDevModule {}
