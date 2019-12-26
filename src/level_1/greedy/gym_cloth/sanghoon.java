class Solution {
    public int solution(int n, int[] lost, int[] reserve) {
        int answer = n - lost.length;

        for ( int i = 0; i < reserve.length; i++ ) {
            for ( int k = 0; k < lost.length; k++ ) {
                if ( reserve[i] == lost[k] ) {
                    lost[k] = -1; 
                    reserve[i] = -1;
                    answer++;   
                    break;
                }
        	}
        }
        
        for ( int i = 0; i < reserve.length; i++ ) {
        	if ( reserve[i] > -1 ) {
                for ( int j = 0; j < lost.length; j++ ) {        			
                    if ( lost[j] > -1 
                        && ( ( reserve[i] + 1 ) == lost[j] ||  ( reserve[i] - 1 ) == lost[j] ) ) {
                        lost[j] = -1; 
                        reserve[i] = -1;
                        answer++;   
                        break;
                    }
                }
            }
        }
        return answer;
    }
}

