# Berreskurapen-prozedura — {{schoolName}}

Data: {{recoveryPlanDate}}<br>
Dokumentu-erreferentzia: ZIK-BER-{{schoolCode}}

---

## 1. Xedea

Prozedura honek zerbitzuen eta datuen berreskurapena definitzen du,
ingurune birtualizatuan. ISO 27001 A.8.14 (informazioaren
berreskurapena) kontrolean oinarritzen da.

---

## 2. Berreskurapen-eszenarioak

| Eszenarioa | Adibidea | Zer berreskuratu |
|------------|----------|-------------------|
| 🟡 Fitxategi bat ezabatzea | Erabiltzaile batek karpeta ezabatu du | Fitxategia babeskopiatik |
| 🟠 Sistema baten akatsa | Eguneratze batek Moodle apurtu du | VM osoa aurreko eguneko kopiatik |
| 🔴 Hainbat sistema kaltetuta | Ransomware erasoa, hardware akatsa | VM guztiak, lehentasun-ordenaren arabera |
| 🔴 Hondamendia | Sutea, uholdea, instalazioak kaltetuta | VM guztiak kanpoko kopiatik |

---

## 3. Berreskurapen-lehentasunak

Zerbitzuak zer ordenatan berreskuratu:

| Lehentasuna | Zerbitzua | VM / Sistema | Oharra |
|-------------|-----------|--------------|--------|
| 1 | Sare-azpiegitura (DNS, DHCP, firewall) | {{networkVM}} | Lehenik sarea berreskuratu, bestela ezin da ezer komunikatu |
| 2 | Kudeaketa-aplikazioa (Odoo) | {{odooVM}} | Matrikulazioa, notak, kontabilitatea |
| 3 | Sareko unitate partekatuak | {{fileserverVM}} | Dokumentuak, material didaktikoa |
| 4 | Moodle / LMS | {{moodleVM}} | Irakaskuntza-jarduera |
| 5 | Posta elektronikoa | {{mailVM}} | Barne- eta kanpo-komunikazioa |

> Egokitu ordena zure ikastetxearen beharren arabera.

---

## 4. Berreskurapen-pausoak (VM bidez)

Ikastetxeak {{virtualizationPlatform}} eta {{backupSolution}} erabiltzen ditu.

### VM bakar bat berreskuratzeko (eszenario 🟡)

1. Sartu {{backupSolution}} kudeaketa-kontsolan.
2. Hautatu berreskuratu beharreko VM-a: `{{vmName}}`.
3. Hautatu leheneratu nahi duzun babeskopia-puntua.
4. Berreskuratu VM-a. Berreskuratzeak {{restoreDuration}} minutu inguru
   behar ditu (VM-aren tamainaren arabera).
5. Egiaztatu zerbitzua martxan dagoela: saioa hasi eta proba bat egin.

### VM guztiak berreskuratzeko (eszenario 🔴)

1. Egiaztatu {{backupSolution}} egoera: babeskopiak eskuragarri?
2. Berreskuratu VM-ak **lehentasun-ordenaren arabera** (ikus 3. atala).
3. Sarea egiaztatu (DNS, DHCP, firewall) beste ezer berreskuratu aurretik.
4. Berreskuratu kudeaketa-aplikazioa eta fitxategi-zerbitzaria.
5. Berreskuratu Moodle eta posta.
6. Egin **berreskurapen-proba funtzionala**: erabiltzaile gisa saioa hasi,
   fitxategi bat ireki, posta bat bidali.

---

## 5. Arduradunak

| Rola | Izena | Erantzukizuna |
|------|-------|---------------|
| Berreskurapen-arduraduna | {{recoveryOwner}} | Prozedura martxan jartzea |
| IT zerbitzua | {{itContactRecovery}} | VM-ak berreskuratzea, sarea egiaztatzea |
| Zuzendaritza / Komunikazioa | {{commsContactRecovery}} | Langileak eta ikasleak informatzea |

---

## 6. Komunikazioa berreskurapenean

- **Erabiltzaileei jakinarazi**: zer gertatu den, zer zerbitzu dauden
  erorita, eta itxarondako berreskurapen-denbora (posta elektronikoz,
  webgunean ohar bat, edo Whatsapp talde bidez posta erorita badago).
- **Eguneratzeak eman**: berreskurapenean zehar, informatu aldiro
  egoerari buruz.

---

## 7. Proba

Hilero berreskuratu **VM bat proba gisa** eta egiaztatu:

- [ ] VM-a berreskuratu da akatsik gabe
- [ ] Zerbitzua martxan jartzen da
- [ ] Datuen integritatea zuzena da

| Data | VM-a | Emaitza | Akatsa? |
|------|------|---------|----------|
| | | ✅ / ❌ | |
| | | ✅ / ❌ | |
| | | ✅ / ❌ | |

---

## 8. Berrikuspena

Prozedura hau **urtero berrikusiko da**, edo azpiegitura aldatzen den bakoitzean
(zerbitzari berriak, zerbitzu berriak, babeskopia-sistema berria).

Azken berrikuspena: {{recoveryPlanDate}}<br>
Hurrengo berrikuspena: {{nextRecoveryReviewDate}}

---

> Dokumentu hau automatikoki sortu da **Zik — Zibersegurtasuna Ikastetxeetan**
> gidaren bidez. CC BY-SA 4.0 lizentziapean erabilgarri.
