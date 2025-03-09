```
/src
├── app/ # Next.js routes (app router)
│ ├── (auth)/ # Auth-related pages (if using segment groups)
│ ├── dashboard/ # Dashboard routes
│ ├── layout.tsx # Root layout
│ ├── page.tsx # Homepage
├── components/ # UI components (buttons, modals, forms)
├── lib/ # Business logic (non-UI)
│ ├── store/ # Zustand, Redux, or Jotai stores
│ ├── api/ # API calls (REST, GraphQL)
│ ├── auth/ # Authentication logic (NextAuth, Clerk)
│ ├── utils/ # Helper functions (formatters, validators)
│ ├── config.ts # Global constants
├── styles/ # Global styles
├── public/ # Static assets (images, icons)
├── middleware.ts # Middleware (authentication, logging)
```
## ✅ Best Practices for Next.js Project Structure
- ✔ **Use `@/lib` for all non-UI logic** → Keeps UI and logic separate.  
- ✔ **Use `@/components` only for UI** → No API calls or business logic inside components.  
- ✔ **Use `@/app` only for routing** → Pages, layouts, and route handlers go here.  
- ✔ **Use middleware for global logic** → Authentication, logging, redirects.  
