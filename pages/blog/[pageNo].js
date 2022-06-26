import Navbar from "../../components/Navbar";
import Map2 from "../google_api/map1";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((curElem) => {
    return {
      params: {
        pageNo: curElem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  console.log("data", data);
  return {
    props: {
      data,
    },
  };
};

const Data = ({ data }) => {
  const { id, name, username, email, address, phone, website, company } = data;
  console.log(data);
  return (
    <>
      <Navbar />
      <div className="ssr-styles ssr-styles-inside">
        <h3> {id} </h3> <h2> {name} </h2> <h2> {username} </h2> <p> {email} </p>{" "}
        <p> {address.street} </p> <p> {address.suite} </p>{" "}
        <p> {address.city} </p> <p> {address.zipcode} </p> <Map2 />
        <p> {address.geo.lat} </p> <p> {address.geo.lng} </p> <p> {phone} </p>{" "}
        <p> {website} </p> <p> {company.name} </p>{" "}
        <p> {company.catchPhrase} </p> <p> {company.bs} </p>{" "}
      </div>{" "}
    </>
  );
};

export default Data;
