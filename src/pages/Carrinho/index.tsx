import React from "react";
import { StyleSheet, Dimensions,  View } from 'react-native';
import Detalhe from "./components/Detalhe";


import Topo from './components/Topo';

const width = Dimensions.get('screen').width;
export default function Carrinho () {
    return <> 
<Topo/>
    <View style={estilos.carrinho}>
       <Detalhe/>
    </View>
    </>
}

const estilos = StyleSheet.create({

    carrinho:{
        paddingVertical:8,
        paddingHorizontal:16
    }
})