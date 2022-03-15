import { v4 as uuid } from 'uuid'

const items = [
  // this is the parent or 'item'
  {
    name: 'Ficção',
    id: uuid(),
    // these are the children or 'sub items'
    children: [
      {
        name: 'Ação e Aventura',
        id: uuid(),
      },
      {
        name: 'Ficção afro-americana',
        id: uuid(),
      },
      {
        name: 'Antologias',
        id: uuid(),
      },
      {
        name: 'Infantil',
        id: uuid(),
      },
      {
        name: 'Ficção Cristâ',
        id: uuid(),
      },
      {
        name: 'Clássicos',
        id: uuid(),
      },
      { name: 'Quadrinhos e romances gráficos', id: uuid() },
      { name: 'Chegando à maioridade', id: uuid() },
      { name: 'Ficção Contemporânea', id: uuid() },
      { name: 'Cultural e étnico', id: uuid() },
      { name: 'Fantasia', id: uuid() },
      { name: 'Fantasia épica', id: uuid() },
      { name: 'Jogos e LitRPG', id: uuid() },
      { name: 'Fantasia Urbana', id: uuid() },
      { name: 'Ficção histórica', id: uuid() },
      { name: 'Humor e comédia', id: uuid() },
      { name: 'Ficção LGBTQIA+', id: uuid() },
      { name: 'Ficção política', id: uuid() },
      { name: 'Realismo mágico', id: uuid() },
      { name: 'Mashups', id: uuid() },
      { name: 'Mistério e crime', id: uuid() },
      { name: 'Mistérios aconchegantes', id: uuid() },
      { name: 'Mistérios Históricos', id: uuid() },
      { name: 'Peças e roteiros', id: uuid() },
      { name: 'Poesia', id: uuid() },
      { name: 'Romance contemporâneo', id: uuid() },
      { name: 'Romance histórico', id: uuid() },
      { name: 'Romance Paranormal', id: uuid() },
      { name: 'Comédia romântica', id: uuid() },
      { name: 'Suspense Romântico', id: uuid() },
      { name: 'Romance de viagem no tempo', id: uuid() },
      { name: 'Ficção científica', id: uuid() },
      { name: 'Distópico', id: uuid() },
      { name: 'Ficção científica militar', id: uuid() },
      { name: 'Pós-apocalíptico', id: uuid() },
      { name: 'Space Opera', id: uuid() },
      { name: 'Steampunk (e outros gêneros punk na ficção)', id: uuid() },
      { name: 'Viagem no tempo', id: uuid() },
      { name: 'Contos', id: uuid() },
      { name: 'Temáticas e motivações', id: uuid() },
      { name: 'Thriller e Suspense' },
      { name: 'Espionagem', id: uuid() },
      { name: 'Horror', id: uuid() },
      { name: 'Thriller legal', id: uuid() },
      { name: 'Thriller médico', id: uuid() },
      { name: 'Thriller psicológico', id: uuid() },
      { name: 'Techno-thriller', id: uuid() },
      { name: 'Ficção Feminina', id: uuid() },
      { name: 'Chick Lit', id: uuid() },
      { name: 'Jovem adulto', id: uuid() },
      { name: 'Novo Adulto', id: uuid() },
      { name: 'Dramaturgia', id: uuid() },
      { name: 'Questões Sociais e Familiares', id: uuid() },
      { name: 'Fantasia para jovens adultos', id: uuid() },
    ],
  },
  {
    name: 'Não Ficção',
    id: uuid(),
    children: [
      {
        name: 'Agricultura',
        id: uuid(),
      },
      { name: 'Biografias e memórias', id: uuid() },
      { name: 'Gestão de negócios', id: uuid() },
      { name: 'Guias de carreira', id: uuid() },
      { name: 'Não-ficção infantil', id: uuid() },
      { name: 'Quadrinhos não ficção', id: uuid() },
      { name: 'Computadores e Internet', id: uuid() },
      { name: 'Culinária, comida, vinho e bebidas espirituosas', id: uuid() },
      { name: 'Faça você mesmo e artesanato', id: uuid() },
      { name: 'Projeto', id: uuid() },
      { name: 'Educação e Referência', id: uuid() },
      { name: 'Entretenimento', id: uuid() },
      { name: 'Saúde e Bem-Estar', id: uuid() },
      { name: 'Casa e jardim', id: uuid() },
      { name: 'Humanidades e Ciências Sociais', id: uuid() },
      { name: 'Arte', id: uuid() },
      { name: 'História', id: uuid() },
      { name: 'Lei', id: uuid() },
      { name: 'Música', id: uuid() },
      { name: 'Filosofia', id: uuid() },
      { name: 'Ciência Política e Atualidades', id: uuid() },
      { name: 'Psicologia', id: uuid() },
      { name: 'Sociologia', id: uuid() },
      { name: 'Inspirador', id: uuid() },
      { name: 'LGBTQIA+ Não Ficção', id: uuid() },
      { name: 'Matemática e Ciências', id: uuid() },
      { name: 'Ciências da Terra, do Espaço e do Meio Ambiente', id: uuid() },
      { name: 'Engenharia', id: uuid() },
      { name: 'Contabilidade Finanças', id: uuid() },
      { name: 'Medicina, enfermagem e odontologia', id: uuid() },
      { name: 'Natureza', id: uuid() },
      { name: 'Nova era', id: uuid() },
      { name: 'Paternidade e famílias', id: uuid() },
      { name: 'Fotografia', id: uuid() },
      { name: 'Religião e Espiritualidade', id: uuid() },
      { name: 'Ateísmo', id: uuid() },
      { name: 'Não-ficção cristã', id: uuid() },
      { name: 'Autoajuda e autoaprimoramento', id: uuid() },
      { name: 'Sexo e Relacionamentos', id: uuid() },
      { name: 'Esportes e atividades ao ar livre', id: uuid() },
      { name: 'Tecnologia', id: uuid() },
      { name: 'Viajar por', id: uuid() },
      { name: 'Crime Verdadeiro', id: uuid() },
      { name: 'Casamentos', id: uuid() },
      { name: 'Escrita e Publicação', id: uuid() },
    ],
  },
]

export default items
