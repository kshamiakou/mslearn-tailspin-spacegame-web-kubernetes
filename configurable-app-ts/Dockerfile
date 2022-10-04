FROM node:16 AS ts-builder
WORKDIR /app
COPY . .
RUN npm install
RUN tsc

FROM node:16 AS ts-prod
WORKDIR /app
COPY --from=ts-builder ./app/dist ./dist
COPY package* ./
RUN npm install --production

CMD [ "npm", "start" ]
