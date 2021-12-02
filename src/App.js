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
    total: 0,
    positiveFeedback: 0,
    blockVision: true,
  };

  updateIncrement = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
      blockVision: false,
    }));
    this.countTotalFeedback();
  };
  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
    this.countPositiveFeedbackPercentage();
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positiveFeedback: (prevState.good / prevState.total) * 100,
    }));
  };
  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.updateIncrement}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.state.blockVision ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.positiveFeedback}
            />
          )}
        </Section>
      </>
    );
  }
}
export default App;
