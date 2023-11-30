import List from "./List";

const Row = ({ title, data }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      <List data={data} />
    </section>
  );
};

export default Row;
