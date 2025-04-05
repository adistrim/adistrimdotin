FROM node:23-alpine

WORKDIR /app

COPY package.json package-lock.json* pnpm-lock.yaml* ./

RUN if [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then npm install -g pnpm && pnpm install; \
    fi

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
