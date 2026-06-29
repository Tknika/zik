---
title: Normativa — Obligaciones legales
description: Resumen práctico de las normativas NIS2, RGPD, LOPDGDD y ENS para centros educativos
---

# Normativa — Legislación que afecta a los centros educativos

En esta guía encontrarás resúmenes prácticos de las cuatro normativas principales que
afectan directamente a tu centro educativo. No es un documento jurídico — tiene fines
**informativos y de sensibilización**, y no constituye asesoramiento legal.

:::danger[Aviso legal]
Este contenido **no es asesoramiento legal**. El objetivo de este resumen es explicar
las normativas de forma comprensible. Asegúrate de consultar las fuentes oficiales y,
si es necesario, recurrir a un asesor jurídico. Encontrarás las fuentes oficiales al
final de la página.
:::

---

## Directiva NIS2 (UE 2022/2555)

### ¿Qué es?

**NIS2** (_Network and Information Security Directive 2_) es una directiva de la Unión
Europea que impone medidas de seguridad y notificación de incidentes a todos los estados
miembros. Entró en vigor el 18 de octubre de 2024.

### ¿A quién aplica?

NIS2 distingue dos tipos de entidades:

- **Entidades esenciales** (essential entities): grandes organizaciones de sectores
críticos (energía, transporte, sanidad, abastecimiento de agua, infraestructura
digital, etc.).
- **Entidades importantes** (important entities): organizaciones de tamaño medio y
otros sectores no incluidos en los esenciales.

El sector educativo **no aparece en los anexos de NIS2**, por lo que los centros de
Formación Profesional, en principio, no están dentro del ámbito de aplicación. Sin
embargo, la transposición de NIS2 en el Estado español (mediante ley propia) podría
decidir incluir a las entidades educativas.

### ¿Qué exige? (si fuera aplicable)

| Requisito | Explicación |
|-----------|-------------|
| Gestión de riesgos | Adoptar medidas para identificar, evaluar y reducir los riesgos de ciberseguridad (Art. 21.1) |
| Notificación de incidentes | Aviso temprano en 24 h, primer informe en 72 h e informe final en un mes (Art. 23) |
| Responsabilidad de la dirección | Los órganos de dirección deben recibir formación en ciberseguridad y supervisar las medidas |
| Seguridad de la cadena de suministro | Evaluar la ciberseguridad de los proveedores |

### ¿Qué hacer en tu centro?

Aunque NIS2 no te aplique directamente, te recomendamos adoptar las siguientes medidas
(las necesitarás por otras normativas):

- [ ] Nombrar un responsable de ciberseguridad → [Gobernanza](/zik/gobernantza/)
- [ ] Realizar un análisis de riesgos → [Identificar](/zik/identifikatu/)
- [ ] Disponer de un procedimiento de respuesta a incidentes → [Responder](/zik/erantzun/)
- [ ] Verificar si la ley de transposición española (cuando se publique) incluye al sector educativo

::tip[Fuente oficial]
[Directiva NIS2 en EUR-Lex](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng)
::

---

## RGPD (UE 2016/679) y LOPDGDD (LO 3/2018)

### ¿Qué son?

- **RGPD** (_Reglamento General de Protección de Datos_): reglamento de la Unión
Europea que regula el tratamiento de datos personales.
- **LOPDGDD** (_Ley Orgánica de Protección de Datos y Garantía de Derechos Digitales_):
ley orgánica que adapta el RGPD al ordenamiento jurídico español.

Ambas son **directamente aplicables** a los centros de Formación Profesional.

### ¿A quién aplica?

A cualquier entidad que trate datos personales — y los centros educativos lo hacen
continuamente: datos del alumnado, del personal, de las familias, de proveedores…

### ¿Qué exigen?

| Requisito | Explicación |
|-----------|-------------|
| Delegado de Protección de Datos (DPD) | Los centros públicos deben designar obligatoriamente un DPD. Puede ser compartido entre varios centros. |
| Registro de actividades de tratamiento | Documentar todos los tratamientos de datos: qué datos, para qué, a quién, dónde se almacenan… |
| Consentimiento y derechos | Obtener autorizaciones para tratar datos del alumnado y personal, y garantizar sus derechos (acceso, rectificación, supresión, limitación, portabilidad, oposición) |
| Medidas de seguridad | Implementar medidas de seguridad adecuadas según los datos tratados (Art. 32 RGPD) |
| Protección de datos desde el diseño | Integrar la protección de datos al diseñar nuevos sistemas y procesos |
| Evaluación de riesgos (EIPD/DPIA) | Para determinados tratamientos (datos especialmente protegidos, tratamientos masivos…), realizar una evaluación de impacto |

### ¿Qué hacer en tu centro?

