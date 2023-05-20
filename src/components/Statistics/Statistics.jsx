import PropTypes from 'prop-types';
import style from './statistics.module.css';
import Notification from '../Notification/Notification ';

const Statistics = ({ good, neutral, bad, total, positivPersentage }) => {
  return total > 0 ? (
    <ul>
      <li className={style.item}>Good: {good}</li>
      <li className={style.item}>Neutral: {neutral}</li>
      <li className={style.item}>Bad: {bad}</li>
      <li className={style.item}>Total: {total}</li>
      <li className={style.item}>
        Positive feedback: {positivPersentage + '%'}
      </li>
    </ul>
  ) : (
    <Notification message="There is no feedback" />
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivPersentage: PropTypes.number.isRequired,
};
