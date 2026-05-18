import { drizzle } from 'drizzle-orm/pg';
import { Pool } from 'pg';
import { config } from '../config/index.js';

if (!config.databaseUrl) {
  console.error('Missing DATABASE_URL environment variable');
  process.exit(1);
}

const pool = new Pool({
  connectionString: config.databaseUrl,
  // Neon requires SSL but with self‑signed certs; this disables strict verification
  ssl: {
    rejectUnauthorized: false,
  },
});

export const db = drizzle(pool);