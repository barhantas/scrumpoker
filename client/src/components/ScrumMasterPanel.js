import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Input } from 'antd';
import { finishStoryVoting } from '../actions';

class ScrumMasterPanel extends React.Component {
  state = {
    finalValue: '',
  };
  render() {
    const { activeStory, finishStoryVoting } = this.props;
    const { finalValue } = this.state;
    const buttonText = activeStory
      ? `End Voting for ${activeStory.name}`
      : 'Estimation finished';
    return (
      <div className="scrum-master-panel">
        {activeStory && `${activeStory.name} is active`}
        <p>voter 1 : 13</p>
        <p>voter 2 : 21</p>
        <p>voter 3 : 13</p>
        <p>voter 4 : 21</p>
        <p>scrum master: 13</p>
        <Input
          disabled={!activeStory}
          label="Final Score"
          value={finalValue}
          onChange={(e) => this.setState({ finalValue: e.target.value })}
        />
        <Button
          onClick={() => {
            finishStoryVoting(finalValue);
            this.setState({ finalValue: '' });
          }}
          disabled={!activeStory || !finalValue}>
          {buttonText}
        </Button>
      </div>
    );
  }
}

ScrumMasterPanel.propTypes = {
  finishStoryVoting: PropTypes.func,
  activeStory: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  finishStoryVoting: (finalValue) => dispatch(finishStoryVoting(finalValue)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScrumMasterPanel);
