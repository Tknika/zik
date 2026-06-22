---
title: 2. Identifikatu
description: Zerrendatu aktiboak, identifikatu datu sentikorrak eta arrisku nagusiak.
iso27001:
  - id: '8.2'
    description: Arrisku-ebaluazioa
  - id: '8.3'
    description: Arriskuen tratamendu-plana
  - id: 'A.5.9'
    description: Aktiboen inbentarioa
  - id: 'A.5.10'
    description: Informazioaren erabilera onargarria
  - id: 'A.5.12'
    description: Informazioaren sailkapena
compliance:
  clauses_pct: 35
  annexA_pct: 24
---

Ezin duzu babestu zer daukazun ez dakizuna. Atal honetan zure ikastetxearen
**aktiboak, datu sentikorrak eta arrisku nagusiak** identifikatuko dituzu.

---

## Zergatik da garrantzitsua?

- Ransomware batek zer zifratu duen jakiteko, lehenengo jakin behar duzu
  zer daukazun.
- Aseguru edo aholkulari batek galdetzen badizu, zerrenda bat eman beharko duzu.

---

## Zer egin?

### 1. Egin aktiboen zerrenda

Ez duzu zerrenda zehatz-mehatz egin behar. Hasteko, kopuruak nahikoa
dira. Idatzi gutxienez:

- **Zerbitzariak**: zenbat? Fisikoak ala birtualak?
- **Ordenagailuak**: zenbat? Irakasleentzat eta ikasleentzat.
- **Sare-gailuak**: routerrak, switch-ak, WiFi sarbide-puntuak.
- **Inprimagailuak**: sarera konektatuta badaude.
- **Hodeiko zerbitzuak**: Office 365, Google Workspace, Moodle, Dropbox…

#### Tresna erabilgarriak

Aktiboen zerrenda kudeatzeko:

- **[GLPI](https://glpi-project.org/)** — IT aktiboen kudeaketarako
  plataforma osoa (inbentarioa + helpdesk). Egokia IT taldea duten
  ikastetxeentzat.
- **[NetBox](https://netboxlabs.com/)** — Sare-azpiegituren
  dokumentaziorako (DCIM/IPAM).
- **Kalkulu-orria** — Txikia eta sinplea. Hasteko primerako aukera.
  Garrantzitsuena gaurkotuta mantentzea da.

GLPIk eta NetBoxek ISO 27001 A.5.9 (aktiboen inbentarioa) betetzen
laguntzen dute.

### 2. Identifikatu datu sentikorrak

Pentsatu non dauden datu sentikorrak:

- Ikasleen espedienteak (matrikulazioa, notak, datu medikoak…)
- Langileen datuak (nominak, kontratuak…)
- Kontabilitatea eta kudeaketa ekonomikoa (adibidez, Odoo-n)
- Pasahitzak eta sarbide-datuak

### 3. Identifikatu arrisku nagusiak

Ez duzu analisi formalik egin behar. Bete **arriskuen zerrenda**
— identifikatu 3-5 arrisku eta parekatu arintze-neurri sinpleekin:

[Deskargatu arriskuen zerrenda-txantiloia (DOCX/PDF)](/zik/templates/#arriskuen-zerrenda)

### 4. Egin arriskuen analisi formala (gomendatua)

Arriskuen zerrendatik haratago joan nahi baduzu, Margerit-en
oinarritutako arriskuen analisia eta CCN-CERTen mehatxuen katalogoa
erabil ditzakezu:

[Arriskuen analisia (Margerit)](/zik/templates/#arriskuen-analisia)  
[Mehatxuen katalogoa (CCN-CERT)](/zik/templates/#mehatxuen-katalogoa)

### 5. Erabaki zer egin arrisku bakoitzarekin (ISO 27001 8.3)

Arrisku bakoitzarentzat lau aukera daude: **murriztu** (kontrol bat ezarri),
**onartu** (arriskua txikia bada), **transferitu** (aseguru bidez), edo
**saihestu** (jarduera uztea). Erabakia idatziz jaso eta izendatu arduradun bat.

[Deskargatu arrisku-tratamendu plana (DOCX/PDF)](/zik/templates/#arrisku-tratamendu-plana)

---

## Egindakoa markatu

- [ ] Aktiboen zerrenda egin dut
- [ ] Datu sentikorrak non dauden identifikatu dut
- [ ] Arriskuen zerrenda bete dut (3-5 arrisku)
- [ ] Arrisku bakoitzak tratamendu-erabaki bat dauka (murriztu/onartu/transferitu/saihestu)

---

## Erreferentziak

| Estandarra | Atala | Deskribapena |
|-----------|-------|-------------|
| NIST CSF 2.0 | ID.AM, ID.RA | Asset management, risk assessment |
| ISO 27001:2022 | A.5.9, A.5.10, A.5.12, 8.2, 8.3 | Aktiboen inbentarioa, erabilera, sailkapena, arrisku-ebaluazioa, arrisku-tratamendua |
| ENS | 13., 14. art. | Arduraduna, arriskuen analisia |
| RGPD | 30. art. | Tratamendu-jardueren erregistroa |
