# Frizbee

Modern web application built with Nuxt 3, featuring an admin interface and multilingual support.

## 🚀 Technologies

- **Framework**: Nuxt 3
- **UI**: Nuxt UI
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: @sidebase/nuxt-auth
- **Testing**: Cypress
- **i18n**: @nuxtjs/i18n
- **Containerization**: Docker

## 🛠️ Prerequisites

- Node.js >= 20.0.0
- Docker & Docker Compose
- PostgreSQL (via Docker)

## ⚙️ Installation

1. Clone the project

```bash
git clone [REPO_URL]
cd frizbee
```

2. Install dependencies

```bash
npm install
```

3. Copy environment file

```bash
cp .env.example .env
```

4. Start the database

```bash
docker compose up -d
```

5. Generate Prisma client

```bash
npx prisma generate
```

## 🚀 Useful Commands

### Development

```bash
# Start development server
npm run dev

# Run Cypress tests in UI mode
npm run cy:open

# Run Cypress tests in CLI mode
npm run cypress
```

### Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Maintenance

```bash
# Lint code
npm run lint

# Versioning (patch/minor/major)
npm run tag:patch
npm run tag:minor
npm run tag:major
```

### Database

```bash
# Access Adminer interface
http://localhost:8000

# Database commands
# Connect to PostgreSQL container
docker exec -it frizbee_postgres psql -U postgres -d frizbee

# Prisma commands
# Generate Prisma client
npx prisma generate

# Create new migration
npx prisma migrate dev --name [migration_name]

# Apply migrations
npx prisma migrate deploy

# Reset database
npx prisma migrate reset

# View database schema
npx prisma db pull

# Seed database
npx prisma db seed

# Studio (GUI for database)
npx prisma studio
```

## 🔐 Environment Variables

- `NUXT_ADMIN_EMAIL`: Admin email
- `NUXT_ADMIN_PASSWORD`: Admin password
- `NUXT_ADMIN_USERNAME`: Admin username
- `NUXT_JWT_SECRET`: JWT secret key
- `NUXT_AUTH_ORIGIN`: Authentication origin URL

## 🌐 Features

- Secure admin interface
- Multilingual support (FR/EN)
- Dark mode by default
- Form validation with Yup
- E2E testing with Cypress
- Linting with ESLint and Prettier
- Git hooks with Husky

## 📦 Project Structure

```
├── components/     # Vue components
├── composables/   # Nuxt composables
├── layouts/       # Application layouts
├── middleware/    # Nuxt middleware
├── models/        # Data models
├── pages/         # Application pages
├── prisma/        # Prisma schema and migrations
├── server/        # API and server routes
└── i18n/          # Translation files
```

## 🔧 Configuration

- **Database**: PostgreSQL on port 5432
- **Adminer**: DB management interface on port 8000
- **Application**: Development server on port 3000

## 📝 Notes

- Project uses Docker for database configuration
- Testing configured with Cypress and Mochawesome
- Authentication handled via JWT
- Dark mode enabled by default
