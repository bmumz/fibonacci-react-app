import PropTypes from "prop-types";

const Picture = ({ webP, jpg, alt, className }) => (
  // will serve WebP to all browsers except IE (smaller file size)
  <picture>
    <source srcSet={webP} type="image/webp" />
    <img src={jpg} alt={alt} className={className} />
  </picture>
);

Picture.propTypes = {
  webP: PropTypes.string.isRequired,
  jpg: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Picture;
