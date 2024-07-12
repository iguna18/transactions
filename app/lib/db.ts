import { PrismaClient } from '@prisma/client';

//to prevent the prismaclient initializing on every reload
//when not in production (nextjs has hot reload)
declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = db;
}