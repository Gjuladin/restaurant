import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import useCategories from "../../hooks/useCategory";
import useMenuItems from "../../hooks/useMenuItem";

const CategoriesTab = () => {
  const { data: categories } = useCategories();
  const { data: menuItemsData } = useMenuItems();
  const [key, setKey] = useState(categories?.[0]?.category_name);

  return (
    <Container className="py-5">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        fill
      >
        {categories?.map((cat) => (
          <Tab
            key={cat?._id}
            eventKey={cat?.category_name}
            title={cat?.category_name}
            className="p-4 border rounded-bottom border-white"
          >
            {menuItemsData?.menuItems
              .filter((menu) => menu.id_category._id === cat._id)
              .map((se) => (
                <Row className="py-3 d-flex align-items-center">
                  <Col md={10}>
                    <h4>{se.name}</h4>
                    <h6 className="text-secondary">{se.description}</h6>
                  </Col>
                  <Col md={2}>
                    <h5>{se.price} MKD</h5>
                  </Col>
                </Row>
              ))}
          </Tab>
        ))}
      </Tabs>
    </Container>
  );
};

export default CategoriesTab;
