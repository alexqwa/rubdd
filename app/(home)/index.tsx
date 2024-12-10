import { router } from "expo-router"
import { useState, useEffect } from "react"
import { Feather } from "@expo/vector-icons"
import { View, Text, ScrollView, FlatList } from "react-native"

import { today, weekday, date_month } from "@/src/lib/dayjs"
import { departament_environments } from "@/src/lib/seeds.json"

import { Header } from "@/src/components/Header"
import { ListDepartaments } from "@/src/components/presence/ListDepartaments"

interface EnviromentsProps {
  key: string
  title: string
  active: boolean
}

export default function Home() {
  const [environments, setEnvironments] = useState<EnviromentsProps[]>([])

  useEffect(() => {
    function fetchEnvironments() {
      const updatedEnvironments = departament_environments.map(
        (environment) => {
          // Verifica se o dia atual está presente no array de weekdays
          const isActive = environment.weekday.some(
            (day) => day.week_day === today
          )

          return {
            ...environment,
            active: isActive, // Define active com base na verificação
          }
        }
      )

      setEnvironments(updatedEnvironments)
    }

    fetchEnvironments()
  }, [today])

  return (
    <View className="items-center bg-background flex-1">
      <Header title="Auditoria de Presença" back={false} />
      <ScrollView
        showsVerticalScrollIndicator={false}
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
                {date_month}
              </Text>
              <Text className="text-white font-rajdhani_700 text-sm">
                {weekday}
              </Text>
            </View>
          </View>

          <FlatList
            data={environments}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <ListDepartaments
                title={item.title}
                active={item.active}
                onPress={
                  item.active
                    ? () =>
                        router.push({
                          pathname: "/presence/[id]",
                          params: { id: item.key, title: item.title },
                        })
                    : undefined
                }
              />
            )}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
          />

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
