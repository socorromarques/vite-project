import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import InputCheckBox from "../components/input-checkbox";
import InputText from "../components/input-text";
import Skeleton from "../components/skeleton";
import Text from "../components/text";
import PencilIcon from '../assets/icons/pencil.svg?react';
import PlusIcon from '../assets/icons/plus.svg?react';
import XIcon from '../assets/icons/x.svg?react';
import CheckIcon from '../assets/icons/check.svg?react';
import TrashIcon from '../assets/icons/trash.svg?react';
import SpinnerIcon from '../assets/icons/spinner.svg?react';

export default function PageComponents() {
    return (
  <Container>
    <div>
      
      <div className="flex flex-col gap-2">
        <Text variant="body-md-bold" className="text-pink-dark">Olá, mundo!</Text>
        <Text className="text-green-base">Olá, mundo!</Text>
        <Text variant="body-md-bold" className="text-blue-base">Olá, mundo!</Text>
      </div>

      <div className='flex gap-6'>
        <Icon svg={TrashIcon} className="fill-pink-base"/>
        <Icon svg={PencilIcon} className="fill-green-dark"/>
        <Icon svg={CheckIcon} className="fill-pink-dark"/>
        <Icon svg={PlusIcon} className="fill-blue-base"/>
        <Icon svg={SpinnerIcon} animate/>
        <Icon svg={XIcon} className="fill-red-base"/>
      </div>

      <div className="flex gap-2">
        <Badge variant={"primary"}>5</Badge>
        <Badge variant={"secondary"}>2 de 5</Badge>
        <Badge loading>5</Badge>
      </div>

      <div>
        <Button icon={PlusIcon}>Nova Tarefa</Button>
      </div>

      <div>
       <ButtonIcon icon={TrashIcon} />
       <ButtonIcon icon={TrashIcon} variant="secondary" />
       <ButtonIcon icon={TrashIcon} variant="tertiary" />
      </div>

      <div>
        <InputText />
      </div>

      <div>
        <InputCheckBox />

        <InputCheckBox loading />
      </div>

      <div>
        <Card size="md">Bom dia Vida!</Card>
      </div>

      <div>
        <Skeleton className="h-8" />
        <Skeleton className="h-8" />
        <Skeleton className="w-64 h-8" />
      </div>

    </div>
  </Container>
  )
}