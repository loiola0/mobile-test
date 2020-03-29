import React from 'react';
import {View, Image,Text} from 'react-native';

import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Incidents(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <image source={logoImg}/>
                    <Text style={style.headerText}>
                        Total de <Text style={styles.headerTextBold}>0 casos</Text>

                    </Text>
            </View>
            <Text style={style.title}>Bem Vindo</Text>
            <Text style={style.description}>Escolha um dos casos e seja o heroi</Text>
        </View>

    );
}