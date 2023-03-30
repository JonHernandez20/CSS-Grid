# CSS-Grid

> Tips para conocimientos de CSS

1. No es necesario memorizar todas las propiedades y valores, lo importante es practicar.

2. Conoce los conceptos fundamentales de css: Esto es un tema amplio, lo importante es conocer los conceptos fundamentales de css como: 
	 - Layout
	 - Selectores
	 - Responsive
	 - Flujo normal 
	 - Modelo de caja
	 - Herencias y cascada  
	 - Formatting Context

3. Usar DevTools para encontrar errores y hacer pruebas rápidas, lo importante es ir al devtools y inspeccionar y buscar el error.

4. Saber qué herramientas te sirven para aprender y que herramientas nos te sirven para aprender, los resumenes nos son una buena forma de aprender, la mejor manera es hacer cursos, leer libros, leer documentación oficial.

> grid-template-columns

Propiedad de CSS define los nombres de linea y las funciones de tamaño de pista de las columnas de la cuadricula.

#### Sintaxis

```css
/* Keyword value */
grid-template-columns: none;

/* <track-list> values */
grid-template-columns: 100px 1fr;
grid-template-columns: [linename] 100px;
grid-template-columns: [linename1] 100px [linename2 linename3];
grid-template-columns: minmax(100px, 1fr);
grid-template-columns: fit-content(40%);
grid-template-columns: repeat(3, 200px);
grid-template-columns: subgrid;
grid-template-columns: masonry;

/* <auto-track-list> values */
grid-template-columns: 200px repeat(auto-fill, 100px) 300px;
grid-template-columns:
  minmax(100px, max-content)
  repeat(auto-fill, 200px) 20%;
grid-template-columns:
  [linename1] 100px [linename2]
  repeat(auto-fit, [linename3 linename4] 300px)
  100px;
grid-template-columns:
  [linename1 linename2] 100px
  repeat(auto-fit, [linename1] 300px) [linename3];

/* Global values */
grid-template-columns: inherit;
grid-template-columns: initial;
grid-template-columns: revert;
grid-template-columns: revert-layer;
grid-template-columns: unset;

```

#### Ejemplo

```css
.layout {
	display: grid;
	grid-templates-columns: repeat(12, 65px);
}
```

