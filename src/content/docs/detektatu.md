---
title: 4. Detektatu
description: Monitorizazioa, alertak eta detekzio-geruzak. Jakin zerbait gertatzen ari denean.
---

Zure sistemetan **zerbait arraroa gertatzen ari den jakitea** da.
Babestu duzu (pasahitzak, eguneratzeak, babeskopiak). Baina eraso bat
sartzen bada, **zenbat eta lehenago detektatu, orduan eta kalte txikiagoa**.

Atal honek detekzio-geruza guztiak planteatzen ditu, premiazkoenetik
hasita. Ez duzu dena aldi berean jarri behar martxan. Abiapuntua
antibirusa da, baina helburua monitorizazio osoko sistema bat da.

---

## Zergatik da garrantzitsua?

- **Dwell time**: eraso bat detektatzeko batez beste 21 egun pasatzen dira.
  Ransomware kasuetan, egun gutxi batzuetan zifratzen da dena.
- **ISO 27001 A.8.7, A.8.16, A.8.15**: malware babesa, monitorizazioa
  eta erregistroak (logak) eskatzen ditu.
- **ENS 24., 25. art.**: detekzio- eta erantzun-gaitasuna eskatzen du.
- Firewall batek milaka konexio-saiakera blokeatu ditzake egunero;
  ez badituzu begiratzen, ez dakizu erasoren bat arrakasta izaten ari den.

---

## Zer egin?

### 1. Antibirusa (endpoint protection)

Ordenagailu eta zerbitzari guztietan:

- **[Kaspersky Endpoint Security (KES)](https://www.kaspersky.com/endpoint-security)**,
  Hezkuntza Sailak homologatua.
- Windows Defender ere baliozkoa da KES ez badago eskuragarri.
- Zerbitzarietan: KES Linux-erako, edo **[ClamAV](https://www.clamav.net/)**
  doakoa (aukeratu ezazu bat, biak batera ez).
- Eguneratu automatikoki birusen definizioak.
- Egiaztatu hilero panelean alertarik agertu den.

### 2. Firewalla eta sareko trafikoaren monitorizazioa

Sareko trafikoa behatzea ezinbestekoa da anomaliak detektatzeko:

- **Firewall-en log-ak egiaztatu** gutxienez astean behin:
  blokeatutako konexio-saiakerak, ezohiko irteera-trafikoa,
  kanpoko herrialdeetarako konexioak.
- **Gaitu alertak** firewall-ean: portu eskanerra, ezohiko
  trafiko-bolumenak, IP zerrenda beltza.
- Firewall modernoek (FortiGate, pfSense, OPNsense) **IDS/IPS
  integratua** dakarte — aktibatu ezazu.

### 3. Intrusion Detection System (IDS)

Firewall-az gain, barne-trafikoko anomaliak detektatzeko:

- **[Suricata](https://suricata.io/)** doakoa eta komunitate handikoa da.
  Sare-trafiko osoa aztertzen du eta suspicious patroiak detektatzen ditu.
- **[Snort](https://www.snort.org/)** alternatiba klasikoa, Cisco-k babestuta.
- Biak integra daitezke pfSense/OPNsense-ren bidez, software gehigarririk
  gabe.

IDS bat martxan jartzeak IT ezagutza eskatzen du, baina ikastetxe
ertain-handi batean gomendagarria da.

### 4. Erregistroen kudeaketa (log management)

Sistema eta aplikazioek milaka gertaera sortzen dituzte egunero.
Erregistro zentralizatu gabe, ez dakizu zer gertatzen ari den:

- **Zer bildu**: sistema eragileak, zerbitzariak (Odoo, Moodle),
  firewall-a, DNS zerbitzaria, posta-zerbitzaria, switch/router-ak.
- **Nola**: **[Wazuh](https://wazuh.com/)** doakoa da, XDR/SIEM
  arina, eta agente txiki bat instalatzen da makina bakoitzean.
  Arauak konfiguratuta, alertak bidaltzen ditu.
- **Hodeian**: **[Graylog](https://www.graylog.org/)** (doako
  komunitate-edizioa) edo **[Elastic Security](https://www.elastic.co/security)**
  aukera aurreratuagoak dira.
- **Gutxienez**: ziurtatu zerbitzari guztiek log-ak gordetzen
  dituztela leku zentralizatu batean (syslog zerbitzari sinple bat
  nahikoa da hasteko).

### 5. Posta elektronikoaren iragazkiak

Office 365, Google Workspace eta antzeko zerbitzuek berez dakartzate
spam eta phishing iragazkiak. Ziurtatu aktibatuta daudela:

- **Spam iragazkia**: aktibatuta.
- **Phishing detekzioa**: aktibatuta.
- **Fitxategi arriskutsuen blokeoa**: .exe, .scr, .vbs, .js,
  .bat, .ps1 eta antzeko luzapenak blokeatu.

#### Norberak kudeatutako posta-zerbitzaria

Zure ikastetxeak bere posta-zerbitzaria kudeatzen badu
(Zimbra, Carbonio, Stalwart):

- Aktibatu **antispam eta antibirus** zerbitzarian (SpamAssassin,
  Rspamd, ClamAV).
- Gaitu **2FA** webmailerako eta administratzaile-kontuetarako.
- Murriztu **IP bidezko sarbidea** administratzaile-kontsoletara.
- Demagun **sarrera/irteera relay bat** kontratatzea — erasotzaileen
  trafikoa iragazten du eta zure IParen ospea babesten du.
- Ezarri **gehienezko bidalketa-muga** erabiltzaile bakoitzeko
  (adibidez, 100-200 email/h).

### 6. SIEM — aurreratua

SIEM (Security Information and Event Management) sistema batek
iturri guztietako log-ak biltzen ditu eta **korrelazio-arauak**
aplikatzen ditu: hiru saio-huts posta-zerbitzarian + firewall-ean
portu eskaner bat = alerta automatikoa.

Hau maila aurreratukoa da, baina Wazuh-rekin posible da inbertsio
handirik gabe. Ikastetxe handi batean edo hainbat ikastetxeren
IT kudeaketa bateratuan, SIEM bat gomendagarria da.

---

## Egindakoa markatu

- [ ] Antibirusa instalatuta eta eguneratuta ordenagailu eta zerbitzari guztietan
- [ ] Firewall-aren log-ak berrikusteko errutina ezarrita (astean behin)
- [ ] Firewall-eko IDS/IPS aktibatuta
- [ ] Posta elektronikoaren iragazkiak aktibatuta (spam, phishing, fitxategiak)
- [ ] Norberak kudeatutako posta bada, babes-neurri guztiak ezarrita
- [ ] Zerbitzarien log-ak leku zentralizatu batean gordetzen hasita (syslog)
- [ ] Wazuh edo antzeko bat martxan jartzea baloratu (etorkizunean)
- [ ] Langileei phishing-ari buruzko azalpena eman diet

---

## Erreferentziak

| Estandarra | Atala | Deskribapena |
|-----------|-------|-------------|
| NIST CSF 2.0 | DE.CM, DE.AE, DE.DP | Continuous monitoring, event analysis, detection processes |
| ISO 27001:2022 | A.8.7, A.8.15, A.8.16 | Malware babesa, erregistroak, monitorizazioa |
| ENS | 22., 24., 25. art. | Prebentzioa, detekzioa, erantzuna |
