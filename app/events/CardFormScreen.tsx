import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { Textarea, TextareaInput } from "@/components/ui/textarea";
import { VStack } from "@/components/ui/vstack";
import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type CardData = {
  id?: string;
  title: string;
  description: string;
};

interface CardFormScreenProps {
  card?: CardData;
}

const CardFormScreen: React.FC<CardFormScreenProps> = ({ card }) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => router.replace("/events");

  return (
    <SafeAreaView className="flex-1" edges={["top", "left", "right"]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
        className="flex-1"
      >
        <Box className="w-screen p-2">
          <VStack className="flex-row justify-between items-center mb-4">
            <Pressable className="px-2 py-1" onPress={() => router.back()}>
              <Text className="text-lg font-bold">&larr;voltar</Text>
            </Pressable>
            <Text>{card ? "Editar Evento" : "Adicionar novo evento"}</Text>
            <VStack className="w-16" />
          </VStack>
        </Box>
        <VStack space="md" className="p-5">
          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>Titulo</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                placeholder="Digite o titulo do evento"
                value={card?.title ? card.title : title}
                onChangeText={setTitle}
              />
            </Input>
          </FormControl>

          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>Descricao</FormControlLabelText>
            </FormControlLabel>
            <Textarea>
              <TextareaInput
                placeholder="Digite a descricao do evento"
                value={card?.description ? card.description : description}
                onChangeText={setDescription}
              />
            </Textarea>
          </FormControl>

          <Button onPress={handleSave}>
            <ButtonText>Salvar</ButtonText>
          </Button>
        </VStack>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CardFormScreen;
