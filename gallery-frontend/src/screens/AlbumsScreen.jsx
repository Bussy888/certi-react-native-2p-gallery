import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

// Datos de ejemplo
const albums = [
  { id: '1', uri: 'https://www.fotorevista.com.ar/SFotos/11/05/28/110528114345.jpg', title: 'Recents', cantidad:20 },
  { id: '2', uri: 'https://img.redbull.com/images/c_fill,g_auto,w_450,h_600/q_auto:low,f_auto/redbullcom/2017/07/29/e845daf6-0904-4e66-9b57-43ad2a81b846/foto-tomada-con-el-celular.jpg', title: 'Favorites', cantidad:25 },
  { id: '3', uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg', title: 'Presentation Slides', cantidad:10 },
  { id: '4', uri: 'https://media.istockphoto.com/id/530411680/es/foto/mariposa-en-la-nariz-de-perros.jpg?s=612x612&w=0&k=20&c=HV9bXejCm68mYlQrSRZTpX82BUVuhnY6uXs_tOMVS-M=', title: 'Adobe Capture', cantidad:26 },
  { id: '5', uri: 'https://www.shutterstock.com/image-photo/panoramic-aerial-view-iconic-building-600nw-2271838321.jpg', title: 'Picsew', cantidad:54 },
  { id: '6', uri: 'https://cdn.pixabay.com/photo/2017/03/27/14/55/photographer-2179204_1280.jpg', title: 'Snapchat', cantidad:88 },
];

const AlbumsScreen = () => {
  // Renderiza cada ítem de la lista
  const renderItem = ({ item }) => (
    <View style={styles.album}>
      <Image source={{ uri: item.uri }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.cantidad}>{item.cantidad}</Text>
    </View>
  );

  return (
    <FlatList
      data={albums}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2} // Establece el número de columnas
      columnWrapperStyle={styles.row} // Estiliza el contenedor de cada fila
    />
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  album: {
    flex: 1,
    margin: 5,
  },
  image: {
    width: '100%',
    height: 150,
    width: 170,
    borderRadius: 10,
  },
  title: {
    textAlign: 'left',
    marginTop: 5,
    fontWeight: '600',
    fontSize:16
  },
  number: {
    textAlign: 'left',
    marginTop: 2,
    fontWeight: '600'
  },
});

export default AlbumsScreen;
