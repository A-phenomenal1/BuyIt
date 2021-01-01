import React from "react";
import { useFormikContext } from "formik";

import ErrorMsg from "./ErrorMsg";
import ImageInputList from "../ImageInputList";

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name]; //alias
  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };
  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };
  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onRemoveImage={handleRemove}
        onAddImage={handleAdd}
      />
      <ErrorMsg error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
