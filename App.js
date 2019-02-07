import React, { Component } from 'react';
import { Platform, StyleSheet, Text, ScrollView, View } from 'react-native';
import { Constants } from '@universal-modules/react-native-platform';
import { Localization } from 'expo-localization';
import * as Font from 'expo-font';
import * as Asset from 'expo-asset';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.quote}>Because of your smile, you make life more beautiful.</Text>
        <ScrollView>
          <Text style={styles.welcome}>{Localization.locale}</Text>
          <Text>{JSON.stringify(Constants)}</Text>
        </ScrollView>
      </View>
    );
  }

  async componentWillMount() {
    try {
      await this.loadFonts();
      console.log("font load successful");
    } catch(e) {
      console.log("Failed to load the font", e);
    }
  }

  async loadFonts() {
    await Font.loadAsync({
        //Typography
        IndieFlower: require("./assets/fonts/IndieFlower.ttf"),
        SiviShapeIcons: require("./assets/fonts/SiviShapeIcons.ttf")
    })
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  quote:{
    fontSize: 16,
    fontFamily: "IndieFlower",
    marginTop: 50,
    padding: 20
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
