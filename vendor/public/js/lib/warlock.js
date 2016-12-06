function wlSelect(element, all) {
    all = all || false;
    return all == true ? document.querySelectorAll(element) : document.querySelector(element);
}

function createNode(json) {
    if (json.hasOwnProperty("balise")) {
        var balise = document.createElement(json.balise);
    }
    else {
        balise = "";
    }
    if (json.hasOwnProperty("content")) {
        balise.innerHTML = json.content;
    }
    else {
        balise.innerHTML = "";
    }
    if (json.hasOwnProperty("attributs")) {
        for (var attr in json.attributs) {
            if (json.attributs.hasOwnProperty(attr)) {
                balise.setAttribute(attr, json.attributs[attr]);
            }
        }
    }
    if (json.hasOwnProperty("parent") && json.hasOwnProperty("position")) {
        switch (json.position) {
            case "bottom":
                if (typeof json.parent === 'object') {
                    json.parent.appendChild(balise);
                }
                else if (typeof json.parent === 'string') {
                    document.querySelector(json.parent).appendChild(balise);
                }
                break;
            case "top":
                if (typeof json.parent === 'object') {
                    json.parent.insertBefore(balise, null);
                }
                else if (typeof json.parent === 'string') {
                    document.querySelector(json.parent).insertBefore(balise);
                }
                break;
        }

    }
    else {
        return balise;
    }

}

function wlClean(node)
{
    for(var n = 0; n < node.childNodes.length; n ++)
    {
        var child = node.childNodes[n];
        if
        (
            child.nodeType === 8
            ||
            (child.nodeType === 3 && !/\S/.test(child.nodeValue))
        )
        {
            node.removeChild(child);
            n --;
        }
        else if(child.nodeType === 1)
        {
            wlClean(child);
        }
    }
}


function wlAjax(url, json) {
    var xhr = new XMLHttpRequest();
    xhr.open(json.type, url);
    xhr.responseType = json.dataType;
    xhr.send();
    return xhr.onload;
}

function wlDone() {
    xhr.onload = function(ev) {
        var data = ev.target.response;
        console.log(ev.target.response);
        var texte = document.createTextNode("Il y a " + data.length + " Ã©lÃ©ments dans le tableau");
        document.getElementById('retour6').appendChild(texte);
    };

}

