 /*
 * Copyright 2011 Google Inc.
 *
 * Swiffy runtime version 3.7.0
 *
 * In addition to the Google Terms of Service (http://www.google.com/accounts/TOS),
 * Google grants you and the Google Swiffy end users a personal, worldwide,
 * royalty-free, non-assignable and non-exclusive license to use the Google Swiffy
 * runtime to host it for Google Swiffy end users and to use it in connection with
 * the Google Swiffy service.
 */
var g = void 0, h = !0, j = null, k = !1, aa = window, l = Object, m = document, n = Math, ba = Array, p = Number, ca = Error, da = Boolean, ea = parseInt, fa = decodeURIComponent;
function ga(a, b) {
    return a.data = b
}
function ha(a, b) {
    return a.color = b
}
function ia(a, b) {
    return a.currentTarget = b
}
function ja(a, b) {
    return a.keyCode = b
}
function ka(a, b) {
    return a.play = b
}
function la(a, b) {
    return a.type = b
}
function ma(a, b) {
    return a.toString = b
}
function na(a, b) {
    return a.length = b
}
function oa(a, b) {
    return a.fontSize = b
}
function pa(a, b) {
    return a.lineHeight = b
}
function qa(a, b) {
    return a.target = b
}
function ra(a, b) {
    return a.call = b
}
function sa(a, b) {
    return a.start = b
}
function ta(a, b) {
    return a.returnValue = b
}
function ua(a, b) {
    return a.apply = b
}
var r = "appendChild", s = "push", va = "ymin", wa = "indent", xa = "getParent", ya = "getOwnPropertyNames", za = "shift", Aa = "ymax", Ba = "POSITIVE_INFINITY", Ca = "width", Da = "bitmap", Ea = "text", Fa = "expand", Ga = "slice", t = "replace", Ha = "matrix", Ia = "setCapture", u = "data", Ja = "floor", Ka = "concat", La = "createTextNode", Ma = "getNamedItem", Na = "preventDefault", Oa = "setAttributeNS", v = "indexOf", Pa = "defineProperties", Qa = "color", Ra = "capture", Sa = "ratio", Ta = "setTransform", Ua = "definition", Va = "knockout", Wa = "linestyles", Xa = "getName", Ya = "charCode", 
Za = "createElement", x = "defineProperty", y = "keyCode", $a = "forEach", ab = "sqrt", bb = "states", z = "setAttribute", cb = "play", db = "handleEvent", A = "path", eb = "depth", B = "type", fb = "method", gb = "childNodes", hb = "name", ib = "code", jb = "releaseCapture", kb = "fill", mb = "stop", C = "toString", ob = "gradient", D = "length", pb = "propertyIsEnumerable", qb = "create", E = "prototype", rb = "result", sb = "inner", tb = "actions", ub = "variable", F = "createElementNS", vb = "ctrlKey", H = "split", wb = "constructor", xb = "stopPropagation", yb = "glyphs", zb = "hasOwnProperty", I = 
"style", Ab = "body", Bb = "removeChild", Cb = "getOwnPropertyDescriptor", Db = "target", K = "call", Eb = "isEnabled", Fb = "frameSize", Gb = "line", Hb = "start", Ib = "NEGATIVE_INFINITY", Jb = "init", Kb = "returnValue", Lb = "charCodeAt", Mb = "colortransform", Nb = "xmin", Ob = "paths", Pb = "trackAsMenu", L = "apply", Qb = "filters", Rb = "xmax", Sb = "reset", Tb = "removeAttribute", Ub = "navigator", Vb = "parentNode", Wb = "update", Xb = "height", Yb = "splice", Zb = "join", $b = "isCaptured", ac = "transform", bc = "nodeValue", cc = "quality", dc = "toLowerCase", N, ec = this, fc = function(a) {
    var b = 
    typeof a;
    if ("object" == b)
        if (a) {
            if (a instanceof ba)
                return "array";
            if (a instanceof l)
                return b;
            var c = l[E][C][K](a);
            if ("[object Window]" == c)
                return "object";
            if ("[object Array]" == c || "number" == typeof a[D] && "undefined" != typeof a[Yb] && "undefined" != typeof a[pb] && !a[pb]("splice"))
                return "array";
            if ("[object Function]" == c || "undefined" != typeof a[K] && "undefined" != typeof a[pb] && !a[pb]("call"))
                return "function"
        } else
            return "null";
    else if ("function" == b && "undefined" == typeof a[K])
        return "object";
    return b
}, O = function(a) {
    return a !== 
    g
}, gc = function(a) {
    return "array" == fc(a)
}, hc = function(a) {
    var b = fc(a);
    return "array" == b || "object" == b && "number" == typeof a[D]
}, P = function(a) {
    return "string" == typeof a
}, R = function(a) {
    return "function" == fc(a)
}, ic = function(a) {
    a = fc(a);
    return "object" == a || "array" == a || "function" == a
}, lc = function(a) {
    return a[jc] || (a[jc] = ++kc)
}, jc = "closure_uid_" + n[Ja](2147483648 * n.random())[C](36), kc = 0, mc = function(a, b, c) {
    return a[K][L](a.bind, arguments)
}, nc = function(a, b, c) {
    if (!a)
        throw ca();
    if (2 < arguments[D]) {
        var d = ba[E][Ga][K](arguments, 
        2);
        return function() {
            var c = ba[E][Ga][K](arguments);
            ba[E].unshift[L](c, d);
            return a[L](b, c)
        }
    }
    return function() {
        return a[L](b, arguments)
    }
}, S = function(a, b, c) {
    S = Function[E].bind && -1 != Function[E].bind[C]()[v]("native code") ? mc : nc;
    return S[L](j, arguments)
}, oc = function(a, b) {
    var c = ba[E][Ga][K](arguments, 1);
    return function() {
        var b = ba[E][Ga][K](arguments);
        b.unshift[L](b, c);
        return a[L](this, b)
    }
}, T = function(a, b) {
    function c() {
    }
    c.prototype = b[E];
    a.m = b[E];
    a.prototype = new c;
    a[E].constructor = a
};
var pc = function(a) {
    this.stack = ca().stack || "";
    if (a)
        this.message = "" + a
};
T(pc, ca);
pc[E].name = "CustomError";
var qc = function(a, b) {
    for (var c = 1; c < arguments[D]; c++)
        var d = ("" + arguments[c])[t](/\$/g, "$$$$"), a = a[t](/\%s/, d);
    return a
}, rc = /^[a-zA-Z0-9\-_.!~*'()]*$/, sc = function(a) {
    a = "" + a;
    return !rc.test(a) ? encodeURIComponent(a) : a
}, yc = function(a, b) {
    if (b)
        return a[t](tc, "&amp;")[t](uc, "&lt;")[t](vc, "&gt;")[t](wc, "&quot;");
    if (!xc.test(a))
        return a;
    -1 != a[v]("&") && (a = a[t](tc, "&amp;"));
    -1 != a[v]("<") && (a = a[t](uc, "&lt;"));
    -1 != a[v](">") && (a = a[t](vc, "&gt;"));
    -1 != a[v]('"') && (a = a[t](wc, "&quot;"));
    return a
}, tc = /&/g, uc = /</g, vc = />/g, 
wc = /\"/g, xc = /[&<>\"]/;
var zc = function(a, b) {
    b.unshift(a);
    pc[K](this, qc[L](j, b));
    b[za]();
    this.Fh = a
};
T(zc, pc);
zc[E].name = "AssertionError";
var U = function(a, b, c) {
    if (!a) {
        var d = ba[E][Ga][K](arguments, 2), e = "Assertion failed";
        if (b)
            var e = e + (": " + b), f = d;
        throw new zc("" + e, f || []);
    }
    return a
};
var Ac = ba[E], Bc = Ac[v] ? function(a, b, c) {
    U(a[D] != j);
    return Ac[v][K](a, b, c)
} : function(a, b, c) {
    c = c == j ? 0 : 0 > c ? n.max(0, a[D] + c) : c;
    if (P(a))
        return !P(b) || 1 != b[D] ? -1 : a[v](b, c);
    for (; c < a[D]; c++)
        if (c in a && a[c] === b)
            return c;
    return -1
}, Cc = Ac[$a] ? function(a, b, c) {
    U(a[D] != j);
    Ac[$a][K](a, b, c)
} : function(a, b, c) {
    for (var d = a[D], e = P(a) ? a[H]("") : a, f = 0; f < d; f++)
        f in e && b[K](c, e[f], f, a)
}, Dc = function(a, b) {
    var c = Bc(a, b), d;
    if (d = 0 <= c)
        U(a[D] != j), Ac[Yb][K](a, c, 1);
    return d
}, Ec = function(a) {
    return Ac[Ka][L](Ac, arguments)
}, Fc = function(a) {
    if (gc(a))
        return Ec(a);
    for (var b = [], c = 0, d = a[D]; c < d; c++)
        b[c] = a[c];
    return b
}, Gc = function(a, b) {
    for (var c = 1; c < arguments[D]; c++) {
        var d = arguments[c], e;
        if (gc(d) || (e = hc(d)) && d[zb]("callee"))
            a[s][L](a, d);
        else if (e)
            for (var f = a[D], i = d[D], o = 0; o < i; o++)
                a[f + o] = d[o];
        else
            a[s](d)
    }
}, Ic = function(a, b, c, d) {
    U(a[D] != j);
    return Ac[Yb][L](a, Hc(arguments, 1))
}, Hc = function(a, b, c) {
    U(a[D] != j);
    return 2 >= arguments[D] ? Ac[Ga][K](a, b) : Ac[Ga][K](a, b, c)
}, Jc = function(a, b, c, d, e) {
    for (var f = 0, i = a[D], o; f < i; ) {
        var q = f + i >> 1, w;
        w = c ? b[K](e, a[q], q, a) : b(d, a[q]);
        0 < w ? f = q + 
        1 : (i = q, o = !w)
    }
    return o ? f : ~f
}, Kc = function(a, b) {
    return a > b ? 1 : a < b ? -1 : 0
}, Lc = function(a, b, c) {
    c = Jc(a, c || Kc, k, b);
    return 0 > c ? (Ic(a, -(c + 1), 0, b), h) : k
};
var Mc = function(a, b, c) {
    for (var d in a)
        b[K](c, a[d], d, a)
}, Nc = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","), Oc = function(a, b) {
    for (var c, d, e = 1; e < arguments[D]; e++) {
        d = arguments[e];
        for (c in d)
            a[c] = d[c];
        for (var f = 0; f < Nc[D]; f++)
            c = Nc[f], l[E][zb][K](d, c) && (a[c] = d[c])
    }
};
var Pc, Qc, Rc, Sc, Tc = function() {
    return ec[Ub] ? ec[Ub].userAgent : j
};
Sc = Rc = Qc = Pc = k;
var Uc;
if (Uc = Tc()) {
    var Vc = ec[Ub];
    Pc = 0 == Uc[v]("Opera");
    Qc = !Pc && -1 != Uc[v]("MSIE");
    Rc = !Pc && -1 != Uc[v]("WebKit");
    Sc = !Pc && !Rc && "Gecko" == Vc.product
}
var Wc = Pc, Xc = Qc, Yc = Sc, Zc = Rc, $c = ec[Ub], ad = -1 != ($c && $c.platform || "")[v]("Mac"), bd;
a: {
    var cd = "", dd;
    if (Wc && ec.opera)
        var ed = ec.opera.version, cd = "function" == typeof ed ? ed() : ed;
    else if (Yc ? dd = /rv\:([^\);]+)(\)|;)/ : Xc ? dd = /MSIE\s+([^\);]+)(\)|;)/ : Zc && (dd = /WebKit\/(\S+)/), dd)
        var fd = dd.exec(Tc()), cd = fd ? fd[1] : "";
    if (Xc) {
        var gd, hd = ec.document;
        gd = hd ? hd.documentMode : g;
        if (gd > parseFloat(cd)) {
            bd = "" + gd;
            break a
        }
    }
    bd = cd
}
var id = bd, jd = {}, kd = function(a) {
    var b;
    if (!(b = jd[a])) {
        b = 0;
        for (var c = ("" + id)[t](/^[\s\xa0]+|[\s\xa0]+$/g, "")[H]("."), d = ("" + a)[t](/^[\s\xa0]+|[\s\xa0]+$/g, "")[H]("."), e = n.max(c[D], d[D]), f = 0; 0 == b && f < e; f++) {
            var i = c[f] || "", o = d[f] || "", q = RegExp("(\\d*)(\\D*)", "g"), w = RegExp("(\\d*)(\\D*)", "g");
            do {
                var Q = q.exec(i) || ["", "", ""], M = w.exec(o) || ["", "", ""];
                if (0 == Q[0][D] && 0 == M[0][D])
                    break;
                b = ((0 == Q[1][D] ? 0 : ea(Q[1], 10)) < (0 == M[1][D] ? 0 : ea(M[1], 10)) ? -1 : (0 == Q[1][D] ? 0 : ea(Q[1], 10)) > (0 == M[1][D] ? 0 : ea(M[1], 10)) ? 1 : 0) || ((0 == Q[2][D]) < 
                (0 == M[2][D]) ? -1 : (0 == Q[2][D]) > (0 == M[2][D]) ? 1 : 0) || (Q[2] < M[2] ? -1 : Q[2] > M[2] ? 1 : 0)
            } while (0 == b)
        }
        b = jd[a] = 0 <= b
    }
    return b
}, ld = {}, md = function(a) {
    return ld[a] || (ld[a] = Xc && m.documentMode && m.documentMode >= a)
};
var nd = !Xc || md(9);
!Yc && !Xc || Xc && md(9) || Yc && kd("1.9.1");
Xc && kd("9");
var od = function(a, b) {
    var c;
    c = (c = a.className) && "function" == typeof c[H] ? c[H](/\s+/) : [];
    var d = Hc(arguments, 1), e;
    e = c;
    for (var f = 0, i = 0; i < d[D]; i++)
        0 <= Bc(e, d[i]) || (e[s](d[i]), f++);
    e = f == d[D];
    a.className = c[Zb](" ");
    return e
};
var qd = function(a, b) {
    Mc(b, function(b, d) {
        "style" == d ? a[I].cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in pd ? a[z](pd[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a[z](d, b) : a[d] = b
    })
}, pd = {cellpadding: "cellPadding",cellspacing: "cellSpacing",colspan: "colSpan",rowspan: "rowSpan",valign: "vAlign",height: "height",width: "width",usemap: "useMap",frameborder: "frameBorder",maxlength: "maxLength",type: "type"}, sd = function(a, b, c) {
    var d = arguments, e = d[0], f = d[1];
    if (!nd && f && (f[hb] || f[B])) {
        e = ["<", e];
        f[hb] && e[s](' name="', 
        yc(f[hb]), '"');
        if (f[B]) {
            e[s](' type="', yc(f[B]), '"');
            var i = {};
            Oc(i, f);
            f = i;
            delete f[B]
        }
        e[s](">");
        e = e[Zb]("")
    }
    e = m[Za](e);
    if (f)
        P(f) ? e.className = f : gc(f) ? od[L](j, [e][Ka](f)) : qd(e, f);
    2 < d[D] && rd(m, e, d, 2);
    return e
}, rd = function(a, b, c, d) {
    function e(c) {
        c && b[r](P(c) ? a[La](c) : c)
    }
    for (; d < c[D]; d++) {
        var f = c[d];
        hc(f) && !(ic(f) && 0 < f.nodeType) ? Cc(td(f) ? Fc(f) : f, e) : e(f)
    }
}, ud = function(a) {
    for (var b; b = a.firstChild; )
        a[Bb](b)
}, vd = function(a) {
    return a && a[Vb] ? a[Vb][Bb](a) : j
}, td = function(a) {
    if (a && "number" == typeof a[D]) {
        if (ic(a))
            return "function" == 
            typeof a.item || "string" == typeof a.item;
        if (R(a))
            return "function" == typeof a.item
    }
    return k
};
var wd = function(a) {
    wd[" "](a);
    return a
};
wd[" "] = function() {
};
!Xc || md(9);
var xd = !Xc || md(9), yd = Xc && !kd("8");
!Zc || kd("528");
Yc && kd("1.9b") || Xc && kd("8") || Wc && kd("9.5") || Zc && kd("528");
!Yc || kd("8");
var zd = function() {
};
zd[E].nf = k;
zd[E].xc = function() {
    if (!this.nf)
        this.nf = h, this.cb()
};
zd[E].cb = function() {
    this.ah && Ad[L](j, this.ah)
};
var Ad = function(a) {
    for (var b = 0, c = arguments[D]; b < c; ++b) {
        var d = arguments[b];
        hc(d) ? Ad[L](j, d) : d && "function" == typeof d.xc && d.xc()
    }
};
var Bd = function(a, b) {
    la(this, a);
    qa(this, b);
    ia(this, this[Db])
};
T(Bd, zd);
N = Bd[E];
N.cb = function() {
    delete this[B];
    delete this[Db];
    delete this.currentTarget
};
N.zb = k;
N.Bc = h;
N.stopPropagation = function() {
    this.zb = h
};
N.preventDefault = function() {
    this.Bc = k
};
var Cd = function(a, b) {
    a && this[Jb](a, b)
};
T(Cd, Bd);
N = Cd[E];
qa(N, j);
N.relatedTarget = j;
N.offsetX = 0;
N.offsetY = 0;
N.clientX = 0;
N.clientY = 0;
N.screenX = 0;
N.screenY = 0;
N.button = 0;
ja(N, 0);
N.charCode = 0;
N.ctrlKey = k;
N.altKey = k;
N.shiftKey = k;
N.metaKey = k;
N.Hg = k;
N.Ba = j;
N.init = function(a, b) {
    var c = la(this, a[B]);
    Bd[K](this, c);
    qa(this, a[Db] || a.srcElement);
    ia(this, b);
    var d = a.relatedTarget;
    if (d) {
        if (Yc) {
            var e;
            a: {
                try {
                    wd(d.nodeName);
                    e = h;
                    break a
                } catch (f) {
                }
                e = k
            }
            e || (d = j)
        }
    } else if ("mouseover" == c)
        d = a.fromElement;
    else if ("mouseout" == c)
        d = a.toElement;
    this.relatedTarget = d;
    this.offsetX = Zc || a.offsetX !== g ? a.offsetX : a.layerX;
    this.offsetY = Zc || a.offsetY !== g ? a.offsetY : a.layerY;
    this.clientX = a.clientX !== g ? a.clientX : a.pageX;
    this.clientY = a.clientY !== g ? a.clientY : a.pageY;
    this.screenX = a.screenX || 
    0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    ja(this, a[y] || 0);
    this.charCode = a[Ya] || ("keypress" == c ? a[y] : 0);
    this.ctrlKey = a[vb];
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.Hg = ad ? a.metaKey : a[vb];
    this.state = a.state;
    this.Ba = a;
    delete this.Bc;
    delete this.zb
};
N.stopPropagation = function() {
    Cd.m[xb][K](this);
    this.Ba[xb] ? this.Ba[xb]() : this.Ba.cancelBubble = h
};
N.preventDefault = function() {
    Cd.m[Na][K](this);
    var a = this.Ba;
    if (a[Na])
        a[Na]();
    else if (ta(a, k), yd)
        try {
            (a[vb] || 112 <= a[y] && 123 >= a[y]) && ja(a, -1)
        } catch (b) {
        }
};
N.cb = function() {
    Cd.m.cb[K](this);
    this.Ba = j;
    qa(this, j);
    ia(this, j);
    this.relatedTarget = j
};
var Dd = function() {
}, Ed = 0;
N = Dd[E];
N.key = 0;
N.Vb = k;
N.gf = k;
N.init = function(a, b, c, d, e, f) {
    if (R(a))
        this.ef = h;
    else if (a && a[db] && R(a[db]))
        this.ef = k;
    else
        throw ca("Invalid listener argument");
    this.Ac = a;
    this.Ue = b;
    this.src = c;
    la(this, d);
    this.capture = !!e;
    this.Rd = f;
    this.gf = k;
    this.key = ++Ed;
    this.Vb = k
};
N.handleEvent = function(a) {
    return this.ef ? this.Ac[K](this.Rd || this.src, a) : this.Ac[db][K](this.Ac, a)
};
var Fd = {}, Gd = {}, Hd = {}, Id = {}, V = function(a, b, c, d, e) {
    if (b) {
        if (gc(b)) {
            for (var f = 0; f < b[D]; f++)
                V(a, b[f], c, d, e);
            return j
        }
        var d = !!d, i = Gd;
        b in i || (i[b] = {G: 0,ta: 0});
        i = i[b];
        d in i || (i[d] = {G: 0,ta: 0}, i.G++);
        var i = i[d], o = lc(a), q;
        i.ta++;
        if (i[o]) {
            q = i[o];
            for (f = 0; f < q[D]; f++)
                if (i = q[f], i.Ac == c && i.Rd == e) {
                    if (i.Vb)
                        break;
                    return q[f].key
                }
        } else
            q = i[o] = [], i.G++;
        f = Jd();
        f.src = a;
        i = new Dd;
        i[Jb](c, f, a, b, d, e);
        c = i.key;
        f.key = c;
        q[s](i);
        Fd[c] = i;
        Hd[o] || (Hd[o] = []);
        Hd[o][s](i);
        a.addEventListener ? (a == ec || !a.Ve) && a.addEventListener(b, f, d) : 
        a.attachEvent(b in Id ? Id[b] : Id[b] = "on" + b, f);
        return c
    }
    throw ca("Invalid event type");
}, Jd = function() {
    var a = Kd, b = xd ? function(c) {
        return a[K](b.src, b.key, c)
    } : function(c) {
        c = a[K](b.src, b.key, c);
        if (!c)
            return c
    };
    return b
}, Ld = function(a, b, c, d, e) {
    if (gc(b)) {
        for (var f = 0; f < b[D]; f++)
            Ld(a, b[f], c, d, e);
        return j
    }
    d = !!d;
    a: {
        f = Gd;
        if (b in f && (f = f[b], d in f && (f = f[d], a = lc(a), f[a]))) {
            a = f[a];
            break a
        }
        a = j
    }
    if (!a)
        return k;
    for (f = 0; f < a[D]; f++)
        if (a[f].Ac == c && a[f][Ra] == d && a[f].Rd == e)
            return Md(a[f].key);
    return k
}, Md = function(a) {
    if (!Fd[a])
        return k;
    var b = Fd[a];
    if (b.Vb)
        return k;
    var c = b.src, d = b[B], e = b.Ue, f = b[Ra];
    c.removeEventListener ? (c == ec || !c.Ve) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in Id ? Id[d] : Id[d] = "on" + d, e);
    c = lc(c);
    e = Gd[d][f][c];
    if (Hd[c]) {
        var i = Hd[c];
        Dc(i, b);
        0 == i[D] && delete Hd[c]
    }
    b.Vb = h;
    e.bf = h;
    Nd(d, f, c, e);
    delete Fd[a];
    return h
}, Nd = function(a, b, c, d) {
    if (!d.hd && d.bf) {
        for (var e = 0, f = 0; e < d[D]; e++)
            d[e].Vb ? d[e].Ue.src = j : (e != f && (d[f] = d[e]), f++);
        na(d, f);
        d.bf = k;
        0 == f && (delete Gd[a][b][c], Gd[a][b].G--, 0 == Gd[a][b].G && (delete Gd[a][b], 
        Gd[a].G--), 0 == Gd[a].G && delete Gd[a])
    }
}, Od = function(a, b, c) {
    var d = 0, e = b == j, f = c == j, c = !!c;
    if (a == j)
        Mc(Hd, function(a) {
            for (var i = a[D] - 1; 0 <= i; i--) {
                var o = a[i];
                if ((e || b == o[B]) && (f || c == o[Ra]))
                    Md(o.key), d++
            }
        });
    else if (a = lc(a), Hd[a])
        for (var a = Hd[a], i = a[D] - 1; 0 <= i; i--) {
            var o = a[i];
            if ((e || b == o[B]) && (f || c == o[Ra]))
                Md(o.key), d++
        }
    return d
}, Qd = function(a, b, c, d, e) {
    var f = 1, b = lc(b);
    if (a[b]) {
        a.ta--;
        a = a[b];
        a.hd ? a.hd++ : a.hd = 1;
        try {
            for (var i = a[D], o = 0; o < i; o++) {
                var q = a[o];
                q && !q.Vb && (f &= Pd(q, e) !== k)
            }
        }finally {
            a.hd--, Nd(c, d, b, a)
        }
    }
    return da(f)
}, 
Pd = function(a, b) {
    var c = a[db](b);
    a.gf && Md(a.key);
    return c
}, Kd = function(a, b) {
    if (!Fd[a])
        return h;
    var c = Fd[a], d = c[B], e = Gd;
    if (!(d in e))
        return h;
    var e = e[d], f, i;
    if (!xd) {
        var o;
        if (!(o = b))
            a: {
                o = "window.event"[H](".");
                for (var q = ec; f = o[za](); )
                    if (q[f] != j)
                        q = q[f];
                    else {
                        o = j;
                        break a
                    }
                o = q
            }
        f = o;
        o = h in e;
        q = k in e;
        if (o) {
            if (0 > f[y] || f[Kb] != g)
                return h;
            a: {
                var w = k;
                if (0 == f[y])
                    try {
                        ja(f, -1);
                        break a
                    } catch (Q) {
                        w = h
                    }
                (w || f[Kb] == g) && ta(f, h)
            }
        }
        w = new Cd;
        w[Jb](f, this);
        f = h;
        try {
            if (o) {
                for (var M = [], lb = w.currentTarget; lb; lb = lb[Vb])
                    M[s](lb);
                i = e[h];
                i.ta = i.G;
                for (var J = M[D] - 1; !w.zb && 0 <= J && i.ta; J--)
                    ia(w, M[J]), f &= Qd(i, M[J], d, h, w);
                if (q) {
                    i = e[k];
                    i.ta = i.G;
                    for (J = 0; !w.zb && J < M[D] && i.ta; J++)
                        ia(w, M[J]), f &= Qd(i, M[J], d, k, w)
                }
            } else
                f = Pd(c, w)
        }finally {
            M && na(M, 0), w.xc()
        }
        return f
    }
    d = new Cd(b, this);
    try {
        f = Pd(c, d)
    }finally {
        d.xc()
    }
    return f
};
var Rd = function() {
};
T(Rd, zd);
N = Rd[E];
N.Ve = h;
N.Ld = j;
N.addEventListener = function(a, b, c, d) {
    V(this, a, b, c, d)
};
N.removeEventListener = function(a, b, c, d) {
    Ld(this, a, b, c, d)
};
N.dispatchEvent = function(a) {
    var b = a[B] || a, c = Gd;
    if (b in c) {
        if (P(a))
            a = new Bd(a, this);
        else if (a instanceof Bd)
            qa(a, a[Db] || this);
        else {
            var d = a, a = new Bd(b, this);
            Oc(a, d)
        }
        var d = 1, e, c = c[b], b = h in c, f;
        if (b) {
            e = [];
            for (f = this; f; f = f.Ld)
                e[s](f);
            f = c[h];
            f.ta = f.G;
            for (var i = e[D] - 1; !a.zb && 0 <= i && f.ta; i--)
                ia(a, e[i]), d &= Qd(f, e[i], a[B], h, a) && a.Bc != k
        }
        if (k in c)
            if (f = c[k], f.ta = f.G, b)
                for (i = 0; !a.zb && i < e[D] && f.ta; i++)
                    ia(a, e[i]), d &= Qd(f, e[i], a[B], k, a) && a.Bc != k;
            else
                for (e = this; !a.zb && e && f.ta; e = e.Ld)
                    ia(a, e), d &= Qd(f, e, a[B], k, a) && 
                    a.Bc != k;
        a = da(d)
    } else
        a = h;
    return a
};
N.cb = function() {
    Rd.m.cb[K](this);
    Od(this);
    this.Ld = j
};
var Td = function(a, b, c, d, e) {
    if (!Xc && (!Zc || !kd("525")))
        return h;
    if (ad && e)
        return Sd(a);
    if (e && !d)
        return k;
    if (!c && (17 == b || 18 == b))
        return k;
    if (Xc && d && b == a)
        return k;
    switch (a) {
        case 13:
            return !(Xc && md(9));
        case 27:
            return !Zc
    }
    return Sd(a)
}, Sd = function(a) {
    if (48 <= a && 57 >= a)
        return h;
    if (96 <= a && 106 >= a)
        return h;
    if (65 <= a && 90 >= a)
        return h;
    if (Zc && 0 == a)
        return h;
    switch (a) {
        case 32:
        case 63:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
            return h;
        default:
            return k
    }
};
var Ud = function(a, b) {
    a && this.$g(a, b)
};
T(Ud, Rd);
N = Ud[E];
N.Gc = j;
N.kd = j;
N.Xd = j;
N.ld = j;
N.hb = -1;
N.fb = -1;
var Vd = {3: 13,12: 144,63232: 38,63233: 40,63234: 37,63235: 39,63236: 112,63237: 113,63238: 114,63239: 115,63240: 116,63241: 117,63242: 118,63243: 119,63244: 120,63245: 121,63246: 122,63247: 123,63248: 44,63272: 46,63273: 36,63275: 35,63276: 33,63277: 34,63289: 144,63302: 45}, Wd = {Up: 38,Down: 40,Left: 37,Right: 39,Enter: 13,F1: 112,F2: 113,F3: 114,F4: 115,F5: 116,F6: 117,F7: 118,F8: 119,F9: 120,F10: 121,F11: 122,F12: 123,"U+007F": 46,Home: 36,End: 35,PageUp: 33,PageDown: 34,Insert: 45}, Xd = {61: 187,59: 186}, Yd = Xc || Zc && kd("525");
N = Ud[E];
N.Lg = function(a) {
    if (Zc && (17 == this.hb && !a[vb] || 18 == this.hb && !a.altKey))
        this.fb = this.hb = -1;
    Yd && !Td(a[y], this.hb, a.shiftKey, a[vb], a.altKey) ? this[db](a) : this.fb = Yc && a[y] in Xd ? Xd[a[y]] : a[y]
};
N.Mg = function() {
    this.fb = this.hb = -1
};
N.handleEvent = function(a) {
    var b = a.Ba, c, d;
    Xc && "keypress" == a[B] ? (c = this.fb, d = 13 != c && 27 != c ? b[y] : 0) : Zc && "keypress" == a[B] ? (c = this.fb, d = 0 <= b[Ya] && 63232 > b[Ya] && Sd(c) ? b[Ya] : 0) : Wc ? (c = this.fb, d = Sd(c) ? b[y] : 0) : (c = b[y] || this.fb, d = b[Ya] || 0, ad && 63 == d && !c && (c = 191));
    var e = c, f = b.keyIdentifier;
    c ? 63232 <= c && c in Vd ? e = Vd[c] : 25 == c && a.shiftKey && (e = 9) : f && f in Wd && (e = Wd[f]);
    a = e == this.hb;
    this.hb = e;
    b = new Zd(e, d, a, b);
    try {
        this.dispatchEvent(b)
    }finally {
        b.xc()
    }
};
N.$g = function(a, b) {
    this.ld && this.detach();
    this.Gc = a;
    this.kd = V(this.Gc, "keypress", this, b);
    this.Xd = V(this.Gc, "keydown", this.Lg, b, this);
    this.ld = V(this.Gc, "keyup", this.Mg, b, this)
};
N.detach = function() {
    if (this.kd)
        Md(this.kd), Md(this.Xd), Md(this.ld), this.ld = this.Xd = this.kd = j;
    this.Gc = j;
    this.fb = this.hb = -1
};
N.cb = function() {
    Ud.m.cb[K](this);
    this.detach()
};
var Zd = function(a, b, c, d) {
    d && this[Jb](d, g);
    la(this, "key");
    ja(this, a);
    this.charCode = b;
    this.repeat = c
};
T(Zd, Cd);
var $d = function() {
};
(function(a) {
    a.ua = function() {
        return a.Vg || (a.Vg = new a)
    }
})($d);
$d[E].eh = 0;
$d[E].Fa = function() {
    return ":" + (this.eh++)[C](36)
};
$d.ua();
var ae = "StopIteration" in ec ? ec.StopIteration : ca("StopIteration"), be = function() {
};
be[E].next = function() {
    throw ae;
};
be[E].Zg = function() {
    return this
};
var ce = function(a, b) {
    this.eb = {};
    this.Z = [];
    var c = arguments[D];
    if (1 < c) {
        if (c % 2)
            throw ca("Uneven number of arguments");
        for (var d = 0; d < c; d += 2)
            this.set(arguments[d], arguments[d + 1])
    } else
        a && this.Jg(a)
};
N = ce[E];
N.G = 0;
N.Vd = 0;
N.jd = function() {
    this.$d();
    for (var a = [], b = 0; b < this.Z[D]; b++)
        a[s](this.eb[this.Z[b]]);
    return a
};
N.Cc = function() {
    this.$d();
    return this.Z[Ka]()
};
N.Wb = function(a) {
    return l[E][zb][K](this.eb, a)
};
N.$d = function() {
    if (this.G != this.Z[D]) {
        for (var a = 0, b = 0; a < this.Z[D]; ) {
            var c = this.Z[a];
            l[E][zb][K](this.eb, c) && (this.Z[b++] = c);
            a++
        }
        na(this.Z, b)
    }
    if (this.G != this.Z[D]) {
        for (var d = {}, b = a = 0; a < this.Z[D]; )
            c = this.Z[a], l[E][zb][K](d, c) || (this.Z[b++] = c, d[c] = 1), a++;
        na(this.Z, b)
    }
};
N.get = function(a, b) {
    return l[E][zb][K](this.eb, a) ? this.eb[a] : b
};
N.set = function(a, b) {
    l[E][zb][K](this.eb, a) || (this.G++, this.Z[s](a), this.Vd++);
    this.eb[a] = b
};
N.Jg = function(a) {
    var b;
    if (a instanceof ce)
        b = a.Cc(), a = a.jd();
    else {
        b = [];
        var c = 0, d;
        for (d in a)
            b[c++] = d;
        c = [];
        d = 0;
        for (var e in a)
            c[d++] = a[e];
        a = c
    }
    for (e = 0; e < b[D]; e++)
        this.set(b[e], a[e])
};
N.Zg = function(a) {
    this.$d();
    var b = 0, c = this.Z, d = this.eb, e = this.Vd, f = this, i = new be;
    i.next = function() {
        for (; ; ) {
            if (e != f.Vd)
                throw ca("The map has changed since the iterator was created");
            if (b >= c[D])
                throw ae;
            var i = c[b++];
            return a ? i : d[i]
        }
    };
    return i
};
var de = function(a, b, c) {
    this.ac = a || j;
    this.mf = b || j;
    this.Wg = !!c
};
N = de[E];
N.Ub = function() {
    if (!this.V && (this.V = new ce, this.G = 0, this.ac))
        for (var a = this.ac[H]("&"), b = 0; b < a[D]; b++) {
            var c = a[b][v]("="), d = j, e = j;
            0 <= c ? (d = a[b].substring(0, c), e = a[b].substring(c + 1)) : d = a[b];
            d = fa(d[t](/\+/g, " "));
            d = this.Tb(d);
            this.add(d, e ? fa(e[t](/\+/g, " ")) : "")
        }
};
N.V = j;
N.G = j;
N.add = function(a, b) {
    this.Ub();
    this.Te();
    a = this.Tb(a);
    if (this.Wb(a)) {
        var c = this.V.get(a);
        gc(c) ? c[s](b) : this.V.set(a, [c, b])
    } else
        this.V.set(a, b);
    this.G++;
    return this
};
N.Wb = function(a) {
    this.Ub();
    a = this.Tb(a);
    return this.V.Wb(a)
};
N.Cc = function() {
    this.Ub();
    for (var a = this.V.jd(), b = this.V.Cc(), c = [], d = 0; d < b[D]; d++) {
        var e = a[d];
        if (gc(e))
            for (var f = 0; f < e[D]; f++)
                c[s](b[d]);
        else
            c[s](b[d])
    }
    return c
};
N.jd = function(a) {
    this.Ub();
    if (a)
        if (a = this.Tb(a), this.Wb(a)) {
            var b = this.V.get(a);
            if (gc(b))
                return b;
            a = [];
            a[s](b)
        } else
            a = [];
    else
        for (var b = this.V.jd(), a = [], c = 0; c < b[D]; c++) {
            var d = b[c];
            gc(d) ? Gc(a, d) : a[s](d)
        }
    return a
};
N.set = function(a, b) {
    this.Ub();
    this.Te();
    a = this.Tb(a);
    if (this.Wb(a)) {
        var c = this.V.get(a);
        gc(c) ? this.G -= c[D] : this.G--
    }
    this.V.set(a, b);
    this.G++;
    return this
};
N.get = function(a, b) {
    this.Ub();
    a = this.Tb(a);
    if (this.Wb(a)) {
        var c = this.V.get(a);
        return gc(c) ? c[0] : c
    }
    return b
};
ma(N, function() {
    if (this.ac)
        return this.ac;
    if (!this.V)
        return "";
    for (var a = [], b = 0, c = this.V.Cc(), d = 0; d < c[D]; d++) {
        var e = c[d], f = sc(e), e = this.V.get(e);
        if (gc(e))
            for (var i = 0; i < e[D]; i++)
                0 < b && a[s]("&"), a[s](f), "" !== e[i] && a[s]("=", sc(e[i])), b++;
        else
            0 < b && a[s]("&"), a[s](f), "" !== e && a[s]("=", sc(e)), b++
    }
    return this.ac = a[Zb]("")
});
N.Te = function() {
    delete this.lh;
    delete this.ac;
    this.mf && delete this.mf.kh
};
N.Tb = function(a) {
    a = "" + a;
    this.Wg && (a = a[dc]());
    return a
};
if (l[E].__defineGetter__ && !l[x])
    l.defineProperty = function(a, b, c) {
        "value" in c ? a[b] = c.value : ("get" in c && a.__defineGetter__(b, c.get), "set" in c && a.__defineSetter__(b, c.set))
    };
if (l[x] && !l[Pa])
    l.defineProperties = function(a, b) {
        for (var c in b)
            l[x](a, c, b[c])
    };
if (!l.keys)
    l.keys = function(a) {
        if ("object" != typeof a && "function" != typeof a || a == j)
            throw TypeError("Object.keys called on non-object");
        var b = [], c;
        for (c in a)
            a[zb](c) && b[s](c);
        return b
    };
if (!l[ya])
    l.getOwnPropertyNames = l.keys;
if (l[E].__lookupGetter__ && !l[Cb])
    l.getOwnPropertyDescriptor = function(a, b) {
        return a.__lookupGetter__(b) ? {get: a.__lookupGetter__(b),set: a.__lookupSetter__(b)} : {value: a[b]}
    };
if (!l[qb])
    l.create = function(a) {
        var b = function() {
        };
        b.prototype = a;
        return new b
    };
var W = function(a, b) {
    this.x = a;
    this.y = b
};
W[E].ka = function(a) {
    var b = this.x * a.b + this.y * a.d + a.f;
    this.x = this.x * a.a + this.y * a.c + a.e;
    this.y = b
};
var ee = function(a, b, c, d, e, f) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.e = e;
    this.f = f
};
N = ee[E];
N.Hd = function() {
    var a = this.a * this.d - this.b * this.c;
    return new ee(this.d / a, -this.b / a, -this.c / a, this.a / a, (this.c * this.f - this.d * this.e) / a, (this.b * this.e - this.a * this.f) / a)
};
N.Eg = function(a) {
    var b = n.cos(a), a = n.sin(a);
    return new ee(this.a * b - this.c * a, this.b * b - this.d * a, this.a * a + this.c * b, this.b * a + this.d * b, this.e, this.f)
};
N.sc = function(a, b) {
    return new ee(this.a * a, this.b * a, this.c * b, this.d * b, this.e, this.f)
};
N.translate = function(a, b) {
    return new ee(this.a, this.b, this.c, this.d, this.e + a, this.f + b)
};
ma(N, function() {
    return "matrix(" + this.a + " " + this.b + " " + this.c + " " + this.d + " " + this.e + " " + this.f + ")"
});
N.multiply = function(a) {
    return new ee(this.a * a.a + this.c * a.b, this.b * a.a + this.d * a.b, this.a * a.c + this.c * a.d, this.b * a.c + this.d * a.d, this.a * a.e + this.c * a.f + this.e, this.b * a.e + this.d * a.f + this.f)
};
var fe = function(a, b, c, d, e, f, i, o) {
    this.ya = a;
    this.La = b;
    this.xa = c;
    this.Ka = d;
    this.wa = e;
    this.Ja = f;
    this.Aa = i;
    this.Ma = o
};
N = fe[E];
N.lg = function(a) {
    return new fe(this.ya * a.ya, this.ya * a.La + this.La, this.xa * a.xa, this.xa * a.Ka + this.Ka, this.wa * a.wa, this.wa * a.Ja + this.Ja, this.Aa * a.Aa, this.Aa * a.Ma + this.Ma)
};
ua(N, function(a) {
    return new ge(a.Qb * this.ya + this.La, a.Pb * this.xa + this.Ka, a.b * this.wa + this.Ja, this.Je(a.a))
});
N.xg = function(a, b, c) {
    return new ge(a * this.ya + this.La, b * this.xa + this.Ka, c * this.wa + this.Ja, 1)
};
N.Je = function(a) {
    return this.Aa * a + this.Ma / 255
};
N.jg = function() {
    return 1 == this.ya && 0 == this.La && 1 == this.xa && 0 == this.Ka && 1 == this.wa && 0 == this.Ja && 0 == this.Ma
};
var he = function(a, b, c, d) {
    this.Me();
    if (O(a))
        this.C = a;
    if (O(b))
        this.D = b;
    if (O(c))
        this.H = c;
    if (O(d))
        this.I = d
};
N = he[E];
N.Me = function() {
    this.C = p[Ba];
    this.H = p[Ib];
    this.D = p[Ba];
    this.I = p[Ib]
};
N.expand = function(a) {
    if (a.x < this.C)
        this.C = a.x;
    if (a.x > this.H)
        this.H = a.x;
    if (a.y < this.D)
        this.D = a.y;
    if (a.y > this.I)
        this.I = a.y
};
N.add = function(a) {
    this.D += a.D;
    this.I += a.I;
    this.C += a.C;
    this.H += a.H
};
N.ka = function(a) {
    var b = new W(this.C, this.D), c = new W(this.C, this.I), d = new W(this.H, this.D), e = new W(this.H, this.I);
    this.Me();
    b.ka(a);
    c.ka(a);
    d.ka(a);
    e.ka(a);
    this[Fa](b);
    this[Fa](c);
    this[Fa](d);
    this[Fa](e)
};
N.hg = function(a) {
    return (this.C >= a.C && this.C <= a.H || this.H >= a.C && this.H <= a.H || a.C >= this.C && a.C <= this.H) && (this.D >= a.D && this.D <= a.I || this.I >= a.D && this.I <= a.I || a.D >= this.D && a.D <= this.I)
};
N.contains = function(a, b) {
    return a >= this.C && a <= this.H && b >= this.D && b <= this.I
};
N.Ug = function(a) {
    this[Fa](new W(a.C, a.D));
    this[Fa](new W(a.C, a.I));
    this[Fa](new W(a.H, a.D));
    this[Fa](new W(a.H, a.I))
};
var ie = function(a, b, c, d) {
    if (ic(a)) {
        var b = b == j ? l[ya](a) : P(b) ? b[H](",") : b, e = {};
        if (d & 4)
            e.writable = h;
        if (d & 2)
            e.configurable = h;
        if (d & 1)
            e.enumerable = h;
        if (c & 4)
            e.writable = k;
        if (c & 2)
            e.configurable = k;
        if (c & 1)
            e.enumerable = k;
        for (c = 0; c < b[D]; ++c)
            (d = l[Cb](a, b[c])) && d.configurable && l[x](a, b[c], e)
    }
}, je = function() {
};
l[x](je[E], "unwatch", {get: function() {
        return function(a) {
            if (1 > arguments[D])
                return k;
            var b = this[a];
            delete this[a];
            this[a] = b;
            return h
        }
    }});
