import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface ItemTaskProps {
    title: string;
    onToggleTask: (isChecked: boolean) => void;
    onRemoveTask: (title: string) => void;
}  

export default function ItemTask({ title, onToggleTask, onRemoveTask }: ItemTaskProps) {
    const [checked, setChecked] = useState(false);

    const handleCheckboxPress = () => {
        setChecked(!checked)
        onToggleTask(!checked);
    }

    return (
        <View className="bg-customGray-500 border-[1px] border-customGray-500 shadow-md flex flex-row justify-between items-center py-3 px-2 rounded-lg w-[90vw] mb-3"> 
            <BouncyCheckbox
                size={24}
                fillColor="#5E60CE"
                innerIconStyle={{ borderWidth: 2, borderColor: checked ? '#5E60CE' : '#4EA8DE'}}
                onPress={() => handleCheckboxPress()} 
                className="w-6 pl-3"
            />
            <View className="w-9/12">
                <Text className={`text-customGray-100 flex-wrap text-justify pl-2 ${checked ? 'line-through text-customGray-300' : ''}`}>
                   {title}
                </Text> 
            </View>
            <TouchableOpacity onPress={() => onRemoveTask(title)}>
                <View>
                <Feather name="trash" size={24} color='#808080'/>
                </View>
            </TouchableOpacity>
        </View>
        
    )
}