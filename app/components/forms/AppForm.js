import React from "react";
import { Formik } from "formik";

function AppForm({ onSubmit, validationSchema, initialValues, children }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
