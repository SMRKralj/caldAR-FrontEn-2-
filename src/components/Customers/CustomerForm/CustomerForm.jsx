import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Form, Field } from "react-final-form";
import { postCustomer as postCustomerAction } from "../../../redux/actions/customersActions";
import { putCustomer as putCustomerAction } from "../../../redux/actions/customersActions";
import { hideModal as hideModalAction } from "../../../redux/actions/modalActions";
import styles from "./customerForm.module.css";
import {
  required,
  name,
  emailValidator,
  address,
  composeValidators,
} from "../../../utils/validations";
import TextInput from "../../SharedComponents/TextInput/TextInput";

const CustomerForm = (props) => {
  const onSubmitCustomer = (values) => {
    console.log(values);
    props.postCustomer(values);
    props.putCustomer(values);
    props.hideModal();
  };

  return (
    <div className={styles.addCustomerContainer}>
      <Form
        onSubmit={onSubmitCustomer}
        initialValues={{
          cuit: "",
          name: "",
          email: "",
          address: "",
          buildings: [],
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
              <label>CUIT</label>
              <Field
                name="cuit"
                component={TextInput}
                type="text"
                placeholder="CUIT"
                validate={composeValidators(required)}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label>Name</label>
              <Field
                name="name"
                component={TextInput}
                type="text"
                placeholder="Name"
                validate={composeValidators(required, name)}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label>Address</label>
              <Field
                name="address"
                component={TextInput}
                type="text"
                placeholder="Address"
                validate={composeValidators(required, address)}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label>Email</label>
              <Field
                name="email"
                component={TextInput}
                type="text"
                placeholder="Email"
                validate={composeValidators(required, emailValidator)}
              />
            </div>
            <div className={styles.inputWrapper}>
              <Field
                name="buildings"
                component={TextInput}
                label="Buildings"
                validate={required}
              ></Field>
            </div>

            <div className={styles.buttonWrapper}>
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      postCustomer: postCustomerAction,
      putCustomer: putCustomerAction,
      hideModal: hideModalAction,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(CustomerForm);
