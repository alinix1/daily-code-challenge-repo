SELECT COUNT(POPULATION) FROM CITY 
WHERE POPULATION > 100000;

SELECT SUM(POPULATION) FROM CITY
WHERE DISTRICT = 'California';

SELECT AVG(POPULATION) FROM CITY
WHERE DISTRICT = 'California';

SELECT AVG(ROUND(POPULATION)) FROM CITY;
