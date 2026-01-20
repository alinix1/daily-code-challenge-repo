SELECT candidate_id
FROM candidates
WHERE skill IN ('Python', 'Tableau', 'PostgreSQL')
GROUP BY candidate_id
HAVING COUNT(skill) >= 3;

SELECT sender_id, COUNT(message_id) AS count_messages
FROM messages
WHERE DATE_PART('month', sent_date) = '8'
AND DATE_PART('year', sent_date) = '2022'
GROUP BY sender_id
ORDER BY count_messages DESC
LIMIT 2;