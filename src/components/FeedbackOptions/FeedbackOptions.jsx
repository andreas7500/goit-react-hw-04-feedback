import shortid from 'shortid';
import PropTypes from 'prop-types';
import style from './feedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={style.list}>
      {options.map(option => (
        <li className={style.item} key={shortid.generate()}>
          <button
            type="button"
            className={style.button}
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
export default FeedbackOptions;

FeedbackOptions.prototypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