l[x](je[E], "watch", {get: function() {
        return function(a, b, c) {
            if (2 > arguments[D])
                return k;
            for (var d = this, e = j, f = this; l.getPrototypeOf(f); f = l.getPrototypeOf(f))
                if (l[Cb](f, a) != j) {
                    d = f;
                    e = l[Cb](f, a);
                    break
                }
            if (!e || e.configurable) {
                var i = d[a];
                delete d[a];
                l[x](d, a, {get: function() {
                        return i
                    },set: function(d) {
                        return i = b[K](this, a, i, d, c)
                    },configurable: h})
            }
            return h
        }
    }});
var ke = {};
je.registerClass = function(a, b) {
    if (2 > arguments[D])
        return k;
    ke[a] = b;
    return h
};
ie(je, j, 3);
var le = function(a, b, c, d, e, f, i) {
    O(a) && O(b) ? (c = O(c) ? c : 1, d = O(d) ? d : 0, e = O(e) ? e : 0, f = O(f) ? f : 0, i = O(i) ? i : 0, this.uf = new Date(a, b, c, d, e, f, i)) : this.uf = O(a) ? new Date(a) : new Date;
    if (!le[E].getDate) {
        a = l[ya](Date[E]);
        for (b = 0; b < a[D]; b++)
            "constructor" != a[b] && (le[E][a[b]] = oc(function(a, b) {
                return this.uf[a](b)
            }, a[b]))
    }
};
le.UTC = Date.UTC;
ie(le, j, 3);
var me = function() {
    switch (arguments[D]) {
        case 0:
            break;
        case 1:
            na(this, arguments[0]);
            break;
        default:
            for (var a = 0; a < arguments[D]; ++a)
                this[s](arguments[a])
    }
};
T(me, ba);
var ne = function() {
}, oe = {}, pe = 0, qe = 0, re = [];
ne.addListener = function(a) {
    O(a) && "onKeyUp" in a && "onKeyDown" in a && (0 <= Bc(re, a) || re[s](a))
};
ne.getAscii = function() {
    return qe
};
ne.getCode = function() {
    return pe
};
ne.isDown = function(a) {
    return oe[a] ? h : k
};
ne.isToggled = function() {
    return k
};
ne.removeListener = function(a) {
    Dc(re, a)
};
l[Pa](ne, {BACKSPACE: {value: 8,writable: k},CAPSLOCK: {value: 20,writable: k},CONTROL: {value: 17,writable: k},DELETEKEY: {value: 46,writable: k},DOWN: {value: 40,writable: k},END: {value: 35,writable: k},ENTER: {value: 13,writable: k},ESCAPE: {value: 27,writable: k},HOME: {value: 36,writable: k},INSERT: {value: 45,writable: k},LEFT: {value: 37,writable: k},PGDN: {value: 34,writable: k},PGUP: {value: 33,writable: k},RIGHT: {value: 39,writable: k},SHIFT: {value: 16,writable: k},SPACE: {value: 32,writable: k},TAB: {value: 9,writable: k},UP: {value: 38,
        writable: k}});
