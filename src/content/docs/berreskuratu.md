---
title: 6. Berreskuratu
description: Berreskurapen-prozedura idatzi eta probatu — zerbitzuak eta datuak nola berreskuratu intzidentzia baten ondoren
iso27001:
  - id: 'A.5.29'
    description: Segurtasuna etenaldian (TIC jarraitutasuna)
  - id: 'A.5.30'
    description: TICen prestasuna negozioaren jarraitutasunerako
  - id: 'A.5.33'
    description: Erregistroen babesa
  - id: 'A.6.8'
    description: Segurtasun-gertaeren jakinarazpena
  - id: 'A.8.14'
    description: Informazioaren berreskurapena
compliance:
  clauses_pct: 8
  annexA_pct: 15
---

Intzidentzia baten ondoren **normaltasunera itzultzea** da. Babeskopietatik
datuak eta zerbitzuak berreskuratu eta ikastetxearen funtzionamendua
lehenbailehen berrezartzea.

Baina lehenik, **jakin behar duzu zer den kritikoa eta zer ez**. Horretarako
da negozio-eraginaren analisia (BIA).

---

## Zergatik da garrantzitsua?

Babeskopia bat **ez da fidagarria berreskuratzen saiatu arte**.
Babeskopien politika idatzi duzu (Babestu atalean). Orain ziurtatu
behar duzu benetan funtzionatzen duela.

Pentsatu:

- Matrikulazio-sistema eroriko balitz, zenbat denbora egon daiteke etenik?
- Notak galtzea onargarria al da?
- Zer gertatuko litzateke Internet gabe astebetez?

---

## Zer egin?

### 1. Egin negozio-eraginaren analisia (BIA)

Zerbitzu bakoitzarentzat erabaki **zenbat denbora egon daitekeen etenik**
(RTO) eta **zenbat datu gal daitezkeen** (RPO) onargarria den.

Txantiloiak zerbitzu taula bat dauka betetzeko. Galdera sinpleak:

- Matrikulazio-sistema eroriko balitz, zenbat ordu itxaron dezakezu?
- Notak galtzea onargarria al da? Zenbat atzera egin dezakezu?
- Zer gertatuko litzateke Internet gabe astebetez? Zein da alternatiba?

Ez da analisi konplexua — ikastetxe txiki batean, 15 minututan betetzen da.

[Deskargatu BIA txantiloia (DOCX/PDF)](/zik/templates/#bia)

### 2. Idatzi berreskurapen-prozedura

Orain badakizu zer den garrantzitsuena (BIA). Idatzi nola berreskuratu.

Erabili txantiloia zure ingurune birtualizaturako berreskurapen-prozedura
definitzeko:

- **Lau eszenario**: fitxategi bakarra, sistema bat, hainbat sistema,
  hondamendia.
- **Lehentasun-zerrenda**: BIA-n definitutako ordena erabili.
- **Pausoz pauso**: VM-ak nola berreskuratu zure babeskopia-sistematik
  (Proxmox Backup Server, Veeam…).
- **Arduradunak** eta **komunikazioa** berreskurapenean zehar.

[Deskargatu berreskurapen-prozedura (DOCX/PDF)](/zik/templates/#berreskurapen-prozedura)

### 3. Probatu hilero

- Berreskuratu VM bat babeskopia-puntu batetik.
- Egiaztatu zerbitzua martxan jartzen dela.
- Dokumentatu emaitza taula batean.

BIA txantiloiak DR proben egutegia dakar — erabili probak programatzeko.

### 4. Definitu espedienteen kontserbazio-politika (ISO 27001 A.5.33)

Zure ikastetxeak legez gorde behar ditu dokumentu jakin batzuk denbora
tarte jakin batez. Inprimaki sinple batean jaso:

- **Ikasleen espedienteak**: gutxienez ikasketak amaitu eta 6 urte (hezkuntza-araudia).
- **Datu ekonomikoak (fakturak, nominak)**: 6 urte (merkataritza-zuzenbidea).
- **Segurtasun-erregistroak (log-ak)**: gutxienez 1 urte, gomendatua 3 (ISO 27001).
- **Konfidentzialtasun-akordioak**: lan-harremana amaitu eta 3 urte.

Erabaki:
- Non gordetzen dira? (sareko unitatea, artxibo fisikoa, hodeia).
- Nork du sarbidea? (administrariak soilik, zuzendaritza…).
- Noiz eta nola suntsitzen dira? (birrintzailea, ezabapen segurua).

Ez duzu dokumentu legal bat idatzi behar. Taula bat nahikoa da.

[Deskargatu espedienteen kontserbazio-politika (DOCX/PDF)](/zik/templates/#espedienteen-kontserbazio-politika)

### 5. Jakinarazi intzidentzia berreskurapenean (ISO 27001 A.6.8)

Berreskurapen-fasean ere, intzidentzia jakinarazteko betebeharrak bete
behar dituzu:

- **Datu-urraketa bada**: 72 orduko epean AEPDri jakinarazi (ikus
  [Erantzun](/zik/erantzun/)). Berreskurapena hasita ere, epea ez da gelditzen.
- **Etenaldi luzea bada**: jakinarazi ikastetxeko langileei eta ikasleei
  zer gertatu den, zer zerbitzu dauden erorita eta noizko espero den
  konponketa.
- **Kanpoko laguntza behar bada**: jakinarazi Hezkuntza Sailari/Tknikari
  eta Cyberzaintzari (900 104 891) intzidentzia kritikoa bada.

Gorde jakinarazpenen erregistroa — auditoriak eska dezake.

---

## Egindakoa markatu

- [ ] BIA txantiloia bete dut (RTO eta RPO zerbitzu bakoitzarentzat)
- [ ] Fallback plana definituta (zer egin zerbitzua erorita dagoen bitartean)
- [ ] Berreskurapen-prozedura idatzi dut txantiloia erabiliz
- [ ] Lehentasun-zerrenda BIA-n oinarrituta definituta
- [ ] Berreskurapen-proba bat egin eta dokumentatu dut
- [ ] DR proben egutegia programatuta
- [ ] Espedienteen kontserbazio-politika idatzi dut
- [ ] Jakinarazpen-prozedura argi dago (nori, noiz, nola)

---

## Erreferentziak

| Estandarra | Atala | Deskribapena |
|-----------|-------|-------------|
| NIST CSF 2.0 | RC.RP, RC.CO | Recovery plan execution, communication |
| ISO 27001:2022 | A.5.29, A.5.30, A.5.33, A.6.8, A.8.14 | TIC jarraitutasuna, negozio-eraginaren analisia, erregistroen babesa, intzidentzien jakinarazpena, informazioaren berreskurapena |
| ENS | 26., 36. art. | Jardueraren jarraitutasuna, babeskopiak |
| RGPD | 5.1.e), 32. art. | Datuen kontserbazio-epeak, segurtasun-neurriak |
