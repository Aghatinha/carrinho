import React from "react";
import { StyleSheet, Dimensions,  View } from 'react-native';
import carrinho from "../../mocks/carrinho";
import Detalhe from "./components/Detalhe";


import Topo from './components/Topo';

const width = Dimensions.get('screen').width;

export default function Carrinho () {
    return <> 

<Topo titulo={carrinho.topo.titulo}/>

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