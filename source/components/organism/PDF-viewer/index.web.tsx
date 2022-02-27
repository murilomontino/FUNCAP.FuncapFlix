import React, { useMemo, useState } from 'react'
import { Text, View } from 'react-native'
import { Page, pdfjs } from 'react-pdf'

import { useBooks } from '@/context/ContextBooks'
import { useScroll } from '@/context/ContextScroll'

import { path } from '@/services/config/api'

import {
  PDFContainer,
  ContainerControls,
  ContainerButton,
  TextButton,
  Container,
  ContainerButtonControls,
} from './styles'

import { useSize } from '@/hooks/use-size'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const PdfViewer = () => {
  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState(1)

  const {
    size: { width, height },
  } = useSize()

  const { book } = useBooks()
  const { scrollTop } = useScroll()
  const onDocumentLoadSuccess = (numPages: number) => {
    setNumPages(numPages)
  }

  const nextPage = () => {
    scrollTop()
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1)
    }
  }

  const prevPage = () => {
    scrollTop()
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1)
    }
  }

  const PDF = useMemo(() => {
    setPageNumber(1)
    return book
      ? {
          url: `${path}/pdf/${book}`,
          httpHeaders: {
            authorization: 'Api-key 2458cdd1-b568-52eb-a99f-d7e006dface9',
          },
        }
      : null
  }, [book])

  return (
    <Container
      style={{
        maxWidth: width,
        minHeight: height / 2,
      }}
    >
      <PDFContainer
        file={PDF}
        noData={() => {
          return (
            <View
              style={{
                width: width,
                height: height / 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text>Nenhum livro selecionado</Text>
            </View>
          )
        }}
        renderMode="svg"
        loading={() => {
          return (
            <View
              style={{
                width: width,
                height: height,
              }}
            ></View>
          )
        }}
        onLoadSuccess={(pdf) => onDocumentLoadSuccess(pdf.numPages)}
        onContextMenu={(e) => e.preventDefault()}
      >
        <Page
          height={height / 2}
          width={width / 1.5}
          loading={() => (
            <View
              style={{
                width: width,
                height: height * 2,
                backgroundColor: '#666666',
              }}
            ></View>
          )}
          pageNumber={pageNumber}
        />
      </PDFContainer>

      {!!book && (
        <ContainerControls>
          <TextButton>{`${pageNumber}/${numPages}`}</TextButton>
          <ContainerButtonControls>
            <ContainerButton onPress={prevPage} disabled={pageNumber === 1}>
              <TextButton
                style={[
                  pageNumber === 1 && {
                    fontWeight: 'normal',
                    color: 'transparent',
                  },
                ]}
              >
                Anterior
              </TextButton>
            </ContainerButton>
            <ContainerButton
              onPress={nextPage}
              disabled={pageNumber === numPages}
            >
              <TextButton
                style={[
                  pageNumber === numPages && {
                    fontWeight: 'normal',
                    color: 'transparent',
                  },
                ]}
              >
                Próximo
              </TextButton>
            </ContainerButton>
          </ContainerButtonControls>
        </ContainerControls>
      )}
    </Container>
  )
}

export default PdfViewer
