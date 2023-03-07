import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import useCategories from "../../../hooks/useCategory";
import { useAddMenuItem, useEditMenuItems } from "../../../hooks/useMenuItem";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import {
  Button,
  Card,
  Col,
  Container,
  Modal,
  ModalHeader,
  Row,
  Form,
} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { AiOutlinePlus } from "react-icons/ai";
import GridTableMenu from "./GridTableMenu";

const AllMenuItem = () => {
  const { t } = useTranslation();
  const [selectedMenuItem, setSelectedMenuItem] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { data: categories } = useCategories();
  const categoriesArray = categories?.map((cate) => ({
    label: cate.category_name,
    value: cate._id,
    id: cate._id,
  }));

  const { mutate: addMenuItem } = useAddMenuItem();

  const { mutate: editMenuItem } = useEditMenuItems(selectedMenuItem);

  const menuItemVal = categories?.map((cat) => cat._id);
  const schema = yup.object({
    name: yup.string().required(t("required_field")),
    price: yup.string().required(t("required_field")),
    description: yup.string().required(t("required_field")),
    id_category:
      menuItemVal &&
      yup.string().oneOf(menuItemVal).required(t("required_field")),
  });
  const initialValues = {
    name: "",
    price: "",
    description: "",
    id_category: "",
  };
  const handleEditMeniItem = (id, data) => {
    editMenuItem({ id, data });
    setSelectedMenuItem(null);
  };
  const onSubmit = (data) => {
    selectedMenuItem
      ? handleEditMeniItem(selectedMenuItem, data)
      : addMenuItem(data);
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
          <CardHeader className="align-items-center d-flex py-3">
            <h4 className="card-title mb-0 flex-grow-1">{t("MenuItems")}</h4>
            <div className="flex-shrink-0">
              <div className="form-check form-switch form-switch-right form-switch-md">
                <Button className="specialBtn" onClick={handleShow}>
                  <AiOutlinePlus />
                </Button>
              </div>
            </div>
          </CardHeader>
          <div className="my-5">
            <GridTableMenu />
          </div>
        </Card>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title>{t("Add_Menu_Item")}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-body">
              <Row>
                <Col md={12}>
                  <Controller
                    control={control}
                    name="id_category"
                    render={({ field }) => (
                      <div className="field-input">
                        <label htmlFor="id_category">{t("EnterName")}</label>
                        <select
                          name="id_category"
                          id="id_category"
                          value={field.value}
                          ref={field.ref}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          className="custom-select"
                        >
                          {categoriesArray?.map((cateArr) => (
                            <option key={cateArr.value} value={cateArr.value}>
                              {cateArr.label}
                            </option>
                          ))}
                        </select>
                        {errors?.id_category?.message && (
                          <p className="text-danger my-1">
                            {errors?.id_category?.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </Col>
                <Col md={12}>
                  <Controller
                    control={control}
                    name="name"
                    render={({ field }) => (
                      <div className="field-input">
                        <label htmlFor="name">{t("EnterName")}</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={field.value}
                          ref={field.ref}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                        />
                        {errors?.name?.message && (
                          <p className="text-danger my-1">
                            {errors?.name?.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </Col>
                <Col md={12}>
                  <Controller
                    control={control}
                    name="price"
                    render={({ field }) => (
                      <div className="field-input">
                        <label htmlFor="price">{t("EnterPrice")}</label>
                        <input
                          type="number"
                          name="price"
                          id="price"
                          value={field.value}
                          ref={field.ref}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                        />
                        {errors?.price?.message && (
                          <p className="text-danger my-1">
                            {errors?.price?.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </Col>
                <Col md={12}>
                  <Controller
                    control={control}
                    name="description"
                    render={({ field }) => (
                      <div className="field-input">
                        <label htmlFor="description">{t("EnterDesc")}</label>
                        <input
                          type="text"
                          name="description"
                          id="description"
                          value={field.value}
                          ref={field.ref}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                        />
                        {errors?.description?.message && (
                          <p className="text-danger my-1">
                            {errors?.description?.message}
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
                  setSelectedMenuItem(null);
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

export default AllMenuItem;
