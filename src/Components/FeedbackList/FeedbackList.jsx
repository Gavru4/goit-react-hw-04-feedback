import PropTypes from "prop-types";
import s from "./FeedbackList.module.css";

const FeedbackList = ({ onLeaveFeedback, options }) => {
  return (
    <ul className={s.list}>
      {options.map((el) => {
        return (
          <li key={el.id}>
            <button
              className={s.btn}
              onClick={() => {
                onLeaveFeedback(el.id);
              }}
              type="button"
            >
              {el.title}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FeedbackList;

FeedbackList.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};
