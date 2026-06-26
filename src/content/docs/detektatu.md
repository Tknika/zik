---
title: 4. Detektatu
description: Monitorizazioa, alertak eta detekzio-geruzak. Jakin zerbait gertatzen ari denean.
iso27001:
  - id: '9.1'
    description: Monitorizazioa, neurketa, analisia eta ebaluazioa
  - id: 'A.8.7'
    description: Malware-aren aurkako babesa
  - id: 'A.8.15'
    description: Jardueren erregistroa (logging)
  - id: 'A.8.16'
    description: Jardueren monitorizazioa
compliance:
  clauses_pct: 8
  annexA_pct: 10
---

Zure sistemetan **zerbait arraroa gertatzen ari den detektatzea** da helburua. Sistemak babestuta daude (pasahitzak, eguneraketak, babeskopiak), baina eraso bat gertatuz gero, **zenbat eta lehenago antzeman**, orduan eta txikiagoa izango da eragindako kaltea.

Atal honetan detekzio-geruzak modu mailakatuan planteatzen dira, premiazkoenetik hasita. Ez da beharrezkoa dena aldi berean ezartzea; abiapuntua antibirusa da, baina helburua monitorizazio sistema integratu eta oso bat izatea da.

---

## Zergatik da garrantzitsua?

- **Dwell time**: eraso bat detektatzeko batez beste 21 egun pasatzen dira.
  Ransomware kasuetan, egun gutxi batzuetan zifratzen da dena.
- **ENS 24., 25. art.**: detekzio- eta erantzun-gaitasuna eskatzen du.
- **Firewallaren monitorizazioa**: firewall batek egunero milaka konexio-saiakera blokeatu ditzake; hala ere, erregistro horiek aztertzen ez badira, ezin da jakin erasoren bat arrakastaz gauzatzen ari den.

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

- **Firewall-en log-ak egiaztatu** gutxienez astean behin: blokeatutako konexio-saiakerak, ezohiko irteera-trafikoa, kanpoko herrialdeetarako konexioak.
- **Gaitu alertak** firewall-ean: portu eskanerra, ezohiko trafiko-bolumenak, IP zerrenda beltza.
- Firewall modernoek (FortiGate, pfSense, OPNsense) **IDS/IPS integratua** dakarte, aktibatu ezazu.

### 3. Intrusion Detection System (IDS)

Firewall-az gain, barne-trafikoko anomaliak detektatzeko:

- **[Suricata](https://suricata.io/)**: Doakoa eta komunitate handikoa da.
  Sare-trafiko osoa aztertzen du eta suspicious patroiak detektatzen ditu.
- **[Snort](https://www.snort.org/)**: Alternatiba klasikoa, Cisco-k babestuta.
- Biak integra daitezke pfSense/OPNsense-ren bidez, software gehigarririk
  gabe.

IDS bat martxan jartzeak IT ezagutza eskatzen du, baina ikastetxe
ertain-handi batean gomendagarria da.

### 4. Posta elektronikoaren iragazkiak

Office 365, Google Workspace eta antzeko zerbitzuek berez dakartzate
spam eta phishing iragazkiak. Ziurtatu aktibatuta daudela:

- **Spam iragazkia**: aktibatuta.
- **Phishing detekzioa**: aktibatuta.
- **Fitxategi arriskutsuen blokeoa**: .exe, .scr, .vbs, .js, .bat, .ps1 eta antzeko luzapenak blokeatu.

### 5. Erregistroen kudeaketa (log management)

Sistema eta aplikazioek milaka gertaera (log) sortzen dituzte egunero. Erregistro horiek modu zentralizatuan bildu eta aztertzen ez badira, zaila da gorabeherak, segurtasun-intzidenteak edo jarduera susmagarriak garaiz identifikatzea.

- **Zer bildu**: sistema eragileen, zerbitzarien (adibidez, Odoo edo Moodle), firewallaren, DNS eta posta-zerbitzarien, eta sareko gailuen (switch eta routerren) erregistroak.
- **Nola**: **[Wazuh](https://wazuh.com/)** doako XDR/SIEM plataforma bat da, makina bakoitzean agente arin bat instalatzen duena. Behin arauak konfiguratuta, alerta automatikoak sortzen ditu.
- **Beste aukera batzuk**: **[Graylog](https://www.graylog.org/)** (doako
  komunitate-edizioa) edo **[Elastic Security](https://www.elastic.co/security)** irtenbide aurreratuagoak dira, ingurune handi edo konplexuetarako egokiak.
- **Gutxieneko gomendioa**: ziurtatu zerbitzari guztiek erregistroak (log) gordetzen dituztela leku zentralizatu batean (syslog zerbitzari sinple bat   nahikoa da hasteko).

### 6. SIEM - Security Information and Event Management (aurreratua)

Logak zentralizatzea lehen urratsa da; SIEM batek, ordea, urrats bat harago doa. Iturri desberdinetako **erregistroak** elkarren artean **erlazionatzen** ditu eta jarduera susmagarriak automatikoki detektatzen ditu.

Adibidez, erabiltzaile batek posta-zerbitzarian hainbat saio-hutsegite izatea eta, aldi berean, firewallak IP beretik portu-eskaner bat detektatzea lotu dezake, eta segurtasun-alerta automatiko bat sortu.

Hau maila aurreratukoa da, baina Wazuh-rekin egiteko aukera dago inbertsio handirik gabe. Ikastetxe handi batean edo hainbat ikastetxeren IT kudeaketa bateratuan, SIEM bat gomendagarria da.

#### Norberak kudeatutako posta-zerbitzaria

Ikastetxeak bere posta-zerbitzaria kudeatzen badu (adibidez, Zimbra, Carbonio edo Stalwart), gomendagarria da honako neurriak ezartzea:

- Aktibatu **antispam eta antibirus** sistemak zerbitzarian (SpamAssassin,
  Rspamd, ClamAV).
- Gaitu **2FA** webmailerako eta administratzaile-kontuetarako.
- Mugatu **IP bidezko sarbidea** administratzaile-kontsoletara.
- Erabili **sarrera/irteerako posta-relay zerbitzu bat**. Erasotzaileen
  trafikoa iragazten du eta zure IParen ospea babesten du.
- Ezarri **gehienezko bidalketa-muga** erabiltzaile bakoitzeko
  (adibidez, 100-200 email/h).

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
