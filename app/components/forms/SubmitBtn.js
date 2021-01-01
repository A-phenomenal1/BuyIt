import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

function SubmitBtn({ title }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPressEvent={handleSubmit} />;
}

export default SubmitBtn;
