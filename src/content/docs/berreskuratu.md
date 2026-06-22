---
title: 6. Berreskuratu
description: Berreskurapen-prozedura idatzi eta probatu — zerbitzuak eta datuak nola berreskuratu intzidentzia baten ondoren
iso27001:
  - id: 'A.5.29'
    description: Segurtasuna etenaldian (TIC jarraitutasuna)
  - id: 'A.8.14'
    description: Informazioaren berreskurapena
compliance:
  clauses_pct: 8
  annexA_pct: 8
---

Intzidentzia baten ondoren **normaltasunera itzultzea** da. Babeskopietatik
datuak eta zerbitzuak berreskuratu eta ikastetxearen funtzionamendua
lehenbailehen berrezartzea.

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

### 1. Idatzi berreskurapen-prozedura

Erabili txantiloia zure ingurune birtualizaturako berreskurapen-prozedura
definitzeko:

- **Lau eszenario**: fitxategi bakarra, sistema bat, hainbat sistema,
  hondamendia.
- **Lehentasun-zerrenda**: zer berreskuratu lehenengo (sarea → Odoo →
  fitxategiak → Moodle → posta).
- **Pausoz pauso**: VM-ak nola berreskuratu zure babeskopia-sistematik
  (Proxmox Backup Server, Veeam…).
- **Arduradunak** eta **komunikazioa** berreskurapenean zehar.

[Deskargatu berreskurapen-prozedura (DOCX/PDF)](/zik/templates/#berreskurapen-prozedura)

### 2. Probatu hilero

- Berreskuratu VM bat babeskopia-puntu batetik.
- Egiaztatu zerbitzua martxan jartzen dela.
- Dokumentatu emaitza taula batean.

Txantiloiak proben erregistro-taula bat dakar.

---

## Egindakoa markatu

- [ ] Berreskurapen-prozedura idatzi dut txantiloia erabiliz
- [ ] Lehentasun-zerrenda definituta
- [ ] Berreskurapen-proba bat egin eta dokumentatu dut
- [ ] Proba hilero errepikatzea programatuta

---

## Erreferentziak

| Estandarra | Atala | Deskribapena |
|-----------|-------|-------------|
| NIST CSF 2.0 | RC.RP, RC.CO | Recovery plan execution, communication |
| ISO 27001:2022 | A.5.29, A.8.14 | TIC jarraitutasuna, informazioaren berreskurapena |
| ENS | 26., 36. art. | Jardueraren jarraitutasuna, babeskopiak |
