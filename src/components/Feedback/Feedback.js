import PropTypes from 'prop-types';
import s from './FeedBack.module.scss';

const FeedbackOptions = ({ options }) => {
  return (
    <ul className={s.FeedBackList}>
      <li>
        <button className={s.Button} onClick={options.good}>
          Good
        </button>
      </li>
      <li>
        <button className={s.Button} onClick={options.neutral}>
          Neutral
        </button>
      </li>
      <li>
        <button className={s.Button} onClick={options.bad}>
          Bad
        </button>
      </li>
    </ul>
  );
};

Notification.propTypes = {
  options: PropTypes.objectOf(
    PropTypes.shape({
      good: PropTypes.string.isRequired,
      neutral: PropTypes.string.isRequired,
      bad: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default FeedbackOptions;
