SELECT COUNT(NAME) AS 'COUNT'
FROM (
        SELECT NAME
        FROM ANIMAL_INS
        WHERE 1=1
        AND NAME IS NOT NULL
        GROUP BY NAME
     ) AI