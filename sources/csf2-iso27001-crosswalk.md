# CSF 2.0 ↔ ISO/IEC 27001:2022 gurutzatze-taula (crosswalk)

> Crosswalk ofizialik ez dagoen arren, taula honek NIST CSF 2.0ren
> funtzio, kategoria eta azpikategoriak eta ISO/IEC 27001:2022-ren
> ISMS klausula eta Annex A kontrol nagusien arteko loturak erakusten
> ditu. Proposamen orientagarria da, ez arau-emaileduna.

---

## Nola erabili

- **CSF azpikategoria bakoitzak** ISO 27001 kontrol eta klausula nagusienak
  seinalatzen ditu. Ez du esan nahi ISO kontrol hori _nahikoa_ denik CSF
  emaitza lortzeko, baina bai _ekarpen zuzena_ egiten duela.
- Klausulak (`4.1`, `5.1`, `7.2`, etab.) ISMS-aren **kudeaketa-sistemaren
  eskakizunak** dira, ziurtapenerako derrigorrezkoak.
- Annex A kontrolak ziurtapenerako **aukerakoak** dira (SoA bidez justifikatu
  behar dira), baina gida honek esanguratsuenak identifikatzen ditu hezkuntza-
  testuinguruan.
- **Zik atala** zutabeak Zik-en sei atalekiko lotura adierazten du.

---

## GOVERN (GV) — Gobernantza

| CSF azpikategoria | ISO 27001 klausulak | ISO 27001 Annex A kontrolak | Zik atala |
|---|---|---|---|
| **GV.OC-01** Misioa ulertu eta zibersegurtasuna horren arabera kudeatu | 4.1, 4.2, 5.1 | A.5.1 (Politikak) | Gobernantza |
| **GV.OC-02** Interes-taldeak identifikatu eta haien beharrak kontuan hartu | 4.2 | A.5.5 (Agintaritzekiko harremana) | Gobernantza |
| **GV.OC-03** Lege-, arau- eta kontratu-betekizunak kudeatu | 4.2, 6.1.3 | A.5.31 (Lege-betekizunak), A.5.34 (PII babesa), A.5.32 (IP eskubideak) | Gobernantza |
| **GV.OC-04** Kanpoko interes-taldeei emandako zerbitzu kritikoak komunikatu | 4.2 | A.5.5 | Gobernantza |
| **GV.OC-05** Menpekotasunak (kanpoko zerbitzuak) ulertu eta komunikatu | 4.1, 4.2 | A.5.19 (Hornitzaileekiko segurtasuna) | Gobernantza |
| **GV.RM-01** Arriskuen kudeaketarako helburuak adostu | 6.2 | A.5.1 | Gobernantza |
| **GV.RM-02** Arrisku-gosea eta tolerantzia definitu eta komunikatu | 6.1.2, 8.2 | — | Gobernantza |
| **GV.RM-03** Zibersegurtasun arriskuak ERM-an integratu | 6.1 | A.5.1 | Gobernantza |
| **GV.RM-04** Arrisku-erantzun estrategia ezarri | 6.1.2, 8.3 | — | Gobernantza |
| **GV.RM-05** Arrisku-komunikazio bideak ezarri | 7.4 | A.5.2 (Rolak eta erantzukizunak) | Gobernantza |
| **GV.RM-06** Arriskuak kalkulatu, dokumentatu, sailkatu eta lehenesteko metodo estandarizatua | 6.1.2, 8.2, 8.3 | A.5.8 (Proiektu-kudeaketa) | Gobernantza |
| **GV.RR-01** Lidergoaren erantzukizuna eta kultura | 5.1, 5.2 | A.5.1, A.5.4 | Gobernantza |
| **GV.RR-02** Rolak, erantzukizunak eta aginteak ezarri | 5.3 | A.5.2, A.5.3 (Eginkizun-banaketa) | Gobernantza |
| **GV.RR-03** Baliabide egokiak esleitu | 7.1 | — | Gobernantza |
| **GV.RR-04** Zibersegurtasuna Giza Baliabideen praktiketan integratu | 7.2 | A.6.1 (Aurrekari-azterketa), A.6.2 (Enplegu-baldintzak), A.6.3 (Prestakuntza) | Gobernantza |
| **GV.PO-01** Zibersegurtasun politika ezarri, komunikatu eta betearazi | 5.2 | A.5.1, A.5.10 (Erabilera onargarria), A.5.36 (Betetzea) | Gobernantza |
| **GV.PO-02** Politika berrikusi, eguneratu eta komunikatu | 5.2, 10.1 | A.5.1, A.5.36 | Gobernantza |
| **GV.OV-01** Emaitzen berrikuspena: estrategia doitzeko | 9.1, 9.3 | A.5.35 (Berrikuspen independentea) | Gobernantza |
| **GV.OV-02** Estrategiaren estaldura berrikusi | 9.3 | A.5.35 | Gobernantza |
| **GV.OV-03** Errendimendua ebaluatu eta doitu | 9.1, 9.3, 10.1 | A.5.35, A.5.36 | Gobernantza |
| **GV.SC-01** Hornikuntza-kateko arrisku-programa ezarri | 4.1, 4.2 | A.5.19, A.5.21 (ICT hornikuntza-katea) | Gobernantza |
| **GV.SC-02** Hornitzaile, bezero eta bazkideen rolak definitu | 5.3 | A.5.19 | Gobernantza |
| **GV.SC-03** C-SCRM arrisku-prozesuetan integratu | 6.1, 8.2, 8.3 | A.5.21 | Gobernantza |
| **GV.SC-04** Hornitzaileak ezagutu eta kritikotasunaren arabera lehenetsi | 8.2 | A.5.9 (Aktiboen inbentarioa), A.5.19 | Gobernantza |
| **GV.SC-05** Segurtasun-baldintzak kontratuetan integratu | 8.1 | A.5.20 (Hornitzaile-akordioak) | Gobernantza |
| **GV.SC-06** Aurretiazko diligentzia (due diligence) | 8.1 | A.5.19, A.5.20 | Gobernantza |
| **GV.SC-07** Hornitzaileen arriskuen jarraipena harremanean zehar | 9.1 | A.5.22 (Jarraipena eta aldaketa-kudeaketa) | Gobernantza |
| **GV.SC-08** Hornitzaileak intzidentzien plangintzan integratu | 8.1 | A.5.24 (Intzidentzia-plangintza) | Gobernantza |
| **GV.SC-09** Segurtasun-praktiken jarraipena bizi-ziklo osoan | 9.1 | A.5.22 | Gobernantza |
| **GV.SC-10** Hornikuntza-harremana amaitzearen ondorengo xedapenak | 8.1 | A.5.11 (Aktiboen itzulketa), A.6.5 (Enplegua amaitzea) | Gobernantza |

