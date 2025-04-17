import {  TextInput, StyleSheet, TextInputProps } from 'react-native'
import React from 'react'

type CustomInputProps = {
     //Custom props go here
} & TextInputProps

export default function CustomInput(props: CustomInputProps) {
  return (
    <TextInput {...props} style={[styles.input, props.style]}  />
  )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
      },
})
