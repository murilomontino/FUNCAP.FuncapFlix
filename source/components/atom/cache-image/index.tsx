import React from 'react'

type Props = {
  capa: string
}

const CacheImage = ({ capa }: Props) => {
  return (
    <img
      style={{
        width: 100,
        resizeMode: 'contain',
        height: 150,
      }}
      src={`http://192.168.100.3:3000/api/capa/${capa}`}
    />
  )
}

export default CacheImage
