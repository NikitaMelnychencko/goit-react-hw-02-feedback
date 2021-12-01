import s from './FeedBack.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
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
export default FeedbackOptions;
