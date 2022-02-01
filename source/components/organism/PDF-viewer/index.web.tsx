import React, { useMemo, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'
import { Document, Page, pdfjs } from 'react-pdf'

import { useBooks } from '@/components/context/ContextBooks'
import { useScroll } from '@/components/context/ContextScroll'

import { path } from '@/services/config/api'

import './PdfViewer.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const PdfViewer = () => {
  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState(1)

  const { width, height } = useDimensions().window

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
    <View
      style={{
        maxWidth: width,
        minHeight: height / 2,
        backgroundColor: '#666666',
      }}
    >
      <Document
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
        className="pdf-container"
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
      </Document>

      {book && (
        <View
          style={{
            height: 80,
            elevation: 5,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            flex: 1,
          }}
        >
          <Text style={styles.txtButton}>{`${pageNumber}/${numPages}`}</Text>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={prevPage}
              disabled={pageNumber === 1}
            >
              <Text
                style={[
                  styles.txtButton,
                  pageNumber === 1 && {
                    fontWeight: 'normal',
                    color: 'transparent',
                  },
                ]}
              >
                Anterior
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonContainer]}
              onPress={nextPage}
              disabled={pageNumber === numPages}
            >
              <Text
                style={[
                  styles.txtButton,
                  pageNumber === numPages && {
                    fontWeight: 'normal',
                    color: 'transparent',
                  },
                ]}
              >
                Próximo
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  )
}

export default PdfViewer

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 12,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtButton: {
    fontVariant: ['small-caps'],
    color: '#666666',
    fontWeight: '500',
  },
})
