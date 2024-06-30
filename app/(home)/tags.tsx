import { View, Text, ScrollView } from "react-native";

import { Header } from "@/src/components/Header";
import { ListStreet } from "@/src/components/ListStreet";

export default function Tags() {
  return (
    <View className="items-center flex-1 bg-background">
      <Header title="Auditoria de Etiquetas" />
      <View className="w-full flex-1 max-w-[90%] mt-10">
        <View className="items-center w-full justify-between flex-row mb-5">
          <Text className="text-white font-rajdhani_700 text-2xl">
            Lista de corredores
          </Text>
          <View className="flex-col items-end">
            <Text className="text-white font-rajdhani_700 text-sm">
              24/06/2024 - 07:44
            </Text>
            <Text className="text-white font-rajdhani_700 text-sm">
              Segunda-feira
            </Text>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
        >
          <ListStreet title="Corredor 01" active={true} />
          <ListStreet title="Corredor 02" active={true} />
          <ListStreet title="Corredor 03" active={true} />
          <ListStreet title="Corredor 04" active={true} />
          <ListStreet title="Corredor 05" active={true} />
          <ListStreet title="Corredor 06" active={true} />
          <ListStreet title="Corredor 07" active={true} />
          <ListStreet title="Corredor 08" active={true} />
          <ListStreet title="Corredor 09" active={true} />
          <ListStreet title="Corredor 10" active={true} />
          <ListStreet title="Corredor 11" active={true} />
          <ListStreet title="Corredor 12" active={true} />
        </ScrollView>
      </View>
    </View>
  );
}
