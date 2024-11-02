import PropTypes from "prop-types";
import "../App.css";
const SkeletonLoader = ({ count }) => (
  <div className="row">
    {Array.from({ length: count }).map((_, index) => (
      <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div className="card h-100">
          <div className="card-img-top skeleton skeleton-image" />
          <div className="card-body">
            <h5 className="card-title skeleton skeleton-title" />
            <p className="card-text skeleton skeleton-text short" />
            <p className="card-text skeleton skeleton-text long" />
          </div>
        </div>
      </div>
    ))}
  </div>
);

SkeletonLoader.propTypes = {
  count: PropTypes.number.isRequired,
};

export default SkeletonLoader;
