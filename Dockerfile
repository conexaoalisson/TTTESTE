FROM node:20-alpine as build

WORKDIR /app

# Copiar package files e instalar dependências
COPY package*.json ./
RUN npm ci

# Copiar código fonte
COPY . .

# Build da aplicação
RUN npm run build

# Verificar se build foi criado
RUN ls -la /app/dist

# Estágio de produção
FROM nginx:alpine

# Copiar build
COPY --from=build /app/dist /usr/share/nginx/html

# Verificar arquivos copiados
RUN ls -la /usr/share/nginx/html

# Copiar configuração Nginx customizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Remover configuração padrão
RUN rm -f /etc/nginx/conf.d/default.conf.default

# Saúde do container
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
