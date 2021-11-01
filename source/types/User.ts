// Data Types
export type User = {
	id: number
	senha: string
	nome: string
	email: string
	sobrenome: string
	telefone?: string | null
	codIbge: string
	cpf: string
	permissao: number
	ubs?: number
	nome_ubs?: string | null
	cep_ubs?: string | null
	bairro_ubs?: string | null
	cidade_ubs?: string | null
	numero_ubs?: string | null
	rua_ubs?: string | null
	img_perfil?: string | null
}
