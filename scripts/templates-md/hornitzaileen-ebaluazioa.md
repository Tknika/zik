# Hornitzaileen segurtasun-ebaluazioa — {{schoolName}}

Data: {{evaluationDate}}<br>
Dokumentu-erreferentzia: ZIK-HE-{{schoolCode}}

---

## 1. Xedea

Dokumentu honek {{schoolName}} ikastetxearen datuetara sarbidea duten hornitzaile
eta hirugarrenen segurtasun-ebaluaziorako txantiloia eskaintzen du.

RGPDk (28. art.) eta ISO 27001ek (A.5.19–A.5.22) eskatzen dute datu pertsonalak
tratatzen dituzten hornitzaileen segurtasuna **idatziz ebaluatu eta dokumentatzea**.

---

## 2. Hornitzaileen zerrenda

Bete taula zure hornitzaileekin. Gehitu ilarak (adib.) botoiarekin.

| Hornitzailea | Zerbitzua | Datuetarako sarbidea? | Datu mota | Konfidentzialtasun-akordioa? | DPA sinatuta? | ISO 27001 / ENS? |
|---|---|---|---|---|---|---|
| {{supplier1Name}} | {{supplier1Service}} | {{supplier1Access}} | {{supplier1DataType}} | {{supplier1NDA}} | {{supplier1DPA}} | {{supplier1Cert}} |
| {{supplier2Name}} | {{supplier2Service}} | {{supplier2Access}} | {{supplier2DataType}} | {{supplier2NDA}} | {{supplier2DPA}} | {{supplier2Cert}} |
| {{supplier3Name}} | {{supplier3Service}} | {{supplier3Access}} | {{supplier3DataType}} | {{supplier3NDA}} | {{supplier3DPA}} | {{supplier3Cert}} |

**Legenda**: Erabili ✓ (bai), ✗ (ez), ~ (partzialki/ez dakigu) bakoitzean.

---

## 3. Hornitzaile bakoitzaren ebaluazioa

Hornitzaile bakoitzarentzat, erantzun galdera hauek:

### {{supplierName}}

**Datuetarako sarbidea**: {{dataAccessDescription}}

**Segurtasun-neurriak**:
- Zer segurtasun-neurri ditu ezarrita? {{securityMeasures}}
- Non gordetzen dira datuak (EB barruan/kanpoan)? {{dataLocation}}
- Nork du sarbidea datuetara haien aldetik? {{theirAccessControl}}
- Zer gertatzen da kontratua amaitzean (datuen itzulketa/ezabaketa)? {{contractEnd}}

**Ziurtagiriak eta auditoriak**:
- ISO 27001: {{isoCert}}
- ENS: {{ensCert}}
- SOC 2: {{soc2Cert}}
- Bestelakoak: {{otherCerts}}

**Intzidentzien kudeaketa**:
- Intzidentzia bat gertatuz gero, zenbat denboran jakinaraziko digute? {{incidentNotifTime}}
- Norekin harremanetan jarri? {{supplierContactPerson}} — {{supplierContactEmail}} / {{supplierContactPhone}}

**Balorazio orokorra**: {{overallRating}} (Altua / Ertaina / Baxua)

---

## 4. Ekintza-plana

| Hornitzailea | Ekintza | Arduraduna | Epea |
|---|---|---|---|
| {{actionSupplier1}} | {{action1}} | {{actionOwner1}} | {{actionDeadline1}} |
| {{actionSupplier2}} | {{action2}} | {{actionOwner2}} | {{actionDeadline2}} |

---

## 5. Berrikuspen-periodikotasuna

Hornitzaileen ebaluazio hau **urtero berrikusiko da**, edo hornitzaile-aldaketa
esanguratsuren bat gertatuz gero (zerbitzu berria, datu berrietarako sarbidea…).

Hurrengo berrikuspena: {{nextReviewDate}}

---

## 6. Sinadurak

**Zibersegurtasun-arduraduna**

Izen-abizenak: ________________________________________________________

Sinadura: ________________________ &emsp; Data: _______________

---

> Dokumentu hau automatikoki sortu da **Zik — Zibersegurtasuna Ikastetxeetan**
> gidaren bidez. CC BY-SA 4.0 lizentziapean erabilgarri.
> ISO 27001:2022 A.5.19, A.5.20, A.5.21, A.5.22 betetzen laguntzen du.
