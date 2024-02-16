import { TextInput, View } from "react-native";
import { Button } from "@/components/button";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

export default function InputAddTask({ onAddTask }: any) {
    const [taskText, setTaskText] = useState("");

    const handleAddTask = () => {
        if (taskText.trim() !== "") {
            onAddTask(taskText);
            setTaskText(""); // Limpar o TextInput
        }
    };

    return (
        <View className="flex flex-row absolute -top-5">
            <View className="flex ml-6 flex-1">
                <TextInput 
                    placeholderTextColor="#808080" 
                    className="py-4 pl-4 bg-customGray-500 text-customGray-100 rounded-md border-customGray-700" 
                    placeholder="Adicione uma nova tarefa" 
                    onChangeText={(text) => setTaskText(text)}
                    onSubmitEditing={handleAddTask}
                    value={taskText}
                />
            </View>
            <View className="ml-2 mr-6 text-center">
                <Button className="p-4" onPress={handleAddTask}>
                    <Button.Icon>
                        <Feather name="plus-circle" size={16} />
                    </Button.Icon>
                </Button>
            </View>
        </View>
    )
}
