import { router } from "expo-router"
import { useState, useEffect } from "react"
import { useLocalSearchParams } from "expo-router"
import { View, Text, FlatList } from "react-native"

import { streets } from "@/src/hooks/seeds.json"

import { Header } from "@/src/components/Header"
import { ListStreets } from "@/src/components/presence/ListStreets"

interface Street {
  active: boolean
  title: string
}

export default function StreetRoute() {
  const { id, title } = useLocalSearchParams()
  const [streetSelected, setStreetSelected] = useState<Street[]>([])

  useEffect(() => {
    function getStreetsByEnvironment(environment: string) {
      const streetData = streets.find((street) =>
        street.environments.includes(environment)
      )
      if (streetData) {
        setStreetSelected(streetData.street)
      } else {
        setStreetSelected([])
      }
    }

    getStreetsByEnvironment(id.toString())
  }, [id])

  return (
    <View className="flex-1 items-center bg-background">
      <Header title="Presença" parameter={title.toString()} back={true} />
      <View className="w-full flex-1 max-w-[90%] mt-10">
        <Text className="text-white font-rajdhani_700 text-2xl mb-5">
          Corredores
        </Text>

        <FlatList
          data={streetSelected}
          keyExtractor={(item) => String(item.title)}
          renderItem={({ item }) => (
            <ListStreets
              title={item.title}
              active={item.active}
              onPress={
                item.active
                  ? () =>
                      router.push({
                        pathname: "/presence/street/[id]",
                        params: { id: item.title },
                      })
                  : undefined
              }
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}
