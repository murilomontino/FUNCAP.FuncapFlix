import { GettersExhibitionsPhotos, SettersExhibitionsPhotos } from '@/types'

import api from '@/services'
import { Getter } from '@/services/config/types'

export const useSubmitPhoto = () => {
  const submit = async (
    params: Omit<SettersExhibitionsPhotos, 'name_uuid'>
  ): Promise<Getter<GettersExhibitionsPhotos>> => {
    try {
      const { data } = await api.post<Getter<GettersExhibitionsPhotos>>(
        `exhibitions/${params.nome_exibicao}`,
        params
      )

      return data
    } catch (error) {
      return { error: error.message, statusCode: 500 }
    }
  }

  return {
    submit,
  }
}
