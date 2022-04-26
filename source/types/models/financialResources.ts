/* eslint-disable no-unused-vars */
export enum FinancialResources {
	NaoInformado = 0,
	LeiAldirBlanc = 1,
	Funcart,
	RecursoDoArtista,
	Federal,
	Municipal,
}

export const mapFinancialResources = [
	{
		id: FinancialResources.NaoInformado,
		recursos: 'Não informado',
	},
	{
		id: FinancialResources.LeiAldirBlanc,
		recursos: 'Lei Aldir Blanc',
	},
	{
		id: FinancialResources.Funcart,
		recursos: 'Funcart',
	},
	{
		id: FinancialResources.RecursoDoArtista,
		recursos: 'Recurso do artista',
	},
	{
		id: FinancialResources.Federal,
		recursos: 'Federais',
	},
	{
		id: FinancialResources.Municipal,
		recursos: 'Municipais',
	},
]
