// pages/index.js

function HomePage() {
  return (
    <div className="bg-blue-500 p-4">
      <h1>Hello, world!</h1>
    </div>
  );
}

export default HomePage;

// Add this to your Next.js _app.js file (or equivalent)
// This ensures that the necessary styles are injected during SSR
import '../styles/globals.css'; // Make sure you have a globals.css file

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;

// globals.css (create this file in the styles directory)
@tailwind base;
@tailwind components;
@tailwind utilities;