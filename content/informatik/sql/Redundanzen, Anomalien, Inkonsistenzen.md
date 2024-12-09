---
spezielle Begriffe:
  - Datenbanken
Ready to learn: true
Last edited by: "EinJojo "
Last edited time: Invalid date
---
Redundanzen
Anomalien
a) Änderungsanomalie
b) Löschanomalie
c) Einfügeanomalie
Inkonsistenzen
---
# Redundanzen
- **Daten sind mehrmals unnötig gespeichert**
    
    → Unnötiger Verbrauch von Speicherplatz
    
    → Erschwerter Änderungsprozess
    
    → Erhöhte Anfälligkeit für Anomalien
    
      
    
---
# Anomalien
→ Anomalien sind Probleme, die bei Operationen auf den Datensätzen enstehen können.
## a) Änderungsanomalie
- zwei gleiche Daten werden gespeichert und **nur eine wird verändert**
    
    → Man erhält zwei verschiedene Daten → ==**Inkonsistenz in den Daten (Widerspruch)**==
    
## b) Löschanomalie
Wenn ein Eintrag gelöscht wird können diese Probleme auftreten:
→ Fremdschlüssel, die auf diesen gelöschten Datensatz zeigen…
- …werden gelöscht  
    → Unerwünschte Datenlöschung  
    
- …verweisen auf einen nicht existenten Datensatz.
  
## c) Einfügeanomalie
- Neuer Datensatz wird hinzugefügt und **Daten haben NULL-Wert**
    
    →Fehler beim Zugriff auf diese Daten
    
  
  

> [!important]  
> Anomalien lassen sich häufig verhindern indem man Relationen möglichst Redundanzfrei hält!  
  
# Inkonsistenzen
- **Ungleichheiten im Datenbestand**
    
    → Entstehen durch Anomalien