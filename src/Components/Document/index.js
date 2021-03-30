import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    paddingTop: 35,
    paddingBottom: 45,
    paddingHorizontal: 35,
  },
  titleSection: {
    textAlign: "center",
  },
  title: {
    english: {
      fontSize: 12,
    },
    spanish: {
      fontSize: 10,
    },
  },
});

// Create Document Component
const MyDocument = (props) => (
  <Document>
    <Page size="A4" wrap style={styles.page}>
      <View style={styles.titleSection}>
        <Text style={styles.title.english}>Medical certificate</Text>
        <Text tyle={styles.title.spanish}>Certificado Médico</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
