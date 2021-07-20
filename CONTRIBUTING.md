# Contribution Guidelines

Thanks for your interest to contribute to this project.

## Instructions

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

Please check the **Future Goals** section of the `README.md`

## Why did I choose IndexedDB?

- I have worked decent enough on local storage, and wanted to explore the IndexedDB API.
- Asynchronous - hence migrating to real database is easier.
- I don't like using `JSON.stringify` and `JSON.parse` methods just to store the data.

**PS:** IndexedDB has more storage limit than `localStorage` (our simple application doesn't need to worry about it any way 😜)