---

## IDENTIFY (ID) — Identifikatu

| CSF azpikategoria | ISO 27001 klausulak | ISO 27001 Annex A kontrolak | Zik atala |
|---|---|---|---|
| **ID.AM-01** Hardware inbentarioa mantendu | 8.1 | A.5.9 (Aktiboen inbentarioa) | Identifikatu |
| **ID.AM-02** Software, zerbitzu eta sistemen inbentarioa | 8.1 | A.5.9, A.5.23 (Cloud zerbitzuak) | Identifikatu |
| **ID.AM-03** Sareko komunikazio eta datu-fluxuen dokumentazioa | 8.1 | A.5.9, A.5.14 (Informazio-transferentzia) | Identifikatu |
| **ID.AM-04** Hornitzaileen zerbitzuen inbentarioa | 8.1 | A.5.9, A.5.19 | Identifikatu |
| **ID.AM-05** Aktiboak sailkapen eta kritikotasunaren arabera lehenetsi | 8.2 | A.5.9, A.5.12 (Sailkapena), A.5.13 (Etiketatzea) | Identifikatu |
| **ID.AM-07** Datu eta metadatuen inbentarioa | 8.1 | A.5.9, A.5.12, A.5.13 | Identifikatu |
| **ID.AM-08** Aktiboen bizi-zikloko kudeaketa | 8.1 | A.5.9, A.7.14 (Ezabapen segurua), A.5.11 | Identifikatu |
| **ID.RA-01** Ahultasunak identifikatu, balidatu eta erregistratu | 8.2 | A.8.8 (Ahultasun teknikoen kudeaketa), A.5.7 (Mehatxu-inteligentzia) | Identifikatu |
| **ID.RA-02** Cyber threat intelligence iturrietatik jaso | 6.1.1, 8.2 | A.5.7, A.5.6 (Interes-talde espezializatuak) | Identifikatu |
| **ID.RA-03** Barneko eta kanpoko mehatxuak identifikatu | 8.2 | A.5.7 | Identifikatu |
| **ID.RA-04** Mehatxu eta ahultasunen inpaktua eta probabilitatea ebaluatu | 8.2 | — | Identifikatu |
| **ID.RA-05** Mehatxu, ahultasun, probabilitate eta inpaktuak arrisku-erantzuna lehenesteko | 8.2, 8.3 | — | Identifikatu |
| **ID.RA-06** Arrisku-erantzunak aukeratu, lehenetsi, planifikatu eta jarraitu | 6.1, 8.3 | A.5.36 | Identifikatu |
| **ID.RA-07** Aldaketak eta salbuespenak kudeatu, arrisku-inpaktua ebaluatuz | 8.1, 10.2 | A.8.32 (Aldaketen kudeaketa) | Identifikatu |
| **ID.RA-08** Ahultasunen dibulgazioa jaso, aztertu eta erantzuteko prozesuak | 8.2 | A.5.7, A.8.8 | Identifikatu |
| **ID.RA-09** Hardware eta softwarearen egiazkotasuna eta osotasuna egiaztatu eskuratu aurretik | 8.1 | A.5.19, A.5.21 | Identifikatu |
| **ID.RA-10** Hornitzaile kritikoak eskuratu aurretik ebaluatu | 8.1, 8.2 | A.5.19, A.5.20 | Identifikatu |
| **ID.IM-01** Ebaluazioetatik hobekuntzak identifikatu | 9.1, 10.1 | A.5.35 | Identifikatu |
| **ID.IM-02** Segurtasun-test eta ariketetatik hobekuntzak identifikatu | 9.1, 10.1 | A.5.29 (Etenaldietan), A.5.30 (BC prestasuna) | Identifikatu |
| **ID.IM-03** Eragiketa-prozesuetatik hobekuntzak identifikatu | 9.1, 10.1 | A.5.35, A.5.37 (Prozedura dokumentatuak) | Identifikatu |
| **ID.IM-04** Intzidentzia-planak ezarri, komunikatu, mantendu eta hobetu | 8.1, 10.1 | A.5.24, A.5.27 (Ikaskuntza), A.5.29, A.5.30 | Identifikatu |

