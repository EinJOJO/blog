---
spezielle Begriffe:
  - Bubble Sort
  - Insertion Sort
  - Quicksort
Ready to learn: true
Last edited by: "EinJojo "
Last edited time: Invalid date
---
Iterative Sortierverfahren
Beispiel: Bubble Sort
Rekursive Sortierverfahren
Beispiele
Sortieren einer Liste:
  
## Iterative Sortierverfahren
- Iterative Sortierverfahren sind Algorithmen zur Sortierung von Elementen,  
    die auf  
    **`for`** oder **`while`** Schleifen basieren.
- Sortierung erfolgt durch `**wiederholte Anwendung von Schleifen**`
- Ein Beispiel ist `**Bubble-Sort**`
  
---
### Beispiel: Bubble Sort
1. Die Liste wird von **`links nach rechts`** durchlaufen.
2. Benachbarte Elemente werden verglichen, und **`wenn`** sie in der falschen Reihenfolge sind, werden sie vertauscht.
3. Dieser Prozess wird so lange **`mit einer Schleife`** wiederholt, bis keine Vertauschungen mehr vorgenommen werden müssen.
**Beispiel:**  
Angenommen, wir haben die Liste  
`**[**``5, 3, 8, 4, 2``**]**`:
1. Erster Durchlauf: `[3, 5, 4, 2,` `**8**``]`
2. Zweiter Durchlauf: `[3, 4, 2,` `**5, 8**``]`
3. Dritter Durchlauf: `[3, 2,` `**4, 5, 8**``]`
4. Vierter Durchlauf: `**[2, 3, 4, 5, 8**``]`
Bubble Sort ist zwar einfach zu verstehen, aber es ist  
  
nicht besonders effizient für große Listen.  
Andere Sortieralgorithmen wie Merge Sort oder Quick Sort sind in der Regel effizienter, aber sie  
`**verwenden**`oft Rekursion, während Bubble Sort iterativ ist.
  
```Java
// An optimized version of Bubble Sort
  static void bubbleSort(int arr[], int n) {
    int i, j, temp;
    boolean swapped;
    for (i = 0; i < n - 1; i++) {
      swapped = false;
      for (j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap arr[j] and arr[j+1]
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
        }
      }
      // If no two elements were
      // swapped by inner loop, then break
      if (swapped == false) break;
    }
  }
```
## Rekursive Sortierverfahren
- Ein rekursives Sortierverfahren ist ein Algorithmus zur Sortierung von Elementen,  
    der den Ansatz der Rekursion verwendet  
    
- Bei rekursiven Algorithmen wird das Problem in `**kleinere Teilprobleme**` aufgeteilt,  
    die auf  
    `**dieselbe Weise**` gelöst werden, bis das ursprüngliche Problem gelöst ist
- Das rekursive Sortierverfahren, dass wir uns im Unterricht angeschaut haben nennt sich “Quick Sort”
    
    ### Quick Sort
    
    `**Quicksort**` ist wie das Sortieren von Karten in deinen Händen.  
    Du schaust dir eine Karte an (das ist das "  
    `**Pivot**`"),  
    und dann trennst du die anderen Karten in zwei Stapel auf:  
    die, die  
    **kleiner** als die Karte in deiner Hand sind, und die, die **größer** sind.
    
    Dann machst du dasselbe für **jeden** dieser Stapel.  
    Du nimmst eine Karte in der Hand, teilst die anderen in  
    `**zwei**` Stapel auf (`**kleiner**` oder `**größer**`),  
    und das wiederholst du, bis jede Karte an ihrem  
    **richtigen Platz** ist.  
    Am Ende sind alle Karten sortiert.  
    
    In der Computersprache bedeutet "`**Pivot**`" nur `**das Element, das ausgewählt**` wird, um die anderen in zwei Gruppen aufzuteilen.  
    Das Teilen in kleinere und größere Gruppen nennt man "Partitionieren".  
    Und das Wichtige hier ist, dass dies wiederholt wird,  
    `**bis alles sortiert ist**`**.**
    
      
    
      
    
  
  
# Beispiele
## Sortieren einer Liste:
Sortieren absteigend.
```Java
public void sortieren() {
        List<Versandschachtel> original = schachtelStapel; // kürzere variable
        original.toFirst();
        List<Versandschachtel> hilfsliste = new List<>();
        while(!original.isEmpty()) {
            hilfsliste.toFirst();
            Versandschachtel current = original.getContent();
            while (hilfsliste.hasAccess() && hilfsliste.getContent().getGroesse() > current.getGroesse()) {
                hilfsliste.next();
            }
            if (hilfsliste.hasAccess()) {
                hilfsliste.insert(current);
            } else {
                hilfsliste.append(current);
            } 
            original.remove();
        }
        hilfsliste.toFirst();
        while(hilfsliste.hasAccess()) {
            System.out.println("Schachtel mit Größe " + hilfsliste.getContent().getGroesse());
            original.append(hilfsliste.getContent());
            original.next();
            hilfsliste.remove();
        }        
    }
```
Ereugt Resultat:  
  
```JavaScript
Schachtel mit Größe 41
Schachtel mit Größe 33
Schachtel mit Größe 31
Schachtel mit Größe 30
Schachtel mit Größe 10
Schachtel mit Größe 8
Schachtel mit Größe 8
Schachtel mit Größe 7
Schachtel mit Größe 4
Schachtel mit Größe 2
Schachtel mit Größe 2
```