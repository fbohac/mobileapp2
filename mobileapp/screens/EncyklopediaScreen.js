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

                        <Text style={styles.textWhite}>Encyklopedia</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('Menu')}
                        >
                            <Text style={styles.buttonText}> Informácie okolo nás </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('Menu')}
                        >
                            <Text style={styles.buttonText}> Počítačové systémy </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('Menu')}
                        >
                            <Text style={styles.buttonText}> Počítačové siete </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('Menu')}
                        >
                            <Text style={styles.buttonText}> Algoritmy a programovanie </Text>
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
        fontSize: 40,
        marginTop: 40,
    },

    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        color: '#ffffff',
        fontSize: 30,
        backgroundColor: '#0b0b55',
        marginTop: 7,
        width: 280,
        height: 100,
        borderColor: '#1312bb',
        borderWidth: 2,
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 35,
    },

});
