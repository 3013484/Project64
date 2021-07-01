import * as React from 'react';
import {View, StyleSheet, TouchableOpacity, TextInput, Text} from 'react-native';
import AppHeader from '../components/AppHeader';
import dictionary from './database';

export default class HomeScreen extends React.Component {

  getWord = (word) => {
    var text = text.toLowerCase()
    try{
      var word = dictionary[text]["word"]
      var lexicalCategory = dictionary[text]["lexicalCategory"]
      var definition = dictionary[text]["definition"]
      this.setState ({
          "word": word,
          "definition": definition,
          "lexicalCategory": lexicalCategory
        })
      }
    catch(err){
      alert("Sorry, this word is not available for now")
      this.setState ({
        "text": '',
        "isSearchPressed": false,
      })
    }
  }
  render() {
    return (
      <View>

        <AppHeader />

        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ 
              text: text ,
              isSearchPressed: false,
              word: "Loading...",
              lexicalCategory: '',
              examples: [],
              definition: ""
            });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            this.setState({ isSearchPressed: true });
            this.getWord(this.state.text);
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <View style = {styles.detailsContainer}>
          <Text style = {styles.detailsText}>
            Word: {""}
          </Text>
          <Text style = {{fontSize: 10}}>
            {this.state.word}
          </Text>
        </View>

        <View style = {styles.detailsContainer}>
          <Text style = {styles.detailsTitle}>
            Type: {""}
          </Text>
          <Text style = {{fontSize: 18}}>
            {this.state.lexicalCategory}
          </Text>
        </View>

        <View style = {{flexDirection: 'row', flexWrap: 'wrap'}}>
          <Text style = {styles.detailsTitle}>
            Definition: {""}
          </Text>
          <Text style = {{fontSize: 18}}>
            {this.state.definition}
          </Text>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 150,
    width: 200,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
  },
});