import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="#212121"></StatusBar>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1680371320359-2e2bf273ae37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2014&q=80',
        }}
        style={{flex: 0.5}}
        resizeMode="cover">
        <View style={{flex: 0.5}}></View>
      </ImageBackground>
      <View style={{flex: 1, backgroundColor: '#ffffff'}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1680639224103-133fad8b5763?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80',
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 100 / 2,
              borderWidth: 3,
              borderColor: '#ffffff',
              position: 'absolute',
              zIndex: 2,
            }}></Image>
        </View>
        <View style={{marginTop: 60}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              textAlign: 'center',
              color: '#212121',
            }}>
            Suffy Yanuar Iskandar
          </Text>
          <Text style={{textAlign: 'center'}}>
            Bonds of people is the true power
          </Text>
          <View style={{marginLeft: 80, marginTop: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                // marginTop: 20,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 40,
                  width: 40,
                }}>
                <Icon name="mobile-alt" size={20} color="#212121" />
              </View>
              <View style={{marginLeft: 10, justifyContent: 'center', flex: 1}}>
                <Text style={{fontWeight: 'bold'}}>085779834495</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 40,
                  width: 40,
                }}>
                <Icon name="map-marker-alt" size={20} color="#212121" />
              </View>
              <View style={{marginLeft: 10, justifyContent: 'center', flex: 1}}>
                <Text style={{fontWeight: 'bold'}}>Bogor, Jawa Barat</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 40,
                  width: 40,
                }}>
                <Icon name="envelope" size={20} color="#212121" />
              </View>
              <View style={{marginLeft: 10, justifyContent: 'center', flex: 1}}>
                <Text style={{fontWeight: 'bold'}}>suffy.yanuar@gmail.com</Text>
              </View>
            </View>
          </View>
          <View
            style={{flexDirection: 'row', marginTop: 40, marginHorizontal: 30}}>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="facebook" size={25} color="#bdbdbd" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="instagram" size={25} color="#bdbdbd" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="github" size={25} color="#bdbdbd" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="twitter" size={25} color="#bdbdbd" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="linkedin" size={25} color="#bdbdbd" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;
