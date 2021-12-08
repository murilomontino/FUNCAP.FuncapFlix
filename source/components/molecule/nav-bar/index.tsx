import React from 'react'
import { StyleSheet, View } from 'react-native'

import ItemNavBar from '@/components/atom/item-nav-bar'

type Props = {
  flexDirection?:
    | 'row'
    | 'column'
    | 'row-reverse'
    | 'column-reverse'
    | undefined
}

const NavBar: React.FC<Props> = ({ flexDirection = 'row' }) => {
  return (
    <View
      style={{
        flexDirection: flexDirection,
      }}
    >
      <ItemNavBar
        title="FILMES"
        link="https://funcap.mapacultural.se.gov.br/streaming/movies"
      />
      <ItemNavBar
        title="SHOWS"
        link="https://funcap.mapacultural.se.gov.br/streaming/shows"
      />
      <ItemNavBar
        title="PROGRAMAS DE TV"
        link="https://funcap.mapacultural.se.gov.br/streaming/tv-programs"
      />

      <ItemNavBar title="LITERATURA" select={true} />

      <ItemNavBar
        title="ARTES VISUAIS"
        link="https://funcap.mapacultural.se.gov.br/streaming/workshops"
      />

      <ItemNavBar title="AGENDA CULTURAL" />
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({})
