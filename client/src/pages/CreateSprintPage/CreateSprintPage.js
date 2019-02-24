import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createSprint } from '../../actions';
import { Form, Button, Input, InputNumber } from 'antd';

const { TextArea } = Input;

class CreateSprintPage extends React.Component {
  handleSubmit = (e) => {
    const { form, createSprint } = this.props;
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        createSprint(values, (path) => this.props.history.push(path));
      }
    });
  };

  render() {
    const { sprintCreating } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="create-sprint-page">
        <Form className="create-session-form">
          <Form.Item label="Session Name">
            {getFieldDecorator('sessionName', {
              rules: [
                {
                  required: true,
                  max: 200,
                },
              ],
            })(<Input placeholder="Session Name" />)}
          </Form.Item>
          <Form.Item label="Number of Voters">
            {getFieldDecorator('numberOfVoters', {
              rules: [
                {
                  required: true,
                  type: 'number',
                },
              ],
            })(<InputNumber placeholder="Number of Voters" min={1} />)}
          </Form.Item>
          <Form.Item label="Paste your story list (Each line will be converted as a story)">
            {getFieldDecorator('stories', {
              rules: [{ required: true }],
            })(<TextArea rows={10} />)}
          </Form.Item>
        </Form>
        <Button
          type="primary"
          htmlType="submit"
          className="start-session-button"
          onClick={this.handleSubmit}
          loading={sprintCreating}>
          Start Session
        </Button>
      </div>
    );
  }
}

CreateSprintPage.propTypes = {
  createSprint: PropTypes.func,
  sprintCreating: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    sprintCreating: state.rootReducer.sprintCreating,
  };
};

const mapDispatchToProps = (dispatch) => ({
  createSprint: (sprint, callback) => dispatch(createSprint(sprint, callback)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(CreateSprintPage));
