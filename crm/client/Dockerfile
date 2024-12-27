# Build Stage
FROM node:20-bullseye AS build
WORKDIR /app
COPY . .
RUN npm cache clean --force && rm -rf /root/.npm
RUN rm -rf node_modules package-lock.json
RUN npm install ajv@^6.12.6 ajv-keywords@^3.5.2 --save
RUN npm install --registry=https://registry.npmjs.org/ --legacy-peer-deps
RUN npm run build

# Serve Stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
