import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import { CategoryProps } from '../../pages/Order'


interface ModalPickerProps {
    options: CategoryProps[];
    handleCloseModal: () => void;
    selectedItem: () => void;
}

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default function ModalPicker({ handleCloseModal, options, selectedItem }: ModalPickerProps) {

    function onPressItem(item: CategoryProps) {
        console.log(item)
    }

    const option = options.map((item, index) => {
        return (
            <TouchableOpacity key={index} style={styles.option} onPress={() => onPressItem(item)}>
                <Text>
                    {item?.name}
                </Text>
            </TouchableOpacity>
        )
    })


    return (
        <TouchableOpacity style={styles.container} onPress={handleCloseModal}>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {option}
                </ScrollView>
            </View>


        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        width: WIDTH - 20,
        height: HEIGHT / 2,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#8A8A8A',
        borderRadius: 4
    },
    option: {}
})