/**
* {{replace}}
* Replace occurrences of string "A" with string "B"
* @author: Jon Schlinkert <http://github.com/jonschlinkert>
* @param  {[type]} str [description]
* @param  {[type]} a   [description]
* @param  {[type]} b   [description]
* @return {[type]}     [description]
*/

module.exports = function (str, a, b) {
    if(str && typeof str === "string") {
      return str.split(a).join(b);
    }
}
