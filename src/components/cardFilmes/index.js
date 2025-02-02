import React from 'react'
import {Image,Text,TouchableOpacity} from 'react-native'
import styles from './style'
import { useNavigation } from '@react-navigation/native';

export default function CardMovies({titulo,imagem,nota,descricao}){

    const navigation = useNavigation();

    return(

        <TouchableOpacity onPress={ () => navigation.navigate('details',{imagem:imagem, titulo:titulo, nota:nota, descricao:descricao}) } style={styles.containerJogos}>
            <Image style={styles.imagem} source = {require (`../../Img/${imagem}`)} />
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.textNota}>{nota}</Text>
            <Text>{descricao}</Text>
        </TouchableOpacity>

    )
}