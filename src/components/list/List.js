import PropTypes from "prop-types";

const List = ({ items, className }) => {
  return (
    <table className={className}>
      <tbody>
        {Object.entries(items).map(([key, value]) => (
          <tr key={key}>
            <td className={`${className}__key`}>{key}:</td>
            <td> {value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

List.propTypes = {
  items: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default List;
