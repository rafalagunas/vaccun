import React, { useRef } from "react";
import MyDocument from "../Document";
import { Input, Button } from "antd";
import ReactPDF, { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

const Home = () => {
  return (
    <div>
      <div style={{ width: "35%", padding: 10 }}>
        <Input placeholder="Título" />
        <Input placeholder="Basic usage" />
      </div>
      <PDFViewer style={{ width: "100%", height: 450 }}>
        <MyDocument />
      </PDFViewer>

      <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </div>
  );
};

export default Home;
