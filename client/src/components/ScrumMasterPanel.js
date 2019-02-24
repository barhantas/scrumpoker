import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Input, Row } from 'antd';
import { finishStoryVoting } from '../actions';

class ScrumMasterPanel extends React.Component {
  state = {
    finalValue: '',
  };
  render() {
    const {
      activeStory,
      finishStoryVoting,
      scrumMasterEstimation,
      sprint,
    } = this.props;
    const { finalValue } = this.state;
    const buttonText = activeStory
      ? `Finish Voting for ${activeStory.name}`
      : 'Sprint Estimation Finished';
    return (
      <div className="scrum-master-panel">
        <Row>
          {activeStory && (
            <React.Fragment>
              {`You are voting for story : ${activeStory.name}`}
              {activeStory.estimations.map(
                (estimation, index) =>
                  index < sprint.numberOfVoters && (
                    <p key={index}>{`voter ${index + 1} : ${
                      estimation.value
                    }`}</p>
                  )
              )}
              <p>Scrum master: {scrumMasterEstimation || 'Not Voted'}</p>
            </React.Fragment>
          )}
        </Row>
        <Row>
          <div className="finalize-session-pane">
            <Input
              disabled={!activeStory}
              placeholder="Final Score"
              value={finalValue}
              onChange={(e) => this.setState({ finalValue: e.target.value })}
            />
            <Button
              className="finalize-story-button"
              onClick={() => {
                finishStoryVoting(finalValue);
                this.setState({ finalValue: '' });
              }}
              disabled={!activeStory || !finalValue}>
              {buttonText}
            </Button>
          </div>
        </Row>
      </div>
    );
  }
}

ScrumMasterPanel.propTypes = {
  finishStoryVoting: PropTypes.func,
  activeStory: PropTypes.object,
  sprint: PropTypes.object,
  scrumMasterEstimation: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    sprint: state.rootReducer.sprint,
    scrumMasterEstimation: state.rootReducer.scrumMasterEstimation,
  };
};

const mapDispatchToProps = (dispatch) => ({
  finishStoryVoting: (finalValue) => dispatch(finishStoryVoting(finalValue)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScrumMasterPanel);
