# Next.js Form Management & Auth

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Overview

I built a registration and login form using Shadcn-ui and Tailwindcss. To manage these forms, I use the react-hook-form library, which allows me to easily handle validation with Zod.

Forms are submitted to the server using server actions and FormData. I also create my own authentication, which I later replace with NextAuth.

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Resources

To learn more about Next.js, take a look at the following resources:

- [Forms Management with Next.js App Router](https://www.pronextjs.dev/tutorials/forms-management-with-next-js-app-router) - learn to implement forms in a Next.js App Router application.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Author

- Github: [@ZaidMarrie](https://github.com/ZaidMarrie)
- Twitter: [@LeKoels27](https://twitter.com/LeKoels27)

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
