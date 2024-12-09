---
spezielle Begriffe:
  - Dynamisch vs statisch
  - FIFO
  - Knoten
  - LIFO
  - Trennung von Struktur und Inhalt
Ready to learn: true
Last edited by: "EinJojo "
Last edited time: Invalid date
---
# Lineare Datenstrukturen
Lineare Datenstrukturen
a. Allgemein Informationen:
1. Queue
2. Stack
3. Liste
4. Unterschied Array vs lineare Datenstruktur:
Darstellung in Klassendiagram
---
## a. Allgemein Informationen:
- ==**Generisch**==  
    → Beliebig viele Objekte können gespeichert werden (ContentType)  
    
- Trennung von Struktur und Inhalt über ==**Knoten**== (node)
- Haben eine ==**Dynamische Größe**==**  
    →  
    **sind nicht wie ein Array, was **==statisch==** ist, in der Länge begrenzt

> [!important]  
> In der Klausur immer angeben, wenn es ums erläutern geht.  
  
---
  
## 1. Queue
Funktioniert nach dem ==**FIFO Prinzip:**==  
Zugriff immer  
**nur** auf das erste Objekt in der Queue (`head`),  
neue Objekte werden hinten angehangen (  
`tail`)
  
![[Untitled 4.png|Untitled 4.png]]
---
## 2. Stack
Funktioniert nach dem ==**LIFO Prinzip**==:
Zugriff immer auf das letzte Objekt des Stacks (`top` / `head`),  
neue Objekte werden darauf abgelegt  
  
![[Untitled 1 2.png|Untitled 1 2.png]]
---
## 3. Liste
Direkter Zugriff auf das erste (`first`) und letzte (`last`) Objekt der Liste
Zugriff auf alle Objekte der Liste mit Hilfe des `current`-Zeigers,  
neue Objekte können hinten (  
`append(object)`) oder  
an die Stelle des current-Zeigers (  
`insert(object)`) eingefügt werden
  
![[Untitled 2 2.png|Untitled 2 2.png]]
  
  
## 4. Unterschied Array vs lineare Datenstruktur:
||Array|Queue / Stack / List|
|---|---|---|
|Datenstruktur|statisch|dynamisch|
|Zugriff|Direkter Zugriff über die Felder mit entsprechendem Index  <br>  <br>`array[0]`, `array[1]`,…|Queue und Stack:  <br>  <br>Nur auf das erste Element  <br>  <br>Liste:  <br>Auf jedes Element mit dem  <br>`current` Zeiger|
  

> Basierend auf dem Erwartungshorizont der TM Q1.1 LK. 2023 Klausur.
  
## Darstellung in Klassendiagram  
  
![[Untitled 3 2.png|Untitled 3 2.png]]