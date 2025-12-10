import { Controller, Get } from "@nestjs/common";
import { AppService } from "./service";

@Controller('users')
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getUsers() {
        return this.appService.getUser()
    }
}