import { View, Text, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Header } from "@/src/components/Header";
import { ListStreet } from "@/src/components/ListStreet";

export default function Home() {
  return (
    <View className="items-center bg-background flex-1">
      <Header title="Auditoria de Presença" />
      <View className="w-full flex-1 max-w-[90%] my-10">
        <Text className="text-white font-rajdhani_700 text-2xl mb-5">
          Lista de corredores
        </Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <ListStreet title="Corredor 05" active={false} />
          <ListStreet title="Corredor 06" active={false} />
          <ListStreet title="Corredor 07" active={true} />
          <ListStreet title="Corredor 08" active={true} />
          <ListStreet title="Corredor 09" active={true} />
          <ListStreet title="Corredor 10" active={false} />
          <ListStreet title="Corredor 11" active={true} />
          <ListStreet title="Havaianas" active={false} />
        </ScrollView>
      </View>
    </View>
  );
}
