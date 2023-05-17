import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import { CategoryProps } from '../../pages/Order'


interface ModalPickerProps {
    options: CategoryProps[];
    handleCloseModal: () => void;
    selectedItem: (item: CategoryProps) => void;
}

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default function ModalPicker({ handleCloseModal, options, selectedItem }: ModalPickerProps) {

    function onPressItem(item: CategoryProps) {
        selectedItem(item);
        handleCloseModal();
    }

    const option = options.map((item, index) => {
        return (
            <TouchableOpacity key={index} style={styles.option} onPress={() => onPressItem(item)}>
                <Text style={styles.item}>
                    {item?.name}
                </Text>
            </TouchableOpacity>
        )
    })
    return (
        <TouchableOpacity style={styles.container} onPress={handleCloseModal}>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false} >
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
        marginTop: 20,
        width: WIDTH - 30,
        height: HEIGHT / 2,
        backgroundColor: '#CDC9C9',
        borderWidth: 1,
        borderColor: '#000',
        borderTopLeftRadius:12,
        borderTopRightRadius:12,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    option: {
        alignItems: 'flex-start', 
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        borderBottomRightRadius: 19,
        borderBottomLeftRadius:19,
        borderTopColor: '#AFAEAE',
        elevation:5,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#757373',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    item: {
        marginLeft: 18,
        margin: 16,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#101026'
    }
})