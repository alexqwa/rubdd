import { useLocalSearchParams } from "expo-router"
import { View, Text, ScrollView } from "react-native"

import { Dropdown } from "@/src/components/Dropdown"
import { Header } from "@/src/components/Header"

const data = [
  "38149: LAVA ROUPAS PO OMO CX 800G PURO CUIDADO",
  "38149: LAVA ROUPAS PO OMO CX 800G PURO CUIDADO",
  "38149: LAVA ROUPAS PO OMO CX 800G PURO CUIDADO",
  "38149: LAVA ROUPAS PO OMO CX 800G PURO CUIDADO",
  "38149: LAVA ROUPAS PO OMO CX 800G PURO CUIDADO",
  "38149: LAVA ROUPAS PO OMO CX 800G PURO CUIDADO",
  "38149: LAVA ROUPAS PO OMO CX 800G PURO CUIDADO",
  "38149: LAVA ROUPAS PO OMO CX 800G PURO CUIDADO",
]

export default function StreetRoute() {
  const { id } = useLocalSearchParams()

  return (
    <View className="flex-1 items-center bg-background">
      <Header title="Etiquetas" parameter={id.toString()} back={true} />
      <View className="mt-10 flex-1 w-full max-w-[90%]">
        <View className="w-full space-y-3">
          <Text className="text-white text-lg font-rajdhani_700">
            Formas de manipulação
          </Text>
          <Dropdown />
        </View>

        <View className="flex-1">
          <Text className="text-white text-lg font-rajdhani_700 mt-10 mb-4">
            Lista de produtos ({data.length}):
          </Text>
          <ScrollView
            contentContainerStyle={{ paddingBottom: 60 }}
            showsVerticalScrollIndicator={false}
          >
            {Array.from({ length: data.length }).map((_, i) => {
              return (
                <Text
                  className="text-white font-rajdhani_700 text-base"
                  key={i}
                >
                  {data[i]}
                </Text>
              )
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  )
}
