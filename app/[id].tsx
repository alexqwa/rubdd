import { Feather } from "@expo/vector-icons"
import { useLocalSearchParams } from "expo-router"
import { useNavigation } from "@react-navigation/native"
import { View, Text, TouchableOpacity, ScrollView } from "react-native"

import { Dropdown } from "@/src/components/Dropdown"

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
  "Freezers 01",
  "Freezers 02",
]

export default function StreetRoute() {
  const { goBack } = useNavigation()
  const { id } = useLocalSearchParams()

  return (
    <View className="flex-1 items-center bg-background">
      <View className="bg-[#202024] h-28 w-full items-center justify-center">
        <View className="relative w-full max-w-[90%] justify-center items-center flex-row mt-10">
          <TouchableOpacity
            onPress={() => goBack()}
            className="p-4 -m-4 absolute left-0"
          >
            <Feather name="arrow-left" size={18} color="#fff" />
          </TouchableOpacity>
          <Text className="text-white font-rajdhani_700 text-base">
            Presença: {id.toString()}
          </Text>
        </View>
      </View>
      <View className="mt-10 flex-1 items-start w-full max-w-[90%]">
        <View className="w-full space-y-3">
          <Text className="text-white font-poppins_500">
            Formas de manipulação
          </Text>
          <Dropdown />
        </View>

        <View className="w-full max-w-[90%] flex-1">
          <Text className="text-white text-base font-poppins_600 mt-10">
            Lista de produtos ({data.length}):
          </Text>
          <ScrollView>
            {Array.from({ length: data.length }).map((_, i) => {
              return (
                <Text className="text-white" key={i}>
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
