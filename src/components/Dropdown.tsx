import { useCallback, useState } from "react"
import { View, Text, TouchableOpacity, FlatList } from "react-native"
import { Feather } from "@expo/vector-icons"
import clsx from "clsx"

export function Dropdown() {
  const [expanded, setExpanded] = useState(false)
  const toggleExpanded = useCallback(() => setExpanded(!expanded), [expanded])

  return (
    <View className="mt-4">
      <TouchableOpacity
        className={clsx(
          "bg-foreground h-13 border border-outline rounded-lg justify-between flex-row items-center px-4",
          {
            ["rounded-b-none"]: expanded === true,
          }
        )}
        activeOpacity={0.7}
        onPress={toggleExpanded}
      >
        <Text className="text-white font-rajdhani_700 text-base">
          Selecione o modelo
        </Text>
        <Feather
          name={expanded ? "chevron-up" : "chevron-down"}
          size={18}
          color="#fff"
        />
      </TouchableOpacity>
      {expanded ? (
        <View className="bg-foreground border border-outline rounded-b-lg -mt-[1px] px-4 max-h-[250px]">
          <FlatList
            ItemSeparatorComponent={() => (
              <View className="h-[1px] bg-[#323238]" />
            )}
            scrollEnabled={false}
            keyExtractor={(item) => item.id}
            data={[
              { id: "1", value: "Bipar todos os produtos" },
              {
                id: "2",
                value: "Deixar faltando poucos produtos",
              },
              {
                id: "3",
                value: "Bipar de forma automática",
              },
            ]}
            renderItem={({ item }) => (
              <TouchableOpacity activeOpacity={0.7} className="py-4">
                <Text className="text-white font-poppins_500">
                  {item.value}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      ) : null}
    </View>
  )
}
