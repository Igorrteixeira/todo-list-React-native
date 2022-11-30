import { View, Text } from 'react-native'
import * as S from "./styled"
import React from 'react'

type Props = {
  text: string,
  count: number,
  color: string
  handleClick: () => boolean | void
}

export const Sumary = (props: Props) => {
  return (
    <S.Container  >
      <Text onPress={props.handleClick}
        style={{ color: `${props.color}` }}>{props.text}</Text>
      <S.Count>{props.count}</S.Count>
    </S.Container>
  )
}

export default Sumary