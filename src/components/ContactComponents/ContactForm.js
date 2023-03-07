import React, { useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import cuttingVideo from "../../assets/pizzaCutting.mp4";
import ReactPlayer from "react-player";

//Form and Validation for Forms
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { useTranslation } from "react-i18next";

//EmailJs for sending emails
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const { t } = useTranslation();
  const form = useRef();

  const schema = yup.object({
    fullname: yup.string().required(t("required_field")),
    email: yup.string().email().required(t("required_field")),
    phone: yup.string().required(t("required_field")),
    numberPeople: yup.string().required(t("required_field")),
    comment: yup.string(),
  });
  const initialValues = {
    fullname: "",
    email: "",
    phone: "",
    comment: "",
  };
  const options = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
  ];
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
  });

  const onSubmit = (e) => {
    emailjs
      .sendForm(
        "service_33pqy1f",
        "template_82cqr8u",
        form.current,
        "_2NAJd2q7YxlWMdun"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Row className="g-5 py-5">
        <Col md={6}>
          <ReactPlayer url={cuttingVideo} width="100%" height="100%" controls />
        </Col>
        <Col md={6} className="text-white">
          <Form onSubmit={handleSubmit(onSubmit)} ref={form} onReset={reset}>
            <Row className="mb-5">
              <Col md={6} className="my-3">
                <Controller
                  control={control}
                  name="fullname"
                  render={({ field }) => (
                    <div className="field-input">
                      <label htmlFor="fullname">{t("FullName")}</label>
                      <input
                        type="text"
                        name="fullname"
                        id="fullname"
                        value={field.value}
                        ref={field.ref}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                      />
                      {errors?.fullname?.message && (
                        <p className="text-danger my-1">
                          {errors?.fullname?.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </Col>
              <Col md={6} className="my-3">
                <Controller
                  control={control}
                  name="phone"
                  render={({ field }) => (
                    <div className="field-input text-white">
                      <label htmlFor="phone">{t("EnterPhone")}</label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={field.value}
                        ref={field.ref}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                      />
                      {errors?.phone?.message && (
                        <p className="text-danger my-1">
                          {errors?.phone?.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </Col>
              <Col md={12} className="my-3">
                <Controller
                  control={control}
                  name="email"
                  render={({ field }) => (
                    <div className="field-input">
                      <label htmlFor="email">{t("EnterEmail")}</label>
                      <input
                        type="mail"
                        name="email"
                        id="email"
                        value={field.value}
                        ref={field.ref}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                      />
                      {errors?.email?.message && (
                        <p className="text-danger my-1">
                          {errors?.email?.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </Col>
              <Col md={12} className="my-3">
                <Controller
                  control={control}
                  name="numberPeople"
                  render={({ field }) => (
                    <div className="field-input">
                      <label htmlFor="numberPeople">
                        {t("EnterNumberPeople")}
                      </label>
                      <select
                        name="numberPeople"
                        id="numberPeople"
                        value={field.value}
                        ref={field.ref}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        className="custom-select"
                      >
                        {options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {errors?.numberPeople?.message && (
                        <p className="text-danger my-1">
                          {errors?.numberPeople?.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </Col>

              <Col md={12} className="my-3">
                <Controller
                  control={control}
                  name="comment"
                  render={({ field }) => (
                    <div className="field-input">
                      <label htmlFor="comment">{t("EnterComment")}</label>
                      <textarea
                        type="text"
                        name="comment"
                        id="comment"
                        value={field.value}
                        ref={field.ref}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                      />
                      {errors?.comment?.message && (
                        <p className="text-danger my-1">
                          {errors?.comment?.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </Col>
              <Col md={12}>
                <button data-text="Awesome" className="buttonSub" type="submit">
                  <span className="actual-text">&nbsp;{t("submit")}&nbsp;</span>
                  <span className="hover-text" aria-hidden="true">
                    &nbsp;{t("submit")}&nbsp;
                  </span>
                </button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default ContactForm;
