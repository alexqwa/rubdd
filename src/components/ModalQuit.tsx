import React, { ReactNode } from "react";
import { View, Modal, ModalProps, Text } from "react-native";

interface ModalQuitProps extends ModalProps {
  children: ReactNode;
  closeModal: () => void;
}

export function ModalQuit({ closeModal, children, ...rest }: ModalQuitProps) {
  return (
    <Modal transparent animationType="slide" statusBarTranslucent {...rest}>
      <View className="w-full h-[200] bottom-0 absolute bg-foreground border border-outline rounded-t-3xl">
        <View className="flex-1 items-center">
          <View className="flex-row">
            <Text className="font-rajdhani_700 text-white text-base">
              Deseja sair do <Text className="text-green-500">RUB?</Text>
            </Text>
          </View>

          <View className="flex-row">{children}</View>
        </View>
      </View>
    </Modal>
  );
}
