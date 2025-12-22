# NSBrain 🧠

#Todo first remove cn import from web and add in the ui package
#Todo implement globalcss veriable.
#Todo try toggle theam from ui package
#Todo move all file to ui package and complete ui package.

A modern, full-stack **Second Brain** application for managing and organizing your knowledge. Built with TypeScript, React, and Express, NSBrain helps you capture, organize, and share your thoughts, notes, and resources efficiently.

## 📖 About This Project

NSBrain is a knowledge management system designed to help you build your personal "second brain". It allows you to:

- ✨ **Capture Content**: Store notes, articles, and ideas with rich text support
- 🏷️ **Organize with Tags**: Categorize your content with customizable tags
- 🔗 **Share Knowledge**: Generate shareable links for your content
- 🔐 **Secure Authentication**: JWT-based authentication with user management
- 🎨 **Modern UI**: Beautiful, responsive interface built with React and TailwindCSS
- 📝 **Full-Text Search**: Quickly find what you're looking for
- 🚀 **Fast & Scalable**: Built on modern technologies with performance in mind

### Tech Stack

**Frontend:**
- React 19
- TypeScript
- TailwindCSS
- Vite
- React Router
- Redux Toolkit
- Framer Motion & GSAP for animations

**Backend:**
- Node.js & Express
- TypeScript
- JWT Authentication
- Swagger API Documentation
- Winston Logger
- Zod Validation

**Database:**
- PostgreSQL
- Prisma ORM

**Monorepo:**
- Turborepo for build optimization
- Yarn Workspaces

## 🌟 Open Source

This project is **open source** and available for anyone to use, modify, and contribute to. We welcome contributions from the community!

### Contributing

We'd love your help! Here's how you can contribute:

1. 🐛 **Report bugs** by opening an issue
2. 💡 **Suggest features** through GitHub discussions
3. 🔧 **Submit pull requests** with improvements
4. 📖 **Improve documentation**
5. ⭐ **Star this repo** if you find it useful!

Feel free to fork this project and make it your own!

## 🚀 How to Run This Project Locally

### Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **Yarn** (v4.1.0 or higher) - [Installation guide](https://yarnpkg.com/getting-started/install)
- **PostgreSQL** (v14 or higher) - [Download here](https://www.postgresql.org/download/)
- **Git** - [Download here](https://git-scm.com/)

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/NSBrain.git
cd NSBrain
```

### Step 2: Install Dependencies

```bash
yarn install
```

This will install all dependencies for the entire monorepo (both frontend and backend).

### Step 3: Set Up Environment Variables

1. Copy the example environment file:

```bash
cp example.env .env
```

2. Open the `.env` file and configure the following variables:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/nsbrain"

# API Configuration
API_JWT_SECRET="your-super-secret-jwt-key-change-this"
API_PORT=3000
API_NODE_ENV="development"
API_DOC_VISIBLE=true

# Frontend Configuration
VITE_API_ENDPOINT_URL="http://localhost:3000"
```

**Important:** Replace the placeholder values with your actual configuration.

### Step 4: Set Up the Database

1. Create a PostgreSQL database named `nsbrain` (or your preferred name):

```bash
createdb nsbrain
```

Or connect to PostgreSQL and run:

```sql
CREATE DATABASE nsbrain;
```

2. Generate Prisma Client and run migrations:

```bash
cd packages/db
npx prisma generate
npx prisma migrate dev
cd ../..
```

This will create all necessary tables in your database.

### Step 5: Build the Project

```bash
yarn build
```

This builds all packages and applications in the monorepo.

### Step 6: Start Development Servers

You have two options:

**Option A: Run everything together (recommended)**

```bash
yarn dev
```

This starts both the frontend and backend development servers concurrently.

**Option B: Run servers separately**

In one terminal (Backend):
```bash
cd apps/api
yarn dev
```

In another terminal (Frontend):
```bash
cd apps/web
yarn dev
```

### Step 7: Access the Application

- **Frontend**: Open [http://localhost:5173](http://localhost:5173) in your browser
- **Backend API**: [http://localhost:3000](http://localhost:3000)
- **API Documentation**: [http://localhost:3000/api-docs](http://localhost:3000/api-docs) (Swagger UI)

## 📁 Project Structure

```
NSBrain/
├── apps/
│   ├── api/              # Backend Express API
│   └── web/              # Frontend React application
├── packages/
│   ├── config/           # Shared configuration
│   ├── db/               # Database models and Prisma schema
│   ├── eslint-config/    # Shared ESLint configuration
│   ├── typescript-config/# Shared TypeScript configuration
│   └── ui/               # Shared UI components
├── dist/                 # Build output
├── example.env           # Example environment variables
├── package.json          # Root package.json
└── turbo.json           # Turborepo configuration
```

## 🛠️ Available Scripts

- `yarn dev` - Start development servers for all apps
- `yarn build` - Build all packages and apps
- `yarn lint` - Run ESLint on all packages
- `yarn format` - Format code with Prettier

## 📚 Additional Resources

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [React Documentation](https://react.dev)
- [Express Documentation](https://expressjs.com)

## 🐛 Troubleshooting

**Database connection issues:**
- Ensure PostgreSQL is running
- Verify your `DATABASE_URL` in the `.env` file
- Check that the database exists

**Port already in use:**
- Change `API_PORT` in your `.env` file
- Make sure no other application is using ports 3000 or 5173

**Build errors:**
- Clear node_modules: `rm -rf node_modules && yarn install`
- Clear turbo cache: `yarn turbo clean`
- Rebuild: `yarn build`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

Built with ❤️ using modern web technologies. Special thanks to all contributors who help make this project better!

---

**Happy Building! 🚀**

If you have any questions or need help, feel free to open an issue or reach out to the community.
