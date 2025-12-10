import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

@Injectable()
export class AppService {
    constructor(private prisma: PrismaService) {}

    createUser(login: string, password: string, firstName: string, secondName: string, thirdName: string, email: string, phone: string) {
        return this.prisma.user.create({
            data: {
                login,
                password,
                firstName,
                secondName,
                thirdName,
                email,
                phone
            }
        })
    }

    updateUser(id: number, login: string, password: string, firstName: string, secondName: string, thirdName: string, email: string, phone: string) {
        return this.prisma.user.update({
            where: { id },
            data: {
                login,
                password,
                firstName,
                secondName,
                thirdName,
                email,
                phone
            }
        })
    }

    getRent() {
        return this.prisma.rent.findMany();
    }
}