import PropTypes from 'prop-types';

export default function Feedbacks({ options, onFeedbacks }) {
  return (
    <ul className="">
      {options.map(element => {
        return (
          <li key={element}>
            <button
              type="button"
              name={element}
              onClick={onFeedbacks}
              className="btn"
            >
              {element}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

Feedbacks.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

