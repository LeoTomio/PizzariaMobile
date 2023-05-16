import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CategoryProps, ItemProps } from '../../pages/Order'

interface ItemListProps {
    data: ItemProps

}

export default function ListItem({ data }: ItemListProps) {
    return (
        <View style={styles.container}>
            <Text>{data.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
})