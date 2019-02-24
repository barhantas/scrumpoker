import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Button, Input } from 'antd';
import io from 'socket.io-client';
import { SOCKET_URL } from '../../constants';
import { loadSprint } from '../../actions';
import ScrumAdmin from '../../components/ScrumAdmin';

class JoinPokerPage extends React.Component {
  componentDidMount() {}

  handleSubmit = (e) => {
    const { form, loadSprint } = this.props;
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        loadSprint(values.sessionId);
        //form.resetFields();
        const socket = io(SOCKET_URL);

        socket.on('connect', () => {
          //console.log('hi');
        });
        socket.on('message', (message) => {
          //console.log(message.context);
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { sprint } = this.props;

    return (
      <div className="create-sprint-page">
        {sprint._id ? (
          <ScrumAdmin {...this.props} />
        ) : (
          <React.Fragment>
            <Form className="create-session-form">
              <Form.Item label="Session ID">
                {getFieldDecorator('sessionId', {
                  rules: [
                    {
                      required: true,
                      max: 200,
                    },
                  ],
                })(<Input placeholder="Session ID" />)}
              </Form.Item>
            </Form>
            <Button
              type="primary"
              htmlType="submit"
              className="start-session-button"
              onClick={this.handleSubmit}>
              Enter Session
            </Button>
          </React.Fragment>
        )}
      </div>
    );
  }
}

JoinPokerPage.propTypes = {
  loadSprint: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { sprint: state.rootReducer.sprint };
};

const mapDispatchToProps = (dispatch) => ({
  loadSprint: (sessionId) => dispatch(loadSprint(sessionId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(JoinPokerPage));
