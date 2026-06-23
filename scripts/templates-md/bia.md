# Negozio-eraginaren analisia (BIA) — {{schoolName}}

Data: {{biaDate}}<br>
Dokumentu-erreferentzia: ZIK-BIA-{{schoolCode}}

---

## 1. Zertarako

Dokumentu honek zure ikastetxeko zerbitzu bakoitzak zenbat denbora egon
daitekeen etenik eta zenbat datu gal daitezkeen erabakitzen du. Bi galdera
sinple erantzun besterik ez duzu.

**RTO** (Recovery Time Objective) = zerbitzua berreskuratzeko gehienezko denbora.
**RPO** (Recovery Point Objective) = onartzen duzun gehienezko datu-galera.

Adibidea: matrikulazio-sistema 4 orduz egon daiteke etenik (RTO = 4h), eta
azken orduko datuak galtzea onartzen duzu (RPO = 1h, orduro babeskopia
egiten delako).

**ISO 27001: A.5.30 (TICen prestasuna negozioaren jarraitutasunerako)**

---

## 2. Zerbitzuen analisia

Bete taula zure zerbitzuekin. Gehitu edo kendu ilarak behar duzunaren arabera.

| Zerbitzua | RTO (gehienezko eten-denbora) | RPO (onartutako datu-galera) | Zer gertatzen da erortzen bada? | Fallback plana | Lehentasuna |
|---|---|---|---|---|---|
| Sarea (DNS, DHCP, FW) | {{networkRTO}} | {{networkRPO}} | {{networkImpact}} | {{networkFallback}} | 1 |
| Kudeaketa (Odoo / nominak / kontabilitatea) | {{odooRTO}} | {{odooRPO}} | {{odooImpact}} | {{odooFallback}} | 2 |
| Fitxategi-zerbitzaria | {{filesRTO}} | {{filesRPO}} | {{filesImpact}} | {{filesFallback}} | 3 |
| Moodle / LMS | {{moodleRTO}} | {{moodleRPO}} | {{moodleImpact}} | {{moodleFallback}} | 4 |
| Posta elektronikoa | {{mailRTO}} | {{mailRPO}} | {{mailImpact}} | {{mailFallback}} | 5 |
| {{service6Name}} | {{service6RTO}} | {{service6RPO}} | {{service6Impact}} | {{service6Fallback}} | 6 |

**Gida RTO eta RPO betetzeko:**

| RTO | Noiz erabili |
|-----|-------------|
| 4 ordu | Eguneroko funtzionamendurako kritikoa bada (Odoo, sarea) |
| 24 ordu | Garrantzitsua baina egun bat itxaron daiteke (Moodle, fitxategiak) |
| 72 ordu | Ez da kritikoa epe laburrean (posta, webgunea) |

| RPO | Noiz erabili |
|-----|-------------|
| 1 ordu | Daturik ezin da galdu (kontabilitatea, matrikulazioa) |
| 24 ordu | Azken eguneko lana berreskura daiteke |
| 72 ordu | Aste bukaerako babeskopiarekin nahikoa |

---

## 3. Fallback plana (zerbitzua erorita dagoen bitartean)

Zerbitzu bat erorita dagoen bitartean, zer egin? Ez da plan konplexua
izan behar — alternatiba sinple bat:

- **Papera**: matrikulazioa paperean egin eta gero Odoo-n sartu.
- **Whatsapp / telefonoz**: barne-komunikaziorako posta erorita badago.
- **Beste ikastetxe batera joan**: hondamendi handi bat izanez gero.
- **4G bideratzailea**: Interneteko konexioa eroriz gero.

| Egoera | Zer egin | Nork | Behar den materiala |
|---|---|---|---|
| Internet gabe | {{internetFallback}} | {{internetWho}} | {{internetMaterial}} |
| Odoo erorita | {{odooOffline}} | {{odooWho}} | {{odooMaterial}} |
| Posta erorita | {{mailOffline}} | {{mailWho}} | {{mailMaterial}} |
| Moodle erorita | {{moodleOffline}} | {{moodleWho}} | {{moodleMaterial}} |

---

## 4. DR proben egutegia

Zerbitzu kritikoenak berreskuratze-probak noiz egingo diren:

| Zerbitzua | Probaren maiztasuna | Azken proba | Hurrengo proba | Arduraduna |
|---|---|---|---|---|
| {{drTestService1}} | {{drTestFreq1}} | {{drTestLast1}} | {{drTestNext1}} | {{drTestOwner1}} |
| {{drTestService2}} | {{drTestFreq2}} | {{drTestLast2}} | {{drTestNext2}} | {{drTestOwner2}} |
| {{drTestService3}} | {{drTestFreq3}} | {{drTestLast3}} | {{drTestNext3}} | {{drTestOwner3}} |

---

## 5. Sinadurak

Analisi hau **urtero berrikusiko da**, edo azpiegitura aldatzen den bakoitzean
(zerbitzu berriak, zerbitzari berriak…).

Hurrengo berrikuspena: {{nextBIADate}}

**Zuzendaritza**

Izen-abizenak: ________________________________________________________

Sinadura: ________________________ &emsp; Data: _______________

**Zibersegurtasun-arduraduna**

Izen-abizenak: ________________________________________________________

Sinadura: ________________________ &emsp; Data: _______________

---

> Dokumentu hau automatikoki sortu da **Zik — Zibersegurtasuna Ikastetxeetan**
> gidaren bidez. CC BY-SA 4.0 lizentziapean erabilgarri.
> ISO 27001:2022 A.5.30 betetzen laguntzen du.
