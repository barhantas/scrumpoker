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
        {activeStory && (
          <React.Fragment>
            {`${activeStory.name} is active`}
            {activeStory.estimations.map((estimation, index) => (
              <p key={index}>{`voter ${index} : ${estimation.value}`}</p>
            ))}
            <p>scrum master: 13</p>
          </React.Fragment>
        )}
        <Input
          disabled={!activeStory}
          placeholder="Final Score"
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
