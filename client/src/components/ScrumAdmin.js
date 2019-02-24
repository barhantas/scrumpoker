import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import StoryListTable from './StoryListTable';
import ActiveStory from './ActiveStory';
import io from 'socket.io-client';
import { SOCKET_URL } from '../constants';
import {
  loadSprint,
  captureStoryUpdate,
  captureEstimationUpdate,
} from '../actions';

class ScrumAdmin extends React.Component {
  componentDidMount() {
    const { captureStoryUpdate, sprint } = this.props;
    const socket = io(SOCKET_URL);

    socket.on('connect', () => {});
    socket.on('story-channel=' + sprint._id, (story) => {
      console.log(story);
      captureStoryUpdate(story);
    });

    socket.on('estimation', (estimation) => {
      console.log(estimation);
      captureEstimationUpdate(estimation);
    });
  }
  render() {
    return (
      <div className="scrum-admin-panel">
        <Row gutter={32}>
          <Col span={12}>
            <p>Story List</p>
            <StoryListTable />
          </Col>
          <Col span={12}>
            <p>Active Story </p>
            <ActiveStory />
          </Col>
        </Row>
      </div>
    );
  }
}

ScrumAdmin.propTypes = {
  createSprint: PropTypes.string,
  activeStoryId: PropTypes.string,
  captureStoryUpdate: PropTypes.func,
  loadSprint: PropTypes.func,
  sprint: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    sprint: state.rootReducer.sprint,
  };
};

const mapDispatchToProps = (dispatch) => ({
  captureStoryUpdate: (story) => dispatch(captureStoryUpdate(story)),
  loadSprint: (id) => dispatch(loadSprint(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScrumAdmin);
