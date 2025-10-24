import { Text, View } from "react-native";
import Menu from "./components/menu";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen. Componente editado.</Text>
      <Menu />
    </View>
  );
}
