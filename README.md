# TM-FE - Travel Management Frontend

A premium, state-of-the-art Travel Management dashboard and portal built with modern web technologies. Focuses on visual excellence, performance, and a seamless developer experience.

## 🚀 Tech Stack

- **Framework**: [Next.js 16.1.7](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) & [Base UI](https://base-ui.com/)
- **State Management**: [TanStack React Query](https://tanstack.com/query/latest)
- **Animations**: [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Date Handling**: [date-fns](https://date-fns.org/)

---

## 📂 Project Structure

```text
├── app/                  # Next.js App Router
│   ├── (admin)/          # Admin Dashboard routes
│   ├── (with-navbar)/    # Routes with shared public navbar
│   ├── auth/             # Authentication pages (Login, OTP, etc.)
│   ├── components/       # Layout-specific components
│   └── globals.css       # Tailwind 4 global styles
├── components/           # UI Component Library
│   ├── ui/               # Shadcn/UI primitive components
│   ├── custom/           # Reusable shared components
│   └── sections/         # Page-specific components (Modular)
├── constants/            # Static data, config, and nav definitions
├── hooks/                # Custom React hooks
├── lib/                  # Shared library logic and utilities
├── mock/                 # Mock data for prototyping
├── types/                # Domain-grouped TypeScript definitions
├── utils/                # Pure helper functions & formatters
├── public/               # Static assets
└── tsconfig.json         # TypeScript configuration
```

---

## 🛠️ Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (Primary package manager)

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
bun install
```

### Development

```bash
# Run the development server
bun dev
```

### Building for Production

```bash
# Build the application
bun run build

# Start the production server
bun start
```

---

## 📏 Development Guidelines

### 🎨 Styling & Design
- **Tailwind CSS 4**: Leverage modern CSS features and the new Tailwind engine. Use HSL-based color tokens for consistent theming.
- **Aesthetics**: Prioritize "Premium" feel. Use glassmorphism, subtle gradients, and smooth micro-animations.
- **Dark Mode**: Built-in support using `next-themes`. Ensure high contrast and sophisticated dark palettes.

### 🧩 Component Organization
1.  **UI Primitives (`/components/ui`)**: Low-level components from Shadcn. Do not add biz-logic here.
2.  **Custom Components (`/components/custom`)**: Higher-level reusable components (e.g., `CustomCard`, `PackageCard`).
3.  **Sections (`/components/sections`)**: Complex components that belong to a specific page or route group.

### 🏷️ TypeScript & Data
- **Types**: Always use the `/types` directory. Group them by domain (e.g., `packages.ts`, `bookings.ts`).
- **Data Fetching**: Use **React Query** for all server-state management. Avoid raw `useEffect` for fetching.

---

## 📝 Scripts

- `bun dev`: Starts the development server with Turbopack.
- `bun build`: Compiles the application for production.
- `bun start`: Runs the built application.
- `bun lint`: Runs ESLint for code quality checks.
- `bun format`: Formats code using Prettier.
- `bun typecheck`: Runs TypeScript compiler check.

---

## 📑 License

This project is private and intended for internal use only.
