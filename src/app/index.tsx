import InputAddTask from "@/components/inputAddTask";
import Tasks from "@/components/tasks";
import { useState } from "react";
import { View, Image } from "react-native";

export default function Page() {
  const [createdTasksNumber, setCreatedTasksNumber] = useState(0)
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = (taskText: any) => {
    setCreatedTasksNumber((prevCount) => prevCount + 1);
    setTasks((prevTasks) => [...prevTasks, taskText]);
  }

  return (
    <View className="bg-customGray-700 flex-1">
      <View className="flex justify-center items-center pt-8 pb-12">
        <Image source={require("@/assets/logo.png")}/>
      </View>
      <View className="bg-customGray-600 flex-1 text-white">
        <InputAddTask onAddTask={handleAddTask} />
        <View className="pt-16 ">
          <Tasks createdTasksNumber={createdTasksNumber} tasks={tasks} setTasks={setTasks} setCreatedTasksNumber={setCreatedTasksNumber} />
        </View>
      </View>
    </View>
  );
}