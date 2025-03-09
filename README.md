```
/src
├── app/ # Next.js routes (app router)
│   ├── (auth)/ # Auth-related pages (if using segment groups)
│   ├── dashboard/ # Dashboard routes
│   ├── layout.tsx # Root layout
│   ├── page.tsx # Homepage
├── components/ # UI components (buttons, modals, forms)
│   ├── ui/ # Reusable UI components (buttons, inputs, modals)
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   ├── Card.tsx
│   │   ├── Tooltip.tsx
│   ├── layout/ # Layout-related components (navbar, sidebar, footer)
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Footer.tsx
│   ├── auth/ # Authentication-related components
│   │   ├── LoginForm.tsx
│   │   ├── RegisterForm.tsx
│   │   ├── AuthProvider.tsx
│   ├── dashboard/ # Dashboard-specific components
│   │   ├── StatsCard.tsx
│   │   ├── ActivityFeed.tsx
│   │   ├── UserTable.tsx
│   ├── forms/ # Form components (custom inputs, form layouts)
│   │   ├── UserForm.tsx
│   │   ├── ProfileForm.tsx
│   ├── feedback/ # Notifications, alerts, and toasts
│   │   ├── Toast.tsx
│   │   ├── Alert.tsx
│   ├── providers.tsx # Global providers (theme, Redux, Zustand)
├── lib/ # Business logic (non-UI)
│   ├── api/ # API calls (REST, GraphQL)
│   │   ├── axiosInstance.ts # Axios instance with baseURL and interceptors
│   │   ├── authApi.ts # API calls related to authentication
│   │   ├── userApi.ts # API calls related to users
│   │   ├── postApi.ts # API calls related to posts
│   │   ├── graphql/ # GraphQL queries and mutations (if using GraphQL)
│   │   │   ├── queries.ts
│   │   │   ├── mutations.ts
│   │   │   ├── client.ts # Apollo Client configuration
│   ├── auth/ # Authentication logic
│   │   ├── authConfig.ts # NextAuth or Clerk configuration
│   │   ├── authUtils.ts # Helper functions for authentication
│   │   ├── middleware.ts # Middleware for authentication
│   ├── store/ # Zustand, Redux, or Jotai stores
│   │   ├── index.ts # Exports all stores
│   │   ├── authStore.ts # Zustand store for auth state
│   │   ├── userStore.ts # Zustand store for user state
│   │   ├── themeStore.ts # Zustand store for theme preferences
│   ├── utils/ # Helper functions
│   │   ├── format.ts # Date, currency, and string formatting utilities
│   │   ├── validators.ts # Form validation functions
│   │   ├── fetcher.ts # Fetch function for SWR or React Query
│   │   ├── logger.ts # Logging utility
│   │   ├── constants.ts # App-wide constants
│   ├── database/ # Database logic (if using an ORM like Prisma)
│   │   ├── db.ts # Prisma client instance
│   │   ├── queries.ts # Common database queries
│   │   ├── migrations/ # Database migration files
│   ├── services/ # External service integrations (Stripe, Firebase, etc.)
│   │   ├── stripe.ts # Stripe payment integration
│   │   ├── mail.ts # Email sending service (Resend, Nodemailer, etc.)
│   │   ├── firebase.ts # Firebase configuration
│   │   ├── analytics.ts # Analytics service (Google Analytics, Plausible)
│   ├── server/ # Server-side actions & logic
│   │   ├── actions.ts # Global server actions
│   │   ├── postActions.ts # Post-related server actions
│   │   ├── userActions.ts # User-related server actions
│   │   ├── authActions.ts # Authentication-related server actions
│   ├── constants/  # Static values (unchanging)
│   │   ├── api.ts      # API endpoint constants
│   │   ├── auth.ts     # Authentication-related constants
│   │   ├── errors.ts   # Error messages
│   │   ├── ui.ts       # UI-related constants (themes, colors)
│   │   ├── index.ts    # Exports all constants
│   ├── configs/   # Configurable settings (changeable)
│   │   ├── app.ts      # General app settings (feature flags, limits)
│   │   ├── auth.ts     # Authentication settings (tokens, session)
│   │   ├── database.ts # Database configs (Prisma, MongoDB, etc.)
│   │   ├── index.ts    # Exports all configs
├── styles/ # Global styles
├── public/ # Static assets (images, icons)
├── middleware.ts # Middleware (authentication, logging)

```
## ✅ Best Practices for Next.js Project Structure
- ✔ **Use `@/lib` for all non-UI logic** → Keeps UI and logic separate.  
- ✔ **Use `@/components` only for UI** → No API calls or business logic inside components.  
- ✔ **Use `@/app` only for routing** → Pages, layouts, and route handlers go here.  
- ✔ **Use middleware for global logic** → Authentication, logging, redirects.  
