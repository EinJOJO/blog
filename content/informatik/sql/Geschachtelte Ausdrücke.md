Suche den ältesten Nutzer heraus.
```SQL
SELECT id, username, birthday 
FROM users
WHERE birthday = (SELECT MIN(birthday) FROM users)
```
  
  
  
## Kreuzprodukt
```SQL
# Wie ein Join
SELECT * FROM table1, table2, table3
WHERE 
	table1.id = table2.id AND
	table2.id = table3.id 
	
```