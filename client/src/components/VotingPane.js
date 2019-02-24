import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { createEstimation } from '../actions';

const cards = [
  '1',
  '2',
  '3',
  '5',
  '8',
  '13',
  '21',
  '34',
  '55',
  '89',
  '134',
  '?',
];

class VotingPane extends React.Component {
  state = {
    selectedCard: undefined,
  };
  render() {
    const { createEstimation, activeStoryVoted, activeStory } = this.props;
    const { selectedCard } = this.state;
    return (
      <div className="voting-pane">
        {cards.map((card, index) => (
          <Button
            disabled={activeStoryVoted || !activeStory}
            key={index}
            className="poker-card"
            onClick={() => {
              createEstimation(card);
              this.setState({ selectedCard: card });
            }}>
            {card}
          </Button>
        ))}
        {selectedCard && 'Selected card is :' + selectedCard}
      </div>
    );
  }
}

VotingPane.propTypes = {
  createEstimation: PropTypes.func,
  activeStory: PropTypes.object,
  activeStoryVoted: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    activeStoryVoted: state.rootReducer.activeStoryVoted,
  };
};

const mapDispatchToProps = (dispatch) => ({
  createEstimation: (value) => dispatch(createEstimation(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VotingPane);
