import PropTypes from 'prop-types';

function Card({ children, className = '' }) {
  return (
    <div className={`overflow-hidden rounded-lg bg-white shadow-md ${className}`}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.Header = function CardHeader({ children, className = '' }) {
  return (
    <div className={`p-0 ${className}`}>
      {children}
    </div>
  );
};

Card.Header.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.Content = function CardContent({ children, className = '' }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

Card.Content.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card; 