SELECT name
FROM world
WHERE continent = 'Europe' AND gdp/population > (
 SELECT gdp/population from world
 WHERE name = 'United Kingdom')

SELECT name, population
FROM world
WHERE population > (
 SELECT population from world 
 WHERE name = 'United Kingdom')
 AND population < (
 SELECT population from world
 WHERE name = 'Germany') 

