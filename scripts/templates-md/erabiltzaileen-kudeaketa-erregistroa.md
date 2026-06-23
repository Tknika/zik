# Erabiltzaileen kudeaketa-erregistroa — {{schoolName}}

Data: {{recordDate}}<br>
Dokumentu-erreferentzia: ZIK-EK-{{schoolCode}}

---

## 1. Xedea

Dokumentu honek {{schoolName}} ikastetxeko erabiltzaileen bizitza-ziklo osoaren
erregistro operatiboa eskaintzen du: altak, bajak, aldaketak, salbuespenak eta
sarbideen berrikuspen periodikoak.

ISO 27001ek (A.5.16, A.5.18, A.5.37) eskatzen du sarbideen kudeaketa **idatziz
dokumentatzea** eta erregistroak gordetzea, auditoretzaren aurrean frogatu ahal
izateko. Erregistroa gorde **gutxienez ikasturte bat + 3 urte**.

Bi zati ditu:

1. **Erabiltzaileen erregistroa** — alta, baja eta aldaketak erregistratzeko.
2. **Sarbideen berrikuspen-erregistroa** — hiru hilean behingo berrikuspenak
dokumentatzeko.

---

## Erabiltzaileen erregistroa

### Ikasturte hasierako alta masiboa (iraila)

Ikasturte hasieran erabiltzaile asko sortzen dira aldi berean. Prozedura:

1. Zuzendaritzak/arduradunak erabiltzaile berrien zerrenda helarazten dio IT
   arduradunari, rol bakoitza zehaztuta.
2. IT arduradunak kontuak sortzen ditu eta baimenak esleitzen dizkio rol bakoitzari
   dagokion txantiloiaren arabera.
3. Erabiltzaile berri guztiek konfidentzialtasun-akordioa sinatu behar dute
   sistemetarako sarbidea jaso aurretik.

**Onarpen-erregistroa (ikasturte hasiera):**

| Data | Rola | Kopurua | Eskatzailea (izena + sinadura) | IT arduraduna (izena + sinadura) | Konfidentzialtasun-akordioak sinatuta? | Oharrak |
|---|---|---|---|---|---|---|
| {{batchDate1}} | Irakasleak | {{batchCount}} | | | {{batchNDA}} | |
| {{batchDate2}} | Administrariak | {{batchCount2}} | | | {{batchNDA2}} | |
| {{batchDate3}} | Besteak | {{batchCount3}} | | | {{batchNDA3}} | |

> **Oharra**: kopuru handietarako (adib. 50+ irakasle), ez da beharrezkoa erabiltzaile
> bakoitza banaka erregistratzea. Multzo bakoitzeko onarpen-erregistro bat nahikoa da,
> betiere konfidentzialtasun-akordioak banaka sinatu eta artxibatzen badira.

### Banakako alta (ikasturtean zehar)

Ikasturtean zehar sartzen diren langile berrientzat:

| Data | Erabiltzailea | Rola | Sistemak | Eskatzailea | IT arduraduna | Konfidentzialtasun-akordioa? | Oharrak |
|---|---|---|---|---|---|---|---|
| {{singleDate1}} | {{singleUser1}} | {{singleRole1}} | {{singleSystems1}} | {{singleRequester1}} | | {{singleNDA1}} | |
| {{singleDate2}} | {{singleUser2}} | {{singleRole2}} | {{singleSystems2}} | {{singleRequester2}} | | {{singleNDA2}} | |
| {{singleDate3}} | {{singleUser3}} | {{singleRole3}} | {{singleSystems3}} | {{singleRequester3}} | | {{singleNDA3}} | |

### Baja (ikasturtean zehar edo amaieran)

Langile batek ikastetxea uzten duenean:

