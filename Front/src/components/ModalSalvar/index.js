import React, {useState} from 'react'
import {View, Text, Button, Modal, Stylesheet} from 'react-native'


export default function(){

    const [visivel,setVisivel] = useState(false)

    // const mudaState = ()  =>{
    //     setVisivel(!visivel);
    // };

    return(
        <View>

            <Modal 
            animationType="slide"
            transparent={true}
            visible={true}
            style={{}}>

             <View>
                <Text>Currículo salvo!</Text>
                <Button
                title="Fechar">
                 onPress={()=>
                 {setVisivel(false)}}   
                </Button>
             </View>   

            </Modal>

        </View>
    );

}