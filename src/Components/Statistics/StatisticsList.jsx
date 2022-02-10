import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const StatisticsList = ({ props }) => {
  const { bad, good, neutral, total, positivePercentage } = props;
  return (
    <div className={s.wrapper}>
      <li className={s.item}>Goog: {good}</li>
      <li className={s.item}>Neutral: {neutral}</li>
      <li className={s.item}>Bad: {bad}</li>
      <li className={s.item}>Total: {total}</li>
      <li className={s.item}>Positive feedback: {positivePercentage}%</li>
    </div>
  );
};

export default StatisticsList;

StatisticsList.propTypes = {
  props: PropTypes.shape({
    bad: PropTypes.number.isRequired,
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }),
};
