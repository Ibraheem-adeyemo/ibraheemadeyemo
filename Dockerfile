# Install dependencies only when needed
FROM node:lts-alpine AS deps

WORKDIR /opt/app
COPY package.json package-lock.json ./
ARG HTTP_PROXY

ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}

ARG NEXTAUTH_URL
ENV NEXTAUTH_URL ${NEXTAUTH_URL}

ARG SECRET
ENV SECRET ${SECRET}

ARG NEXT_PUBLIC_PASSPORT_TOKEN_URL
ENV NEXT_PUBLIC_PASSPORT_TOKEN_URL ${NEXT_PUBLIC_PASSPORT_TOKEN_URL}

ARG NEXT_PUBLIC_CLIENT_ID
ENV NEXT_PUBLIC_CLIENT_ID ${NEXT_PUBLIC_CLIENT_ID}

ARG NEXT_PUBLIC_SECRET
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

ARG NEXT_PUBLIC_LOGIN_URL
ENV NEXT_PUBLIC_LOGIN_URL ${NEXT_PUBLIC_LOGIN_URL}

ARG NEXT_PUBLIC_CURRENT_API_VERSION
ENV NEXT_PUBLIC_CURRENT_API_VERSION ${NEXT_PUBLIC_CURRENT_API_VERSION}

ARG API_BASE_URL_ALTERNATIVE
ENV API_BASE_URL_ALTERNATIV ${API_BASE_URL_ALTERNATIVE}

ARG API_BASE_URL
ENV API_BASE_URL ${API_BASE_URL}

ARG COOKIE_PASSWORD
ENV COOKIE_PASSWORD ${COOKIE_PASSWORD}

RUN echo "envs HTTP_PROXY=$http_proxy, NODE_ENV=$NODE_ENV, NEXTAUTH_URL=$NEXTAUTH_URL, SECRET=$SECRET, NEXT_PUBLIC_PASSPORT_TOKEN_URL=$NEXT_PUBLIC_PASSPORT_TOKEN_URL, NEXT_PUBLIC_CLIENT_ID=$NEXT_PUBLIC_CLIENT_ID, NEXT_PUBLIC_SECRET=$NEXT_PUBLIC_SECRET, NEXT_PUBLIC_GRANT_TYPE=$NEXT_PUBLIC_GRANT_TYPE, NEXT_PUBLIC_REDIRECT_URI=$NEXT_PUBLIC_REDIRECT_URI, NEXT_PUBLIC_PASSPORT_AUTHORIZE_URL=$NEXT_PUBLIC_PASSPORT_AUTHORIZE_URL, NEXT_PUBLIC_RESPONSE_TYPE=$NEXT_PUBLIC_RESPONSE_TYPE, NEXT_PUBLIC_SCOPE=$NEXT_PUBLIC_SCOPE, NEXT_PUBLIC_PASSPORT_PROFILE_URL=$NEXT_PUBLIC_PASSPORT_PROFILE_URL, NEXT_PUBLIC_LOGIN_URL=$NEXT_PUBLIC_LOGIN_URL, NEXT_PUBLIC_CURRENT_API_VERSION=$NEXT_PUBLIC_CURRENT_API_VERSION, API_BASE_URL_ALTERNATIV=$API_BASE_URL_ALTERNATIV, API_BASE_URL=$API_BASE_URL, COOKIE_PASSWORD=$COOKIE_PASSWORD"

RUN npm config set proxy http://172.25.30.117:6060
RUN npm install --from-lockfile

# Rebuild the source code only when needed
# This is where because may be the case that you would try
# to build the app based on some `X_TAG` in my case (Git commit hash)
# but the code hasn't changed.

FROM node:lts-alpine AS builder


ARG HTTP_PROXY

ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}

ARG NEXTAUTH_URL
ENV NEXTAUTH_URL ${NEXTAUTH_URL}

ARG SECRET
ENV SECRET ${SECRET}

ARG NEXT_PUBLIC_PASSPORT_TOKEN_URL
ENV NEXT_PUBLIC_PASSPORT_TOKEN_URL ${NEXT_PUBLIC_PASSPORT_TOKEN_URL}

ARG NEXT_PUBLIC_CLIENT_ID
ENV NEXT_PUBLIC_CLIENT_ID ${NEXT_PUBLIC_CLIENT_ID}

ARG NEXT_PUBLIC_SECRET
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

ARG NEXT_PUBLIC_LOGIN_URL
ENV NEXT_PUBLIC_LOGIN_URL ${NEXT_PUBLIC_LOGIN_URL}

ARG NEXT_PUBLIC_CURRENT_API_VERSION
ENV NEXT_PUBLIC_CURRENT_API_VERSION ${NEXT_PUBLIC_CURRENT_API_VERSION}

ARG API_BASE_URL_ALTERNATIVE
ENV API_BASE_URL_ALTERNATIV ${API_BASE_URL_ALTERNATIVE}

ARG API_BASE_URL
ENV API_BASE_URL ${API_BASE_URL}

ARG COOKIE_PASSWORD
ENV COOKIE_PASSWORD ${COOKIE_PASSWORD}

WORKDIR /app/app
COPY . .
COPY --from=deps /opt/app/node_modules ./node_modules
RUN npm run build

# Production image, copy all the files and run next
FROM node:lts-alpine AS runner

# ARG X_TAG


ARG HTTP_PROXY

ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}

ARG NEXTAUTH_URL
ENV NEXTAUTH_URL ${NEXTAUTH_URL}

ARG SECRET
ENV SECRET ${SECRET}

ARG NEXT_PUBLIC_PASSPORT_TOKEN_URL
ENV NEXT_PUBLIC_PASSPORT_TOKEN_URL ${NEXT_PUBLIC_PASSPORT_TOKEN_URL}

ARG NEXT_PUBLIC_CLIENT_ID
ENV NEXT_PUBLIC_CLIENT_ID ${NEXT_PUBLIC_CLIENT_ID}

ARG NEXT_PUBLIC_SECRET
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

ARG NEXT_PUBLIC_LOGIN_URL
ENV NEXT_PUBLIC_LOGIN_URL ${NEXT_PUBLIC_LOGIN_URL}

ARG NEXT_PUBLIC_CURRENT_API_VERSION
ENV NEXT_PUBLIC_CURRENT_API_VERSION ${NEXT_PUBLIC_CURRENT_API_VERSION}

ARG API_BASE_URL_ALTERNATIVE
ENV API_BASE_URL_ALTERNATIV ${API_BASE_URL_ALTERNATIVE}

ARG API_BASE_URL
ENV API_BASE_URL ${API_BASE_URL}

ARG COOKIE_PASSWORD
ENV COOKIE_PASSWORD ${COOKIE_PASSWORD}

WORKDIR /opt/app

COPY --from=builder /opt/app/next.config.js ./
COPY --from=builder /opt/app/public ./public
COPY --from=builder /opt/app/.next ./.next
COPY --from=builder /opt/app/node_modules ./node_modules
CMD ["node_modules/.bin/next", "start"]