import { PrismaClient } from "@prisma/client";

const GlobalPrisma = global as unknown as { prisma: PrismaClient };
// This is a hack to make PrismaClient available globally
// so that we can access it in the seed script
// This is not recommended for production use
// This is only for the purpose of this example
export const prisma = GlobalPrisma.prisma || new PrismaClient({
    log: ['query'],
    })
if (process.env.NODE_ENV !== 'production') {
    GlobalPrisma.prisma = prisma
}