V(m, "keyup", function(a) {
    pe = a[y];
    oe[a[y]] = k;
    for (a = 0; a < re[D]; ++a)
        re[a].onKeyUp()
}, k);
V(new Ud(m), "key", function(a) {
    pe = a[y];
    qe = a[Ya];
    oe[a[y]] = h;
    for (a = 0; a < re[D]; ++a)
        re[a].onKeyDown()
}, k);
ie(ne, j, 3);
var se = function(a) {
    this.N = a;
    this.Ra = [];
    ie(this, j, 3)
};
N = se[E];
N.Ha = h;
N.update = function() {
    this.N.Kb()[I].cursor = this.Ha ? this.N.$c() ? "pointer" : this.N.zg() ? "pointer" : !this.N[$b]() && this.N.Ag() ? "pointer" : "default" : "none"
};
N.og = function() {
    for (var a = 0; a < this.Ra[D]; a++) {
        var b = this.Ra[a], c = this.N.j().k(b, "onMouseDown");
        if (c in b)
            b[c]()
    }
};
N.pg = function() {
    for (var a = 0; a < this.Ra[D]; a++) {
        var b = this.Ra[a], c = this.N.j().k(b, "onMouseMove");
        if (c in b)
            b[c]()
    }
};
N.qg = function() {
    for (var a = 0; a < this.Ra[D]; a++) {
        var b = this.Ra[a], c = this.N.j().k(b, "onMouseUp");
        if (c in b)
            b[c]()
    }
};
se[E].addListener = function(a) {
    if (O(a)) {
        var b = this.N.j().k(a, "onMouseDown"), c = this.N.j().k(a, "onMouseMove"), d = this.N.j().k(a, "onMouseUp");
        if (b in a || c in a || d in a)
            0 <= Bc(this.Ra, a) || this.Ra[s](a)
    }
};
se[E].hide = function() {
    var a = this.Ha;
    this.Ha = k;
    this[Wb]();
    return a
};
se[E].show = function() {
    var a = this.Ha;
    this.Ha = h;
    this[Wb]();
    return a
};
se[E].removeListener = function(a) {
    Dc(this.Ra, a)
};
ie(se[E], j, 3);
var xe = function(a, b, c, d) {
    var e = j;
    switch (a[B]) {
        case 2:
            d = te("linearGradient", a, c);
            d[z]("x1", -16384);
            d[z]("x2", 16384);
            e = d;
            break;
        case 3:
        case 4:
            d = te("radialGradient", a, c);
            d[z]("r", 16384);
            d[z]("cx", 0);
            d[z]("cy", 0);
            a[ob].f && c.sb(d, "fx", a[ob].f, function(a) {
                return 16384 * a
            });
            e = d;
            break;
        case 5:
        case 7:
            if (c = d.Da[a[Da]])
                b = ue(ve(a[ac]), b[0]), e = we(a, b, c.h[Ca], c.h[Xb], d)
    }
    if (a[ob] && a[ob].spread)
        switch (a[ob].spread) {
            case 1:
                e[z]("spreadMethod", "reflect");
                break;
            case 2:
                e[z]("spreadMethod", "repeat")
        }
    if (a[ob] && a[ob].interpolation)
        switch (a[ob].interpolation) {
            case 1:
                e[z]("color-interpolation", 
                "linearRGB")
        }
    if (e != j)
        e.id = $d.ua().Fa();
    return e
}, te = function(a, b, c) {
    a = m[F]("http://www.w3.org/2000/svg", a);
    a[z]("gradientUnits", "userSpaceOnUse");
    b[ac] && c.sb(a, "gradientTransform", b[ac], ve);
    for (var d = 0; d < b[ob].stops[D]; d++)
        a[r](ye(b[ob].stops[d], c));
    return a
}, ye = function(a, b) {
    var c = m[F]("http://www.w3.org/2000/svg", "stop");
    b.sb(c, "offset", a.offset, function(a) {
        return a / 255
    });
    b.Ec(c, "stop-color", a[Qa]);
    b.Dc(c, "stop-opacity", a[Qa]);
    return c
}, ze = function(a, b, c, d) {
    switch (b[B]) {
        case 1:
            c.Ec(a, "fill", b[Qa]);
            c.Dc(a, "fill-opacity", b[Qa]);
            break;
        case 2:
        case 3:
        case 4:
            a[z]("fill", "url(#" + d.id + ")")
    }
};
function Ae(a, b) {
    this.Ze = a;
    this.$e = b
}
var ue = function(a, b) {
    function c(a, b) {
        e.x = a;
        e.y = b;
        e.ka(d);
        f[s](e.x);
        i[s](e.y)
    }
    var d = a.Hd(), e = new W(0, 0), f = [], i = [];
    c(b[Nb], b[va]);
    c(b[Rb], b[va]);
    c(b[Nb], b[Aa]);
    c(b[Rb], b[Aa]);
    return new Ae(f, i)
}, we = function(a, b, c, d, e) {
    var f = m[F]("http://www.w3.org/2000/svg", "g");
    f.id = $d.ua().Fa();
    var i = m[F]("http://www.w3.org/2000/svg", "g"), o = m[F]("http://www.w3.org/2000/svg", "g");
    o[r](f);
    o[r](i);
    for (var a = e.Da[a[Da]].na(), q = n[Ja](n.min[L](n, b.Ze) / c), e = n.ceil(n.max[L](n, b.Ze) / c); q < e; q++) {
        var w = m[F]("http://www.w3.org/2000/svg", 
        "use");
        w[Oa]("http://www.w3.org/1999/xlink", "href", "#" + a.id);
        w[z]("x", q * c);
        f[r](w)
    }
    c = n[Ja](n.min[L](n, b.$e) / d);
    for (b = n.ceil(n.max[L](n, b.$e) / d); c < b; c++)
        a = m[F]("http://www.w3.org/2000/svg", "use"), a[Oa]("http://www.w3.org/1999/xlink", "href", "#" + f.id), a[z]("y", c * d), i[r](a);
    return o
};
var Be = function(a, b, c, d) {
    if (b != j) {
        if (b[kb] != j)
            a[z]("stroke", "url(#" + d.id + ")");
        else
            d = b[Qa] != j ? b[Qa] : [0], c.Ec(a, "stroke", d), c.Dc(a, "stroke-opacity", d);
        c.sb(a, "stroke-width", b[Ca], function(a) {
            return n.max(14, a)
        });
        c = "round";
        if (b.cap != j)
            switch (b.cap) {
                case 1:
                    c = "butt";
                    break;
                case 2:
                    c = "square"
            }
        a[z]("stroke-linecap", c);
        c = "round";
        if (b.joint != j)
            switch (b.joint) {
                case 1:
                    c = "bevel";
                    break;
                case 2:
                    c = "miter"
            }
        a[z]("stroke-linejoin", c);
        b.miter != j && a[z]("stroke-miterlimit", b.miter)
    }
};
var Ce = function() {
    this.L = {}
};
Ce[E].ib = function(a, b) {
    this.L[a] = b
};
Ce[E].Pg = function(a) {
    return this.L[a] ? this.L[a] : j
};
Ce[E].Af = function(a, b) {
    this.L[a] && this.L[a].Rg(b)
};
var Ee = function(a) {
    this.n = [];
    this.vf = a;
    this.ad = [];
    this.q = new De(this)
};
N = Ee[E];
N.Hb = function(a, b) {
    a.depth = b;
    Lc(this.n, a, function(a, b) {
        return a[eb] - b[eb]
    });
    Fe(this.r, a)
};
N.Zd = function(a) {
    return Jc(this.n, function(a, c) {
        return a - c[eb]
    } || Kc, k, a)
};
N.Mc = function(a) {
    a = this.Zd(a);
    return 0 <= a ? this.nd(a) : j
};
N.nd = function(a, b) {
    var c = this.n[a];
    b != h && (c.He() ? (c.Xa(), this.ad[s](c)) : (Ge(this.r, c), c.J(), this.q.Ge(c)));
    this.n[Yb](a, 1);
    c.depth = g;
    return c
};
N.of = function(a) {
    a = this.Zd(a);
    return 0 > a ? j : this.nd(a, h)
};
N.yg = function(a) {
    for (var b = 0; b < this.n[D]; ++b)
        if (this.n[b] == a)
            return this.nd(b)
};
N.Nc = function(a) {
    a = this.Zd(a);
    return 0 <= a ? this.n[a] : j
};
N.forEach = function(a) {
    for (var b = this.n[D] - 1; 0 <= b; --b)
        a(this.n[b])
};
N.Fg = function(a) {
    for (var b = 0; b < this.n[D]; ++b)
        if (this.n[b][Xa]() == a)
            return this.n[b];
    return j
};
N.Gg = function() {
    var a = this.n[D];
    return 0 < a ? n.max(0, this.n[a - 1][eb] + 1) : 0
};
N.J = function() {
    for (var a = 0; a < this.n[D]; a++)
        this.nd(a)
};
N.Xa = function() {
    for (var a = 0; a < this.n[D]; a++)
        this.n[a].Xa()
};
N.Bg = function() {
    for (var a = 0; a < this.ad[D]; a++) {
        var b = this.ad[a];
        b.J();
        this.q.Ge(b);
        Ge(this.r, b)
    }
    this.ad = []
};
N.Le = function(a) {
    this.r = a;
    for (var b = 0; b < this.n[D]; ++b)
        Fe(a, this.n[b])
};
N.uc = function(a, b) {
    this.r && (Ge(this.r, a), b && Fe(this.r, a, b))
};
N.Wd = function(a, b) {
    var c = this.of(a), d = this.of(b);
    c && this.Hb(c, b);
    d && this.Hb(d, a)
};
var Fe = function(a, b, c) {
    a && (O(c) || (c = b[Xa]()), c && !a[zb](c) && (a[c] = b.t()))
}, Ge = function(a, b) {
    if (a) {
        var c = b[Xa]();
        c && b.t() === a[c] && delete a[c]
    }
};
Ee[E].ug = function(a) {
    for (var b = 0, c = 0; b < this.n[D] || c < a.n[D]; ) {
        var d = this.n[b], e = a.n[c], f = d ? d[eb] : p[Ba], i = e ? e[eb] : p[Ba];
        i < f ? (e[Hb](), this.Hb(e, i), c++, b++) : i > f ? d.ec() ? b++ : this.Mc(f) : (U(f == i), U(d && e), d.ec() || (!d.Na() || !e.Na() || d.Eb != e.Eb ? (this.Mc(i), e[Hb](), this.Hb(e, i)) : (d[Ta](e.Q()), d.Ua(e.Ca), e.J())), b++, c++)
    }
};
var De = function(a) {
    this.s = a;
    this.ed = [];
    this.qc = {}
};
De[E].Ge = function(a) {
    this.ed[s](a)
};
De[E].w = function() {
    if (!this.M)
        this.M = m[F]("http://www.w3.org/2000/svg", "g");
    this.ue();
    for (var a = j, b = p[Ib], c = this.s.n, d = 0; d < c[D]; ++d) {
        var e = c[d], f = e.q;
        e[eb] > b && (a = j);
        f.w();
        f.gg(a);
        var i = f.na();
        if (e.yd()) {
            var o = lc(e), q = this.qc[o];
            if (!O(q))
                q = m[F]("http://www.w3.org/2000/svg", "clipPath"), q.id = f.Ee(), this.qc[o] = q;
            ud(q);
            f = [];
            He(i, "", f);
            for (i = 0; i < f[D]; i++)
                q[r](f[i]);
            i = q
        }
        if (this.M[gb][d] != i)
            q = this.M, q.insertBefore(i, q[gb][d] || j);
        if (e.yd())
            a = e, b = e.Oc
    }
    for (; this.M[gb][D] > d; )
        this.M[Bb](this.M[gb][d])
};
De[E].na = function() {
    return this.M
};
var He = function(a, b, c) {
    var d = a.nodeName[dc](), b = a.hasAttribute("transform") ? b ? b + " " + a.getAttribute("transform") : a.getAttribute("transform") : b;
    if ("path" == d || "text" == d || "use" == d)
        "none" != a.getAttribute("fill") && (a = a.cloneNode(h), a[z]("transform", b), c[s](a));
    else if ("g" == d)
        for (d = 0; d < a[gb][D]; d++)
            He(a[gb][d], b, c)
};
De[E].ue = function() {
    for (var a = 0; a < this.ed[D]; ++a) {
        var b = this.ed[a], c = b.q;
        vd(c.na());
        b = lc(b);
        O(this.qc[b]) && (vd(this.qc[b]), delete this.qc[b]);
        c.J()
    }
    this.ed = []
};
De[E].Ga = function() {
    for (var a = this.s.n, b = 0; b < a[D]; ++b)
        a[b].T(8)
};
var Ie = function(a) {
    this.g = a;
    this.Oc = g;
    this.pc = "";
    this.wb = j;
    this.B = 1;
    this.kb = k;
    this.va = [];
    this.Ha = h;
    this.Eb = 0;
    this.kc = this.xe = k;
    this.Xc = new ee(1, 0, 0, 1, 0, 0);
    this.Ca = new fe(1, 0, 1, 0, 1, 0, 1, 0)
};
N = Ie[E];
N.Oa = function(a) {
    l[x](a, "__swiffy_d", {value: this});
    l[Pa](a, Je)
};
N.Qa = function(a) {
    a(this)
};
N.t = function() {
    if (!this.r)
        this.r = new Ke, this.Oa(this.r);
    return this.r
};
N.ia = function() {
    this.fh = h
};
N.ec = function() {
    return !!this.fh
};
N.setTransform = function(a) {
    if (this.Xc != a)
        this.T(2), this.Xc = a
};
N.Q = function() {
    return this.Xc
};
N.yd = function() {
    return O(this.Oc)
};
N.zf = function(a) {
    U(this.Oc === g);
    this.Oc = a
};
N.T = function(a) {
    a |= this.B;
    a != this.B && this.wb != j && this.wb.Yc();
    this.B = a
};
N.Yc = function() {
    !this.kb && this[xa]() != j && this[xa]().Yc();
    this.kb = h
};
N.Lc = function(a) {
    this.Eb = a
};
N.J = function() {
    this.kc = h
};
N.Xa = function() {
    this.xe = h
};
N.Ua = function(a) {
    if (this.Ca != a)
        this.T(8), this.Ca = a
};
N.Ia = function() {
    return this.q.Ia()
};
N.rd = function(a) {
    if (this.va != a)
        this.T(4), this.va = a
};
N.lb = function(a) {
    a = "" + a;
    a != this.pc && this.wb && this.wb.uc(this, a);
    this.pc = a
};
N.getName = function() {
    return this.pc
};
N.Vc = function(a) {
    this.wb = a
};
N.getParent = function() {
    return this.wb
};
N.Sg = function(a) {
    if (this.Ha != a)
        this.T(16), this.Ha = a
};
N.Na = function() {
    return k
};
N.He = function() {
    return k
};
N.vb = function() {
    return this.q.vb()
};
N.Ea = function() {
};
sa(N, function() {
});
var Le = function(a) {
    this.i = a;
    this.Ce = this.fa = this.Va = this.ja = j;
    this.nb = new fe(1, 0, 1, 0, 1, 0, 1, 0);
    this.va = [];
    this.Fb = j;
    this.K = [];
    this.xf = "undefined" != eval("typeof SVGFilterElement")
};
N = Le[E];
N.na = function() {
    return this.M
};
N.gd = function(a) {
    return Me(a, this.nb)
};
N.hf = function(a) {
    return Ne(a, this.nb)
};
N.w = function() {
    var a = this.i.B;
    if (a || this.i.kb) {
        a & 512 && (a = a ^ 512 | 1, this.J());
        if (a & 1)
            a = a ^ 1 | 8, this.M = this.qe = this.ub();
        a & 16 && (a ^= 16, this.M[z]("display", this.i.Ha ? "inline" : "none"));
        a & 2 && (a ^= 2, this.qe[z]("transform", this.Df()));
        if (a & 4) {
            if (a = a ^ 4 | 8, this.xf) {
                var b = "SourceGraphic";
                if (this.ja)
                    this.va = [], ud(this.ja), this.Fb = j;
                for (var c = 0; c < this.i.va[D]; ++c) {
                    var d = new Oe[this.i.va[c][B]](this, this.i.va[c]);
                    if (d)
                        this.va[s](d), d[L](b), b = d[rb](), d = d.region, this.Fb == j ? this.Fb = d : d != j && this.Fb.add(d)
                }
                var e = this;
                this.i.g.pe(function() {
                    e.re()
                });
                this.Va && (U(!!this.ja), 0 < this.ja[gb][D] ? this.Va[z]("filter", "url(#" + this.ja.id + ")") : this.Va[Tb]("filter"))
            }
        } else
            this.ja && (e = this, this.i.g.pe(function() {
                e.re()
            }));
        a & 8 && (a ^= 8, this.Cf(), this.Ga());
        this.i.B = a
    }
};
N.Df = function() {
    var a = this.i.Xc[C]();
    O(this.Dd) && (a += " " + this.Dd);
    return a
};
N.gg = function(a) {
    if (this.Ce != a) {
        if (a) {
            if (!this.fa) {
                this.fa = m[F]("http://www.w3.org/2000/svg", "g");
                var b = this.M, c = b[Vb];
                c && c.replaceChild(this.fa, b);
                this.fa[r](this.M);
                this.M = this.fa
            }
            this.fa[z]("clip-path", "url(#" + a.q.Ee() + ")")
        } else
            this.fa && this.fa[Tb]("clip-path");
        this.Ce = a
    }
};
N.Ee = function() {
    if (!O(this.Yd))
        this.Yd = $d.ua().Fa(), this.M.id = this.Yd;
    return this.Yd
};
N.J = function() {
    this.ja != j && vd(this.ja)
};
N.vb = function() {
    this.i.g.w();
    var a = this.M.getBBox(), b = [];
    b[0] = new W(a.x, a.y);
    b[1] = new W(a.x, a.y + a[Xb]);
    b[2] = new W(a.x + a[Ca], a.y);
    b[3] = new W(a.x + a[Ca], a.y + a[Xb]);
    for (var a = new he, c = 0; c < b[D]; ++c)
        a[Fa](b[c]);
    return a
};
N.Ia = function() {
    this.i.g.w();
    var a;
    a = j;
    for (var b = this.M; b instanceof SVGElement; ) {
        if (b[ac]) {
            var c = b[ac].baseVal.consolidate();
            c != j && (a = a != j ? c[Ha].multiply(a) : c[Ha])
        }
        b = b[Vb]
    }
    return a != j ? new ee(a.a, a.b, a.c, a.d, a.e, a.f) : new ee(1, 0, 0, 1, 0, 0)
};
N.za = function() {
    if (this.ja == j && (this.ja = m[F]("http://www.w3.org/2000/svg", "filter"), this.ja.id = $d.ua().Fa(), this.i.g.Db[r](this.ja), this.Va == j)) {
        this.Va = m[F]("http://www.w3.org/2000/svg", "g");
        var a = this.M, b = a[Vb];
        b && b.replaceChild(this.Va, a);
        if (this.fa == j)
            this.fa = m[F]("http://www.w3.org/2000/svg", "g"), this.fa[r](this.M);
        this.Va[r](this.fa);
        this.M = this.Va
    }
    return this.ja
};
N.re = function() {
    if (this.Fb != j) {
        var a = this.Fb, b = this.fa.getBBox(), c = this.za(), d = a.H - a.C + b[Ca], e = a.I - a.D + b[Xb], f = a.C + b.x, a = a.D + b.y;
        c[z]("filterUnits", "userSpaceOnUse");
        c[z]("x", f);
        c[z]("y", a);
        c[z]("width", d);
        c[z]("height", e)
    }
};
N.Cf = function() {
    var a = this.i[xa]();
    this.nb = a ? a.q.nb.lg(this.i.Ca) : this.i.Ca
};
N.Rf = function(a, b) {
    this.K[s](function() {
        a[z]("opacity", this.hf(b))
    })
};
N.Ed = function(a, b, c) {
    this.K[s](function() {
        var d = this.gd(c);
        a[z](b, d[C]());
        a[z](b + "-opacity", d.a)
    })
};
N.Ga = function() {
    for (var a = this.K, b = 0; b < a[D]; ++b)
        a[b][K](this);
    if (this.va)
        for (b = 0; b < this.va[D]; ++b)
            this.va[b].Ga()
};
var Pe = function(a) {
    Ie[K](this, a);
    this.qa = 1;
    this.Sd = k
};
T(Pe, Ie);
var Qe = {uh: 1,sh: 2,yh: 4,wh: 8,xh: 16,Eh: 32,qh: 64,vh: 128,ph: 256,Ch: 512,Dh: 1024,Bh: 2048,Ah: 4096,zh: 8192,rh: 16384,nh: 32768,mh: 65536,th: 131072,oh: 262144}, Re = {256: "onDragOver",512: "onRollOut",1024: "onRollOver",2048: "onReleaseOutside",4096: "onRelease",8192: "onPress",262144: "onDragOut"}, Se = function(a, b) {
    l[x](this, a, {value: b});
    var c = this.__swiffy_d;
    c && c.Ad()
}, Te = function() {
};
N = Pe[E];
N.isEnabled = function() {
    return this.Sd && this.t().enabled != k && !this.kc
};
N.Ad = function() {
    if (!this.Sd)
        this.T(128), this.Sd = h
};
N.sa = function(a) {
    this.Nb(a.qa);
    this.Qd(a.Ba)
};
N.Qd = function(a) {
    var b = Re[a];
    b && this.t()[b] && this.g.j().Ob(S(function() {
        this.t()[b]()
    }, this));
    this.g.j().tb()
};
N.Nb = function(a) {
    if (this.qa != a)
        this.qa = a
};
N.trackAsMenu = function() {
    return k
};
N.fg = function(a) {
    this[Eb]() && (this.g.kg(this), this.g[$b]() == k && 1 == this.qa ? this.sa(Ue) : this[Pb]() && this.g.$c() == k && 1 == this.qa ? this.sa(Ve) : this.g.Jd(this) && 2 == this.qa && this.sa(We), a[xb]())
};
N.td = function() {
    this.g.Kd(this);
    this[Eb]() ? this.g[$b]() == k && 2 == this.qa ? this.sa(Xe) : this[Pb]() && this.g.$c() == k && 4 == this.qa ? this.sa(Ye) : this.g.Jd(this) && 4 == this.qa && this.sa(Ze) : this.Nb(1)
};
N.sd = function(a) {
    this[Eb]() ? (this[Pb]() ? this.g[Ia](this) : this.g[Ia](this, h, S(this.mg, this)), a[xb](), this.sa($e)) : (this.g.Kd(this), this.Nb(1))
};
N.ud = function(a) {
    if (this[Eb]()) {
        var b = this[Pb]() && this.g.$c() == k || this.g.Jd(this);
        this.g[jb](this);
        a[xb]();
        b ? this.sa(af) : this.sa(Ue)
    } else
        this.g.Kd(this), this.Nb(1)
};
N.mg = function() {
    this[Eb]() && this.sa(bf)
};
var cf = function(a) {
    Le[K](this, a);
    this.pa = []
};
T(cf, Le);
cf[E].w = function() {
    cf.m.w[K](this);
    if (this.i.B & 128) {
        this.i.B ^= 128;
        var a = this.Fe();
        a[I].pointerEvents = "all";
        var b = this.i, c;
        "createTouch" in m || (c = V(a, "mouseover", b.fg, k, this.i), this.pa[s](c));
        c = V(a, "mouseout", b.td, k, this.i);
        this.pa[s](c);
        c = V(a, "createTouch" in m ? "touchend" : "mouseup", b.ud, k, this.i);
        this.pa[s](c);
        c = V(a, "createTouch" in m ? "touchstart" : "mousedown", b.sd, k, this.i);
        this.pa[s](c)
    }
};
cf[E].Ie = function(a, b, c) {
    var d, e;
    if (a)
        d = "keydown", e = function(b) {
            return b[y] == a
        };
    else if (b)
        d = "keypress", e = function(a) {
            return a[Ya] == b
        };
    else
        return;
    this.pa[s](V(m, d, function(a) {
        e(a) && (c(), a[xb]())
    }, h, this.i))
};
cf[E].J = function() {
    cf.m.J[K](this);
    for (var a = 0; a < this.pa[D]; a++)
        Md(this.pa[a])
};
var df = function(a, b, c) {
    this.pc = a;
    this.qa = b;
    this.Ba = c
};
df[E].getName = function() {
    return this.pc
};
var Ve = new df("IdleToOverDown", 4, 256), Ue = new df("IdleToOverUp", 2, 1024), bf = new df("OutDownToIdle", 1, 2048), We = new df("OutDownToOverDown", 4, 256), Ye = new df("OverDownToIdle", 1, 262144), Ze = new df("OverDownToOutDown", 2, 262144), af = new df("OverDownToOverUp", 2, 4096), Xe = new df("OverUpToIdle", 1, 512), $e = new df("OverUpToOverDown", 4, 8192);
var ff = function(a, b) {
    Pe[K](this, b.g);
    this.h = a;
    this.mb = b;
    this.n = new Ee(k);
    this.xd = new Ee(k);
    this.q = new ef(this);
    this.h[tb] && this.Xf(this.h[tb]);
    this.zd(this.n, 1);
    this.zd(this.xd, 8);
    this.Ad()
};
T(ff, Pe);
N = ff[E];
N.Oa = function(a) {
    ff.m.Oa[K](this, a);
    this.n.Le(a)
};
N.Qa = function(a) {
    this.n[$a](function(b) {
        b.Qa(a)
    });
    ff.m.Qa[K](this, a)
};
N.Xf = function(a) {
    for (var b = 0; b < a[D]; b++) {
        var c = a[b];
        c.convertedActions = this.mb.j().jb(c[tb]);
        if (c[y] || c.keyAscii) {
            var d = S(this.Oe, this, c);
            this.q.Ie(c[y], c.keyAscii, d)
        }
    }
};
N.Nb = function(a) {
    a != this.qa && this.zd(this.n, a, this.qa);
    ff.m.Nb[K](this, a);
    var b = this.q;
    setTimeout(function() {
        b.w()
    }, 0)
};
N.Oe = function(a) {
    this.Be(a);
    this.g.j().tb()
};
N.$f = function(a) {
    var b = this.h[tb];
    if (b) {
        for (var c = 0; c < b[D]; c++) {
            var d = b[c];
            d[zb](a[Xa]()) && this.Be(d)
        }
        this.g.j().tb()
    }
};
N.Xe = function() {
    return this.mb
};
N.sa = function(a) {
    var b = this.h.sounds;
    b && b[zb](a[Xa]()) && this.g.Gb().Ae(b[a[Xa]()]);
    this.$f(a);
    ff.m.sa[K](this, a)
};
N.trackAsMenu = function() {
    return this.h[Pb]
};
N.Be = function(a) {
    this.mb.j().Se(new gf(a.convertedActions, this.Xe()))
};
N.zd = function(a, b, c) {
    this.T(32);
    var d = this.h.records;
    if (d) {
        if (O(c))
            for (var e = 0; e < d[D]; e++) {
                var f = d[e], i = f[bb] & c, o = f[bb] & b;
                i && !o && a.Mc(f[eb])
            }
        for (e = 0; e < d[D]; e++)
            if (f = d[e], i = f[bb] & c, (o = f[bb] & b) && !i)
                i = this.mb.qd(f.id), i.Na() && 8 != b && i.lb(this.g.ee()), i.Vc(this), i.Ea(), i[Hb](), a.Hb(i, f[eb]), f[ac] && i[Ta](ve(f[ac])), f[Qb] && i.rd(f[Qb]), f[Mb] && i.Ua(hf(f[Mb]))
    }
};
N.Na = function() {
    return h
};
N.uc = function(a, b) {
    this.n.uc(a, b)
};
var ef = function(a) {
    cf[K](this, a)
};
T(ef, cf);
ef[E].ub = function() {
    var a = this.i.n.q;
    a.w();
    this.i.xd.q.w();
    var b = m[F]("http://www.w3.org/2000/svg", "g");
    this.Id = this.i.xd.q.na().cloneNode(h);
    this.Id[z]("style", "visibility:hidden;");
    b[r](this.Id);
    b[r](a.na());
    return b
};
ef[E].w = function() {
    ef.m.w[K](this);
    var a = this.i.B;
    if (this.i.kb || a & 32)
        a &= -33, this.i.kb = k, this.i.n.q.w();
    this.i.B = a
};
ef[E].Ga = function() {
    ef.m.Ga[K](this);
    this.i.n.q.Ga();
    this.i.Yc()
};
ef[E].Fe = function() {
    return this.Id
};
var kf = function(a, b) {
    Ie[K](this, b.g);
    this.h = a;
    this.mb = b;
    this.q = new jf(this);
    this.h[ub] && b.g.j().Wf(this.h[ub], this, b, this.h[Ea]);
    this.h[Ea] && !O(this.Ic) && this.Cd(this.h[Ea])
};
T(kf, Ie);
kf[E].Cd = function(a) {
    if (this.Ic != a)
        this.T(64), this.Ic = a
};
kf[E].J = function() {
    kf.m.J[K](this);
    this.h[ub] && this.mb.j().eg(this.h[ub], this, this.mb)
};
kf[E].Na = function() {
    return this.h[ub] != g
};
var jf = function(a) {
    Le[K](this, a)
};
T(jf, Le);
jf[E].w = function() {
    jf.m.w[K](this);
    if (this.i.B & 64 && (this.i.B ^= 64, ud(this.wd), O(this.i.Ic))) {
        var a = "" + this.i.Ic;
        if (this.i.h.html) {
            this.Vf(this.wd, a, this.i.h.multiline);
            for (var b = this.he; b < this.K[D]; ++b)
                this.K[b][K](this)
        } else
            for (var b = this.wd, a = a[H](/\r\n|\r|\n/g), c = 0; c < a[D]; c++)
                if ("" == a[c]) {
                    var d = m[Za]("br");
                    b[r](d)
                } else {
                    var d = m[La](a[c]), e = m[Za]("p");
                    e[I].margin = 0;
                    e[r](d);
                    b[r](e)
                }
    }
};
jf[E].ub = function() {
    var a = this.i.h, b = a.bounds, c = m[F]("http://www.w3.org/2000/svg", "g");
    this.K = [];
    var d = m[F]("http://www.w3.org/2000/svg", "foreignObject"), e = m[Za]("body");
    d[r](e);
    var f = m[Za]("div");
    this.wd = f;
    var i = this.i.g.Da[a.font], o = 1.15;
    if (i)
        f[I].fontFamily = "'" + i.je + "'", o = i.le;
    pa(this, o);
    if (!a.html) {
        var i = f[I], q = a[Xb], w = a.leading | 0;
        oa(i, q + "px");
        pa(i, o * q + w + "px")
    }
    if (a.bold)
        f[I].fontWeight = "bold";
    if (a.italic)
        f[I].fontStyle = "italic";
    f[I].textAlign = lf(a.align);
    if (a.wrap) {
        if (!a.html)
            f[I].whiteSpace = 
            "pre-wrap"
    } else
        f[I].whiteSpace = "nowrap";
    f[I].wordWrap = "break-word";
    if (a.selectable)
        f[I].pointerEvents = "all";
    this.ve(f[I], a[Qa]);
    this.Rf(d, a[Qa]);
    f[I].textIndent = a[wa] + "px";
    0 > a[wa] + a.leftMargin ? (i = -(a[wa] + a.leftMargin), q = -a[wa], o = b[Nb] + 30 - i, d[z]("width", b[Rb] - b[Nb] - 60 + i), f[I].marginLeft = q + "px") : (o = b[Nb] + 30, d[z]("width", b[Rb] - b[Nb] - 60), f[I].marginLeft = a.leftMargin + "px");
    f[I].marginRight = a.rightMargin + "px";
    this.Dd = "translate(" + o + " 0)";
    d[z]("x", 0);
    i = m[F]("http://www.w3.org/2000/svg", "rect");
    i[z]("x", 
    b[Nb] - o);
    i[z]("y", b[va]);
    i[z]("width", b[Rb] - b[Nb]);
    i[z]("height", b[Aa] - b[va]);
    if (a.border)
        i[z]("stroke-width", "10"), this.Ed(i, "fill", 16777215), this.Ed(i, "stroke", 0);
    else
        i[z]("fill-opacity", 0);
    c[r](i);
    a = 0.5 * (a.leading | 0);
    d[z]("y", b[va] - a + 40);
    d[z]("height", b[Aa] - b[va] + a - 80);
    e[r](f);
    c[r](d);
    this.he = this.K[D];
    return c
};
jf[E].ve = function(a, b) {
    this.K[s](function() {
        ha(a, this.gd(b)[C]())
    })
};
jf[E].Vf = function(a, b, c) {
    var d = this.i, e = this.lineHeight, f = d.h[Xb], i = d.h.leading | 0, o = k, q = a, w = [];
    this.K[Yb](this.he);
    var Q = function(a, b) {
        var c = m[Za](a);
        q[r](c);
        q = c;
        w[s](o);
        w[s](f);
        w[s](e);
        w[s](b)
    }, M = this, a = b[t](/&nbsp;/g, " ");
    mf(a, {Uf: function(a, b) {
            switch (a) {
                case "p":
                    Q("p", a);
                    q[I].margin = 0;
                    var w = b[Ma]("align");
                    if (w)
                        q[I].textAlign = w[bc];
                    if (!c)
                        q[I].display = "inline";
                    break;
                case "b":
                case "i":
                case "u":
                    Q(a, a);
                    break;
                case "a":
                    Q(a, a);
                    (w = b[Ma]("href")) && q[z]("href", w[bc]);
                    (w = b[Ma]("target")) && q[z]("target", w[bc]);
                    q[I].pointerEvents = "all";
                    ha(q[I], "inherit");
                    q[I].textDecoration = "inherit";
                    break;
                case "br":
                case "sbr":
                    w = m[Za]("br");
                    q[r](w);
                    break;
                case "font":
                    Q("span", a);
                    (w = b[Ma]("color")) && M.ve(q[I], nf(w[bc]));
                    if (w = b[Ma]("face")) {
                        q[I].fontFamily = w[bc];
                        a: {
                            var nb = d.g.Da, G;
                            for (G in nb)
                                if (nb[G] instanceof of && nb[G].h[hb] == w[bc]) {
                                    e = nb[G].le;
                                    break a
                                }
                            e = 1.15
                        }
                    }
                    (G = b[Ma]("size")) && (f = 20 * G[bc]);
                    if (w || G)
                        w = q[I], G = f, nb = e, oa(w, G + "px"), pa(w, nb * G + i + "px"), o = h
            }
        },Tf: function(a) {
            w[w[D] - 1] == a && (w.pop(), e = w.pop(), f = w.pop(), o = w.pop(), q = q[Vb])
        },
        Sf: function(a) {
            a = m[La](a);
            if (o)
                q[r](a);
            else {
                var b = m[Za]("span"), c = b[I], d = f, w = e;
                oa(c, d + "px");
                pa(c, w * d + i + "px");
                b[r](a);
                q[r](b)
            }
        }})
};
var lf = function(a) {
    switch (a) {
        case 0:
            return "left";
        case 2:
            return "center";
        case 1:
            return "right";
        case 3:
            return "justify";
        default:
            return "left"
    }
}, mf = function(a, b) {
    var c = m[Za]("div");
    c.innerHTML = a;
    for (var d = 0; d < c[gb][D]; d++)
        pf(c[gb][d], b)
}, pf = function(a, b) {
    switch (a.nodeType) {
        case Node.ELEMENT_NODE:
            var c = a.nodeName[dc]();
            b.Uf(c, a.attributes);
            for (var d = 0; d < a[gb][D]; d++)
                pf(a[gb][d], b);
            b.Tf(c);
            break;
        case Node.TEXT_NODE:
            b.Sf(a.textContent)
    }
};
var sf = function(a, b, c) {
    for (var c = c / 256, d = [], e = 0; 256 > e; e++)
        d[e] = qf(rf(e / 255) * b + c);
    a[z]("tableValues", d[Zb](" "))
}, tf = function(a, b, c) {
    a[z]("slope", b);
    a[z]("intercept", c / 255)
}, uf = function(a, b, c, d, e, f, i) {
    c == e && d == f || (1 == c && 0 == d ? b[Vb] && a[Bb](b) : (i(b, c, d), b[Vb] || a[r](b)))
}, vf = function(a) {
    var b = m[F]("http://www.w3.org/2000/svg", "filter");
    b.id = $d.ua().Fa();
    b[z]("x", "0%");
    b[z]("y", "0%");
    b[z]("width", "100%");
    b[z]("height", "100%");
    var c = m[F]("http://www.w3.org/2000/svg", "feComponentTransfer");
    b[r](c);
    var d = 
    m[F]("http://www.w3.org/2000/svg", "feFuncR");
    d[z]("type", "discrete");
    var e = m[F]("http://www.w3.org/2000/svg", "feFuncG");
    e[z]("type", "discrete");
    var f = m[F]("http://www.w3.org/2000/svg", "feFuncB");
    f[z]("type", "discrete");
    var i = m[F]("http://www.w3.org/2000/svg", "feFuncA");
    i[z]("type", "linear");
    var o = new fe(1, 0, 1, 0, 1, 0, 1, 0);
    return function() {
        var q = this.nb;
        q.jg() ? (b[Vb] && (vd(b), a[Tb]("filter")), a[z]("opacity", q.Aa)) : (a[Tb]("opacity"), b[Vb] || (a[r](b), a[z]("filter", "url(#" + b.id + ")")), uf(c, d, q.ya, q.La, o.ya, 
        o.La, sf), uf(c, e, q.xa, q.Ka, o.xa, o.Ka, sf), uf(c, f, q.wa, q.Ja, o.wa, o.Ja, sf), uf(c, i, q.Aa, q.Ma, o.Aa, o.Ma, tf));
        o = q
    }
};
var xf = function(a, b) {
    Ie[K](this, b.g);
    this.definition = a;
    this.q = new wf(this)
};
T(xf, Ie);
var wf = function(a) {
    Le[K](this, a);
    this.Lb = [];
    this.Rc = []
};
T(wf, Le);
N = wf[E];
N.ub = function() {
    this.K = [];
    var a = this.i, b = a[Ua], c = b.fillstyles;
    if (c)
        for (var d = 0; d < c[D]; d++)
            if (c[d] != g) {
                var e = xe(c[d], b.bounds, this, a.g);
                e != j && (this.Lb[d] = e, a.g.Db[r](e))
            }
    if (c = b[Wa])
        for (d = 0; d < c[D]; d++)
            c[d] != g && c[d][kb] != g && (e = xe(c[d][kb], b.bounds, this, a.g), e != j && (this.Rc[d] = e, a.g.Db[r](e)));
    return this.bg()
};
N.bg = function() {
    for (var a = this.i, b = a[Ua], c = m[F]("http://www.w3.org/2000/svg", "g"), d = 0; d < b[Ob][D]; d++) {
        var e = b[Ob][d], f = m[F]("http://www.w3.org/2000/svg", "path");
        this.sb(f, "d", e[u], yf);
        f.onclick = function() {
        };
        c[r](f);
        if (e[Gb] != j && b[Wa] != j) {
            var i = b[Wa][e[Gb]];
            Be(f, i, this, i[kb] ? this.Rc[e[Gb]] : j)
        }
        if (e[kb] != j)
            if (i = b.fillstyles[e[kb]], i[Da] == j)
                ze(f, i, this, this.Lb[e[kb]]);
            else {
                var o = m[F]("http://www.w3.org/2000/svg", "clipPath");
                o.id = $d.ua().Fa();
                o[r](f);
                a.g.Db[r](o);
                f = m[F]("http://www.w3.org/2000/svg", "g");
                f[z]("clip-path", "url(#" + o.id + ")");
                c[r](f);
                o = m[F]("http://www.w3.org/2000/svg", "use");
                if (5 == i[B] || 7 == i[B])
                    U(this.Lb[e[kb]].id != j), o[Oa]("http://www.w3.org/1999/xlink", "href", "#" + this.Lb[e[kb]].id);
                else
                    o[Oa]("http://www.w3.org/1999/xlink", "href", "#" + a.g.Da[i[Da]].na().id);
                i[ac] && o[z]("transform", ve(i[ac])[C]());
                f[r](o);
                this.K[s](vf(f))
            }
        else
            f[z]("fill", "none")
    }
    return c
};
N.sb = function(a, b, c, d) {
    U(1 == c[D]);
    c = c[0];
    if (c instanceof ge || c instanceof ee)
        c = c[C]();
    a[z](b, d ? d[K](this, c) : c)
};
N.Ec = function(a, b, c) {
    U(1 == c[D]);
    this.K[s](function() {
        a[z](b, this.gd(c[0])[C]())
    })
};
N.Dc = function(a, b, c) {
    U(1 == c[D]);
    this.K[s](function() {
        a[z](b, this.hf(c[0]))
    })
};
N.J = function() {
    wf.m.J[K](this);
    for (var a = 0; a < this.Lb[D]; a++)
        vd(this.Lb[a]);
    for (a = 0; a < this.Rc[D]; a++)
        vd(this.Rc[a])
};
var zf = function(a, b) {
    this.dg = a;
    this.cg = b
};
zf[E].xb = function() {
    return 0
};
var Af = function(a, b, c, d) {
    zf[K](this, a, b);
    this.z = c;
    this.da = d
};
T(Af, zf);
Af[E].xb = function(a) {
    return this.z + (this.da - this.z) * a
};
var Bf = function(a, b, c, d) {
    zf[K](this, a, b);
    this.z = c;
    this.da = d
};
T(Bf, zf);
Bf[E].xb = function(a) {
    return (new ee(this.z.a + (this.da.a - this.z.a) * a, this.z.b + (this.da.b - this.z.b) * a, this.z.c + (this.da.c - this.z.c) * a, this.z.d + (this.da.d - this.z.d) * a, this.z.e + (this.da.e - this.z.e) * a, this.z.f + (this.da.f - this.z.f) * a))[C]()
};
var Cf = function(a, b, c, d) {
    zf[K](this, a, b);
    this.z = c;
    this.da = d
};
T(Cf, zf);
Cf[E].xb = function(a, b) {
    return b.xg(this.z.Qb + (this.da.Qb - this.z.Qb) * a, this.z.Pb + (this.da.Pb - this.z.Pb) * a, this.z.b + (this.da.b - this.z.b) * a)[C]()
};
var Df = function(a, b, c, d) {
    zf[K](this, a, b);
    this.z = c;
    this.da = d
};
T(Df, zf);
Df[E].xb = function(a, b) {
    return b.Je(this.z + (this.da - this.z) * a)
};
var Ef = function(a, b, c, d) {
    zf[K](this, a, b);
    this.rf = c[H](" ");
    this.sf = d[H](" ");
    U(this.rf[D] == this.sf[D])
};
T(Ef, zf);
Ef[E].xb = function(a) {
    for (var b = "", c = this.rf, d = this.sf, e = 0; e < c[D]; e++) {
        var f = ea(c[e], 10);
        isNaN(f) ? (U(c[e] == d[e]), b += c[e] + " ") : b += f + (ea(d[e], 10) - f) * a + " "
    }
    return b
};
var Gf = function(a, b) {
    xf[K](this, a, b);
    this.q = new Ff(this)
};
T(Gf, xf);
Gf[E].Lc = function(a) {
    a != this.Eb && this.T(256);
    Gf.m.Lc[K](this, a)
};
var Ff = function(a) {
    wf[K](this, a);
    this.rc = []
};
T(Ff, wf);
N = Ff[E];
N.ub = function() {
    return Ff.m.ub[K](this)
};
N.sb = function(a, b, c, d) {
    if (1 == c[D])
        Ff.m.sb[K](this, a, b, c, d);
    else
        U(2 == c[D]), this.Td(a, b, d ? d[K](this, c[0]) : c[0], d ? d[K](this, c[1]) : c[1])
};
N.Ec = function(a, b, c) {
    1 == c[D] ? Ff.m.Ec[K](this, a, b, c) : this.Td(a, b, Me(c[0]), Me(c[1]), Cf)
};
N.Dc = function(a, b, c) {
    1 == c[D] ? Ff.m.Dc[K](this, a, b, c) : this.Td(a, b, Ne(c[0]), Ne(c[1]), Df)
};
N.Td = function(a, b, c, d, e) {
    var f = e;
    e || (c instanceof ee ? f = Bf : "number" == typeof c ? f = Af : (U("d" == b), f = Ef));
    c = new f(a, b, c, d);
    a[z](b, c.xb(this.i.Eb / 65535, this.nb));
    this.rc[s](c)
};
N.w = function() {
    this.i.B & 8 && (this.i.B |= 256);
    Ff.m.w[K](this);
    if (this.i.B & 256) {
        this.i.B ^= 256;
        for (var a = this.i.Eb / 65535, b = 0; b < this.rc[D]; b++) {
            var c = this.rc[b].dg, d = this.rc[b].cg, e = this.rc[b].xb(a, this.nb);
            c[z](d, e)
        }
    }
};
var Hf = function(a) {
    xf[K](this, {}, a);
    this.clear();
    this.vc = this.Zb = j;
    this.ia()
};
T(Hf, xf);
Hf[E].clear = function() {
    this[Ua].fillstyles = [];
    this[Ua].linestyles = [];
    this[Ua].paths = [];
    this.Ab = this.Bb = this.yc = this.zc = 0;
    this.Ud()
};
Hf[E].Ud = function() {
    this.T(512)
};
Hf[E].md = function(a) {
    var b = this.Zb, c = this.vc;
    c && (c[u][0] += a);
    b && b != c && (b[u][0] += a);
    (b || c) && this.Ud()
};
Hf[E].moveTo = function(a, b) {
    if (O(a) && O(b))
        a *= 20, b *= 20, this.md("M" + a + " " + b), this.Ab = a, this.Bb = b, this.yc = a, this.zc = b
};
Hf[E].lineTo = function(a, b) {
    if (O(a) && O(b))
        a *= 20, b *= 20, a == this.Ab && b == this.Bb && !this.vc ? this.md("Z") : this.md("L" + a + " " + b), this.yc = a, this.zc = b
};
Hf[E].curveTo = function(a, b, c, d) {
    if (O(c) && O(d) && O(a) && O(b))
        c *= 20, d *= 20, this.md("Q" + 20 * a + " " + 20 * b + " " + c + " " + d), this.yc = c, this.zc = d
};
Hf[E].Fc = function(a, b, c, d) {
    var e = this[Ua][Ob], f = e[e[D] - 1], i = {};
    !f || 0 <= f[u][0].search(/[LQ]/) ? this[Ua][Ob][s](i) : this[Ua][Ob][e[D] - 1] = i;
    ga(i, ["M" + a + " " + b]);
    i.fill = d;
    i.line = c;
    return i
};
Hf[E].dh = function(a) {
    var b = this.Zb, c = this.vc;
    if (c)
        if (0 <= c[u][0].search(/[LQ]/))
            b == c && (b = this.Fc(0, 0, c[Gb], g), ga(b, [c[u][0]]), delete c[Gb]);
        else {
            b = c;
            b.line = a;
            this.Zb = b;
            return
        }
    this.Zb = b = O(a) ? this.Fc(this.yc, this.zc, a, g) : j
};
Hf[E].ce = function(a) {
    var d;
    var b = this.vc;
    b && (b[u][0] += "Z");
    var c = this.Zb;
    if (!b || !c || c == b) {
        if (b = O(a) ? this.Fc(this.Ab, this.Bb, g, a) : j, c)
            b ? (b.line = c[Gb], c = b) : c = this.Fc(this.Ab, this.Bb, c[Gb], g)
    } else
        U(c), U(b), c[u][0] += "L" + this.Ab + " " + this.Bb, O(a) ? (d = b = this.Fc(this.Ab, this.Bb, c[Gb], a), c = d) : b = j;
    this.vc = b;
    this.Zb = c;
    this.yc = this.Ab;
    this.zc = this.Bb;
    this.Ud()
};
Hf[E].lineStyle = function(a, b, c, d, e, f, i, o) {
    d = g;
    if (O(a)) {
        d = this[Ua][Wa];
        e = {};
        e.width = [20 * a];
        ha(e, [If(b, c)]);
        switch (f) {
            case "none":
                e.cap = 1;
                break;
            case "square":
                e.cap = 2
        }
        switch (i) {
            case "bevel":
                e.joint = 1;
                break;
            case "miter":
                e.joint = 2
        }
        if (O(o))
            e.miter = [o];
        d[s](e);
        d = d[D] - 1
    }
    this.dh(d)
};
Hf[E].beginFill = function(a, b) {
    if (O(a)) {
        var c = this[Ua].fillstyles, d = {type: 1};
        ha(d, [If(a, b)]);
        c[s](d);
        this.ce(c[D] - 1)
    } else
        this.ce()
};
Hf[E].endFill = function() {
    this.ce()
};
var Kf = function(a, b) {
    Ie[K](this, b.g);
    this.h = a;
    this.q = new Jf(this)
};
T(Kf, Ie);
var Jf = function(a) {
    Le[K](this, a)
};
T(Jf, Le);
Jf[E].ub = function() {
    this.K = [];
    var a = m[F]("http://www.w3.org/2000/svg", "g"), b = this.i.h;
    this.Dd = ve(b[Ha])[C]();
    this.i.T(2);
    for (var c = 0; c < b.records[D]; c++) {
        var d = b.records[c], e = m[F]("http://www.w3.org/2000/svg", "text");
        e[r](m[La](d[Ea]));
        var f = this.i.g.Da[d.font];
        f && e[z]("font-family", "'" + f.je + "'");
        e[z]("font-size", d[Xb]);
        d.bold && e[z]("font-weight", "bold");
        d.italic && e[z]("font-style", "italic");
        e[z]("x", Lf(d.x));
        e[z]("y", d.y);
        e[z]("fill-rule", "nonzero");
        e[z]("style", "white-space:pre");
        e[z]("unicode-bidi", 
        "bidi-override");
        this.Ed(e, "fill", d[Qa]);
        a[r](e)
    }
    return a
};
var Mf = function() {
};
Mf[E].Rg = function(a) {
    this.Gh = a
};
Mf[E].Og = function(a) {
    return this.bc(a)
};
var Nf = function(a) {
    Pe[K](this, a);
    this.s = new Ee(k)
};
T(Nf, Pe);
N = Nf[E];
N.cc = function(a, b) {
    this.T(32);
    a[xa]() != j && a[xa]()[Bb](a);
    a.Vc(this);
    this.s.Hb(a, b)
};
N.removeChild = function(a) {
    this.T(32);
    this.s.yg(a);
    a.Vc(j)
};
N.fc = function(a) {
    this.T(32);
    (a = this.s.Mc(a)) && a.Vc(j)
};
N.Oa = function(a) {
    Nf.m.Oa[K](this, a);
    this.s.Le(a)
};
N.uc = function(a, b) {
    this.s.uc(a, b)
};
N.t = function() {
    if (!this.r)
        this.r = new Of, this.Oa(this.r);
    return this.r
};
N.Wd = function(a, b) {
    this.T(32);
    this.s.Wd(a, b)
};
var Pf = function(a) {
    cf[K](this, a)
};
T(Pf, cf);
Pf[E].w = function() {
    if ((this.i.B & 1 || this.i.B & 2) && this.i.yd())
        for (var a = this.i.s.n, b = 0; b < a[D]; ++b)
            a[b].T(2);
    Pf.m.w[K](this);
    a = this.i;
    b = a.B;
    if (a.kb || b & 32)
        b &= -33, a.kb = k, a.s.q.w();
    a.B = b
};
Pf[E].Ga = function() {
    Pf.m.Ga[K](this);
    this.i.s.q.Ga();
    this.i.Yc()
};
Pf[E].J = function() {
    Pf.m.J[K](this);
    this.i.s.q.ue()
};
var Rf = function(a) {
    var b = function(b) {
        b instanceof Ke || (b = a.j().sg("" + b));
        this.r = b;
        this.Ne = 0
    };
    l[Pa](b[E], Qf);
    return b
}, Qf = {getRGB: {value: function() {
            return this.Ne
        }},setRGB: {value: function(a) {
            if (this.r)
                this.Ne = a, this.r.__swiffy_d.Ua(new fe(0, (a & 16711680) >> 16, 0, (a & 65280) >> 8, 0, a & 255, 1, 0)), this.r.__swiffy_d.ia()
        }},setTransform: {value: function(a) {
            if (this.r && a) {
                var b = this.r.__swiffy_d, c = b.g.j().k(a, "ra"), d = b.g.j().k(a, "rb"), e = b.g.j().k(a, "ga"), f = b.g.j().k(a, "gb"), i = b.g.j().k(a, "ba"), o = b.g.j().k(a, "bb"), 
                q = b.g.j().k(a, "aa"), b = b.g.j().k(a, "ab");
                this.r.__swiffy_d.Ua(new fe(a[c] / 100, a[d], a[e] / 100, a[f], a[i] / 100, a[o], a[q] / 100, a[b]));
                this.r.__swiffy_d.ia()
            }
        }},getTransform: {value: function() {
            if (!this.r)
                return j;
            var a = this.r.__swiffy_d.Ca;
            return {ra: 100 * a.ya,rb: a.La,ga: 100 * a.xa,gb: a.Ka,ba: 100 * a.wa,bb: a.Ja,aa: 100 * a.Aa,ab: a.Ma}
        }}};
