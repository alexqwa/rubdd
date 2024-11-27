import { useLocalSearchParams } from "expo-router"
import { View, Text, ScrollView } from "react-native"

import { Header } from "@/src/components/Header"
import { ListOfStreets } from "@/src/components/ListOfStreets"

const data = [
  "Corredor 11",
  "Corredor 13",
  "Corredor 15",
  "Corredor 17",
  "Corredor 19",
  "Checkstand",
]

export default function StreetRoute() {
  const { id } = useLocalSearchParams()

  return (
    <View className="flex-1 items-center bg-background">
      <Header title="Presença" parameter={id.toString()} back={true} />
      <View className="w-full flex-1 max-w-[90%] mt-10">
        <Text className="text-white font-rajdhani_700 text-2xl mb-5">
          Corredores
        </Text>

        <ScrollView
          contentContainerStyle={{ paddingBottom: 30 }}
          showsVerticalScrollIndicator={false}
        >
          {Array.from({ length: data.length }).map((_, i) => {
            return (
              <ListOfStreets
                key={i}
                title={data[i]}
                address={data[i]}
                active={true}
              />
            )
          })}
        </ScrollView>
      </View>
    </View>
  )
}
