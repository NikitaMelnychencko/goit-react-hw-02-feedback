import PropTypes from 'prop-types';
import s from './FeedBack.module.scss';

const FeedbackItem = ({ option, onLeaveFeedback }) => {
  return (
    <li>
      <button className={s.Button} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    </li>
  );
};

Notification.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackItem;
