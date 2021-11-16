
# stage1 as builder
FROM node:16.3.0-alpine as builder

# copy the package.json to install dependencies
COPY package.json package-lock.json ./

WORKDIR /opt/app/
# Install the dependencies and make the folder
COPY ./node_modules ./opt/app/

COPY . .

ARG http_proxy


ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}

RUN echo ${NODE_ENV}

ARG NEXT_PUBLIC_APP_BASE_URL
ENV NEXT_PUBLIC_APP_BASE_URL ${NEXT_PUBLIC_APP_BASE_URL}

RUN echo ${NEXT_PUBLIC_APP_BASE_URL}

ARG NEXT_PUBLIC_PASSPORT_TOKEN_URL
ENV NEXT_PUBLIC_PASSPORT_TOKEN_URL ${NEXT_PUBLIC_PASSPORT_TOKEN_URL}

ARG NEXT_PUBLIC_CLIENT_ID
ENV NEXT_PUBLIC_SECRET ${NEXT_PUBLIC_SECRET}

ARG NEXT_PUBLIC_GRANT_TYPE
ENV NEXT_PUBLIC_GRANT_TYPE ${NEXT_PUBLIC_GRANT_TYPE}

ARG NEXT_PUBLIC_REDIRECT_URI
ENV NEXT_PUBLIC_REDIRECT_URI ${NEXT_PUBLIC_REDIRECT_URI}

ARG NEXT_PUBLIC_PASSPORT_AUTHORIZE_URL
ENV NEXT_PUBLIC_PASSPORT_AUTHORIZE_URL ${NEXT_PUBLIC_PASSPORT_AUTHORIZE_URL}

ARG NEXT_PUBLIC_RESPONSE_TYPE
ENV NEXT_PUBLIC_RESPONSE_TYPE ${NEXT_PUBLIC_RESPONSE_TYPE}

ARG NEXT_PUBLIC_SCOPE
ENV NEXT_PUBLIC_SCOPE ${NEXT_PUBLIC_SCOPE}

ARG NEXT_PUBLIC_PASSPORT_PROFILE_URL
ENV NEXT_PUBLIC_PASSPORT_PROFILE_URL ${NEXT_PUBLIC_PASSPORT_PROFILE_URL}

ARG NEXT_PUBLIC_CURRENT_API_VERSION
ENV NEXT_PUBLIC_CURRENT_API_VERSION ${NEXT_PUBLIC_CURRENT_API_VERSION}

ARG NEXT_PUBLIC_API_BASE_URL_ALTERNATIVE
ENV NEXT_PUBLIC_API_BASE_URL_ALTERNATIVE ${NEXT_PUBLIC_API_BASE_URL_ALTERNATIVE}

ARG NEXT_PUBLIC_API_BASE_URL
ENV NEXT_PUBLIC_API_BASE_URL ${NEXT_PUBLIC_API_BASE_URL}

# Build the project and copy the files
RUN npm run build


FROM nginx:alpine

#!/bin/sh

COPY ./public/.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /opt/app/out /usr/share/nginx/html

EXPOSE 3000 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]