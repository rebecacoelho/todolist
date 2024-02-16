import { FlatList, ScrollView, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import ItemTask from "./itemTask";
import { useState } from "react";

export default function Tasks({ createdTasksNumber, tasks, setTasks, setCreatedTasksNumber }: any) {
    const [completedTasks, setCompletedTasks] = useState(0)

    const handleToggleTask = (isChecked: boolean) => {
        setCompletedTasks((prevCount) => (isChecked ? prevCount + 1 : prevCount - 1));
    }  

    const handleRemoveTask = (title: string) => {
        const taskExists = tasks.includes(title);
    
        if (taskExists) {
          setCreatedTasksNumber((prevCount: number) => prevCount - 1);
          setTasks((prevTasks: string[]) => prevTasks.filter((task: string) => task !== title));
        }
    }

    return (
        <View>
            <View className="flex flex-row justify-between px-6">
                <View className="flex flex-row gap-2 items-center">
                    <Text className="text-customBlue-light font-bold text-sm">Criadas</Text>
                    <View className="bg-customGray-400 py-0.5 px-2 rounded-full">
                        <Text className="text-customGray-200">{createdTasksNumber}</Text>
                    </View>
                </View>
                <View className="flex flex-row gap-2 items-center">
                    <Text className="text-customPuprle-light font-bold text-sm">Concluídas</Text>
                    <View className="bg-customGray-400 py-0.5 px-2 rounded-full">
                        <Text className="text-customGray-200">{completedTasks}</Text>
                    </View>
                </View>
            </View>

            <View className="px-5">
                <View className="mt-5 py-12 border-t-[1px] border-customGray-300 flex justify-center items-center">
                    {tasks.length > 0 ? (
                        <FlatList
                            data={tasks}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                            <ItemTask title={item} onToggleTask={handleToggleTask} onRemoveTask={handleRemoveTask} />
                            )}
                            className="w-full"
                        />
                        ) : (
                        <>
                            <View>
                                <Feather name="clipboard" size={56} color='#808080'/>
                            </View>
                            <View className="mt-4">
                                <Text className="font-bold text-center text-customGray-300 text-sm">Você ainda não tem tarefas cadastradas</Text>     
                                <Text className="text-center text-customGray-300 text-sm">Crie tarefas e organize seus itens a fazer</Text>
                            </View>
                        </>
                    )
                }
                </View>
            </View>
        </View>
    )
}