import React from "react";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckBox from "../components/input-checkbox";
import Text from "../components/text";
import PencilIcon from "../assets/icons/pencil.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import InputText from "../components/input-text";

export default function TaskItem() {
    const [isEditing, setIsEditing] = React.useState(false);

    function handleEditTask() {
        setIsEditing(true);
    }

    function handleExitEditTask() {
        setIsEditing(false);
    }

    return(
        
        <Card size="md" className="flex items-center gap-4">
            {!isEditing? (
                <>
                    <InputCheckBox />
                    <Text className="flex-1">Curso React - Rocketseat</Text>
                    <div className="flex gap-1">
                        <ButtonIcon icon={TrashIcon} variant="tertiary" />
                        <ButtonIcon 
                          icon={PencilIcon} 
                          variant="tertiary" 
                          onClick={handleEditTask}
                        />
                    </div>
                </>
            ) : (
                <>
                    <InputText />
                    <div className="flex gap-1">
                        <ButtonIcon icon={XIcon} variant="secondary" onClick={handleExitEditTask} />
                        <ButtonIcon 
                          icon={CheckIcon} 
                          variant="primary"
                          onClick={handleExitEditTask}
                        />
                    </div>
                </>
            )}
        </Card>
        
    )
}