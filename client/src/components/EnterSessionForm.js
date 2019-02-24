import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Button, Input } from 'antd';
import { loadSprint } from '../actions';

class EnterSessionForm extends React.Component {
  handleSubmit = (e) => {
    const { form, loadSprint } = this.props;
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        loadSprint(values.sessionId);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { location } = this.props;
    return (
      <React.Fragment>
        <Form className="my-form-layout">
          <Form.Item label="Session ID">
            {getFieldDecorator('sessionId', {
              initialValue: location.sprintId,
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
    );
  }
}

EnterSessionForm.propTypes = {
  createSprint: PropTypes.func,
  loadSprint: PropTypes.func,
  sprintCreating: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  loadSprint: (sessionId) => dispatch(loadSprint(sessionId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(EnterSessionForm));
