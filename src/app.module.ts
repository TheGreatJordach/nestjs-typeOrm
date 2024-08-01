import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ItemsModule } from "./app/items/items.module";
import { DatabaseDevModule } from "./app/database-dev/database-dev.module";
import { DatabaseProdModule } from "./app/database-prod/database-prod.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ItemsModule,
    DatabaseDevModule,
    DatabaseProdModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
