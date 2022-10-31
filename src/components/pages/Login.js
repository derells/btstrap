import React, { Component } from "react";
import Fields from "../Common/Fields";
import { withFormik } from "formik";
import { Connect } from "react-redux";
import * as authActions from "../../store/actions/authActions";
import * as Yup from "yup";

const fields = [
  {
    name: "email",
    elementName: "input",
    type: "email",
    placeholder: "Your email",
  },
  {
    name: "password",
    elementName: "input",
    type: "password",
    placeholder: "Your Password",
  },
];
class Login extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="container">
          <div className="login-form">
            <div className="row">
              <h1>Login</h1>
            </div>
            <div className="row">
              <form onSubmit={this.props.handleSubmit}>
                {fields.map((f, i) => {
                  return (
                    <div className="col-md-12">
                      <Fields
                        key={i}
                        {...f}
                        value={this.props.values[f.name]}
                        name={f.name}
                        onChange={this.props.handleChange}
                        onBlur={this.props.handleBlur}
                        touched={this.props.touched[f.name]}
                        errors={this.props.errors[f.name]}
                      />
                    </div>
                  );
                })}
                <div className="col-md-12">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, pass) => {
      dispatch(authActions.login(email, pass));
    },
  };
};

export default connect(
  withFormik({
    mapPropsToValues: () => ({
      email: "",
      password: "",
    }),
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Email is invalid")
        .required("You need to use a real email address"),
      password: Yup.string().required("You need to enter your password"),
    }),
    handleSubmit: (values, { setSubmitting }) => {
      console.log("login attempt", values);
    },
  })
)(Login);
