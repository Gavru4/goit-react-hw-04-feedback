import s from "./Section.module.css";
import PropTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={s.title}>{title}</h2>

      {children}
    </section>
  );
};
export default Section;

Section.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};
