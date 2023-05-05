import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'

import { AuthContext } from '../../contexts/AuthContext'

export default function SignIn() {
    const { singOut } = useContext(AuthContext)
    return (
        <View>
            <Text>Tela Dashboard</Text>
            <Button
                title='Sair do app'
                onPress={singOut}
            />
        </View>
    )
}