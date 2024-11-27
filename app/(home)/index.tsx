import { View, Text } from "react-native"
import { Feather } from "@expo/vector-icons"

import { Header } from "@/src/components/Header"
import { ListOfDepartaments } from "@/src/components/ListOfDepartaments"

const data = ["DPH", "BEBIDAS", "PERECÍVEIS", "SECA DOCE", "SECA SALGADA"]

export default function Home() {
  return (
    <View className="items-center bg-background flex-1">
      <Header title="Auditoria de Presença" back={false} />
      <View className="w-full flex-1 max-w-[90%] mt-10">
        <View className="items-center w-full justify-between flex-row mb-5">
          <Text className="text-white font-rajdhani_700 text-2xl">
            Departamentos
          </Text>
          <View className="flex-col items-end">
            <Text className="text-white font-rajdhani_700 text-sm">
              25/11/2024 - 06:30
            </Text>
            <Text className="text-white font-rajdhani_700 text-sm">
              Segunda-feira
            </Text>
          </View>
        </View>

        {Array.from({ length: data.length }).map((_, i) => {
          return (
            <ListOfDepartaments
              key={i}
              title={data[i]}
              address={data[i]}
              active={true}
            />
          )
        })}

        <View className="border-dashed border rounded-lg border-zinc-400 w-full p-6 mt-10">
          <View className="flex-row space-x-4 items-center justify-center">
            <Feather name="alert-circle" size={24} color="#fff" />
            <Text className="text-white/80 font-rajdhani_700 text-sm leading-snug">
              Use as funções deste app com segurança. Tenha cuidado para evitar
              problemas maiores!
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}
