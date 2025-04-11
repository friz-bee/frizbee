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

## 🔐 Environment Variables

- `NUXT_DATABASE_URL`: PostgreSQL database connection URL
- `NUXT_AUTH_ORIGIN`: Base URL for authentication (e.g. http://localhost:3000)
- `NUXT_JWT_SECRET`: JWT secret key

## 🌐 Features

- Secure admin interface
- Multilingual support (FR/EN)
- Dark mode by default
- Form validation with Yup
- E2E testing with Cypress
- Linting with ESLint and Prettier
- Git hooks with Husky

## 👤 Admin Interface

The admin interface is accessible at `/admin` after authentication.

### Default Credentials

- Email: `admin@example.com`
- Password: `P@ssw0rd`

### Security

- Admin interface is protected by JWT authentication
- Admin routes are secured by the `auth` middleware
- JWT tokens expire after 7 days
- Credentials can be modified via environment variables
- Authentication uses a local strategy with custom endpoints:
  - Login: `/api/admin/login`
  - Logout: `/api/admin/logout`
  - Session: `/api/admin/session`

### Features

- Multilingual interface (FR/EN)
- Dark mode by default
- User session management
- Protected sensitive routes
- Form validation with Yup

## 🗄️ Database

### Development Setup

1. Start PostgreSQL and Adminer:

```bash
docker compose up -d
```

2. Verify containers are running:

```bash
docker compose ps
```

3. Access Adminer interface:

- URL: http://localhost:8000
- System: PostgreSQL
- Server: postgres
- Username: postgres
- Password: postgres
- Database: frizbee

### Migration Management

1. Generate Prisma client:

```bash
npx prisma generate
```

2. Create a new migration:

```bash
npx prisma migrate dev --name [migration_name]
```

3. Apply migrations in production:

```bash
npx prisma migrate deploy
```

4. Reset database (⚠️ deletes all data):

```bash
npx prisma migrate reset
```

5. View database with Prisma Studio:

```bash
npx prisma studio
```

### Useful Commands

- Connect to PostgreSQL via CLI:

```bash
docker exec -it frizbee_postgres psql -U postgres -d frizbee
```

- View database logs:

```bash
docker compose logs postgres
```

- Stop containers:

```bash
docker compose down
```

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
