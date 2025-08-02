import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { KeyboardAvoidingView, Platform, Pressable } from "react-native";
import { Text } from "@/components/ui/text";
import { FormControl, FormControlLabel, FormControlLabelText } from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { useState } from "react";
import { Button, ButtonText } from "@/components/ui/button";
import { router } from "expo-router";
const SignupScreen = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            className="flex"
        >
            <Box>
                <VStack>
                    <Text>Criar Conta</Text>
                    <FormControl>
                        <FormControlLabel>
                            <FormControlLabelText>Nome</FormControlLabelText>
                        </FormControlLabel>
                        <Input>
                            <InputField 
                            value={name} 
                            onChangeText={setName} 
                            placeholder="Digite seu nome" 
                            secureTextEntry 
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
                        secureTextEntry 
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

                <Button variant="solid"
                    size="md"
                    action="primary"
                    isDisabled={false}
                >
                    <ButtonText>Login</ButtonText>
                </Button>

                    <Pressable className="mt-4" onPress={() => router.push("/auth/(login)")}>
                        <Text size="sm" underline >
                            Já tem uma conta?
                        </Text>
                    </Pressable>
                </VStack>
            </Box>
        </KeyboardAvoidingView>
    )
};

export default SignupScreen;