import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from "@shared/schema";
import * as crmSchema from "@shared/crm-schema";

// Use PostgreSQL with connection string if available
let pool: Pool | null = null;
let db: any = null;

// Async function to initialize database connection
export async function initializeDatabase() {
  // Only attempt database connection if DATABASE_URL is explicitly provided
  // This ensures clean fallback to in-memory storage in Replit environment
  if (process.env.DATABASE_URL) {
    try {
      console.log("DATABASE_URL found, attempting PostgreSQL connection...");
      pool = new Pool({
        connectionString: process.env.DATABASE_URL,
      });
      const tempDb = drizzle({ client: pool, schema: { ...schema, ...crmSchema } });
      
      // Test if tables exist by attempting a simple query
      try {
        await tempDb.select().from(schema.users).limit(1);
        db = tempDb;
        console.log("PostgreSQL database connection established and tables verified");
      } catch (tableError: any) {
        console.log("Database tables not found or not accessible:", tableError.message);
        console.log("Falling back to in-memory storage");
        if (pool) {
          await pool.end();
        }
        pool = null;
        db = null;
      }
    } catch (error) {
      console.log("Failed to connect to PostgreSQL, falling back to in-memory storage:", error);
      pool = null;
      db = null;
    }
  } else {
    console.log("DATABASE_URL not found, using in-memory storage");
  }
}

export { pool, db };
