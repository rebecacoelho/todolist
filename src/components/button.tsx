import { ReactNode } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
    children: ReactNode
}

type ButtonTextProps = {
    children: ReactNode
}

type ButtonIconProps = {
    children: ReactNode
}


function Button({ children, ...rest}: ButtonProps) {
    return (
        <TouchableOpacity className="h-12 bg-customBlue-dark rounded-md items-center justify-center flex-row" activeOpacity={0.7} {...rest}>
            {children}
        </TouchableOpacity>
    )
}

function ButtonIcon({ children }: ButtonIconProps) {
    return children
}

Button.Icon = ButtonIcon

export { Button }