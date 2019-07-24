import React from "react";

const FormField = ({ formdata, change, id, element }) => {
  const showError = () => {
    let errorMessage = null;
    if (formdata.validation && !formdata.valid) {
      errorMessage = (
        <div className="error_label">{formdata.validationMessage}</div>
      );
    }
    return errorMessage;
  };
  const renderTemplate = () => {
    let formTemplate = null;
    switch (formdata.element) {
      case "input":
        formTemplate = (
          <div className="formBlock">
            <input
              {...formdata.config}
              value={formdata.value}
              onChange={event => change({ event, id })}
              onBlur={event => change({ event, id, blur: true })}
            />
            {showError()}
          </div>
        );
        break;

      default:
        return (formTemplate = null);
    }

    return formTemplate;
  };

  return <div>{renderTemplate()}</div>;
};

export default FormField;
