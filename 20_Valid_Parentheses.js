// Problem Link: https://leetcode.com/problems/valid-parentheses/

var isValid = function (s) {
  var first = 0;
    var second = 0;
    var third = 0;

    var firstLastCounter = -1;
    var secondLastCounter = -1;
    var thirdLastCounter = -1;

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(") {
            first += 1;
            stack.push("(");
        } else if (s[i] == ")") {
            first -= 1;
            firstLastCounter = i;
            if (first < 0 || stack.pop() !== "(") return false;
        }

        if (s[i] == "{") {
            second += 1;
            stack.push("{");
        } else if (s[i] == "}") {
            second -= 1;
            secondLastCounter = i;
            if (second < 0 || stack.pop() !== "{") return false;
        }

        if (s[i] == "[") {
            third += 1;
            stack.push("[");
        } else if (s[i] == "]") {
            third -= 1;
            thirdLastCounter = i;
            if (third < 0 || stack.pop() !== "[") return false;
        }
    }

    if (first === 0 && second === 0 && third === 0 && stack.length === 0) {
        return true;
    } else {
        return false;
    }
};