- [ ] Verificar que tienes un DPD designado (todos los centros públicos deben tenerlo) —
puede ser compartido en tu red o ayuntamiento.
- [ ] Elaborar el registro de actividades de tratamiento — empieza por los tratamientos
principales de datos del alumnado: matrícula, expediente académico, imágenes, etc.
- [ ] Revisar los consentimientos y las políticas de privacidad — asegúrate de que el
alumnado y las familias reciben información clara sobre privacidad.
- [ ] Implementar medidas de seguridad → [Proteger](/zik/babestu/),
[Detectar](/zik/detektatu/)

::tip[Fuente oficial]
[RGPD en el BOE](https://www.boe.es/doue/2016/119/L00001-00088.pdf) ·
[LOPDGDD en el BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673) ·
[AVPD — Hezkuntza](https://www.avpd.eus/avpd-hezkuntza/webavpd01-content/eu/)
::

---

## ENS — Esquema Nacional de Seguridad (RD 311/2022)

### ¿Qué es?

El **ENS** (_Esquema Nacional de Seguridad_) es una normativa española que regula la
seguridad de los sistemas de información de las entidades del sector público. El
**Real Decreto 311/2022** lo actualizó por última vez.

### ¿A quién aplica?

Los centros de Formación Profesional del País Vasco se consideran **sector público**,
por lo que el **ENS es directamente aplicable**.

### ¿Qué exige?

El ENS establece **tres niveles de seguridad**, según el tipo de información tratada:

| Nivel | Cuándo se aplica | Tipo de medidas |
|-------|--------------------|-----------------|
| **Básico** | Sistemas sin datos personales o de nivel bajo | Medidas mínimas: política, definición de roles, copias de seguridad, control de acceso, antivirus |
| **Medio** | Cuando se tratan datos personales | Básico + análisis de riesgos, monitorización, gestión de incidentes, auditoría |
| **Alto** | Datos especialmente protegidos o infraestructuras críticas | Medio + medidas avanzadas: cifrado, autenticación fuerte, sistemas de alta resiliencia |

### Requisitos principales (por artículo)

| Art. | Requisito | Resumen |
|------|-----------|---------|
| 12 | Política de seguridad | Documento aprobado por escrito, firmado por la dirección |
| 13 | Organización e implementación | Responsable de seguridad, comité de seguridad (o equivalente) |
| 14 | Gestión de riesgos | Análisis formal de riesgos (metodología Magerit recomendada) |
| 15 | Gestión de personal | Requisitos de seguridad del personal y formación |
| 17 | Control de acceso | Principio de mínimo privilegio, en consonancia con NIS2 |
| 24–25 | Gestión de incidentes | Detectar, registrar y responder incidentes |

### ¿Qué hacer en tu centro?

El cumplimiento del ENS puede hacerse **gradualmente**. Itinerario recomendado:

1. **Conoce tu nivel:** si tratas datos personales (alumnado, personal…), al menos te
corresponde el **nivel medio**.
2. **Empieza con las medidas del nivel básico:** redacta la política (con unas pocas
páginas es suficiente), nombra un responsable ([Gobernanza](/zik/gobernantza/)),
garantiza las copias de seguridad ([Proteger](/zik/babestu/)).
3. **Sube al nivel medio** realizando el análisis de riesgos e implementando la gestión
de incidentes.
4. **Usa herramientas:** el CCN-CERT ofrece guías y herramientas gratuitas para
implementar el ENS (INES, PILAR, MAGERIT…).

::tip[Fuente oficial]
[ENS RD 311/2022 en el BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2022-3291) ·
[Guías ENS del CCN-CERT](https://www.ccn-cert.cni.es/guias/ens.html)
::

---

## Tabla resumen

| Normativa | ¿Aplicable? | Prioridad | Primer paso |
|-----------|-------------|-----------|-------------|
| **NIS2** | No directamente (de momento) | Baja (seguimiento) | Esperar a la ley de transposición |
| **RGPD / LOPDGDD** | Sí, directamente | Alta | Verificar la designación del DPD + elaborar el registro de tratamiento |
| **ENS** | Sí, directamente | Media (gradual) | Redactar la política de seguridad + nombrar responsable |

---

## Dónde encontrar más información

- [EUR-Lex](https://eur-lex.europa.eu/) — Legislación oficial de la Unión Europea
- [BOE](https://www.boe.es/) — Boletín Oficial del Estado
- [AVPD](https://www.avpd.eus/) — Datuak Babesteko Euskal Agintaritza
- [CCN-CERT](https://www.ccn-cert.cni.es/) — Centro Criptológico Nacional (guías ENS)
- [Cyberzaintza](https://www.ciberseguridad.eus/) — Agencia Vasca de Ciberseguridad
- [INCIBE](https://www.incibe.es/) — Instituto Nacional de Ciberseguridad
- [Guía original de Tknika](https://tknika.github.io/zibersegurtasuna-ikastetxeetan/) — Guía de ciberseguridad en centros educativos
