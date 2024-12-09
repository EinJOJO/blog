---
spezielle Begriffe:
  - Datenbanken
Ready to learn: false
Last edited by: "EinJojo "
Last edited time: Invalid date
---
# Datenfeldebene
- **Einheitliche Wertebereiche**
    
    →z.B. nicht 1.0, 1, eins
    
- **Mögliche Festlegung der Ober- und Untergrenze**
- Plausibilitätsprüfungen
    
    →Überprüfung ob **Wert Sinn im Zusammenhang ergibt**
    
    nicht -1 als Note
    
# Datensatzebene
- Eindeutiger Primarschlüssel
    
    →Unterscheidung von anderen Datensätzen
    
    →**Dürfen keine NULL-Werte haben**
    
  
# Beziehungsebene
- Fremdschlüssel ist Referenz zu anderem Datensatz
    
    →**Darf nicht ins leere zeigen**
    
    →Datensatz wird gelöscht, aber Fremdschlüssel nicht
    
  

> [!important]  
> Die Referenzielle Integrität ist sichergestellt, wenn es zu jedem Fremdschlüssel einen vollständigen Primärschlüssel gibt!