# RIDE JOB FOR SSW

This is a landing page for "RIDE JOB FOR SSW", a service that helps foreign nationals with Specified Skilled Worker (SSW) visas find jobs as taxi drivers in Japan.

## Built With

*   [Next.js](https://nextjs.org/) (v15)
*   [React](https://react.dev/) (v19)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [next-international](https://github.com/i18n-ally/next-international) for i18n
*   [React Slick](https://react-slick.neostack.com/) for carousels
*   [TypeScript](https://www.typescriptlang.org/)

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

## Project Structure

This project uses the Next.js App Router.

-   `app/[locale]/page.tsx`: The main landing page, composed of multiple section components.
-   `components/sections/`: Contains the React components for each section of the landing page.
-   `locales/`: Contains the translation files for each supported language.
-   `middleware.ts`: Handles the i18n routing by detecting the user's preferred language.

## Internationalization (i18n)

This project supports the following languages:
*   Japanese (default)
*   English
*   Chinese

The internationalization is managed by `next-international`. Language files are located in the `locales/` directory. The middleware automatically redirects users to their preferred language path (e.g., `/en`, `/ja`, `/zh`).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
