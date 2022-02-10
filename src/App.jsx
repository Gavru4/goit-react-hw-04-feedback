import "./App.css";
import { Component } from "react";
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

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (name) => {
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const good = this.state.good;
    return good ? Math.round((good / total) * 100) : 0;
  };

  render() {
    return (
      <div>
        <Section title={"Pleas leave feedback "}>
          <FeedbackList
            onLeaveFeedback={this.onLeaveFeedback}
            options={btnOptions}
          />
        </Section>

        <Section title={"Statistics"}>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default App;
