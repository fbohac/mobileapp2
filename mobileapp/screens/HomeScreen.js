import React from 'react';
import {
  Image,
    Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View>
                    <Image
                        source={  require('../assets/images/uvodMA.png')}
                        style={styles.welcomeImage}
                    />
                    <Text style={styles.textWhite}>Do aplikácie prejdite tlačidlom</Text>
                    <Button
                        title="Enter application"
                        onPress={() => this.props.navigation.navigate('Menu')}
                        />
                </View>
            </ScrollView>
        </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
      alignSelf: 'stretch',

  },
    textWhite:{
        color: '#FFF',
    },

  welcomeImage: {
      flex: 1,
      width: 300,
      height: 300,
      alignSelf: 'center',
      resizeMode: 'contain',
     marginTop: 125,
     marginLeft: 15,
  },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },

});
