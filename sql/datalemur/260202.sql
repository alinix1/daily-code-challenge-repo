SELECT name
FROM actor
JOIN casting 
ON actor.id=casting.actorid
WHERE movieid= 132689

SELECT name
FROM actor 
JOIN casting 
ON actor.id=casting.actorid
WHERE casting.movieid = (
 SELECT id
 FROM movie
 WHERE title = 'Alien'
)