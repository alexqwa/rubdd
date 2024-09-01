import { Feather } from "@expo/vector-icons"
import { useLocalSearchParams } from "expo-router"
import { useNavigation } from "@react-navigation/native"
import { View, Text, TouchableOpacity, ScrollView } from "react-native"

import { Dropdown } from "@/src/components/Dropdown"
import { Header } from "@/src/components/Header"

const data = [
  "50188: LAVA ROUPAS PO ASSIM SCH 2,4KG BICARBONA",
  "50187: LAVA ROUPAS PO ASSIM SCH 4KG BICARBONATO",
  "51251: LAVA ROUPAS PO MINUANO CX 800G PERF",
  "23708: LAVA ROUPAS PO MON BIJOU CX 500G COCO",
  "54462: LAVA ROUPAS PO OMO CX 1,6KG LAV",
  "38149: LAVA ROUPAS PO OMO CX 800G PURO CUIDADO",
  "55367: LAVA ROUPAS PO TIXAN L800 P720G PRIMAV",
  "49113: LAVA ROUPAS PO TIXAN YPE CX 1,6KG PRIMAV",
  "49115: LAVA ROUPAS PO TIXAN YPE SCH 4KG PRIMAV",
  "49117: LAVA ROUPAS PO YPE SCH 8KG PRO USO GERAL",
  "52783: TIRA MANCHAS GEL QBOA 2L CORES",
  "50571: TIRA MANCHAS PO ASSIM 380G SCH COLORIDAS",
  "57360: TIRA MANCHAS PO MON BIJOU 3EM1 350G 02",
  "50188: LAVA ROUPAS PO ASSIM SCH 2,4KG BICARBONA",
  "50187: LAVA ROUPAS PO ASSIM SCH 4KG BICARBONATO",
  "51251: LAVA ROUPAS PO MINUANO CX 800G PERF",
  "23708: LAVA ROUPAS PO MON BIJOU CX 500G COCO",
  "54462: LAVA ROUPAS PO OMO CX 1,6KG LAV",
  "38149: LAVA ROUPAS PO OMO CX 800G PURO CUIDADO",
  "55367: LAVA ROUPAS PO TIXAN L800 P720G PRIMAV",
  "49113: LAVA ROUPAS PO TIXAN YPE CX 1,6KG PRIMAV",
  "49115: LAVA ROUPAS PO TIXAN YPE SCH 4KG PRIMAV",
  "49117: LAVA ROUPAS PO YPE SCH 8KG PRO USO GERAL",
  "52783: TIRA MANCHAS GEL QBOA 2L CORES",
  "50571: TIRA MANCHAS PO ASSIM 380G SCH COLORIDAS",
  "57360: TIRA MANCHAS PO MON BIJOU 3EM1 350G 02",
  "50188: LAVA ROUPAS PO ASSIM SCH 2,4KG BICARBONA",
  "50187: LAVA ROUPAS PO ASSIM SCH 4KG BICARBONATO",
  "51251: LAVA ROUPAS PO MINUANO CX 800G PERF",
  "23708: LAVA ROUPAS PO MON BIJOU CX 500G COCO",
  "54462: LAVA ROUPAS PO OMO CX 1,6KG LAV",
  "38149: LAVA ROUPAS PO OMO CX 800G PURO CUIDADO",
  "55367: LAVA ROUPAS PO TIXAN L800 P720G PRIMAV",
  "49113: LAVA ROUPAS PO TIXAN YPE CX 1,6KG PRIMAV",
  "49115: LAVA ROUPAS PO TIXAN YPE SCH 4KG PRIMAV",
  "49117: LAVA ROUPAS PO YPE SCH 8KG PRO USO GERAL",
  "52783: TIRA MANCHAS GEL QBOA 2L CORES",
  "50571: TIRA MANCHAS PO ASSIM 380G SCH COLORIDAS",
  "57360: TIRA MANCHAS PO MON BIJOU 3EM1 350G 02",
]

export default function StreetRoute() {
  const { id } = useLocalSearchParams()

  return (
    <View className="flex-1 items-center bg-background">
      <Header title="Presença" parameter={id.toString()} back={true} />
      <View className="mt-10 flex-1 w-full max-w-[90%]">
        <View className="w-full space-y-3">
          <Text className="text-white font-poppins_500">
            Formas de manipulação
          </Text>
          <Dropdown />
        </View>

        <View className="flex-1">
          <Text className="text-white text-base font-poppins_600 mt-10 mb-4">
            Lista de produtos ({data.length}):
          </Text>
          <ScrollView
            contentContainerStyle={{ paddingBottom: 60 }}
            showsVerticalScrollIndicator={false}
          >
            {Array.from({ length: data.length }).map((_, i) => {
              return (
                <Text className="text-white font-roboto_400 text-base" key={i}>
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