![Imagen](https://cdn.dribbble.com/users/239925/screenshots/1580545/twitter-bootstrap-grid-12-column.jpg)

[👉 Grid-templates-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns "👉 Grid-templates-columns")

> grid templates rows

La grid-template-rows propiedad CSS define los nombres de línea y las funciones de tamaño de pista de las filas de la cuadrícula .

#### Sintaxis 

```css
/* Keyword value */
grid-template-rows: none;

/* <track-list> values */
grid-template-rows: 100px 1fr;
grid-template-rows: [linename] 100px;
grid-template-rows: [linename1] 100px [linename2 linename3];
grid-template-rows: minmax(100px, 1fr);
grid-template-rows: fit-content(40%);
grid-template-rows: repeat(3, 200px);
grid-template-rows: subgrid;
grid-template-rows: masonry;

/* <auto-track-list> values */
grid-template-rows: 200px repeat(auto-fill, 100px) 300px;
grid-template-rows:
  minmax(100px, max-content)
  repeat(auto-fill, 200px) 20%;
grid-template-rows:
  [linename1] 100px [linename2]
  repeat(auto-fit, [linename3 linename4] 300px)
  100px;
grid-template-rows:
  [linename1 linename2] 100px
  repeat(auto-fit, [linename1] 300px) [linename3];

/* Global values */
grid-template-rows: inherit;
grid-template-rows: initial;
grid-template-rows: revert;
grid-template-rows: revert-layer;
grid-template-rows: unset;

```

#### Ejemplos

```css
.layout {
	display: grid;
	grid-templates-columns: repeat(12, 65px);
	grid-templates-rows: repeat(2, 1fr)
}
```

![](data:image/png;base64,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)

[👉 Grid-templates-rows](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows "👉 Grid-templates-rows")

> grid gap 

La propiedad CSS grid-gap es una propiedad abreviada shorthand para grid-row-gap (en-US) y grid-column-gap que especifica los canales entre las filas y las columnas de la cuadrícula. El valor inicial: `grid-gap: row, column;`

#### Sintaxis

```css
/* Un valor <longitud> */
grid-gap: 20px;
grid-gap: 1em;
grid-gap: 3vmin;
grid-gap: 0.5cm;

/* Un valor <porcentaje> */
grid-gap: 16%;
grid-gap: 100%;

/* Dos valores <longitud> */
grid-gap: 20px 10px;
grid-gap: 1em 0.5em;
grid-gap: 3vmin 2vmax;
grid-gap: 0.5cm 2mm;

/* Uno o dos valores <porcentaje> */
grid-gap: 16% 100%;
grid-gap: 21px 82%;

/* Valores Globales */
grid-gap: inherit;
grid-gap: initial;
grid-gap: unset;
```

#### Ejemplo

```css
.layout {
	display: grid;
	grid-templates-columns: repeat(12, 65px);
	grid-templates-rows: repeat(2, 1fr);
	gap: 10px 30px;
}
```

![](data:image/png;base64,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)

[👉 Grid GAP](https://developer.mozilla.org/es/docs/Web/CSS/gap "👉 Grid GAP")

> Cuadricula 

La compaginación en cuadrícula con CSS es un método de diseño de páginas web en dos dimensiones. Te permite distribuir el contenido en filas y columnas, y tiene muchas características que facilitan la creación de diseños complejos. 

#### Sintaxis

*Posicionamiento sobre lineas base*

Ahora pasamos de crear una cuadrícula a colocar cosas en la cuadrícula. Nuestra cuadrícula siempre tiene líneas; estas líneas comienzan en 1 y se relacionan con el modo de escritura del documento. Por lo tanto, en español, la línea de columna 1 es la de la izquierda de la cuadrícula y la línea de fila 1 es la de la parte superior. En una columna arábiga, la línea 1 estaría en el lado derecho, ya que el árabe se escribe de derecha a izquierda.

```css
header {
  grid-column: 1 / 3;
  grid-row: 1;
}

article {
  grid-column: 2;
  grid-row: 2;
}

aside {
  grid-column: 1;
  grid-row: 2;
}

footer {
  grid-column: 1 / 3;
  grid-row: 3;
}

```

*Posicionamiento con grid-template-areas*

Una forma alternativa de posicionar elementos en tu cuadrícula es usar la propiedad grid-template-areas y asignar un nombre a los diversos elementos de tu diseño.

```css
.container {
  display: grid;
  grid-template-areas:
      "header header"
      "sidebar content"
      "footer footer";
  grid-template-columns: 1fr 3fr;
  grid-gap: 20px;
}

header {
  grid-area: header;
}

article {
  grid-area: content;
}

aside {
  grid-area: sidebar;
}

footer {
  grid-area: footer;
}

```

*Una cuadrícula CSS, formato de cuadrícula*

Los «formatos» de cuadrícula tienden a basarse en cuadrículas de 12 o 16 columnas, y con las cuadrículas CSS no necesitas ninguna herramienta de terceros para proporcionarte dicho formato, porque ya está en la especificación

```css
header {
  grid-column: 1 / 13;
  grid-row: 1;
}

article {
  grid-column: 4 / 13;
  grid-row: 2;
}

aside {
  grid-column: 1 / 4;
  grid-row: 2;
}

footer {
  grid-column: 1 / 13;
  grid-row: 3;
}

```

![](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids/learn-grids-inspector.png)

[ 👉 Cuadriculas CSS Grid](https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Grids#una_cuadr%C3%ADcula_css_formato_de_cuadr%C3%ADcula "Cuadriculas CSS Grid")
