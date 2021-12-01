import s from './Statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={s.StatisticsList}>
      <li>
        <p className="">
          Good: <span>{good}</span>
        </p>
      </li>
      <li>
        <p className="">
          Neutral: <span>{neutral}</span>
        </p>
      </li>
      <li>
        <p className="">
          Bad: <span>{bad}</span>
        </p>
      </li>
      <li>
        <p className="">
          Total: <span>{total}</span>
        </p>
      </li>
      <li>
        <p className="">
          Positive feedback: <span>{positivePercentage}%</span>
        </p>
      </li>
    </ul>
  );
};

export default Statistics;
