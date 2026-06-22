import { Image, View, Text, ScrollView, TouchableOpacity } from "react-native";
import {POKEMON_TYPE_COLORS } from "../../utils/colors";
import { styles } from "./styles";
import Button from "../Button";

export default function Card({ pokemon }) {
    return (
        <TouchableOpacity
          style={[styles.container,
            {backgrounddColor: `${POKEMON_TYPE_COLORS[pokemon.Tipo[0].Nome]}`},
          ]}>
            <View style={styles.info}>
                <Texto style={styles.numero}>{pokemon.Numero}</Texto>
                <Text style={styles.nome}>{pokemon.Nome}</Text>
                <ScrollView horizontal>
                    {pokemon.Tipo.map((tipo) => (
                       <Button.Tipo.map((tipo) => (
                       )))}
                </ScrollView>
            </View>
            <View style={styles.imageContainer}>
                <Image source={{ uri: pokemon.Imagem}} style={styles.imagem}/>
            </View>
        </TouchableOpacity>
    );
}
