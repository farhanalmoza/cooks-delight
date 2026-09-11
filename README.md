# Cooks Delight

A cooking recipe & blog website built with React, TypeScript, and Tailwind CSS. Fully responsive (desktop & mobile).

**Live demo:** [cooks-delight-hazel.vercel.app](https://cooks-delight-hazel.vercel.app/)

![Cooks Delight preview](public/images/preview.png)

## Design

UI design is based on the free Figma community template:
[Free Cooking Recipes Blog Template](https://www.figma.com/community/file/1331351586208563684/free-cooking-recipes-blog-template)

## Data Source

Recipe data (titles, images, ingredients, instructions, categories, etc.) is fetched live from
[TheMealDB](https://www.themealdb.com/api.php), a free public recipe API. No API key is required for the endpoints used in this project.

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) — build tool & dev server
- [Tailwind CSS v4](https://tailwindcss.com/) — CSS-first config (`src/index.css`)
- [React Router v7](https://reactrouter.com/) — routing
- [Oxlint](https://oxc.rs/) — linting

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — hero, category explorer, featured recipes, recipe search/filter, about teaser |
| `/recipes` | Browse all recipes — filter by category or search by name |
| `/recipe/:id` | Recipe detail — ingredients, instructions, similar recipes, share, author bio |
| `/cooking-tips` | Cooking tips, newest recipes, mastering the basics, dietary guides, tips & tricks |
| `/about` | About Us — story, gallery, featured recipes |

## Getting Started

```bash
npm install
npm run dev       # start dev server
npm run build     # production build
npm run preview   # preview production build
npm run lint       # run oxlint
```

## Project Structure

```
src/
├── api/          # TheMealDB API calls
├── components/    # reusable UI sections & components
├── hooks/        # data-fetching hooks
├── pages/        # route-level pages
├── types/        # shared TypeScript types
└── utils/        # helper functions
```

## Notes

- The newsletter subscribe form and social media links are UI-only placeholders — not connected to a real backend or actual social accounts.
- Some content (e.g. cooking tips, "Mastering the Basics" articles) is static/manually authored, since TheMealDB only provides recipe data, not blog-style articles.
