function getCookie(cname) {
    let name = cname + "=";
    let ca = decodeURIComponent(document.cookie).split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length);
      }
    }
    return false;
}

function setCookie(cname, cvalue) {
  document.cookie = `${cname}=${cvalue};`;
}

function delCookie(cname) {
  document.cookie = `${cname} =; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
}

//tiemen hele document