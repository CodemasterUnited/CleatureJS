/*
*                         Cleature JS V1.0.0
*                Author : Codemaster United
*           Github URI : https://github.com/CodemasterUnited/cleature
*                ©2022 Codemaster United
*      Email : codemasterunited@gmail.com
*                            MIT Licensed
*/

'use scrict';

function select(selector) {
	if (typeof selector !== 'undefined') {
		return document.querySelector(selector);
	} else {
	    throw "select isn't defined properly";
	}
}

function selectAll(selector) {
	if (typeof selector !== 'undefined') {
		return document.querySelectorAll(selector);
	} else {
	    throw "selectAll isn't defined properly";
	}
}

function echo(txt) {
	if (typeof selector !== 'undefined') {
	    var x = document.createElement('div');
	    x.innerHTML = txt;
	    document.body.appendChild(x);
	    return x;
	} else {
		throw "echo isn't defined properly";
	}
}

function toggle(selector) {
	if (typeof selector !== 'undefined') {
        if (selector.style.display == "block"){
            selector.style.display = "none";
        } else {
            selector.style.display = "block";
        }
     } else {
     	throw "toggle isn't defined properly";
     }
}

function hide(selector) {
	if (typeof selector !== 'undefined') {
         selector.style.display = "none";
    } else {
    	throw "hide isn't defined properly";
    }
}

function show(selector) {
    if (typeof selector !== 'undefined') {
         selector.style.display = "block";
    } else {
    	throw "show isn't defined properly";
    }
}
	
function bgmusic(src,format) {
	if (typeof src !== 'undefined') {
	    var x = document.createElement('div');
	    x.innerHTML = '<audio class="cleature-func-bgmusic-audio" style="display:none" loop><source src="'+src+'" type="'+format+'"></source></audio>';
	    document.body.appendChild(x);
	    var bgmclass = document.querySelector('.cleature-func-bgmusic-audio');
	    bgmclass.play();
	    return bgmclass;
     } else {
     	throw "bgmusic isn't defined properly";
     }
}

function addSnippet(location,snippet) {
    if (typeof location !== 'undefined' && typeof snippet !== 'undefined') {
        if (location == 'head') {
		    document.head.innerHTML += snippet;
	    } else if (location == 'body') {
		    document.body.innerHTML += snippet;
	    } else {
		    location += snippet;
        }
    } else {
     	throw "addSnippet isn't defined properly";
    }
}

function sortList(list,sel) {
	if (typeof list !== 'undefined') {
	    if (typeof sel === 'undefined') {
            var sel = 'li'; 
        }
        var sorted = true;
        while (sorted) {
    	    var sorted = false;
        	var items = list.getElementsByTagName(sel);
            for (i = 0; i < (items.length - 1); i++) {
                var stopped = false;
            	if (items[i].innerHTML.toLowerCase() > items[i + 1].innerHTML.toLowerCase()) {
                   var stopped = true;
                   break;
                }
            }
             
            if (stopped) {
                items[i].parentNode.insertBefore(items[i + 1], items[i]);
                var sorted = true;
            }
        } 
    } else {
    	throw "sortList isn't defined properly";
    }
}

function shuffleList(list) {
	if (typeof list !== 'undefined') {
	    for (var i = list.children.length; i >= 0; i--) {
            list.appendChild(list.children[Math.random() * i | 0]);
        }
    } else {
        throw "shuffleList isn't defined properly";
    }
}

function uniqueId(length) {
	if (typeof length === 'undefined') {
		var length = 12;
	}
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

function removeDuplicates(array) {
	if (typeof length === 'undefined') {
	    return array.filter((item,index) => array.indexOf(item) === index);
	} else {
		throw "removeDuplicates isn't defined properly";
	}
}

Element.prototype.addStyles = function(css) {
    if (typeof css !== 'undefined') {
    	var uniqclass = uniqueId();
	    var x = this.classList.add(uniqclass);
	    document.body.innerHTML += `<style>.`+uniqclass+` {`+css+`}</style>`;
	} else {
		throw "addStyles isn't defined properly";
	}
};
