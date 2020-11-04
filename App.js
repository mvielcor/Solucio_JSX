/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { Input, Button, Icon } from 'react-native-elements';
const estil = 'upv';
const isAdmin = false;
const moduls2Dam = [
  { nom: 'DIN', professor: 'Manel', hores: 120 },
  { nom: 'ADA', professor: 'Juanmi', hores: 120 },
  { nom: 'PMDM', professor: 'Fran', hores: 100 },
  { nom: 'PSP', professor: 'Fran', hores: 60 },
  { nom: 'SGE', professor: 'Belén', hores: 100 },
  { nom: 'Anglés', professor: 'Caterina', hores: 40 },
  { nom: 'EIE', professor: 'Manuel', hores: 60 },
];

const nom = () => {
  //Poseu ací el vostre nom i cognoms
  return (<Text>Manel Viel</Text>)
}
//Mètode que rep uns estil en forma de cadena i torna l'objecte 
//d'estil a aplicar (o l'estil florida, o l'estil upv)
const aplicaEstil = (estilRebut) => {
  return estilRebut === 'florida' ? styles.florida : styles.upv
}
//Mètode que rep uns estil en forma de cadena i torna l'objecte 
//d'estil a aplicar a un text
const aplicaEstilAText = (estilRebut) => {
  return estilRebut === 'florida' ? 'white' : 'orange'
}
//Component que em dibuixa dos camps de text, i li aplica 
// l'estil pertinent.
const dades = () => {
  return (
    <View style={aplicaEstil(estil)}>
      <Text>Introdueix les teues dades:</Text>
      <Input
        placeholder="Curs"
        placeholderTextColor={aplicaEstilAText(estil)}
        color={aplicaEstilAText(estil)}
        leftIcon={{ type: 'font-awesome', name: 'comment' }}
      />
      <Input
        placeholder="Mòdul"
        leftIcon={{ type: 'font-awesome', name: 'comment' }}
        placeholderTextColor={aplicaEstilAText(estil)}
        color={aplicaEstilAText(estil)}
      />
    </View>
  )
}

//Component que genera un botó per accedir als informes 
const mostraBotoInformes = () => {
  return (
    <View style={{ padding: 5 }}>
      <Button
        icon={
          <Icon
            name="list-alt"
            size={25}
            color="white"
          />
        }
        raised={true}
        title="Informes"
      />
    </View>
  )
}

// Component que mostra un conjunt de dades guardades en una array
// d'objectes, de la manera en que l'hem programat.
const llistatModuls = () => {
  return (
    <View>
      {moduls2Dam.map((item, pos) => {
        return (
         <View key={pos+1} style={pos%2===0?styles.pos_par:styles.pos_impar}>
          <Text>{pos+1}</Text>
          <Text style={{fontWeight: 'bold'}}> {item.nom}</Text>
          <Text>{item.professor}</Text>
          <Text>{item.hores}</Text>
         </View>
  )
})
    }
  </View >
  )
}

class App extends Component {
  render() {
    return (
      <>
        {nom()}
        {dades()}
        { isAdmin && mostraBotoInformes()}
        { llistatModuls()}
      </>
    );
  }
};

const styles = StyleSheet.create({
  upv: {
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
  },
  florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  pos_par: {
    backgroundColor: '#F8BBD0',
    fontSize: 12,
    textAlign: 'right',
  },
  pos_impar: {
    backgroundColor: '#F48FB1',
    fontSize: 12,
    textAlign: 'left',
  }
});

export default App;
