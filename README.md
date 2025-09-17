# GSC (Genius Software Core) Platform

A comprehensive software development and CRM system built with modern web technologies.

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Edit .env with your configuration

# Create admin user
./scripts/run.sh admin:create

# Start development server
npm run dev
```

## Admin User Management

### Initial Admin Setup

Create the primary admin user with secure password hashing:

```bash
# Set admin credentials in .env file
ADMIN_USERNAME=admin@yourcompany.com
ADMIN_PASSWORD=YourSecurePassword123!

# Create admin user
./scripts/run.sh admin:create
```

### Password Reset

Reset admin password securely:

```bash
# Interactive password reset
./scripts/run.sh admin:reset-password

# Non-interactive reset (for automation)
./scripts/run.sh admin:reset-password "NewSecurePassword123!"
```

### Demo Data

Seed demo data for development:

```bash
./scripts/run.sh seed:demo
```

## Security Features

- **Secure Password Hashing**: Uses argon2id with configurable parameters
- **Password Policy**: Enforces strong password requirements
- **Environment-based Configuration**: Sensitive data managed through environment variables
- **Separation of Concerns**: Demo data seeding separated from production admin creation

## Environment Variables

Key security-related environment variables:

```bash
# Admin Provisioning
ADMIN_EMAIL=admin@yourdomain.com
ADMIN_PASSWORD=Change!This!Strong!Password123
ADMIN_NAME=System Administrator
ADMIN_FORCE_CHANGE=true

# Password Security (argon2)
ARGON2_MEMORY_COST=65536
ARGON2_TIME_COST=3
ARGON2_PARALLELISM=4
ARGON2_HASH_LENGTH=32
```

## Database

The application supports PostgreSQL with automatic fallback to in-memory storage for development.

```bash
# Database setup
DATABASE_URL=postgresql://user:password@localhost:5432/gsc

# Run migrations
./scripts/run.sh db:migrate
```

## Development

```bash
# Development server
npm run dev

# Type checking
npm run check

# Build for production
npm run build
```

## System Health

Run preflight checks to validate system health:

```bash
./scripts/run.sh preflight
```

## User Provisioning

### Setup Requirements

1. **Copy environment configuration:**
   ```bash
   cp .env.example .env
   ```
   
2. **Fill in database and admin variables in `.env`:**
   ```bash
   DATABASE_URL=postgresql://username:password@localhost:5432/database_name
   ADMIN_EMAIL=admin@yourdomain.com
   ADMIN_PASSWORD=Change!This!Strong!Password123
   ADMIN_NAME=System Administrator
   ADMIN_FORCE_CHANGE=true
   ```

3. **Run database migrations:**
   ```bash
   npm run db:push
   ```

### Create Admin User

Create admin user using two methods:

#### Method 1: Environment-driven (Recommended)
```bash
# Set variables in .env file, then run:
tsx scripts/admin-create.ts
```

#### Method 2: CLI-driven
```bash
tsx scripts/admin-create.ts --email admin@yourdomain.com --password "S7rong!Pass" --forceChange
```

### Reset Admin Password

Reset admin password when needed:

```bash
tsx scripts/admin-reset.ts --email admin@yourdomain.com --password "N3w!StrongPass" --forceChange
```

### Demo Data (Optional)

Add sample data for development (does NOT touch admin users):

```bash
tsx scripts/seed-demo.ts
```

### Password Policy

Passwords must meet these requirements:
- At least 8 characters long
- Contains uppercase letters (A-Z)
- Contains lowercase letters (a-z)
- Contains numbers (0-9)
- Contains special characters (!@#$%^&*()_+-=[]{}|;':",./<>?)
- Does not contain common patterns (password, admin, 123456, etc.)

**Example strong passwords:**
- `MyS3cur3P@ssw0rd!`
- `Tr0ub4dor&3`
- `C0mplex!Pa$$w0rd2024`

### Authentication Integration

The login system uses `verifyPassword()` from `server/security/password.ts` and enforces the `force_password_change` flag. When this flag is set to true, users must change their password on first login.

---

For detailed documentation, see the `/docs` directory.