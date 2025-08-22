# Multi-stage build optimisé pour React Router v7
FROM node:20-alpine AS base

# Installer les dépendances système nécessaires
RUN apk add --no-cache libc6-compat curl
RUN apk update

# Définir le répertoire de travail
WORKDIR /app

# Optimiser les layers Docker
FROM base AS dependencies

# Copier seulement les fichiers de dépendances pour utiliser le cache Docker
COPY package.json package-lock.json ./

# Installer toutes les dépendances (dev + prod) pour le build
RUN npm ci --include=dev

FROM base AS builder

# Copier les dépendances depuis l'étape précédente
COPY --from=dependencies /app/node_modules ./node_modules
COPY package.json package-lock.json ./

# Copier les fichiers de configuration nécessaires pour le build
COPY tsconfig.json ./
COPY biome.json ./
COPY react-router.config.ts ./
COPY vite.config.ts ./

# Copier le code source
COPY app ./app
COPY public ./public

# Variables d'environnement pour le build optimisé
ENV NODE_ENV=production

# Build de l'application avec toutes les optimisations
RUN npm run build

FROM base AS production

# Créer un utilisateur non-root pour la sécurité
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 reactrouter

# Copier package.json pour installer les dépendances de production
COPY package.json package-lock.json ./

# Installer seulement les dépendances de production
RUN npm ci --omit=dev && npm cache clean --force

# Copier les fichiers buildés avec les bonnes permissions
COPY --from=builder --chown=reactrouter:nodejs /app/build ./build

# Passer à l'utilisateur non-root
USER reactrouter

# Variables d'environnement pour la production
ENV NODE_ENV=production
ENV PORT=8080
ENV HOST=0.0.0.0

# Exposer le port (Cloud Run utilise souvent 8080)
EXPOSE 8080

# Health check optimisé
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8080 || exit 1

# Démarrer l'application
CMD ["npm", "run", "start"]