import { PrismaClient as PrismaClientClassRaw } from "@/generated/prisma/client"
import type { PrismaClient as PrismaClientType } from "@/generated/prisma/client"

const PrismaClientClass = PrismaClientClassRaw as unknown as {
  new (): PrismaClientType
}

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClientType
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClientClass()

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
