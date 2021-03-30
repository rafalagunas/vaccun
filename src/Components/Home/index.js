import React, { useEffect, useState } from "react";
import MyDocument from "../Document";
import { Input, Button, Form } from "antd";
import ReactPDF, { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

const Home = () => {
  const [status, finished] = useState(false);
  const [data, setData] = useState({ date: "" });
  const loadData = () => {
    if (status && data) {
      return (
        <div>
          <PDFViewer style={{ width: "100%", height: 450 }}>
            <MyDocument date={data.date} />
          </PDFViewer>

          <PDFDownloadLink
            style={{ fontSize: 15, fontWeight: "bold " }}
            document={<MyDocument data={data} />}
            fileName="somename.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download now!"
            }
          </PDFDownloadLink>
        </div>
      );
    }
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    setData({ date: values.date });
    finished(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <div>
        <Form
          style={{ width: "35%", padding: 10, textAlign: "center" }}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Fecha"
            name="date"
            // rules={[{ required: true, message: "Agrega un título" }]}
          >
            <Input placeholder="Fecha" />
          </Form.Item>
          <Form.Item
            label="Nombre paciente"
            name="pacient"
            // rules={[{ required: true, message: "Agrega un título" }]}
          >
            <Input placeholder="Paciente" />
          </Form.Item>
          <Form.Item
            label="Fecha Nacimiento Paciente"
            name="birth_date"
            // rules={[{ required: true, message: "Agrega un título" }]}
          >
            <Input placeholder="Fecha nacimiento" />
          </Form.Item>
          <Form.Item
            label="Edad"
            name="age"
            // rules={[{ required: true, message: "Agrega un título" }]}
          >
            <Input placeholder="Edad" />
          </Form.Item>
          <Form.Item
            label="Género"
            name="gender"
            // rules={[{ required: true, message: "Agrega un título" }]}
          >
            <Input placeholder="Género" />
          </Form.Item>

          <Form.Item
            label="Resultado prueba"
            name="test_result"
            // rules={[{ required: true, message: "Agrega un título" }]}
          >
            <Input placeholder="Resultado prueba" />
          </Form.Item>
          <Form.Item
            label="Género"
            name="gender"
            // rules={[{ required: true, message: "Agrega un título" }]}
          >
            <Input placeholder="Género" />
          </Form.Item>
          <Form.Item
            label="Género"
            name="gender"
            // rules={[{ required: true, message: "Agrega un título" }]}
          >
            <Input placeholder="Género" />
          </Form.Item>
          <Form.Item
            label="Observaciones"
            name="observations"
            // rules={[{ required: true, message: "Agrega un título" }]}
          >
            <Input placeholder="Observaciones" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Generar certificado
            </Button>
          </Form.Item>
        </Form>
      </div>

      {loadData()}
    </div>
  );
};

export default Home;
