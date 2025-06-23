// Problem Link: https://leetcode.com/problems/same-tree/
var isSameTree = function(p, q) {
    function traverse(p,q){
        if(p === null && q === null){
            return true;
        }
        if(p === null || q === null){
            return false;
        }
        if(p.val !== q.val){
            return false;
        }
        
        return traverse(p.left, q.left) && traverse(p.right, q.right);
    }

    return traverse(p,q)
};