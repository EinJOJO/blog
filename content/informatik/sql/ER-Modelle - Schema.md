---
spezielle Begriffe:
  - Datenbanken
Ready to learn: true
Last edited by: "EinJojo "
Last edited time: Invalid date
---
  
Aufbau
Kardinalitäten
Begriffe
Schema
a) Definieren
b) Datentypen:
---
  
# Aufbau
- Rechteck für ==**Entitätsmenge**==
    
    ![[Untitled 3.png|Untitled 3.png]]
    
- Raute für ==**Beziehung**==
- Ellipse für ==**Attribut**==
- Kardinalität jeweils an den Beziehungen dargestellt mit  
      
    `1:1` `1:n`, `n:m`
  
  
---
  
# Kardinalitäten

> [!important]  
> Wichtig ist, dass man die Kardinalitäten von beiden Seiten betrachtet  
`1:1`  
Benutzer  
`1:1` Profil  
- Ein Benutzer gehört einem Profil  
- Ein Profil gehört einem Benutzer  
  
`1:n`
Kunde `1:n` Adressen
- Ein Kunde hat `n` Adressen
- Eine Adresse gehört zu `einem` Kunden
  
`n:m`
Nutzer `n:m` Gruppenchats
- Ein Nutzer ist in `m` Gruppenchats
- Ein Gruppenchat hat `n` Nutzer.
  
  
---
  
# Begriffe
- Tabellenname: -
- schema: Kopfzeilen der Tabelle
- Attribut: -
- Schlüsselattribut: Primärschlüssel
- Attributwert
- Datensatz: Einmal pro Zeile
  
  
  
![[1000001318.jpg]]
  
---
  
# Schema
## a) Definieren
⬆️ Fremdschlüssel
Primärschlüssel
`tabellenname(``schlüsselattribut``, attribut1, attribut2, …)`
## b) Datentypen:
- TEXT
- ZAHL
- DATUM
- WAHRHEITSWERT
  

> [!important]  
> Der Datentyp legt den Wertebereich für die jeweiligen Attributwerte fest.  
  
[[Redundanzen, Anomalien, Inkonsistenzen]]