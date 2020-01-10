public class StringTest {
	public static void main(String[] args) {
		System.out.println(getCenterCharacter("tttatatatata"));
		System.out.println(getCenterCharacter("1234"));
		System.out.println(getCenterCharacter("1234567"));
		System.out.println(getCenterCharacter("12345678901"));
		System.out.println(getCenterCharacter("123456789012"));
		System.out.println("==================================");
		System.out.println(simpleGetCenterCharcter("tttatatatata"));
		System.out.println(simpleGetCenterCharcter("1234"));
		System.out.println(simpleGetCenterCharcter("1234567"));
		System.out.println(simpleGetCenterCharcter("12345678901"));
		System.out.println(simpleGetCenterCharcter("123456789012"));
	}
	
	private static String simpleGetCenterCharcter(String str) {
		return str.length() % 2 == 0 ? str.substring((str.length() / 2) - 1, (str.length() / 2) + 1) : str.substring((str.length() / 2), (str.length() / 2) + 1);
	}
	
	private static boolean strLengthOddOrEvenCheck(String str) {
		if(str.length() % 2 == 0) {
			return true;
		}else {
			return false;
		}
	}
	
	private static String getCenterCharacter(String str) {
		boolean strCheck = strLengthOddOrEvenCheck(str);
		
		if(strCheck) {
			return evenGetCenterCharcter(str);
		}else {
			return oddGetCenterCharcter(str);
		} 
	}
	
	private static String oddGetCenterCharcter(String str) {
		int result = str.length() / 2;
		
		return str.substring(result, result + 1); 
	}
	
	private static String  evenGetCenterCharcter(String str) {
		int result = str.length() / 2;
		
		return str.substring(result - 1, result + 1); 
	}
}