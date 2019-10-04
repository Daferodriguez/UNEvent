import React from "react";
import { View, Text } from "react-native";
import styles  from './styles';
import InputText from "../InputText/index";
import ButtonText from "../ButtonText/index";
import ButtonIcon from "../ButtonIcon/index";

const NewEventView = ({}) => {

  	return (
      <View style={styles.container}>
        <View>
          <InputText placeholder={"Nombre evento:"} ></InputText>
          <InputText placeholder={"Fecha"} icon={'calendar'} style={styles.inputDate}></InputText>
          
          <View>
            <InputText placeholder={"Lugar"} icon={'map-marker'}></InputText>

            <InputText placeholder={"Salón"}  ></InputText>
          </View>
        <ButtonText name={"Seleccionar imagen"} background={'outline'}></ButtonText>
        </View>
        <ButtonText name={"Publicar"}></ButtonText>
      
      </View>
  	);
};

export default NewEventView;
