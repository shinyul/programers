SELECT  AO.ANIMAL_ID,
        AO.NAME
FROM ANIMAL_OUTS AO 
                    LEFT JOIN ANIMAL_INS AI
                    ON AO.ANIMAL_ID = AI.ANIMAL_ID            
WHERE 1=1 
AND AI.ANIMAL_ID IS NULL