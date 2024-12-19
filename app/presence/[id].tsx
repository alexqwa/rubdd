import { useState, useEffect } from "react"
import { View, Text, FlatList } from "react-native"
import { router, useLocalSearchParams } from "expo-router"

import { today } from "@/src/lib/dayjs"
import { streets } from "@/src/lib/seeds.json"

import { Header } from "@/src/components/Header"
import { ListStreets } from "@/src/components/presence/ListStreets"

interface Street {
  code: string
  title: string
  active: boolean
  weekday: number
}

export default function PresenceRoute() {
  const { id, title } = useLocalSearchParams()
  const [streetSelected, setStreetSelected] = useState<Street[]>([])

  useEffect(() => {
    function getStreetsByEnvironment(environment: string) {
      const streetData = streets.find((street) =>
        street.environments.includes(environment)
      )
      if (streetData) {
        // Mapeia as ruas e ajusta o valor de active
        const updatedStreets = streetData.street.map((street: Street) => ({
          ...street,
          active: street.weekday === today ? street.active : false, // Define active como false se o weekday não for igual ao dia atual
        }))
        setStreetSelected(updatedStreets)
      } else {
        setStreetSelected([])
      }
    }

    getStreetsByEnvironment(id.toString())
  }, [id, streets, today])

  return (
    <View className="flex-1 items-center bg-background">
      <Header title="Presença" parameter={title.toString()} back={true} />
      <View className="flex-1 w-full max-w-[90%] mt-10">
        <Text className="text-white font-rajdhani_700 text-2xl mb-5">
          Corredores
        </Text>

        <FlatList
          data={streetSelected}
          keyExtractor={(item) => String(item.code)}
          renderItem={({ item }) => (
            <ListStreets
              title={item.title}
              active={item.active}
              onPress={
                item.active
                  ? () =>
                      router.push({
                        pathname: "/presence/street/[id]",
                        params: { id: item.code, title: item.title },
                      })
                  : undefined
              }
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 60 }}
        />
      </View>
    </View>
  )
}
