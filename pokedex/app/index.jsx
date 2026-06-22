import { Text, View, StyleSheet, FlatList } from "react-native";
import Header from '@/components/Header';
import { pokemons} from "@/data/pokemons"
import Card from "../components/Card";

export default function Index() {

const rederPokemon = ({ item }) => (
  <Card pokemon={item}/>
)

  return (
    <View style={styles.container}>
    <Header title="Pokédex"/>
    <FlatList
    data={pokemons}
    style={styles.cards}
    keyExtractor={(pokemons) => pokemons.Numero.toString()}
    renderItem={ renderPokemon }
    initialNumToRender={10}
    maxToRenderPerBatch={10}
    windowSize={5}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: "fff",
    flexDirection: "column",
  },
  cards: {
    padding: 15,
  }
});

