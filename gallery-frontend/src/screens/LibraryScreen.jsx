// LibraryScreen.js
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';

// Suponiendo que tienes una lista de fotos en un arreglo
const photos = [
  { id: '1', uri: 'https://randomwordgenerator.com/img/picture-generator/54e0d2424d51a514f1dc8460962e33791c3ad6e04e5074417d2e72d69649c1_640.jpg' },
  { id: '2', uri: 'https://randomwordgenerator.com/img/picture-generator/57e1d74b4854af14f1dc8460962e33791c3ad6e04e5074417d2e72dd974ec6_640.jpg' },
  { id: '3', uri: 'https://randomwordgenerator.com/img/picture-generator/53e0d0464e5aad14f1dc8460962e33791c3ad6e04e50744172277fd79345c1_640.jpg' },
  { id: '4', uri: 'https://randomwordgenerator.com/img/picture-generator/55e3d6414b50a414f1dc8460962e33791c3ad6e04e507440742a7ed1964bc6_640.jpg' },
  { id: '5', uri: 'https://randomwordgenerator.com/img/picture-generator/53e5dc414d55ac14f1dc8460962e33791c3ad6e04e507749742d7cd0974dc3_640.jpg'},
  { id: '6', uri: 'https://randomwordgenerator.com/img/picture-generator/51e0d3464d52b10ff3d8992cc12c30771037dbf85254794e70267cd39644_640.jpg'},
  { id: '7', uri: 'https://randomwordgenerator.com/img/picture-generator/roberto-carlos-roman-PmbWyM3UYfA-unsplash.jpg'},
  { id: '8', uri: 'https://randomwordgenerator.com/img/picture-generator/53e6dc404d51ab14f1dc8460962e33791c3ad6e04e507749712e79d0944fcd_640.jpg'},
  { id: '9', uri: 'https://randomwordgenerator.com/img/picture-generator/54e8d4444d50af14f1dc8460962e33791c3ad6e04e5074417d2e7ed69449c7_640.jpg'},
  { id: '10', uri: 'https://randomwordgenerator.com/img/picture-generator/55e8d24b4f54af14f1dc8460962e33791c3ad6e04e5074417c2d78d39e48c5_640.jpg'},
  { id: '11', uri: 'https://randomwordgenerator.com/img/picture-generator/52e6dd41485ab10ff3d8992cc12c30771037dbf85254794e732a7cd5934c_640.jpg'},
  { id: '12', uri: 'https://randomwordgenerator.com/img/picture-generator/55e8d14b4952ab14f1dc8460962e33791c3ad6e04e5074417c2e7dd3974ec4_640.jpg'},{ id: '1', uri: 'https://randomwordgenerator.com/img/picture-generator/54e0d2424d51a514f1dc8460962e33791c3ad6e04e5074417d2e72d69649c1_640.jpg' },
  { id: '13', uri: 'https://randomwordgenerator.com/img/picture-generator/57e1d74b4854af14f1dc8460962e33791c3ad6e04e5074417d2e72dd974ec6_640.jpg' },
  { id: '14', uri: 'https://randomwordgenerator.com/img/picture-generator/53e0d0464e5aad14f1dc8460962e33791c3ad6e04e50744172277fd79345c1_640.jpg' },
  { id: '15', uri: 'https://randomwordgenerator.com/img/picture-generator/55e3d6414b50a414f1dc8460962e33791c3ad6e04e507440742a7ed1964bc6_640.jpg' },
  { id: '16', uri: 'https://randomwordgenerator.com/img/picture-generator/53e5dc414d55ac14f1dc8460962e33791c3ad6e04e507749742d7cd0974dc3_640.jpg'},
  { id: '17', uri: 'https://randomwordgenerator.com/img/picture-generator/51e0d3464d52b10ff3d8992cc12c30771037dbf85254794e70267cd39644_640.jpg'},
  { id: '18', uri: 'https://randomwordgenerator.com/img/picture-generator/roberto-carlos-roman-PmbWyM3UYfA-unsplash.jpg'},
  { id: '19', uri: 'https://randomwordgenerator.com/img/picture-generator/53e6dc404d51ab14f1dc8460962e33791c3ad6e04e507749712e79d0944fcd_640.jpg'},
  { id: '20', uri: 'https://randomwordgenerator.com/img/picture-generator/54e8d4444d50af14f1dc8460962e33791c3ad6e04e5074417d2e7ed69449c7_640.jpg'},
  { id: '21', uri: 'https://randomwordgenerator.com/img/picture-generator/55e8d24b4f54af14f1dc8460962e33791c3ad6e04e5074417c2d78d39e48c5_640.jpg'},
  { id: '22', uri: 'https://randomwordgenerator.com/img/picture-generator/52e6dd41485ab10ff3d8992cc12c30771037dbf85254794e732a7cd5934c_640.jpg'},
  { id: '23', uri: 'https://randomwordgenerator.com/img/picture-generator/55e8d14b4952ab14f1dc8460962e33791c3ad6e04e5074417c2e7dd3974ec4_640.jpg'},
  // Añade más fotos según necesites
];

const numColumns = 3;
const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / numColumns;

const LibraryScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.uri }} style={styles.image} />
    </View>
  );

  return (
    <FlatList
      data={photos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  itemContainer: {
    flex: 1,
    margin: 1,
  },
  image: {
    width: itemWidth - 2, // Restar 2 para tener en cuenta el margen
    height: itemWidth - 2, // Mantener la relación de aspecto cuadrada
  },
});

export default LibraryScreen;
