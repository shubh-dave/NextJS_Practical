// ✍️ create a type Props containing title as string

// ✍️ obtain the title prop
const Home = ({ title }: { title: string }) => {
  return (
    <div>
      <h1>Overriding the App component</h1>
      <h1>{title}</h1>
      {/* ✍️ render the title prop */}
    </div>
  );
};

export default Home;
