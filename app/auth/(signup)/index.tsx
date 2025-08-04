import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { KeyboardAvoidingView, Platform, Pressable } from "react-native";
import { Text } from "@/components/ui/text";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { useState } from "react";
import { Button, ButtonText } from "@/components/ui/button";
import { router } from "expo-router";
const SignupScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1"
    >
      <Box className="flex-1 bg-background-light0">
        <VStack space="lg" className="h-full p-6 justify-center">
          <Text size="xl" className="text-center mb-4">
            Criar Conta
          </Text>
          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>Nome</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                value={name}
                onChangeText={setName}
                placeholder="Digite seu nome"
              />
            </Input>
          </FormControl>

          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>Email</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                value={email}
                onChangeText={setEmail}
                placeholder="Digite seu email"
              />
            </Input>
          </FormControl>

          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                value={password}
                onChangeText={setPassword}
                placeholder="Digite sua senha"
                secureTextEntry
              />
            </Input>
          </FormControl>

          <Button
            variant="solid"
            size="md"
            action="primary"
            isDisabled={false}
            onPress={() => router.replace("/auth/(login)")}
          >
            <ButtonText>Signup</ButtonText>
          </Button>

          <Pressable
            className="mt-4"
            onPress={() => router.push("/auth/(login)")}
          >
            <Text size="sm" underline>
              Já tem uma conta?
            </Text>
          </Pressable>
        </VStack>
      </Box>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;