var Tf = function(a, b, c) {
    Nf[K](this, b);
    this.h = a;
    this.hc = {};
    this.ob = {};
    this.R = -1;
    this.Ib = a.frameCount;
    this.Pc = k;
    this.W = 0;
    this.L = c;
    this.vd = {};
    this.Ta = b.Ta;
    this.ge = this.me = k;
    this.wf = [];
    this.dc = {};
    this.qb = {};
    this.q = new Sf(this);
    this.oe = j;
    this.g.Bf(this)
};
T(Tf, Nf);
N = Tf[E];
N.Qg = function() {
    if (!this.ge) {
        for (var a = 0; a < this.h.tags[D]; a++) {
            var b = this.h.tags[a];
            switch (b[B]) {
                case 10:
                    var c = new Uf(b);
                    this.L.ib(b.id, c);
                    break;
                case 13:
                    c = new Vf(b);
                    this.L.ib(b.id, c);
                    break;
                case 5:
                    c = new of(b);
                    this.g.Da[b.id] = c;
                    break;
                case 8:
                    c = new Wf(b);
                    this.g.Da[b.id] = c;
                    break;
                case 1:
                    c = new Xf(b);
                    this.L.ib(b.id, c);
                    break;
                case 17:
                    c = new Yf(b);
                    this.L.ib(b.id, c);
                    break;
                case 11:
                    c = new Zf(b);
                    c.Bd(this.Gb());
                    break;
                case 7:
                    c = new $f(b, this.g, this.L);
                    this.L.ib(b.id, c);
                    break;
                case 6:
                    c = new ag(b);
                    this.L.ib(b.id, c);
                    break;
                case 9:
                    c = new bg(b, this.j());
                    this.Jb(this.W, c);
                    break;
                case 21:
                    c = new cg(b, this.j());
                    this.Jb(this.W, c);
                    break;
                case 20:
                    this.ob[this.W] || (this.ob[this.W] = []);
                    c = this.j();
                    this.ob[this.W][s](oc(function(a, b, c) {
                        b = a.jb(b[tb]);
                        a.Jc(new gf(b, c))
                    }, c, b));
                    break;
                case 22:
                    this.ob[this.W] || (this.ob[this.W] = []);
                    this.ob[this.W][s](oc(function(a, b, c, d) {
                        U(O(c[ib][b[ib]]));
                        a.ke(c[ib][b[ib]], d)()
                    }, this.j(), b, this.g));
                    break;
                case 18:
                    c = this.g.gh;
                    c.hh(j);
                    break;
                case 19:
                    var b = b.references, d;
                    for (d in b)
                        c = p(d), this.L.Af(c, b[c]);
                    break;
                case 15:
                    this.vd[b.label] = this.W;
                    break;
                case 3:
                    c = new dg(b);
                    this.Jb(this.W, c);
                    break;
                case 4:
                    c = new eg(b);
                    this.Jb(this.W, c);
                    break;
                case 2:
                    this.W++;
                    break;
                case 12:
                    c = new fg(b);
                    this.Jb(this.W, c);
                    break;
                case 16:
                    c = new gg(b), this.Jb(this.W, c)
            }
        }
        this.ge = h
    }
};
N.Ea = function() {
    this.Qg();
    this.af();
    this.nc(128);
    this.ic || this.ff()
};
sa(N, function() {
    if (!this.me)
        this.me = h, this[cb](), this.Ye(k), this.ic && this.ff()
});
N.Qa = function(a) {
    this.s[$a](function(b) {
        b.Qa(a)
    });
    Tf.m.Qa[K](this, a)
};
N.mc = function(a) {
    if (a = this.qb[a])
        for (var b = 0; b < a[D]; ++b)
            a[b]()
};
N.nc = function(a) {
    if (a = this.qb[a])
        for (var b = 0; b < a[D]; ++b)
            this.j().Ob(a[b])
};
N.He = function() {
    return this.qb != g && this.qb[32] != g
};
N.yf = function(a, b, c, d) {
    for (var e in Qe) {
        var f = Qe[e];
        a & f && (this.qb[f] || (this.qb[f] = []), this.qb[f][s](function(a, b) {
            return function() {
                a.Jc(b)
            }
        }(this.j(), new gf(d, this))), 256 <= f && 8192 >= f && this.Ad(), f & 131072 && (f = S(this.nc, this, 131072), this.q.Ie(b, c, f)))
    }
};
N.qd = function(a) {
    return (a = this.L.Pg(a)) ? a.Og(this) : j
};
N.Xe = function() {
    return this
};
N.Oa = function(a) {
    Tf.m.Oa[K](this, a);
    l[Pa](a, hg)
};
N.J = function() {
    this.g.ig(this);
    this.s.J();
    Tf.m.J[K](this)
};
N.Xa = function() {
    this.xe || (this.s.Xa(), this.nc(32));
    Tf.m.Xa[K](this)
};
N.Jb = function(a, b) {
    this.hc[a] || (this.hc[a] = []);
    this.hc[a][s](b)
};
ka(N, function() {
    this.Pc = h
});
N.ng = function() {
    this.s.Bg();
    this.Pc ? this.Ye(h) : this.Nd()
};
N.Ye = function(a) {
    var b = this.R + 1;
    b >= this.Ib && (b = 0);
    (0 != this.Ib || this.g.P != this) && this.bd(b, a)
};
N.Qd = function(a) {
    this.nc(a);
    Tf.m.Qd[K](this, a)
};
N.Nd = function() {
    this.nc(64);
    this.j().Ob(S(function() {
        this.t().onEnterFrame()
    }, this))
};
N.ff = function() {
    this.j().Ob(S(function() {
        this.t().onLoad()
    }, this))
};
N.stop = function() {
    this.Pc = k
};
N.$b = function(a, b) {
    0 <= a && a < this.Ib ? this.bd(a) : this.R = this.Ib + 1;
    this.Pc = b
};
N.oc = function(a) {
    var b = g;
    "string" == typeof a && this.vd[a] != g ? b = this.vd[a] : (a = p(a) - 1, 0 <= a && a == n[Ja](a) && (b = a));
    return b
};
N.ag = function(a) {
    return this.hc[a]
};
N.bd = function(a, b) {
    var c = k, d = this.s;
    if (a < this.R)
        c = h, this.s = new Ee(h), this.R = -1;
    for (a == this.R && b && this.Nd(); this.R < a; ) {
        this.R++;
        this.R == a && b && this.Nd();
        this.tg(this.R);
        var e = this.hc[this.R];
        if (e)
            for (var f = 0; f < e[D]; f++)
                e[f].Yb(this), this.R == a && e[f].Xb(this)
    }
    e = this.wf[this.R];
    R(e) && e();
    if (c)
        d.ug(this.s), this.s = d
};
N.tg = function(a) {
    for (a = this.ob[a]; a && 0 < a[D]; )
        a[za]()(this)
};
N.kf = function() {
    0 < this.R && this.bd(this.R - 1);
    this[mb]()
};
N.jf = function() {
    this.R + 1 < this.Ib && this.bd(this.R + 1);
    this[mb]()
};
N.j = function() {
    return this.g.j()
};
N.Gb = function() {
    return this.g.Gb()
};
N.Kb = function() {
    return this.g.Kb()
};
N.Ng = function(a, b) {
    this.t()[a] = b
};
N.setCapture = function(a, b, c) {
    this.g[Ia](a, b, c)
};
N.releaseCapture = function(a) {
    this.g[jb](a)
};
N.duplicate = function(a, b, c) {
    var d = new Tf(this.h, this.g, this.L);
    d.ic = h;
    d.lb(b);
    d[Ta](this.Q());
    d.Ea();
    d[Hb]();
    a.cc(d, c);
    d.Ua(this.Ca);
    return d
};
N.t = function() {
    this.r || this.af();
    return this.r
};
N.af = function() {
    var a = X;
    if (this.h.id) {
        var b = ke[this.g.de[this.h.id]];
        b != j && (a = b)
    }
    this.r = l[qb](a[E]);
    this.Oa(this.r);
    a[L](this.r);
    this.g.P == this && (this.r.$version = this.g.Zf())
};
N.Na = function() {
    return h
};
N.Cb = function(a, b) {
    var c = this.oe;
    if (!c)
        this.oe = c = new Hf(this), this.cc(c, -16385);
    c[a][L](c, b)
};
var Sf = function(a) {
    cf[K](this, a)
};
T(Sf, Pf);
Sf[E].ub = function() {
    var a = this.i, b = a.s.q;
    b.w();
    var b = b.na(), c = oc(a.mc, 1), c = V(m, "keyup", c, k, a);
    this.pa[s](c);
    c = oc(a.mc, 2);
    c = V(m, "keydown", c, k, a);
    this.pa[s](c);
    c = oc(a.mc, 4);
    c = V(a.g.Kb(), "createTouch" in m ? "touchend" : "mouseup", c, k, a);
    this.pa[s](c);
    c = oc(a.mc, 8);
    c = V(a.g.Kb(), "createTouch" in m ? "touchstart" : "mousedown", c, k, a);
    this.pa[s](c);
    c = oc(a.mc, 16);
    c = V(a.g.Kb(), "createTouch" in m ? "touchmove" : "mousemove", c, k, a);
    this.pa[s](c);
    return b
};
Sf[E].Fe = function() {
    return this.na()
};
var ig = function() {
    this.pf = [];
    this.pd = []
};
ig[E].Bd = function(a, b) {
    this.pf[a] = b
};
ig[E].Ae = function(a) {
    this.pd[a] = new Audio(this.pf[a]);
    this.pd[a][cb]()
};
ig[E].Ig = function() {
    for (var a in this.pd)
        this.pd[a].pause()
};
var lg = function(a, b) {
    this.Gd = k;
    this.Kc = new W(0, 0);
    this.Da = {};
    this.code = [];
    this.Uc = [];
    this.ca = m[F]("http://www.w3.org/1999/xhtml", "div");
    this.ca[z]("style", "position:relative;");
    a[r](this.ca);
    this.Mf = new ig;
    this.Mb = m[F]("http://www.w3.org/2000/svg", "svg");
    this.te = b[Fb][Rb];
    this.se = b[Fb][Aa];
    this.Lf = b.v;
    var c;
    c = "fill-rule:evenodd;pointer-events:none;" + ("width:" + this.te / 20 + "px;");
    c += "height:" + this.se / 20 + "px;";
    b.backgroundColor != g && (c += "background:" + Me(b.backgroundColor)[C]());
    this.Mb[z]("style", c);
    this.Mb[z]("viewBox", 
    b[Fb][Nb] + " " + b[Fb][va] + " " + b[Fb][Rb] + " " + b[Fb][Aa]);
    this.ca[r](this.Mb);
    this.ih = b[Fb][Rb] / b[Fb][Aa];
    c = new Ce;
    this.Sc = new jg(b.frameRate, this);
    c.ib(0, new $f(b, this, c));
    this.Ta = b.version;
    this.P = new Tf(b, this, c);
    this.P.depth = -16384;
    this.pb = new Y(this.P);
    this.Pa = j;
    this.Fd = k;
    this.Tc = j;
    this.fe = {};
    this.de = {};
    this.Wa = new se(this);
    this.Nf = new kg(this);
    this.Qf = 1;
    this.lc = j;
    V(this.ca, "mousedown", this.Ff, h, this);
    V(this.ca, "mouseup", this.Jf, h, this);
    V(this.ca, "mousemove", this.Hf, h, this);
    V(this.ca, "mousedown", this.sd, 
    k, this);
    V(this.ca, "mouseup", this.ud, k, this);
    V(this.ca, "mouseout", this.td, k, this);
    "createTouch" in m || V(this.ca, "mousemove", this.If, k, this);
    V(m, "mousedown", this.Gf, k, this);
    V(m, "mouseup", this.Kf, k, this);
    V(this.ca, "touchstart", this.Pf, k, this);
    V(this.ca, "touchmove", this.Of, k, this);
    this.P.Ea();
    this.Db = m[F]("http://www.w3.org/2000/svg", "defs");
    for (var d in this.Da)
        this.Db[r](this.Da[d].Ea());
    d = aa.location.search + aa.location.hash;
    c = d[v]("?");
    0 <= c && this.we(d[Ga](c + 1));
    this.P.q.w();
    this.Mb[r](this.Db);
    this.Mb[r](this.P.q.na());
    this.code = this.Ef(b[ib])
}, mg = "swiffy.Stage"[H]("."), ng = ec;
!(mg[0] in ng) && ng.execScript && ng.execScript("var " + mg[0]);
for (var og; mg[D] && (og = mg[za]()); )
    !mg[D] && O(lg) ? ng[og] = lg : ng = ng[og] ? ng[og] : ng[og] = {};
