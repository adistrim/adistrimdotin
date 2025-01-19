import 'dotenv/config';

export default {
    port: process.env.PORT || 3000,
    dev_origin: process.env.DEV_FRONTEND_URL,
    prod_origin: process.env.PROD_FRONTEND_URL
}

