# portfolio-fullstack-devops

A modern, production-ready portfolio showcasing enterprise frontend development using Next.js, React, TypeScript, Tailwind CSS, automated testing, GitHub Actions CI/CD, Docker, code quality tools, and deployment best practices.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Quality checks and tests

Use these commands to verify the project locally before pushing changes:

```bash
pnpm install
pnpm lint
pnpm lint:fix
pnpm typecheck
pnpm format:check
pnpm format
pnpm test
pnpm test:coverage
```

- Run `pnpm lint` to check for ESLint issues.
- Run `pnpm lint:fix` to automatically fix safe ESLint problems.
- Run `pnpm test` to execute the unit test suite.
- Run `pnpm test:coverage` to run tests and generate a coverage report.
- Run `pnpm typecheck` to verify TypeScript types without building the app.

If you are using Windows PowerShell and `pnpm` is not recognized, try `pnpm.cmd` instead.

If PowerShell shows an execution policy error such as:

```powershell
pnpm : File ...\pnpm.ps1 cannot be loaded because running scripts is disabled on this system.
```

run this once in PowerShell as Administrator:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

Then use:

```powershell
pnpm.cmd install
pnpm.cmd lint
pnpm.cmd test
pnpm.cmd test:coverage
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
