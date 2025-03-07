import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Font from "expo-font";
import { MaterialIcons } from "@expo/vector-icons"; 
import { useNavigation } from '@react-navigation/native';

export default function PlanSubscription() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const loadFonts = async () => {
    
      await Font.loadAsync({
        "Funnel-Display": require("../assets/fonts/Funnel-Display.ttf"),
        "Sora-Regular": require("../assets/fonts/Sora-Regular.ttf"),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <View style={styles.container}>
      {/* Botão de Voltar */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <MaterialIcons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>
        Assine o{" "}
        <Text style={styles.planText}>plano {"\n"}pro</Text>{" "}
        e confira as exclusividades{"\n"}que separamos{"\n"}para você.
      </Text>

      <View style={styles.featureContainer}>
        {/* Primeira imagem com descrição */}
        <View style={styles.featureItem}>
          <Image source={require("../assets/check.png")} style={styles.featureImage} />
          <Text style={styles.description}>Sem Anúncios</Text>
        </View>

        {/* Segunda imagem com descrição */}
        <View style={styles.featureItem}>
          <Image source={require("../assets/check.png")} style={styles.featureImage} />
          <Text style={styles.description}>Melhores avaliados na sua região</Text>
        </View>

        {/* Terceira imagem com descrição */}
        <View style={styles.featureItem}>
          <Image source={require("../assets/check.png")} style={styles.featureImage} />
          <Text style={styles.description}>Mensagens e atualizações de serviços diretamente no E-mail e WhatsApp</Text>
        </View>
      </View>

      {/* Botão para Assinar */}
      <TouchableOpacity style={styles.subscribeButton}>
        <Text style={styles.subscribeButtonText}>Assinar</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    padding: 10,
    zIndex: 1,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 100, 
    fontFamily: "Funnel-Display", 
  },
  featureContainer: {
    width: "100%",
    marginBottom: 40,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  featureImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginRight: 10,
  },
  description: {
    fontSize: 22,
    fontFamily: "Sora-Regular",
    color: "#333",
  },
  subscribeButton: {
    backgroundColor: "#E4552D",
    paddingVertical: 30,
    borderRadius: 30,
    alignItems: "center",
    width: "80%",
  },
  subscribeButtonText: {
    color: "#000",
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: "Funnel-Display",
  },
  planText: {
    color: "#E4552D",
  },
});
