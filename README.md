# Landing Page WHMCS

Landing page moderna e responsiva para venda de WHMCS, construída com React + Vite.

## Recursos

- Interface moderna com design gradiente
- Totalmente responsiva
- Seções: Hero, Features, Pricing, Contact
- 3 planos de preços configuráveis
- Otimizado para produção

## Deploy com Docker

### Opção 1: Docker Compose (Recomendado)

```bash
# Clonar repositório
git clone https://github.com/conexaoalisson/TTTESTE.git
cd TTTESTE

# Subir aplicação
docker-compose up -d

# Acessar em http://localhost
```

### Opção 2: Docker direto

```bash
# Build da imagem
docker build -t whmcs-landing .

# Rodar container
docker run -d -p 80:80 --name whmcs-landing whmcs-landing

# Acessar em http://localhost
```

### Comandos úteis

```bash
# Parar containers
docker-compose down

# Ver logs
docker-compose logs -f

# Rebuild após mudanças
docker-compose up -d --build

# Remover tudo
docker-compose down -v
```

## Deploy no Easypanel

1. Criar novo serviço (App Service)
2. Conectar ao repositório: `https://github.com/conexaoalisson/TTTESTE`
3. Branch: `main`
4. O Dockerfile será detectado automaticamente
5. Deploy!

## Desenvolvimento Local (sem Docker)

```bash
# Instalar dependências
npm install

# Rodar em modo dev
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## Estrutura do Projeto

```
TTTESTE/
├── src/
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos da landing page
│   └── main.jsx         # Entry point
├── public/              # Assets estáticos
├── Dockerfile           # Configuração Docker
├── docker-compose.yml   # Orquestração Docker
├── nginx.conf           # Configuração Nginx
└── vite.config.js       # Configuração Vite
```

## Tecnologias

- React 18
- Vite
- CSS3 (Grid, Flexbox, Gradients)
- Nginx (Alpine)
- Docker

## Customização

Para alterar cores, textos ou preços, edite o arquivo `src/App.jsx` e `src/App.css`.

## Licença

MIT
