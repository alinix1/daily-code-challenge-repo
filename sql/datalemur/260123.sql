SELECT pages.page_id
FROM pages
LEFT JOIN page_likes 
ON pages.page_id = page_likes.page_id
WHERE page_likes.page_id IS NULL
ORDER BY pages.page_id;

SELECT dept.name, COUNT(teacher.name)
FROM teacher
RIGHT JOIN dept
ON (teacher.dept=dept.id)
GROUP BY dept.name;