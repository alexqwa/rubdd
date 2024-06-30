import { View, Text, ScrollView } from "react-native";

import { Header } from "@/src/components/Header";
import { ListStreet } from "@/src/components/ListStreet";

export default function Home() {
  return (
    <View className="items-center bg-background flex-1">
      <Header title="Auditoria de Presença" />
      <View className="w-full flex-1 max-w-[90%] mt-10">
        <View className="items-center w-full justify-between flex-row mb-5">
          <Text className="text-white font-rajdhani_700 text-2xl">
            Lista de corredores
          </Text>
          <View className="flex-col items-end">
            <Text className="text-white font-rajdhani_700 text-sm">
              24/06/2024 - 06:30
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
          <ListStreet title="Corredor 01" active={false} />
          <ListStreet title="Corredor 02" active={false} />
          <ListStreet title="Corredor 03" active={false} />
          <ListStreet title="Corredor 04" active={false} />
          <ListStreet title="Corredor 05" active={false} />
          <ListStreet title="Corredor 06" active={false} />
          <ListStreet title="Corredor 07" active={false} />
          <ListStreet title="Corredor 08" active={false} />
          <ListStreet title="Corredor 09" active={false} />
          <ListStreet title="Corredor 10" active={false} />
          <ListStreet title="Corredor 11" active={false} />
          <ListStreet title="Corredor 12" active={false} />
          <ListStreet title="Corredor 13" active={false} />
          <ListStreet title="Corredor 14" active={false} />
          <ListStreet title="Corredor 15" active={false} />
          <ListStreet title="Corredor 16" active={false} />
          <ListStreet title="Corredor 17" active={false} />
          <ListStreet title="Corredor 18" active={false} />
          <ListStreet title="Corredor 19" active={false} />
          <ListStreet title="Corredor 20" active={false} />
          <ListStreet title="Corredor 21" active={false} />
          <ListStreet title="Havaianas" active={false} />
        </ScrollView>
      </View>
    </View>
  );
}
