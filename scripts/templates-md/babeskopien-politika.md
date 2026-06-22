# Babeskopien politika — {{schoolName}}

Data: {{backupPolicyDate}}
Dokumentu-erreferentzia: ZIK-BAB-{{schoolCode}}

---

## 1. Xedea

Politika honek ikastetxearen babeskopien prozedura definitzen du,
datuen eskuragarritasuna eta osotasuna bermatzeko. ISO 27001 A.8.13
kontrolarekin bat dator.

---

## 2. Zer babesten da?

Ikastetxeko zerbitzari guztiak birtualizatuta daude ({{virtualizationPlatform}}).
**Makina birtual guztien babeskopia osoa** egiten da honako konponbidearen bidez:

📦 **Babeskopia-sistema**: {{backupSolution}}

Honek barne hartzen ditu:
- Kudeaketa-aplikazioa (adibidez, Odoo: matrikulazioa, notak, kontabilitatea)
- Sareko unitate partekatuak
- Moodle / LMS
- Sare-gailuen konfigurazioa

---

## 3. Babeskopien kokapena (3-2-1)

| Kopia | Euskarria | Kokapena |
|-------|-----------|----------|
| Lehen kopia (ekoizpena) | {{primaryStorage}} | {{primaryLocation}} |
| Bigarren kopia (PBS / NAS) | {{secondaryStorage}} | {{secondaryLocation}} |
| Hirugarren kopia (kanpokoa) | {{offsiteStorage}} | {{offsiteLocation}} |

---

## 4. Maiztasuna eta atxikipena

- **Maiztasuna**: {{backupFrequency}} (gomendatua: egunero, gauez).
- **Atxikipena**: {{retentionDays}} eguneko atxikipena.
  (Adibidez: 30 egun = egunero babeskopia, azken hilekoa gorde.)

---

## 5. Berreskurapen-probak

- **Arduraduna**: {{restoreTestOwner}}
- **Maiztasuna**: {{restoreTestFrequency}} (gomendatua: hilero)

| Data | Emaitza | Akatsa? |
|------|---------|----------|
| | ✅ / ❌ | |
| | ✅ / ❌ | |
| | ✅ / ❌ | |

---

## 6. Arduradunak eta berrikuspena

| Rola | Izena |
|------|-------|
| Babeskopien arduraduna | {{backupOwner}} |
| IT zerbitzua | {{itContactBackup}} |

Politika hau **urtero berrikusiko da** edo aldaketa esanguratsuren
bat gertatuz gero.

Azken berrikuspena: {{backupPolicyDate}}  
Hurrengo berrikuspena: {{nextBackupReviewDate}}

---

> Dokumentu hau automatikoki sortu da **Zik — Zibersegurtasuna Ikastetxeetan**
> gidaren bidez. CC BY-SA 4.0 lizentziapean erabilgarri.
