// src/app/dados.ts

export interface Profissional {
  id: string;
  nome: string;
  descricao: string;
  especialidade: string;
  categoria: string;
  imagem: string;
  contato: string;
}

export const profissionais: Profissional[] = [
  {
    id: "1",
    nome: "Mariana Almeida",
    descricao:
      "Especialista em cuidados faciais e tratamentos para revitalização e saúde da pele.",
    especialidade: "Esteticista Facial",
    categoria: "facial",
    imagem: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500",
    contato: "(12) 98845-2176",
  },

  {
    id: "2",
    nome: "Camila Rodrigues",
    descricao:
      "Atua com procedimentos corporais, buscando promover bem-estar, autoestima e qualidade de vida.",
    especialidade: "Esteticista Corporal",
    categoria: "corporal",
    imagem:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500",
    contato: "(12) 99732-4815",
  },

  {
    id: "3",
    nome: "Juliana Martins",
    descricao:
      "Profissional especializada em design de sobrancelhas e procedimentos voltados à valorização da beleza natural.",
    especialidade: "Designer de Sobrancelhas",
    categoria: "sobrancelhas",
    imagem:
      "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=500",
    contato: "(12) 99618-7534",
  },

  {
    id: "4",
    nome: "Beatriz Santos",
    descricao:
      "Especialista em tratamentos para cuidados com a pele, limpeza facial e protocolos de hidratação.",
    especialidade: "Esteticista Facial",
    categoria: "facial",
    imagem:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500",
    contato: "(12) 99154-6328",
  },

  {
    id: "5",
    nome: "Larissa Oliveira",
    descricao:
      "Atua com tratamentos corporais e técnicas de massagem voltadas ao relaxamento e bem-estar.",
    especialidade: "Esteticista Corporal",
    categoria: "corporal",
    imagem: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500",
    contato: "(12) 98726-1943",
  },

  {
    id: "6",
    nome: "Amanda Ferreira",
    descricao:
      "Profissional especializada em cuidados com cílios e sobrancelhas, com foco em resultados naturais e personalizados.",
    especialidade: "Especialista em Cílios e Sobrancelhas",
    categoria: "beleza",
    imagem:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500",
    contato: "(12) 99583-7412",
  },

  {
    id: "7",
    nome: "Isabela Costa",
    descricao:
      "Especialista em estética facial e protocolos personalizados para diferentes tipos e necessidades de pele.",
    especialidade: "Esteticista Facial",
    categoria: "facial",
    imagem:
      "https://images.unsplash.com/photo-1595959183082-7bce9b7b6b8b?w=500",
    contato: "(12) 98964-3287",
  },

  {
    id: "8",
    nome: "Renata Souza",
    descricao:
      "Atua na área de estética corporal e bem-estar, oferecendo atendimento personalizado para cada cliente.",
    especialidade: "Esteticista Corporal",
    categoria: "corporal",
    imagem:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500",
    contato: "(12) 99841-5263",
  },
];