lg[E].Ef = function(a) {
    a = eval(a);
    return a != j ? a(this.j()) : []
};
var pg = function(a) {
    return function(b) {
        b instanceof Tf && b.j().Ob(S(function() {
            var b = this.t();
            this.j()[Sb](this);
            var d = this.j().k(b, a);
            if (d in b)
                b[d]()
        }, b))
    }
};
N = lg[E];
N.Ff = function() {
    this.P.Qa(pg("onMouseDown"));
    this.j().tb();
    this.Wa.og()
};
N.Hf = function() {
    this.P.Qa(pg("onMouseMove"));
    this.j().tb();
    this.Wa.pg()
};
N.Jf = function() {
    this.P.Qa(pg("onMouseUp"));
    this.j().tb();
    this.Wa.qg()
};
N.sd = function(a) {
    a[xb]();
    this[Ia](this)
};
N.ud = function(a) {
    a[xb]();
    this[jb](this)
};
N.Gf = function() {
    this[Ia](this, h)
};
N.Kf = function() {
    this[jb](this)
};
N.td = function(a) {
    this[$b]() && a[Db] == this.ca && this[Ia](this)
};
N.If = function(a) {
    this.ae(a)
};
N.Pf = function(a) {
    var b = a.Ba.touches;
    1 == b[D] && (this.ae(b[0]), a[Na]())
};
N.Of = function(a) {
    var b = a.Ba.touches;
    1 == b[D] && (this.ae(b[0]), a[Na]())
};
N.ae = function(a) {
    var b;
    b = this.Mb;
    var c = 0, d = 0;
    if (b.offsetParent) {
        do
            c += b.offsetLeft, d += b.offsetTop;
        while (b = b.offsetParent)
    }
    b = [c, d];
    this.Kc.x = a.clientX - b[0];
    this.Kc.y = a.clientY - b[1]
};
N.Ag = function() {
    return this.lc != j
};
N.kg = function(a) {
    this.lc = a;
    this.Wa[Wb]()
};
N.Kd = function(a) {
    if (this.lc == a)
        this.lc = j;
    this.Wa[Wb]()
};
N.isCaptured = function() {
    return this.Pa != j
};
N.$c = function() {
    return this.Pa != j && this.Fd
};
N.Jd = function(a) {
    return this.Pa == a
};
N.zg = function() {
    return this.Pa != j && this.Pa == this.lc
};
N.setCapture = function(a, b, c) {
    this[jb](a);
    this.Pa = a;
    m.Dg = function() {
        return k
    };
    if (b)
        this.Fd = h;
    if (c)
        this.Tc = c, this.Wa[Wb]()
};
N.releaseCapture = function(a) {
    if (this.Pa)
        this.Wa[Wb](), m.Dg = j, this.Pa != a && this.Tc && this.Tc(), this.Pa = this.Tc = j, this.Fd = k
};
sa(N, function() {
    this.P[cb]();
    this.Sc[Hb]()
});
sa(lg[E], lg[E][Hb]);
N = lg[E];
N.Bf = function(a) {
    this.Sc.be(a)
};
N.ig = function(a) {
    this.Sc.Yg(a)
};
N.j = function() {
    return this.pb
};
N.Gb = function() {
    return this.Mf
};
N.be = function(a) {
    this.Sc.be(a)
};
N.Kb = function() {
    return this.ca
};
N.we = function(a) {
    for (var a = new de(a), b = a.Cc(), c = 0; c < b[D]; c++) {
        var d = b[c];
        this.P.Ng(d, a.get(d))
    }
};
lg[E].setFlashVars = lg[E].we;
lg[E].ee = function() {
    return "instance" + this.Qf++
};
lg[E].pe = function(a) {
    this.Uc[s](a)
};
lg[E].Zf = function() {
    return "Swiffy " + this.Lf
};
lg[E].w = function() {
    if (!this.Gd) {
        this.Gd = h;
        this.P.q.w();
        for (var a = 0; a < this.Uc[D]; a++)
            this.Uc[a]();
        this.Uc = [];
        this.Gd = k
    }
};
var ge = function(a, b, c, d) {
    this.Qb = a;
    this.Pb = b;
    this.b = c;
    this.a = d
};
ma(ge[E], function() {
    return "rgb(" + this.Qb.toFixed() + "," + this.Pb.toFixed() + "," + this.b.toFixed() + ")"
});
var ve = function(a) {
    var b = 0, c = qg(function() {
        return a[Lb](b++)
    });
    return new ee(c() / 65536 + 1, c() / 65536, c() / 65536, c() / 65536 + 1, c(), c())
}, Lf = function(a) {
    for (var b = 0, c = rg(function() {
        return a[Lb](b++)
    }), d = [], e = 0; b < a[D]; )
        e += ea(c(), 10), d[s](e);
    return d[Zb](" ")
}, rg = function(a) {
    return function() {
        var b = a();
        if (58 == b)
            return 0;
        for (var c = ""; 48 <= b && 57 >= b; )
            c += String.fromCharCode(b), b = a();
        return (97 <= b ? b - 96 : -(b - 64)) + c
    }
}, qg = function(a) {
    var b = rg(a);
    return function() {
        return ea(b(), 10)
    }
}, yf = function(a) {
    var b = 0, c = a[v](":");
    if (0 > c)
        return a;
    for (var d = c + 1, e = rg(function() {
        return a[Lb](d++)
    }), f = "", i; b < c; )
        switch (i = a.charAt(b++), 0 < f[D] && (f += " "), f += i + " ", i) {
            case "q":
                f += e() + " " + e() + " ";
            case "l":
            case "m":
                f += e() + " ";
            case "h":
            case "v":
                f += e();
                break;
            default:
                return ""
        }
    return f
}, hf = function(a) {
    var b = 0, c = qg(function() {
        return a[Lb](b++)
    });
    return new fe((c() + 256) / 256, c(), (c() + 256) / 256, c(), (c() + 256) / 256, c(), (c() + 256) / 256, c())
}, Me = function(a, b) {
    var c = a, d = c & 255, c = c >> 8, e = c & 255, c = c >> 8, f = c & 255, c = (255 - (c >> 8 & 255)) / 255;
    b && (d = d * b.ya + b.La, e = e * b.xa + 
    b.Ka, f = f * b.wa + b.Ja, c = c * b.Aa + b.Ma / 255);
    return new ge(d, e, f, c)
}, Ne = function(a, b) {
    var c;
    c = (255 - (a >> 24 & 255)) / 255;
    b && (c = c * b.Aa + b.Ma / 255);
    return c
}, nf = function(a) {
    a = a[t](/^ *rgb *\( *([^,]+) *, *([^,]+) *, *([^,]+) *\) *$/, function(a, c, d, e) {
        return c + (d << 8) + (e << 16)
    });
    a = a[t](/^ *#([0-9a-fA-F]+) *$/, function(a, c) {
        var d = ea(c, 16);
        return (d & 255) << 16 | d & 65280 | (d & 16711680) >> 16
    });
    return a | 0
}, If = function(a, b) {
    O(b) || (b = 100);
    return (a & 255) << 16 | a & 65280 | (a & 16711680) >> 16 | 255 - 2.55 * b << 24
}, qf = function(a) {
    return 0.04045 >= a ? 
    a / 12.92 : n.pow((a + 0.055) / 1.055, 2.4)
}, rf = function(a) {
    return 0.0031308 >= a ? 12.92 * a : 1.055 * n.pow(a, 1 / 2.4) - 0.055
}, sg = function(a, b) {
    var c = new W(20 * b.x, 20 * b.y);
    c.ka(a.Hd());
    c.x /= 20;
    c.y /= 20;
    return c
}, tg = function(a, b) {
    var c = a.g.j().Za(b);
    if (!isNaN(c))
        return c
}, ug = function(a, b, c, d) {
    if (0 != c[v]("_level") && 0 != b[dc]()[v]("fscommand:"))
        switch ("" == c && (c = "_self"), d) {
            case 0:
                aa.open(b, c);
                break;
            case 1:
            case 2:
                var e = sd("form");
                e.acceptCharset = "utf-8";
                e.method = 1 == d ? "get" : "post";
                for (var f in a)
                    "$" != f.charAt(0) && (d = sd("input", 
                    {type: "hidden",name: f,value: a[f]}), e[r](d));
                e.action = b;
                qa(e, c);
                e.submit();
                break;
            default:
                aa.open(b, c)
        }
};
var vg = function(a) {
    this.q = a;
    this.vg = $d.ua().Fa();
    this.region = new he(0, 0, 0, 0);
    this.K = []
}, Oe = [];
N = vg[E];
ua(N, function() {
});
N.result = function() {
    return this.vg
};
N.lf = function(a, b, c, d, e) {
    var f = 1;
    switch (a) {
        case 1:
            f = 5;
            break;
        case 2:
            f = 3;
            break;
        case 3:
            f = 2
    }
    a = 20 * b / f;
    c = 20 * c / f;
    f = m[F]("http://www.w3.org/2000/svg", "feGaussianBlur");
    O(d) && f[z]("in", d);
    O(e) && f[z]("result", e);
    f[z]("stdDeviation", a + " " + c);
    this.za()[r](f);
    d = new he;
    d[Fa](new W(3 * -a, 3 * -c));
    d[Fa](new W(3 * +a, 3 * +c));
    return d
};
N.cd = function(a, b, c, d, e, f, i) {
    var o = m[F]("http://www.w3.org/2000/svg", "feComponentTransfer");
    O(f) && o[z]("in", f);
    O(i) && o[z]("result", i);
    O(e) || (e = "linear");
    f = ["feFuncR", "feFuncG", "feFuncB", "feFuncA"];
    a = [a, b, c, d];
    for (b = 0; 4 > b; ++b) {
        var c = j, q;
        for (q in a[b])
            c == j && (c = m[F]("http://www.w3.org/2000/svg", f[b]), c[z]("type", e)), c[z](q, a[b][q]);
        c && o[r](c)
    }
    this.za()[r](o);
    return o
};
N.Od = function(a, b, c) {
    var d = this.cd({Pe: 0}, {Pe: 0}, {Pe: 0}, {jh: 0}, g, g, c);
    this.K[s](function() {
        for (var c = this.q.gd(a), f = 0; f < d[gb][D]; ++f) {
            var i = d[gb][f];
            switch (i.localName) {
                case "feFuncR":
                    i[z]("intercept", qf(c.Qb / 255));
                    break;
                case "feFuncG":
                    i[z]("intercept", qf(c.Pb / 255));
                    break;
                case "feFuncB":
                    i[z]("intercept", qf(c.b / 255));
                    break;
                case "feFuncA":
                    i[z]("slope", c.a * b)
            }
        }
    })
};
N.ma = function(a, b, c, d, e) {
    var f = m[F]("http://www.w3.org/2000/svg", "feComposite");
    O(e) && f[z]("result", e);
    O(b) && f[z]("in", b);
    O(c) && f[z]("in2", c);
    f[z]("operator", a);
    if (O(d))
        for (var i in d)
            f[z](i, d[i]);
    this.za()[r](f)
};
N.wg = function(a) {
    var b = m[F]("http://www.w3.org/2000/svg", "feFlood");
    O(a) && b[z]("result", a);
    this.za()[r](b)
};
N.Tg = function(a, b, c, d) {
    var e = 20 * n.cos(a) * b, a = 20 * n.sin(a) * b, b = m[F]("http://www.w3.org/2000/svg", "feOffset");
    O(c) && b[z]("in", c);
    O(d) && b[z]("result", d);
    b[z]("dx", e);
    b[z]("dy", a);
    this.za()[r](b);
    return new he(e, a, e, a)
};
N.Pd = function(a, b, c, d, e, f, i) {
    this.cd({slope: 0}, {slope: 0}, {slope: 0}, {}, "linear", a);
    a = this.lf(b, c, d);
    0 != f && this.region.Ug(this.Tg(e, f, g, i));
    this.region.add(a)
};
N.$a = function() {
    return $d.ua().Fa()
};
N.za = function() {
    return this.q.za()
};
N.Ga = function() {
    for (var a = this.K, b = 0; b < a[D]; ++b)
        a[b][K](this)
};
var wg = function(a, b) {
    vg[K](this, a);
    this.Sa = b[Ha];
    this.Sa[4] /= 255;
    this.Sa[9] /= 255;
    this.Sa[14] /= 255;
    this.Sa[19] /= 255
};
T(wg, vg);
Oe[3] = wg;
ua(wg[E], function(a) {
    for (var b = [], c = [], d = 0; 256 > d; d++)
        b[d] = rf(d / 255), c[d] = qf(d / 255);
    var e = {tableValues: b[Zb](" ")}, c = {tableValues: c[Zb](" ")}, b = this.$a(), d = this.$a();
    this.cd(e, e, e, e, "discrete", a, b);
    a = this.za();
    e = m[F]("http://www.w3.org/2000/svg", "feColorMatrix");
    e[z]("in", b);
    e[z]("result", d);
    e[z]("type", "matrix");
    e[z]("values", this.Sa[Zb](" "));
    a[r](e);
    this.cd(c, c, c, c, "discrete", d, this[rb]())
});
var xg = function(a, b) {
    vg[K](this, a);
    this.wc = b
};
T(xg, vg);
Oe[2] = xg;
ua(xg[E], function(a) {
    var b = this.wc;
    this.region = this.lf(b[cc], b.x, b.y, a, this[rb]())
});
var yg = function(a, b) {
    vg[K](this, a);
    this.wc = b
};
T(yg, vg);
Oe[1] = yg;
ua(yg[E], function(a) {
    this.K = [];
    var b = this.wc, c = this.za();
    b[sb] && this.wg("black");
    this.Pd(a, b[cc], b.x, b.y, b.angle, b.distance);
    b[sb] && this.ma("arithmetic", g, "black", {k2: -1,k3: 1});
    var d = this.$a();
    this.Od(b[Qa], b.strength, d);
    !b[sb] && !b[Va] && !b.hideObject ? this.ma("over", a, d) : b[sb] && !b[Va] && !b.hideObject ? this.ma("atop", d, a) : !b[sb] && b[Va] ? this.ma("out", d, a) : b[sb] && this.ma("in", d, a);
    c.lastChild[z]("result", this[rb]())
});
var zg = function(a, b) {
    vg[K](this, a);
    this.wc = b
};
T(zg, vg);
Oe[4] = zg;
ua(zg[E], function(a) {
    this.K = [];
    var b = this.wc, c = this.za(), d = this.$a(), e = this.$a(), f = this.$a(), i = this.$a(), o = this.$a();
    this.Pd(a, b[cc], b.x, b.y, b.angle, -b.distance, e);
    this.Pd(a, b[cc], b.x, b.y, b.angle, b.distance, d);
    this.ma("arithmetic", e, d, {k2: 1,k3: -1});
    this.Od(b.highlight, b.strength, i);
    this.ma("arithmetic", d, e, {k2: 1,k3: -1});
    this.Od(b.shadow, b.strength, f);
    this.ma("arithmetic", i, f, {k2: 1,k3: 1}, o);
    b[Va] ? b[sb] ? this.ma("in", o, a) : b.onTop || this.ma("out", o, a) : b[sb] ? this.ma("atop", o, a) : b.onTop ? this.ma("over", o, 
    a) : this.ma("over", a, o);
    c.lastChild[z]("result", this[rb]())
});
var Uf = function(a) {
    this.h = a
};
T(Uf, Mf);
Uf[E].bc = function(a) {
    return new ff(this.h, a)
};
var Vf = function(a) {
    this.h = a
};
T(Vf, Mf);
Vf[E].bc = function(a) {
    return new kf(this.h, a)
};
var of = function(a) {
    this.h = a
};
of[E].na = function() {
    return this.Sb
};
of[E].Ea = function() {
    var a;
    a = this.h.emSquareSize ? this.h.emSquareSize : 1024;
    var b, c, d;
    this.h.ascent && this.h.descent ? (b = this.h.ascent, c = this.h.descent, d = (b + c) / a) : (this.h[hb] && !this.h[yb] ? (b = m[F]("http://www.w3.org/1999/xhtml", "div"), b[I].fontFamily = this.h[hb], oa(b[I], "1024px"), b.innerHTML = "A", m[Ab][r](b), d = b.clientHeight / 1024, vd(b)) : d = 1.15, b = 0.9 * a, c = a * (d - 0.9));
    this.le = d;
    d = m[F]("http://www.w3.org/2000/svg", "font-face");
    var e;
    this.je = e = this.h[hb] ? this.h[hb] : $d.ua().Fa();
    d[z]("font-family", "'" + e + "'");
    d[z]("units-per-em", 
    a);
    d[z]("ascent", b);
    d[z]("descent", c);
    d[z]("font-weight", this.h.bold ? "bold" : "normal");
    d[z]("font-style", this.h.italic ? "italic" : "normal");
    if (this.h[hb] && !this.h[yb])
        a = m[F]("http://www.w3.org/2000/svg", "font-face-src"), b = m[F]("http://www.w3.org/2000/svg", "font-face-name"), b[z]("name", this.h[hb]), a[r](b), d[r](a), this.Sb = d;
    else {
        b = m[F]("http://www.w3.org/2000/svg", "font");
        b[z]("horiz-adv-x", a);
        b[r](d);
        if (this.h[yb])
            for (a = 0; a < this.h[yb][D]; a++)
                d = this.h[yb][a], c = m[F]("http://www.w3.org/2000/svg", "glyph"), 
                c[z]("d", yf(d[u])), c[z]("unicode", d.unicode), d.advance && c[z]("horiz-adv-x", d.advance), b[r](c);
        this.Sb = b
    }
    return this.Sb
};
var Wf = function(a) {
    this.h = a
};
Wf[E].na = function() {
    return this.Sb
};
Wf[E].Ea = function() {
    var a = m[F]("http://www.w3.org/2000/svg", "image");
    a.id = $d.ua().Fa();
    a[z]("width", this.h[Ca]);
    a[z]("height", this.h[Xb]);
    if (this.h.mask) {
        var b = this.h[Ca], c = this.h[Xb], d = m[Za]("canvas");
        d.width = this.h[Ca];
        d.height = this.h[Xb];
        var e = new Image, f = new Image, i = k, o = k, q = function() {
            if (i && o) {
                var q = d.getContext("2d");
                q.clearRect(0, 0, b, c);
                q.drawImage(e, 0, 0, b, c);
                q.globalCompositeOperation = "xor";
                q.drawImage(f, 0, 0, b, c);
                a[Oa]("http://www.w3.org/1999/xlink", "href", d.toDataURL("image/png"))
            }
        };
        e.onload = 
        function() {
            i = h;
            q()
        };
        f.onload = function() {
            o = h;
            q()
        };
        e.src = this.h[u];
        f.src = this.h.mask
    } else
        a[Oa]("http://www.w3.org/1999/xlink", "href", this.h[u]);
    return this.Sb = a
};
var Yf = function(a) {
    this.h = a
};
T(Yf, Mf);
Yf[E].bc = function(a) {
    return new Gf(this.h, a)
};
var Xf = function(a) {
    this.h = a
};
T(Xf, Mf);
Xf[E].bc = function(a) {
    return new xf(this.h, a)
};
var Zf = function(a) {
    this.h = a
};
Zf[E].Bd = function(a) {
    a.Bd(this.h.id, this.h[u])
};
var $f = function(a, b, c) {
    this.h = a;
    this.N = b;
    this.L = c
};
T($f, Mf);
$f[E].bc = function() {
    return new Tf(this.h, this.N, this.L)
};
var ag = function(a) {
    this.h = a
};
T(ag, Mf);
ag[E].bc = function(a) {
    return new Kf(this.h, a)
};
var bg = function(a, b) {
    this.Kg = a;
    this.df = b.jb(a[tb]);
    this.pb = b
};
bg[E].Yb = function() {
};
bg[E].Xb = function(a) {
    this.pb.Se(new gf(this.df, a))
};
bg[E].Rb = function(a) {
    this.pb.Jc(new gf(this.df, a))
};
var cg = function(a, b) {
    this.Kg = a;
    this.Ke = a[ib];
    this.pb = b
};
cg[E].Yb = function() {
};
cg[E].Xb = function(a) {
    var b = this.pb;
    b.Ob(b.ke(a.g[ib][this.Ke], a))
};
cg[E].Rb = function(a) {
    a.kc || (this.pb[Sb](a), a.g[ib][this.Ke]())
};
var fg = function(a) {
    this.Xg = a
};
fg[E].Yb = function(a) {
    a.Gb().Ae(this.Xg.id)
};
fg[E].Xb = function() {
};
fg[E].Rb = function() {
};
var dg = function(a) {
    this.p = a
};
dg[E].Yb = function(a) {
    var b = this.p[eb] + -16384, c = a.s.Nc(b);
    if (!c || !c.ec())
        if (c || !this.p[t])
            if (!c || this.p[t] || !this.p.id)
                if (c && (c.Na() || !this.p.id))
                    this.ne(c);
                else {
                    var d = c, c = a.qd(this.p.id);
                    if (c != j)
                        if (c.Na() && d)
                            this.ne(d);
                        else {
                            this.p[hb] ? c.lb(this.p[hb]) : c.Na() && c.lb(a.g.ee());
                            var e = j;
                            this.p[Ha] && (e = ve(this.p[Ha]));
                            var f = j;
                            this.p[Mb] && (f = hf(this.p[Mb]));
                            if (this.p[t])
                                e || (e = d.Q()), f || (f = d.Ca);
                            this.p.clip && c.zf(this.p.clip + -16384);
                            if (this.p[tb])
                                for (var i = 0; i < this.p[tb][D]; ++i) {
                                    var o = a.j().jb(this.p[tb][i].action);
                                    c.yf(this.p[tb][i].events, this.p[tb][i][y], this.p[tb][i].keyAscii, o)
                                }
                            d && a.fc(b);
                            c.Ea();
                            a.cc(c, b);
                            this.p[Sa] != g && c.Lc(this.p[Sa]);
                            e && c[Ta](e);
                            this.p[Qb] && c.rd(this.p[Qb]);
                            f && c.Ua(f);
                            !d && !a.s.vf && c[Hb]()
                        }
                }
};
dg[E].ne = function(a) {
    this.p[Ha] && a[Ta](ve(this.p[Ha]));
    this.p[Mb] && a.Ua(hf(this.p[Mb]));
    this.p[Sa] != g && a.Lc(this.p[Sa]);
    var b = [];
    this.p[Qb] && (b = this.p[Qb]);
    a.rd(b)
};
dg[E].Xb = function() {
};
dg[E].Rb = function() {
};
var eg = function(a) {
    this.We = a
};
eg[E].Yb = function(a) {
    var b = this.We[eb] + -16384, c = a.s.Nc(b);
    if (!c || !c.ec())
        c && c.Xa(), a.fc(b)
};
eg[E].Xb = function(a) {
    var b = this.We[eb] + -16384, c = a.s.Nc(b);
    c && c.ec() && (c.Xa(), a.fc(b))
};
eg[E].Rb = function() {
};
var gg = function(a) {
    this.rg = a
};
gg[E].Yb = function(a) {
    var b = this.rg, c;
    for (c in b[u])
        a.g.fe[c] = b[u][c], a.g.de[b[u][c]] = c
};
gg[E].Xb = function() {
};
gg[E].Rb = function() {
};
var jg = function(a, b) {
    this.Cg = a;
    this.N = b;
    this.dd = [];
    this.cf = k
};
jg[E].be = function(a) {
    this.dd[s](a)
};
jg[E].Yg = function(a) {
    Dc(this.dd, a)
};
jg[E].qf = function() {
    for (var a = this.dd[D] - 1; 0 <= a; --a)
        this.dd[a].ng();
    this.N.w();
    this.N.j().tb()
};
sa(jg[E], function() {
    if (!this.cf)
        this.cf = h, this.qf(), aa.setInterval(S(this.qf, this), 1E3 / this.Cg)
});
var gf = function(a, b) {
    this.Re = a;
    this.i = b
};
var Ag = function(a, b) {
    this.object = a;
    this.method = b
}, Bg = function(a, b) {
    this.A = a;
    ga(this, {});
    this.S = b
};
N = Bg[E];
N.get = function(a) {
    var b = this.A.k(this[u], a);
    return b in this[u] ? this[u][b] : this.S.get(a)
};
ra(N, function(a, b) {
    var c = this.A.k(this[u], a);
    if (c in this[u])
        if (c = this[u][c], c instanceof Ag) {
            var d = c[fb].m[wb];
            if (R(d))
                return d[L](c.object, b)
        } else {
            if (R(c))
                return c[L](this.ha(), b)
        }
    else
        return this.S[K](a, b)
});
N.set = function(a, b) {
    var c = this.A.k(this[u], a);
    return c in this[u] ? (this[u][c] = b, h) : this.S.set(a, b)
};
N.la = function(a, b) {
    this[u][this.A.Ya(this[u], a)] = b
};
N.tc = function(a) {
    a = this.A.Ya(this[u], a);
    a in this[u] || (this[u][a] = g)
};
N.yb = function(a) {
    this.A.k(this[u], a) in this[u] || this.S.yb(a)
};
ma(N, function() {
    return "function->" + this.S[C]()
});
N.Y = function(a) {
    return this.S.Y(a)
};
N.ha = function() {
    return this.S.ha()
};
var Cg = function(a, b, c) {
    this.A = a;
    ga(this, c);
    this.S = b
};
N = Cg[E];
N.get = function(a) {
    var b = this.A.k(this[u], a);
    return b in this[u] ? this[u][b] : this.S.get(a)
};
ra(N, function(a, b) {
    var c = this.A.k(this[u], a);
    if (c in this[u]) {
        if (c = this[u][c], R(c))
            return c[L](this[u], b)
    } else
        return this.S[K](a, b)
});
N.set = function(a, b) {
    var c = this.A.k(this[u], a);
    return c in this[u] ? (this[u][c] = b, h) : this.S.set(a, b)
};
N.la = function(a, b) {
    var c = this.A.k(this[u], a);
    c in this[u] ? this[u][c] = b : this.S.la(a, b)
};
N.tc = function(a) {
    this.A.k(this[u], a) in this[u] || this.S.tc(a)
};
N.yb = function(a) {
    var b = this.A.k(this[u], a);
    b in this[u] ? Eg(this[u], b) : this.S.yb(a)
};
ma(N, function() {
    return this[u] + "->" + this.S[C]()
});
N.Y = function(a) {
    return this.S.Y(a)
};
N.ha = function() {
    return this.S.ha()
};
var Fg = function(a, b, c) {
    this.A = a;
    ga(this, c);
    this.Md = b;
    this.Qe = c
};
N = Fg[E];
N.get = function(a) {
    var b = this.A.k(this[u], a);
    return b in this[u] ? this[u][b] : "this" == a[dc]() ? this.Qe : this.Md.get(a)
};
ra(N, function(a, b) {
    var c = this.A.k(this[u], a), d = this[u][c];
    if (c in this[u]) {
        if (R(d))
            return d[L](this[u], b)
    } else
        return this.Md[K](a, b)
});
N.set = function(a, b) {
    this[u][this.A.Ya(this[u], a)] = b;
    return h
};
N.la = function(a, b) {
    this[u][this.A.Ya(this[u], a)] = b
};
N.tc = function(a) {
    a = this.A.Ya(this[u], a);
    a in this[u] || (this[u][a] = g)
};
N.yb = function(a) {
    var b = this.A.k(this[u], a);
    b in this[u] ? Eg(this[u], b) : this.Md.yb(a)
};
ma(N, function() {
    return this[u] + ""
});
N.Y = function(a) {
    return ga(this, a ? a : this.Qe)
};
N.ha = function() {
    return this[u]
};
var Gg = function(a, b) {
    this.A = a;
    ga(this, new Z(b));
    this[u]._global = this[u];
    ie(this[u], "_global", 3)
};
N = Gg[E];
N.get = function(a) {
    return this[u][this.A.k(this[u], a)]
};
ra(N, function(a, b) {
    var c = this[u][this.A.k(this[u], a)];
    if (R(c))
        return c[L](this[u], b)
});
N.set = function() {
    return k
};
N.la = function() {
};
N.tc = function() {
};
N.yb = function(a) {
    a = this.A.k(this[u], a);
    Eg(this[u], a)
};
ma(N, function() {
    return "_global"
});
N.Y = function() {
};
N.ha = function() {
    return j
};
var Ke = function() {
};
T(Ke, je);
Ke[E].valueOf = function() {
    for (var a = "", b = this.__swiffy_d; b && b[Xa](); )
        a = "." + b[Xa]() + a, b = b[xa]();
    b && b instanceof Tf && b.g.P == b && (a = "_level0" + a);
    return a
};
Ke[E].getDepth = function() {
    return this.__swiffy_d[eb]
};
var Je = {_x: {get: function() {
            return this.__swiffy_d.Q().e / 20
        },set: function(a) {
            var b = this.__swiffy_d, a = tg(b, a, "_x");
            if (O(a)) {
                var c = b.Q();
                b[Ta](c.translate(20 * a - c.e, 0));
                b.ia()
            }
        }},_y: {get: function() {
            return this.__swiffy_d.Q().f / 20
        },set: function(a) {
            var b = this.__swiffy_d, a = tg(b, a, "_y");
            if (O(a)) {
                var c = b.Q();
                b[Ta](c.translate(0, 20 * a - c.f));
                b.ia()
            }
        }},_xscale: {get: function() {
            var a = this.__swiffy_d.Q();
            return 100 * n[ab](a.a * a.a + a.b * a.b)
        },set: function(a) {
            var b = this.__swiffy_d, a = tg(b, a, "_xscale");
            if (O(a)) {
                var c = b.Q();
                b[Ta](c.sc(a / (100 * n[ab](c.a * c.a + c.b * c.b)), 1));
                b.ia()
            }
        }},_yscale: {get: function() {
            var a = this.__swiffy_d.Q();
            return 100 * n[ab](a.c * a.c + a.d * a.d)
        },set: function(a) {
            var b = this.__swiffy_d, a = tg(b, a, "_yscale");
            if (O(a)) {
                var c = b.Q();
                b[Ta](c.sc(1, a / (100 * n[ab](c.c * c.c + c.d * c.d))));
                b.ia()
            }
        }},_alpha: {get: function() {
            return (256 * this.__swiffy_d.Ca.Aa | 0) / 2.56
        },set: function(a) {
            var b = this.__swiffy_d, a = tg(b, a, "_alpha");
            if (O(a)) {
                var c = b.Ca;
                b.Ua(new fe(c.ya, c.La, c.xa, c.Ka, c.wa, c.Ja, a / 100, c.Ma));
                b.ia()
            }
        }},_visible: {get: function() {
            return this.__swiffy_d.Ha
        },
        set: function(a) {
            var b = this.__swiffy_d, a = tg(b, a, "_visible");
            O(a) && (b.Sg(da(a)), b.ia())
        }},_rotation: {get: function() {
            var a = this.__swiffy_d.Q();
            return -180 * n.atan2(a.c, a.a) / n.PI
        },set: function(a) {
            var b = this.__swiffy_d, a = tg(b, a, "_rotation");
            if (O(a)) {
                var c = b.Q();
                b[Ta](c.Eg(a * n.PI / -180 - n.atan2(c.c, c.a)));
                b.ia()
            }
        }},_name: {get: function() {
            return this.__swiffy_d[Xa]()
        },set: function(a) {
            this.__swiffy_d.lb(a);
            this.__swiffy_d.ia()
        }},_quality: {get: function() {
            return 0
        },set: function() {
        }},_highquality: {get: function() {
            return 0
        },
        set: function() {
        }},_soundbuftime: {get: function() {
            return 0
        },set: function() {
        }},_parent: {get: function() {
            var a = this.__swiffy_d.wb;
            return a ? a.t() : a
        },set: function() {
        }},_xmouse: {get: function() {
            var a = this.__swiffy_d;
            return sg(a.Ia(), a.g.Kc).x
        },set: function() {
        }},_ymouse: {get: function() {
            var a = this.__swiffy_d;
            return sg(a.Ia(), a.g.Kc).y
        },set: function() {
        }},_url: {get: function() {
            return m.location.href
        },set: function() {
        }},_width: {get: function() {
            var a = this.__swiffy_d, b = a.vb();
            b.ka(a.Q());
            return (b.H - b.C) / 20
        },set: function(a) {
            var b = 
            this.__swiffy_d, a = b.g.j().Za(a);
            if (0 <= a) {
                var a = a / this._width, c = b.Q();
                b[Ta](c.sc(a, 1));
                b.ia()
            }
        }},_height: {get: function() {
            var a = this.__swiffy_d, b = a.vb();
            b.ka(a.Q());
            return (b.I - b.D) / 20
        },set: function(a) {
            var b = this.__swiffy_d, a = b.g.j().Za(a);
            if (0 <= a) {
                var a = a / this._height, c = b.Q();
                b[Ta](c.sc(a, 1));
                b[Ta](c.sc(1, a));
                b.ia()
            }
        }}};
