- Next is a React frontend development web framework that enables functionality such as server-side rendering and static site generation.
- In React app, entire application is loaded and rendered on the client side by JavaScript. Not good for SEO (search engine optimization)
- Nextjs allow the first page to be rendered on server side, better for SEO
- Benefit of NextJS:
  - Easy page routing
  - API routes
  - Out of the box TypeScript and Sass
  - Static site generation
  - Easy deployment
- Files and folders:

  - Anything is public folder can be access by the browsers via url
  - Common Practice: Every component has its own css file, so Home component has Home.module.css file
  - Can't import global stylesheet into a component

- pages folder: for your pages, with different route

  - \_app.tsx file is to wrap around all the page component, can be wrap around using a layout component
  - index.tsx file is the homepage

- Layout:

  - import FunctionComponent for TypeScript
  - index.ts is to export component from folder
  - export default will just export from the file that you’re in, but export default from an index file will represent exporting from the folder, so more
    developer friendly since developer can just import it without having to find where the exact location of the component is.

- progress:

  - 6/27: set up basic pages, layout component, understand more about how files work in nextJS

- goal:
  - 6/28: start designing the layout component and the navbar
