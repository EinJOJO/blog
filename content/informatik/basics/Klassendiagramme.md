---
spezielle Begriffe:
  - Datenbanken
Ready to learn: false
Last edited by: "EinJojo "
Last edited time: Invalid date
---
Allgemeine Informationen
Zugriffsbeschränkung
public:
protected
private
---
# Allgemeine Informationen
- Vorheriges planen von Methoden und Variablen
  
# Zugriffsbeschränkung
Diese werden im Zusammenhang mit **Methoden** und **Attributen** verwendet
  
```Java
public class Klasse {
	private int zahlenAttribut;
	public void setZahlenAttribut(int zA) {
		zahlenAttribut = zA;
	}
}
```
## public:
Extern sichtbar von einer Instanz der Klasse.  
Ein Beispiel hierfür wäre  
`player.getWorld()`. Die Methode `getWorld()` ist öffentlich in der Klasse player hinterlegt.
## protected
Der Modifikator `protected` macht etwas von innerhalb der Klasse,  
- von dem  
`Package`, in dem die Klasse enthalten ist,  
- und von  
**Unterklassen** der Klasse sichtbar. (Unterklassen ↔ Vererbung)
## private
Der `private` Modifikator macht etwas nur für die Klasse sichtbar, die es enthält.  
Es gibt keinen Grund, die Attribute von außerhalb der Klasse zugänglich zu machen, wenn man es nie brauchen wird.