import Navbar from "../../components/Navbar";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const blog = ({ data }) => {
  return (
    <>
      <Navbar />
      {data.slice(0, 10).map((curElem) => 
      {
        return (
          <div key={curElem.id} className="ssr-styles">
            <h3>{curElem.id}</h3>
            <Link href={`/blog/${curElem.id}`}>
              <h2>{curElem.name}</h2>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default blog;
