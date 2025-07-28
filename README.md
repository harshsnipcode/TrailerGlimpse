# Movie Glimpse

A modern web app built with Vite, React, Redux Toolkit, and Tailwind CSS.  
Browse trending movies, TV shows, and more.

## Features

- Trending, Popular, Movies, TV Shows feeds
- Search functionality
- Responsive UI with Tailwind CSS
- Redux Toolkit for state management
- Infinite scroll for feeds
- Video playback with React Player

## Tech Stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [React Player](https://www.npmjs.com/package/react-player)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd vite-project
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

To build for production:
```sh
npm run build
```

### Lint

To lint the code:
```sh
npm run lint
```

## Project Structure

```
vite-project/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── store/
│   │   └── store.js
│   ├── components/
│   ├── pages/
│   └── ...
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## Tailwind CSS Setup

- Tailwind directives are in `src/index.css`:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
- Make sure `tailwind.config.js` includes:
  ```js
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ]
  ```

