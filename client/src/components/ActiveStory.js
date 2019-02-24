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
    const { isScrumMaster } = this.props;
    return (
      <div className="active-story">
        {isScrumMaster ? (
          <Row>
            <Col span={12}>
              <VotingPane activeStory={activeStory} />
            </Col>
            <Col span={12}>
              <ScrumMasterPanel activeStory={activeStory} />
            </Col>
          </Row>
        ) : (
          <Row>
            <Col span={24}>
              <VotingPane activeStory={activeStory} />
            </Col>
          </Row>
        )}
      </div>
    );
  }
}

ActiveStory.propTypes = {
  sprint: PropTypes.object,
  isScrumMaster: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    sprint: state.rootReducer.sprint,
    isScrumMaster: state.rootReducer.isScrumMaster,
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveStory);