ie(Ke[E], j, 3);
var Of = function() {
};
T(Of, Ke);
ie(Of[E], j, 3);
var X = function() {
};
T(X, Of);
X[E].enabled = h;
X[E].gotoAndStop = function(a) {
    var b = this.__swiffy_d;
    b.$b(b.oc(a), k)
};
X[E].gotoAndPlay = function(a) {
    var b = this.__swiffy_d;
    b.$b(b.oc(a), h)
};
ka(X[E], function() {
    this.__swiffy_d[cb]()
});
X[E].stop = function() {
    this.__swiffy_d[mb]()
};
X[E].nextFrame = function() {
    this.__swiffy_d.jf()
};
X[E].prevFrame = function() {
    this.__swiffy_d.kf()
};
X[E].onEnterFrame = function() {
};
X[E].onLoad = function() {
};
X[E].globalToLocal = function(a) {
    var b = this.__swiffy_d, c = b.g.j(), d = c.De(a);
    if (d != j) {
        var e = c.k(a, "x"), c = c.k(a, "y"), b = b.Ia(), d = sg(b, d);
        a[e] = d.x;
        a[c] = d.y
    }
};
X[E].localToGlobal = function(a) {
    var b = this.__swiffy_d, c = b.g.j(), d = c.De(a);
    if (d != j) {
        var e = c.k(a, "x"), c = c.k(a, "y"), b = b.Ia(), d = new W(20 * d.x, 20 * d.y);
        d.ka(b);
        d.x /= 20;
        d.y /= 20;
        a[e] = d.x;
        a[c] = d.y
    }
};
X[E].createEmptyMovieClip = function(a, b) {
    var c = this.__swiffy_d, d = new Tf({frameCount: 0,tags: []}, c.g, c.L);
    d.ic = h;
    d.lb(a);
    d.Ea();
    d[Hb]();
    c.fc(b);
    c.cc(d, b);
    return d.t()
};
X[E].getNextHighestDepth = function() {
    return this.__swiffy_d.s.Gg()
};
X[E].getInstanceAtDepth = function(a) {
    var b = this.__swiffy_d;
    if (!(-16384 > a) && (a = b.s.Nc(a)))
        return a instanceof Pe ? a.t() : b.t()
};
X[E].attachMovie = function(a, b, c, d) {
    var e = this.__swiffy_d, a = e.g.fe[a];
    if (O(a) && (a = e.qd(a), a.ic = h, a.lb(b), a.Ea(), a[Hb](), e.fc(c), e.cc(a, c), O(d))) {
        var b = a.t(), f;
        for (f in d)
            b[f] = d[f]
    }
};
X[E].duplicateMovieClip = function(a, b, c) {
    var d = this.__swiffy_d, e = d[xa]();
    if (e && (a = d.duplicate(e, a, b), O(c))) {
        var a = a.t(), f;
        for (f in c)
            a[f] = c[f]
    }
};
X[E].removeMovieClip = function() {
    var a = this.__swiffy_d, b = a[xa]();
    a.ic && b && (a.J(), b[Bb](a))
};
X[E].swapDepths = function(a) {
    var b = this.__swiffy_d, c = b[xa]();
    if (c) {
        if (a instanceof Ke) {
            a = a.__swiffy_d;
            if (a[xa]() != c)
                return;
            a = a[eb]
        } else
            a = p(a);
        c.Wd(b[eb], a)
    }
};
l[Pa](X[E], function() {
    var a = {}, b;
    for (b in Re) {
        var c = Re[b];
        a[c] = {get: Te,set: oc(Se, c)}
    }
    return a
}());
X[E].getBytesLoaded = function() {
    return this.getBytesTotal()
};
X[E].getBytesTotal = function() {
    return 1E3
};
X[E].getBounds = function(a) {
    var b = this.__swiffy_d, c = b.vb();
    if (O(a)) {
        var d = j;
        a instanceof X ? d = a.__swiffy_d : P(a) && (d = b.g.j().gc(b, a));
        if (d != j)
            a = d.Ia().Hd(), c.ka(a.multiply(b.Ia()));
        else
            return
    }
    b = {};
    b.C = c.C / 20;
    b.H = c.H / 20;
    b.D = c.D / 20;
    b.I = c.I / 20;
    return b
};
X[E].getURL = function(a, b, c) {
    var d = 0;
    P(c) && (c = c[dc](), "get" == c ? d = 1 : "post" == c && (d = 2));
    ug(this, a, b, d)
};
X[E].hitTest = function(a, b, c) {
    if (O(a)) {
        var d = this.__swiffy_d, e = d.vb();
        e.ka(d.Ia());
        if (!O(b) && !O(c)) {
            if (b = j, a instanceof X ? b = a.__swiffy_d : P(a) && (b = d.g.j().gc(d, a)), b != j)
                return a = b.vb(), a.ka(b.Ia()), e.hg(a)
        } else if (O(b))
            return e.contains(20 * a, 20 * b)
    }
    return k
};
X[E].clear = function() {
    this.__swiffy_d.Cb("clear", arguments)
};
X[E].moveTo = function() {
    this.__swiffy_d.Cb("moveTo", arguments)
};
X[E].lineTo = function() {
    this.__swiffy_d.Cb("lineTo", arguments)
};
X[E].curveTo = function() {
    this.__swiffy_d.Cb("curveTo", arguments)
};
X[E].lineStyle = function() {
    this.__swiffy_d.Cb("lineStyle", arguments)
};
X[E].beginFill = function() {
    this.__swiffy_d.Cb("beginFill", arguments)
};
X[E].endFill = function() {
    this.__swiffy_d.Cb("endFill", arguments)
};
var hg = {_currentframe: {get: function() {
            return n.max(1, this.__swiffy_d.R + 1)
        },set: function() {
        }},_totalframes: {get: function() {
            return this.__swiffy_d.Ib
        },set: function() {
        }},_framesloaded: {get: function() {
            return this.__swiffy_d.W
        },set: function() {
        }},_root: {get: function() {
            return this.__swiffy_d.g.P.t()
        },set: function() {
        }},_target: {get: function() {
            var a = this._root;
            if (this == a)
                return "/";
            for (var b = "", c = this; c && c != a; )
                b = "/" + c._name + b, c = c._parent;
            return b
        },set: function() {
        }},_level0: {get: function() {
            return this.__swiffy_d.g.P.t()
        },
        set: function() {
        }}};
