import "./style.css";

const Boxes = ({ value, ind1, ind2, sol }) => {
  return (
    <div
      className="div_matrix"
      style={
        value && value === 1
          ? sol && sol[ind1][ind2] && sol[ind1][ind2] === 1
            ? { background: "#1e394a" }
            : { background: "#eaeaea" }
          : { background: "#a3a3a3" }
      }
    ></div>
  );
};

export default Boxes;