---

## PROTECT (PR) — Babestu

| CSF azpikategoria | ISO 27001 klausulak | ISO 27001 Annex A kontrolak | Zik atala |
|---|---|---|---|
| **PR.AA-01** Identitateak eta kredentzialak kudeatu | 8.1 | A.5.15 (Sarbide-kontrola), A.5.16 (Identitate-kudeaketa) | Babestu |
| **PR.AA-02** Identitateak egiaztatu eta kredentzialetara lotu testuinguruaren arabera | 8.1 | A.5.16, A.5.17 (Autentikazio-informazioa) | Babestu |
| **PR.AA-03** Erabiltzaileak, zerbitzuak eta hardwarea autentikatu | 8.1 | A.5.17, A.8.5 (Autentikazio segurua) | Babestu |
| **PR.AA-04** Identitate-egiaztapenak babestu, transmititu eta egiaztatu | 8.1 | A.5.17, A.8.5 | Babestu |
| **PR.AA-05** Sarbide-baimenak definitu, kudeatu, betearazi eta berrikusi (least privilege + separation of duties) | 8.1 | A.5.15, A.5.18 (Sarbide-eskubideak), A.5.3 (Eginkizun-banaketa), A.8.2 (Pribilegioak), A.8.3 (Sarbide-murrizketa) | Babestu |
| **PR.AA-06** Aktiboetarako sarbide fisikoa kudeatu, monitorizatu eta betearazi | 8.1 | A.7.1 (Perimetroak), A.7.2 (Sarbide fisikoa), A.7.3 (Bulegoen segurtasuna), A.7.4 (Zaintza fisikoa) | Babestu |
| **PR.AT-01** Pertsonal orokorraren kontzientziazioa eta prestakuntza | 7.2, 7.3 | A.6.3 | Babestu |
| **PR.AT-02** Rol espezializatuen prestakuntza | 7.2 | A.6.3 | Babestu |
| **PR.DS-01** Datuen konfidentzialtasuna, osotasuna eta erabilgarritasuna (at-rest) babestu | 8.1 | A.5.10, A.8.10 (Ezabatzea), A.8.11 (Data masking), A.8.12 (DLP), A.8.24 (Kriptografia) | Babestu |
| **PR.DS-02** Datuen konfidentzialtasuna, osotasuna eta erabilgarritasuna (in-transit) babestu | 8.1 | A.5.14, A.8.20 (Sare-segurtasuna), A.8.24 | Babestu |
| **PR.DS-10** Datuen konfidentzialtasuna, osotasuna eta erabilgarritasuna (in-use) babestu | 8.1 | A.5.10, A.8.11, A.8.12 | Babestu |
| **PR.DS-11** Datuen babeskopiak sortu, babestu, mantendu eta probatu | 8.1 | A.8.13 (Informazioaren babeskopia), A.5.29, A.5.30 | Babestu |
| **PR.PS-01** Konfigurazio-kudeaketa ezarri | 8.1 | A.8.9 (Konfigurazio-kudeaketa), A.8.32 | Babestu |
| **PR.PS-02** Softwarea mantendu, ordeztu eta kendu arriskuaren arabera | 8.1 | A.8.8, A.8.19 (Software instalazioa), A.8.32 | Babestu |
| **PR.PS-03** Hardwarea mantendu, ordeztu eta kendu arriskuaren arabera | 8.1 | A.7.13 (Ekipamenduen mantentzea), A.7.14 | Babestu |
| **PR.PS-04** Log-ak sortu eta monitorizazio jarraiturako eskuragarri jarri | 8.1 | A.8.15 (Logging), A.8.17 (Erloju-sinkronizazioa) | Babestu |
| **PR.PS-05** Baimendu gabeko softwarearen instalazioa eta exekuzioa eragotzi | 8.1 | A.8.7 (Malware-aren aurkako babesa), A.8.19 | Babestu |
| **PR.PS-06** Software-garapen seguruko praktikak integratu eta monitorizatu | 8.1 | A.8.25 (SDLC segurua), A.8.26 (App segurtasun-baldintzak), A.8.27 (Arkitektura segurua), A.8.28 (Secure coding), A.8.29 (Test seguruak) | Babestu |
| **PR.IR-01** Sareak eta inguruneak baimendu gabeko sarbide logikotik babestu | 8.1 | A.8.20 (Sare-segurtasuna), A.8.21 (Sare-zerbitzuen segurtasuna), A.8.22 (Sare-bereizketa) | Babestu |
| **PR.IR-02** Teknologia-aktiboak ingurumen-mehatxuetatik babestu | 8.1 | A.7.5 (Mehatxu fisiko eta ingurumenekoen aurkako babesa), A.7.8 (Ekipamenduen kokapena), A.7.11 (Hornidurak) | Babestu |
| **PR.IR-03** Erresilientzia-mekanismoak ezarri egoera normal eta kaltegarrietan | 8.1 | A.5.29, A.5.30, A.8.14 (Erredundantzia), A.8.6 (Edukiera-kudeaketa) | Babestu |
| **PR.IR-04** Baliabide-ahalmen egokia mantendu erabilgarritasuna bermatzeko | 7.1, 8.1 | A.8.6 | Babestu |

