# Sarbide-kontrolaren politika — {{schoolName}}

Data: {{policyDate}}<br>
Dokumentu-erreferentzia: ZIK-SP-{{schoolCode}}

---

## 1. Xedea

Dokumentu honek {{schoolName}} ikastetxeko informazio-sistemetarako eta datuetarako
sarbidearen kudeaketa-politika ezartzen du. Helburua da pertsona bakoitzak **bere
egitekoetarako behar duen informazioa soilik** atzi dezakeela bermatzea (gutxieneko
pribilegioaren printzipioa), baimendu gabeko sarbideak saihestuz.

**ISO 27001: A.5.15 (Atzipen-kontrola), A.5.18 (Sarbide-eskubideak), A.8.2 (Sarbide pribilegiatua), A.8.3 (Informazioaren sarbide-murrizketa)**

---

## 2. Gutxieneko pribilegioaren printzipioa

Ikastetxe honetan, erabiltzaile bakoitzak **bere lana egiteko behar duen gutxieneko
sarbidea** izango du:

- Irakasle batek ez ditu ikasleen datu ekonomikoak atzituko.
- Administrari batek ez ditu zerbitzarien konfiguraziorako sarbidea izango.
- Praktiketako ikasle batek ez ditu langileen datu konfidentzialak atzituko.

Sarbide-eskubideak rolaren arabera definitzen dira, ez pertsonaren arabera.

---

## 3. Rolak eta sarbide-mailak

| Rola | Sarbide-maila | Adibideak |
|------|:---:|-----------|
| **Zuzendaritza** | Altua | Politika guztiak, txosten guztiak, auditoria-erregistroak |
| **Zibersegurtasun-arduraduna** | Altua | Segurtasun-konfigurazioak, log-ak, intzidentzia-erregistroak |
| **IT arduraduna** | Administratzailea | Zerbitzariak, sarea, babeskopiak, erabiltzaileen kudeaketa |
| **Kudeaketa-langileak (administrariak, kontabilitatea)** | Ertaina | Odoo, nominak, kontabilitatea, ikasleen matrikula-datuak |
| **Irakasleak** | Oinarrizkoa | Moodle, fitxategi-partekatzeak, ikasleen notak |
| **Ikasleak** | Mugatua | Moodle (bere ikastaroak), Internet, inprimagailuak |
| **Bisitariak / Kanpokoak** | Oso mugatua | Internet (VLAN bisitaria), ez dute barne-sistemetarako sarbiderik |

---

## 4. Sarbideen kudeaketa-prozedura

### 4.1 Alta — langile berria hasten denean

1. Zuzendaritzak/arduradunak idatziz eskatzen du kontu berriaren sorrera
   (posta elektronikoa + beharrezko sistemetarako sarbidea).
2. IT arduradunak kontua sortu eta dagokion rolari ezarritako baimenak esleitzen dizkio.
3. Langile berriak konfidentzialtasun-akordioa sinatu behar du sistemetarako
   sarbidea jaso aurretik.
4. Lehen saioan, langileak pasahitza aldatu eta MFA konfiguratu behar du.

**ISO 27001: A.5.16 (Identitate-kudeaketa), A.5.17 (Autentikazio-informazioa), A.6.1 (Langileen hautaketa)**

### 4.2 Aldaketa — langile baten rola aldatzen denean

1. Prozesu bera, baina baimen berriak idatziz zehaztuz eta zaharkitutakoak
   desaktibatuz.
2. IT arduradunak segurtasun-taldeak (karpetak, partekatzeak) berrikusiko ditu
   rolak jada behar ez dituen sarbideak kentzeko.

### 4.3 Baja — langile batek ikastetxea uzten duenean

1. Zuzendaritzak/arduradunak berehala jakinarazten dio IT arduradunari.
2. IT arduradunak **24 orduko epean**:
   - Kontua desaktibatzen du (posta, Moodle, Odoo, fitxategiak, VPN).
   - Ekipoak jasotzen ditu eta inbentariora itzuli direla ziurtatzen du.
   - Baimendutako daturik ez duela atera egiaztatzen du (konfidentzialtasun-akordioan
     ezarritakoaren arabera).
3. Langileak sinatutako konfidentzialtasun-akordioa artxibatzen da.

**ISO 27001: A.5.11 (Aktiboen itzulketa), A.6.5 (Lan-harremana amaitu ondorengo betebeharrak)**

---

## 5. Berrikuspen periodikoa

Hiru hilean behin, IT arduradunak eta zibersegurtasun-arduradunak:

- Erabiltzaileen zerrenda berrikusiko dute, baja-egoeran dauden konturik ez
  dagoela ziurtatzeko.
- Administratzaile-pribilegioak dituzten kontuak aztertuko dituzte, alferrikako
  pribilegiorik ez dagoela bermatzeko.
- Kanpoko hornitzaile eta kolaboratzaileen sarbideak berrikusiko dituzte,
  beharrezkoak diren ala ez erabakitzeko.

Berrikuspenaren emaitza idatziz jasoko da eta hurrengo zuzendaritza-bileran
aurkeztuko da.

**ISO 27001: A.5.18 (Sarbide-eskubideen berrikuspena), 9.1 (Monitorizazioa)**

---

## 6. Pasahitzen eta autentikazioaren eskakizunak

- Erabiltzaile arruntak: gutxienez **12 karaktere** (ikus Segurtasun-politika).
- Administratzaile-kontuak: gutxienez **16 karaktere**.
- **MFA (Multi-Factor Authentication)** nahitaezkoa da:
  - Administratzaile-kontu guztientzat.
  - Urruneko sarbidea (VPN) erabiltzen duten kontu guztientzat.
  - Gomendagarria beste kontu guztientzat.
- Pasahitzak **90 egunetik behin** aldatuko dira administratzaile-kontuetan
  eta **urtero** arruntetan.
- Lehenetsitako pasahitzak **lehen saioan** aldatu behar dira.

---

## 7. Salbuespenak

Salbuespenak (aldi baterako sarbide zabalagoa, kanpoko kolaboratzaileen sarbidea…)
idatziz eskatu eta zibersegurtasun-arduradunak onartu behar ditu. Salbuespen guztiak
iraungitze-data batekin emango dira eta automatikoki berrikusiko dira epea amaitzean.

---

## 8. Sinadurak

**Zuzendaritza**

Izen-abizenak: ________________________________________________________

Sinadura: ________________________ &emsp; Data: _______________

**Zibersegurtasun-arduraduna**

Izen-abizenak: ________________________________________________________

Sinadura: ________________________ &emsp; Data: _______________

> Dokumentu hau automatikoki sortu da **Zik — Zibersegurtasuna Ikastetxeetan**
> gidaren bidez. CC BY-SA 4.0 lizentziapean erabilgarri.
> ISO 27001:2022 A.5.15, A.5.16, A.5.17, A.5.18, A.6.1, A.6.2, A.6.5,
> A.8.2, A.8.3 betetzen laguntzen du.
