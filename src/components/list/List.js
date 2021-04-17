import PropTypes from "prop-types";

const List = ({ items, className }) => {
  return (
    <div>
      {Object.entries(items).map(([key, value]) => (
        <span
          key={key}
          className={className}
          style={{
            display: "flex",
          }}
        >
          {key}:{value}
        </span>
      ))}
    </div>
  );
};

List.propTypes = {
  items: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default List;