---

## DETECT (DE) — Detektatu

| CSF azpikategoria | ISO 27001 klausulak | ISO 27001 Annex A kontrolak | Zik atala |
|---|---|---|---|
| **DE.CM-01** Sareak eta sare-zerbitzuak monitorizatu gertaera kaltegarriak detektatzeko | 9.1 | A.8.16 (Jardueren monitorizazioa), A.8.15 | Detektatu |
| **DE.CM-02** Ingurune fisikoa monitorizatu | 9.1 | A.7.4 | Detektatu |
| **DE.CM-03** Langileen jarduera eta teknologia-erabilera monitorizatu | 9.1 | A.8.16, A.8.15 | Detektatu |
| **DE.CM-06** Kanpoko zerbitzu-hornitzaileen jarduera monitorizatu | 9.1 | A.5.22 | Detektatu |
| **DE.CM-09** Hardware, software, exekuzio-inguruneak eta datuak monitorizatu | 9.1 | A.8.16, A.8.15 | Detektatu |
| **DE.AE-02** Gertaera kaltegarriak aztertu jarduerak ulertzeko | 9.1 | A.5.25 (Gertaeren ebaluazioa), A.5.26 (Intzidentziei erantzuna) | Detektatu |
| **DE.AE-03** Informazioa hainbat iturritatik korrelazionatu | 9.1 | A.5.7, A.5.25 | Detektatu |
| **DE.AE-04** Gertaera kaltegarrien inpaktua eta irismena ulertu | 9.1 | A.5.25 | Detektatu |
| **DE.AE-06** Gertaerei buruzko informazioa baimendutako langile eta tresnei helarazi | 7.4, 9.1 | A.6.8 (Intzidentzia-txostena), A.5.25 | Detektatu |
| **DE.AE-07** Cyber threat intelligence eta testuinguru-informazioa analisian integratu | 9.1 | A.5.7 | Detektatu |
| **DE.AE-08** Intzidentziak deklaratu gertaerek irizpideak betetzen dituztenean | 9.1 | A.5.24, A.5.25, A.5.26 | Detektatu |

