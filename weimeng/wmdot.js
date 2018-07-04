function getPageName(t) {
    var e = ""
        , o = t ? t : window.location.pathname
        , n = o.substring(o.lastIndexOf("/") + 1);
    n.indexOf(".") > -1 && (n = n.substr(0, n.indexOf("."))),
        n = "/" == n || "" == n ? "index" : n,
        n = n.indexOf("info_") > -1 ? "info" : n;
    var a = window.location.hostname
        , m = o.replace(/(\/)+/g, "");
    if (a.indexOf(".weimob.com") > -1 && 0 == m.length) {
        var i = a.substring(0, a.indexOf("."));
        n = "www" != i ? i : n
    }
    for (var r in WMDOT_PAGE_NAME)
        r == n && (e = "wm_" + WMDOT_PAGE_NAME[r]);
    return e
}
var WmDot = function() {};
WmDot.prototype.init = function() {
    this.setPageName()
}
    ,
    WmDot.prototype.setPageName = function(t) {
        this.pagename = t ? t : getPageName()
    }
    ,
    WmDot.prototype.getPageName = function() {
        return this.pagename
    }
    ,
    WmDot.prototype.sendView = function(t) {
        if (t = this.getPageName(),
            "" != t) {
            var e = {
                pagename: t,
                elementid: "pv",
                eventtype: "view"
            };
            this.sendDot(e)
        }
    }
    ,
    WmDot.prototype.sendDot = function(t) {
        var e = $("#wmdot")
            , o = e.data("wid");
        o && (t.wid = o)
            // ,
            // t.elementid && t.pagename ? rprm && rprm.rec(t) : console && console.log("wmDot is error")
    }
    ,
    WmDot.prototype.bannerDot = function(t, e) {
        var o = {
            pagename: this.getPageName(),
            elementid: t,
            eventtype: "tap",
            title: e
        };
        wmDot.sendDot(o)
    }
    ,
    // WmDot.prototype.rprmInit = function() {
    //     var t = $("#wmdot")
    //         , e = t.data("env");
    //     rprm && rprm.init({
    //         appName: "saas-path",
    //         statType: "saaspath",
    //         env: e || "development"
    //     }),
    //     rprm && rprm["public"]({
    //         business: "public"
    //     })
    // }
    // ,
    WmDot.prototype.elementInit = function() {
        var $dom = $(document)
            , domData = {
            wmdot: "wmdot",
            dotID: "wmdot-id",
            dotOther: "wmdot-other"
        };
        for (var key in WMDOT_EVENT_NAME) {
            var _type = WMDOT_EVENT_NAME[key];
            $dom.on(key, "[data-" + domData.wmdot + "=" + _type + "]", function(event) {
                var $target = $(event.currentTarget)
                    , wmDotID = $target.data(domData.dotID) || ""
                    , wmDotOther = eval("(" + $target.data(domData.dotOther) + ")") || {}
                    , viewObj = {
                    pagename: wmDot.getPageName(),
                    elementid: wmDotID,
                    eventtype: $target.data(domData.wmdot)
                };
                $.extend(viewObj, wmDotOther),
                    wmDot.sendDot(viewObj)
            })
        }
    }
    ,
    WmDot.prototype.start = function() {
        // wmDot.rprmInit(),
            wmDot.sendView(),
            wmDot.elementInit()
    }
;
var wmDot = new WmDot
    , WMDOT_PAGE_NAME = {
    index: "home",
    products_index: "pdt",
    cases: "case",
    zhan: "wz",
    wz: "wz",
    shop: "xd",
    xd: "xd",
    meeting: "hw",
    hw: "hw",
    kld: "kld",
    business: "wds",
    wp: "wds",
    canting: "ct",
    wm: "wm",
    zd: "zd",
    nhhw: "nhhw"
}
    , WMDOT_EVENT_NAME = {
    click: "tap",
    mouseover: "hold"
};
$(function() {
    wmDot.init(),
    wmDot.getPageName() && wmDot.start()
});
