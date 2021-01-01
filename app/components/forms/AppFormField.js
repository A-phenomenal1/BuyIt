import React from "react";

import AppTextInput from "../AppTextInput";
import ErrorMsg from "./ErrorMsg";
import { useFormikContext } from "formik";

function AppFormField({ name, width, ...otherprops }) {
  const {
    setFieldTouched,
    touched,
    setFieldValue,
    values,
    errors,
  } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherprops}
      />
      <ErrorMsg error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
