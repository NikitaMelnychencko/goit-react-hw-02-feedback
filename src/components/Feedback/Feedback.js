import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';
import s from './FeedBack.module.scss';
import { nanoid } from 'nanoid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.FeedBackList}>
      {options.map(option => (
        <FeedbackItem
          key={nanoid()}
          option={option}
          onLeaveFeedback={onLeaveFeedback}
        />
      ))}
    </ul>
  );
};

Notification.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
