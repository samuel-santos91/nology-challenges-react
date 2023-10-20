import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useContext } from "react";
import { FormDataContext } from "../../context/FormDataContextProvider";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import styles from "./FormSection.module.scss";

const FormSection = () => {
  const {setData, setLogoPath} = useContext(FormDataContext)

  // Validations to handle errors
  // Create an object with YUP
  const schema = yup.object({
    business: yup.string().required("Please enter a business name"),
    name: yup.string().required("Please enter a your name"),
    title: yup.string().required("Please enter a job title"),
    email: yup
      .string()
      .required("Please enter an email")
      .email("Email must be a valid email address"),
    phone: yup
      .string()
      .required("Please enter a phone number")
      .min(10, "Phone number must be at least 10 digits"),
    address: yup.string().required("Please enter an address"),
  });

  const {
    register, //save each data element
    handleSubmit, //gather all data submitted
    formState: { errors, isSubmitSuccessful }, //errors(show errors in an object), isSubmitSuccessful(returns true or false)
    reset, //reset form
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  //to display images temporarily, we need to create an URL object
  const imageHandler = (e) => {
    const img = e.target.files[0];
    const path = URL.createObjectURL(img);
    setLogoPath(path)
  };

  return (
    <form onSubmit={handleSubmit(setData)}>
      <div className={styles["input-section"]}>
        <label htmlFor="business">Business Name</label>
        <input id="business" type="text" {...register("business")} />
        {errors.business && (
          <p className={styles["input-section--error"]}>
            {errors.business.message}
          </p>
        )}
      </div>

      <div className={styles["input-section"]}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" {...register("name")} />
        {errors.name && (
          <p className={styles["input-section--error"]}>
            {errors.name.message}
          </p>
        )}
      </div>

      <div className={styles["input-section"]}>
        <label htmlFor="title">Job Title</label>
        <input id="title" type="text" {...register("title")} />
        {errors.title && (
          <p className={styles["input-section--error"]}>
            {errors.title.message}
          </p>
        )}
      </div>

      <div className={styles["input-section"]}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...register("email")} />
        {errors.email && (
          <p className={styles["input-section--error"]}>
            {errors.email.message}
          </p>
        )}
      </div>

      <div className={styles["input-section"]}>
        <label htmlFor="phone">Contact Number</label>
        <input id="phone" type="number" {...register("phone")} />
        {errors.phone && (
          <p className={styles["input-section--error"]}>
            {errors.phone.message}
          </p>
        )}
      </div>

      <div className={styles["input-section"]}>
        <label htmlFor="address">Address</label>
        <input id="address" type="text" {...register("address")} />
        {errors.address && (
          <p className={styles["input-section--error"]}>
            {errors.address.message}
          </p>
        )}
      </div>

      <div className={styles["input-section"]}>
        <label htmlFor="logo">Logo</label>
        <input id="logo" type="file" onChange={imageHandler}/>
      </div>

      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default FormSection;
