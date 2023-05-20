import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification ';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = e => {
    const name = e.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositivePercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    const percentage = (good * 100) / total;
    return Math.round(percentage);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = ['good', 'neutral', 'bad'];
    const total = this.countTotalFeedback();
    const positivPersentage = this.countPositivePercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivPersentage={positivPersentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
