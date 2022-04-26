/* eslint-disable @typescript-eslint/no-var-requires */
import React, { createContext, useContext, useState } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'

import { useAssets } from 'expo-asset'

import { AntDesign } from '@expo/vector-icons'

import ErrorImg from '@/assets/Alerts/Error.png'
import SuccessImg from '@/assets/Alerts/Success.png'
import WarningImg from '@/assets/Alerts/Warning.png'
import colors from '@/global/colors'

type Toast = 'warning' | 'erro' | 'success'

type TypeToast = {
  [key in Toast]: {
    icon: string
    title: string
    color: string
  }
}

type Context = {
  AlertToast: (type: Toast, text: string) => void
}

const ToastContext = createContext<Context>({} as Context)

const ToastContextProvider: React.FC = ({ children }) => {
  const [visible, setVisible] = useState(false)

  const icons = useAssets([ErrorImg, WarningImg, SuccessImg])

  const [icon, setIcon] = useState(require('../../assets/Alerts/Error.png'))
  const [color, setColor] = useState('tomato')
  const [title, setTitle] = useState('Deu Certo')
  const [text, setText] = useState('Deu muito certo')

  const typesToast: TypeToast = {
    erro: {
      icon: ErrorImg,
      color: colors.erro,
      title: 'Erro!',
    },
    warning: {
      icon: WarningImg,
      color: colors.warning,
      title: 'Aviso!',
    },
    success: {
      icon: SuccessImg,
      color: colors.success,
      title: 'Sucesso!',
    },
  }

  const AlertToast = (type: Toast, text: string) => {
    setColor(typesToast[type].color)
    setIcon(typesToast[type].icon)
    setText(text)
    setTitle(typesToast[type].title)
    setVisible(true)
    setTimeout(() => {
      setVisible(false)
    }, 5000)
  }

  const ToastModal = () => {
    return (
      <View
        style={[
          styles.toast,
          {
            bottom: 10,
            backgroundColor: color,
          },
        ]}
      >
        <View style={[styles.iconStatus]}>
          <Image source={icon} style={styles.img} />
        </View>
        <View style={styles.content}>
          <Text style={[styles.title]}>{title}</Text>
          <Text style={styles.subtitle}>{text}</Text>
        </View>
        <TouchableOpacity>
          <AntDesign name="close" size={24} color={colors.grey20} />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <ToastContext.Provider
      value={{
        AlertToast,
      }}
    >
      {children}
      {visible && <ToastModal />}
    </ToastContext.Provider>
  )
}

export default ToastContextProvider

export const useToast = (): Context => {
  return useContext(ToastContext)
}

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    borderBottomWidth: 10,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    minHeight: 100,
    shadowColor: '#ccc',

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
  },

  content: {
    flex: 1,
    alignSelf: 'center',

    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    marginTop: 5,
    fontWeight: '300',
    fontSize: 13,
    color: '#000',
  },
  img: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
  },
  iconStatus: {
    width: 40,
    height: 40,
    alignSelf: 'center',

    // backgroundColor: '#fff',
    borderRadius: 50,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
