import "./App.css";
import { useState } from "react";
import FeedbackList from "./Components/FeedbackList/FeedbackList";
import Section from "./Components/Section/Section";
import Statistics from "./Components/Statistics/Statistics";
const btnOptions = [
  {
    id: "good",
    title: "Good",
  },
  {
    id: "neutral",
    title: "Neutral",
  },
  {
    id: "bad",
    title: "Bad",
  },
];
const stateList = {
  good: 0,
  neutral: 0,
  bad: 0,
};
const App = () => {
  const [state, setState] = useState(stateList);
  const onLeaveFeedback = (name) => {
    setState((prevStateList) => ({
      ...prevStateList,
      [name]: prevStateList[name] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;

    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const good = state.good;
    return good ? Math.round((good / total) * 100) : 0;
  };

  return (
    <div>
      <Section title={"Pleas leave feedback "}>
        <FeedbackList onLeaveFeedback={onLeaveFeedback} options={btnOptions} />
      </Section>

      <Section title={"Statistics"}>
        <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};

export default App;
