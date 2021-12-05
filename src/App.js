import React from 'react';
import FeedbackOptions from './components/Feedback/Feedback';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  updateIncrement = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };
  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };
  countPositiveFeedbackPercentage = total => {
    const positiveFeedback = (this.state.good / total) * 100;
    return positiveFeedback;
  };
  render() {
    const totalValue = this.countTotalFeedback();
    const positiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage(totalValue);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.updateIncrement}
          />
        </Section>
        <Section title="Statistics">
          {!totalValue ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalValue}
              positivePercentage={positiveFeedbackPercentage}
            />
          )}
        </Section>
      </>
    );
  }
}
export default App;
