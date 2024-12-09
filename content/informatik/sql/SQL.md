---
spezielle Begriffe:
  - Datenbanken
  - SQL
Ready to learn: false
Last edited by: "EinJojo "
Last edited time: Invalid date
---
[[Geschachtelte Ausdrücke]]
[[SQL-Joins]]
[[Aufgabe]]
  
Heftige Lernplattform für SQL:

> [!info] SQL Tutorial  
> W3Schools offers free online tutorials, references and exercises in all the major languages of the web.  
> [https://www.w3schools.com/sql/](https://www.w3schools.com/sql/)  
# Operatoren
## Basis:
|Operator|Erklärung|Beispiel|
|---|---|---|
|SELECT||1. SELECT * FROM users  <br>→ Alle Datensätze der ˋusersˋ Tabelle  <br>  <br>2. SELECT id FROM users;  <br>→Nur die id aller Datensätze der user Tabelle|
|UNION|Verbindet zwei Select-Abfragen.  <br>Zu beachten:  <br>- Selbe Anzahl an Spalten  <br>- ähnliche Datentypen|SELECT name FROM users  <br>WHERE city = “Dresden”  <br>UNION  <br>SELECT name FROM users  <br>WHERE city = “Heiligenhaus”|
||||
  
---
## Arithmetische Operationen
```SQL
SELECT username, (centimeters + 250) AS “modifizierte Groesse”;
```
---
## Aggregat Funktionen
  
|   |   |
|---|---|
|MAX|maximaler Wert der vorliegenden Tabelle.|
|MIN||
|AVG||
|SUM||
|COUNT||
|DISTINCT||
Beispiele
```SQL
SELECT MAX(kontostand) FROM konten;
```
  
  
  
  
  
---
## Logische Operatoren
|   |   |
|---|---|
|AND||
|OR||
|NOT||
---
  
## Komplexe Filter
n → Zahl
|  Operator |  Bedetugung  |
|---|---|
|\<\> “…”|Ungleich|
|\< n|Kleiner|
|> n|Größer|
|≤ n|Kleiner gleich|
|≥ n|größer gleich|
|BETWEEN n AND n2|Bereich mit Start und Endwert|
|LIKE “ab_d%”|% - Beliebig viele  <br>_ - Beliebiges einzelne|
|IN (”…”, “…”)||
|IS NULL|Ist der Wert vorhanden?|
|NOT||
  
```SQL
SELECT * FROM table 
WHERE table.column <> "name" 
AND table.column2 < 2
AND table.column3 BETWEEN 1 AND 10
AND table.column4 NOT IS NULL; 
```
# Beispiele