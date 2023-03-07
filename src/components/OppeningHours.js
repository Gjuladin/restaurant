import React from "react";
import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const OppeningHours = () => {
  const { t } = useTranslation();
  return (
    <Table className="text-white table-borderless mt-5">
      <tbody>
        <tr>
          <td>{t("MonFri")}</td>
          <td className="text-end">09:00 - 00:00</td>
        </tr>
        <tr>
          <td>{t("Saturday")}</td>
          <td className="text-end">11:00 - 22:00</td>
        </tr>{" "}
        <tr>
          <td>{t("Sunday")}</td>
          <td className="text-end text-danger">{t("Closed")}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default OppeningHours;
