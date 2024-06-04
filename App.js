import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import MainCard from './components/MainCard';
import { Fontisto } from '@expo/vector-icons';

export default function App() {
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme ? '#232634' : '#f2f2f2',
    alignItems: 'center',
    paddingTop: 100
  }, 
  temperature: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  temperatureText: {
    color: darkTheme ? 'black' : 'black',
    fontSize: 50,
  },
  refreshButton: {
    position: 'absolute',
    margin: 30,
    alignSelf: 'flex-end',
  },
  cardView: {
    color: darkTheme ? 'black' : 'white',
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center'
  }

});

  const [darkTheme, setDarkTheme] = useState(true)
  const [currentTemperature, setcurrentTemperature] = useState('27')
  const [location, setLocation] = useState('BR, Fortaleza')  
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.refreshButton}>
       <EvilIcons name="refresh" size={30} color={darkTheme ? 'black' : 'white'} />
      </TouchableOpacity>
      <Feather name="sun" style={{marginTop: 50}} size={40} color="orange" />
      <View style={styles.temperature}>
        <Text style={styles.temperatureText}>{currentTemperature}</Text>
        <Text style={[styles.temperatureText, {fontSize: 14}]}>ºC</Text>
      </View>

      <View style={styles.cardView}>
      <MainCard title={'Manha'} backgroundColor={darkTheme ? '#ff873d' : '#cc6e30'} temperature={'29'} icon={'morning'}></MainCard>
      <MainCard title={'Tarde'} backgroundColor={darkTheme ? '#D29600' : '#FCC63F'} temperature={'29'} icon={'afternoon'}></MainCard>
      <MainCard title={'Noite'} backgroundColor={darkTheme ? '#008081' : '#38B7BB'} temperature={'29'} icon={'night'}></MainCard>
      </View>
    </View>
  );
}


