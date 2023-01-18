# FROM nginx:1.17.1-alpine
# COPY /dist/angular-ecommerce /usr/share/nginx/html
# EXPOSE 4200



FROM node:18.12.1-alpine 
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4200 49153
CMD npm run start