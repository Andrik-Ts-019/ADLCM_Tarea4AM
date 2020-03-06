import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-pss',
  templateUrl: './planetas-sistema-solar.component.html',
  styleUrls: ['./planetas-sistema-solar.component.scss'],
})
export class PlanetasSistemaSolarComponent implements OnInit {

  public indice: number;
  public array: boolean[]=[false, false, false, false, false, false, false, false]

  constructor(){}

  ngOnInit() {}

  @Input()
  entrada: string;

  letraMayuscula(entrada){
    return entrada.toUpperCase();
  }

  planetas=[
    {
      nombre: "MERCURIO",
      imagen: 'assets/mercurio.jpg',
      temperatura_promedio: "166 °C.",
      satelites: "No tiene.",
      masa: "0.055 Tierras.",
      gravedad: "3.7 m/s^2.",
      periodo_rotacion: "58.7 días.",
      periodo_traslacion: "87 días y 23 horas.",
      dato: "Mercurio es el planeta más pequeño del Sistema Solar, siendo un poco más grande que la Luna.\nEs el planeta más cercano al Sol. \nJunto con Venus, la Tierra y Marte, Mercurio es uno de los planetas rocosos.Tiene una superficie sólida que está cubierta de cráteres. Tiene una atmósfera delgada y no tiene ninguna luna. A Mercurio le gusta simplificar las cosas."
    },
    {
      nombre: "VENUS",
      imagen: 'assets/venus.jpg',
      temperatura_promedio: "463.85 °C.",
      satelites: "No tiene.",
      masa: "0.815 Tierras.",
      gravedad: "8.87 m/s^2.",
      periodo_rotacion: "243 días.",
      periodo_traslacion: "224.7 días.",
      dato:"Aunque Venus no es el planeta más cercano al Sol, es el más caliente. Tiene una atmósfera densa, llena de dióxido de carbono que provoca el efecto invernadero y de nubes compuestas de ácido sulfúrico.\nVenus se ve como un planeta muy activo. Tiene montañas y volcanes. Venus es similar a la Tierra en tamaño, la Tierra es solo un poco más grande.\nVenus es poco común porque gira en dirección contraria a la de la Tierra y la mayoría de los otros planetas."
    },
    {
      nombre: "TIERRA",
      imagen: 'assets/tierra.png',
      temperatura_promedio: "14.05 °C.",
      satelites: "1.",
      masa: "5.97 x 10^24 kg.",
      gravedad: "9.78 m/s^2.",
      periodo_rotacion: "1 día (24 horas).",
      periodo_traslacion: "365.25 días.",
      dato:"Nuestro hogar, el planeta Tierra, es un planeta terrestre y rocoso. Tiene una superficie sólida y activa con montañas, valles, cañones, llanuras y mucho más. La Tierra es especial porque es un planeta océano. El 70% de la superficie de la Tierra está cubierto por agua."
    },
    {
      nombre: "MARTE",
      imagen: 'assets/marte.jpg',
      temperatura_promedio: "46 °C.",
      satelites: "2.",
      masa: "0.1 Tierras.",
      gravedad: "3.71 m/s^2.",
      periodo_rotacion: "24 horas y 39 minutos.",
      periodo_traslacion: "687 días.",
      dato:"Marte es un planeta desértico y frío. Es la mitad del tamaño de la Tierra. A veces, a Marte se lo llama el Planeta Rojo. Es rojo por el hierro oxidado en el suelo.\nHay signos de antiguas inundaciones en Marte pero ahora el agua existe principalmente en la suciedad helada y en nubes delgadas. En algunas laderas marcianas, existe evidencia de agua líquida salada en el suelo."
    },
    {
      nombre: "JUPITER",
      imagen: 'assets/jupiter.png',
      temperatura_promedio: "-121.15 °C.",
      satelites: "79 conocidos.",
      masa: "318.25 Tierras.",
      gravedad: "24.79 m/s^2.",
      periodo_rotacion: "9 horas con 55 minutos.",
      periodo_traslacion: "11 años y 315 días.",
      dato:"Júpiter es el planeta más grande de nuestro sistema solar. Es parecido a una estrella pero nunca lo suficientemente grande como para empezar a arder. Está cubierto de rayas de nubes arremolinadas. Tiene fuertes tormentas como la Gran Mancha Roja que ya ha durado cientos de años.\nJúpiter es un gigante gaseoso y no tiene una superficie sólida."
    },
    {
      nombre: "SATURNO",
      imagen: 'assets/saturno.jpg',
      temperatura_promedio: "-130.15 °C.",
      satelites: "Aprox. 200 observados (82 con órbitas seguras).",
      masa: "95.27 Tierras.",
      gravedad: "10.44 m/s^2.",
      periodo_rotacion: "10 horas y 33 minutos.",
      periodo_traslacion: "29 años y 167 días.",
      dato:"Saturno no es el único planeta que tiene anillos pero definitivamente tiene los más bellos. Los anillos que vemos están compuestos por grupos de pequeños aros que rodean a Saturno. Están hechos de pedazos de hielo y roca. Como Júpiter, Saturno es una pelota de hidrógeno y helio en gran parte."
    },
    {
      nombre: "URANO",
      imagen: 'assets/urano.jpg',
      temperatura_promedio: "-205.2 °C.",
      satelites: "27 conocidos.",
      masa: "14.54 Tierras.",
      gravedad: "8.69 m/s^2.",
      periodo_rotacion: "10 horas y 33 minutos.",
      periodo_traslacion: "84.32 años.",
      dato:"Urano está compuesto de agua, metano y amoniaco sobre un pequeño centro rocoso. El metano es lo que le da a Urano el color azul.\nUrano también tiene unos tenues anillos. Los anillos internos son angostos y oscuros. Los anillos externos tienen colores vivos y son más fáciles de ver. Como Venus, Urano rota en dirección opuesta a la de la mayoría de los otros planetas. Y, a diferencia de cualquier otro planeta, Urano rota de lado."
    },
    {
      nombre: "NEPTUNO",
      imagen: 'assets/neptuno.jpg',
      temperatura_promedio: "-220 °C.",
      satelites: "14 conocidos.",
      masa: "17.147 Tierras.",
      gravedad: "11.15 m/s^2.",
      periodo_rotacion: "16 horas y 6 minutos.",
      periodo_traslacion: "164 años  con 288 días y 13 horas.",
      dato:"Neptuno es oscuro, frío y muy ventoso. Es el último de los planetas de nuestro sistema solar. Está más de 30 veces tan lejos del Sol como de la Tierra. Está compuesto de una espesa mezcla de agua, amoniaco y metano sobre un centro sólido del tamaño de la Tierra.\nNeptuno tiene seis anillos que no se ven fácilmente."
    }
  ]
}
