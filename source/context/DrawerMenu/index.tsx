/* eslint-disable react/prop-types */
import React, { createContext, useContext, useRef } from 'react'
import { DrawerLayout } from 'react-native-gesture-handler'

import NavBar from 'components/molecule/nav-bar'

type ContextDrawer = {
  drawerToggle: () => void
}

const DrawerContext = createContext({} as ContextDrawer)

const DrawerProvider: React.FC = ({ children }) => {
  const renderDrawer = () => {
    return <NavBar flexDirection="column" />
  }
  const drawer = useRef<DrawerLayout>()

  const drawerToggle = () => {
    drawer.current?.openDrawer()
  }

  const ComponentDrawer = () => {
    return (
      <DrawerLayout
        ref={drawer}
        drawerWidth={250}
        drawerPosition={DrawerLayout.positions.Left}
        drawerType="front"
        drawerBackgroundColor="rgba(0,0,0,0.5)"
        renderNavigationView={renderDrawer}
      //onDrawerSlide={handleDrawerSlide}
      >
        {children}
      </DrawerLayout>
    )
  }

  return (
    <DrawerContext.Provider
      value={{
        drawerToggle,
      }}
    >
      <ComponentDrawer />
    </DrawerContext.Provider>
  )
}

export default DrawerProvider

export const useDrawer = (): ContextDrawer => {
  return useContext(DrawerContext)
}
