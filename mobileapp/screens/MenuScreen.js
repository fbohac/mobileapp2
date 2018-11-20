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
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Encyklopedia')}>
                            <Image source={require('../assets/images/en_button.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Kurz')}>
                            <Image source={require('../assets/images/kurz_button.png')}/>
                        </TouchableOpacity>
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
        width: 150,
        height: 150,
        alignSelf: 'center',
        resizeMode: 'contain',
        marginTop: 50,
        marginLeft: 15,
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 7,
    },

});
