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
            <View style={styles.container} contentContainerStyle={styles.contentContainer}>
                        <Image
                            source={  require('../assets/images/uvodMA.png')}
                            style={styles.welcomeImage}
                        />
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Encyklopedia')}>
                            <Image source={require('../assets/images/en_button.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Kurz')}>
                            <Image source={require('../assets/images/kurz_button.png')}/>
                        </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
        justifyContent: 'space-between'
    },

    welcomeImage: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'contain',
    },

    contentContainer: {
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    button: {
        marginTop: 7,
        alignSelf: 'center',
    },
});
