import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const image = require("./Header.png");
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
  leftSection: {
    textAlign: "left",
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
    marginRight: 50,
  },
  rowSection: {
    flexDirection: "row",
    marginRight: 80,
  },
  image: {
    width: "60%",
    padding: 10,
    backgroundColor: "grey",
  },
});

// Create Document Component
const MyDocument = ({
  date,
  pacient,
  folio,
  age,
  birth_date,
  gender,
  test_result,
  observations,
}) => {
  return (
    <>
      {date !== undefined ? (
        <Document>
          <Page size="A4" wrap style={styles.page}>
            <View style={styles.image}>
              <Image source={image} />
            </View>
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
            <View
              style={{
                flexDirection: "row",
                marginRight: 80,
                marginTop: 30,
                alignSelf: "right",
              }}
            >
              <View style={styles.leftSection}>
                <Text style={styles.title.date}>Name:</Text>
                <View style={styles.rowSection} wrap>
                  <Text style={styles.title.date}>Nombre:</Text>
                  <Text style={styles.title.date}>{pacient}</Text>
                </View>
              </View>

              <View>
                <Text style={styles.title.date}>Age:</Text>
                <View style={styles.rowSection} wrap>
                  <Text style={styles.title.date}>Edad:</Text>
                  <Text style={styles.title.date}>{age}</Text>
                </View>
              </View>
              <View>
                <View style={styles.rowSection} wrap>
                  <Text style={styles.title.date}>Folio:</Text>

                  <Text style={styles.title.date}>{folio}</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginRight: 80,
                marginTop: 30,
                alignSelf: "right",
              }}
            >
              <View style={styles.leftSection}>
                <Text style={styles.title.date}>Date of Birth:</Text>
                <View style={styles.rowSection} wrap>
                  <Text style={styles.title.date}>Fecha de nacimiento:</Text>
                  <Text style={styles.title.date}>{birth_date}</Text>
                </View>
              </View>

              <View>
                <Text style={styles.title.date}>Gender:</Text>
                <View style={styles.rowSection} wrap>
                  <Text style={styles.title.date}>Género:</Text>
                  <Text style={styles.title.date}>{gender}</Text>
                </View>
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <View style={{ textAlign: "left", marginTop: 20 }}>
                <Text style={styles.title.date}>Test resultant:</Text>
                <View style={styles.rowSection} wrap>
                  <Text style={styles.title.date}>Resultado de la prueba:</Text>
                  <Text style={styles.title.date}>{test_result}</Text>
                </View>
              </View>

              <View style={{ marginTop: 20 }}>
                <Text style={styles.title.date}>Observations:</Text>
                <View style={styles.rowSection} wrap>
                  <Text style={styles.title.date}>Observaciones:</Text>
                  <Text style={styles.title.date}>{observations}</Text>
                </View>
              </View>
            </View>
            <View fixed>
              <Text>
                Medical Center - LobbyCare Azuna Medical Center, Piso 9,
                Consultorio 923, Av. Sayil esquina con Av. Savignac, SM 06 MZ 5
                LT 2, Cancún, Quintana Roo, CP. 77500 Módulo de atención rápida
                – Puerto Cancún Blvd. Kulkulcán km. 1.5, Puerto Juárez, Zona
                Hotelera, T1500 Cancún, Q.R. Oficina Corporativa Ave Sayil Smz 6
                Mz 5 Lote 2 Piso 11 Interior 1101 A, Plaza Azuna Cancún, Benito
                Juárez, Q.R.
              </Text>
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