ie(X[E], j, 3);
var kg = function(a) {
    this.N = a
};
kg[E].addListener = function() {
};
kg[E].removeListener = function() {
};
l[x](kg[E], "height", {get: function() {
        return this.N.se / 20
    },set: function() {
    }});
l[x](kg[E], "width", {get: function() {
        return this.N.te / 20
    },set: function() {
    }});
ie(kg[E], j, 3);
var Z = function(a) {
    l[x](this, "__swiffy_s", {value: a});
    this.Color = Rf(a);
    ie(this, "Color", 3)
};
Z[E].ASSetPropFlags = ie;
Z[E].clearInterval = function(a) {
    aa.clearInterval(a)
};
Z[E].clearTimeout = function(a) {
    aa.clearTimeout(a)
};
Z[E].escape = function(a) {
    return escape(a)[t](/[-@*+.\/_]/g, function(a) {
        return "%" + a[Lb](0)[C](16).toUpperCase()
    })
};
Z[E].parseFloat = function(a) {
    return parseFloat(a)
};
Z[E].parseInt = function(a, b) {
    return ea(a, b)
};
Z[E].isFinite = function(a) {
    return isFinite(a)
};
Z[E].isNaN = function(a) {
    return isNaN(a)
};
Z[E].unescape = function(a) {
    return unescape(a)
};
Z[E].setInterval = function(a) {
    if (R(a) && 2 <= arguments[D])
        return aa.setInterval[L](j, arguments);
    if (ic(a) && 3 <= arguments[D] && R(a[arguments[1]])) {
        var b = S(a[arguments[1]], a), c = arguments[2], d = ba[E][Ga][K](arguments, 3);
        return aa.setInterval[L](j, [b, c][Ka](d))
    }
};
Z[E].setTimeout = function(a, b) {
    if (R(a) && 2 <= arguments[D])
        return aa.setTimeout[L](j, arguments)
};
Z[E].updateAfterEvent = function() {
    var a = this.__swiffy_s;
    setTimeout(function() {
        a.w()
    }, 0)
};
Z[E].Math = n;
Z[E].MovieClip = X;
Z[E].String = String;
Z[E].Number = p;
Z[E].Date = le;
Z[E].Array = me;
Z[E].Object = je;
Z[E].Key = ne;
l[x](Z[E], "Mouse", {get: function() {
        return this.__swiffy_s.Wa
    },set: function() {
    }});
l[x](Z[E], "Stage", {get: function() {
        return this.__swiffy_s.Nf
    },set: function() {
    }});
