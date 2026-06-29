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

Segurtasun-politika idatzi duzu (Gobernantza), eta kudeatzen dituzun sistemak identifikatu dituzu. Orain sistema horiek **teknikoki babestu**
behar dituzu: pasahitzak, eguneratzeak, babeskopiak, sarbideen
kudeaketa, sarearen segmentazioa...

---

## Zergatik da garrantzitsua?

Segurtasun-intzidentzia gehienak **oinarrizko neurriak ez hartzeagatik**   gertatzen dira: lehenetsitako pasahitzak erabiltzea, eguneratu gabeko softwarea izatea, babeskopiarik ez egitea...

---

## Zer egin?

### 1. Pasahitzak

Segurtasun-politikan (Gobernantza atalean) definitu dituzu pasahitzen
arauak. Aplikatzeko garaia iritsi da:

- Erabili **pasahitz luzeak** (gutxienez 12 karaktere).
- Ez erabili pasahitz bera leku guztietan. Pasahitzen kudeatzaile bat
  erabiltzea gomendatzen da:
  - **[KeePassXC](https://keepassxc.org/)**: Lokala, doakoa. Pasahitzak
    fitxategi batean gordetzen ditu. Talde txikientzat egokia.
  - **[Passbolt](https://www.passbolt.com/)**: Sarean, taldeentzat diseinatua.
    Pasahitzak partekatzeko eta baimenak kudeatzeko aukera ematen du.
    Doako komunitate-edizioa dauka.
- **Aldatu lehenetsitako pasahitz guztiak** (routerrarena, WiFi-arena,
  inprimagailuena…). Lehenetsitako pasahitzak Interneten daude argitaratuta.

### 2. Eguneratzeak eta segmentazioa

- Aktibatu **eguneratze automatikoak** sistema eragilean (Windows, Linux, Mac).
- Eguneratu **nabigatzaileak** (automatikoki egiten da normalean).
- Eguneratu **aplikazio kritikoak**: bulegotika, Moodle, Odoo.
- **Segmentatu sarea**: ikastetxeko sarea segumentuetan banatu, besteak beste:

![Lanbide Heziketako ikastetxe batek izan behar dituen VLAN sareen zerrenda](/zik/vlan.jpg)

Horrela, adibidez, ikasleen sarean gertatutako intzidente batek ez die kudeaketa-sistemei eragingo.

(Informazio hau [Ikastetxeen oinarrizko segurtasun betebeharretan jasota dago](https://fpikaskuntzagunea.hezkuntza.net/pluginfile.php/47065/mod_page/content/16/fp-oinarrizko-segurtasuna-20250903.pdf))


### 3. Sarbideen kudeaketa (ISO 27001 A.5.15, A.5.18, A.8.2, A.8.3)

Segurtasun-politikan (Gobernantza) definitutako **sarbideen kudeaketa** aplikatu:

- **Definitu rolak eta sarbide-mailak**: nork atzi dezakeen zer
  (zuzendaritza, IT, administrariak, irakasleak, ikasleak, bisitariak).
- **Ezarri gutxieneko pribilegioa**: bakoitzak bere lana egiteko
  behar duen gutxieneko sarbidea soilik.
- **Kudeatu administratzaile-kontuak**: zenbat eta gutxiago, hobeto.
  MFA nahitaezkoa administratzaileentzat eta VPN sarbidea dutenentzat.
- **Berrikusi sarbideak aldiro**: hiru hilean behin, egiaztatu baja eman beharreko konturik ez dagoela eta erabiltzaile guztiek behar dituzten baimenak soilik dituztela.
- **Idatzi sarbide-politika**: dokumentu bakarrean jaso rolak, prozedurak
  (altak, bajak, aldaketak) eta berrikuspen-periodikotasuna.
- **Erabiltzaileen kudeaketaren dokumentazioa**: ISO 27001 arauak erabiltzaileen bizi-zikloaren kudeaketa (altak, bajak, aldaketak, salbuespenak eta aldizkako berrikuspenak) idatziz dokumentatzea eskatzen du. Horretarako, erabilitako txantiloiak ikasturte hasierako alta masiboak jasotzeko atal espezifikoa du; beraz, ez da beharrezkoa erabiltzaile bakoitza banaka erregistratzea, taldeka edo multzoka dokumentatzea nahikoa da.

[Deskargatu sarbide-kontrolaren politika (DOCX/PDF)](/zik/templates/#sarbide-kontrolaren-politika)
[Deskargatu erabiltzaileen kudeaketa-erregistroa (DOCX/PDF)](/zik/templates/#erabiltzaileen-kudeaketa-erregistroa)

### 4. Babeskopien politika

Ezarri babeskopia-politika bat (idatziz):

- **Zer babesten da**? Makina birtual guztiak (Odoo, Moodle, fitxategi-zerbitzaria).
- **Non gordetzen dira**? 3-2-1 araua betez.
- **Nork egiten du?** Izendatu arduradun bat.
- **Maiztasuna**: egunero, gauez.
- **Berreskurapen-probak**: hilero.

[Deskargatu babeskopien politika-txantiloia (DOCX/PDF)](/zik/templates/#babeskopien-politika)

### 5. Formakuntza eta sentsibilizazioa (ISO 27001 A.6.3)

Babes-neurririk eraginkorrena pertsonen sentsibilizazioa eta prestakuntza da. Neurri teknikoek bakarrik ez dute nahikoa babesa bermatzen, erabiltzaile baten hutsegite batek segurtasuna arriskuan jar baitezake.

- **Ikasturte hasieran**: gogoratu langile guztiei intzidentzien jakinarazpen-prozedura, pasahitzen arauak eta phishing-ari buruzko oinarriak. 
- **Langile berriak**: konfidentzialtasun-akordioa sinatzerakoan, azaldu segurtasun-politikaren oinarriak.

### 6. Segurtasun fisikoa (ISO 27001 A.7)

Eraso digitalek arreta gehien jasotzen duten arren, kontrolik gabeko sarbide fisikoak neurri teknikoak alferrikako bihur ditzake.

- **Zerbitzari-gela**: itxita eta giltzapean. Sarbidea soilik IT arduradunari eta zibersegurtasun-arduradunari.
- **Mahai garbia**: dokumentu sentikorrak ez utzi mahai gainean — artxibatu edo birrindu. Ordenagailua blokeatu lanpostua uztean.
- **Gailuak**: ordenagailu eramangarriak eta kanpoko diskoak ez utzi baimenik gabe atzitu daitezkeen lekuetan.

---

## Egindakoa markatu

- [ ] Lehenetsitako pasahitz guztiak aldatu ditut (routerra, WiFi-a, inprimagailuak)
- [ ] Pasahitzen kudeatzailea instalatu eta langileei erabiltzen erakutsi
- [ ] Eguneratze automatikoak aktibatuta sistema guztietan
- [ ] Sarea segmentatu dut (gutxienez: kudeaketa vs. ikasleak/bisitariak)
- [ ] Rolak eta sarbide-mailak definitu ditut
- [ ] Sarbideen altak, bajak eta aldaketak egiteko prozedura idatzi dut
- [ ] Administratzaile-kontuen MFA gaituta
- [ ] Sarbideen lehen berrikuspen periodikoa eginda
- [ ] Erabiltzaileen kudeaketa-erregistroa martxan (altak, bajak, berrikuspenak)
- [ ] Babeskopien politika idatzi dut txantiloia erabiliz
- [ ] Lehen berreskurapen-proba egin dut
- [ ] Langileei urteko sentsibilizazio-saioa eman dut
- [ ] Zerbitzari-gela itxita eta sarbidea mugatuta
- [ ] Mahai garbia politika ezarrita (dokumentuak artxibatu, pantaila blokeatu)

---

## Erreferentziak

| Estandarra | Atala | Deskribapena |
|-----------|-------|-------------|
| NIST CSF 2.0 | PR.AA, PR.AT, PR.DS, PR.PS, PR.IR | Access control, awareness training, data security, platform, resilience |
| ISO 27001:2022 | A.5.15–A.5.18, A.5.37, A.6.3, A.7.1, A.7.2, A.8.2, A.8.3, A.8.8, A.8.13, A.8.24 | Atzipena, sarbideen kudeaketa, sentsibilizazioa, segurtasun fisikoa, pribilegioak, eguneratzeak, babeskopiak, zifraketa |
| ENS | 17., 20., 22., 36. art. | Atzipen-kontrola, eguneratzeak, babeskopiak |
| RGPD | 32. art. | Segurtasun-neurri teknikoak eta antolakuntzakoak |
