# ==================== DEPENDENCIES STAGE ====================
FROM node:22-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install pnpm via corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy only dependency files for better caching
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# ==================== BUILD STAGE ====================
FROM node:20-alpine AS builder
WORKDIR /app

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Define build arguments for required ENV variables
# ARG NEXT_PUBLIC_BASE_URL
# ARG NEXT_PUBLIC_SUPABASE_URL
# ARG NEXT_PUBLIC_SUPABASE_ANON_KEY
# ARG NEXTAUTH_URL
# ARG NEXT_PUBLIC_RAZORPAY_KEY_ID
# ARG SUPABASE_SERVICE_ROLE_KEY

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set Next.js telemetry to disabled (optional)
ENV NEXT_TELEMETRY_DISABLED=1

# Set the arguments as environment variables for the build
# ENV NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}
# ENV NEXT_PUBLIC_SUPABASE_URL=${NEXT_PUBLIC_SUPABASE_URL}
# ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=${NEXT_PUBLIC_SUPABASE_ANON_KEY}
# ENV NEXTAUTH_URL=${NEXTAUTH_URL}
# ENV NEXT_PUBLIC_RAZORPAY_KEY_ID=${NEXT_PUBLIC_RAZORPAY_KEY_ID}
# ENV SUPABASE_SERVICE_ROLE_KEY=${SUPABASE_SERVICE_ROLE_KEY}

# Build Next.js app (creates standalone output)
RUN pnpm run build

# ==================== PRODUCTION STAGE ====================
FROM node:22-alpine AS production
ARG VERSION=dev

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV APP_VERSION=${VERSION}

# Install only runtime dependencies needed for canvas/sharp (if used)
RUN apk add --no-cache \
  libc6-compat \
  && rm -rf /var/cache/apk/*

RUN addgroup -g 1001 -S nodejs && \
  adduser -S nodejs -u 1001 -G nodejs

WORKDIR /app

# Copy Next.js standalone output (smallest possible bundle)
COPY --from=builder --chown=nodejs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nodejs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nodejs:nodejs /app/public ./public

RUN echo "${VERSION}" > /app/VERSION

USER nodejs
EXPOSE 3000

ENV PORT=3000

CMD ["node", "server.js"]
