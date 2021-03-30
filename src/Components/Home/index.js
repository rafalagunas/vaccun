import React from "react";
import MyDocument from "../Document";
import ReactPDF, { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";

const Home = () => {
  return (
    <div>
      <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </div>
  );
};

export default Home;
