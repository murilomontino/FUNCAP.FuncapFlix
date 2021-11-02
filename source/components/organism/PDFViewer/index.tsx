import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Document, Page, pdfjs } from 'react-pdf'
import './PdfViewer.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

import constants from 'global/constants'

import pdf from './example.pdf'

const PdfViewer = () => {
	const [numPages, setNumPages] = useState<number>(0)
	const [pageNumber, setPageNumber] = useState(1)

	const onDocumentLoadSuccess = (numPages: number) => {
		setNumPages(numPages)
	}

	const nextPage = () => {
		if (pageNumber < numPages) {
			setPageNumber(pageNumber + 1)
		}
	}

	const prevPage = () => {
		if (pageNumber > 1) {
			setPageNumber(pageNumber - 1)
		}
	}

	return (
		<View
			style={{
				flex: 1,

				width: '100%',
				backgroundColor: '#666666',
			}}
		>
			<View
				style={{
					flex: 4,
					marginTop: constants.headerHight + 20,
					elevation: 5,
					height: '100%',
				}}
			>
				<Document
					file={pdf}
					renderMode="svg"
					onLoadSuccess={(pdf) => onDocumentLoadSuccess(pdf.numPages)}
					onContextMenu={(e) => e.preventDefault()}
					className="pdf-container"
				>
					<Page height={1280} width={720} pageNumber={pageNumber} />
				</Document>
			</View>
			<View
				style={{
					height: 80,
					marginTop: 180,
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
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
		color: '#fff',
		fontWeight: '500',
	},
})
