---
title: 3. Babestu
description: Pasahitzak, eguneratzeak, babeskopiak — oinarrizko hiru neurriak sistemen babeserako
iso27001:
  - id: 'A.5.15'
    description: Atzipen-kontrola
  - id: 'A.5.16'
    description: Identitate-kudeaketa
  - id: 'A.5.17'
    description: Autentikazio-informazioa
  - id: 'A.8.8'
    description: Ahultasun teknikoen kudeaketa
  - id: 'A.8.13'
    description: Informazioaren babeskopiak
  - id: 'A.8.24'
    description: Kriptografia erabilera
compliance:
  clauses_pct: 15
  annexA_pct: 44
---

Segurtasun-politika idatzi duzu (Gobernantza). Orain **teknikoki babestu**
behar dituzu sistemak: pasahitzak, eguneratzeak, babeskopiak, eta sarearen
segmentazioa.

---

## Zergatik da garrantzitsua?

- Segurtasun-intzidentzia gehienak **oinarrizko neurriak falta direlako**
  gertatzen dira: lehenetsitako pasahitzak, eguneratu gabeko softwarea,
  babeskopiarik eza.

---

## Zer egin?

### 1. Pasahitzak

Segurtasun-politikan (Gobernantza atala) definitu dituzu pasahitzen
arauak. Orain betearazi:

- Erabili **pasahitz luzeak** (gutxienez 12 karaktere).
- Ez erabili pasahitz bera leku guztietan. Pasahitzen kudeatzaile bat
  erabiltzea gomendatzen da:
  - **[KeePassXC](https://keepassxc.org/)** — Lokala, doakoa. Pasahitzak
    fitxategi batean gordetzen ditu. Talde txikientzat egokia.
  - **[Passbolt](https://www.passbolt.com/)** — Sarean, taldeentzat diseinatua.
    Pasahitzak partekatzeko eta baimenak kudeatzeko aukera ematen du.
    Doako komunitate-edizioa dauka.
- **Aldatu lehenetsitako pasahitz guztiak** (routerrarena, WiFi-arena,
  inprimagailuena…). Lehenetsitako pasahitzak Interneten daude argitaratuta.

### 2. Eguneratzeak eta segmentazioa

- Aktibatu **eguneratze automatikoak** sistema eragilean (Windows, Linux, Mac).
- Eguneratu **nabigatzaileak** — automatikoki egiten da normalean.
- Eguneratu **aplikazio kritikoak**: bulegotika, Moodle, Odoo.
- **Segmentatu sarea**: ikastetxeko sarea gutxienez bi VLANetan banatu:
  irakasleak eta kudeaketa (sarbide osoa) vs. ikasleak eta bisitariak
  (Interneterako sarbidea soilik). Horrela, ikasleen sarean gertatutako
  intzidente batek ez die kudeaketa-sistemei eragingo.

### 3. Babeskopien politika

Ezarri babeskopia-politika idatzi bat:

- **Zer babesten da**? Makina birtual guztiak (Odoo, Moodle, fitxategi-zerbitzaria).
- **Non gordetzen dira**? 3-2-1 araua betez.
- **Nork egiten du?** Izendatu arduradun bat.
- **Maiztasuna**: egunero, gauez.
- **Berreskurapen-probak**: hilero.

[Deskargatu babeskopien politika-txantiloia (DOCX/PDF)](/zik/templates/#babeskopien-politika)

---

## Egindakoa markatu

- [ ] Lehenetsitako pasahitz guztiak aldatu ditut (routerra, WiFi-a, inprimagailuak)
- [ ] Pasahitzen kudeatzailea instalatu eta langileei erabiltzen erakutsi
- [ ] Eguneratze automatikoak aktibatuta sistema guztietan
- [ ] Sarea segmentatu dut (gutxienez: kudeaketa vs. ikasleak/bisitariak)
- [ ] Babeskopien politika idatzi dut txantiloia erabiliz
- [ ] Lehen berreskurapen-proba egin dut

---

## Erreferentziak

| Estandarra | Atala | Deskribapena |
|-----------|-------|-------------|
| NIST CSF 2.0 | PR.AA, PR.DS, PR.PS, PR.IR | Access control, data security, platform, resilience |
| ISO 27001:2022 | A.5.15–A.5.17, A.8.8, A.8.13, A.8.24 | Atzipena, eguneratzeak, babeskopiak, zifraketa |
| ENS | 17., 20., 22., 36. art. | Atzipen-kontrola, eguneratzeak, babeskopiak |
| RGPD | 32. art. | Segurtasun-neurri teknikoak eta antolakuntzakoak |
