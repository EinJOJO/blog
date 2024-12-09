```sql
# 1)
SELECT photos.id AS "Foto-ID", photos.url, username, users.id AS "User-ID" 
FROM photos INNER JOIN users ON photos.user_id = users.id
WHERE username = "samina369";
# 2)
SELECT body, id FROM comments 
WHERE user_id = (SELECT id FROM users WHERE username = "luis52");
#3)
SELECT city, Count(*) AS AnzahlNutzer FROM users 
WHERE city <> "Berlin" AND city IS NOT NULL
GROUP BY city
ORDER BY AnzahlNutzer DESC;
#4.
SELECT email, body FROM comments 
INNER JOIN users ON comments.user_id = users.id
WHERE body LIKE "%adolf_hitler%";

Nr 5)
SELECT username, id, email, city FROM users 
WHERE id IN (SELECT DISTINCT(user_id) FROM photos WHERE description LIKE "%\#meer%")

Nr 6)
SELECT username, COUNT(*) AS Follower FROM users 
INNER JOIN follows ON following_id = users.id 
GROUP BY username 
ORDER BY Follower DESC
Nr 7)
SELECT username, email, follower_id, following_id  FROM follows 
INNER JOIN users ON follower_id = users.id 
WHERE following_id = (SELECT id FROM users WHERE username = "aaron183")
#Nr 8)
SELECT COUNT(*) AS AnzahlKommentare FROM comments 
WHERE user_id = (SELECT id FROM users WHERE username = "rafael54")
#Nr 9)
SELECT photo_id, COUNT(*) AS AnzahlLikes FROM likes GROUP BY photo_id ORDER BY AnzahlLikes DESC;
SELECT photo_id, COUNT(*) AS AnzahlLikes FROM likes GROUP BY photo_id ORDER BY AnzahlLikes DESC LIMIT 5;
#Nr 10)
SELECT COUNT(*) AS AnzahlNutzer, city FROM users GROUP BY city HAVING AnzahlNutzer > 20
#Nr 11)
SELECT username, users.id AS UID, COUNT(comments.id ) AS AnzahlKommentare FROM users 
LEFT JOIN comments ON users.id = user_id 
GROUP BY UID
HAVING AnzahlKommentare < 5
```
![[Untitled 5.png|Untitled 5.png]]
![[Untitled 1 3.png|Untitled 1 3.png]]
Nr 1)
  
![[Untitled 2 3.png|Untitled 2 3.png]]
Nr 2)
![[Untitled 3 3.png|Untitled 3 3.png]]
![[Untitled 4 2.png|Untitled 4 2.png]]
![[Untitled 5 2.png|Untitled 5 2.png]]
![[Untitled 6.png]]
![[Untitled 7.png]]
![[Untitled 8.png]]
![[Untitled 9.png]]
![[Untitled 10.png]]