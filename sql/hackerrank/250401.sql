SELECT SUM(CITY.POPULATION) FROM CITY 
JOIN COUNTRY ON CITY.COUNTRYCODE = COUNTRY.CODE
WHERE COUNTRY.CONTINENT = 'Asia';

SELECT MAX(SALARY * MONTHS) AS EARNINGS,
# calculates the maximum total earnings by multiplying salary by months 
# assigns the column name 'EARNINGS' to this calculated maximum value
COUNT(*) FROM EMPLOYEE 
# counts the number of employees 
# where clause filters rows to include only employees with earnings equal to the maximum earnings
WHERE (SALARY * MONTHS) = (
    SELECT MAX(SALARY * MONTHS)
    FROM EMPLOYEE
);