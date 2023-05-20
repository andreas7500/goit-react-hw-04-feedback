// import { Component } from 'react';
// import Section from './Section/Section';
// import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
// import Statistics from './Statistics/Statistics';
// import Notification from './Notification/Notification ';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleLeaveFeedback = e => {
//     const name = e.target.name;
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//   };
//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };
//   countPositivePercentage = () => {
//     const total = this.countTotalFeedback();
//     const { good } = this.state;
//     const percentage = (good * 100) / total;
//     return Math.round(percentage);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const options = ['good', 'neutral', 'bad'];
//     const total = this.countTotalFeedback();
//     const positivPersentage = this.countPositivePercentage();
//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.handleLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {total ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivPersentage={positivPersentage}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
// import Notification from './Notification/Notification ';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositivePercentage = () => {
    const total = countTotalFeedback();

    return Math.round((good * 100) / total);
  };

  const option = ['good', 'neutral', 'bad'];
  const total = countTotalFeedback();
  const positivPersentage = countPositivePercentage();
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={option}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivPersentage={positivPersentage}
        />
      </Section>
    </div>
  );
};
