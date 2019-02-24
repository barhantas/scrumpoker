import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Input, InputNumber } from 'antd';

const { TextArea } = Input;

class CreateSprintForm extends React.Component {
  handleSubmit = (e) => {
    const { form, createSprint } = this.props;
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        createSprint(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { sprintCreating } = this.props;
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

CreateSprintForm.propTypes = {
  createSprint: PropTypes.func,
  sprintCreating: PropTypes.bool,
};

export default Form.create()(CreateSprintForm);
