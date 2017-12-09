var Zepto = function () {
    function F(a) {
        return null == a ? String(a) : x[y.call(a)] || "object";
    }

    function G(a) {
        return "function" == F(a);
    }

    function H(a) {
        return null != a && a == a.window;
    }

    function I(a) {
        return null != a && a.nodeType == a.DOCUMENT_NODE;
    }

    function J(a) {
        return "object" == F(a);
    }

    function K(a) {
        return J(a) && !H(a) && Object.getPrototypeOf(a) == Object.prototype;
    }

    function L(a) {
        var b = !!a && "length" in a && a.length, d = c.type(a);
        return "function" != d && !H(a) && ("array" == d || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
    }

    function M(a) {
        return g.call(a, function (a) {
            return null != a;
        });
    }

    function N(a) {
        return a.length > 0 ? c.fn.concat.apply([], a) : a;
    }

    function O(a) {
        return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
    }

    function P(a) {
        return a in k ? k[a] : k[a] = new RegExp("(^|\\s)" + a + "(\\s|$)");
    }

    function Q(a, b) {
        return "number" != typeof b || l[O(a)] ? b : b + "px";
    }

    function R(a) {
        var b, c;
        return j[a] || (b = i.createElement(a), i.body.appendChild(b), c = getComputedStyle(b, "").getPropertyValue("display"),
            b.parentNode.removeChild(b), "none" == c && (c = "block"), j[a] = c), j[a];
    }

    function S(a) {
        return "children" in a ? h.call(a.children) : c.map(a.childNodes, function (a) {
            return 1 == a.nodeType ? a : void 0;
        });
    }

    function T(a, b) {
        var c, d = a ? a.length : 0;
        for (c = 0; d > c; c++) this[c] = a[c];
        this.length = d, this.selector = b || "";
    }

    function U(c, d, e) {
        for (b in d) e && (K(d[b]) || E(d[b])) ? (K(d[b]) && !K(c[b]) && (c[b] = {}), E(d[b]) && !E(c[b]) && (c[b] = []),
            U(c[b], d[b], e)) : d[b] !== a && (c[b] = d[b]);
    }

    function V(a, b) {
        return null == b ? c(a) : c(a).filter(b);
    }

    function W(a, b, c, d) {
        return G(b) ? b.call(a, c, d) : b;
    }

    function X(a, b, c) {
        null == c ? a.removeAttribute(b) : a.setAttribute(b, c);
    }

    function Y(b, c) {
        var d = b.className || "", e = d && d.baseVal !== a;
        return c === a ? e ? d.baseVal : d : (e ? d.baseVal = c : b.className = c, void 0);
    }

    function Z(a) {
        try {
            return a ? "true" == a || ("false" == a ? !1 : "null" == a ? null : +a + "" == a ? +a : /^[\[\{]/.test(a) ? c.parseJSON(a) : a) : a;
        } catch (b) {
            return a;
        }
    }

    function $(a, b) {
        b(a);
        for (var c = 0, d = a.childNodes.length; d > c; c++) $(a.childNodes[c], b);
    }

    var a, b, c, d, A, B, e = [], f = e.concat, g = e.filter, h = e.slice, i = window.document, j = {}, k = {}, l = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
        }, m = /^\s*<(\w+|!)[^>]*>/, n = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        o = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, p = /^(?:body|html)$/i,
        q = /([A-Z])/g, r = ["val", "css", "html", "text", "data", "width", "height", "offset"],
        s = ["after", "prepend", "before", "append"], t = i.createElement("table"), u = i.createElement("tr"), v = {
            tr: i.createElement("tbody"),
            tbody: t,
            thead: t,
            tfoot: t,
            td: u,
            th: u,
            "*": i.createElement("div")
        }, w = /^[\w-]*$/, x = {}, y = x.toString, z = {}, C = i.createElement("div"), D = {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        }, E = Array.isArray || function (a) {
            return a instanceof Array;
        };
    return z.matches = function (a, b) {
        var c, d, e, f;
        return b && a && 1 === a.nodeType ? (c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector) ? c.call(a, b) : (e = a.parentNode,
            f = !e, f && (e = C).appendChild(a), d = ~z.qsa(e, b).indexOf(a), f && C.removeChild(a),
            d) : !1;
    }, A = function (a) {
        return a.replace(/-+(.)?/g, function (a, b) {
            return b ? b.toUpperCase() : "";
        });
    }, B = function (a) {
        return g.call(a, function (b, c) {
            return a.indexOf(b) == c;
        });
    }, z.fragment = function (b, d, e) {
        var f, g, j;
        return n.test(b) && (f = c(i.createElement(RegExp.$1))), f || (b.replace && (b = b.replace(o, "<$1></$2>")),
        d === a && (d = m.test(b) && RegExp.$1), d in v || (d = "*"), j = v[d], j.innerHTML = "" + b,
            f = c.each(h.call(j.childNodes), function () {
                j.removeChild(this);
            })), K(e) && (g = c(f), c.each(e, function (a, b) {
            r.indexOf(a) > -1 ? g[a](b) : g.attr(a, b);
        })), f;
    }, z.Z = function (a, b) {
        return new T(a, b);
    }, z.isZ = function (a) {
        return a instanceof z.Z;
    }, z.init = function (b, d) {
        var e;
        if (!b) return z.Z();
        if ("string" == typeof b) if (b = b.trim(), "<" == b[0] && m.test(b)) e = z.fragment(b, RegExp.$1, d),
            b = null; else {
            if (d !== a) return c(d).find(b);
            e = z.qsa(i, b);
        } else {
            if (G(b)) return c(i).ready(b);
            if (z.isZ(b)) return b;
            if (E(b)) e = M(b); else if (J(b)) e = [b], b = null; else if (m.test(b)) e = z.fragment(b.trim(), RegExp.$1, d),
                b = null; else {
                if (d !== a) return c(d).find(b);
                e = z.qsa(i, b);
            }
        }
        return z.Z(e, b);
    }, c = function (a, b) {
        return z.init(a, b);
    }, c.extend = function (a) {
        var b, c = h.call(arguments, 1);
        return "boolean" == typeof a && (b = a, a = c.shift()), c.forEach(function (c) {
            U(a, c, b);
        }), a;
    }, z.qsa = function (a, b) {
        var c, d = "#" == b[0], e = !d && "." == b[0], f = d || e ? b.slice(1) : b, g = w.test(f);
        return a.getElementById && g && d ? (c = a.getElementById(f)) ? [c] : [] : 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType ? [] : h.call(g && !d && a.getElementsByClassName ? e ? a.getElementsByClassName(f) : a.getElementsByTagName(b) : a.querySelectorAll(b));
    }, c.contains = i.documentElement.contains ? function (a, b) {
        return a !== b && a.contains(b);
    } : function (a, b) {
        for (; b && (b = b.parentNode);) if (b === a) return !0;
        return !1;
    }, c.type = F, c.isFunction = G, c.isWindow = H, c.isArray = E, c.isPlainObject = K,
        c.isEmptyObject = function (a) {
            var b;
            for (b in a) return !1;
            return !0;
        }, c.isNumeric = function (a) {
        var b = Number(a), c = typeof a;
        return null != a && "boolean" != c && ("string" != c || a.length) && !isNaN(b) && isFinite(b) || !1;
    }, c.inArray = function (a, b, c) {
        return e.indexOf.call(b, a, c);
    }, c.camelCase = A, c.trim = function (a) {
        return null == a ? "" : String.prototype.trim.call(a);
    }, c.uuid = 0, c.support = {}, c.expr = {}, c.noop = function () {
    }, c.map = function (a, b) {
        var c, e, f, d = [];
        if (L(a)) for (e = 0; e < a.length; e++) c = b(a[e], e), null != c && d.push(c); else for (f in a) c = b(a[f], f),
        null != c && d.push(c);
        return N(d);
    }, c.each = function (a, b) {
        var c, d;
        if (L(a)) {
            for (c = 0; c < a.length; c++) if (b.call(a[c], c, a[c]) === !1) return a;
        } else for (d in a) if (b.call(a[d], d, a[d]) === !1) return a;
        return a;
    }, c.grep = function (a, b) {
        return g.call(a, b);
    }, window.JSON && (c.parseJSON = JSON.parse), c.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        x["[object " + b + "]"] = b.toLowerCase();
    }), c.fn = {
        constructor: z.Z,
        length: 0,
        forEach: e.forEach,
        reduce: e.reduce,
        push: e.push,
        sort: e.sort,
        splice: e.splice,
        indexOf: e.indexOf,
        concat: function () {
            var a, b, c = [];
            for (a = 0; a < arguments.length; a++) b = arguments[a], c[a] = z.isZ(b) ? b.toArray() : b;
            return f.apply(z.isZ(this) ? this.toArray() : this, c);
        },
        map: function (a) {
            return c(c.map(this, function (b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function () {
            return c(h.apply(this, arguments));
        },
        ready: function (a) {
            if ("complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll) setTimeout(function () {
                a(c);
            }, 0); else {
                var b = function () {
                    i.removeEventListener("DOMContentLoaded", b, !1), window.removeEventListener("load", b, !1),
                        a(c);
                };
                i.addEventListener("DOMContentLoaded", b, !1), window.addEventListener("load", b, !1);
            }
            return this;
        },
        get: function (b) {
            return b === a ? h.call(this) : this[b >= 0 ? b : b + this.length];
        },
        toArray: function () {
            return this.get();
        },
        size: function () {
            return this.length;
        },
        remove: function () {
            return this.each(function () {
                null != this.parentNode && this.parentNode.removeChild(this);
            });
        },
        each: function (a) {
            return e.every.call(this, function (b, c) {
                return a.call(b, c, b) !== !1;
            }), this;
        },
        filter: function (a) {
            return G(a) ? this.not(this.not(a)) : c(g.call(this, function (b) {
                return z.matches(b, a);
            }));
        },
        add: function (a, b) {
            return c(B(this.concat(c(a, b))));
        },
        is: function (a) {
            return this.length > 0 && z.matches(this[0], a);
        },
        not: function (b) {
            var e, d = [];
            return G(b) && b.call !== a ? this.each(function (a) {
                b.call(this, a) || d.push(this);
            }) : (e = "string" == typeof b ? this.filter(b) : L(b) && G(b.item) ? h.call(b) : c(b),
                this.forEach(function (a) {
                    e.indexOf(a) < 0 && d.push(a);
                })), c(d);
        },
        has: function (a) {
            return this.filter(function () {
                return J(a) ? c.contains(this, a) : c(this).find(a).size();
            });
        },
        eq: function (a) {
            return -1 === a ? this.slice(a) : this.slice(a, +a + 1);
        },
        first: function () {
            var a = this[0];
            return a && !J(a) ? a : c(a);
        },
        last: function () {
            var a = this[this.length - 1];
            return a && !J(a) ? a : c(a);
        },
        find: function (a) {
            var b, d = this;
            return b = a ? "object" == typeof a ? c(a).filter(function () {
                var a = this;
                return e.some.call(d, function (b) {
                    return c.contains(b, a);
                });
            }) : 1 == this.length ? c(z.qsa(this[0], a)) : this.map(function () {
                return z.qsa(this, a);
            }) : c();
        },
        closest: function (a, b) {
            var d = [], e = "object" == typeof a && c(a);
            return this.each(function (c, f) {
                for (; f && !(e ? e.indexOf(f) >= 0 : z.matches(f, a));) f = f !== b && !I(f) && f.parentNode;
                f && d.indexOf(f) < 0 && d.push(f);
            }), c(d);
        },
        parents: function (a) {
            for (var b = [], d = this; d.length > 0;) d = c.map(d, function (a) {
                return (a = a.parentNode) && !I(a) && b.indexOf(a) < 0 ? (b.push(a), a) : void 0;
            });
            return V(b, a);
        },
        parent: function (a) {
            return V(B(this.pluck("parentNode")), a);
        },
        children: function (a) {
            return V(this.map(function () {
                return S(this);
            }), a);
        },
        contents: function () {
            return this.map(function () {
                return this.contentDocument || h.call(this.childNodes);
            });
        },
        siblings: function (a) {
            return V(this.map(function (a, b) {
                return g.call(S(b.parentNode), function (a) {
                    return a !== b;
                });
            }), a);
        },
        empty: function () {
            return this.each(function () {
                this.innerHTML = "";
            });
        },
        pluck: function (a) {
            return c.map(this, function (b) {
                return b[a];
            });
        },
        show: function () {
            return this.each(function () {
                "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = R(this.nodeName));
            });
        },
        replaceWith: function (a) {
            return this.before(a).remove();
        },
        wrap: function (a) {
            var d, e, b = G(a);
            return this[0] && !b && (d = c(a).get(0), e = d.parentNode || this.length > 1),
                this.each(function (f) {
                    c(this).wrapAll(b ? a.call(this, f) : e ? d.cloneNode(!0) : d);
                });
        },
        wrapAll: function (a) {
            if (this[0]) {
                c(this[0]).before(a = c(a));
                for (var b; (b = a.children()).length;) a = b.first();
                c(a).append(this);
            }
            return this;
        },
        wrapInner: function (a) {
            var b = G(a);
            return this.each(function (d) {
                var e = c(this), f = e.contents(), g = b ? a.call(this, d) : a;
                f.length ? f.wrapAll(g) : e.append(g);
            });
        },
        unwrap: function () {
            return this.parent().each(function () {
                c(this).replaceWith(c(this).children());
            }), this;
        },
        clone: function () {
            return this.map(function () {
                return this.cloneNode(!0);
            });
        },
        hide: function () {
            return this.css("display", "none");
        },
        toggle: function (b) {
            return this.each(function () {
                var d = c(this);
                (b === a ? "none" == d.css("display") : b) ? d.show() : d.hide();
            });
        },
        prev: function (a) {
            return c(this.pluck("previousElementSibling")).filter(a || "*");
        },
        next: function (a) {
            return c(this.pluck("nextElementSibling")).filter(a || "*");
        },
        html: function (a) {
            return 0 in arguments ? this.each(function (b) {
                var d = this.innerHTML;
                c(this).empty().append(W(this, a, b, d));
            }) : 0 in this ? this[0].innerHTML : null;
        },
        text: function (a) {
            return 0 in arguments ? this.each(function (b) {
                var c = W(this, a, b, this.textContent);
                this.textContent = null == c ? "" : "" + c;
            }) : 0 in this ? this.pluck("textContent").join("") : null;
        },
        attr: function (c, d) {
            var e;
            return "string" != typeof c || 1 in arguments ? this.each(function (a) {
                if (1 === this.nodeType) if (J(c)) for (b in c) X(this, b, c[b]); else X(this, c, W(this, d, a, this.getAttribute(c)));
            }) : 0 in this && 1 == this[0].nodeType && null != (e = this[0].getAttribute(c)) ? e : a;
        },
        removeAttr: function (a) {
            return this.each(function () {
                1 === this.nodeType && a.split(" ").forEach(function (a) {
                    X(this, a);
                }, this);
            });
        },
        prop: function (a, b) {
            return a = D[a] || a, 1 in arguments ? this.each(function (c) {
                this[a] = W(this, b, c, this[a]);
            }) : this[0] && this[0][a];
        },
        removeProp: function (a) {
            return a = D[a] || a, this.each(function () {
                delete this[a];
            });
        },
        data: function (b, c) {
            var d = "data-" + b.replace(q, "-$1").toLowerCase(), e = 1 in arguments ? this.attr(d, c) : this.attr(d);
            return null !== e ? Z(e) : a;
        },
        val: function (a) {
            return 0 in arguments ? (null == a && (a = ""), this.each(function (b) {
                this.value = W(this, a, b, this.value);
            })) : this[0] && (this[0].multiple ? c(this[0]).find("option").filter(function () {
                return this.selected;
            }).pluck("value") : this[0].value);
        },
        offset: function (a) {
            if (a) return this.each(function (b) {
                var d = c(this), e = W(this, a, b, d.offset()), f = d.offsetParent().offset(), g = {
                    top: e.top - f.top,
                    left: e.left - f.left
                };
                "static" == d.css("position") && (g["position"] = "relative"), d.css(g);
            });
            if (!this.length) return null;
            if (i.documentElement !== this[0] && !c.contains(i.documentElement, this[0])) return {
                top: 0,
                left: 0
            };
            var b = this[0].getBoundingClientRect();
            return {
                left: b.left + window.pageXOffset,
                top: b.top + window.pageYOffset,
                width: Math.round(b.width),
                height: Math.round(b.height)
            };
        },
        css: function (a, d) {
            var e, f, g, h;
            if (arguments.length < 2) {
                if (e = this[0], "string" == typeof a) {
                    if (!e) return;
                    return e.style[A(a)] || getComputedStyle(e, "").getPropertyValue(a);
                }
                if (E(a)) {
                    if (!e) return;
                    return f = {}, g = getComputedStyle(e, ""), c.each(a, function (a, b) {
                        f[b] = e.style[A(b)] || g.getPropertyValue(b);
                    }), f;
                }
            }
            if (h = "", "string" == F(a)) d || 0 === d ? h = O(a) + ":" + Q(a, d) : this.each(function () {
                this.style.removeProperty(O(a));
            }); else for (b in a) a[b] || 0 === a[b] ? h += O(b) + ":" + Q(b, a[b]) + ";" : this.each(function () {
                this.style.removeProperty(O(b));
            });
            return this.each(function () {
                this.style.cssText += ";" + h;
            });
        },
        index: function (a) {
            return a ? this.indexOf(c(a)[0]) : this.parent().children().indexOf(this[0]);
        },
        hasClass: function (a) {
            return a ? e.some.call(this, function (a) {
                return this.test(Y(a));
            }, P(a)) : !1;
        },
        addClass: function (a) {
            return a ? this.each(function (b) {
                if ("className" in this) {
                    d = [];
                    var e = Y(this), f = W(this, a, b, e);
                    f.split(/\s+/g).forEach(function (a) {
                        c(this).hasClass(a) || d.push(a);
                    }, this), d.length && Y(this, e + (e ? " " : "") + d.join(" "));
                }
            }) : this;
        },
        removeClass: function (b) {
            return this.each(function (c) {
                if ("className" in this) {
                    if (b === a) return Y(this, "");
                    d = Y(this), W(this, b, c, d).split(/\s+/g).forEach(function (a) {
                        d = d.replace(P(a), " ");
                    }), Y(this, d.trim());
                }
            });
        },
        toggleClass: function (b, d) {
            return b ? this.each(function (e) {
                var f = c(this), g = W(this, b, e, Y(this));
                g.split(/\s+/g).forEach(function (b) {
                    (d === a ? !f.hasClass(b) : d) ? f.addClass(b) : f.removeClass(b);
                });
            }) : this;
        },
        scrollTop: function (b) {
            if (this.length) {
                var c = "scrollTop" in this[0];
                return b === a ? c ? this[0].scrollTop : this[0].pageYOffset : this.each(c ? function () {
                    this.scrollTop = b;
                } : function () {
                    this.scrollTo(this.scrollX, b);
                });
            }
        },
        scrollLeft: function (b) {
            if (this.length) {
                var c = "scrollLeft" in this[0];
                return b === a ? c ? this[0].scrollLeft : this[0].pageXOffset : this.each(c ? function () {
                    this.scrollLeft = b;
                } : function () {
                    this.scrollTo(b, this.scrollY);
                });
            }
        },
        position: function () {
            if (this.length) {
                var a = this[0], b = this.offsetParent(), d = this.offset(), e = p.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
                return d.top -= parseFloat(c(a).css("margin-top")) || 0, d.left -= parseFloat(c(a).css("margin-left")) || 0,
                    e.top += parseFloat(c(b[0]).css("border-top-width")) || 0, e.left += parseFloat(c(b[0]).css("border-left-width")) || 0,
                    {
                        top: d.top - e.top,
                        left: d.left - e.left
                    };
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || i.body; a && !p.test(a.nodeName) && "static" == c(a).css("position");) a = a.offsetParent;
                return a;
            });
        }
    }, c.fn.detach = c.fn.remove, ["width", "height"].forEach(function (b) {
        var d = b.replace(/./, function (a) {
            return a[0].toUpperCase();
        });
        c.fn[b] = function (e) {
            var f, g = this[0];
            return e === a ? H(g) ? g["inner" + d] : I(g) ? g.documentElement["scroll" + d] : (f = this.offset()) && f[b] : this.each(function (a) {
                g = c(this), g.css(b, W(this, e, a, g[b]()));
            });
        };
    }), s.forEach(function (b, d) {
        var e = d % 2;
        c.fn[b] = function () {
            var b, g, f = c.map(arguments, function (d) {
                var e = [];
                return b = F(d), "array" == b ? (d.forEach(function (b) {
                    return b.nodeType !== a ? e.push(b) : c.zepto.isZ(b) ? e = e.concat(b.get()) : (e = e.concat(z.fragment(b)),
                        void 0);
                }), e) : "object" == b || null == d ? d : z.fragment(d);
            }), h = this.length > 1;
            return f.length < 1 ? this : this.each(function (a, b) {
                g = e ? b : b.parentNode, b = 0 == d ? b.nextSibling : 1 == d ? b.firstChild : 2 == d ? b : null;
                var j = c.contains(i.documentElement, g);
                f.forEach(function (a) {
                    if (h) a = a.cloneNode(!0); else if (!g) return c(a).remove();
                    g.insertBefore(a, b), j && $(a, function (a) {
                        if (!(null == a.nodeName || "SCRIPT" !== a.nodeName.toUpperCase() || a.type && "text/javascript" !== a.type || a.src)) {
                            var b = a.ownerDocument ? a.ownerDocument.defaultView : window;
                            b["eval"].call(b, a.innerHTML);
                        }
                    });
                });
            });
        }, c.fn[e ? b + "To" : "insert" + (d ? "Before" : "After")] = function (a) {
            return c(a)[b](this), this;
        };
    }), z.Z.prototype = T.prototype = c.fn, z.uniq = B, z.deserializeValue = Z, c.zepto = z,
        c;
}();

window.$ = window.Zepto = Zepto;

!function (a) {
    function e(b) {
        return b = a(b), !(!b.width() && !b.height()) && "none" !== b.css("display");
    }

    function j(a, b) {
        var c, d, e, h;
        return a = a.replace(/=#\]/g, '="#"]'), e = g.exec(a), e && e[2] in f && (c = f[e[2]],
            d = e[3], a = e[1], d && (h = Number(d), d = isNaN(h) ? d.replace(/^["']|["']$/g, "") : h)),
            b(a, c, d);
    }

    var b = a.zepto, c = b.qsa, d = b.matches, f = a.expr[":"] = {
        visible: function () {
            return e(this) ? this : void 0;
        },
        hidden: function () {
            return e(this) ? void 0 : this;
        },
        selected: function () {
            return this.selected ? this : void 0;
        },
        checked: function () {
            return this.checked ? this : void 0;
        },
        parent: function () {
            return this.parentNode;
        },
        first: function (a) {
            return 0 === a ? this : void 0;
        },
        last: function (a, b) {
            return a === b.length - 1 ? this : void 0;
        },
        eq: function (a, b, c) {
            return a === c ? this : void 0;
        },
        contains: function (b, c, d) {
            return a(this).text().indexOf(d) > -1 ? this : void 0;
        },
        has: function (a, c, d) {
            return b.qsa(this, d).length ? this : void 0;
        }
    }, g = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"), h = /^\s*>/, i = "Zepto" + +new Date();
    b.qsa = function (d, e) {
        return j(e, function (f, g, j) {
            var k, l;
            try {
                !f && g ? f = "*" : h.test(f) && (k = a(d).addClass(i), f = "." + i + " " + f), l = c(d, f);
            } catch (m) {
                throw console.error("error performing selector: %o", e), m;
            } finally {
                k && k.removeClass(i);
            }
            return g ? b.uniq(a.map(l, function (a, b) {
                return g.call(a, b, l, j);
            })) : l;
        });
    }, b.matches = function (a, b) {
        return j(b, function (b, c, e) {
            return !(b && !d(a, b) || c && c.call(a, null, e) !== a);
        });
    };
}(Zepto);

!function (a) {
    function l(a) {
        return a._zid || (a._zid = b++);
    }

    function m(a, b, c, d) {
        if (b = n(b), b.ns) var e = o(b.ns);
        return (g[l(a)] || []).filter(function (a) {
            return !(!a || b.e && a.e != b.e || b.ns && !e.test(a.ns) || c && l(a.fn) !== l(c) || d && a.sel != d);
        });
    }

    function n(a) {
        var b = ("" + a).split(".");
        return {
            e: b[0],
            ns: b.slice(1).sort().join(" ")
        };
    }

    function o(a) {
        return new RegExp("(?:^| )" + a.replace(" ", " .* ?") + "(?: |$)");
    }

    function p(a, b) {
        return a.del && !i && a.e in j || !!b;
    }

    function q(a) {
        return k[a] || i && j[a] || a;
    }

    function r(b, d, e, f, h, i, j) {
        var m = l(b), o = g[m] || (g[m] = []);
        d.split(/\s/).forEach(function (d) {
            var g, l;
            return "ready" == d ? a(document).ready(e) : (g = n(d), g.fn = e, g.sel = h, g.e in k && (e = function (b) {
                var c = b.relatedTarget;
                return !c || c !== this && !a.contains(this, c) ? g.fn.apply(this, arguments) : void 0;
            }), g.del = i, l = i || e, g.proxy = function (a) {
                if (a = x(a), !a.isImmediatePropagationStopped()) {
                    a.data = f;
                    var d = l.apply(b, a._args == c ? [a] : [a].concat(a._args));
                    return d === !1 && (a.preventDefault(), a.stopPropagation()), d;
                }
            }, g.i = o.length, o.push(g), "addEventListener" in b && b.addEventListener(q(g.e), g.proxy, p(g, j)),
                void 0);
        });
    }

    function s(a, b, c, d, e) {
        var f = l(a);
        (b || "").split(/\s/).forEach(function (b) {
            m(a, b, c, d).forEach(function (b) {
                delete g[f][b.i], "removeEventListener" in a && a.removeEventListener(q(b.e), b.proxy, p(b, e));
            });
        });
    }

    function x(b, d) {
        if (d || !b.isDefaultPrevented) {
            d || (d = b), a.each(w, function (a, c) {
                var e = d[a];
                b[a] = function () {
                    return this[c] = t, e && e.apply(d, arguments);
                }, b[c] = u;
            });
            try {
                b.timeStamp || (b.timeStamp = Date.now());
            } catch (e) {
            }
            (d.defaultPrevented !== c ? d.defaultPrevented : "returnValue" in d ? d.returnValue === !1 : d.getPreventDefault && d.getPreventDefault()) && (b.isDefaultPrevented = t);
        }
        return b;
    }

    function y(a) {
        var b, d = {
            originalEvent: a
        };
        for (b in a) v.test(b) || a[b] === c || (d[b] = a[b]);
        return x(d, a);
    }

    var c, t, u, v, w, b = 1, d = Array.prototype.slice, e = a.isFunction, f = function (a) {
        return "string" == typeof a;
    }, g = {}, h = {}, i = "onfocusin" in window, j = {
        focus: "focusin",
        blur: "focusout"
    }, k = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    h.click = h.mousedown = h.mouseup = h.mousemove = "MouseEvents", a.event = {
        add: r,
        remove: s
    }, a.proxy = function (b, c) {
        var h, g = 2 in arguments && d.call(arguments, 2);
        if (e(b)) return h = function () {
            return b.apply(c, g ? g.concat(d.call(arguments)) : arguments);
        }, h._zid = l(b), h;
        if (f(c)) return g ? (g.unshift(b[c], b), a.proxy.apply(null, g)) : a.proxy(b[c], b);
        throw new TypeError("expected function");
    }, a.fn.bind = function (a, b, c) {
        return this.on(a, b, c);
    }, a.fn.unbind = function (a, b) {
        return this.off(a, b);
    }, a.fn.one = function (a, b, c, d) {
        return this.on(a, b, c, d, 1);
    }, t = function () {
        return !0;
    }, u = function () {
        return !1;
    }, v = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/, w = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    }, a.fn.delegate = function (a, b, c) {
        return this.on(b, a, c);
    }, a.fn.undelegate = function (a, b, c) {
        return this.off(b, a, c);
    }, a.fn.live = function (b, c) {
        return a(document.body).delegate(this.selector, b, c), this;
    }, a.fn.die = function (b, c) {
        return a(document.body).undelegate(this.selector, b, c), this;
    }, a.fn.on = function (b, g, h, i, j) {
        var k, l, m = this;
        return b && !f(b) ? (a.each(b, function (a, b) {
            m.on(a, g, h, b, j);
        }), m) : (f(g) || e(i) || i === !1 || (i = h, h = g, g = c), (i === c || h === !1) && (i = h,
            h = c), i === !1 && (i = u), m.each(function (c, e) {
            j && (k = function (a) {
                return s(e, a.type, i), i.apply(this, arguments);
            }), g && (l = function (b) {
                var c, f = a(b.target).closest(g, e).get(0);
                return f && f !== e ? (c = a.extend(y(b), {
                    currentTarget: f,
                    liveFired: e
                }), (k || i).apply(f, [c].concat(d.call(arguments, 1)))) : void 0;
            }), r(e, b, i, h, g, l || k);
        }));
    }, a.fn.off = function (b, d, g) {
        var h = this;
        return b && !f(b) ? (a.each(b, function (a, b) {
            h.off(a, d, b);
        }), h) : (f(d) || e(g) || g === !1 || (g = d, d = c), g === !1 && (g = u), h.each(function () {
            s(this, b, g, d);
        }));
    }, a.fn.trigger = function (b, c) {
        return b = f(b) || a.isPlainObject(b) ? a.Event(b) : x(b), b._args = c, this.each(function () {
            b.type in j && "function" == typeof this[b.type] ? this[b.type]() : "dispatchEvent" in this ? this.dispatchEvent(b) : a(this).triggerHandler(b, c);
        });
    }, a.fn.triggerHandler = function (b, c) {
        var d, e;
        return this.each(function (g, h) {
            d = y(f(b) ? a.Event(b) : b), d._args = c, d.target = h, a.each(m(h, b.type || b), function (a, b) {
                return e = b.proxy(d), d.isImmediatePropagationStopped() ? !1 : void 0;
            });
        }), e;
    }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (b) {
        a.fn[b] = function (a) {
            return 0 in arguments ? this.bind(b, a) : this.trigger(b);
        };
    }), a.Event = function (a, b) {
        var c, d, e;
        if (f(a) || (b = a, a = b.type), c = document.createEvent(h[a] || "Events"), d = !0,
                b) for (e in b) "bubbles" == e ? d = !!b[e] : c[e] = b[e];
        return c.initEvent(a, d, !0), x(c);
    };
}(Zepto);

!function (a) {
    function m(b, c, d) {
        var e = a.Event(c);
        return a(b).trigger(e, d), !e.isDefaultPrevented();
    }

    function n(a, b, d, e) {
        return a.global ? m(b || c, d, e) : void 0;
    }

    function o(b) {
        b.global && 0 === a.active++ && n(b, null, "ajaxStart");
    }

    function p(b) {
        b.global && !--a.active && n(b, null, "ajaxStop");
    }

    function q(a, b) {
        var c = b.context;
        return b.beforeSend.call(c, a, b) === !1 || n(b, c, "ajaxBeforeSend", [a, b]) === !1 ? !1 : (n(b, c, "ajaxSend", [a, b]),
            void 0);
    }

    function r(a, b, c, d) {
        var e = c.context, f = "success";
        c.success.call(e, a, f, b), d && d.resolveWith(e, [a, f, b]), n(c, e, "ajaxSuccess", [b, c, a]),
            t(f, b, c);
    }

    function s(a, b, c, d, e) {
        var f = d.context;
        d.error.call(f, c, b, a), e && e.rejectWith(f, [c, b, a]), n(d, f, "ajaxError", [c, d, a || b]),
            t(b, c, d);
    }

    function t(a, b, c) {
        var d = c.context;
        c.complete.call(d, b, a), n(c, d, "ajaxComplete", [b, c]), p(c);
    }

    function u(a, b, c) {
        if (c.dataFilter == v) return a;
        var d = c.context;
        return c.dataFilter.call(d, a, b);
    }

    function v() {
    }

    function w(a) {
        return a && (a = a.split(";", 2)[0]), a && (a == j ? "html" : a == i ? "json" : g.test(a) ? "script" : h.test(a) && "xml") || "text";
    }

    function x(a, b) {
        return "" == b ? a : (a + "&" + b).replace(/[&?]{1,2}/, "?");
    }

    function y(b) {
        b.processData && b.data && "string" != a.type(b.data) && (b.data = a.param(b.data, b.traditional)),
        !b.data || b.type && "GET" != b.type.toUpperCase() && "jsonp" != b.dataType || (b.url = x(b.url, b.data),
            b.data = void 0);
    }

    function z(b, c, d, e) {
        return a.isFunction(c) && (e = d, d = c, c = void 0), a.isFunction(d) || (e = d,
            d = void 0), {
            url: b,
            data: c,
            success: d,
            dataType: e
        };
    }

    function B(b, c, d, e) {
        var f, g = a.isArray(c), h = a.isPlainObject(c);
        a.each(c, function (c, i) {
            f = a.type(i), e && (c = d ? e : e + "[" + (h || "object" == f || "array" == f ? c : "") + "]"),
                !e && g ? b.add(i.name, i.value) : "array" == f || !d && "object" == f ? B(b, i, d, c) : b.add(c, i);
        });
    }

    var d, e, A, b = +new Date(), c = window.document, f = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        g = /^(?:text|application)\/javascript/i, h = /^(?:text|application)\/xml/i, i = "application/json",
        j = "text/html", k = /^\s*$/, l = c.createElement("a");
    l.href = window.location.href, a.active = 0, a.ajaxJSONP = function (d, e) {
        if (!("type" in d)) return a.ajax(d);
        var j, m, f = d.jsonpCallback, g = (a.isFunction(f) ? f() : f) || "Zepto" + b++, h = c.createElement("script"),
            i = window[g], k = function (b) {
                a(h).triggerHandler("error", b || "abort");
            }, l = {
                abort: k
            };
        return e && e.promise(l), a(h).on("load error", function (b, c) {
            clearTimeout(m), a(h).off().remove(), "error" != b.type && j ? r(j[0], l, d, e) : s(null, c || "error", l, d, e),
                window[g] = i, j && a.isFunction(i) && i(j[0]), i = j = void 0;
        }), q(l, d) === !1 ? (k("abort"), l) : (window[g] = function () {
            j = arguments;
        }, h.src = d.url.replace(/\?(.+)=\?/, "?$1=" + g), c.head.appendChild(h), d.timeout > 0 && (m = setTimeout(function () {
            k("timeout");
        }, d.timeout)), l);
    }, a.ajaxSettings = {
        type: "GET",
        beforeSend: v,
        success: v,
        error: v,
        complete: v,
        context: null,
        global: !0,
        xhr: function () {
            return new window.XMLHttpRequest();
        },
        accepts: {
            script: "text/javascript, application/javascript, application/x-javascript",
            json: i,
            xml: "application/xml, text/xml",
            html: j,
            text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0,
        dataFilter: v
    }, a.ajax = function (b) {
        var h, i, j, m, C, n, p, t, z, A, B, D, f = a.extend({}, b || {}), g = a.Deferred && a.Deferred();
        for (d in a.ajaxSettings) void 0 === f[d] && (f[d] = a.ajaxSettings[d]);
        if (o(f), f.crossDomain || (h = c.createElement("a"), h.href = f.url, h.href = h.href,
                f.crossDomain = l.protocol + "//" + l.host != h.protocol + "//" + h.host), f.url || (f.url = window.location.toString()),
            (i = f.url.indexOf("#")) > -1 && (f.url = f.url.slice(0, i)), y(f), j = f.dataType,
                m = /\?.+=\?/.test(f.url), m && (j = "jsonp"), f.cache !== !1 && (b && b.cache === !0 || "script" != j && "jsonp" != j) || (f.url = x(f.url, "_=" + Date.now())),
            "jsonp" == j) return m || (f.url = x(f.url, f.jsonp ? f.jsonp + "=?" : f.jsonp === !1 ? "" : "callback=?")),
            a.ajaxJSONP(f, g);
        if (n = f.accepts[j], p = {}, t = function (a, b) {
                p[a.toLowerCase()] = [a, b];
            }, z = /^([\w-]+:)\/\//.test(f.url) ? RegExp.$1 : window.location.protocol, A = f.xhr(),
                B = A.setRequestHeader, g && g.promise(A), f.crossDomain || t("X-Requested-With", "XMLHttpRequest"),
                t("Accept", n || "*/*"), (n = f.mimeType || n) && (n.indexOf(",") > -1 && (n = n.split(",", 2)[0]),
            A.overrideMimeType && A.overrideMimeType(n)), (f.contentType || f.contentType !== !1 && f.data && "GET" != f.type.toUpperCase()) && t("Content-Type", f.contentType || "application/x-www-form-urlencoded"),
                f.headers) for (e in f.headers) t(e, f.headers[e]);
        if (A.setRequestHeader = t, A.onreadystatechange = function () {
                if (4 == A.readyState) {
                    A.onreadystatechange = v, clearTimeout(C);
                    var b, c = !1;
                    if (A.status >= 200 && A.status < 300 || 304 == A.status || 0 == A.status && "file:" == z) {
                        if (j = j || w(f.mimeType || A.getResponseHeader("content-type")), "arraybuffer" == A.responseType || "blob" == A.responseType) b = A.response; else {
                            b = A.responseText;
                            try {
                                b = u(b, j, f), "script" == j ? (1, eval)(b) : "xml" == j ? b = A.responseXML : "json" == j && (b = k.test(b) ? null : a.parseJSON(b));
                            } catch (d) {
                                c = d;
                            }
                            if (c) return s(c, "parsererror", A, f, g);
                        }
                        r(b, A, f, g);
                    } else s(A.statusText || null, A.status ? "error" : "abort", A, f, g);
                }
            }, q(A, f) === !1) return A.abort(), s(null, "abort", A, f, g), A;
        if (D = "async" in f ? f.async : !0, A.open(f.type, f.url, D, f.username, f.password),
                f.xhrFields) for (e in f.xhrFields) A[e] = f.xhrFields[e];
        for (e in p) B.apply(A, p[e]);
        return f.timeout > 0 && (C = setTimeout(function () {
            A.onreadystatechange = v, A.abort(), s(null, "timeout", A, f, g);
        }, f.timeout)), A.send(f.data ? f.data : null), A;
    }, a.get = function () {
        return a.ajax(z.apply(null, arguments));
    }, a.post = function () {
        var b = z.apply(null, arguments);
        return b.type = "POST", a.ajax(b);
    }, a.getJSON = function () {
        var b = z.apply(null, arguments);
        return b.dataType = "json", a.ajax(b);
    }, a.fn.load = function (b, c, d) {
        if (!this.length) return this;
        var h, e = this, g = b.split(/\s/), i = z(b, c, d), j = i.success;
        return g.length > 1 && (i.url = g[0], h = g[1]), i.success = function (b) {
            e.html(h ? a("<div>").html(b.replace(f, "")).find(h) : b), j && j.apply(e, arguments);
        }, a.ajax(i), this;
    }, A = encodeURIComponent, a.param = function (b, c) {
        var d = [];
        return d.add = function (b, c) {
            a.isFunction(c) && (c = c()), null == c && (c = ""), this.push(A(b) + "=" + A(c));
        }, B(d, b, c), d.join("&").replace(/%20/g, "+");
    };
}(Zepto);

!function (a) {
    var c, b = [];
    a.fn.remove = function () {
        return this.each(function () {
            this.parentNode && ("IMG" === this.tagName && (b.push(this), this.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
            c && clearTimeout(c), c = setTimeout(function () {
                b = [];
            }, 6e4)), this.parentNode.removeChild(this));
        });
    };
}(Zepto);

!function (a) {
    a.Callbacks = function (b) {
        b = a.extend({}, b);
        var c, d, e, f, g, h, i = [], j = !b.once && [], k = function (a) {
            for (c = b.memory && a, d = !0, h = f || 0, f = 0, g = i.length, e = !0; i && g > h; ++h) if (i[h].apply(a[0], a[1]) === !1 && b.stopOnFalse) {
                c = !1;
                break;
            }
            e = !1, i && (j ? j.length && k(j.shift()) : c ? i.length = 0 : l.disable());
        }, l = {
            add: function () {
                if (i) {
                    var d = i.length, h = function (c) {
                        a.each(c, function (a, c) {
                            "function" == typeof c ? b.unique && l.has(c) || i.push(c) : c && c.length && "string" != typeof c && h(c);
                        });
                    };
                    h(arguments), e ? g = i.length : c && (f = d, k(c));
                }
                return this;
            },
            remove: function () {
                return i && a.each(arguments, function (b, c) {
                    for (var d; (d = a.inArray(c, i, d)) > -1;) i.splice(d, 1), e && (g >= d && --g,
                    h >= d && --h);
                }), this;
            },
            has: function (b) {
                return !(!i || !(b ? a.inArray(b, i) > -1 : i.length));
            },
            empty: function () {
                return g = i.length = 0, this;
            },
            disable: function () {
                return i = j = c = void 0, this;
            },
            disabled: function () {
                return !i;
            },
            lock: function () {
                return j = void 0, c || l.disable(), this;
            },
            locked: function () {
                return !j;
            },
            fireWith: function (a, b) {
                return !i || d && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], e ? j.push(b) : k(b)),
                    this;
            },
            fire: function () {
                return l.fireWith(this, arguments);
            },
            fired: function () {
                return !!d;
            }
        };
        return l;
    };
}(Zepto);

!function (a) {
    function g(f, g) {
        var k, i = f[e], j = i && b[i];
        if (void 0 === g) return j || h(f);
        if (j) {
            if (g in j) return j[g];
            if (k = d(g), k in j) return j[k];
        }
        return c.call(a(f), g);
    }

    function h(c, f, g) {
        var h = c[e] || (c[e] = ++a.uuid), j = b[h] || (b[h] = i(c));
        return void 0 !== f && (j[d(f)] = g), j;
    }

    function i(b) {
        var c = {};
        return a.each(b.attributes || f, function (b, e) {
            0 == e.name.indexOf("data-") && (c[d(e.name.replace("data-", ""))] = a.zepto.deserializeValue(e.value));
        }), c;
    }

    var b = {}, c = a.fn.data, d = a.camelCase, e = a.expando = "Zepto" + +new Date(), f = [];
    a.fn.data = function (b, c) {
        return void 0 === c ? a.isPlainObject(b) ? this.each(function (c, d) {
            a.each(b, function (a, b) {
                h(d, a, b);
            });
        }) : 0 in this ? g(this[0], b) : void 0 : this.each(function () {
            h(this, b, c);
        });
    }, a.data = function (b, c, d) {
        return a(b).data(c, d);
    }, a.hasData = function (c) {
        var d = c[e], f = d && b[d];
        return f ? !a.isEmptyObject(f) : !1;
    }, a.fn.removeData = function (c) {
        return "string" == typeof c && (c = c.split(/\s+/)), this.each(function () {
            var f = this[e], g = f && b[f];
            g && a.each(c || g, function (a) {
                delete g[c ? d(this) : a];
            });
        });
    }, ["remove", "empty"].forEach(function (b) {
        var c = a.fn[b];
        a.fn[b] = function () {
            var a = this.find("*");
            return "remove" === b && (a = a.add(this)), a.removeData(), c.call(this);
        };
    });
}(Zepto);

!function (a) {
    function c(b) {
        var d = [["resolve", "done", a.Callbacks({
            once: 1,
            memory: 1
        }), "resolved"], ["reject", "fail", a.Callbacks({
            once: 1,
            memory: 1
        }), "rejected"], ["notify", "progress", a.Callbacks({
            memory: 1
        })]], e = "pending", f = {
            state: function () {
                return e;
            },
            always: function () {
                return g.done(arguments).fail(arguments), this;
            },
            then: function () {
                var b = arguments;
                return c(function (c) {
                    a.each(d, function (d, e) {
                        var h = a.isFunction(b[d]) && b[d];
                        g[e[1]](function () {
                            var d, g, b = h && h.apply(this, arguments);
                            b && a.isFunction(b.promise) ? b.promise().done(c.resolve).fail(c.reject).progress(c.notify) : (d = this === f ? c.promise() : this,
                                g = h ? [b] : arguments, c[e[0] + "With"](d, g));
                        });
                    }), b = null;
                }).promise();
            },
            promise: function (b) {
                return null != b ? a.extend(b, f) : f;
            }
        }, g = {};
        return a.each(d, function (a, b) {
            var c = b[2], h = b[3];
            f[b[1]] = c.add, h && c.add(function () {
                e = h;
            }, d[1 ^ a][2].disable, d[2][2].lock), g[b[0]] = function () {
                return g[b[0] + "With"](this === g ? f : this, arguments), this;
            }, g[b[0] + "With"] = c.fireWith;
        }), f.promise(g), b && b.call(g, g), g;
    }

    var b = Array.prototype.slice;
    a.when = function (d) {
        var j, k, l, e = b.call(arguments), f = e.length, g = 0, h = 1 !== f || d && a.isFunction(d.promise) ? f : 0,
            i = 1 === h ? d : c(), m = function (a, c, d) {
                return function (e) {
                    c[a] = this, d[a] = arguments.length > 1 ? b.call(arguments) : e, d === j ? i.notifyWith(c, d) : --h || i.resolveWith(c, d);
                };
            };
        if (f > 1) for (j = new Array(f), k = new Array(f), l = new Array(f); f > g; ++g) e[g] && a.isFunction(e[g].promise) ? e[g].promise().done(m(g, l, e)).fail(i.reject).progress(m(g, k, j)) : --h;
        return h || i.resolveWith(l, e), i.promise();
    }, a.Deferred = c;
}(Zepto);

!function (a) {
    function b(a, b) {
        var c = this.os = {}, d = this.browser = {}, e = a.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
            f = a.match(/(Android);?[\s\/]+([\d.]+)?/), g = !!a.match(/\(Macintosh\; Intel /),
            h = a.match(/(iPad).*OS\s([\d_]+)/), i = a.match(/(iPod)(.*OS\s([\d_]+))?/),
            j = !h && a.match(/(iPhone\sOS)\s([\d_]+)/), k = a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
            l = /Win\d{2}|Windows/.test(b), m = a.match(/Windows Phone ([\d.]+)/), n = k && a.match(/TouchPad/),
            o = a.match(/Kindle\/([\d.]+)/), p = a.match(/Silk\/([\d._]+)/),
            q = a.match(/(BlackBerry).*Version\/([\d.]+)/), r = a.match(/(BB10).*Version\/([\d.]+)/),
            s = a.match(/(RIM\sTablet\sOS)\s([\d.]+)/), t = a.match(/PlayBook/),
            u = a.match(/Chrome\/([\d.]+)/) || a.match(/CriOS\/([\d.]+)/), v = a.match(/Firefox\/([\d.]+)/),
            w = a.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
            x = a.match(/MSIE\s([\d.]+)/) || a.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
            y = !u && a.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
            z = y || a.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
        (d.webkit = !!e) && (d.version = e[1]), f && (c.android = !0, c.version = f[2]),
        j && !i && (c.ios = c.iphone = !0, c.version = j[2].replace(/_/g, ".")), h && (c.ios = c.ipad = !0,
            c.version = h[2].replace(/_/g, ".")), i && (c.ios = c.ipod = !0, c.version = i[3] ? i[3].replace(/_/g, ".") : null),
        m && (c.wp = !0, c.version = m[1]), k && (c.webos = !0, c.version = k[2]), n && (c.touchpad = !0),
        q && (c.blackberry = !0, c.version = q[2]), r && (c.bb10 = !0, c.version = r[2]),
        s && (c.rimtabletos = !0, c.version = s[2]), t && (d.playbook = !0), o && (c.kindle = !0,
            c.version = o[1]), p && (d.silk = !0, d.version = p[1]), !p && c.android && a.match(/Kindle Fire/) && (d.silk = !0),
        u && (d.chrome = !0, d.version = u[1]), v && (d.firefox = !0, d.version = v[1]),
        w && (c.firefoxos = !0, c.version = w[1]), x && (d.ie = !0, d.version = x[1]), z && (g || c.ios || l) && (d.safari = !0,
        c.ios || (d.version = z[1])), y && (d.webview = !0), c.tablet = !!(h || t || f && !a.match(/Mobile/) || v && a.match(/Tablet/) || x && !a.match(/Phone/) && a.match(/Touch/)),
            c.phone = !(c.tablet || c.ipod || !(f || j || k || q || r || u && a.match(/Android/) || u && a.match(/CriOS\/([\d.]+)/) || v && a.match(/Mobile/) || x && a.match(/Touch/)));
    }

    b.call(a, navigator.userAgent, navigator.platform), a.__detect = b;
}(Zepto);

!function (a) {
    a.fn.serializeArray = function () {
        var b, c, d = [], e = function (a) {
            return a.forEach ? a.forEach(e) : (d.push({
                name: b,
                value: a
            }), void 0);
        };
        return this[0] && a.each(this[0].elements, function (d, f) {
            c = f.type, b = f.name, b && "fieldset" != f.nodeName.toLowerCase() && !f.disabled && "submit" != c && "reset" != c && "button" != c && "file" != c && ("radio" != c && "checkbox" != c || f.checked) && e(a(f).val());
        }), d;
    }, a.fn.serialize = function () {
        var a = [];
        return this.serializeArray().forEach(function (b) {
            a.push(encodeURIComponent(b.name) + "=" + encodeURIComponent(b.value));
        }), a.join("&");
    }, a.fn.submit = function (b) {
        if (0 in arguments) this.bind("submit", b); else if (this.length) {
            var c = a.Event("submit");
            this.eq(0).trigger(c), c.isDefaultPrevented() || this.get(0).submit();
        }
        return this;
    };
}(Zepto);

!function (a, b) {
    function r(a) {
        return a.replace(/([A-Z])/g, "-$1").toLowerCase();
    }

    function s(a) {
        return d ? d + a : a.toLowerCase();
    }

    var d, h, i, j, k, l, m, n, o, p, c = "", e = {
            Webkit: "webkit",
            Moz: "",
            O: "o"
        }, f = document.createElement("div"),
        g = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, q = {};
    f.style.transform === b && a.each(e, function (a, e) {
        return f.style[a + "TransitionProperty"] !== b ? (c = "-" + a.toLowerCase() + "-",
            d = e, !1) : void 0;
    }), h = c + "transform", q[i = c + "transition-property"] = q[j = c + "transition-duration"] = q[l = c + "transition-delay"] = q[k = c + "transition-timing-function"] = q[m = c + "animation-name"] = q[n = c + "animation-duration"] = q[p = c + "animation-delay"] = q[o = c + "animation-timing-function"] = "",
        a.fx = {
            off: d === b && f.style.transitionProperty === b,
            speeds: {
                _default: 400,
                fast: 200,
                slow: 600
            },
            cssPrefix: c,
            transitionEnd: s("TransitionEnd"),
            animationEnd: s("AnimationEnd")
        }, a.fn.animate = function (c, d, e, f, g) {
        return a.isFunction(d) && (f = d, e = b, d = b), a.isFunction(e) && (f = e, e = b),
        a.isPlainObject(d) && (e = d.easing, f = d.complete, g = d.delay, d = d.duration),
        d && (d = ("number" == typeof d ? d : a.fx.speeds[d] || a.fx.speeds._default) / 1e3),
        g && (g = parseFloat(g) / 1e3), this.anim(c, d, e, f, g);
    }, a.fn.anim = function (c, d, e, f, s) {
        var t, v, y, u = {}, w = "", x = this, z = a.fx.transitionEnd, A = !1;
        if (d === b && (d = a.fx.speeds._default / 1e3), s === b && (s = 0), a.fx.off && (d = 0),
            "string" == typeof c) u[m] = c, u[n] = d + "s", u[p] = s + "s", u[o] = e || "linear",
            z = a.fx.animationEnd; else {
            v = [];
            for (t in c) g.test(t) ? w += t + "(" + c[t] + ") " : (u[t] = c[t], v.push(r(t)));
            w && (u[h] = w, v.push(h)), d > 0 && "object" == typeof c && (u[i] = v.join(", "),
                u[j] = d + "s", u[l] = s + "s", u[k] = e || "linear");
        }
        return y = function (b) {
            if ("undefined" != typeof b) {
                if (b.target !== b.currentTarget) return;
                a(b.target).unbind(z, y);
            } else a(this).unbind(z, y);
            A = !0, a(this).css(q), f && f.call(this);
        }, d > 0 && (this.bind(z, y), setTimeout(function () {
            A || y.call(x);
        }, 1e3 * (d + s) + 25)), this.size() && this.get(0).clientLeft, this.css(u), 0 >= d && setTimeout(function () {
            x.each(function () {
                y.call(this);
            });
        }, 0), this;
    }, f = null;
}(Zepto);

!function (a, b) {
    function h(c, d, e, f, g) {
        "function" != typeof d || g || (g = d, d = b);
        var h = {
            opacity: e
        };
        return f && (h.scale = f, c.css(a.fx.cssPrefix + "transform-origin", "0 0")), c.animate(h, d, null, g);
    }

    function i(b, c, d, e) {
        return h(b, c, 0, d, function () {
            f.call(a(this)), e && e.call(this);
        });
    }

    var c = window.document, e = (c.documentElement, a.fn.show), f = a.fn.hide, g = a.fn.toggle;
    a.fn.show = function (a, c) {
        return e.call(this), a === b ? a = 0 : this.css("opacity", 0), h(this, a, 1, "1,1", c);
    }, a.fn.hide = function (a, c) {
        return a === b ? f.call(this) : i(this, a, "0,0", c);
    }, a.fn.toggle = function (c, d) {
        return c === b || "boolean" == typeof c ? g.call(this, c) : this.each(function () {
            var b = a(this);
            b["none" == b.css("display") ? "show" : "hide"](c, d);
        });
    }, a.fn.fadeTo = function (a, b, c) {
        return h(this, a, b, null, c);
    }, a.fn.fadeIn = function (a, b) {
        var c = this.css("opacity");
        return c > 0 ? this.css("opacity", 0) : c = 1, e.call(this).fadeTo(a, c, b);
    }, a.fn.fadeOut = function (a, b) {
        return i(this, a, null, b);
    }, a.fn.fadeToggle = function (b, c) {
        return this.each(function () {
            var d = a(this);
            d[0 == d.css("opacity") || "none" == d.css("display") ? "fadeIn" : "fadeOut"](b, c);
        });
    };
}(Zepto);

!function (a) {
    function d(a) {
        return "tagName" in a ? a : a.parentNode;
    }

    if (a.os.ios) {
        var c, b = {};
        a(document).bind("gesturestart", function (a) {
            var e = Date.now();
            e - (b.last || e), b.target = d(a.target), c && clearTimeout(c), b.e1 = a.scale,
                b.last = e;
        }).bind("gesturechange", function (a) {
            b.e2 = a.scale;
        }).bind("gestureend", function () {
            b.e2 > 0 ? (0 != Math.abs(b.e1 - b.e2) && a(b.target).trigger("pinch") && a(b.target).trigger("pinch" + (b.e1 - b.e2 > 0 ? "In" : "Out")),
                b.e1 = b.e2 = b.last = 0) : "last" in b && (b = {});
        }), ["pinch", "pinchIn", "pinchOut"].forEach(function (b) {
            a.fn[b] = function (a) {
                return this.bind(b, a);
            };
        });
    }
}(Zepto);

!function () {
    try {
        getComputedStyle(void 0);
    } catch (a) {
        var b = getComputedStyle;
        window.getComputedStyle = function (a, c) {
            try {
                return b(a, c);
            } catch (d) {
                return null;
            }
        };
    }
}();

!function (a) {
    String.prototype.trim === a && (String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, "");
    }), Array.prototype.reduce === a && (Array.prototype.reduce = function (b) {
        if (void 0 === this || null === this) throw new TypeError();
        var f, c = Object(this), d = c.length >>> 0, e = 0;
        if ("function" != typeof b) throw new TypeError();
        if (0 == d && 1 == arguments.length) throw new TypeError();
        if (arguments.length >= 2) f = arguments[1]; else for (; ;) {
            if (e in c) {
                f = c[e++];
                break;
            }
            if (++e >= d) throw new TypeError();
        }
        for (; d > e;) e in c && (f = b.call(a, f, c[e], e, c)), e++;
        return f;
    });
}();

!function (a) {
    a.fn.end = function () {
        return this.prevObject || a();
    }, a.fn.andSelf = function () {
        return this.add(this.prevObject || a());
    }, "filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function (b) {
        var c = a.fn[b];
        a.fn[b] = function () {
            var a = c.apply(this, arguments);
            return a.prevObject = this, a;
        };
    });
}(Zepto);

