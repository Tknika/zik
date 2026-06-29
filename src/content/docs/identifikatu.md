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

Ez duzuna ezagutzen ezin duzu babestu. Atal honetan zure ikastetxearen
**aktiboak, datu sentikorrak eta arrisku nagusiak** identifikatuko dituzu.

---

## Zergatik da garrantzitsua?

- **Aktiboak behar bezala identifikatzen ez badira**, ezagutzen ez ditugun erabiltzaile, gailu, aplikazio eta abar arrisku bihurtu daitezke.
- **Erasorik jasaten badugu**, erantzun azkarra eta eraginkorra izateko ezinbestekoa da aldez aurretik aktiboak eta arriskuak identifikatuta izatea.

---

## Zer egin?

### 1. Egin aktiboen zerrenda

Ez duzu zerrenda zehatz-mehatz egin behar. Hasteko, kopuruak nahikoa
dira. Idatzi gutxienez:

- **Zerbitzariak**: zenbat? Fisikoak ala birtualak?
- **Ordenagailuak**: zenbat? Irakasleentzat eta ikasleentzat.
- **Sare-gailuak**: routerrak, switch-ak, WiFi sarbide-puntuak.
- **Inprimagailuak**: sarera konektatuta badaude.
- **Hodeiko zerbitzuak**: Office 365, Google Workspace, Moodle, Dropbox... 

Zerrenda honek zure ikastetxeko aktibo digitalen ikuspegi orokorra izaten lagunduko dizu.

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

Datu sentikorrak non erabiltzen diren aztertu:

- Ikasleen espedienteak (matrikulazioa, kalifikazioak, datu medikoak…)
- Langileen datuak (nominak, kontratuak…)
- Kontabilitatea eta kudeaketa ekonomikoa (adibidez, Odoo-n)
- Pasahitzak eta sarbide-datuak

### 3. Identifikatu arrisku nagusiak

Bete **arriskuen zerrenda** (ez da analisi formalik egin beharrik). Identifikatu 3-5 arrisku eta eman arintze-neurri sinpleak bakoitzarentzat:

[Deskargatu arriskuen zerrenda-txantiloia (DOCX/PDF)](/zik/templates/#arriskuen-zerrenda)

### 4. Egin arriskuen analisi formala (gomendatua)

Arriskuen zerrendatik haratago joan nahi baduzu, Margerit-en
oinarritutako arriskuen analisia eta CCN-CERTen mehatxuen katalogoa
erabil ditzakezu:

[Arriskuen analisia (Margerit)](/zik/templates/#arriskuen-analisia)  
[Mehatxuen katalogoa (CCN-CERT)](/zik/templates/#mehatxuen-katalogoa)

### 5. Identifikatu hornitzaile eta hirugarrenak (ISO 27001 A.5.19–A.5.22)

Kanpoko hornitzaile eta zerbitzuek zure datuetarako sarbidea dute:

- **Hodeiko zerbitzuak**: Office 365, Google Workspace, Moodle Cloud, Dropbox…
- **Software-hornitzaileak**: Odoo, kudeaketa-aplikazioak, nominen softwarea…
- **IT zerbitzuak**: mantentze-lanak, hosting-a, babeskopien hornitzaileak…
- **Aholkulariak eta kanpoko kolaboratzaileak**: edonork datuetarako sarbidea badu.

Hornitzaile bakoitzarentzat:
- Identifikatu **zer datutara** duen sarbidea.
- Ziurtatu **konfidentzialtasun-akordio** bat sinatu duela.
- Egiaztatu **DBEO (RGPD) tratamendu-kontratu** bat (DPA) dagoela sinatuta.
- Baloratu haien **zibersegurtasun-maila** (ziurtagiriak, ISO 27001, ENS…).

[Deskargatu hornitzaileen ebaluazioa (DOCX/PDF)](/zik/templates/#hornitzaileen-ebaluazioa)

### 6. Erabaki zer egin arrisku bakoitzarekin (ISO 27001 8.3)

Arrisku bakoitzarentzat lau aukera daude: 
- **Murriztu** (kontrol bat ezarri)
- **Onartu** (arriskua txikia bada) 
- **Transferitu** (aseguru bidez)
- **Saihestu** (jarduera uztea)

Erabakia idatziz jaso eta izendatu arduradun bat.

[Deskargatu arrisku-tratamendu plana (DOCX/PDF)](/zik/templates/#arriskuen-analisia)

---

## Egindakoa markatu

- [ ] Aktiboen zerrenda egin dut
- [ ] Datu sentikorrak non dauden identifikatu dut
- [ ] Arriskuen zerrenda bete dut (3-5 arrisku)
- [ ] Hornitzaile eta hirugarrenen zerrenda egin dut
- [ ] Hornitzaile bakoitzak zer datutara sarbidea duen identifikatu dut
- [ ] Hornitzaile guztiek konfidentzialtasun-akordioa sinatu dute
- [ ] DPA/RGPD tratamendu-kontratua sinatuta (datuak tratatzen dituztenentzat)
- [ ] Arrisku bakoitzak tratamendu-erabaki bat dauka (murriztu/onartu/transferitu/saihestu)

---

## Erreferentziak

| Estandarra | Atala | Deskribapena |
|-----------|-------|-------------|
| NIST CSF 2.0 | ID.AM, ID.RA | Asset management, risk assessment |
| ISO 27001:2022 | A.5.9, A.5.10, A.5.12, A.5.19–A.5.22, 8.2, 8.3 | Aktiboen inbentarioa, erabilera, sailkapena, hornitzaileen kudeaketa, arrisku-ebaluazioa, arrisku-tratamendua |
| ENS | 13., 14. art. | Arduraduna, arriskuen analisia |
| RGPD | 30. art. | Tratamendu-jardueren erregistroa |
