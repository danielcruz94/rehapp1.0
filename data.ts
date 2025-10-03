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

export const data: PainType[] = 
  [
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
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Neck/flexionesProfundas.Neck.mp4",
          machine: false
        },
        {
          url: "/neck2",
          name: "Rotaciones",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Neck/Rotaciones.Neck.mp4",
          machine: false
        },
        {
          url: "/neck3",
          name: "Encogimiento de hombros",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Neck/EncogimientoHombros.Neck.mp4",
          machine: false
        },
        {
          url: "/neck4",
          name: "Flexiones profundas contra resistencia",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Neck/Flexiones+profundas+contraresistencia_compressed.mp4",
          machine: false
        },
        {
          url: "/neck5",
          name: "Flexión de cuello",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Neck/Flexion+de+cuello_compressed.mp4",
          machine: false
        },
        {
          url: "/neck6",
          name: "Flexión de cuello contra resistencia",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Neck/Flexion+de+cuello+contraresistencia_compressed.mp4",
          machine: false
        },
        {
          url: "/neck7",
          name: "Extensión de cuello contra resistencia",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Neck/Extension+de+cuello+contraresisitencia_compressed.mp4",
          machine: false
        },
        {
          url: "/neck8",
          name: "Inclinaciones de cuello",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Neck/Inclinasiones+de+cuello_compressed.mp4",
          machine: false
        },
        {
          url: "/neck9",
          name: "Isometría de cuello",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Neck/Isometria+de+cuello_compressed.mp4",
          machine: false
        },
        {
          url: "/neck10",
          name: "Isometría de cuello con movimiento de brazos",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Neck/Isometria+de+cuello+con+movimiento+de+brazos_compressed.mp4",
          machine: false
        },
        {
          url: "/neck11",
          name: "Estiramiento del trapecio superior",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Neck/Estiramiento+de+trapecio+superior_compressed.mp4",
          machine: false
        },
        {
          url: "/neck12",
          name: "Catcow",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Neck/Catcow_compressed.mp4",
          machine: false
        },
        {
          url: "/neck13",
          name: "Inclinaciones contra resistencia",
          difficulty: "difícil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Neck/Inclinasiones+contra+resistencia_compressed.mp4",
          machine: false
        }
      ]
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
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Wrist/martillo.Wrist-optimized.mp4",
          machine: false
        },
        {
          url: "/wrist2",
          name: "Flexo-extensión",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Wrist/Flexo-extensio%CC%81n.Wrist-optimized.mp4",
          machine: false
        },
        {
          url: "/wrist3",
          name: "Estiramiento de muñeca",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Wrist/estiramientoMun%CC%83eeca.Wrist-optimized.mp4",
          machine: false
        },
        {
          url: "/wrist4",
          name: "Estiramiento de muñeca",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Wrist/estiramientoMun%CC%83eeca.Wrist-optimized.mp4",
          machine: false
        },
        {
          url: "/wrist5",
          name: "Estiramiento de flexores en pared",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Wrist/Estiramiento+de+flexores+en+pared_compressed.mp4",
          machine: false
        },
        {
          url: "/wrist6",
          name: "Estiramiento de extensores en pared",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Wrist/Estiramiento+de+extensores+en+pared_compressed.mp4",
          machine: false
        },
        {
          url: "/wrist7",
          name: "Intrínsecos de los dedos",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Wrist/Intrinsicos+de+los+dedos_compressed.mp4",
          machine: false
        },
        {
          url: "/wrist8",
          name: "Extensores de los dedos",
          difficulty: "difícil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Wrist/Extensores+de+los+dedos_compressed.mp4",
          machine: false
        },
        {
          url: "/wrist9",
          name: "Movilidad activa de las muñecas (flexión)",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Wrist/Movilidad+activa+de+las+mun%CC%83ecas+Flexion_compressed.mp4",
          machine: false
        },
        {
          url: "/wrist10",
          name: "Movilidad activa de las muñecas (extensión)",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Wrist/Movilidad+activa+de+las+mun%CC%83ecas+Extension_compressed.mp4",
          machine: false
        },
        {
          url: "/wrist11",
          name: "Desviación radial con mancuerna",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Wrist/Desviacion+radial+con+mancuerna_compressed.mp4",
          machine: false
        },
        // {
        //  url: "/wrist12",
        //  name: "Desviación cubital contraresistencia",
        //  difficulty: "medio",
        //  video: "",
        //  machine: false
        // },
        // {
        //  url: "/wrist13",
        //  name: "Extensión con mancuerna",
        //  difficulty: "medio",
        //  video: "",
        //  machine: false
        // },
        {
          url: "/wrist14",
          name: "Flexión con mancuerna",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Wrist/Flexion+con+mancuerna_compressed.mp4",
          machine: false
        },
        {
          url: "/wrist15",
          name: "Curl de muñeca polea",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Wrist/Curl+de+mun%CC%83eca+polea_compressed.mp4",
          machine: false
        }
      ]
    },
    {
      id: 3,
      name: "Rodilla",
      icon: "/iconos/Capa_rodilla.svg",
      description: "Selecciona si estás experimentando dolor en la rodilla.",
      link: "issued/knee",
      img: "/imgArt/img.rodilla.svg",
      backgroundImage: "/background/bgRodilla.jpg",
      exercise: [
        {
          url: "/knee1",
          name: "Estiramiento de isquiotibiales",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/Estiramiento-Isquiotibiales-optimized.mp4",
          machine: false
        },
        {
          url: "/knee2",
          name: "Sentadilla isométrica",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/Sentadilla-Isometrica-optimized.mp4",
          machine: false
        },
        {
          url: "/knee3",
          name: "Ascenso unilateral",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/Ascenso-unilateral-optimized.mp4",
          machine: false
        },
        {
          url: "/knee4",
          name: "Sentadilla isométrica unilateral",
          difficulty: "difícil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/Sentadilla+Isometrica+unilateral_compressed.mp4",
          machine: false
        },
        {
          url: "/knee5",
          name: "Bulgara isométrica",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/Bulgara+Isometrica_compressed.mp4",
          machine: false
        },
        {
          url: "/knee6",
          name: "Bulgara dinámica",
          difficulty: "difícil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/Bulgara+dinamica_compressed.mp4",
          machine: false
        },
        {
          url: "/knee7",
          name: "Avanzada con banda",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/Avanzada+con+banda_compressed.mp4",
          machine: false
        },
        {
          url: "/knee8",
          name: "Step up",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/Step+up_compressed.mp4",
          machine: false
        },
        {
          url: "/knee9",
          name: "Step up con mancuerna",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/Step+up+con+mancuerna_compressed.mp4",
          machine: false
        },
        {
          url: "/knee10",
          name: "Puente glúteo con abducción de cadera",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/Puente+glu%CC%81teo+con+abduccio%CC%81n+de+cadera_compressed.mp4",
          machine: false
        },
        {
          url: "/knee11",
          name: "Glúteo medio de pie (rodilla flexionada)",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/Gluteo+medio+de+pie+rodilla+flexionada_compressed.mp4",
          machine: false
        },
        {
          url: "/knee12",
          name: "Glúteo medio de pie (rodilla estirada)",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/Gluteo+medio+de+pie+rodilla+estirada_compressed.mp4",
          machine: false
        },
        {
          url: "/knee13",
          name: "Puente glúteo con aductor",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/Puente+gluteo+con+aductor_compressed.mp4",
          machine: false
        },
        {
          url: "/knee14",
          name: "Monster Walk",
          difficulty: "difícil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/Moster+Walk_compressed.mp4",
          machine: false
        },
        {
          url: "/knee15",
          name: "Estabilidad dinámica de rodilla",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/Estabilidad+dinamica+de+rodilla_compressed.mp4",
          machine: false
        },
        {
          url: "/knee16",
          name: "Estabilidad de rodilla con mancuerna",
          difficulty: "difícil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/Estabilidad+de+rodilla+con+mancuerna_compressed.mp4",
          machine: false
        },
        {
          url: "/knee17",
          name: "Peso muerto unilateral",
          difficulty: "difícil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/Peso+muerto+unilateral_compressed.mp4",
          machine: false
        },
        {
          url: "/knee18",
          name: "Sentadilla globe alta",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/Sentadilla+globe+alta_compressed.mp4",
          machine: false
        },
        {
          url: "/knee19",
          name: "Sentadilla globe media",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/Sentadilla+globe+media_compressed.mp4",
          machine: false
        },
        {
          url: "/knee20",
          name: "Sentadilla globe baja",
          difficulty: "difícil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/Sentadilla+globe+baja_compressed.mp4",
          machine: false
        }
      ]
    },
    {
      id: 4,
      name: "Espalda-Baja",
      icon: "/iconos/Capa_1-2.svg",
      description: "Selecciona si estás experimentando dolor en la espalda baja.",
      link: "issued/upperback",
      img: "/imgArt/img.espaldabaja.svg",
      backgroundImage: "/background/bgEspaldaBaja.jpg",
      exercise: [
        {
          url: "/lowerback1",
          name: "Puente glúteo",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Espalda+Baja/puente-gluteo-optimized.mp4",
          machine: false
        },
        {
          url: "/lowerback2",
          name: "Movilidad lumbo-pélvica",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Espalda+Baja/Movilidad-lumbopelvica-optimized.mp4",
          machine: false
        },
        {
          url: "/lowerback3",
          name: "Cobra dinámica",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Espalda+Baja/cobra-dinamica-optimized.mp4",
          machine: false
        },
        {
          url: "/lowerback4",
          name: "Plancha en brazos",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Espalda+Baja/Plancha+en+brazos_compressed.mp4",
          machine: false
        },
        {
          url: "/lowerback5",
          name: "Plancha en codos",
          difficulty: "difícil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Espalda+Baja/Plancha+en+codos_compressed.mp4",
          machine: false
        },
        {
          url: "/lowerback6",
          name: "Plancha unilateral",
          difficulty: "difícil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Espalda+Baja/Plancha+unilateral_compressed.mp4",
          machine: false
        },
        {
          url: "/lowerback7",
          name: "Plancha en cuadrupedia",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Espalda+Baja/Plancha+cuadrupedia_compressed.mp4",
          machine: false
        },
        {
          url: "/lowerback8",
          name: "Plancha cuadrupedia dinámica",
          difficulty: "difícil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Espalda+Baja/Plancha+cuadrupedia+dinamica_compressed.mp4",
          machine: false
        },
        {
          url: "/lowerback9",
          name: "Plancha con remo",
          difficulty: "difícil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Espalda+Baja/Plancha+con+remo_compressed.mp4",
          machine: false
        },
        {
          url: "/lowerback10",
          name: "Plancha lateral dinámica",
          difficulty: "difícil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Espalda+Baja/Plancha+lateral+dinamica_compressed.mp4",
          machine: false
        },
        {
          url: "/lowerback11",
          name: "Plancha lateral estática",
          difficulty: "difícil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Espalda+Baja/Plancha+lateral+estatica_compressed.mp4",
          machine: false
        },
        {
          url: "/lowerback12",
          name: "Plancha lateral con remo",
          difficulty: "difícil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Espalda+Baja/Plancha+lateral+con+remo_compressed.mp4",
          machine: false
        },
        {
          url: "/lowerback13",
          name: "Plancha lateral con mancuerna",
          difficulty: "difícil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Espalda+Baja/Plancha+lateral+con+mancuerna_compressed.mp4",
          machine: false
        }
      ]
    },
    {
      id: 5,
      name: "Espalda-Alta",
      icon: "/iconos/Capa_1-3.svg",
      description: "Selecciona si estás experimentando dolor en la espalda alta.",
      link: "issued/lowerback",
      img: "/imgArt/img.espalda_alta.svg",
      backgroundImage: "/background/BgEspaldaAlta.jpg",
      exercise: [
        {
          url: "/upperback1",
          name: "Extensión y flexión torácica",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Espalda+Alta/Extension-Flexion-toraxica.mp4",
          machine: false
        },
        {
          url: "/upperback2",
          name: "Trapecio medio",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Espalda+Alta/Trapecio-medio.mp4",
          machine: false
        },
        {
          url: "/upperback3",
          name: "Retracción escapular",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Espalda+Alta/Retraccion-escapular.mp4",
          machine: false
        },
        {
          url: "/upperback4",
          name: "W",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Espalda+Alta/W_compressed.mp4",
          machine: false
        },
        {
          url: "/upperback5",
          name: "T",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Espalda+Alta/T_compressed.mp4",
          machine: false
        },
        {
          url: "/upperback6",
          name: "Y",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Espalda+Alta/Y_compressed.mp4",
          machine: false
        },
        {
          url: "/upperback7",
          name: "W con mancuerna",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Espalda+Alta/W+con+mancuerna_compressed.mp4",
          machine: false
        },
        {
          url: "/upperback8",
          name: "T con mancuerna",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Espalda+Alta/T+con+mancuerna_compressed.mp4",
          machine: false
        },
        {
          url: "/upperback8",
          name: "Y con mancuerna",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Espalda+Alta/Y+con+mancuerna_compressed.mp4",
          machine: false
        },
        {
          url: "/upperback9",
          name: "Flexión de pecho excéntrica",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Espalda+Alta/Flexion+pecho+Excentrica_compressed.mp4",
          machine: false
        },
        {
          url: "/upperback10",
          name: "Remo",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Espalda+Alta/Remo_compressed.mp4",
          machine: false
        }
      ]
    },
    {
      id: 6,
      name: "Hombro",
      icon: "/iconos/Capa_hombro.svg",
      description: "Selecciona si estás experimentando dolor en los hombros.",
      link: "issued/shoulder",
      img: "/imgArt/img.hombro.svg",
      backgroundImage: "/background/bgCodo.jpg",
      exercise: [
        {
          url: "/shoulder1",
          name: "Encogimiento escapular",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Hombros/Encogimiento-escapular.mp4",
          machine: false
        },
        {
          url: "/shoulder2",
          name: "Movilidad torácica",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Hombros/Movilidad-toraxica.mp4",
          machine: false
        },
        {
          url: "/shoulder3",
          name: "Circunducción de hombro",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Hombros/circunduccion-hombro.mp4",
          machine: false
        },
        {
          url: "/shoulder4",
          name: "Rotaciones externas contra resistencia",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Hombros/rotacion-externa-contra-resistencia.mp4",
          machine: false
        },
        {
          url: "/shoulder5",
          name: "T - escapular",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Hombros/T-escapular.mp4",
          machine: false
        },
        {
          url: "/shoulder6",
          name: "Press hombro asistido",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Hombros/Press-hombro+asistido.mp4",
          machine: false
        },
        {
          url: "/shoulder7",
          name: "Curl femoral balón",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Hombros/curl+-femoral-balon.mp4",
          machine: false
        },
        {
          url: "/shoulder8",
          name: "Rotaciones externas contra resistencia",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Hombros/rotacion-externa-contra-resistencia.mp4",
          machine: false
        },
        {
          url: "/shoulder9",
          name: "Press militar en posición de caballero unilateral",
          difficulty: "difícil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Hombros/Press+militar+en+posicion+de+caballero+unilateral_compressed.mp4",
          machine: false
        },
        {
          url: "/shoulder10",
          name: "Rotación externa de hombros isométrica",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Hombros/Rotacio%CC%81n+externa+de+hombros+isometrica_compressed.mp4",
          machine: false
        },
        {
          url: "/shoulder11",
          name: "Rotación externa de hombros con mancuerna",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Hombros/Rotacio%CC%81n+externa+de+hombros+mancuerna_compressed.mp4",
          machine: false
        },
        {
          url: "/shoulder12",
          name: "Rotación externa de hombro con banda",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Hombros/Rotacio%CC%81n+externa+de+hombro+con+banda_compressed.mp4",
          machine: false
        },
        {
          url: "/shoulder13",
          name: "Rotación interna isométrica con banda",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Hombros/Rotacio%CC%81n+interna+de+hombro+con+banda+acostado_compressed.mp4",
          machine: false
        },
        {
          url: "/shoulder14",
          name: "Rotación externa de hombros isométrica 90°",
          difficulty: "difícil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Hombros/Rotacio%CC%81n+externa+de+hombros+isometrica+90%C2%B0_compressed.mp4",
          machine: false
        },
        {
          url: "/shoulder15",
          name: "Rotación interna de hombro con mancuerna 90°",
          difficulty: "difícil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Hombros/Rotacio%CC%81n+interna+de+hombro+con+mancuerna+90%C2%B0_compressed.mp4",
          machine: false
        },
        {
          url: "/shoulder16",
          name: "Rotación interna de hombro con banda de pie",
          difficulty: "difícil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Hombros/Rotacio%CC%81n+interna+de+hombro+con+banda+de+pie_compressed.mp4",
          machine: false
        },
        {
          url: "/shoulder17",
          name: "Rotación interna de hombro con banda acostado",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Hombros/Rotacio%CC%81n+interna+de+hombro+con+banda+acostado_compressed.mp4",
          machine: false
        }
      ]
    },
    {
      id: 7,
      name: "Tobillo",
      icon: "/iconos/Capa_tobillo.svg",
      description: "Selecciona si estás experimentando dolor en los tobillos.",
      link: "issued/ankle",
      img: "/imgArt/img.tobillo.svg",
      backgroundImage: "/background/bgTobillo.jpg",
      exercise: [
        {
          url: "/ankle1",
          name: "Dorsiflexión",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Tobillos/dorsiflexion-optimized.mp4",
          machine: false
        },
        {
          url: "/ankle2",
          name: "Plantiflexión",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Tobillos/platiflexion-optimized.mp4",
          machine: false
        },
        {
          url: "/ankle3",
          name: "Movilidad de tobillo",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Tobillos/movilidad-tobillo-optimized.mp4",
          machine: false
        },
        {
          url: "/ankle4",
          name: "Eversión contra resistencia",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Tobillos/eversion-contraresistencia_compressed.mp4",
          machine: false
        },
        {
          url: "/ankle5",
          name: "Inversión contra resistencia",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Tobillos/inversion-contraresistencia_compressed.mp4",
          machine: false
        },
        {
          url: "/ankle6",
          name: "Plantiflexión contra resistencia",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Tobillos/Plantiflexio%CC%81n+contraresistencia_compressed.mp4",
          machine: false
        },
        {
          url: "/ankle7",
          name: "Plantiflexión unilateral",
          difficulty: "difícil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Tobillos/Plantiflexio%CC%81n+unilateral_compressed.mp4",
          machine: false
        },
        {
          url: "/ankle8",
          name: "Plantiflexión sentado",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Tobillos/Plantiflexio%CC%81n+sentado_compressed.mp4",
          machine: false
        },
        {
          url: "/ankle9",
          name: "Dorsiflexión con banda",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Tobillos/Dorsiflexio%CC%81n+con+banda_compressed.mp4",
          machine: false
        },
        {
          url: "/ankle10",
          name: "Dorsiflexión con mancuerna",
          difficulty: "difícil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Tobillos/Dorsiflexio%CC%81n+con+mancuerna+2_compressed.mp4",
          machine: false
        },
        {
          url: "/ankle11",
          name: "Estabilidad de tobillo estático",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Tobillos/Estabilidad+de+tobillo+estatico_compressed.mp4",
          machine: false
        },
        {
          url: "/ankle12",
          name: "Estabilidad de tobillo dinámico",
          difficulty: "difícil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Tobillos/Estabilidad+de+tobillo+dinamico_compressed.mp4",
          machine: false
        }
      ]
    },
    {
      id: 8,
      name: "Cadera",
      icon: "/iconos/Capa_cadera.svg",
      description: "Selecciona si estás experimentando dolor en la cadera.",
      link: "issued/hip",
      img: "/imgArt/img.cadera.svg",
      backgroundImage: "/background/bgCadera.jpg",
      exercise: [
        {
          url: "/hips1",
          name: "Movilidad de cadera",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Cadera/movilidad-cadera.mp4",
          machine: false
        },
        {
          url: "/hips2",
          name: "Flexión y abducción",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Cadera/abduccion-flexion-cadera.mp4",
          machine: false
        },
        {
          url: "/hips3",
          name: "Extensión de cadera",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Cadera/Extension-cadera.mp4",
          machine: false
        },
        {
          url: "/hips4",
          name: "Movilidad de cadera acostado",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Cadera/Movilidad+de+cadera+acostado_compressed.mp4",
          machine: false
        },
        {
          url: "/hips5",
          name: "Movilidad de cadera sin apoyo",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Cadera/Movilidad+de+cadera+sin+apoyo_compressed.mp4",
          machine: false
        },
        {
          url: "/hips6",
          name: "Movilidad de cadera compuesta",
          difficulty: "difícil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Cadera/Movilidad+de+cadera+compuesta_compressed.mp4",
          machine: false
        },
        {
          url: "/hips7",
          name: "Rotaciones internas",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Cadera/Rotaciones+internas_compressed.mp4",
          machine: false
        },
        {
          url: "/hips8",
          name: "Tilt pélvico",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Cadera/Till+pelvico_compressed.mp4",
          machine: false
        },
        {
          url: "/hips9",
          name: "Inclinaciones de pelvis",
          difficulty: "fácil",
          video: "",
          machine: false
        },
        {
          url: "/hips10",
          name: "Estiramiento de glúteos",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Cadera/Estiramiento+de+gluteos_compressed.mp4",
          machine: false
        },
        {
          url: "/hips11",
          name: "Isométrico de aductores",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Cadera/Isometrico+de+aductores_compressed.mp4",
          machine: false
        },
        {
          url: "/hips12",
          name: "Glúteo medio con banda",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Cadera/Gluteo+medio+con+banda_compressed.mp4",
          machine: false
        },
        {
          url: "/hips13",
          name: "Glúteo medio con disco",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Cadera/Gluteo+medio+con+disco_compressed.mp4",
          machine: false
        },
        {
          url: "/hips14",
          name: "Psoas ilíaco con banda",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Cadera/Psoas+iliaco+con+banda_compressed.mp4",
          machine: false
        }
      ]
    },
    {
      id: 9,
      name: "Codo",
      icon: "/iconos/Capa_codo.svg",
      description: "Selecciona si estás experimentando dolor en los codos.",
      link: "issued/elbow",
      img: "/imgArt/img.codo.svg",
      backgroundImage: "/background/bgCodo.jpg",
      exercise: [
        {
          url: "/elbow1",
          name: "Extensión de muñeca",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Codo/Extensio-mun%CC%83eca.mp4",
          machine: false
        },
        {
          url: "/elbow2",
          name: "Flexión de muñeca",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Codo/Flexion-mun%CC%83eca.mp4",
          machine: false
        },
        {
          url: "/elbow3",
          name: "Prono-supinación",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Codo/Prono-supinacion.mp4",
          machine: false
        },
        {
          url: "/elbow4",
          name: "Extensores de los dedos",
          difficulty: "difícil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Wrist/Extensores+de+los+dedos_compressed.mp4",
          machine: false
        },
        {
          url: "/elbow5",
          name: "Estiramiento de flexores",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Codo/Estiramiento+de+flexores_compressed.mp4",
          machine: false
        },
        {
          url: "/elbow6",
          name: "Movilidad activa de las muñecas (flexión)",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Wrist/Movilidad+activa+de+las+mun%CC%83ecas+Flexion_compressed.mp4",
          machine: false
        },
        {
          url: "/elbow7",
          name: "Movilidad activa de las muñecas (extensión)",
          difficulty: "medio",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Wrist/Movilidad+activa+de+las+mun%CC%83ecas+Extension_compressed.mp4",
          machine: false
        },
        {
          url: "/elbow8",
          name: "Extensión de muñeca con banda",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Codo/Extensio%CC%81n+mun%CC%83eca+con+banda_compressed.mp4",
          machine: false
        },
        {
          url: "/elbow9",
          name: "Flexión de muñeca con banda",
          difficulty: "fácil",
          video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Codo/Flexio%CC%81n+de+mun%CC%83eca+con+banda_compressed.mp4",
          machine: false
        }
      ]
    }
  ]
  
