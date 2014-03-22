// http://dev.classmethod.jp/etc/javascript_testing_framework_sinonjs-1/
// http://sinonjs.org/docs/
// http://chaijs.com/api/assert/
//
// 初期設定
//
var assert = chai.assert;

var obj;
var spy;
var stub;
var mock;
var result;

//
// スパイ、引数なし
//
obj = {
	foo : function() {
		return "x";
	}
};

// スパイ作成
spy = sinon.spy(obj, "foo");

// 実行
result = obj.foo();

// 検証
assert.equal(result, "x");
assert.ok(spy.calledOnce);

//
// スパイ、引数あり、呼び出し回数チェック
//
obj = {
	foo : function(n) {
		return n + n;
	}
};

// スパイ作成
spy = sinon.spy(obj, "foo");

// 実行
result = obj.foo("x");

// 検証
assert.equal(result, "xx");
assert.ok(spy.withArgs("x").calledOnce);

//
// スパイ、引数あり、呼び出し回数チェック(条件付き)
//
obj = {
	foo : function(n) {
		return n + n;
	}
};

// スパイ作成
spy = sinon.spy(obj, "foo");

// 実行
result = obj.foo("x");
result = obj.foo("y");

// 検証
assert.equal(result, "yy");
assert.ok(spy.withArgs("x").calledOnce);
assert.ok(spy.withArgs("y").calledOnce);
assert.ok(spy.calledTwice);

// 検証
assert.equal(spy.getCall(0).returnValue, "xx");
assert.equal(spy.getCall(1).returnValue, "yy");

//
// スタブ、引数なし
//
obj = {
	foo : function() {
		return "x";
	}
};

// スタブ作成
stub = sinon.stub(obj, "foo");
stub.returns("y");

// 実行
result = obj.foo();

// 検証
assert.equal(result, "y");
// 元に戻す
stub.restore();

//
// スタブ、引数あり
//
obj = {
	foo : function(n) {
		return n + n;
	}
};

// スタブ作成
stub = sinon.stub(obj, "foo");
stub.returns("yy");

// 実行
result = obj.foo("x");

// 検証
assert.equal(result, "yy");
// 元に戻す
stub.restore();

//
// スタブ、引数あり(条件付き)
//
obj = {
	foo : function(n) {
		return n + n;
	}
};

// スタブ作成
stub = sinon.stub(obj, "foo");
stub.withArgs("x").returns("yy");
stub.returns("zz");

// 実行、検証
result = obj.foo("x");
assert.equal(result, "yy");
result = obj.foo("z");
assert.equal(result, "zz");
// 元に戻す
stub.restore();

//
// スタブ、引数あり、スタブメソッドあり
//
obj = {
	foo : function(n) {
		return n + n;
	}
};

// スタブ作成
stub = sinon.stub(obj, "foo", function(n) {
	assert.equal(n, "x");

	return "yy";
});

// 実行
result = obj.foo("x");

// 検証
assert.equal(result, "yy");
// 元に戻す
stub.restore();

//
// スタブ、引数なし、呼び出し回数チェック
//
obj = {
	foo : function() {
		return "x";
	}
};

// スタブ作成
stub = sinon.stub(obj, "foo");
stub.onCall(0).returns("y");
stub.onCall(1).returns("z");

// 実行、検証
result = obj.foo();
assert.equal(result, "y");
result = obj.foo();
assert.equal(result, "z");
// 元に戻す
stub.restore();

//
// スタブ、引数なし、例外発生
//
obj = {
	foo : function() {
		return "x";
	}
};

// スタブ作成
stub = sinon.stub(obj, "foo");
stub.throws(/* obj */);

result = null;
try {
	// 実行
	result = obj.foo();
} catch (e) {

}
// 検証
assert.isNull(result);
// 元に戻す
stub.restore();

//
// モック、引数なし
//
obj = {
	foo : function() {
		return "x";
	}
};

// モック作成
mock = sinon.mock(obj, "foo");
mock.expects("foo").once().returns("y");

// 実行
result = obj.foo();

// 検証
assert.equal(result, "y");

// 検証
mock.verify();
// 元に戻す
mock.restore();

//
// モック、引数あり
//
obj = {
	foo : function(n) {
		return n + n;
	}
};

// モック作成
mock = sinon.mock(obj, "foo");
mock.expects("foo").withArgs("x").once().returns("y");
mock.expects("foo").withArgs("a").once().returns("b");

// 実行、検証
result = obj.foo("x");
assert.equal(result, "y");
result = obj.foo("a");
assert.equal(result, "b");

// 検証
mock.verify();
// 元に戻す
mock.restore();

//
// Fake
//
