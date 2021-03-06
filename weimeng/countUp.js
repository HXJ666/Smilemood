var CountUp = function(a, n, t, e, i, r) {
    function o(a) {
        a = a.toFixed(u.decimals),
            a += "";
        var n, t, e, i, r, o;
        if (n = a.split("."),
                t = n[0],
                e = n.length > 1 ? u.options.decimal + n[1] : "",
                u.options.useGrouping) {
            for (i = "",
                     r = 0,
                     o = t.length; o > r; ++r)
                0 !== r && r % 3 === 0 && (i = u.options.separator + i),
                    i = t[o - r - 1] + i;
            t = i
        }
        return u.options.numerals.length && (t = t.replace(/[0-9]/g, function(a) {
            return u.options.numerals[+a]
        }),
            e = e.replace(/[0-9]/g, function(a) {
                return u.options.numerals[+a]
            })),
        u.options.prefix + t + e + u.options.suffix
    }
    function l(a, n, t, e) {
        return t * (-Math.pow(2, -10 * a / e) + 1) * 1024 / 1023 + n
    }
    function s(a) {
        return "number" == typeof a && !isNaN(a)
    }
    var u = this;
    if (u.version = function() {
            return "1.9.2"
        }
            ,
            u.options = {
                useEasing: !0,
                useGrouping: !0,
                separator: ",",
                decimal: ".",
                easingFn: l,
                formattingFn: o,
                prefix: "",
                suffix: "",
                numerals: []
            },
        r && "object" == typeof r)
        for (var m in u.options)
            r.hasOwnProperty(m) && null !== r[m] && (u.options[m] = r[m]);
    "" === u.options.separator ? u.options.useGrouping = !1 : u.options.separator = "" + u.options.separator;
    for (var d = 0, c = ["webkit", "moz", "ms", "o"], p = 0; p < c.length && !window.requestAnimationFrame; ++p)
        window.requestAnimationFrame = window[c[p] + "RequestAnimationFrame"],
            window.cancelAnimationFrame = window[c[p] + "CancelAnimationFrame"] || window[c[p] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(a, n) {
            var t = (new Date).getTime()
                , e = Math.max(0, 16 - (t - d))
                , i = window.setTimeout(function() {
                a(t + e)
            }, e);
            return d = t + e,
                i
        }
    ),
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
            clearTimeout(a)
        }
    ),
        u.initialize = function() {
            return u.initialized ? !0 : (u.error = "",
                u.d = "string" == typeof a ? document.getElementById(a) : a,
                u.d ? (u.startVal = Number(n),
                    u.endVal = Number(t),
                    s(u.startVal) && s(u.endVal) ? (u.decimals = Math.max(0, e || 0),
                        u.dec = Math.pow(10, u.decimals),
                        u.duration = 1e3 * Number(i) || 2e3,
                        u.countDown = u.startVal > u.endVal,
                        u.frameVal = u.startVal,
                        u.initialized = !0,
                        !0) : (u.error = "[CountUp] startVal (" + n + ") or endVal (" + t + ") is not a number",
                        !1)) : (u.error = "[CountUp] target is null or undefined",
                    !1))
        }
        ,
        u.printValue = function(a) {
            var n = u.options.formattingFn(a);
            "INPUT" === u.d.tagName ? this.d.value = n : "text" === u.d.tagName || "tspan" === u.d.tagName ? this.d.textContent = n : this.d.innerHTML = n
        }
        ,
        u.count = function(a) {
            u.startTime || (u.startTime = a),
                u.timestamp = a;
            var n = a - u.startTime;
            u.remaining = u.duration - n,
                u.options.useEasing ? u.countDown ? u.frameVal = u.startVal - u.options.easingFn(n, 0, u.startVal - u.endVal, u.duration) : u.frameVal = u.options.easingFn(n, u.startVal, u.endVal - u.startVal, u.duration) : u.countDown ? u.frameVal = u.startVal - (u.startVal - u.endVal) * (n / u.duration) : u.frameVal = u.startVal + (u.endVal - u.startVal) * (n / u.duration),
                u.countDown ? u.frameVal = u.frameVal < u.endVal ? u.endVal : u.frameVal : u.frameVal = u.frameVal > u.endVal ? u.endVal : u.frameVal,
                u.frameVal = Math.round(u.frameVal * u.dec) / u.dec,
                u.printValue(u.frameVal),
                n < u.duration ? u.rAF = requestAnimationFrame(u.count) : u.callback && u.callback()
        }
        ,
        u.start = function(a) {
            u.initialize() && (u.callback = a,
                u.rAF = requestAnimationFrame(u.count))
        }
        ,
        u.pauseResume = function() {
            u.paused ? (u.paused = !1,
                delete u.startTime,
                u.duration = u.remaining,
                u.startVal = u.frameVal,
                requestAnimationFrame(u.count)) : (u.paused = !0,
                cancelAnimationFrame(u.rAF))
        }
        ,
        u.reset = function() {
            u.paused = !1,
                delete u.startTime,
                u.initialized = !1,
            u.initialize() && (cancelAnimationFrame(u.rAF),
                u.printValue(u.startVal))
        }
        ,
        u.update = function(a) {
            if (u.initialize()) {
                if (a = Number(a),
                        !s(a))
                    return void (u.error = "[CountUp] update() - new endVal is not a number: " + a);
                u.error = "",
                a !== u.frameVal && (cancelAnimationFrame(u.rAF),
                    u.paused = !1,
                    delete u.startTime,
                    u.startVal = u.frameVal,
                    u.endVal = a,
                    u.countDown = u.startVal > u.endVal,
                    u.rAF = requestAnimationFrame(u.count))
            }
        }
        ,
    u.initialize() && u.printValue(u.startVal)
};
