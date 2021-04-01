import React, { useState, useRef, useCallback, useEffect } from "react";
import MyDocument from "../Document";
import { Input, Button, Form, Upload } from "antd";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
const Home = () => {
  const [status, finished] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [id_64, setID] = useState("");
  const [test_64, setTest] = useState("");
  const imageRef = useRef(null);

  useCallback(() => {
    console.log(imageRef);
  }, [imageRef]);

  useEffect(()=>{
    let foo = prompt("Ingrese contraseña");
    console.log(foo);
  },[])
  const loadData = () => {
    if (status && data && id_64) {
      return (
        <div>
          <PDFViewer style={{ width: "100%", height: 450 }}>
            <MyDocument
              date={data.date}
              pacient={data.pacient}
              folio={data.folio}
              age={data.age}
              birth_date={data.birth_date}
              gender={data.gender}
              test_result={data.test_result}
              observations={data.observations}
              id_64={id_64}
              test_64={test_64}
            />
          </PDFViewer>
          <PDFDownloadLink
            style={{ fontSize: 15, fontWeight: "bold " }}
            document={
              <MyDocument
                date={data.date}
                pacient={data.pacient}
                folio={data.folio}
                age={data.age}
                birth_date={data.birth_date}
                gender={data.gender}
                test_result={data.test_result}
                observations={data.observations}
                id_64={id_64}
                test_64={test_64}
              />
            }
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

  // const getFileData = ({ blob, url, loading, error }) => {};

  const onFinish = (values) => {
    setData({
      date: values.date,
      pacient: values.pacient,
      folio: values.folio,
      age: values.age,
      birth_date: values.birth_date,
      gender: values.gender,
      test_result: values.test_result,
      observations: values.observations,
    });
    finished(true);
    console.log("Success:", data);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);

      let url = URL.createObjectURL(info.file.originFileObj);
      console.log(url);
      getBase64(info.file.originFileObj, (id_64) => {
        setID(id_64);
        setLoading(false);
      });
    }
  };

  const handleTestChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      let url = URL.createObjectURL(info.file.originFileObj);
      console.log(url);
      getBase64(info.file.originFileObj, (test_64) => {
        setTest(test_64);
        setLoading(false);
      });
    }
  };

  return (
    <div>
      <div>
        <Form
          className="pdf-form"
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
            label="Folio"
            name="folio"
            // rules={[{ required: true, message: "Agrega un título" }]}
          >
            <Input placeholder="Folio" />
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
            label="Observaciones"
            name="observations"
            // rules={[{ required: true, message: "Agrega un título" }]}
          >
            <Input placeholder="Observaciones" />
          </Form.Item>
          <Form.Item label="IFE">
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              beforeUpload={() => console.log("uploading...")}
              onChange={handleChange}
            >
              {id_64 ? (
                <img src={id_64} alt="avatar" style={{ width: "100%" }} />
              ) : (
                <div>
                  {loading ? <LoadingOutlined /> : <PlusOutlined />}
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              )}
            </Upload>
          </Form.Item>
          <Form.Item label="Prueba">
            <Upload
              name="test"
              listType="picture-card"
              className="test-uploader"
              showUploadList={false}
              beforeUpload={() => console.log("uploading...")}
              onChange={handleTestChange}
            >
              {id_64 ? (
                <img src={test_64} alt="test" style={{ width: "100%" }} />
              ) : (
                <div>
                  {loading ? <LoadingOutlined /> : <PlusOutlined />}
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              )}
            </Upload>
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
