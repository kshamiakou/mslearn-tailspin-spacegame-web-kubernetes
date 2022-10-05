FROM node:16 AS ts-builder
WORKDIR /app
EXPOSE 80

COPY . .
RUN ls -l
RUN npm install
RUN npm run tsc

FROM ts-builder AS ts-prod
WORKDIR /app
COPY --from=ts-builder ./app/dist ./dist
COPY package* ./
RUN npm install

CMD [ "npm", "start" ]
