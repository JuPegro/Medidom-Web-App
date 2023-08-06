# BUILD: docker build -t medi-dom-web-img .
# RUN: docker run -p 7010:7010 -d --name medi-dom-web medi-dom-web-img
# BASH: docker exec -it medi-dom-web bash

FROM node:lts
WORKDIR /opt/app

## Run app
COPY . .
EXPOSE 3000
RUN npm install
RUN npm run build
CMD ["npm", "run", "start"]