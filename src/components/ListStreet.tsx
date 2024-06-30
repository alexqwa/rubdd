import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import clsx from "clsx";
import { router } from "expo-router";

type ListStreetProps = {
  title: string;
  active: boolean;
};

export function ListStreet({ title, active }: ListStreetProps) {
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
        <Text className="text-white font-poppins_500">{title}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => router.push("products")}
        className="bg-foreground flex-1 rounded-r-lg items-center justify-evenly border border-outline flex-row"
      >
        <Feather name="edit" size={16} color="#fff" />
        <Text className="text-white font-rajdhani_700">Editar</Text>
      </TouchableOpacity>
    </View>
  );
}
