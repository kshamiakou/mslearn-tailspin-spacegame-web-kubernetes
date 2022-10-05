FROM node:16 AS ts-builder
WORKDIR /app
EXPOSE 80

COPY . .
RUN npm install
RUN npm install typescript
RUN ./node_modules/typescript/bin/tsc -p ./tsconfig.json

FROM ts-builder AS ts-prod
WORKDIR /app
COPY --from=ts-builder ./app/dist ./dist
COPY package* ./
RUN npm install --production

CMD [ "npm", "start" ]
