function menuInit(t) {
    for (var i in t.solutions)
        if (3 != t.solutions[i].id)
            for (var n in t.solutions[i].lists)
                t.solutions[i].lists[n].title = t.solutions[i].lists[n].title + "解决方案",
                    t.solutions[i].lists[n].category = t.solutions[i].lists[n].officialName,
                    t.solutions[i].lists[n].isBlank = !0;
    new wmMenu({
        data: t
    }),
        $('[data-menu="solutions"] a').on("click", function() {
            var t = $(this);
            if (t.attr("href").indexOf("javascript") < 0) {
                var i = $(this).text();
                i = i.replace(/解决方案/g, "");
                var n = {
                    pagename: wmDot.getPageName(),
                    elementid: "solutions",
                    eventtype: "tap",
                    title: i
                };
                wmDot.sendDot(n)
            }
        }),
        $(".js-nav > li").hover(function() {
            var t = $(".js-nav").parent().offset().left
                , i = 15
                , n = $(this)
                , e = n.offset().left - t + i;
            $(".js-menu-act").css({
                left: e,
                width: n.width() - 2 * i,
                opacity: 1
            })
        }, function() {
            $(".js-menu-act").css({
                opacity: 0
            })
        })
}
var wmMenu = function(t) {
    this.opt = {
        data: {},
        warp: "#menuContent",
        trigger: "[data-menu]",
        event: "hover",
        current: 0,
        boxHeight: [],
        itemStyle: {
            3: "height: 744px",
            5: "height: 600px"
        },
        initCallback: function() {},
        menuCallBack: function() {}
    },
        $.extend(this.opt, t);
    var i = this.opt
        , n = this;
    n.init = function() {
        $(i.trigger).each(function(t, e) {
            var a = $(e)
                , s = a.data("menu");
            n.appsDataInit(),
                a.append(n.htmlInit(i.data[s])),
                a.hover(function() {
                    i.current = t,
                        n.menuShow()
                }, function() {
                    $(i.activeCls).show().css({
                        opacity: 0
                    }),
                        n.menuHide()
                })
        }),
            i.initCallback()
    }
        ,
        n.appsDataInit = function() {
            for (var t in i.data.apps)
                i.data.apps[t].style = "m-mu-pro" + i.data.apps[t].id
        }
        ,
        n.menuHide = function() {
            var t = $(i.warp);
            t.children(":visible").hide()
        }
        ,
        n.menuShow = function() {
            var t = $(i.warp);
            0 == t.parent().height() && t.parent().css("height", "auto"),
                n.menuHide(),
                t.children().eq(i.current).show()
        }
        ,
        n.htmlInit = function(t) {
            return template("head_menu", {
                data: t
            })
        }
        ,
        this.init()
}
    , prefix = $("#wmmenu").data("prefix");
$.post(prefix + "api/saas/pageMenu", function(t) {
    0 == t.errcode && menuInit(t.data)
});
