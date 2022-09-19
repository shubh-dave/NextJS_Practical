// ✍️ import the Link component from 'next/link'

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home page!</h1>
      {/* ✍️ put a link to the About page */}
      <a href="/about">About</a>
    </div>
  );
};

export default Home;
