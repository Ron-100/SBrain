import { config } from 'dotenv';
import path from 'path';

// Load .env from workspace root (same as Vite's envDir)
config({ path: path.resolve(__dirname, '../../..', '.env') });

export const env = {
    database:{
        connectionString: (process.env.DATABASE_URL as string).trim(),
    },
    api: {
        port: (process.env.API_PORT as string).trim(),
        docVisible: (process.env.API_DOC_VISIBLE as string).trim(),
        jwt : (process.env.API_JWT_SECRET as string).trim(),
        nodeEnv: (process.env.API_NODE_ENV as string).trim(),
    },
    // web: {
    //     endpointUrl: (process.env.VITE_API_ENDPOINT_URL as string).trim(),
    // },
};