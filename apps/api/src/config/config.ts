import { config } from 'dotenv';
import path from 'path';


config({ path: path.resolve(__dirname, '../../../..', '.env') });


const env = {
    PORT: Number(process.env.BACKEND_PORT),
    JWT_SECRET: process.env.BACKEND_JWT_SECRET,
    API_DOC_VISIBLE: process.env.BACKEND_API_DOC_VISIBLE,
    NODE_ENV: (process.env.BACKEND_NODE_ENV),
} as const;


export default env;
