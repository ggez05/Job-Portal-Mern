import { Box, Button, InputBase } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const validationSchema = yup.object({
  search: yup
    .string("Enter your search query")
    .required("this field can not be empty"),
});

const SearchInputEl = () => {
  const navigate = useNavigate();

  const onSubmit = (values, actions) => {
    //alert(values.search);
    const { search } = values;
    if (search.trim()) {
      navigate(`/search/${search}`);
    } else {
      navigate("/");
    }
    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      search: "",
    },

    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} style={{ width: "50%" }}>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        {/* <Search> */}

        <InputBase
          sx={{
            bgcolor: "black",
            padding: "10px",
            color: "white",
            borderRadius: "0px",
            width: "80%",
          }}
          fullWidth={false}
          id="search"
          name="search"
          label="search"
          placeholder="ex: developer, front end"
          value={values.search}
          onChange={handleChange}
          error={touched.search && Boolean(errors.search)}
          // helperText={touched.search && errors.search}
        />

        <Button
          color="primary"
          variant="contained"
          type="submit"
          disabled={isSubmitting}
          style={{
            borderRadius: "0px 25px 25px 0px",
            backgroundColor: "black",
            borderLeft: "2px solid white",
            boxShadow: "unset",
          }}
        >
          Search
        </Button>
      </Box>
      <Box component="span" sx={{ color: "orange" }}>
        {touched.search && errors.search}
      </Box>
    </form>
  );
};

export default SearchInputEl;