---

## RESPOND (RS) — Erantzun

| CSF azpikategoria | ISO 27001 klausulak | ISO 27001 Annex A kontrolak | Zik atala |
|---|---|---|---|
| **RS.MA-01** Intzidentzia-erantzun plana exekutatu, hirugarrenekin koordinatuta | 8.1 | A.5.24, A.5.26 | Erantzun |
| **RS.MA-02** Intzidentzia-txostenak triage eta balidatu | 8.1 | A.5.25, A.6.8 | Erantzun |
| **RS.MA-03** Intzidentziak sailkatu eta lehenetsi | 8.1 | A.5.25 | Erantzun |
| **RS.MA-04** Intzidentziak eskalatu behar denean | 8.1 | A.5.26 | Erantzun |
| **RS.MA-05** Intzidentzietatik berreskuratzea hasteko irizpideak aplikatu | 8.1 | A.5.25, A.5.29 | Erantzun |
| **RS.AN-03** Gertatutakoa eta zergatia aztertu (root cause) | 10.2 | A.5.27, A.5.28 (Ebidentzia-bilketa) | Erantzun |
| **RS.AN-06** Ikerketako ekintzak erregistratu, osotasuna eta jatorria babestuz | 7.5 | A.5.28, A.5.33 (Erregistroen babesa) | Erantzun |
| **RS.AN-07** Intzidentzia-datuak eta metadatuak bildu, osotasuna eta jatorria babestuz | 7.5 | A.5.28 | Erantzun |
| **RS.AN-08** Intzidentziaren magnitudea estimatu eta balidatu | 9.1 | A.5.25 | Erantzun |
| **RS.CO-02** Barneko eta kanpoko interes-taldeei intzidentzien berri eman | 7.4 | A.6.8, A.5.5, A.5.26 | Erantzun |
| **RS.CO-03** Informazioa izendatutako interes-taldeekin partekatu | 7.4 | A.5.5, A.5.6, A.5.26 | Erantzun |
| **RS.MI-01** Intzidentziak eduki (contain) | 8.1 | A.5.26 | Erantzun |
| **RS.MI-02** Intzidentziak erauzi (eradicate) | 8.1 | A.5.26 | Erantzun |

---

## RECOVER (RC) — Berreskuratu