!function (a) {
    function i(a, b, c, d) {
        return Math.abs(a - b) >= Math.abs(c - d) ? a - b > 0 ? "Left" : "Right" : c - d > 0 ? "Up" : "Down";
    }

    function j() {
        f = null, b.last && (b.el.trigger("longTap"), b = {});
    }

    function k() {
        f && clearTimeout(f), f = null;
    }

    function l() {
        c && clearTimeout(c), d && clearTimeout(d), e && clearTimeout(e), f && clearTimeout(f),
            c = d = e = f = null, b = {};
    }

    function m(a) {
        return ("touch" == a.pointerType || a.pointerType == a.MSPOINTER_TYPE_TOUCH) && a.isPrimary;
    }

    function n(a, b) {
        return a.type == "pointer" + b || a.type.toLowerCase() == "mspointer" + b;
    }

    var c, d, e, f, h, b = {}, g = 750;
    a(document).ready(function () {
        var o, p, s, t, q = 0, r = 0;
        "MSGesture" in window && (h = new MSGesture(), h.target = document.body), a(document).bind("MSGestureEnd", function (a) {
            var c = a.velocityX > 1 ? "Right" : a.velocityX < -1 ? "Left" : a.velocityY > 1 ? "Down" : a.velocityY < -1 ? "Up" : null;
            c && (b.el.trigger("swipe"), b.el.trigger("swipe" + c));
        }).on("touchstart", function (d) {
            (!(t = n(d, "down")) || m(d)) && (s = t ? d : d.touches[0], d.touches && 1 === d.touches.length && b.x2 && (b.x2 = void 0,
                b.y2 = void 0), o = Date.now(), p = o - (b.last || o), b.el = a("tagName" in s.target ? s.target : s.target.parentNode),
            c && clearTimeout(c), b.x1 = s.pageX, b.y1 = s.pageY, p > 0 && 250 >= p && (b.isDoubleTap = !0),
                b.last = o, f = setTimeout(j, g), h && t && h.addPointer(d.pointerId));
        }).on("touchmove", function (a) {
            (!(t = n(a, "move")) || m(a)) && (s = t ? a : a.touches[0], k(), b.x2 = s.pageX,
                b.y2 = s.pageY, q += Math.abs(b.x1 - b.x2), r += Math.abs(b.y1 - b.y2));
        }).on("touchend", function (f) {
            (!(t = n(f, "up")) || m(f)) && (k(), b.x2 && Math.abs(b.x1 - b.x2) > 30 || b.y2 && Math.abs(b.y1 - b.y2) > 30 ? e = setTimeout(function () {
                b.el && (b.el.trigger("swipe"), b.el.trigger("swipe" + i(b.x1, b.x2, b.y1, b.y2))),
                    b = {};
            }, 0) : "last" in b && (30 > q && 30 > r ? d = setTimeout(function () {
                var d = a.Event("tap");
                d.cancelTouch = l, b.el && b.el.trigger(d), b.isDoubleTap ? (b.el && b.el.trigger("doubleTap"),
                    b = {}) : c = setTimeout(function () {
                    c = null, b.el && b.el.trigger("singleTap"), b = {};
                }, 250);
            }, 0) : b = {}), q = r = 0);
        }).on("touchcancel", l), a(window).on("scroll", l);
    }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function (b) {
        a.fn[b] = function (a) {
            return this.on(b, a);
        };
    });
}(Zepto);