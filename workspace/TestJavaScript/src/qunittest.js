module("syncTest");
test("syncFuncTest", 1, function(){
    equal("hello, world!", syncFunc(), "return to expected data");
});
module("async");
test("asyncFuncTest", function(){
    expect(2);
    stop();
    asyncFunc(function(message){
        start();
        ok(true, "call to callback function");
        equal("hello, world!", message, "return to expected data");
    });
});
