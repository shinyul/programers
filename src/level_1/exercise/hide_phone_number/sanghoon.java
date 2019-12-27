public class test {
    public static String solution(String phone_number) {
        int maxSize = phone_number.length() - 4;
		
//	    String answer = "";
//	    for ( int i = 0; i < maxSize; i++ ) {
//	        answer += "*";
//      }
//	    return answer + phone_number.substring(maxSize, phone_number.length());
		
//      String answer = "********************";
//      return answer.substring( 0, maxSize ) + phone_number.substring( maxSize, phone_number.length() );

        char[] c = new char[ phone_number.length() - 4 ];
        Arrays.fill( c, '*' );
        return String.valueOf(c) + test.substring( test.length() - 4 );
    }
}