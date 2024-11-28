import clsx from "clsx"
import { router } from "expo-router"
import { Feather } from "@expo/vector-icons"
import { View, Text, TouchableOpacity } from "react-native"

type ListStreetsProps = {
  title: string
  active: boolean
  address: string
}

export function ListStreets({ title, active, address }: ListStreetsProps) {
  return (
    <View className="w-full h-13 flex-row mb-2">
      <View className="w-[40px] rounded-l-lg bg-foreground items-center justify-center border border-outline">
        <View
          className={clsx("rounded-full h-2 w-2", {
            ["bg-green-500"]: active === true,
            ["bg-red-500"]: active === false,
          })}
        />
      </View>
      <View className="max-w-[60%] bg-foreground w-full justify-center pl-4 border-t-[1px] border-b-[1px] border-outline">
        <Text className="text-white text-base font-rajdhani_700">{title}</Text>
      </View>
      <TouchableOpacity
        disabled={!active}
        activeOpacity={0.7}
        onPress={
          active ? () => router.push(`/presence/street/${address}`) : undefined
        }
        className={clsx(
          "bg-foreground flex-1 rounded-r-lg items-center justify-evenly border border-outline flex-row",
          {
            ["bg-foreground/80"]: active === false,
          }
        )}
      >
        <Feather name="edit" size={16} color="#fff" />
        <Text className="text-white font-rajdhani_700">Editar</Text>
      </TouchableOpacity>
    </View>
  )
}
