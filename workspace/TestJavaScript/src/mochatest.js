suite('#fizzbuzz()', function() {
	test("3の場合はFizzが返ってくる", function() {
		assert.equal("Fizz", fizzbuzz(3), '3の場合はFizzが返ってくる');
	});
	test("5の場合はBuzzが返ってくる", function() {
		assert.equal("Buzz", fizzbuzz(5), '3の場合はFizzが返ってくる');
	});
	test("15の場合はFizz,Buzzが返ってくる", function() {
		assert.equal("Fizz,Buzz", fizzbuzz(15), '3の場合はFizzが返ってくる');
	});
	test("3と5の倍数以外は、数字が返ってくる", function() {
		assert.notEqual("Fizz", fizzbuzz(1), '1の場合はFizzが返ってこない');
		assert.notEqual("Buzz", fizzbuzz(1), '1の場合はBuzzが返ってこない');
		assert.equal("1", fizzbuzz(1), '1の場合は数字がそのまま返ってくる');
		assert.equal("7", fizzbuzz(7), '7の場合は数字がそのまま返ってくる');
		assert.equal("13", fizzbuzz(13), '13の場合は数字がそのまま返ってくる');
	});
});
