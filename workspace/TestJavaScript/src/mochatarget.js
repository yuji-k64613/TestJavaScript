//テスト対象のメソッド
var fizzbuzz = function(n) {
	if (n % 3 === 0 && n % 5 === 0)
		return "Fizz,Buzz";
	else if (n % 3 === 0)
		return "Fizz";
	else if (n % 5 === 0)
		return "Buzz";
	else
		return n;
}
