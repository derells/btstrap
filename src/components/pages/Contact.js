import React, { Component } from "react";
import Fields from "../Common/Fields";
import { withFormik } from "formik";
import * as yup from "yup";

const fields = {
  sections: [
    [
      {
        name: "name",
        elementName: "input",
        type: "text",
        placeholder: "Your name*",
      },
      {
        name: "email",
        elementName: "input",
        type: "email",
        placeholder: "Your email*",
      },
      {
        name: "phone",
        elementName: "input",
        type: "text",
        placeholder: "Your Phone number*",
      },
    ],

    [
      {
        name: "message",
        elementName: "textarea",
        type: "text",
        placeholder: "Type your message*",
      },
    ],
  ],
};

class Contact extends Component {
  render() {
    return (
      <section class="page-section" id="contact">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">Contact Us</h2>
            <h3 class="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>

          <form
            id="contactForm"
            data-sb-form-api-token="API_TOKEN"
            name="sentMessage"
            onSubmit={this.props.handleSubmit}
            noValidate="novalidate"
          >
            <div class="row align-items-stretch mb-5">
              <div class="col-md-6">
                <div class="form-group">
                  {fields.sections.map((section, sectionIndex) => {
                    console.log(
                      "rendering section",
                      sectionIndex,
                      "with",
                      section
                    );
                    return (
                      <div key={sectionIndex}>
                        {section.map((fields, i) => {
                          return (
                            <Fields
                              {...fields}
                              key={i}
                              values={this.props.values[fields.name]}
                              name={fields.name}
                              onChange={this.props.handleChange}
                              onBlur={this.props.handleBlur}
                              touched={this.props.touched[fields.name]}
                              errors={this.props.errors[fields.name]}
                            />
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div class="text-center">
              <button
                className="btn btn-primary btn-xl text-uppercase"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    phone: " ",
    message: "",
  }),
  validationSchema: yup.object().shape({
    name: yup
      .string()
      .min(2, "Please enter a real name")
      .required("You must fill this field"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("We need your email to reach you"),
    phone: yup
      .string()
      .min(10, "phone number must be 10 digits or more")
      .max(15, "Number can not be more than 15 digits")
      .required("We need a phone number to contact you"),
    message: yup
      .string()
      .max(750, "The length of your message is too long")
      .required("Mmessage is required"),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    alert("You've submitted the form", JSON.stringify(values));
  },
})(Contact);
