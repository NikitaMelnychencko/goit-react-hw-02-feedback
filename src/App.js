import React from 'react';
import FeedbackOptions from './components/Feedback/Feedback';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
class App extends React.Component {
  state = {
    goodValue: 0,
    neutralValue: 0,
    badValue: 0,
    totalValue: 0,
    positiveFeedbackValue: 0,
    blockVision: true,
  };
  goodIncrement = () => {
    this.setState(prevState => ({
      goodValue: prevState.goodValue + 1,
      blockVision: false,
    }));
    this.countTotalFeedback();
  };
  neutralIncrement = () => {
    this.setState(prevState => ({
      neutralValue: prevState.neutralValue + 1,
      blockVision: false,
    }));
    this.countTotalFeedback();
  };
  badIncrement = () => {
    this.setState(prevState => ({
      badValue: prevState.badValue + 1,
      blockVision: false,
    }));
    this.countTotalFeedback();
  };
  countTotalFeedback = () => {
    this.setState(prevState => ({
      totalValue:
        prevState.goodValue + prevState.neutralValue + prevState.badValue,
    }));
    this.countPositiveFeedbackPercentage();
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positiveFeedbackValue: (prevState.goodValue / prevState.totalValue) * 100,
    }));
  };
  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={{
              good: this.goodIncrement,
              neutral: this.neutralIncrement,
              bad: this.badIncrement,
            }}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.state.blockVision ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.goodValue}
              neutral={this.state.neutralValue}
              bad={this.state.badValue}
              total={this.state.totalValue}
              positivePercentage={this.state.positiveFeedbackValue}
            />
          )}
        </Section>
      </>
    );
  }
}
export default App;
