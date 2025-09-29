export interface Exercise {
  url: string;
  name: string;
  difficulty: string;
  video: string;
  machine: boolean;
}

export interface PainType {
  id: number;
  name: string;
  icon: string;
  description: string;
  link: string;
  img: string;
  backgroundImage: string;
  exercise: Exercise[];
  
}

export const data: PainType[] = [
  {
    id: 1,
    name: "Cuello",
    icon: "/iconos/Capa_1.svg",
    description: "Selecciona si estás experimentando dolor en el cuello.",
    link: "articulaciones",
    img: "/imgArt/img.cuello.svg",
    backgroundImage: "/background/backgroundcuello.jpg",
  
    exercise: [
      {
        url: "/neck1",
        name: "Flexiones profundas",
        difficulty: "fácil",
        video: "...",
        machine: false
      },
      {
        url: "/neck2",
        name: "Rotaciones",
        difficulty: "fácil",
        video: "...",
        machine: false
      },
      {
        url: "/neck3",
        name: "Encogimiento de hombros",
        difficulty: "fácil",
        video: "...",
        machine: false
      },
      {
        url: "/neck4",
        name: "Flexiones profundas contra resistencia",
        difficulty: "medio",
        video: "...",
        machine: false
      },
      {
        url: "/neck5",
        name: "Flexión de cuello",
        difficulty: "fácil",
        video: "...",
        machine: false
      },
      {
        url: "/neck6",
        name: "Flexión de cuello contra resistencia",
        difficulty: "medio",
        video: "...",
        machine: false
      },
      {
        url: "/neck7",
        name: "Extensión de cuello contra resistencia",
        difficulty: "medio",
        video: "...",
        machine: false
      },
      {
        url: "/neck8",
        name: "Inclinaciones de cuello",
        difficulty: "fácil",
        video: "...",
        machine: false
      },
      {
        url: "/neck9",
        name: "Isometría de cuello",
        difficulty: "fácil",
        video: "...",
        machine: false
      },
      {
        url: "/neck10",
        name: "Isometría de cuello con movimiento de brazos",
        difficulty: "fácil",
        video: "...",
        machine: false
      },
      {
        url: "/neck11",
        name: "Estiramiento de trapecio superior",
        difficulty: "fácil",
        video: "...",
        machine: false
      },
      {
        url: "/neck12",
        name: "Cat-Cow",
        difficulty: "fácil",
        video: "...",
        machine: false
      },
      {
        url: "/neck13",
        name: "Inclinaciones contra resistencia",
        difficulty: "difícil",
        video: "...",
        machine: false
      }
    ],
  },
  {
    id: 2,
    name: "Manos",
    icon: "/iconos/Capa_mano.svg",
    description: "Selecciona si estás experimentando dolor en las manos.",
    link: "issued/wrist",
    img: "/imgArt/img.manos.png",
    backgroundImage: "/background/eee1463f38a93c246a646e79c495a57b030b133e.jpg",
  
    exercise: [
      {
        url: "/wrist1",
        name: "Martillo",
        difficulty: "fácil",
        video: "...",
        machine: false
      },
      {
        url: "/wrist2",
        name: "Flexo-extensión",
        difficulty: "medio",
        video: "...",
        machine: false
      },
      {
        url: "/wrist3",
        name: "Estiramiento de muñeca",
        difficulty: "fácil",
        video: "...",
        machine: false
      },
      {
        url: "/wrist4",
        name: "Estiramiento de muñeca",
        difficulty: "fácil",
        video: "...",
        machine: false
      },
      {
        url: "/wrist5",
        name: "Estiramiento de flexores en pared",
        difficulty: "fácil",
        video: "...",
        machine: false
      },
      {
        url: "/wrist6",
        name: "Estiramiento de extensores en pared",
        difficulty: "fácil",
        video: "...",
        machine: false
      },
      {
        url: "/wrist7",
        name: "Intrínsecos de los dedos",
        difficulty: "medio",
        video: "...",
        machine: false
      },
      {
        url: "/wrist8",
        name: "Extensores de los dedos",
        difficulty: "difícil",
        video: "...",
        machine: false
      },
      {
        url: "/wrist9",
        name: "Movilidad activa de las muñecas en flexión",
        difficulty: "medio",
        video: "...",
        machine: false
      },
      {
        url: "/wrist10",
        name: "Movilidad activa de las muñecas en extensión",
        difficulty: "medio",
        video: "...",
        machine: false
      },
      {
        url: "/wrist11",
        name: "Desviación radial con mancuerna",
        difficulty: "medio",
        video: "...",
        machine: false
      },
      {
        url: "/wrist14",
        name: "Flexión con mancuerna",
        difficulty: "medio",
        video: "...",
        machine: false
      },
      {
        url: "/wrist15",
        name: "Curl de muñeca en polea",
        difficulty: "medio",
        video: "...",
        machine: false
      },
    ],
  },
  
]