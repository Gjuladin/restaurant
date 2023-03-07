import React, { useState } from "react";
import { useAddCategory, useEditCategory } from "../../../hooks/useCategory";

//Form and Validation for Forms
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import {
  Button,
  Card,
  Col,
  Container,
  Modal,
  Row,
  Form,
} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { AiOutlinePlus } from "react-icons/ai";
import GridTableCategory from "./GridTableCategory";

const AllCategory = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { mutate: addCategory } = useAddCategory();

  const { mutate: editCategory } = useEditCategory(selectedCategory);

  const schema = yup.object({
    category_name: yup.string().required(t("required_field")),
  });

  const initialValues = {
    category_name: "",
  };
  const handleEditCategory = (id, data) => {
    editCategory({ id, data });
    setSelectedCategory(null);
  };
  const onSubmit = (data) => {
    selectedCategory
      ? handleEditCategory(selectedCategory, data)
      : addCategory(data);
    handleClose();
    reset(initialValues);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
  });
  return (
    <>
      <Container>
        <Card>
          <CardHeader className="align-items-center d-flex py-3 ">
            <h4 className="card-title mb-0 flex-grow-1">{t("Category")}</h4>
            <div className="flex-shrink-0">
              <div className="form-check form-switch form-switch-right form-switch-md">
                <Button className="specialBtn" onClick={handleShow}>
                  <AiOutlinePlus />
                </Button>
              </div>
            </div>
          </CardHeader>
          <div className="my-5">
            <GridTableCategory />
          </div>
        </Card>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title>{t("Add_Category")}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-body">
              <Row>
                <Col md={12}>
                  <Controller
                    control={control}
                    name="category_name"
                    render={({ field }) => (
                      <div className="field-input">
                        <label htmlFor="category_name">
                          {t("EnterCatName")}
                        </label>
                        <input
                          type="text"
                          name="category_name"
                          id="category_name"
                          value={field.value}
                          ref={field.ref}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                        />
                        {errors?.category_name?.message && (
                          <p className="text-danger my-1">
                            {errors?.category_name?.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </Col>
              </Row>
            </div>
            <div className="modal-footer">
              <button
                data-text="Awesome"
                className="buttonSub"
                onClick={() => {
                  handleClose();
                  setSelectedCategory(null);
                }}
              >
                <span className="actual-text">&nbsp;{t("Close")}&nbsp;</span>
                <span className="hover-text" aria-hidden="true">
                  &nbsp;{t("Close")}&nbsp;
                </span>
              </button>

              <button data-text="Awesome" className="buttonSub" type="submit">
                <span className="actual-text">&nbsp;{t("submit")}&nbsp;</span>
                <span className="hover-text" aria-hidden="true">
                  &nbsp;{t("submit")}&nbsp;
                </span>
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AllCategory;
