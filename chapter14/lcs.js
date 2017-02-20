

//最长公共子串,暴力求解
function lcs(s1,s2){
    var val = [];
    var result = "";
    for(var i=0; i<s1.length; i++){
        for(var k=0;k<s2.length; k++){
            if(s2[k]==s1[i]){
                result += s1[i];
            }
            var j = i+1;
            var m = k+1;
            while(j<s1.length && m<s2.length && s1[j]==s2[m]){
                result += s1[j];
                ++j;
                ++m;
            }
            if(val[result.length]==undefined){
                val[result.length] = [];
                val[result.length][0] = result;
            } else{
                var temp = val[result.length];
                val[result.length][temp.length] = result;
            }
            result = "";
        }
    }
    return val[val.length-1];
}
console.log("暴力求解");
var word1 = "ravenasdfghjkujnfvdvnasdfghjkdfgdf123456789123";
var word2 = "havocasdfghjklijngbdfvbnasdfghjkdfger123456789123";
console.log(lcs(word1,word2));

//动态规划













