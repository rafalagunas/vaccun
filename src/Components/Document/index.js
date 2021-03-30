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
  centerSection: {
    textAlign: "center",
  },
  title: {
    english: {
      fontSize: 16,
    },
    spanish: {
      fontSize: 14,
    },
    date: {
      fontSize: 11,
      fontWeight: "bold",
    },
  },
  rightSection: {
    textAlign: "right",
  },
  rowSection: {
    flexDirection: "row",
    marginRight: 80,
  },
});

// Create Document Component
const MyDocument = ({ date }) => {
  return (
    <>
      {date !== undefined ? (
        <Document>
          <Page size="A4" wrap style={styles.page}>
            <View style={styles.centerSection}>
              <Text style={styles.title.english}>Medical certificate</Text>
              <Text style={styles.title.spanish}>Certificado Médico</Text>
            </View>
            <View style={styles.rightSection}>
              <Text style={styles.title.date}>Test Date:</Text>
              <View style={styles.rowSection} wrap>
                <Text style={styles.title.date}>Fecha de prueba:</Text>
                <Text style={styles.title.date}>{date}</Text>
              </View>
            </View>
          </Page>
        </Document>
      ) : (
        <Document>
          <Page size="A4" wrap style={styles.page}>
            <View style={styles.centerSection}>
              <Text style={styles.title.english}>Please refresh the page</Text>
            </View>
          </Page>
        </Document>
      )}
    </>
  );
};

export default MyDocument;