ie(Z[E], j, 3);
var Y = function(a) {
    this.F = [];
    this.$ = this.O = j;
    this.ze = [];
    this.oa = [];
    this.P = a;
    this.Yf = this.ye();
    this.Zc = [];
    this.Wc = k;
    this.U = 0;
    this.X = 4;
    this.ie = new Gg(this, a.g)
};
N = Y[E];
N.Se = function(a) {
    this.Zc[s](S(function() {
        this.Jc(a)
    }, this))
};
N.Ob = function(a) {
    this.Zc[s](a)
};
N.tb = function() {
    if (!this.Wc) {
        for (this.Wc = h; 0 < this.Zc[D]; )
            this.Zc[za]()();
        this.Wc = k
    }
};
N.ye = function() {
    return (new Date).getTime()
};
N.reset = function(a) {
    this.O = this.$ = a;
    this.F = [];
    this.U = 0;
    this.X = 4;
    na(this.F, this.F[D] + this.X);
    this.o = new Fg(this, this.ie, a.t())
};
N.Jc = function(a) {
    if (!a.i.kc) {
        this[Sb](a.i);
        for (var b = 0; b < a.Re[D]; )
            b = a.Re[b][K](this, b + 1)
    }
};
N.ke = function(a, b) {
    return oc(function(c) {
        b.kc || (c[Sb](b), a())
    }, this)
};
N.Oe = function(a, b) {
    return this.tf(a)[K](this, b)
};
var Hg = function(a) {
    a = a[t](/\.\.|\/:?|:/g, function(a) {
        return ".." == a ? "_parent" : "."
    });
    "." == a[0] && (a = "_root" + a);
    "." == a[a[D] - 1] && (a = a.substring(0, a[D] - 1));
    return a
};
Y[E].Qc = function(a, b) {
    if (!O(b))
        b = this.O;
    var c = a[H](":");
    return 1 < c[D] ? {path: this.gc(b, c[0]),jc: c[1]} : {path: b,jc: a}
};
Y[E].trace = function(a) {
    for (var b = 0; b < this.ze[D]; b++)
        this.ze[b](a);
    aa.console && aa.console.log("[trace] " + a)
};
Y[E].trace = Y[E].trace;
var Ig = {"boolean": {},number: {},string: {},undefined: {}}, Jg = function(a) {
    for (var b = l[ya](a[wb][E]), a = Ig[typeof a], c = 0; c < b[D]; ++c) {
        var d = b[c], e = d[dc]();
        d != e && (a[e] = d)
    }
};
Jg(k);
Jg(0);
Jg("");
var Kg = function(a) {
    if (!a)
        return {constructor: "constructor"};
    var b = a.__swiffy_nm;
    if (!b || b.__swiffy_nm != a) {
        for (var b = l[qb](Kg(l.getPrototypeOf(a))), c = l[ya](a), d = 0; d < c[D]; ++d) {
            var e = c[d], f = e[dc]();
            e != f && (b[f] = e)
        }
        l[x](b, "__swiffy_nm", {value: a,writable: h});
        l[x](a, "__swiffy_nm", {value: b,writable: h})
    }
    return b
};
N = Y[E];
N.k = function(a, b) {
    if (7 <= this.$.Ta) {
        if (a instanceof Ke) {
            if (b in a)
                return b;
            var c = b[dc]();
            if (c in a && -1 < Lg[v](c))
                return c
        }
        return b
    }
    var d = Ig[typeof a];
    if (!d) {
        if (b in a)
            return b;
        d = Kg(a)
    }
    c = b[dc]();
    return (d = d[c]) ? d : c
};
N.Ya = function(a, b) {
    if (7 <= this.$.Ta) {
        if (a instanceof Ke) {
            if (b in a)
                return b;
            var c = b[dc]();
            if (c in a && -1 < Lg[v](c))
                return c
        }
        return b
    }
    var d = Ig[typeof a];
    if (d)
        return c = b[dc](), (d = d[c]) ? d : c;
    if (b in a)
        return b;
    var e = Kg(a), c = b[dc]();
    if (d = e[c])
        return d;
    return b == c || c in a ? c : e[c] = b
};
N.De = function(a) {
    if (ic(a)) {
        var b = a[this.k(a, "x")], a = a[this.k(a, "y")];
        if ("number" == typeof b && "number" == typeof a)
            return new W(b, a)
    }
    return j
};
N.Y = function(a) {
    (this.O = a) ? this.o.Y(a.t()) : this.o.Y(j)
};
N.ha = function() {
    return this.O
};
N.push = function(a) {
    this.F[s](a)
};
N.pop = function() {
    if (this.F[D] > this.U + this.X)
        return this.F.pop()
};
N.od = function(a) {
    var b = this.$.Ta;
    "boolean" == typeof a && 5 > b && (a = a ? "1" : "0");
    return !O(a) && 7 > b ? "" : a + ""
};
N.Za = function(a) {
    var b = this.$.Ta;
    if (!O(a) || a === j)
        return 7 > b ? 0 : p.NaN;
    return P(a) ? (a = p(a), 5 > b && isNaN(a) ? 0 : a) : p(a)
};
N.l = function() {
    return this.Za(this.pop())
};
N.u = function() {
    return this.od(this.pop())
};
N.Hc = function() {
    var a = this.pop();
    "string" == typeof a && (a = p(a));
    return da(a)
};
N.fd = function() {
    var a = this.pop();
    if (a instanceof Ke)
        return a;
    if (a = this.gc(this.O, "" + a))
        return a.t()
};
N.gc = function(a, b) {
    if (!a || !b)
        return a;
    for (var b = Hg(b), c = a.t(), d = b[H]("."), e = 0; e < d[D] && c; e++)
        c = c[this.k(c, d[e])];
    return c ? c.__swiffy_d : j
};
N.sg = function(a) {
    var b = this.o.ha();
    if (a)
        for (var a = Hg(a), a = a[H]("."), c = 0; c < a[D] && b; c++)
            b = b[this.k(b, a[c])];
    return b
};
N.Wf = function(a, b, c, d) {
    this.Wc || this[Sb](c);
    a = this.Qc(a, c);
    if (a[A]) {
        var c = a[A].t(), e = this.Ya(c, a.jc);
        O(a[A].dc[e]) || (a[A].dc[e] = []);
        a[A].dc[e][s](b);
        if (e in c && (b.Cd("" + c[e]), d = c[e], l[Cb](c, e).get))
            return;
        l[x](c, e, Mg(d, a[A].dc[e]))
    }
};
var Mg = function(a, b) {
    var c = a;
    return {get: function() {
            return c
        },set: function(a) {
            c = a;
            for (var e = 0; e < b[D]; e++)
                b[e].Cd(a)
        },configurable: h}
};
Y[E].eg = function(a, b, c) {
    a = this.Qc(a, c);
    a[A] && (c = this.k(a[A].t(), a.jc), Dc(a[A].dc[c], b))
};
var Eg = function(a, b) {
    delete a[b];
    if (a instanceof X) {
        var c = a.__swiffy_d.s.Fg(b);
        c && Fe(a, c, b)
    }
};
Y[E].jb = function(a) {
    for (var b = [], c = 0; c < a[D]; ++c)
        b[c] = this.tf(a[c]);
    return b
};
Y[E].tf = function(a) {
    var b = $[a[B]];
    return !b ? S(Ng, this, a[B]) : b.ea ? b(a, this) : b
};
var Lg = "_x,_y,_xscale,_yscale,_currentframe,_totalframes,_alpha,_visible,_width,_height,_rotation,_target,_framesloaded,_name,_droptarget,_url,_highquality,_focusrect,_soundbuftime,_quality,_xmouse,_ymouse".split(","), $__ = {4: function(a) {
        var b = this.O;
        b != j && b.jf();
        return a
    },5: function(a) {
        var b = this.O;
        b != j && b.kf();
        return a
    },6: function(a) {
        var b = this.O;
        b != j && b[cb]();
        return a
    }};
ka(Y[E], function() {
    var a = this.O;
    a != j && a[cb]()
});
ka(Y[E], Y[E][cb]);
$__[7] = function(a) {
    var b = this.O;
    b != j && b[mb]();
    return a
};
$__[9] = function(a) {
    var b = this.O;
    b != j && b.Gb().Ig();
    return a
};
$__[10] = function(a) {
    var b = this.l();
    this[s](this.l() + b);
    return a
};
$__[11] = function(a) {
    var b = this.l();
    this[s](this.l() - b);
    return a
};
$__[12] = function(a) {
    var b = this.l();
    this[s](this.l() * b);
    return a
};
$__[13] = function(a) {
    var b = this.l();
    this[s](this.l() / b);
    return a
};
$__[14] = function(a) {
    var b = this.l(), b = this.l() == b;
    5 > this.$.Ta && (b = b ? 1 : 0);
    this[s](b);
    return a
};
$__[15] = function(a) {
    var b = this.l();
    this[s](this.l() < b);
    return a
};
$__[16] = function(a) {
    var b = this.Hc();
    this[s](this.Hc() && b);
    return a
};
$__[17] = function(a) {
    var b = this.Hc();
    this[s](this.Hc() || b);
    return a
};
$__[18] = function(a) {
    this[s](!this.Hc());
    return a
};
$__[19] = function(a) {
    var b = this.u();
    this[s](this.u() == b);
    return a
};
$__[20] = function(a) {
    this[s](this.u()[D]);
    return a
};
$__[21] = function(a) {
    var b = p(this.pop()), c = n.max(0, p(this.pop()) - 1);
    this[s](this.u().substr(c, b));
    return a
};
$__[23] = function(a) {
    this.pop();
    return a
};
$__[24] = function(a) {
    var b = this.l(), b = 0 > b ? n.ceil(b) : n[Ja](b);
    this[s](b);
    return a
};
$__[28] = function(a) {
    var b = this.u(), b = Hg(b), b = b[H]("."), c = this.o.get(b[0]);
    if (1 < b[D]) {
        var d;
        for (d = 1; O(c) && d < b[D] - 1; ++d)
            c = c[this.k(c, b[d])];
        O(c) && (c = c[this.k(c, b[d])])
    }
    this[s](c);
    return a
};
$__[29] = function(a) {
    var b = this.pop(), c = this.u(), c = Hg(c), d = c[H](".");
    if (1 == d[D])
        this.o.set(c, b);
    else {
        var c = this.o.get(d[0]), e;
        for (e = 1; O(c) && e < d[D] - 1; ++e)
            c = c[this.k(c, d[e])];
        O(c) && (c[this.Ya(c, d[e])] = b)
    }
    return a
};
$__[33] = function(a) {
    var b = this.u();
    this[s](this.u() + b);
    return a
};
$__[34] = function(a) {
    var b = Lg[this.l()], c = this.fd();
    c ? this[s](c[b]) : this[s](g);
    return a
};
$__[35] = function(a) {
    var b = this.pop(), c = Lg[this.l()], d = this.fd();
    d && c && (d[c] = b);
    return a
};
$__[36] = function(a) {
    var b = this.l(), c = this.u(), d = this.fd();
    d && d.__swiffy_d.duplicate(this.O, c, b);
    return a
};
$__[37] = function(a) {
    var b = this.fd();
    b instanceof X && b.removeMovieClip();
    return a
};
$__[38] = function(a) {
    var b = this.pop();
    this.trace(O(b) ? this.od(b) : "undefined");
    return a
};
var Ng = function(a, b) {
    return b
};
$__[51] = function(a) {
    var b = this.l();
    this[s](String.fromCharCode(b));
    return a
};
$__[50] = function(a) {
    this[s](this.u()[Lb](0));
    return a
};
$__[52] = function(a) {
    this[s](this.ye() - this.Yf);
    return a
};
$__[48] = function(a) {
    var b = this.l(), c;
    do
        c = n[Ja](n.random() * b);
    while (c == b && 0 < b);
    this[s](c);
    return a
};
$__[60] = function(a) {
    var b = this.pop();
    this.o.la(this.pop(), b);
    return a
};
Y[E].la = function(a, b) {
    this.o.la(a, b)
};
Y[E].def = Y[E].la;
$__[65] = function(a) {
    this.o.tc(this.pop());
    return a
};
$__[59] = function(a) {
    var b = this.u(), b = Hg(b), c = b[H](".");
    if (1 == c[D])
        this.o.yb(b);
    else {
        var b = this.o.get(c[0]), d;
        for (d = 1; O(b) && d < c[D] - 1; ++d)
            b = b[this.k(b, c[d])];
        O(b) && Eg(b, this.k(b, c[d]))
    }
    return a
};
$__[62] = function() {
    ta(this, this.pop());
    return p.MAX_VALUE
};
$__[63] = function(a) {
    var b = this.l();
    this[s](this.l() % b);
    return a
};
$__[71] = function(a) {
    var b = this.pop(), c = this.pop();
    P(b) || P(c) ? this[s](this.od(c) + this.od(b)) : this[s](this.Za(c) + this.Za(b));
    return a
};
$__[72] = function(a) {
    var b = this.pop(), c = this.pop();
    if (!P(b) || !P(c))
        b = this.Za(b), c = this.Za(c);
    b !== b || c !== c ? this[s](g) : this[s](c < b);
    return a
};
$__[103] = function(a) {
    var b = this.pop();
    this[s](this.pop() > b);
    return a
};
$__[73] = function(a) {
    var b = this.pop();
    this[s](this.pop() == b);
    return a
};
$__[102] = function(a) {
    var b = this.pop();
    this[s](this.pop() === b);
    return a
};
$__[41] = function(a) {
    var b = this.u();
    this[s](this.u() < b);
    return a
};
$__[104] = function(a) {
    var b = this.u();
    this[s](this.u() > b);
    return a
};
$__[105] = function(a) {
    var b = this.pop(), c = this.pop();
    T(c, b);
    return a
};
$__[74] = function(a) {
    this[s](this.l());
    return a
};
$__[75] = function(a) {
    this[s](this.u());
    return a
};
$__[76] = function(a) {
    var b = this.pop();
    this[s](b);
    this[s](b);
    return a
};
$__[77] = function(a) {
    var b = this.pop(), c = this.pop();
    this[s](b);
    this[s](c);
    return a
};
$__[78] = function(a) {
    var b = this.u(), c = this.pop(), d = g;
    c && (d = c[this.k(c, b)]);
    this[s](d);
    return a
};
$__[79] = function(a) {
    var b = this.pop(), c = this.u(), d = this.pop();
    d && (d[this.Ya(d, c)] = b);
    return a
};
$__[80] = function(a) {
    var b = this.l();
    this[s](++b);
    return a
};
$__[81] = function(a) {
    var b = this.l();
    this[s](--b);
    return a
};
$__[96] = function(a) {
    var b = this.l(), c = this.l();
    this[s](b & c);
    return a
};
$__[97] = function(a) {
    var b = this.l(), c = this.l();
    this[s](b | c);
    return a
};
$__[98] = function(a) {
    var b = this.l();
    this[s](this.l() ^ b);
    return a
};
$__[99] = function(a) {
    var b = this.l();
    this[s](this.l() << b);
    return a
};
$__[100] = function(a) {
    var b = this.l();
    this[s](this.l() >> b);
    return a
};
$__[101] = function(a) {
    var b = this.l();
    this[s](this.l() >>> b);
    return a
};
$__[58] = function(a) {
    var b = this.u(), c = this.pop();
    c && Eg(c, this.k(c, b));
    return a
};
$__[129] = function(a, b) {
    return S(Og, b, a.frame)
};
$__[129].ea = h;
var Og = function(a, b) {
    var c = this.O;
    c != j && c.$b(a, k);
    return b
};
Y[E].bh = function(a) {
    var b = this.O;
    b != j && b.$b(a, k)
};
Y[E].gotoFrame = Y[E].bh;
$__[140] = function(a, b) {
    return S(Pg, b, a.label)
};
$__[140].ea = h;
var Pg = function(a, b) {
    var c = this.O;
    if (c != j) {
        var d = c.oc(a);
        d != g && c.$b(d, k)
    }
    return b
};
$__[136] = function(a, b) {
    return S(Qg, b, a.constants)
};
$__[136].ea = h;
var Qg = function(a, b) {
    this.oa = a;
    return b
};
$__[32] = function(a) {
    var b = this.pop();
    b = b instanceof Ke ? b.__swiffy_d : (b = "" + b) ? this.gc(this.$, b) : this.o.Y(j).__swiffy_d;
    this.Y(b);
    return a
};
$__[69] = function(a) {
    var b = this.pop(), c = g;
    b instanceof Ke && (c = b.valueOf());
    this[s](c);
    return a
};
$__[305] = function(a, b) {
    return S(Rg, b, a.value)
};
$__[305].ea = h;
var Rg = function(a, b) {
    this[s](a);
    return b
};
$__[306] = function(a) {
    this[s](g);
    return a
};
$__[307] = function(a) {
    this[s](p[Ba]);
    return a
};
$__[308] = function(a) {
    this[s](p[Ib]);
    return a
};
$__[309] = function(a) {
    this[s](p.NaN);
    return a
};
$__[304] = function(a, b) {
    return S(Sg, b, a.index)
};
$__[304].ea = h;
var Sg = function(a, b) {
    this[s](this.oa[a]);
    return b
};
$__[303] = function(a, b) {
    return S(Tg, b, a.index)
};
$__[303].ea = h;
var Tg = function(a, b) {
    0 <= a && a < this.X ? this[s](this.F[this.U + a]) : this[s](g);
    return b
};
$__[135] = function(a, b) {
    return S(Ug, b, a.index)
};
$__[135].ea = h;
var Ug = function(a, b) {
    0 <= a && a < this.X && (this.F[this.U + a] = this.F[this.F[D] - 1]);
    return b
};
$__[154] = function(a, b) {
    return S(Vg, b, a[fb])
};
$__[154].ea = h;
var Vg = function(a, b) {
    var c = this.u(), d = this.u();
    ug(this.O.t(), d, c, a);
    return b
};
$__[148] = function(a, b) {
    return S(Wg, b, b.jb(a[Ab]))
};
$__[148].ea = h;
var Wg = function(a, b) {
    var c = this.pop();
    if (!(c instanceof je))
        return b;
    var d = this.o;
    this.o = new Cg(this, d, c);
    for (c = 0; c < a[D]; )
        c = a[c][K](this, c + 1);
    this.o = d;
    return b
};
$__[155] = function(a, b) {
    return S(Xg, b, a.args, b.jb(a[Ab]))
};
$__[155].ea = h;
var Xg = function(a, b, c) {
    var d = this, e = this.oa, f = this.o, i = function() {
        var c = d.o, i = d.U, w = d.X, Q = d.oa, M = d.O, lb = d.$, J;
        5 < d.$.Ta ? (J = f, d.o = new Bg(d, J), d.Y(f.ha().__swiffy_d)) : (J = new Fg(d, d.ie, this), d.o = new Bg(d, J), this instanceof Ke && d.Y(this.__swiffy_d));
        d.oa = e;
        d.U = d.F[D];
        d.X = 4;
        na(d.F, d.F[D] + d.X);
        for (J = 0; J < a[D]; ++J)
            d.o.la(a[J], arguments[J]);
        d.o.la("this", this);
        ta(d, g);
        for (J = 0; J < b[D]; )
            J = b[J][K](d, J + 1);
        na(d.F, d.U);
        d.o = c;
        d.U = i;
        d.X = w;
        d.oa = Q;
        d.$ = lb;
        d.O = M;
        return d[Kb]
    };
    T(i, je);
    this[s](i);
    return c
};
$__[142] = function(a, b) {
    return S(Yg, b, a.args, b.jb(a[Ab]), a.preloads, a.suppress, a.registerCount)
};
$__[142].ea = h;
var Yg = function(a, b, c, d, e, f) {
    var i = this, o = this.oa, q = this.o, w = function() {
        var f = i.o, w = i.U, lb = i.X, J = i.oa, Dg = i.ha(), nb = i.$;
        i.o = new Bg(i, q);
        i.oa = o;
        i.Y(q.ha().__swiffy_d);
        i.U = i.F[D];
        i.X = e;
        na(i.F, i.F[D] + i.X);
        d & 4 || i.o.la("this", this);
        d & 1 || i.o.la("super", new Ag(this, arguments.callee));
        for (var G = 0; G < c[D] && G + 1 < e; ++G)
            i.F[i.U + G + 1] = i.o.get(c[G]);
        for (G = 0; G < a[D]; ++G)
            P(a[G]) ? i.o.la(a[G], arguments[G]) : i.F[i.U + a[G]] = arguments[G];
        ta(i, g);
        for (G = 0; G < b[D]; )
            G = b[G][K](i, G + 1);
        na(i.F, i.U);
        i.o = f;
        i.U = w;
        i.X = lb;
        i.oa = J;
        i.$ = nb;
        i.Y(Dg);
        return i[Kb]
    };
    T(w, je);
    this[s](w);
    return f
};
$__[61] = function(a) {
    for (var b = this.u(), c = this.l(), d = [], e = 0; e < c; ++e)
        d[e] = this.pop();
    this[s](this.o[K](b, d));
    return a
};
$__[82] = function(a) {
    for (var b = this.pop(), c = this.pop(), d = this.l(), e = [], f = 0; f < d; f++)
        e[f] = this.pop();
    if (c != j)
        if (b) {
            var d = g, i;
            if (c instanceof Ag) {
                i = c.object;
                for (var o = k, q = i[wb]; q; q = q.m && q.m[wb]) {
                    if (o) {
                        d = q[E]["" + b];
                        break
                    }
                    for (var w = l[ya](q[E]), f = 0; f < w[D] && !o; f++)
                        q[E][w[f]] === c[fb] && (o = h)
                }
            } else
                d = c[this.k(c, "" + b)], i = c;
            d ? this[s](d[L](i, e)) : this[s](g)
        } else if (c instanceof Ag)
            b = c[fb].m[wb], R(b) ? this[s](b[L](c.object, e)) : this[s](g);
        else
            this[s](c[L](this.o.ha(), e));
    else
        this[s](g);
    return a
};
$__[64] = function(a) {
    for (var b = this.o.get(this.u()), c = this.l(), d = [], e = 0; e < c; ++e)
        d[e] = this.pop();
    R(b) || (b = je);
    c = l[qb](b[E]);
    b[L](c, d);
    this[s](c);
    return a
};
$__[83] = function(a) {
    for (var b = this.pop(), c = this.pop(), d = this.l(), e = [], f = 0; f < d; f++)
        e[f] = this.pop();
    d = g;
    c != j && (d = b ? c[this.k(c, "" + b)] : c);
    R(d) || (d = je);
    b = l[qb](d[E]);
    d[L](b, e);
    this[s](b);
    return a
};
$__[84] = function(a) {
    var b = this.pop(), c = this.pop(), d = k;
    R(b) && (d = c instanceof b);
    this[s](d);
    return a
};
$__[67] = function(a) {
    for (var b = new je, c = this.l(), d = 0; d < c; d++) {
        var e = this.pop(), f = this.u();
        b[f] = e
    }
    this[s](b);
    return a
};
$__[66] = function(a) {
    for (var b = [], c = this.l(), d = 0; d < c; d++) {
        var e = this.pop();
        b[d] = e
    }
    this[s](b);
    return a
};
$__[68] = function(a) {
    var b = this.pop();
    this[s](b instanceof X ? "movieclip" : b == j || b == g ? "" + b : typeof b);
    return a
};
$__[85] = function(a) {
    var b = this.pop();
    this[s](g);
    for (var c in b)
        this[s](c);
    return a
};
$__[153] = function(a, b) {
    return S(Zg, b, a[Db])
};
$__[153].ea = h;
var Zg = function(a) {
    return a
};
$__[157] = function(a, b) {
    return S($g, b, a[Db])
};
$__[157].ea = h;
var $g = function(a, b) {
    return da(this.pop()) ? a : b
};
$__[158] = function(a) {
    var b = this.Qc(this.u());
    if (b[A]) {
        var c = b[A].oc(b.jc);
        if (c != g && (c = b[A].ag(c))) {
            for (var d = this.o, e = this.U, f = this.X, i = this.oa, o = this.ha(), q = this.$, w = this.F, Q = 0; Q < c[D]; Q++)
                c[Q].Rb(b[A]);
            this.F = w;
            this.o = d;
            this.U = e;
            this.X = f;
            this.oa = i;
            this.$ = q;
            this.Y(o)
        }
    }
    return a
};
$__[159] = function(a, b) {
    return S(ah, b, a.frameBias, a[cb])
};
$__[159].ea = h;
var ah = function(a, b, c) {
    var d = this.Qc(this.u());
    if (d[A]) {
        var e = d[A].oc(d.jc);
        e != g && d[A].$b(e + a, b)
    }
    return c
};
