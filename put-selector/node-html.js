//>>built
var put;function Element(a){this.tag=a}var emptyElements={};"base,link,meta,hr,br,wbr,img,embed,param,source,track,area,col,input,keygen,command".split(",").forEach(function(a){emptyElements[a]=!0});var prototype=Element.prototype=[],currentIndentation="";prototype.nodeType=1;prototype.put=function(){var a=[this];a.push.apply(a,arguments);return put.apply(null,a)};
prototype.toString=function(a){var b=this.tag,c=emptyElements[b];return put.indentation&&!a?(a=currentIndentation,currentIndentation+=put.indentation,b=("html"==b?"<!DOCTYPE html>\n<html":"\n"+a+"<"+b)+(this.attributes?this.attributes.join(""):"")+(this.className?' class="'+this.className+'"':"")+">"+(this.children?this.children.join(""):"")+(!this.mixed&&!c&&this.children?"\n"+a:"")+(c?"":"</"+b+">"),currentIndentation=a,b):("html"==this.tag?"<!DOCTYPE html>\n<html":"<"+this.tag)+(this.attributes?
this.attributes.join(""):"")+(this.className?' class="'+this.className+'"':"")+">"+(this.children?this.children.join(""):"")+(a||c?"":"</"+b+">")};
prototype.sendTo=function(a){function b(f){var g=c(this);g&&a.write(g);f.tag?(put.indentation?(a.write("\n"+e+f.toString(!0)),e+=put.indentation):a.write(f.toString(!0)),this.children=!0,d=f,f.pipe=b):a.write(f.toString())}function c(a){for(var c="";d!=a;){if(!d)throw Error("Can not add to an element that has already been streamed");var b=d.tag,h=emptyElements[b];put.indentation?(e=e.slice(put.indentation.length),h||(c+=(d.mixed||!d.children?"":"\n"+e)+"</"+b+">")):h||(c+="</"+b+">");d=d.parentNode}return c}
"function"==typeof a&&(a={write:a,end:a});var d=this,e="";b.call(this,this);this.end=function(b){a[b?"write":"end"](c(this)+"\n</"+this.tag+">")};return this};prototype.children=!1;prototype.attributes=!1;prototype.insertBefore=function(a,b){a.parentNode=this;if(this.pipe)return this.pipe(a);var c=this.children;if(!c)c=this.children=[];if(b)for(var d=0,e=c.length;d<e;d++)if(b==c[d]){a.nextSibling=b;if(0<d)c[d-1].nextSibling=a;return c.splice(d,0,a)}if(0<c.length)c[c.length-1].nextSibling=a;c.push(a)};
prototype.appendChild=function(a){if("string"==typeof a)this.mixed=!0;if(this.pipe)return this.pipe(a);var b=this.children;if(!b)b=this.children=[];b.push(a)};prototype.setAttribute=function(a,b){var c=this.attributes;if(!c)c=this.attributes=[];c.push(" "+a+'="'+b+'"')};prototype.removeAttribute=function(a){var b=this.attributes;if(b)for(var a=" "+a+"=",c=a.length,d=0,e=b.length;d<e;d++)if(b[d].slice(0,c)==a)return b.splice(d,1)};
Object.defineProperties(prototype,{innerHTML:{get:function(){return this.children.join("")},set:function(a){this.mixed=!0;if(this.pipe)return this.pipe(a);this.children=[a]}}});var lessThanRegex=/</g,ampersandRegex=/&/g;
module.exports=function(a,b){put=a.exports=b().forDocument({createElement:function(a){return new Element(a)},createTextNode:function(a){return("string"==typeof a?a:""+a).replace(lessThanRegex,"&lt;").replace(ampersandRegex,"&amp;")}},{test:function(){return!1}});put.indentation="  ";put.Page=function(a){return put("html").sendTo(a)}};