| CSF azpikategoria | ISO 27001 klausulak | ISO 27001 Annex A kontrolak | Zik atala |
|---|---|---|---|
| **RC.RP-01** Berreskuratze-plana exekutatu intzidentzia-erantzun prozesutik abiatuta | 8.1 | A.5.29, A.5.30 | Berreskuratu |
| **RC.RP-02** Berreskuratze-ekintzak hautatu, esparrua definitu, lehenetsi eta exekutatu | 8.1 | A.5.29, A.5.30 | Berreskuratu |
| **RC.RP-03** Babeskopien eta berreskuratze-aktiboen osotasuna egiaztatu leheneratu aurretik | 8.1 | A.8.13, A.5.29 | Berreskuratu |
| **RC.RP-04** Funtzio kritikoak eta arriskuen kudeaketa kontuan hartu intzidentzia-osteko operazio-arauak ezartzeko | 8.1 | A.5.29, A.5.30 | Berreskuratu |
| **RC.RP-05** Leheneratutako aktiboen osotasuna egiaztatu, sistemak eta zerbitzuak berreskuratu, eta funtzionamendu normala berretsi | 8.1 | A.5.29, A.5.30 | Berreskuratu |
| **RC.RP-06** Berreskuratzearen amaiera deklaratu irizpideetan oinarrituta, eta intzidentzia-dokumentazioa osatu | 8.1 | A.5.29, A.5.33 | Berreskuratu |
| **RC.CO-03** Berreskuratze-jarduerak eta aurrerapena interes-taldeei komunikatu | 7.4 | A.6.8, A.5.5 | Berreskuratu |
| **RC.CO-04** Berreskuratzeari buruzko eguneratze publikoak partekatu onartutako bide eta mezuen bidez | 7.4 | A.5.5 | Berreskuratu |

---

## ISO 27001 ISMS klausulen laburpena (beti aplikagarriak)

CSF azpikategoriak nagusiki Annex A kontroletara mapatzen badira ere, ISO 27001-ek
**4–10 klausulen bidez kudeaketa-sistema oso bat eskatzen du**. Hauek Zik-en edozein
atali aplika dakizkioke eta ziurtapenerako derrigorrezkoak dira:

| Klausula | Edukia | Nola bete Zik-ekin |
|---|---|---|
| **4. Testuingurua** | Erakundea eta interes-taldeak ulertu, ISMSaren irismena definitu | Gobernantza atalean lantzen da |
| **5. Lidergoa** | Zuzendaritzaren konpromisoa, politika, rolak | Gobernantza atalean lantzen da |
| **6. Plangintza** | Arrisku eta aukerei aurre egiteko ekintzak, helburuak | Identifikatu + Gobernantza |
| **7. Laguntza** | Baliabideak, gaitasuna, kontzientziazioa, komunikazioa, dokumentazioa | Babestu (prestakuntza) + Gobernantza (dokumentazioa) |
| **8. Eragiketa** | Plangintza eta kontrol operatiboa, arrisku-ebaluazioa, arrisku-tratamendua | Identifikatu + Babestu |
| **9. Errendimenduaren ebaluazioa** | Monitorizazioa, neurketa, barne-auditoretza, zuzendaritzaren berrikuspena | Gobernantza + Detektatu |
| **10. Hobekuntza** | Etengabeko hobekuntza, ez-adostasunak eta zuzenketa-ekintzak | Gobernantza + Erantzun (ikaskuntza) |

---

## Oharrak

1. **Ez dago 1:1 maparik**. ISO 27001 kontrol bat CSF azpikategoria batean baino
   gehiagotan ager daiteke (adib. A.5.9 Aktiboen inbentarioa ID.AM guztietan
   erabiltzen da). Taulak _nagusienak_ soilik erakusten ditu.
2. **ISO 27001 klausulak beti aplikatzen dira**. Annex A kontrolez gain, ziurtapenak
   ISMSaren klausula guztiak betetzea eskatzen du.
3. **SoA (Statement of Applicability)**. ISO 27001 ziurtapenerako, Annex A-ko 93
   kontroletatik aplikagarriak zein diren eta zergatik justifikatu behar da.
4. **Hezkuntza-testuingurua**. Taula hau LH ikastetxeentzako egokitua dago.
   ISO 27001 kontrol batzuk (adib. A.8.28 Secure coding, A.8.25 SDLC segurua)
   ikastetxe gehienentzat ez dira aplikagarriak izango, softwarea garatzen ez
   badute.
5. **NIST CSF 2.0 informazio gehiago**: [NIST CSF 2.0 Reference Tool](https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/CSF_2_0_0)
6. **ISO/IEC 27001:2022 informazio gehiago**: [ISO.org](https://www.iso.org/standard/82875.html)
