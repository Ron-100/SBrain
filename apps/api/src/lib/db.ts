import { prisma as dbPrisma, PrismaClient } from '@repo/db/client'
import logger from '../config/logger.config';

// ============================================
// 1. TYPE DECLARATIONS
// ============================================
declare global {
  var prisma: PrismaClient | undefined
}

// ============================================
// 2. LOGGING SETUP
// ============================================
function setupPrismaLogging(client: PrismaClient): void {
  (client as any).$on('query', (e: any) => {
    logger.debug('Database query:', {
      query: e.query,
      params: e.params,
      duration: `${e.duration}ms`,
    });
  });

  (client as any).$on('error', (e: any) => {
    logger.error('Database error:', {
      error: e.message,
      target: e.target,
    });
  });

  (client as any).$on('info', (e: any) => {
    logger.info('Database info:', {
      message: e.message
    });
  });

  (client as any).$on('warn', (e: any) => {
    logger.warn('Database warning:', {
      message: e.message
    });
  });
}

// ============================================
// 3. SINGLETON INSTANCE
// ============================================
const prisma: PrismaClient = globalThis.prisma ?? dbPrisma;

// Setup logging
setupPrismaLogging(prisma);

// Cache in development
if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma;
}

// ============================================
// 4. EXPORT
// ============================================
export default prisma;