SELECT CITY, LENGTH(CITY) FROM STATION
-- select city column and length of city from the station table

WHERE LENGTH(CITY) IN (
  (SELECT MAX(LENGTH(CITY)) FROM STATION),
   -- select the maximum length of city names from the station table
  (SELECT MIN(LENGTH(CITY)) FROM STATION)  
   -- select the minimum length of city names from the station table
)
-- filter cities where the length of the city name is either the maximum or minimum length
ORDER BY LENGTH(CITY) DESC, CITY

-- sort the results by the length of the city name in descending order (longest first)
-- and then by the city name in ascending order (alphabetically)

LIMIT 2;
-- return the first two rows from the sorted result
