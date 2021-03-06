SELECT
  T1.HOUR,
  IFNULL(T2.count, 0)
from (
  SELECT 0 as HOUR
  UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5
  UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9 UNION SELECT 10
  UNION SELECT 11 UNION SELECT 12 UNION SELECT 13 UNION SELECT 14 UNION SELECT 15
  UNION SELECT 15 UNION SELECT 16 UNION SELECT 17 UNION SELECT 18 UNION SELECT 19
  UNION SELECT 20 UNION SELECT 21 UNION SELECT 22 UNION SELECT 23
) T1
LEFT JOIN (
  SELECT
    hour(DATETIME) as HOUR,
    COUNT(*) as count
  FROM ANIMAL_OUTS
  GROUP BY HOUR
) as T2 on T2.HOUR = T1.HOUR
