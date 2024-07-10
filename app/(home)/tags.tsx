import { View, Text, ScrollView } from "react-native";

import { Header } from "@/src/components/Header";
import { ListStreet } from "@/src/components/ListStreet";

const data = [
"Corredor 1",
"Corredor 2",
"Corredor 3",
"Corredor 4",
"Corredor 5",
"Corredor 6",
"Corredor 7",
"Corredor 8",
"Corredor 9",
"Corredor 10",
"Corredor 11",
"Corredor 12",
"Corredor 13",
"Corredor 14",
"Corredor 15",
"Corredor 16",
"Corredor 17",
"Corredor 18",
"Corredor 19",
"Corredor 20",
"Corredor 21",
"Havaianas",
]

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
          {Array.from({ length: (data.length)}).map((_, i) => {
            return (
              <ListStreet key={i} title={data[i]} active={true} />
            )
          })}
        </ScrollView>
      </View>
    </View>
  );
}
