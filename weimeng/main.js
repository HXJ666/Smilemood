$(function() {
    function i(i) {
        $(".slider .now .slider-box li").fadeOut(0, function() {
            $(".slider.jq-index").css({
                backgroundColor: r[i]
            }),
                $(".slider .now .slider-box li").eq(i).fadeIn(10)
        }),
            $(".now .slider-icons").find("img").attr("src", $("#staticUrl").val() + "/img/slider_icon.png"),
            $(".now .slider-icons li").eq(i).find("img").attr("src", $("#staticUrl").val() + "/img/slider_icon_now.png")
    }
    function n(e, t) {
        "next" == e ? (l++,
        l >= f && (l = 0)) : "pre" == e ? (l--,
        0 > l && (l = f)) : l = t,
            clearInterval(u),
            i(l),
            u = setInterval(function() {
                n("next")
            }, 1e3 * d)
    }
    function e() {
        $(".cases-box ul").animate({
            marginLeft: -250 * x + "px"
        }, 300)
    }
    function t(i, n, e, t) {
        var s = "<li"
            , o = ""
            , c = $("#staticUrl").val() + "/" + e;
        return i && (o = ' class="now"',
            c = $("#staticUrl").val() + "/" + n),
            s = s + o + '><a href="javascript:;"><img src="' + c + '"><span>' + t + "</span></a></li>"
    }
    function s(i, n) {
        $(".cases-logo li").remove();
        for (var s = 0; s < i.apps.length; s++) {
            var o = s == n ? !0 : !1;
            $(t(o, i.apps[s].icon, i.apps[s].icon_shadow, i.apps[s].title)).appendTo($(".cases-logo"))
        }
        $(".cases-slider li").remove();
        for (var s = 0; s < i.apps[n].slider.length; s++)
            $('<li><img src="/"><' + $("#staticUrl").val() + "/" + i.apps[n].slider[s] + 'li>').appendTo($(".cases-slider ul"));
        $(".cases-img").attr("src", $("#staticUrl").val() + "/" + i.apps[n].er_code),
            $(".cases-erwei").attr("src", $("#staticUrl").val() + "/" + i.apps[n].er_code),
            $(".cases-txt h2").text(i.apps[n].title),
            $(".cases-info .cases-title").text(i.apps[n].title),
            $(".cases-txt p").text(i.apps[n].desc),
            x = 0,
            e()
    }
    function o() {
        $(".products-index-box ul").animate({
            marginLeft: -242 * v + "px"
        }, 300)
    }
    function c(i) {
        $(".info-box ul").animate({
            marginLeft: i * q + "px"
        }, 300)
    }
    var a = null;
    $(".jq-drop").mouseenter(function() {
        clearTimeout(a),
            $(".jq-dropdown").addClass("hide"),
            $(this).find(".jq-dropdown").removeClass("hide")
    }).mouseleave(function() {
        $(this);
        a = setTimeout(function() {
            $(".jq-dropdown").addClass("hide")
        }, 100)
    });
    var r = ["#95aeff", "#44b6ff", "#4f68a8", "#3cb9ff", "#5fc2fd", "#1aabe6", "#9aabff", "#92b7f9", "#7bceff", "#5fe5ca", "#6dc4ff"]
        , l = 0
        , d = 3
        , f = $(".now .slider-icons li").length
        , u = null
        , p = $(".jq-index .now .slider-icons").width();
    $(".jq-index .now .slider-box").css({
        width: 100 * f + "%"
    }),
        $(".jq-index .now .slider-box li").css({
            width: 100 / f + "%"
        }).hide().eq(0).show(),
        $(".jq-index .now .slider-icons").css({
            marginLeft: p / 2 * -1
        }),
        u = setInterval(function() {
            n("next")
        }, 1e3 * d),
        $(".slider-pre").click(function() {
            n("pre")
        }),
        $(".slider-next").click(function() {
            n("next")
        }),
        $(".now .slider-icons li").each(function(i) {
            $(this).click(function() {
                n("goto", i)
            })
        });
    var h = 0;
    $(".used-pre").click(function() {
        h = --h < 0 ? 3 : h--,
            $(".clients-display ul").animate({
                marginLeft: -100 * h + "%"
            })
    }),
        $(".used-next").click(function() {
            h = ++h >= 4 ? 0 : h++,
                $(".clients-display ul").animate({
                    marginLeft: -100 * h + "%"
                })
        }),
        $(".jq-show").mouseenter(function() {
            $(".jq-info").addClass("hide"),
                $(this).parents(".jq-item").find(".jq-info").removeClass("hide").find("a").css({
                    left: "-100%"
                }).animate({
                    left: "0%"
                }, 100)
        }),
        $(".product-next").click(function() {
            $(".items-ul").animate({
                marginLeft: "-100%"
            }),
                $(".product-icons img").eq(1).attr("src", $("#staticUrl").val() + "/img/product_slider_icon.png"),
                $(".product-icons img").eq(0).attr("src", $("#staticUrl").val() + "/img/product_slider_icon_now.png"),
                $(this).addClass("hide"),
                $(".product-pre").removeClass("hide"),
                $(".jq-show").eq(4).trigger("mouseenter")
        }),
        $(".product-pre").click(function() {
            $(".items-ul").animate({
                marginLeft: "0%"
            }),
                $(".product-icons img").eq(1).attr("src", $("#staticUrl").val() + "/img/product_slider_icon_now.png"),
                $(".product-icons img").eq(0).attr("src", $("#staticUrl").val() + "/img/product_slider_icon.png"),
                $(this).addClass("hide"),
                $(".product-next").removeClass("hide"),
                $(".jq-show").eq(0).trigger("mouseenter")
        }),
        $(".product-icons img").each(function(i) {
            $(this).click(function() {
                0 == i ? $(".product-pre").trigger("click") : $(".product-next").trigger("click")
            })
        }),
        $(".er-a-pos a").mouseenter(function() {
            var i = $(this).attr("id");
            $("." + i).show()
        }).mouseleave(function() {
            $(".er-img-pos div,.er-img-pos span").hide()
        }),
        $(".jq-case").mouseenter(function() {
            $(this).find(".jq-case-info").show().animate({
                top: 0
            }, 200)
        }).mouseleave(function() {
            $(this).find(".jq-case-info").animate({
                top: "100%"
            }, 200, function() {
                $(this).find(".jq-case-info").hide()
            })
        });
    var m = $(".city-slider ul .jq-case").length - 4
        , g = 0;
    $(".ct-next").click(function() {
        g++,
        g > m && g--,
            $(".city-slider>ul").animate({
                marginLeft: -231 * g
            })
    }),
        $(".ct-pre").click(function() {
            g--,
            0 > g && g++,
                $(".city-slider>ul").animate({
                    marginLeft: -231 * g
                })
        }),
        $(".cont-a li").each(function(i) {
            $(this).click(function() {
                $(".cont").attr("src", "img/proxy/proxy3_cont" + i + ".png?20171019")
            })
        }),
        $(".jq-star-show").click(function() {
            $(this).parent().find(".jq-star-show,.jq-info-show").addClass("hide"),
                $(this).parent().find(".jq-star-hide,.jq-info-hide").removeClass("hide")
        }),
        $(".jq-star-hide").click(function() {
            $(this).parent().find(".jq-star-show,.jq-info-show").removeClass("hide"),
                $(this).parent().find(".jq-star-hide,.jq-info-hide").addClass("hide")
        }),
        $(".products-menus li").each(function(i) {
            $(this).click(function() {
                $(".products-menus .now").removeClass("now"),
                    $(this).addClass("now"),
                    0 == i ? $(".products-cont li").show() : ($(".products-cont li").hide(),
                        $(".products-cont .li" + i).show())
            })
        });
    var x = 0;
    $(".cases-pre").click(function() {
        x = x-- <= 0 ? 0 : x,
            e()
    }),
        $(".cases-next").click(function() {
            console.log(x),
                x = x++ >= $(".cases-box li").length - 3 ? $(".cases-box li").length - 3 : x,
                console.log(x),
                e()
        });
    var w = 0;
    $(".cases-menus li").each(function(i) {
        $(this).mouseenter(function() {
            $(".cases-menus .now").removeClass("now"),
                $(this).addClass("now");
            var n = window.casedata;
            w = i,
                s(n[w], 0)
        })
    }),
        $(".cases-logo").on("mouseenter", "li", function(i) {
            if ($(this).hasClass("now"))
                return !1;
            $(".cases-logo .now").removeClass("now"),
                $(this).addClass("now");
            var i = $(".cases-logo li").index($(this))
                , n = window.casedata;
            s(n[w], i)
        });
    var v = 0;
    $(".products-index-pre").click(function() {
        v = v-- <= 0 ? 0 : v,
            o()
    }),
        $(".products-index-next").click(function() {
            v = v++ >= $(".products-index-box li").length - 3 ? $(".products-index-box li").length - 3 : v,
                o()
        }),
        $(".jq-tab li").each(function(i) {
            $(this).click(function() {
                $(".jq-tab .now").removeClass("now"),
                    $(this).addClass("now"),
                    $(".jq-fx-box img").attr("src", "img/business/fx" + i + "_bg.jpg")
            })
        });
    var q = 0;
    $(".jq-info-pre").click(function() {
        q = q-- <= 0 ? 0 : q,
            c(-227)
    }),
        $(".jq-info-next").click(function() {
            return $(".info-box li").length <= 4 ? !1 : (q = q++ >= $(".info-box li").length - 4 ? $(".info-box li").length - 4 : q,
                void c(-227))
        }),
        $(".jq-info-pre2").click(function() {
            q = q-- <= 0 ? 0 : q,
                c(-900)
        }),
        $(".jq-info-next2").click(function() {
            return $(".info-box li").length <= 1 ? !1 : (q = q++ >= $(".info-box li").length - 1 ? $(".info-box li").length - 1 : q,
                void c(-900))
        })
});
