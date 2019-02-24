import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import VotingPane from './VotingPane';
import ScrumMasterPanel from './ScrumMasterPanel';

class ActiveStory extends React.Component {
  render() {
    const stories = (this.props.sprint || {}).stories || [];
    const activeStory = stories.find((story) => story.status === 'Active');
    return (
      <div className="active-story">
        <Row>
          <Col span={12}>
            <VotingPane activeStory={activeStory} />
          </Col>
          <Col span={12}>
            <ScrumMasterPanel activeStory={activeStory} />
          </Col>
        </Row>
      </div>
    );
  }
}

ActiveStory.propTypes = { sprint: PropTypes.object };

const mapStateToProps = (state) => {
  return {
    sprint: state.rootReducer.sprint,
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveStory);
