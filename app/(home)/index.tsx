import dayjs from "dayjs"
import { Feather } from "@expo/vector-icons"
import { View, Text, ScrollView } from "react-native"

import { Header } from "@/src/components/Header"
import { ListDepartaments } from "@/src/components/presence/ListDepartaments"

const data = ["DPH", "BEBIDAS", "PERECÍVEIS", "SECA DOCE", "SECA SALGADA"]

type HomeProps = {
  date: Date
}

export default function Home({ date }: HomeProps) {
  const dayOfWeek = dayjs(date).format("dddd")
  const dateOfMonth = dayjs(date).format("DD/MM/YYYY")

  return (
    <View className="items-center bg-background flex-1">
      <Header title="Auditoria de Presença" back={false} />
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        className="flex-1 w-full"
      >
        <View className="w-full flex-1 max-w-[90%] mt-10">
          <View className="items-center w-full justify-between flex-row mb-5">
            <Text className="text-white font-rajdhani_700 text-2xl">
              Departamentos
            </Text>
            <View className="flex-col items-end">
              <Text className="text-white font-rajdhani_700 text-sm">
                {dateOfMonth}
              </Text>
              <Text className="text-white font-rajdhani_700 text-sm">
                {dayOfWeek}
              </Text>
            </View>
          </View>

          {Array.from({ length: data.length }).map((_, i) => {
            return (
              <ListDepartaments
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
                Use as funções deste app com segurança. Tenha cuidado para
                evitar problemas maiores!
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
