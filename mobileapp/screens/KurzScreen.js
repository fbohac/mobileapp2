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
                        <Text style={styles.textWhite}>Kurz</Text>
                        <Button
                            title="Encyklopedia"
                            onPress={() => this.props.navigation.navigate('Encyklopedia')}
                        />
                        <Button
                            title="Menu"
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
        width: 150,
        height: 150,
    },

});
