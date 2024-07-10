import { View, Text } from "react-native";

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <View className="bg-[#202024] h-28 w-full items-center justify-center">
      <Text className="text-white font-rajdhani_700 mt-10 text-base">
        {title}           
      </Text>
    </View>
  );
}