| Data | Erabiltzailea | Arrazoia (baja / jubilazioa / lekualdaketa) | Kontu guztiak desaktibatuta? | Ekipoak itzulita? | IT arduraduna | Oharrak |
|---|---|---|---|---|---|---|
| {{offDate1}} | {{offUser1}} | {{offReason1}} | {{offAccounts1}} | {{offEquipment1}} | | |
| {{offDate2}} | {{offUser2}} | {{offReason2}} | {{offAccounts2}} | {{offEquipment2}} | | |
| {{offDate3}} | {{offUser3}} | {{offReason3}} | {{offAccounts3}} | {{offEquipment3}} | | |

> **Ikasturte amaierako baja masiboa**: ekainean/uztailean lan-kontratua amaitzen duten
> langileentzat, erabili ilara bat arrazoi bakoitzeko eta adierazi kopurua Oharrak
> eremuan.

### Rol-aldaketak

Langile baten rola aldatzen denean:

| Data | Erabiltzailea | Aurreko rola | Rol berria | Eskatzailea | IT arduraduna | Oharrak |
|---|---|---|---|---|---|---|
| {{changeDate1}} | {{changeUser1}} | {{oldRole1}} | {{newRole1}} | {{changeRequester1}} | | |
| {{changeDate2}} | {{changeUser2}} | {{oldRole2}} | {{newRole2}} | {{changeRequester2}} | | |

### Salbuespenak (aldi baterako sarbide berezia)

| Data | Erabiltzailea | Sarbide berezia | Iraungitze-data | Onartzailea | IT arduraduna | Berrikusita? (data) |
|---|---|---|---|---|---|---|
| {{excDate1}} | {{excUser1}} | {{excAccess1}} | {{excExpiry1}} | {{excApprover1}} | | {{excReviewed1}} |
| {{excDate2}} | {{excUser2}} | {{excAccess2}} | {{excExpiry2}} | {{excApprover2}} | | {{excReviewed2}} |

---

## Sarbideen berrikuspen-erregistroa

Hiru hilean behin, IT arduradunak eta zibersegurtasun-arduradunak sarbideen
berrikuspena egiten dute. Emaitza hemen jasotzen da.

| Data | Berrikuslea(k) | Egiaztatutakoa | Emaitza | Ekintzak | Hurrengo berrikuspena |
|---|---|---|---|---|---|
| {{reviewDate1}} | {{reviewers1}} | ☐ Kontu aktiboak vs. langile zerrenda<br>☐ Admin kontuak<br>☐ Kanpoko sarbideak<br>☐ Salbuespenak | {{reviewResult1}} | {{reviewActions1}} | {{nextReview1}} |
| {{reviewDate2}} | {{reviewers2}} | ☐ Kontu aktiboak vs. langile zerrenda<br>☐ Admin kontuak<br>☐ Kanpoko sarbideak<br>☐ Salbuespenak | {{reviewResult2}} | {{reviewActions2}} | {{nextReview2}} |
| {{reviewDate3}} | {{reviewers3}} | ☐ Kontu aktiboak vs. langile zerrenda<br>☐ Admin kontuak<br>☐ Kanpoko sarbideak<br>☐ Salbuespenak | {{reviewResult3}} | {{reviewActions3}} | {{nextReview3}} |

---

## Oharrak

- Erregistro hau **digitalki edo paperean** gorde daiteke. Digitala gomendatzen da
  (kalkulu-orri bat nahikoa da hasteko), babeskopia eginda.
- Erregistroa **gutxienez ikasturte bat + 3 urtez** gorde behar da (ISO 27001
  auditoria-eskakizuna).
- Konfidentzialtasun-akordio sinatuak aparte artxibatu, baina hemen erreferentziak
  gorde (data, izena).
- Dokumentu hau autoebaluaziorako tresna bat da; ez du ordezkatzen GLPI, Active
  Directory edo antzeko sistemen erregistro automatikoa, baina haien osagarri
  gisa balio du auditoretza batean erakusteko.

---

> Dokumentu hau automatikoki sortu da **Zik — Zibersegurtasuna Ikastetxeetan**
> gidaren bidez. CC BY-SA 4.0 lizentziapean erabilgarri.
> ISO 27001:2022 A.5.16, A.5.18, A.5.37, 7.5, 9.1 betetzen laguntzen du.
