(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7776], {
        9547: function(t, e, n) {
            "use strict";

            function r(t) {
                this.j = {}, this.jr = [], this.jd = null, this.t = t
            }
            n.d(e, {
                Bu: function() {
                    return Et
                },
                sE: function() {
                    return kt
                }
            }), r.prototype = {
                accepts: function() {
                    return !!this.t
                },
                tt: function(t, e) {
                    if (e && e.j) return this.j[t] = e, e;
                    var n = e,
                        r = this.j[t];
                    if (r) return n && (r.t = n), r;
                    r = o();
                    var i = u(this, t);
                    return i ? (Object.assign(r.j, i.j), r.jr.append(i.jr), r.jr = i.jd, r.t = n || i.t) : r.t = n, this.j[t] = r, r
                }
            };
            var o = function() {
                    return new r
                },
                i = function(t) {
                    return new r(t)
                },
                s = function(t, e, n) {
                    t.j[e] || (t.j[e] = n)
                },
                a = function(t, e, n) {
                    t.jr.push([e, n])
                },
                u = function(t, e) {
                    var n = t.j[e];
                    if (n) return n;
                    for (var r = 0; r < t.jr.length; r++) {
                        var o = t.jr[r][0],
                            i = t.jr[r][1];
                        if (o.test(e)) return i
                    }
                    return t.jd
                },
                l = function(t, e, n) {
                    for (var r = 0; r < e.length; r++) s(t, e[r], n)
                },
                c = function(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n][0],
                            o = e[n][1];
                        s(t, r, o)
                    }
                },
                p = function(t, e, n, r) {
                    for (var o, i = 0, a = e.length; i < a && (o = t.j[e[i]]);) t = o, i++;
                    if (i >= a) return [];
                    for (; i < a - 1;) o = r(), s(t, e[i], o), t = o, i++;
                    s(t, e[a - 1], n)
                },
                d = "DOMAIN",
                f = "LOCALHOST",
                h = "TLD",
                m = "NUM",
                g = "PROTOCOL",
                y = "MAILTO",
                v = "WS",
                b = "NL",
                D = "OPENBRACE",
                w = "OPENBRACKET",
                x = "OPENANGLEBRACKET",
                k = "OPENPAREN",
                E = "CLOSEBRACE",
                C = "CLOSEBRACKET",
                S = "CLOSEANGLEBRACKET",
                A = "CLOSEPAREN",
                O = "AMPERSAND",
                M = "APOSTROPHE",
                F = "ASTERISK",
                T = "AT",
                B = "BACKSLASH",
                j = "BACKTICK",
                N = "CARET",
                R = "COLON",
                P = "COMMA",
                z = "DOLLAR",
                I = "DOT",
                $ = "EQUALS",
                L = "EXCLAMATION",
                H = "HYPHEN",
                W = "PERCENT",
                _ = "PIPE",
                V = "PLUS",
                q = "POUND",
                J = "QUERY",
                Y = "QUOTE",
                U = "SEMI",
                K = "SLASH",
                G = "TILDE",
                X = "UNDERSCORE",
                Z = "SYM",
                Q = Object.freeze({
                    __proto__: null,
                    DOMAIN: d,
                    LOCALHOST: f,
                    TLD: h,
                    NUM: m,
                    PROTOCOL: g,
                    MAILTO: y,
                    WS: v,
                    NL: b,
                    OPENBRACE: D,
                    OPENBRACKET: w,
                    OPENANGLEBRACKET: x,
                    OPENPAREN: k,
                    CLOSEBRACE: E,
                    CLOSEBRACKET: C,
                    CLOSEANGLEBRACKET: S,
                    CLOSEPAREN: A,
                    AMPERSAND: O,
                    APOSTROPHE: M,
                    ASTERISK: F,
                    AT: T,
                    BACKSLASH: B,
                    BACKTICK: j,
                    CARET: N,
                    COLON: R,
                    COMMA: P,
                    DOLLAR: z,
                    DOT: I,
                    EQUALS: $,
                    EXCLAMATION: L,
                    HYPHEN: H,
                    PERCENT: W,
                    PIPE: _,
                    PLUS: V,
                    POUND: q,
                    QUERY: J,
                    QUOTE: Y,
                    SEMI: U,
                    SLASH: K,
                    TILDE: G,
                    UNDERSCORE: X,
                    SYM: Z
                }),
                tt = "aaa aarp abarth abb abbott abbvie abc able abogado abudhabi ac academy accenture accountant accountants aco actor ad adac ads adult ae aeg aero aetna af afamilycompany afl africa ag agakhan agency ai aig airbus airforce airtel akdn al alfaromeo alibaba alipay allfinanz allstate ally alsace alstom am amazon americanexpress americanfamily amex amfam amica amsterdam analytics android anquan anz ao aol apartments app apple aq aquarelle ar arab aramco archi army arpa art arte as asda asia associates at athleta attorney au auction audi audible audio auspost author auto autos avianca aw aws ax axa az azure ba baby baidu banamex bananarepublic band bank bar barcelona barclaycard barclays barefoot bargains baseball basketball bauhaus bayern bb bbc bbt bbva bcg bcn bd be beats beauty beer bentley berlin best bestbuy bet bf bg bh bharti bi bible bid bike bing bingo bio biz bj black blackfriday blockbuster blog bloomberg blue bm bms bmw bn bnpparibas bo boats boehringer bofa bom bond boo book booking bosch bostik boston bot boutique box br bradesco bridgestone broadway broker brother brussels bs bt budapest bugatti build builders business buy buzz bv bw by bz bzh ca cab cafe cal call calvinklein cam camera camp cancerresearch canon capetown capital capitalone car caravan cards care career careers cars casa case cash casino cat catering catholic cba cbn cbre cbs cc cd center ceo cern cf cfa cfd cg ch chanel channel charity chase chat cheap chintai christmas chrome church ci cipriani circle cisco citadel citi citic city cityeats ck cl claims cleaning click clinic clinique clothing cloud club clubmed cm cn co coach codes coffee college cologne com comcast commbank community company compare computer comsec condos construction consulting contact contractors cooking cookingchannel cool coop corsica country coupon coupons courses cpa cr credit creditcard creditunion cricket crown crs cruise cruises csc cu cuisinella cv cw cx cy cymru cyou cz dabur dad dance data date dating datsun day dclk dds de deal dealer deals degree delivery dell deloitte delta democrat dental dentist desi design dev dhl diamonds diet digital direct directory discount discover dish diy dj dk dm dnp do docs doctor dog domains dot download drive dtv dubai duck dunlop dupont durban dvag dvr dz earth eat ec eco edeka edu education ee eg email emerck energy engineer engineering enterprises epson equipment er ericsson erni es esq estate et etisalat eu eurovision eus events exchange expert exposed express extraspace fage fail fairwinds faith family fan fans farm farmers fashion fast fedex feedback ferrari ferrero fi fiat fidelity fido film final finance financial fire firestone firmdale fish fishing fit fitness fj fk flickr flights flir florist flowers fly fm fo foo food foodnetwork football ford forex forsale forum foundation fox fr free fresenius frl frogans frontdoor frontier ftr fujitsu fujixerox fun fund furniture futbol fyi ga gal gallery gallo gallup game games gap garden gay gb gbiz gd gdn ge gea gent genting george gf gg ggee gh gi gift gifts gives giving gl glade glass gle global globo glow gm gmail gmbh gmo gmx gn godaddy gold goldpoint golf goo goodyear goog google gop got gov gp gq gr grainger graphics gratis green gripe grocery group gs gt gu guardian gucci guge guide guitars guru gw gy hair hamburg hangout haus hbo hdfc hdfcbank health healthcare help helsinki here hermes hgtv hiphop hisamitsu hitachi hiv hk hkt hm hn hockey holdings holiday homedepot homegoods homes homesense honda horse hospital host hosting hot hoteles hotels hotmail house how hr hsbc ht hu hughes hyatt hyundai ibm icbc ice icu id ie ieee ifm ikano il im imamat imdb immo immobilien in inc industries infiniti info ing ink institute insurance insure int international intuit investments io ipiranga iq ir irish is ismaili ist istanbul it itau itv iveco jaguar java jcb je jeep jetzt jewelry jio jll jm jmp jnj jo jobs joburg jot joy jp jpmorgan jprs juegos juniper kaufen kddi ke kerryhotels kerrylogistics kerryproperties kfh kg kh ki kia kim kinder kindle kitchen kiwi km kn koeln komatsu kosher kp kpmg kpn kr krd kred kuokgroup kw ky kyoto kz la lacaixa lamborghini lamer lancaster lancia land landrover lanxess lasalle lat latino latrobe law lawyer lb lc lds lease leclerc lefrak legal lego lexus lgbt li lidl life lifeinsurance lifestyle lighting like lilly limited limo lincoln linde link lipsy live living lixil lk llc llp loan loans locker locus loft lol london lotte lotto love lpl lplfinancial lr ls lt ltd ltda lu lundbeck luxe luxury lv ly ma macys madrid maif maison makeup man management mango map market marketing markets marriott marshalls maserati mattel mba mc mckinsey md me med media meet melbourne meme memorial men menu merckmsd mg mh miami microsoft mil mini mint mit mitsubishi mk ml mlb mls mm mma mn mo mobi mobile moda moe moi mom monash money monster mormon mortgage moscow moto motorcycles mov movie mp mq mr ms msd mt mtn mtr mu museum mutual mv mw mx my mz na nab nagoya name nationwide natura navy nba nc ne nec net netbank netflix network neustar new news next nextdirect nexus nf nfl ng ngo nhk ni nico nike nikon ninja nissan nissay nl no nokia northwesternmutual norton now nowruz nowtv np nr nra nrw ntt nu nyc nz obi observer off office okinawa olayan olayangroup oldnavy ollo om omega one ong onl online onyourside ooo open oracle orange org organic origins osaka otsuka ott ovh pa page panasonic paris pars partners parts party passagens pay pccw pe pet pf pfizer pg ph pharmacy phd philips phone photo photography photos physio pics pictet pictures pid pin ping pink pioneer pizza pk pl place play playstation plumbing plus pm pn pnc pohl poker politie porn post pr pramerica praxi press prime pro prod productions prof progressive promo properties property protection pru prudential ps pt pub pw pwc py qa qpon quebec quest qvc racing radio raid re read realestate realtor realty recipes red redstone redumbrella rehab reise reisen reit reliance ren rent rentals repair report republican rest restaurant review reviews rexroth rich richardli ricoh ril rio rip rmit ro rocher rocks rodeo rogers room rs rsvp ru rugby ruhr run rw rwe ryukyu sa saarland safe safety sakura sale salon samsclub samsung sandvik sandvikcoromant sanofi sap sarl sas save saxo sb sbi sbs sc sca scb schaeffler schmidt scholarships school schule schwarz science scjohnson scot sd se search seat secure security seek select sener services ses seven sew sex sexy sfr sg sh shangrila sharp shaw shell shia shiksha shoes shop shopping shouji show showtime si silk sina singles site sj sk ski skin sky skype sl sling sm smart smile sn sncf so soccer social softbank software sohu solar solutions song sony soy spa space sport spot spreadbetting sr srl ss st stada staples star statebank statefarm stc stcgroup stockholm storage store stream studio study style su sucks supplies supply support surf surgery suzuki sv swatch swiftcover swiss sx sy sydney systems sz tab taipei talk taobao target tatamotors tatar tattoo tax taxi tc tci td tdk team tech technology tel temasek tennis teva tf tg th thd theater theatre tiaa tickets tienda tiffany tips tires tirol tj tjmaxx tjx tk tkmaxx tl tm tmall tn to today tokyo tools top toray toshiba total tours town toyota toys tr trade trading training travel travelchannel travelers travelersinsurance trust trv tt tube tui tunes tushu tv tvs tw tz ua ubank ubs ug uk unicom university uno uol ups us uy uz va vacations vana vanguard vc ve vegas ventures verisign versicherung vet vg vi viajes video vig viking villas vin vip virgin visa vision viva vivo vlaanderen vn vodka volkswagen volvo vote voting voto voyage vu vuelos wales walmart walter wang wanggou watch watches weather weatherchannel webcam weber website wed wedding weibo weir wf whoswho wien wiki williamhill win windows wine winners wme wolterskluwer woodside work works world wow ws wtc wtf xbox xerox xfinity xihuan xin xxx xyz yachts yahoo yamaxun yandex ye yodobashi yoga yokohama you youtube yt yun za zappos zara zero zip zm zone zuerich zw verm\xf6gensberater-ctb verm\xf6gensberatung-pwb \u03b5\u03bb \u03b5\u03c5 \u0431\u0433 \u0431\u0435\u043b \u0434\u0435\u0442\u0438 \u0435\u044e \u043a\u0430\u0442\u043e\u043b\u0438\u043a \u043a\u043e\u043c \u049b\u0430\u0437 \u043c\u043a\u0434 \u043c\u043e\u043d \u043c\u043e\u0441\u043a\u0432\u0430 \u043e\u043d\u043b\u0430\u0439\u043d \u043e\u0440\u0433 \u0440\u0443\u0441 \u0440\u0444 \u0441\u0430\u0439\u0442 \u0441\u0440\u0431 \u0443\u043a\u0440 \u10d2\u10d4 \u0570\u0561\u0575 \u05d9\u05e9\u05e8\u05d0\u05dc \u05e7\u05d5\u05dd \u0627\u0628\u0648\u0638\u0628\u064a \u0627\u062a\u0635\u0627\u0644\u0627\u062a \u0627\u0631\u0627\u0645\u0643\u0648 \u0627\u0644\u0627\u0631\u062f\u0646 \u0627\u0644\u0628\u062d\u0631\u064a\u0646 \u0627\u0644\u062c\u0632\u0627\u0626\u0631 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629 \u0627\u0644\u0639\u0644\u064a\u0627\u0646 \u0627\u0644\u0645\u063a\u0631\u0628 \u0627\u0645\u0627\u0631\u0627\u062a \u0627\u06cc\u0631\u0627\u0646 \u0628\u0627\u0631\u062a \u0628\u0627\u0632\u0627\u0631 \u0628\u06be\u0627\u0631\u062a \u0628\u064a\u062a\u0643 \u067e\u0627\u06a9\u0633\u062a\u0627\u0646 \u0680\u0627\u0631\u062a \u062a\u0648\u0646\u0633 \u0633\u0648\u062f\u0627\u0646 \u0633\u0648\u0631\u064a\u0629 \u0634\u0628\u0643\u0629 \u0639\u0631\u0627\u0642 \u0639\u0631\u0628 \u0639\u0645\u0627\u0646 \u0641\u0644\u0633\u0637\u064a\u0646 \u0642\u0637\u0631 \u0643\u0627\u062b\u0648\u0644\u064a\u0643 \u0643\u0648\u0645 \u0645\u0635\u0631 \u0645\u0644\u064a\u0633\u064a\u0627 \u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627 \u0645\u0648\u0642\u0639 \u0647\u0645\u0631\u0627\u0647 \u0915\u0949\u092e \u0928\u0947\u091f \u092d\u093e\u0930\u0924 \u092d\u093e\u0930\u0924\u092e\u094d \u092d\u093e\u0930\u094b\u0924 \u0938\u0902\u0917\u0920\u0928 \u09ac\u09be\u0982\u09b2\u09be \u09ad\u09be\u09b0\u09a4 \u09ad\u09be\u09f0\u09a4 \u0a2d\u0a3e\u0a30\u0a24 \u0aad\u0abe\u0ab0\u0aa4 \u0b2d\u0b3e\u0b30\u0b24 \u0b87\u0ba8\u0bcd\u0ba4\u0bbf\u0baf\u0bbe \u0b87\u0bb2\u0b99\u0bcd\u0b95\u0bc8 \u0b9a\u0bbf\u0b99\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bcd \u0c2d\u0c3e\u0c30\u0c24\u0c4d \u0cad\u0cbe\u0cb0\u0ca4 \u0d2d\u0d3e\u0d30\u0d24\u0d02 \u0dbd\u0d82\u0d9a\u0dcf \u0e04\u0e2d\u0e21 \u0e44\u0e17\u0e22 \u0ea5\u0eb2\u0ea7 \ub2f7\ub137 \ub2f7\ucef4 \uc0bc\uc131 \ud55c\uad6d \u30a2\u30de\u30be\u30f3 \u30b0\u30fc\u30b0\u30eb \u30af\u30e9\u30a6\u30c9 \u30b3\u30e0 \u30b9\u30c8\u30a2 \u30bb\u30fc\u30eb \u30d5\u30a1\u30c3\u30b7\u30e7\u30f3 \u30dd\u30a4\u30f3\u30c8 \u307f\u3093\u306a \u4e16\u754c \u4e2d\u4fe1 \u4e2d\u56fd \u4e2d\u570b \u4e2d\u6587\u7f51 \u4e9a\u9a6c\u900a \u4f01\u4e1a \u4f5b\u5c71 \u4fe1\u606f \u5065\u5eb7 \u516b\u5366 \u516c\u53f8 \u516c\u76ca \u53f0\u6e7e \u53f0\u7063 \u5546\u57ce \u5546\u5e97 \u5546\u6807 \u5609\u91cc \u5609\u91cc\u5927\u9152\u5e97 \u5728\u7ebf \u5927\u4f17\u6c7d\u8f66 \u5927\u62ff \u5929\u4e3b\u6559 \u5a31\u4e50 \u5bb6\u96fb \u5e7f\u4e1c \u5fae\u535a \u6148\u5584 \u6211\u7231\u4f60 \u624b\u673a \u62db\u8058 \u653f\u52a1 \u653f\u5e9c \u65b0\u52a0\u5761 \u65b0\u95fb \u65f6\u5c1a \u66f8\u7c4d \u673a\u6784 \u6de1\u9a6c\u9521 \u6e38\u620f \u6fb3\u9580 \u70b9\u770b \u79fb\u52a8 \u7ec4\u7ec7\u673a\u6784 \u7f51\u5740 \u7f51\u5e97 \u7f51\u7ad9 \u7f51\u7edc \u8054\u901a \u8bfa\u57fa\u4e9a \u8c37\u6b4c \u8d2d\u7269 \u901a\u8ca9 \u96c6\u56e2 \u96fb\u8a0a\u76c8\u79d1 \u98de\u5229\u6d66 \u98df\u54c1 \u9910\u5385 \u9999\u683c\u91cc\u62c9 \u9999\u6e2f".split(" "),
                et = /(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/,
                nt = /(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEDD-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDDFF\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6])/,
                rt = /\uFE0F/,
                ot = /\d/,
                it = /\s/;

            function st() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    e = o(),
                    n = i(m),
                    r = i(d),
                    u = o(),
                    l = i(v),
                    Q = [
                        [ot, r],
                        [et, r],
                        [nt, r],
                        [rt, r]
                    ],
                    st = function() {
                        var t = i(d);
                        return t.j = {
                            "-": u
                        }, t.jr = [].concat(Q), t
                    },
                    at = function(t) {
                        var e = st();
                        return e.t = t, e
                    };
                c(e, [
                    ["'", i(M)],
                    ["{", i(D)],
                    ["[", i(w)],
                    ["<", i(x)],
                    ["(", i(k)],
                    ["}", i(E)],
                    ["]", i(C)],
                    [">", i(S)],
                    [")", i(A)],
                    ["&", i(O)],
                    ["*", i(F)],
                    ["@", i(T)],
                    ["`", i(j)],
                    ["^", i(N)],
                    [":", i(R)],
                    [",", i(P)],
                    ["$", i(z)],
                    [".", i(I)],
                    ["=", i($)],
                    ["!", i(L)],
                    ["-", i(H)],
                    ["%", i(W)],
                    ["|", i(_)],
                    ["+", i(V)],
                    ["#", i(q)],
                    ["?", i(J)],
                    ['"', i(Y)],
                    ["/", i(K)],
                    [";", i(U)],
                    ["~", i(G)],
                    ["_", i(X)],
                    ["\\", i(B)]
                ]), s(e, "\n", i(b)), a(e, it, l), s(l, "\n", o()), a(l, it, l);
                for (var ut = 0; ut < tt.length; ut++) p(e, tt[ut], at(h), st);
                var lt = st(),
                    ct = st(),
                    pt = st(),
                    dt = st();
                p(e, "file", lt, st), p(e, "ftp", ct, st), p(e, "http", pt, st), p(e, "mailto", dt, st);
                var ft = st(),
                    ht = i(g),
                    mt = i(y);
                s(ct, "s", ft), s(ct, ":", ht), s(pt, "s", ft), s(pt, ":", ht), s(lt, ":", ht), s(ft, ":", ht), s(dt, ":", mt);
                for (var gt = st(), yt = 0; yt < t.length; yt++) p(e, t[yt], gt, st);
                return s(gt, ":", ht), p(e, "localhost", at(f), st), a(e, ot, n), a(e, et, r), a(e, nt, r), a(e, rt, r), a(n, ot, n), a(n, et, r), a(n, nt, r), a(n, rt, r), s(n, "-", u), s(r, "-", u), s(u, "-", u), a(r, ot, r), a(r, et, r), a(r, nt, r), a(r, rt, r), a(u, ot, r), a(u, et, r), a(u, nt, r), a(u, rt, r), e.jd = i(Z), e
            }

            function at(t) {
                return at = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, at(t)
            }
            var ut = {
                defaultProtocol: "http",
                events: null,
                format: ct,
                formatHref: ct,
                nl2br: !1,
                tagName: "a",
                target: null,
                rel: null,
                validate: !0,
                truncate: 0,
                className: null,
                attributes: null,
                ignoreTags: []
            };

            function lt(t) {
                t = t || {}, this.defaultProtocol = "defaultProtocol" in t ? t.defaultProtocol : ut.defaultProtocol, this.events = "events" in t ? t.events : ut.events, this.format = "format" in t ? t.format : ut.format, this.formatHref = "formatHref" in t ? t.formatHref : ut.formatHref, this.nl2br = "nl2br" in t ? t.nl2br : ut.nl2br, this.tagName = "tagName" in t ? t.tagName : ut.tagName, this.target = "target" in t ? t.target : ut.target, this.rel = "rel" in t ? t.rel : ut.rel, this.validate = "validate" in t ? t.validate : ut.validate, this.truncate = "truncate" in t ? t.truncate : ut.truncate, this.className = "className" in t ? t.className : ut.className, this.attributes = t.attributes || ut.attributes, this.ignoreTags = [];
                for (var e = ("ignoreTags" in t ? t.ignoreTags : ut.ignoreTags), n = 0; n < e.length; n++) this.ignoreTags.push(e[n].toUpperCase())
            }

            function ct(t) {
                return t
            }
            lt.prototype = {
                resolve: function(t) {
                    var e = t.toHref(this.defaultProtocol);
                    return {
                        formatted: this.get("format", t.toString(), t),
                        formattedHref: this.get("formatHref", e, t),
                        tagName: this.get("tagName", e, t),
                        className: this.get("className", e, t),
                        target: this.get("target", e, t),
                        rel: this.get("rel", e, t),
                        events: this.getObject("events", e, t),
                        attributes: this.getObject("attributes", e, t),
                        truncate: this.get("truncate", e, t)
                    }
                },
                check: function(t) {
                    return this.get("validate", t.toString(), t)
                },
                get: function(t, e, n) {
                    var r, o = this[t];
                    if (!o) return o;
                    switch (at(o)) {
                        case "function":
                            return o(e, n.t);
                        case "object":
                            return "function" === typeof(r = n.t in o ? o[n.t] : ut[t]) ? r(e, n.t) : r
                    }
                    return o
                },
                getObject: function(t, e, n) {
                    var r = this[t];
                    return "function" === typeof r ? r(e, n.t) : r
                }
            };

            function pt() {}

            function dt(t, e) {
                function n(e, n) {
                    this.t = t, this.v = e, this.tk = n
                }
                return function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = Object.create(t.prototype);
                    for (var o in n) r[o] = n[o];
                    r.constructor = e, e.prototype = r
                }(pt, n, e), n
            }
            pt.prototype = {
                t: "token",
                isLink: !1,
                toString: function() {
                    return this.v
                },
                toHref: function() {
                    return this.toString()
                },
                startIndex: function() {
                    return this.tk[0].s
                },
                endIndex: function() {
                    return this.tk[this.tk.length - 1].e
                },
                toObject: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ut.defaultProtocol;
                    return {
                        type: this.t,
                        value: this.v,
                        isLink: this.isLink,
                        href: this.toHref(t),
                        start: this.startIndex(),
                        end: this.endIndex()
                    }
                }
            };
            var ft = dt("email", {
                    isLink: !0
                }),
                ht = dt("email", {
                    isLink: !0,
                    toHref: function() {
                        return "mailto:" + this.toString()
                    }
                }),
                mt = dt("text"),
                gt = dt("nl"),
                yt = dt("url", {
                    isLink: !0,
                    toHref: function() {
                        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ut.defaultProtocol, e = this.tk, n = !1, r = !1, o = [], i = 0; e[i].t === g;) n = !0, o.push(e[i].v), i++;
                        for (; e[i].t === K;) r = !0, o.push(e[i].v), i++;
                        for (; i < e.length; i++) o.push(e[i].v);
                        return o = o.join(""), n || r || (o = "".concat(t, "://").concat(o)), o
                    },
                    hasProtocol: function() {
                        return this.tk[0].t === g
                    }
                }),
                vt = Object.freeze({
                    __proto__: null,
                    MultiToken: pt,
                    Base: pt,
                    createTokenClass: dt,
                    MailtoEmail: ft,
                    Email: ht,
                    Text: mt,
                    Nl: gt,
                    Url: yt
                });

            function bt() {
                var t = o(),
                    e = o(),
                    n = o(),
                    r = o(),
                    a = o(),
                    u = o(),
                    c = o(),
                    p = i(yt),
                    v = o(),
                    Q = i(yt),
                    tt = i(yt),
                    et = o(),
                    nt = o(),
                    rt = o(),
                    ot = o(),
                    it = o(),
                    st = i(yt),
                    at = i(yt),
                    ut = i(yt),
                    lt = i(yt),
                    ct = o(),
                    pt = o(),
                    dt = o(),
                    mt = o(),
                    vt = o(),
                    bt = o(),
                    Dt = i(ht),
                    wt = o(),
                    xt = i(ht),
                    kt = i(ft),
                    Et = o(),
                    Ct = o(),
                    St = o(),
                    At = o(),
                    Ot = i(gt);
                s(t, b, Ot), s(t, g, e), s(t, y, n), s(e, K, r), s(r, K, a), s(t, h, u), s(t, d, u), s(t, f, p), s(t, m, u), s(a, h, tt), s(a, d, tt), s(a, m, tt), s(a, f, tt), s(u, I, c), s(vt, I, bt), s(c, h, p), s(c, d, u), s(c, m, u), s(c, f, u), s(bt, h, Dt), s(bt, d, vt), s(bt, m, vt), s(bt, f, vt), s(p, I, c), s(Dt, I, bt), s(p, R, v), s(p, K, tt), s(v, m, Q), s(Q, K, tt), s(Dt, R, wt), s(wt, m, xt);
                var Mt = [O, F, T, B, j, N, z, d, $, H, f, m, W, _, V, q, g, K, Z, G, h, X],
                    Ft = [M, S, E, C, A, R, P, I, L, x, D, w, k, J, Y, U];
                s(tt, D, nt), s(tt, w, rt), s(tt, x, ot), s(tt, k, it), s(et, D, nt), s(et, w, rt), s(et, x, ot), s(et, k, it), s(nt, E, tt), s(rt, C, tt), s(ot, S, tt), s(it, A, tt), s(st, E, tt), s(at, C, tt), s(ut, S, tt), s(lt, A, tt), s(ct, E, tt), s(pt, C, tt), s(dt, S, tt), s(mt, A, tt), l(nt, Mt, st), l(rt, Mt, at), l(ot, Mt, ut), l(it, Mt, lt), l(nt, Ft, ct), l(rt, Ft, pt), l(ot, Ft, dt), l(it, Ft, mt), l(st, Mt, st), l(at, Mt, at), l(ut, Mt, ut), l(lt, Mt, lt), l(st, Ft, st), l(at, Ft, at), l(ut, Ft, ut), l(lt, Ft, lt), l(ct, Mt, st), l(pt, Mt, at), l(dt, Mt, ut), l(mt, Mt, lt), l(ct, Ft, ct), l(pt, Ft, pt), l(dt, Ft, dt), l(mt, Ft, mt), l(tt, Mt, tt), l(et, Mt, tt), l(tt, Ft, et), l(et, Ft, et), s(n, h, kt), s(n, d, kt), s(n, m, kt), s(n, f, kt), l(kt, Mt, kt), l(kt, Ft, Et), l(Et, Mt, kt), l(Et, Ft, Et);
                var Tt = [O, M, F, B, j, N, E, z, d, $, H, m, D, W, _, V, q, J, K, Z, G, h, X];
                return l(u, Tt, Ct), s(u, T, St), l(p, Tt, Ct), s(p, T, St), l(c, Tt, Ct), l(Ct, Tt, Ct), s(Ct, T, St), s(Ct, I, At), l(At, Tt, Ct), s(St, h, vt), s(St, d, vt), s(St, m, vt), s(St, f, Dt), t
            }

            function Dt(t, e, n) {
                var r = n[0].s,
                    o = n[n.length - 1].e;
                return new t(e.substr(r, o - r), n)
            }
            "undefined" !== typeof console && console && console.warn;
            var wt = {
                scanner: null,
                parser: null,
                pluginQueue: [],
                customProtocols: [],
                initialized: !1
            };

            function xt(t) {
                return wt.initialized || function() {
                        wt.scanner = {
                            start: st(wt.customProtocols),
                            tokens: Q
                        }, wt.parser = {
                            start: bt(),
                            tokens: vt
                        };
                        for (var t = {
                                createTokenClass: dt
                            }, e = 0; e < wt.pluginQueue.length; e++) wt.pluginQueue[e][1]({
                            scanner: wt.scanner,
                            parser: wt.parser,
                            utils: t
                        });
                        wt.initialized = !0
                    }(),
                    function(t, e, n) {
                        for (var r = n.length, o = 0, i = [], s = []; o < r;) {
                            for (var a = t, l = null, c = null, p = 0, d = null, f = -1; o < r && !(l = u(a, n[o].t));) s.push(n[o++]);
                            for (; o < r && (c = l || u(a, n[o].t));) l = null, (a = c).accepts() ? (f = 0, d = a) : f >= 0 && f++, o++, p++;
                            if (f < 0)
                                for (var h = o - p; h < o; h++) s.push(n[h]);
                            else {
                                s.length > 0 && (i.push(Dt(mt, e, s)), s = []), o -= f, p -= f;
                                var m = d.t,
                                    g = n.slice(o - p, o);
                                i.push(Dt(m, e, g))
                            }
                        }
                        return s.length > 0 && i.push(Dt(mt, e, s)), i
                    }(wt.parser.start, t, function(t, e) {
                        for (var n = function(t) {
                                for (var e = [], n = t.length, r = 0; r < n;) {
                                    var o = t.charCodeAt(r),
                                        i = void 0,
                                        s = o < 55296 || o > 56319 || r + 1 === n || (i = t.charCodeAt(r + 1)) < 56320 || i > 57343 ? t[r] : t.slice(r, r + 2);
                                    e.push(s), r += s.length
                                }
                                return e
                            }(e.replace(/[A-Z]/g, (function(t) {
                                return t.toLowerCase()
                            }))), r = n.length, o = [], i = 0, s = 0; s < r;) {
                            for (var a = t, l = null, c = 0, p = null, d = -1, f = -1; s < r && (l = u(a, n[s]));)(a = l).accepts() ? (d = 0, f = 0, p = a) : d >= 0 && (d += n[s].length, f++), c += n[s].length, i += n[s].length, s++;
                            i -= d, s -= f, c -= d, o.push({
                                t: p.t,
                                v: e.substr(i - c, c),
                                s: i - c,
                                e: i
                            })
                        }
                        return o
                    }(wt.scanner.start, t))
            }

            function kt(t) {
                for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = xt(t), r = [], o = 0; o < n.length; o++) {
                    var i = n[o];
                    !i.isLink || e && i.t !== e || r.push(i.toObject())
                }
                return r
            }

            function Et(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = xt(t);
                return 1 === n.length && n[0].isLink && (!e || n[0].t === e)
            }
        },
        19841: function(t, e, n) {
            "use strict";

            function r(t) {
                var e, n, o = "";
                if ("string" == typeof t || "number" == typeof t) o += t;
                else if ("object" == typeof t)
                    if (Array.isArray(t))
                        for (e = 0; e < t.length; e++) t[e] && (n = r(t[e])) && (o && (o += " "), o += n);
                    else
                        for (e in t) t[e] && (o && (o += " "), o += e);
                return o
            }

            function o() {
                for (var t, e, n = 0, o = ""; n < arguments.length;)(t = arguments[n++]) && (e = r(t)) && (o && (o += " "), o += e);
                return o
            }
            n.r(e), n.d(e, {
                clsx: function() {
                    return o
                }
            }), e.default = o
        },
        90923: function(t) {
            t.exports = {}
        },
        9961: function(t, e, n) {
            "use strict";

            function r(t) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, r(t)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "DraggableCore", {
                enumerable: !0,
                get: function() {
                    return p.default
                }
            }), e.default = void 0;
            var o = function(t, e) {
                    if (!e && t && t.__esModule) return t;
                    if (null === t || "object" !== r(t) && "function" !== typeof t) return {
                        default: t
                    };
                    var n = m(e);
                    if (n && n.has(t)) return n.get(t);
                    var o = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in t)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(t, s)) {
                            var a = i ? Object.getOwnPropertyDescriptor(t, s) : null;
                            a && (a.get || a.set) ? Object.defineProperty(o, s, a) : o[s] = t[s]
                        }
                    o.default = t, n && n.set(t, o);
                    return o
                }(n(70079)),
                i = h(n(39519)),
                s = h(n(99581)),
                a = h(n(19841)),
                u = n(83315),
                l = n(50334),
                c = n(93185),
                p = h(n(58174)),
                d = h(n(1720)),
                f = ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"];

            function h(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function m(t) {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap,
                    n = new WeakMap;
                return (m = function(t) {
                    return t ? n : e
                })(t)
            }

            function g() {
                return g = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, g.apply(this, arguments)
            }

            function y(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                }
                return o
            }

            function v(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function b(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? v(Object(n), !0).forEach((function(e) {
                        O(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function D(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == n) return;
                    var r, o, i = [],
                        s = !0,
                        a = !1;
                    try {
                        for (n = n.call(t); !(s = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); s = !0);
                    } catch (u) {
                        a = !0, o = u
                    } finally {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return i
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" === typeof t) return w(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function w(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function x(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function k(t, e) {
                return k = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, k(t, e)
            }

            function E(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = A(t);
                    if (e) {
                        var o = A(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return C(this, n)
                }
            }

            function C(t, e) {
                if (e && ("object" === r(e) || "function" === typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return S(t)
            }

            function S(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function A(t) {
                return A = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, A(t)
            }

            function O(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var M = function(t) {
                ! function(t, e) {
                    if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && k(t, e)
                }(c, t);
                var e, n, r, i = E(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), O(S(e = i.call(this, t)), "onDragStart", (function(t, n) {
                        if ((0, d.default)("Draggable: onDragStart: %j", n), !1 === e.props.onStart(t, (0, l.createDraggableData)(S(e), n))) return !1;
                        e.setState({
                            dragging: !0,
                            dragged: !0
                        })
                    })), O(S(e), "onDrag", (function(t, n) {
                        if (!e.state.dragging) return !1;
                        (0, d.default)("Draggable: onDrag: %j", n);
                        var r = (0, l.createDraggableData)(S(e), n),
                            o = {
                                x: r.x,
                                y: r.y
                            };
                        if (e.props.bounds) {
                            var i = o.x,
                                s = o.y;
                            o.x += e.state.slackX, o.y += e.state.slackY;
                            var a = D((0, l.getBoundPosition)(S(e), o.x, o.y), 2),
                                u = a[0],
                                c = a[1];
                            o.x = u, o.y = c, o.slackX = e.state.slackX + (i - o.x), o.slackY = e.state.slackY + (s - o.y), r.x = o.x, r.y = o.y, r.deltaX = o.x - e.state.x, r.deltaY = o.y - e.state.y
                        }
                        if (!1 === e.props.onDrag(t, r)) return !1;
                        e.setState(o)
                    })), O(S(e), "onDragStop", (function(t, n) {
                        if (!e.state.dragging) return !1;
                        if (!1 === e.props.onStop(t, (0, l.createDraggableData)(S(e), n))) return !1;
                        (0, d.default)("Draggable: onDragStop: %j", n);
                        var r = {
                            dragging: !1,
                            slackX: 0,
                            slackY: 0
                        };
                        if (Boolean(e.props.position)) {
                            var o = e.props.position,
                                i = o.x,
                                s = o.y;
                            r.x = i, r.y = s
                        }
                        e.setState(r)
                    })), e.state = {
                        dragging: !1,
                        dragged: !1,
                        x: t.position ? t.position.x : t.defaultPosition.x,
                        y: t.position ? t.position.y : t.defaultPosition.y,
                        prevPropsPosition: b({}, t.position),
                        slackX: 0,
                        slackY: 0,
                        isElementSVG: !1
                    }, !t.position || t.onDrag || t.onStop || console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."), e
                }
                return e = c, r = [{
                    key: "getDerivedStateFromProps",
                    value: function(t, e) {
                        var n = t.position,
                            r = e.prevPropsPosition;
                        return !n || r && n.x === r.x && n.y === r.y ? null : ((0, d.default)("Draggable: getDerivedStateFromProps %j", {
                            position: n,
                            prevPropsPosition: r
                        }), {
                            x: n.x,
                            y: n.y,
                            prevPropsPosition: b({}, n)
                        })
                    }
                }], (n = [{
                    key: "componentDidMount",
                    value: function() {
                        "undefined" !== typeof window.SVGElement && this.findDOMNode() instanceof window.SVGElement && this.setState({
                            isElementSVG: !0
                        })
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.setState({
                            dragging: !1
                        })
                    }
                }, {
                    key: "findDOMNode",
                    value: function() {
                        var t, e, n;
                        return null !== (t = null === (e = this.props) || void 0 === e || null === (n = e.nodeRef) || void 0 === n ? void 0 : n.current) && void 0 !== t ? t : s.default.findDOMNode(this)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t, e = this.props,
                            n = (e.axis, e.bounds, e.children),
                            r = e.defaultPosition,
                            i = e.defaultClassName,
                            s = e.defaultClassNameDragging,
                            c = e.defaultClassNameDragged,
                            d = e.position,
                            h = e.positionOffset,
                            m = (e.scale, y(e, f)),
                            v = {},
                            D = null,
                            w = !Boolean(d) || this.state.dragging,
                            x = d || r,
                            k = {
                                x: (0, l.canDragX)(this) && w ? this.state.x : x.x,
                                y: (0, l.canDragY)(this) && w ? this.state.y : x.y
                            };
                        this.state.isElementSVG ? D = (0, u.createSVGTransform)(k, h) : v = (0, u.createCSSTransform)(k, h);
                        var E = (0, a.default)(n.props.className || "", i, (O(t = {}, s, this.state.dragging), O(t, c, this.state.dragged), t));
                        return o.createElement(p.default, g({}, m, {
                            onStart: this.onDragStart,
                            onDrag: this.onDrag,
                            onStop: this.onDragStop
                        }), o.cloneElement(o.Children.only(n), {
                            className: E,
                            style: b(b({}, n.props.style), v),
                            transform: D
                        }))
                    }
                }]) && x(e.prototype, n), r && x(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.Component);
            e.default = M, O(M, "displayName", "Draggable"), O(M, "propTypes", b(b({}, p.default.propTypes), {}, {
                axis: i.default.oneOf(["both", "x", "y", "none"]),
                bounds: i.default.oneOfType([i.default.shape({
                    left: i.default.number,
                    right: i.default.number,
                    top: i.default.number,
                    bottom: i.default.number
                }), i.default.string, i.default.oneOf([!1])]),
                defaultClassName: i.default.string,
                defaultClassNameDragging: i.default.string,
                defaultClassNameDragged: i.default.string,
                defaultPosition: i.default.shape({
                    x: i.default.number,
                    y: i.default.number
                }),
                positionOffset: i.default.shape({
                    x: i.default.oneOfType([i.default.number, i.default.string]),
                    y: i.default.oneOfType([i.default.number, i.default.string])
                }),
                position: i.default.shape({
                    x: i.default.number,
                    y: i.default.number
                }),
                className: c.dontSetMe,
                style: c.dontSetMe,
                transform: c.dontSetMe
            })), O(M, "defaultProps", b(b({}, p.default.defaultProps), {}, {
                axis: "both",
                bounds: !1,
                defaultClassName: "react-draggable",
                defaultClassNameDragging: "react-draggable-dragging",
                defaultClassNameDragged: "react-draggable-dragged",
                defaultPosition: {
                    x: 0,
                    y: 0
                },
                scale: 1
            }))
        },
        58174: function(t, e, n) {
            "use strict";

            function r(t) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, r(t)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = function(t, e) {
                    if (!e && t && t.__esModule) return t;
                    if (null === t || "object" !== r(t) && "function" !== typeof t) return {
                        default: t
                    };
                    var n = d(e);
                    if (n && n.has(t)) return n.get(t);
                    var o = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in t)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(t, s)) {
                            var a = i ? Object.getOwnPropertyDescriptor(t, s) : null;
                            a && (a.get || a.set) ? Object.defineProperty(o, s, a) : o[s] = t[s]
                        }
                    o.default = t, n && n.set(t, o);
                    return o
                }(n(70079)),
                i = p(n(39519)),
                s = p(n(99581)),
                a = n(83315),
                u = n(50334),
                l = n(93185),
                c = p(n(1720));

            function p(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function d(t) {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap,
                    n = new WeakMap;
                return (d = function(t) {
                    return t ? n : e
                })(t)
            }

            function f(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == n) return;
                    var r, o, i = [],
                        s = !0,
                        a = !1;
                    try {
                        for (n = n.call(t); !(s = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); s = !0);
                    } catch (u) {
                        a = !0, o = u
                    } finally {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return i
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" === typeof t) return h(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function h(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function m(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function g(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function y(t, e) {
                return y = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, y(t, e)
            }

            function v(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = w(t);
                    if (e) {
                        var o = w(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return b(this, n)
                }
            }

            function b(t, e) {
                if (e && ("object" === r(e) || "function" === typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return D(t)
            }

            function D(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function w(t) {
                return w = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, w(t)
            }

            function x(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var k = {
                    start: "touchstart",
                    move: "touchmove",
                    stop: "touchend"
                },
                E = {
                    start: "mousedown",
                    move: "mousemove",
                    stop: "mouseup"
                },
                C = E,
                S = function(t) {
                    ! function(t, e) {
                        if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e && y(t, e)
                    }(l, t);
                    var e, n, r, i = v(l);

                    function l() {
                        var t;
                        m(this, l);
                        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        return x(D(t = i.call.apply(i, [this].concat(n))), "state", {
                            dragging: !1,
                            lastX: NaN,
                            lastY: NaN,
                            touchIdentifier: null
                        }), x(D(t), "mounted", !1), x(D(t), "handleDragStart", (function(e) {
                            if (t.props.onMouseDown(e), !t.props.allowAnyClick && "number" === typeof e.button && 0 !== e.button) return !1;
                            var n = t.findDOMNode();
                            if (!n || !n.ownerDocument || !n.ownerDocument.body) throw new Error("<DraggableCore> not mounted on DragStart!");
                            var r = n.ownerDocument;
                            if (!(t.props.disabled || !(e.target instanceof r.defaultView.Node) || t.props.handle && !(0, a.matchesSelectorAndParentsTo)(e.target, t.props.handle, n) || t.props.cancel && (0, a.matchesSelectorAndParentsTo)(e.target, t.props.cancel, n))) {
                                "touchstart" === e.type && e.preventDefault();
                                var o = (0, a.getTouchIdentifier)(e);
                                t.setState({
                                    touchIdentifier: o
                                });
                                var i = (0, u.getControlPosition)(e, o, D(t));
                                if (null != i) {
                                    var s = i.x,
                                        l = i.y,
                                        p = (0, u.createCoreData)(D(t), s, l);
                                    (0, c.default)("DraggableCore: handleDragStart: %j", p), (0, c.default)("calling", t.props.onStart), !1 !== t.props.onStart(e, p) && !1 !== t.mounted && (t.props.enableUserSelectHack && (0, a.addUserSelectStyles)(r), t.setState({
                                        dragging: !0,
                                        lastX: s,
                                        lastY: l
                                    }), (0, a.addEvent)(r, C.move, t.handleDrag), (0, a.addEvent)(r, C.stop, t.handleDragStop))
                                }
                            }
                        })), x(D(t), "handleDrag", (function(e) {
                            var n = (0, u.getControlPosition)(e, t.state.touchIdentifier, D(t));
                            if (null != n) {
                                var r = n.x,
                                    o = n.y;
                                if (Array.isArray(t.props.grid)) {
                                    var i = r - t.state.lastX,
                                        s = o - t.state.lastY,
                                        a = f((0, u.snapToGrid)(t.props.grid, i, s), 2);
                                    if (i = a[0], s = a[1], !i && !s) return;
                                    r = t.state.lastX + i, o = t.state.lastY + s
                                }
                                var l = (0, u.createCoreData)(D(t), r, o);
                                if ((0, c.default)("DraggableCore: handleDrag: %j", l), !1 !== t.props.onDrag(e, l) && !1 !== t.mounted) t.setState({
                                    lastX: r,
                                    lastY: o
                                });
                                else try {
                                    t.handleDragStop(new MouseEvent("mouseup"))
                                } catch (d) {
                                    var p = document.createEvent("MouseEvents");
                                    p.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), t.handleDragStop(p)
                                }
                            }
                        })), x(D(t), "handleDragStop", (function(e) {
                            if (t.state.dragging) {
                                var n = (0, u.getControlPosition)(e, t.state.touchIdentifier, D(t));
                                if (null != n) {
                                    var r = n.x,
                                        o = n.y;
                                    if (Array.isArray(t.props.grid)) {
                                        var i = r - t.state.lastX || 0,
                                            s = o - t.state.lastY || 0,
                                            l = f((0, u.snapToGrid)(t.props.grid, i, s), 2);
                                        i = l[0], s = l[1], r = t.state.lastX + i, o = t.state.lastY + s
                                    }
                                    var p = (0, u.createCoreData)(D(t), r, o);
                                    if (!1 === t.props.onStop(e, p) || !1 === t.mounted) return !1;
                                    var d = t.findDOMNode();
                                    d && t.props.enableUserSelectHack && (0, a.removeUserSelectStyles)(d.ownerDocument), (0, c.default)("DraggableCore: handleDragStop: %j", p), t.setState({
                                        dragging: !1,
                                        lastX: NaN,
                                        lastY: NaN
                                    }), d && ((0, c.default)("DraggableCore: Removing handlers"), (0, a.removeEvent)(d.ownerDocument, C.move, t.handleDrag), (0, a.removeEvent)(d.ownerDocument, C.stop, t.handleDragStop))
                                }
                            }
                        })), x(D(t), "onMouseDown", (function(e) {
                            return C = E, t.handleDragStart(e)
                        })), x(D(t), "onMouseUp", (function(e) {
                            return C = E, t.handleDragStop(e)
                        })), x(D(t), "onTouchStart", (function(e) {
                            return C = k, t.handleDragStart(e)
                        })), x(D(t), "onTouchEnd", (function(e) {
                            return C = k, t.handleDragStop(e)
                        })), t
                    }
                    return e = l, (n = [{
                        key: "componentDidMount",
                        value: function() {
                            this.mounted = !0;
                            var t = this.findDOMNode();
                            t && (0, a.addEvent)(t, k.start, this.onTouchStart, {
                                passive: !1
                            })
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.mounted = !1;
                            var t = this.findDOMNode();
                            if (t) {
                                var e = t.ownerDocument;
                                (0, a.removeEvent)(e, E.move, this.handleDrag), (0, a.removeEvent)(e, k.move, this.handleDrag), (0, a.removeEvent)(e, E.stop, this.handleDragStop), (0, a.removeEvent)(e, k.stop, this.handleDragStop), (0, a.removeEvent)(t, k.start, this.onTouchStart, {
                                    passive: !1
                                }), this.props.enableUserSelectHack && (0, a.removeUserSelectStyles)(e)
                            }
                        }
                    }, {
                        key: "findDOMNode",
                        value: function() {
                            var t, e, n;
                            return null !== (t = this.props) && void 0 !== t && t.nodeRef ? null === (e = this.props) || void 0 === e || null === (n = e.nodeRef) || void 0 === n ? void 0 : n.current : s.default.findDOMNode(this)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return o.cloneElement(o.Children.only(this.props.children), {
                                onMouseDown: this.onMouseDown,
                                onMouseUp: this.onMouseUp,
                                onTouchEnd: this.onTouchEnd
                            })
                        }
                    }]) && g(e.prototype, n), r && g(e, r), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), l
                }(o.Component);
            e.default = S, x(S, "displayName", "DraggableCore"), x(S, "propTypes", {
                allowAnyClick: i.default.bool,
                disabled: i.default.bool,
                enableUserSelectHack: i.default.bool,
                offsetParent: function(t, e) {
                    if (t[e] && 1 !== t[e].nodeType) throw new Error("Draggable's offsetParent must be a DOM Node.")
                },
                grid: i.default.arrayOf(i.default.number),
                handle: i.default.string,
                cancel: i.default.string,
                nodeRef: i.default.object,
                onStart: i.default.func,
                onDrag: i.default.func,
                onStop: i.default.func,
                onMouseDown: i.default.func,
                scale: i.default.number,
                className: l.dontSetMe,
                style: l.dontSetMe,
                transform: l.dontSetMe
            }), x(S, "defaultProps", {
                allowAnyClick: !1,
                disabled: !1,
                enableUserSelectHack: !0,
                onStart: function() {},
                onDrag: function() {},
                onStop: function() {},
                onMouseDown: function() {},
                scale: 1
            })
        },
        59349: function(t, e, n) {
            "use strict";
            var r = n(9961),
                o = r.default,
                i = r.DraggableCore;
            t.exports = o, t.exports.default = o, t.exports.DraggableCore = i
        },
        83315: function(t, e, n) {
            "use strict";

            function r(t) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, r(t)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.addClassName = f, e.addEvent = function(t, e, n, r) {
                if (!t) return;
                var o = u({
                    capture: !0
                }, r);
                t.addEventListener ? t.addEventListener(e, n, o) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n
            }, e.addUserSelectStyles = function(t) {
                if (!t) return;
                var e = t.getElementById("react-draggable-style-el");
                e || ((e = t.createElement("style")).type = "text/css", e.id = "react-draggable-style-el", e.innerHTML = ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n", e.innerHTML += ".react-draggable-transparent-selection *::selection {all: inherit;}\n", t.getElementsByTagName("head")[0].appendChild(e));
                t.body && f(t.body, "react-draggable-transparent-selection")
            }, e.createCSSTransform = function(t, e) {
                var n = d(t, e, "px");
                return l({}, (0, i.browserPrefixToKey)("transform", i.default), n)
            }, e.createSVGTransform = function(t, e) {
                return d(t, e, "")
            }, e.getTouch = function(t, e) {
                return t.targetTouches && (0, o.findInArray)(t.targetTouches, (function(t) {
                    return e === t.identifier
                })) || t.changedTouches && (0, o.findInArray)(t.changedTouches, (function(t) {
                    return e === t.identifier
                }))
            }, e.getTouchIdentifier = function(t) {
                if (t.targetTouches && t.targetTouches[0]) return t.targetTouches[0].identifier;
                if (t.changedTouches && t.changedTouches[0]) return t.changedTouches[0].identifier
            }, e.getTranslation = d, e.innerHeight = function(t) {
                var e = t.clientHeight,
                    n = t.ownerDocument.defaultView.getComputedStyle(t);
                return e -= (0, o.int)(n.paddingTop), e -= (0, o.int)(n.paddingBottom)
            }, e.innerWidth = function(t) {
                var e = t.clientWidth,
                    n = t.ownerDocument.defaultView.getComputedStyle(t);
                return e -= (0, o.int)(n.paddingLeft), e -= (0, o.int)(n.paddingRight)
            }, e.matchesSelector = p, e.matchesSelectorAndParentsTo = function(t, e, n) {
                var r = t;
                do {
                    if (p(r, e)) return !0;
                    if (r === n) return !1;
                    r = r.parentNode
                } while (r);
                return !1
            }, e.offsetXYFromParent = function(t, e, n) {
                var r = e === e.ownerDocument.body ? {
                        left: 0,
                        top: 0
                    } : e.getBoundingClientRect(),
                    o = (t.clientX + e.scrollLeft - r.left) / n,
                    i = (t.clientY + e.scrollTop - r.top) / n;
                return {
                    x: o,
                    y: i
                }
            }, e.outerHeight = function(t) {
                var e = t.clientHeight,
                    n = t.ownerDocument.defaultView.getComputedStyle(t);
                return e += (0, o.int)(n.borderTopWidth), e += (0, o.int)(n.borderBottomWidth)
            }, e.outerWidth = function(t) {
                var e = t.clientWidth,
                    n = t.ownerDocument.defaultView.getComputedStyle(t);
                return e += (0, o.int)(n.borderLeftWidth), e += (0, o.int)(n.borderRightWidth)
            }, e.removeClassName = h, e.removeEvent = function(t, e, n, r) {
                if (!t) return;
                var o = u({
                    capture: !0
                }, r);
                t.removeEventListener ? t.removeEventListener(e, n, o) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = null
            }, e.removeUserSelectStyles = function(t) {
                if (!t) return;
                try {
                    if (t.body && h(t.body, "react-draggable-transparent-selection"), t.selection) t.selection.empty();
                    else {
                        var e = (t.defaultView || window).getSelection();
                        e && "Caret" !== e.type && e.removeAllRanges()
                    }
                } catch (n) {}
            };
            var o = n(93185),
                i = function(t, e) {
                    if (!e && t && t.__esModule) return t;
                    if (null === t || "object" !== r(t) && "function" !== typeof t) return {
                        default: t
                    };
                    var n = s(e);
                    if (n && n.has(t)) return n.get(t);
                    var o = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in t)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(t, a)) {
                            var u = i ? Object.getOwnPropertyDescriptor(t, a) : null;
                            u && (u.get || u.set) ? Object.defineProperty(o, a, u) : o[a] = t[a]
                        }
                    o.default = t, n && n.set(t, o);
                    return o
                }(n(93664));

            function s(t) {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap,
                    n = new WeakMap;
                return (s = function(t) {
                    return t ? n : e
                })(t)
            }

            function a(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? a(Object(n), !0).forEach((function(e) {
                        l(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function l(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var c = "";

            function p(t, e) {
                return c || (c = (0, o.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], (function(e) {
                    return (0, o.isFunction)(t[e])
                }))), !!(0, o.isFunction)(t[c]) && t[c](e)
            }

            function d(t, e, n) {
                var r = t.x,
                    o = t.y,
                    i = "translate(".concat(r).concat(n, ",").concat(o).concat(n, ")");
                if (e) {
                    var s = "".concat("string" === typeof e.x ? e.x : e.x + n),
                        a = "".concat("string" === typeof e.y ? e.y : e.y + n);
                    i = "translate(".concat(s, ", ").concat(a, ")") + i
                }
                return i
            }

            function f(t, e) {
                t.classList ? t.classList.add(e) : t.className.match(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"))) || (t.className += " ".concat(e))
            }

            function h(t, e) {
                t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"), "g"), "")
            }
        },
        93664: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.browserPrefixToKey = o, e.browserPrefixToStyle = function(t, e) {
                return e ? "-".concat(e.toLowerCase(), "-").concat(t) : t
            }, e.default = void 0, e.getPrefix = r;
            var n = ["Moz", "Webkit", "O", "ms"];

            function r() {
                var t, e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transform";
                if ("undefined" === typeof window) return "";
                var i = null === (t = window.document) || void 0 === t || null === (e = t.documentElement) || void 0 === e ? void 0 : e.style;
                if (!i) return "";
                if (r in i) return "";
                for (var s = 0; s < n.length; s++)
                    if (o(r, n[s]) in i) return n[s];
                return ""
            }

            function o(t, e) {
                return e ? "".concat(e).concat(function(t) {
                    for (var e = "", n = !0, r = 0; r < t.length; r++) n ? (e += t[r].toUpperCase(), n = !1) : "-" === t[r] ? n = !0 : e += t[r];
                    return e
                }(t)) : t
            }
            var i = r();
            e.default = i
        },
        1720: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function() {
                0
            }
        },
        50334: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.canDragX = function(t) {
                return "both" === t.props.axis || "x" === t.props.axis
            }, e.canDragY = function(t) {
                return "both" === t.props.axis || "y" === t.props.axis
            }, e.createCoreData = function(t, e, n) {
                var o = t.state,
                    s = !(0, r.isNum)(o.lastX),
                    a = i(t);
                return s ? {
                    node: a,
                    deltaX: 0,
                    deltaY: 0,
                    lastX: e,
                    lastY: n,
                    x: e,
                    y: n
                } : {
                    node: a,
                    deltaX: e - o.lastX,
                    deltaY: n - o.lastY,
                    lastX: o.lastX,
                    lastY: o.lastY,
                    x: e,
                    y: n
                }
            }, e.createDraggableData = function(t, e) {
                var n = t.props.scale;
                return {
                    node: e.node,
                    x: t.state.x + e.deltaX / n,
                    y: t.state.y + e.deltaY / n,
                    deltaX: e.deltaX / n,
                    deltaY: e.deltaY / n,
                    lastX: t.state.x,
                    lastY: t.state.y
                }
            }, e.getBoundPosition = function(t, e, n) {
                if (!t.props.bounds) return [e, n];
                var s = t.props.bounds;
                s = "string" === typeof s ? s : function(t) {
                    return {
                        left: t.left,
                        top: t.top,
                        right: t.right,
                        bottom: t.bottom
                    }
                }(s);
                var a = i(t);
                if ("string" === typeof s) {
                    var u, l = a.ownerDocument,
                        c = l.defaultView;
                    if (!((u = "parent" === s ? a.parentNode : l.querySelector(s)) instanceof c.HTMLElement)) throw new Error('Bounds selector "' + s + '" could not find an element.');
                    var p = u,
                        d = c.getComputedStyle(a),
                        f = c.getComputedStyle(p);
                    s = {
                        left: -a.offsetLeft + (0, r.int)(f.paddingLeft) + (0, r.int)(d.marginLeft),
                        top: -a.offsetTop + (0, r.int)(f.paddingTop) + (0, r.int)(d.marginTop),
                        right: (0, o.innerWidth)(p) - (0, o.outerWidth)(a) - a.offsetLeft + (0, r.int)(f.paddingRight) - (0, r.int)(d.marginRight),
                        bottom: (0, o.innerHeight)(p) - (0, o.outerHeight)(a) - a.offsetTop + (0, r.int)(f.paddingBottom) - (0, r.int)(d.marginBottom)
                    }
                }(0, r.isNum)(s.right) && (e = Math.min(e, s.right));
                (0, r.isNum)(s.bottom) && (n = Math.min(n, s.bottom));
                (0, r.isNum)(s.left) && (e = Math.max(e, s.left));
                (0, r.isNum)(s.top) && (n = Math.max(n, s.top));
                return [e, n]
            }, e.getControlPosition = function(t, e, n) {
                var r = "number" === typeof e ? (0, o.getTouch)(t, e) : null;
                if ("number" === typeof e && !r) return null;
                var s = i(n),
                    a = n.props.offsetParent || s.offsetParent || s.ownerDocument.body;
                return (0, o.offsetXYFromParent)(r || t, a, n.props.scale)
            }, e.snapToGrid = function(t, e, n) {
                var r = Math.round(e / t[0]) * t[0],
                    o = Math.round(n / t[1]) * t[1];
                return [r, o]
            };
            var r = n(93185),
                o = n(83315);

            function i(t) {
                var e = t.findDOMNode();
                if (!e) throw new Error("<DraggableCore>: Unmounted during event!");
                return e
            }
        },
        93185: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.dontSetMe = function(t, e, n) {
                if (t[e]) return new Error("Invalid prop ".concat(e, " passed to ").concat(n, " - do not set this, set it on the child."))
            }, e.findInArray = function(t, e) {
                for (var n = 0, r = t.length; n < r; n++)
                    if (e.apply(e, [t[n], n, t])) return t[n]
            }, e.int = function(t) {
                return parseInt(t, 10)
            }, e.isFunction = function(t) {
                return "function" === typeof t || "[object Function]" === Object.prototype.toString.call(t)
            }, e.isNum = function(t) {
                return "number" === typeof t && !isNaN(t)
            }
        },
        64912: function(t, e, n) {
            "use strict";
            e.__esModule = !0, e.default = void 0;
            var r = function(t, e) {
                    if (!e && t && t.__esModule) return t;
                    if (null === t || "object" !== typeof t && "function" !== typeof t) return {
                        default: t
                    };
                    var n = u(e);
                    if (n && n.has(t)) return n.get(t);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in t)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(t, i)) {
                            var s = o ? Object.getOwnPropertyDescriptor(t, i) : null;
                            s && (s.get || s.set) ? Object.defineProperty(r, i, s) : r[i] = t[i]
                        }
                    r.default = t, n && n.set(t, r);
                    return r
                }(n(70079)),
                o = n(59349),
                i = n(2367),
                s = n(42455),
                a = ["children", "className", "draggableOpts", "width", "height", "handle", "handleSize", "lockAspectRatio", "axis", "minConstraints", "maxConstraints", "onResize", "onResizeStop", "onResizeStart", "resizeHandles", "transformScale"];

            function u(t) {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap,
                    n = new WeakMap;
                return (u = function(t) {
                    return t ? n : e
                })(t)
            }

            function l() {
                return l = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, l.apply(this, arguments)
            }

            function c(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function p(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(n), !0).forEach((function(e) {
                        d(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function d(t, e, n) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== typeof t || null === t) return t;
                        var n = t[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(t, e || "default");
                            if ("object" !== typeof r) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === typeof e ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function f(t, e) {
                return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, f(t, e)
            }
            var h = function(t) {
                var e, n;

                function s() {
                    for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return (e = t.call.apply(t, [this].concat(r)) || this).handleRefs = {}, e.lastHandleRect = null, e.slack = null, e
                }
                n = t, (e = s).prototype = Object.create(n.prototype), e.prototype.constructor = e, f(e, n);
                var u = s.prototype;
                return u.componentWillUnmount = function() {
                    this.resetData()
                }, u.resetData = function() {
                    this.lastHandleRect = this.slack = null
                }, u.runConstraints = function(t, e) {
                    var n = this.props,
                        r = n.minConstraints,
                        o = n.maxConstraints,
                        i = n.lockAspectRatio;
                    if (!r && !o && !i) return [t, e];
                    if (i) {
                        var s = this.props.width / this.props.height,
                            a = t - this.props.width,
                            u = e - this.props.height;
                        Math.abs(a) > Math.abs(u * s) ? e = t / s : t = e * s
                    }
                    var l = t,
                        c = e,
                        p = this.slack || [0, 0],
                        d = p[0],
                        f = p[1];
                    return t += d, e += f, r && (t = Math.max(r[0], t), e = Math.max(r[1], e)), o && (t = Math.min(o[0], t), e = Math.min(o[1], e)), this.slack = [d + (l - t), f + (c - e)], [t, e]
                }, u.resizeHandler = function(t, e) {
                    var n = this;
                    return function(r, o) {
                        var i = o.node,
                            s = o.deltaX,
                            a = o.deltaY;
                        "onResizeStart" === t && n.resetData();
                        var u = ("both" === n.props.axis || "x" === n.props.axis) && "n" !== e && "s" !== e,
                            l = ("both" === n.props.axis || "y" === n.props.axis) && "e" !== e && "w" !== e;
                        if (u || l) {
                            var c = e[0],
                                p = e[e.length - 1],
                                d = i.getBoundingClientRect();
                            if (null != n.lastHandleRect) {
                                if ("w" === p) s += d.left - n.lastHandleRect.left;
                                if ("n" === c) a += d.top - n.lastHandleRect.top
                            }
                            n.lastHandleRect = d, "w" === p && (s = -s), "n" === c && (a = -a);
                            var f = n.props.width + (u ? s / n.props.transformScale : 0),
                                h = n.props.height + (l ? a / n.props.transformScale : 0),
                                m = n.runConstraints(f, h);
                            f = m[0], h = m[1];
                            var g = f !== n.props.width || h !== n.props.height,
                                y = "function" === typeof n.props[t] ? n.props[t] : null;
                            y && !("onResize" === t && !g) && (null == r.persist || r.persist(), y(r, {
                                node: i,
                                size: {
                                    width: f,
                                    height: h
                                },
                                handle: e
                            })), "onResizeStop" === t && n.resetData()
                        }
                    }
                }, u.renderResizeHandle = function(t, e) {
                    var n = this.props.handle;
                    if (!n) return r.createElement("span", {
                        className: "react-resizable-handle react-resizable-handle-" + t,
                        ref: e
                    });
                    if ("function" === typeof n) return n(t, e);
                    var o = p({
                        ref: e
                    }, "string" === typeof n.type ? {} : {
                        handleAxis: t
                    });
                    return r.cloneElement(n, o)
                }, u.render = function() {
                    var t = this,
                        e = this.props,
                        n = e.children,
                        s = e.className,
                        u = e.draggableOpts,
                        c = (e.width, e.height, e.handle, e.handleSize, e.lockAspectRatio, e.axis, e.minConstraints, e.maxConstraints, e.onResize, e.onResizeStop, e.onResizeStart, e.resizeHandles),
                        d = (e.transformScale, function(t, e) {
                            if (null == t) return {};
                            var n, r, o = {},
                                i = Object.keys(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                            return o
                        }(e, a));
                    return (0, i.cloneElement)(n, p(p({}, d), {}, {
                        className: (s ? s + " " : "") + "react-resizable",
                        children: [].concat(n.props.children, c.map((function(e) {
                            var n, i = null != (n = t.handleRefs[e]) ? n : t.handleRefs[e] = r.createRef();
                            return r.createElement(o.DraggableCore, l({}, u, {
                                nodeRef: i,
                                key: "resizableHandle-" + e,
                                onStop: t.resizeHandler("onResizeStop", e),
                                onStart: t.resizeHandler("onResizeStart", e),
                                onDrag: t.resizeHandler("onResize", e)
                            }), t.renderResizeHandle(e, i))
                        })))
                    }))
                }, s
            }(r.Component);
            e.default = h, h.propTypes = s.resizableProps, h.defaultProps = {
                axis: "both",
                handleSize: [20, 20],
                lockAspectRatio: !1,
                minConstraints: [20, 20],
                maxConstraints: [1 / 0, 1 / 0],
                resizeHandles: ["se"],
                transformScale: 1
            }
        },
        25486: function(t, e, n) {
            "use strict";
            e.default = void 0;
            var r = function(t, e) {
                    if (!e && t && t.__esModule) return t;
                    if (null === t || "object" !== typeof t && "function" !== typeof t) return {
                        default: t
                    };
                    var n = l(e);
                    if (n && n.has(t)) return n.get(t);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in t)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(t, i)) {
                            var s = o ? Object.getOwnPropertyDescriptor(t, i) : null;
                            s && (s.get || s.set) ? Object.defineProperty(r, i, s) : r[i] = t[i]
                        }
                    r.default = t, n && n.set(t, r);
                    return r
                }(n(70079)),
                o = u(n(39519)),
                i = u(n(64912)),
                s = n(42455),
                a = ["handle", "handleSize", "onResize", "onResizeStart", "onResizeStop", "draggableOpts", "minConstraints", "maxConstraints", "lockAspectRatio", "axis", "width", "height", "resizeHandles", "style", "transformScale"];

            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function l(t) {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap,
                    n = new WeakMap;
                return (l = function(t) {
                    return t ? n : e
                })(t)
            }

            function c() {
                return c = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, c.apply(this, arguments)
            }

            function p(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function d(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? p(Object(n), !0).forEach((function(e) {
                        f(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function f(t, e, n) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== typeof t || null === t) return t;
                        var n = t[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(t, e || "default");
                            if ("object" !== typeof r) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === typeof e ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function h(t, e) {
                return h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, h(t, e)
            }
            var m = function(t) {
                var e, n;

                function o() {
                    for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return (e = t.call.apply(t, [this].concat(r)) || this).state = {
                        width: e.props.width,
                        height: e.props.height,
                        propsWidth: e.props.width,
                        propsHeight: e.props.height
                    }, e.onResize = function(t, n) {
                        var r = n.size;
                        e.props.onResize ? (null == t.persist || t.persist(), e.setState(r, (function() {
                            return e.props.onResize && e.props.onResize(t, n)
                        }))) : e.setState(r)
                    }, e
                }
                return n = t, (e = o).prototype = Object.create(n.prototype), e.prototype.constructor = e, h(e, n), o.getDerivedStateFromProps = function(t, e) {
                    return e.propsWidth !== t.width || e.propsHeight !== t.height ? {
                        width: t.width,
                        height: t.height,
                        propsWidth: t.width,
                        propsHeight: t.height
                    } : null
                }, o.prototype.render = function() {
                    var t = this.props,
                        e = t.handle,
                        n = t.handleSize,
                        o = (t.onResize, t.onResizeStart),
                        s = t.onResizeStop,
                        u = t.draggableOpts,
                        l = t.minConstraints,
                        p = t.maxConstraints,
                        f = t.lockAspectRatio,
                        h = t.axis,
                        m = (t.width, t.height, t.resizeHandles),
                        g = t.style,
                        y = t.transformScale,
                        v = function(t, e) {
                            if (null == t) return {};
                            var n, r, o = {},
                                i = Object.keys(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                            return o
                        }(t, a);
                    return r.createElement(i.default, {
                        axis: h,
                        draggableOpts: u,
                        handle: e,
                        handleSize: n,
                        height: this.state.height,
                        lockAspectRatio: f,
                        maxConstraints: p,
                        minConstraints: l,
                        onResizeStart: o,
                        onResize: this.onResize,
                        onResizeStop: s,
                        resizeHandles: m,
                        transformScale: y,
                        width: this.state.width
                    }, r.createElement("div", c({}, v, {
                        style: d(d({}, g), {}, {
                            width: this.state.width + "px",
                            height: this.state.height + "px"
                        })
                    })))
                }, o
            }(r.Component);
            e.default = m, m.propTypes = d(d({}, s.resizableProps), {}, {
                children: o.default.element
            })
        },
        42455: function(t, e, n) {
            "use strict";
            e.__esModule = !0, e.resizableProps = void 0;
            var r, o = (r = n(39519)) && r.__esModule ? r : {
                default: r
            };
            n(59349);
            var i = {
                axis: o.default.oneOf(["both", "x", "y", "none"]),
                className: o.default.string,
                children: o.default.element.isRequired,
                draggableOpts: o.default.shape({
                    allowAnyClick: o.default.bool,
                    cancel: o.default.string,
                    children: o.default.node,
                    disabled: o.default.bool,
                    enableUserSelectHack: o.default.bool,
                    offsetParent: o.default.node,
                    grid: o.default.arrayOf(o.default.number),
                    handle: o.default.string,
                    nodeRef: o.default.object,
                    onStart: o.default.func,
                    onDrag: o.default.func,
                    onStop: o.default.func,
                    onMouseDown: o.default.func,
                    scale: o.default.number
                }),
                height: function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    var r, i = e[0];
                    return "both" === i.axis || "y" === i.axis ? (r = o.default.number).isRequired.apply(r, e) : o.default.number.apply(o.default, e)
                },
                handle: o.default.oneOfType([o.default.node, o.default.func]),
                handleSize: o.default.arrayOf(o.default.number),
                lockAspectRatio: o.default.bool,
                maxConstraints: o.default.arrayOf(o.default.number),
                minConstraints: o.default.arrayOf(o.default.number),
                onResizeStop: o.default.func,
                onResizeStart: o.default.func,
                onResize: o.default.func,
                resizeHandles: o.default.arrayOf(o.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])),
                transformScale: o.default.number,
                width: function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    var r, i = e[0];
                    return "both" === i.axis || "x" === i.axis ? (r = o.default.number).isRequired.apply(r, e) : o.default.number.apply(o.default, e)
                }
            };
            e.resizableProps = i
        },
        2367: function(t, e, n) {
            "use strict";
            e.__esModule = !0, e.cloneElement = function(t, e) {
                e.style && t.props.style && (e.style = s(s({}, t.props.style), e.style));
                e.className && t.props.className && (e.className = t.props.className + " " + e.className);
                return o.default.cloneElement(t, e)
            };
            var r, o = (r = n(70079)) && r.__esModule ? r : {
                default: r
            };

            function i(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? i(Object(n), !0).forEach((function(e) {
                        a(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function a(t, e, n) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== typeof t || null === t) return t;
                        var n = t[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(t, e || "default");
                            if ("object" !== typeof r) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === typeof e ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
        },
        81098: function(t, e, n) {
            "use strict";
            t.exports = function() {
                throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable")
            }, t.exports.Resizable = n(64912).default, t.exports.ResizableBox = n(25486).default
        },
        4697: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return D
                }
            });
            var r = n(95634),
                o = n(52347),
                i = n(70079),
                s = n(30850),
                a = function(t, e) {
                    "function" !== typeof t ? t.current = e : t(e)
                },
                u = function(t, e) {
                    var n = (0, i.useRef)();
                    return (0, i.useCallback)((function(r) {
                        t.current = r, n.current && a(n.current, null), n.current = e, e && a(e, r)
                    }), [e])
                },
                l = {
                    "min-height": "0",
                    "max-height": "none",
                    height: "0",
                    visibility: "hidden",
                    overflow: "hidden",
                    position: "absolute",
                    "z-index": "-1000",
                    top: "0",
                    right: "0"
                },
                c = function(t) {
                    Object.keys(l).forEach((function(e) {
                        t.style.setProperty(e, l[e], "important")
                    }))
                },
                p = null,
                d = function(t, e) {
                    var n = t.scrollHeight;
                    return "border-box" === e.sizingStyle.boxSizing ? n + e.borderSize : n - e.paddingSize
                };
            var f = function() {},
                h = ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontStyle", "fontWeight", "letterSpacing", "lineHeight", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "tabSize", "textIndent", "textRendering", "textTransform", "width", "wordBreak"],
                m = !!document.documentElement.currentStyle,
                g = function(t) {
                    var e = window.getComputedStyle(t);
                    if (null === e) return null;
                    var n, r = (n = e, h.reduce((function(t, e) {
                            return t[e] = n[e], t
                        }), {})),
                        o = r.boxSizing;
                    return "" === o ? null : (m && "border-box" === o && (r.width = parseFloat(r.width) + parseFloat(r.borderRightWidth) + parseFloat(r.borderLeftWidth) + parseFloat(r.paddingRight) + parseFloat(r.paddingLeft) + "px"), {
                        sizingStyle: r,
                        paddingSize: parseFloat(r.paddingBottom) + parseFloat(r.paddingTop),
                        borderSize: parseFloat(r.borderBottomWidth) + parseFloat(r.borderTopWidth)
                    })
                };

            function y(t, e, n) {
                var r = function(t) {
                    var e = i.useRef(t);
                    return (0, s.Z)((function() {
                        e.current = t
                    })), e
                }(n);
                i.useLayoutEffect((function() {
                    var n = function(t) {
                        return r.current(t)
                    };
                    if (t) return t.addEventListener(e, n),
                        function() {
                            return t.removeEventListener(e, n)
                        }
                }), [])
            }
            var v = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"],
                b = function(t, e) {
                    var n = t.cacheMeasurements,
                        s = t.maxRows,
                        a = t.minRows,
                        l = t.onChange,
                        h = void 0 === l ? f : l,
                        m = t.onHeightChange,
                        b = void 0 === m ? f : m,
                        D = (0, o.Z)(t, v),
                        w = void 0 !== D.value,
                        x = i.useRef(null),
                        k = u(x, e),
                        E = i.useRef(0),
                        C = i.useRef(),
                        S = function() {
                            var t = x.current,
                                e = n && C.current ? C.current : g(t);
                            if (e) {
                                C.current = e;
                                var r = function(t, e, n, r) {
                                        void 0 === n && (n = 1), void 0 === r && (r = 1 / 0), p || ((p = document.createElement("textarea")).setAttribute("tabindex", "-1"), p.setAttribute("aria-hidden", "true"), c(p)), null === p.parentNode && document.body.appendChild(p);
                                        var o = t.paddingSize,
                                            i = t.borderSize,
                                            s = t.sizingStyle,
                                            a = s.boxSizing;
                                        Object.keys(s).forEach((function(t) {
                                            var e = t;
                                            p.style[e] = s[e]
                                        })), c(p), p.value = e;
                                        var u = d(p, t);
                                        p.value = e, u = d(p, t), p.value = "x";
                                        var l = p.scrollHeight - o,
                                            f = l * n;
                                        "border-box" === a && (f = f + o + i), u = Math.max(f, u);
                                        var h = l * r;
                                        return "border-box" === a && (h = h + o + i), [u = Math.min(h, u), l]
                                    }(e, t.value || t.placeholder || "x", a, s),
                                    o = r[0],
                                    i = r[1];
                                E.current !== o && (E.current = o, t.style.setProperty("height", o + "px", "important"), b(o, {
                                    rowHeight: i
                                }))
                            }
                        };
                    return i.useLayoutEffect(S), y(window, "resize", S),
                        function(t) {
                            y(document.fonts, "loadingdone", t)
                        }(S), i.createElement("textarea", (0, r.Z)({}, D, {
                            onChange: function(t) {
                                w || S(), h(t)
                            },
                            ref: k
                        }))
                },
                D = i.forwardRef(b)
        },
        91200: function(t, e, n) {
            "use strict";

            function r(t) {
                if (null == t) return window;
                if ("[object Window]" !== t.toString()) {
                    var e = t.ownerDocument;
                    return e && e.defaultView || window
                }
                return t
            }

            function o(t) {
                return t instanceof r(t).Element || t instanceof Element
            }

            function i(t) {
                return t instanceof r(t).HTMLElement || t instanceof HTMLElement
            }

            function s(t) {
                return "undefined" !== typeof ShadowRoot && (t instanceof r(t).ShadowRoot || t instanceof ShadowRoot)
            }
            n.d(e, {
                ZP: function() {
                    return le
                }
            });
            var a = Math.max,
                u = Math.min,
                l = Math.round;

            function c() {
                var t = navigator.userAgentData;
                return null != t && t.brands && Array.isArray(t.brands) ? t.brands.map((function(t) {
                    return t.brand + "/" + t.version
                })).join(" ") : navigator.userAgent
            }

            function p() {
                return !/^((?!chrome|android).)*safari/i.test(c())
            }

            function d(t, e, n) {
                void 0 === e && (e = !1), void 0 === n && (n = !1);
                var s = t.getBoundingClientRect(),
                    a = 1,
                    u = 1;
                e && i(t) && (a = t.offsetWidth > 0 && l(s.width) / t.offsetWidth || 1, u = t.offsetHeight > 0 && l(s.height) / t.offsetHeight || 1);
                var c = (o(t) ? r(t) : window).visualViewport,
                    d = !p() && n,
                    f = (s.left + (d && c ? c.offsetLeft : 0)) / a,
                    h = (s.top + (d && c ? c.offsetTop : 0)) / u,
                    m = s.width / a,
                    g = s.height / u;
                return {
                    width: m,
                    height: g,
                    top: h,
                    right: f + m,
                    bottom: h + g,
                    left: f,
                    x: f,
                    y: h
                }
            }

            function f(t) {
                var e = r(t);
                return {
                    scrollLeft: e.pageXOffset,
                    scrollTop: e.pageYOffset
                }
            }

            function h(t) {
                return t ? (t.nodeName || "").toLowerCase() : null
            }

            function m(t) {
                return ((o(t) ? t.ownerDocument : t.document) || window.document).documentElement
            }

            function g(t) {
                return d(m(t)).left + f(t).scrollLeft
            }

            function y(t) {
                return r(t).getComputedStyle(t)
            }

            function v(t) {
                var e = y(t),
                    n = e.overflow,
                    r = e.overflowX,
                    o = e.overflowY;
                return /auto|scroll|overlay|hidden/.test(n + o + r)
            }

            function b(t, e, n) {
                void 0 === n && (n = !1);
                var o = i(e),
                    s = i(e) && function(t) {
                        var e = t.getBoundingClientRect(),
                            n = l(e.width) / t.offsetWidth || 1,
                            r = l(e.height) / t.offsetHeight || 1;
                        return 1 !== n || 1 !== r
                    }(e),
                    a = m(e),
                    u = d(t, s, n),
                    c = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    p = {
                        x: 0,
                        y: 0
                    };
                return (o || !o && !n) && (("body" !== h(e) || v(a)) && (c = function(t) {
                    return t !== r(t) && i(t) ? {
                        scrollLeft: (e = t).scrollLeft,
                        scrollTop: e.scrollTop
                    } : f(t);
                    var e
                }(e)), i(e) ? ((p = d(e, !0)).x += e.clientLeft, p.y += e.clientTop) : a && (p.x = g(a))), {
                    x: u.left + c.scrollLeft - p.x,
                    y: u.top + c.scrollTop - p.y,
                    width: u.width,
                    height: u.height
                }
            }

            function D(t) {
                var e = d(t),
                    n = t.offsetWidth,
                    r = t.offsetHeight;
                return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), {
                    x: t.offsetLeft,
                    y: t.offsetTop,
                    width: n,
                    height: r
                }
            }

            function w(t) {
                return "html" === h(t) ? t : t.assignedSlot || t.parentNode || (s(t) ? t.host : null) || m(t)
            }

            function x(t) {
                return ["html", "body", "#document"].indexOf(h(t)) >= 0 ? t.ownerDocument.body : i(t) && v(t) ? t : x(w(t))
            }

            function k(t, e) {
                var n;
                void 0 === e && (e = []);
                var o = x(t),
                    i = o === (null == (n = t.ownerDocument) ? void 0 : n.body),
                    s = r(o),
                    a = i ? [s].concat(s.visualViewport || [], v(o) ? o : []) : o,
                    u = e.concat(a);
                return i ? u : u.concat(k(w(a)))
            }

            function E(t) {
                return ["table", "td", "th"].indexOf(h(t)) >= 0
            }

            function C(t) {
                return i(t) && "fixed" !== y(t).position ? t.offsetParent : null
            }

            function S(t) {
                for (var e = r(t), n = C(t); n && E(n) && "static" === y(n).position;) n = C(n);
                return n && ("html" === h(n) || "body" === h(n) && "static" === y(n).position) ? e : n || function(t) {
                    var e = /firefox/i.test(c());
                    if (/Trident/i.test(c()) && i(t) && "fixed" === y(t).position) return null;
                    var n = w(t);
                    for (s(n) && (n = n.host); i(n) && ["html", "body"].indexOf(h(n)) < 0;) {
                        var r = y(n);
                        if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || e && "filter" === r.willChange || e && r.filter && "none" !== r.filter) return n;
                        n = n.parentNode
                    }
                    return null
                }(t) || e
            }
            var A = "top",
                O = "bottom",
                M = "right",
                F = "left",
                T = "auto",
                B = [A, O, M, F],
                j = "start",
                N = "end",
                R = "viewport",
                P = "popper",
                z = B.reduce((function(t, e) {
                    return t.concat([e + "-" + j, e + "-" + N])
                }), []),
                I = [].concat(B, [T]).reduce((function(t, e) {
                    return t.concat([e, e + "-" + j, e + "-" + N])
                }), []),
                $ = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

            function L(t) {
                var e = new Map,
                    n = new Set,
                    r = [];

                function o(t) {
                    n.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach((function(t) {
                        if (!n.has(t)) {
                            var r = e.get(t);
                            r && o(r)
                        }
                    })), r.push(t)
                }
                return t.forEach((function(t) {
                    e.set(t.name, t)
                })), t.forEach((function(t) {
                    n.has(t.name) || o(t)
                })), r
            }

            function H(t) {
                var e;
                return function() {
                    return e || (e = new Promise((function(n) {
                        Promise.resolve().then((function() {
                            e = void 0, n(t())
                        }))
                    }))), e
                }
            }
            var W = {
                placement: "bottom",
                modifiers: [],
                strategy: "absolute"
            };

            function _() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return !e.some((function(t) {
                    return !(t && "function" === typeof t.getBoundingClientRect)
                }))
            }

            function V(t) {
                void 0 === t && (t = {});
                var e = t,
                    n = e.defaultModifiers,
                    r = void 0 === n ? [] : n,
                    i = e.defaultOptions,
                    s = void 0 === i ? W : i;
                return function(t, e, n) {
                    void 0 === n && (n = s);
                    var i = {
                            placement: "bottom",
                            orderedModifiers: [],
                            options: Object.assign({}, W, s),
                            modifiersData: {},
                            elements: {
                                reference: t,
                                popper: e
                            },
                            attributes: {},
                            styles: {}
                        },
                        a = [],
                        u = !1,
                        l = {
                            state: i,
                            setOptions: function(n) {
                                var u = "function" === typeof n ? n(i.options) : n;
                                c(), i.options = Object.assign({}, s, i.options, u), i.scrollParents = {
                                    reference: o(t) ? k(t) : t.contextElement ? k(t.contextElement) : [],
                                    popper: k(e)
                                };
                                var p = function(t) {
                                    var e = L(t);
                                    return $.reduce((function(t, n) {
                                        return t.concat(e.filter((function(t) {
                                            return t.phase === n
                                        })))
                                    }), [])
                                }(function(t) {
                                    var e = t.reduce((function(t, e) {
                                        var n = t[e.name];
                                        return t[e.name] = n ? Object.assign({}, n, e, {
                                            options: Object.assign({}, n.options, e.options),
                                            data: Object.assign({}, n.data, e.data)
                                        }) : e, t
                                    }), {});
                                    return Object.keys(e).map((function(t) {
                                        return e[t]
                                    }))
                                }([].concat(r, i.options.modifiers)));
                                return i.orderedModifiers = p.filter((function(t) {
                                    return t.enabled
                                })), i.orderedModifiers.forEach((function(t) {
                                    var e = t.name,
                                        n = t.options,
                                        r = void 0 === n ? {} : n,
                                        o = t.effect;
                                    if ("function" === typeof o) {
                                        var s = o({
                                                state: i,
                                                name: e,
                                                instance: l,
                                                options: r
                                            }),
                                            u = function() {};
                                        a.push(s || u)
                                    }
                                })), l.update()
                            },
                            forceUpdate: function() {
                                if (!u) {
                                    var t = i.elements,
                                        e = t.reference,
                                        n = t.popper;
                                    if (_(e, n)) {
                                        i.rects = {
                                            reference: b(e, S(n), "fixed" === i.options.strategy),
                                            popper: D(n)
                                        }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach((function(t) {
                                            return i.modifiersData[t.name] = Object.assign({}, t.data)
                                        }));
                                        for (var r = 0; r < i.orderedModifiers.length; r++)
                                            if (!0 !== i.reset) {
                                                var o = i.orderedModifiers[r],
                                                    s = o.fn,
                                                    a = o.options,
                                                    c = void 0 === a ? {} : a,
                                                    p = o.name;
                                                "function" === typeof s && (i = s({
                                                    state: i,
                                                    options: c,
                                                    name: p,
                                                    instance: l
                                                }) || i)
                                            } else i.reset = !1, r = -1
                                    }
                                }
                            },
                            update: H((function() {
                                return new Promise((function(t) {
                                    l.forceUpdate(), t(i)
                                }))
                            })),
                            destroy: function() {
                                c(), u = !0
                            }
                        };
                    if (!_(t, e)) return l;

                    function c() {
                        a.forEach((function(t) {
                            return t()
                        })), a = []
                    }
                    return l.setOptions(n).then((function(t) {
                        !u && n.onFirstUpdate && n.onFirstUpdate(t)
                    })), l
                }
            }
            var q = {
                passive: !0
            };

            function J(t) {
                return t.split("-")[0]
            }

            function Y(t) {
                return t.split("-")[1]
            }

            function U(t) {
                return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
            }

            function K(t) {
                var e, n = t.reference,
                    r = t.element,
                    o = t.placement,
                    i = o ? J(o) : null,
                    s = o ? Y(o) : null,
                    a = n.x + n.width / 2 - r.width / 2,
                    u = n.y + n.height / 2 - r.height / 2;
                switch (i) {
                    case A:
                        e = {
                            x: a,
                            y: n.y - r.height
                        };
                        break;
                    case O:
                        e = {
                            x: a,
                            y: n.y + n.height
                        };
                        break;
                    case M:
                        e = {
                            x: n.x + n.width,
                            y: u
                        };
                        break;
                    case F:
                        e = {
                            x: n.x - r.width,
                            y: u
                        };
                        break;
                    default:
                        e = {
                            x: n.x,
                            y: n.y
                        }
                }
                var l = i ? U(i) : null;
                if (null != l) {
                    var c = "y" === l ? "height" : "width";
                    switch (s) {
                        case j:
                            e[l] = e[l] - (n[c] / 2 - r[c] / 2);
                            break;
                        case N:
                            e[l] = e[l] + (n[c] / 2 - r[c] / 2)
                    }
                }
                return e
            }
            var G = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto"
            };

            function X(t) {
                var e, n = t.popper,
                    o = t.popperRect,
                    i = t.placement,
                    s = t.variation,
                    a = t.offsets,
                    u = t.position,
                    c = t.gpuAcceleration,
                    p = t.adaptive,
                    d = t.roundOffsets,
                    f = t.isFixed,
                    h = a.x,
                    g = void 0 === h ? 0 : h,
                    v = a.y,
                    b = void 0 === v ? 0 : v,
                    D = "function" === typeof d ? d({
                        x: g,
                        y: b
                    }) : {
                        x: g,
                        y: b
                    };
                g = D.x, b = D.y;
                var w = a.hasOwnProperty("x"),
                    x = a.hasOwnProperty("y"),
                    k = F,
                    E = A,
                    C = window;
                if (p) {
                    var T = S(n),
                        B = "clientHeight",
                        j = "clientWidth";
                    if (T === r(n) && "static" !== y(T = m(n)).position && "absolute" === u && (B = "scrollHeight", j = "scrollWidth"), i === A || (i === F || i === M) && s === N) E = O, b -= (f && T === C && C.visualViewport ? C.visualViewport.height : T[B]) - o.height, b *= c ? 1 : -1;
                    if (i === F || (i === A || i === O) && s === N) k = M, g -= (f && T === C && C.visualViewport ? C.visualViewport.width : T[j]) - o.width, g *= c ? 1 : -1
                }
                var R, P = Object.assign({
                        position: u
                    }, p && G),
                    z = !0 === d ? function(t, e) {
                        var n = t.x,
                            r = t.y,
                            o = e.devicePixelRatio || 1;
                        return {
                            x: l(n * o) / o || 0,
                            y: l(r * o) / o || 0
                        }
                    }({
                        x: g,
                        y: b
                    }, r(n)) : {
                        x: g,
                        y: b
                    };
                return g = z.x, b = z.y, c ? Object.assign({}, P, ((R = {})[E] = x ? "0" : "", R[k] = w ? "0" : "", R.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + b + "px)" : "translate3d(" + g + "px, " + b + "px, 0)", R)) : Object.assign({}, P, ((e = {})[E] = x ? b + "px" : "", e[k] = w ? g + "px" : "", e.transform = "", e))
            }
            var Z = {
                name: "applyStyles",
                enabled: !0,
                phase: "write",
                fn: function(t) {
                    var e = t.state;
                    Object.keys(e.elements).forEach((function(t) {
                        var n = e.styles[t] || {},
                            r = e.attributes[t] || {},
                            o = e.elements[t];
                        i(o) && h(o) && (Object.assign(o.style, n), Object.keys(r).forEach((function(t) {
                            var e = r[t];
                            !1 === e ? o.removeAttribute(t) : o.setAttribute(t, !0 === e ? "" : e)
                        })))
                    }))
                },
                effect: function(t) {
                    var e = t.state,
                        n = {
                            popper: {
                                position: e.options.strategy,
                                left: "0",
                                top: "0",
                                margin: "0"
                            },
                            arrow: {
                                position: "absolute"
                            },
                            reference: {}
                        };
                    return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
                        function() {
                            Object.keys(e.elements).forEach((function(t) {
                                var r = e.elements[t],
                                    o = e.attributes[t] || {},
                                    s = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]).reduce((function(t, e) {
                                        return t[e] = "", t
                                    }), {});
                                i(r) && h(r) && (Object.assign(r.style, s), Object.keys(o).forEach((function(t) {
                                    r.removeAttribute(t)
                                })))
                            }))
                        }
                },
                requires: ["computeStyles"]
            };
            var Q = {
                    name: "offset",
                    enabled: !0,
                    phase: "main",
                    requires: ["popperOffsets"],
                    fn: function(t) {
                        var e = t.state,
                            n = t.options,
                            r = t.name,
                            o = n.offset,
                            i = void 0 === o ? [0, 0] : o,
                            s = I.reduce((function(t, n) {
                                return t[n] = function(t, e, n) {
                                    var r = J(t),
                                        o = [F, A].indexOf(r) >= 0 ? -1 : 1,
                                        i = "function" === typeof n ? n(Object.assign({}, e, {
                                            placement: t
                                        })) : n,
                                        s = i[0],
                                        a = i[1];
                                    return s = s || 0, a = (a || 0) * o, [F, M].indexOf(r) >= 0 ? {
                                        x: a,
                                        y: s
                                    } : {
                                        x: s,
                                        y: a
                                    }
                                }(n, e.rects, i), t
                            }), {}),
                            a = s[e.placement],
                            u = a.x,
                            l = a.y;
                        null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += u, e.modifiersData.popperOffsets.y += l), e.modifiersData[r] = s
                    }
                },
                tt = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };

            function et(t) {
                return t.replace(/left|right|bottom|top/g, (function(t) {
                    return tt[t]
                }))
            }
            var nt = {
                start: "end",
                end: "start"
            };

            function rt(t) {
                return t.replace(/start|end/g, (function(t) {
                    return nt[t]
                }))
            }

            function ot(t, e) {
                var n = e.getRootNode && e.getRootNode();
                if (t.contains(e)) return !0;
                if (n && s(n)) {
                    var r = e;
                    do {
                        if (r && t.isSameNode(r)) return !0;
                        r = r.parentNode || r.host
                    } while (r)
                }
                return !1
            }

            function it(t) {
                return Object.assign({}, t, {
                    left: t.x,
                    top: t.y,
                    right: t.x + t.width,
                    bottom: t.y + t.height
                })
            }

            function st(t, e, n) {
                return e === R ? it(function(t, e) {
                    var n = r(t),
                        o = m(t),
                        i = n.visualViewport,
                        s = o.clientWidth,
                        a = o.clientHeight,
                        u = 0,
                        l = 0;
                    if (i) {
                        s = i.width, a = i.height;
                        var c = p();
                        (c || !c && "fixed" === e) && (u = i.offsetLeft, l = i.offsetTop)
                    }
                    return {
                        width: s,
                        height: a,
                        x: u + g(t),
                        y: l
                    }
                }(t, n)) : o(e) ? function(t, e) {
                    var n = d(t, !1, "fixed" === e);
                    return n.top = n.top + t.clientTop, n.left = n.left + t.clientLeft, n.bottom = n.top + t.clientHeight, n.right = n.left + t.clientWidth, n.width = t.clientWidth, n.height = t.clientHeight, n.x = n.left, n.y = n.top, n
                }(e, n) : it(function(t) {
                    var e, n = m(t),
                        r = f(t),
                        o = null == (e = t.ownerDocument) ? void 0 : e.body,
                        i = a(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
                        s = a(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
                        u = -r.scrollLeft + g(t),
                        l = -r.scrollTop;
                    return "rtl" === y(o || n).direction && (u += a(n.clientWidth, o ? o.clientWidth : 0) - i), {
                        width: i,
                        height: s,
                        x: u,
                        y: l
                    }
                }(m(t)))
            }

            function at(t, e, n, r) {
                var s = "clippingParents" === e ? function(t) {
                        var e = k(w(t)),
                            n = ["absolute", "fixed"].indexOf(y(t).position) >= 0 && i(t) ? S(t) : t;
                        return o(n) ? e.filter((function(t) {
                            return o(t) && ot(t, n) && "body" !== h(t)
                        })) : []
                    }(t) : [].concat(e),
                    l = [].concat(s, [n]),
                    c = l[0],
                    p = l.reduce((function(e, n) {
                        var o = st(t, n, r);
                        return e.top = a(o.top, e.top), e.right = u(o.right, e.right), e.bottom = u(o.bottom, e.bottom), e.left = a(o.left, e.left), e
                    }), st(t, c, r));
                return p.width = p.right - p.left, p.height = p.bottom - p.top, p.x = p.left, p.y = p.top, p
            }

            function ut(t) {
                return Object.assign({}, {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }, t)
            }

            function lt(t, e) {
                return e.reduce((function(e, n) {
                    return e[n] = t, e
                }), {})
            }

            function ct(t, e) {
                void 0 === e && (e = {});
                var n = e,
                    r = n.placement,
                    i = void 0 === r ? t.placement : r,
                    s = n.strategy,
                    a = void 0 === s ? t.strategy : s,
                    u = n.boundary,
                    l = void 0 === u ? "clippingParents" : u,
                    c = n.rootBoundary,
                    p = void 0 === c ? R : c,
                    f = n.elementContext,
                    h = void 0 === f ? P : f,
                    g = n.altBoundary,
                    y = void 0 !== g && g,
                    v = n.padding,
                    b = void 0 === v ? 0 : v,
                    D = ut("number" !== typeof b ? b : lt(b, B)),
                    w = h === P ? "reference" : P,
                    x = t.rects.popper,
                    k = t.elements[y ? w : h],
                    E = at(o(k) ? k : k.contextElement || m(t.elements.popper), l, p, a),
                    C = d(t.elements.reference),
                    S = K({
                        reference: C,
                        element: x,
                        strategy: "absolute",
                        placement: i
                    }),
                    F = it(Object.assign({}, x, S)),
                    T = h === P ? F : C,
                    j = {
                        top: E.top - T.top + D.top,
                        bottom: T.bottom - E.bottom + D.bottom,
                        left: E.left - T.left + D.left,
                        right: T.right - E.right + D.right
                    },
                    N = t.modifiersData.offset;
                if (h === P && N) {
                    var z = N[i];
                    Object.keys(j).forEach((function(t) {
                        var e = [M, O].indexOf(t) >= 0 ? 1 : -1,
                            n = [A, O].indexOf(t) >= 0 ? "y" : "x";
                        j[t] += z[n] * e
                    }))
                }
                return j
            }

            function pt(t, e, n) {
                return a(t, u(e, n))
            }
            var dt = {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function(t) {
                    var e = t.state,
                        n = t.options,
                        r = t.name,
                        o = n.mainAxis,
                        i = void 0 === o || o,
                        s = n.altAxis,
                        l = void 0 !== s && s,
                        c = n.boundary,
                        p = n.rootBoundary,
                        d = n.altBoundary,
                        f = n.padding,
                        h = n.tether,
                        m = void 0 === h || h,
                        g = n.tetherOffset,
                        y = void 0 === g ? 0 : g,
                        v = ct(e, {
                            boundary: c,
                            rootBoundary: p,
                            padding: f,
                            altBoundary: d
                        }),
                        b = J(e.placement),
                        w = Y(e.placement),
                        x = !w,
                        k = U(b),
                        E = "x" === k ? "y" : "x",
                        C = e.modifiersData.popperOffsets,
                        T = e.rects.reference,
                        B = e.rects.popper,
                        N = "function" === typeof y ? y(Object.assign({}, e.rects, {
                            placement: e.placement
                        })) : y,
                        R = "number" === typeof N ? {
                            mainAxis: N,
                            altAxis: N
                        } : Object.assign({
                            mainAxis: 0,
                            altAxis: 0
                        }, N),
                        P = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
                        z = {
                            x: 0,
                            y: 0
                        };
                    if (C) {
                        if (i) {
                            var I, $ = "y" === k ? A : F,
                                L = "y" === k ? O : M,
                                H = "y" === k ? "height" : "width",
                                W = C[k],
                                _ = W + v[$],
                                V = W - v[L],
                                q = m ? -B[H] / 2 : 0,
                                K = w === j ? T[H] : B[H],
                                G = w === j ? -B[H] : -T[H],
                                X = e.elements.arrow,
                                Z = m && X ? D(X) : {
                                    width: 0,
                                    height: 0
                                },
                                Q = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0
                                },
                                tt = Q[$],
                                et = Q[L],
                                nt = pt(0, T[H], Z[H]),
                                rt = x ? T[H] / 2 - q - nt - tt - R.mainAxis : K - nt - tt - R.mainAxis,
                                ot = x ? -T[H] / 2 + q + nt + et + R.mainAxis : G + nt + et + R.mainAxis,
                                it = e.elements.arrow && S(e.elements.arrow),
                                st = it ? "y" === k ? it.clientTop || 0 : it.clientLeft || 0 : 0,
                                at = null != (I = null == P ? void 0 : P[k]) ? I : 0,
                                ut = W + ot - at,
                                lt = pt(m ? u(_, W + rt - at - st) : _, W, m ? a(V, ut) : V);
                            C[k] = lt, z[k] = lt - W
                        }
                        if (l) {
                            var dt, ft = "x" === k ? A : F,
                                ht = "x" === k ? O : M,
                                mt = C[E],
                                gt = "y" === E ? "height" : "width",
                                yt = mt + v[ft],
                                vt = mt - v[ht],
                                bt = -1 !== [A, F].indexOf(b),
                                Dt = null != (dt = null == P ? void 0 : P[E]) ? dt : 0,
                                wt = bt ? yt : mt - T[gt] - B[gt] - Dt + R.altAxis,
                                xt = bt ? mt + T[gt] + B[gt] - Dt - R.altAxis : vt,
                                kt = m && bt ? function(t, e, n) {
                                    var r = pt(t, e, n);
                                    return r > n ? n : r
                                }(wt, mt, xt) : pt(m ? wt : yt, mt, m ? xt : vt);
                            C[E] = kt, z[E] = kt - mt
                        }
                        e.modifiersData[r] = z
                    }
                },
                requiresIfExists: ["offset"]
            };
            var ft = {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function(t) {
                    var e, n = t.state,
                        r = t.name,
                        o = t.options,
                        i = n.elements.arrow,
                        s = n.modifiersData.popperOffsets,
                        a = J(n.placement),
                        u = U(a),
                        l = [F, M].indexOf(a) >= 0 ? "height" : "width";
                    if (i && s) {
                        var c = function(t, e) {
                                return ut("number" !== typeof(t = "function" === typeof t ? t(Object.assign({}, e.rects, {
                                    placement: e.placement
                                })) : t) ? t : lt(t, B))
                            }(o.padding, n),
                            p = D(i),
                            d = "y" === u ? A : F,
                            f = "y" === u ? O : M,
                            h = n.rects.reference[l] + n.rects.reference[u] - s[u] - n.rects.popper[l],
                            m = s[u] - n.rects.reference[u],
                            g = S(i),
                            y = g ? "y" === u ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
                            v = h / 2 - m / 2,
                            b = c[d],
                            w = y - p[l] - c[f],
                            x = y / 2 - p[l] / 2 + v,
                            k = pt(b, x, w),
                            E = u;
                        n.modifiersData[r] = ((e = {})[E] = k, e.centerOffset = k - x, e)
                    }
                },
                effect: function(t) {
                    var e = t.state,
                        n = t.options.element,
                        r = void 0 === n ? "[data-popper-arrow]" : n;
                    null != r && ("string" !== typeof r || (r = e.elements.popper.querySelector(r))) && ot(e.elements.popper, r) && (e.elements.arrow = r)
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"]
            };

            function ht(t, e, n) {
                return void 0 === n && (n = {
                    x: 0,
                    y: 0
                }), {
                    top: t.top - e.height - n.y,
                    right: t.right - e.width + n.x,
                    bottom: t.bottom - e.height + n.y,
                    left: t.left - e.width - n.x
                }
            }

            function mt(t) {
                return [A, M, O, F].some((function(e) {
                    return t[e] >= 0
                }))
            }
            var gt = V({
                    defaultModifiers: [{
                        name: "eventListeners",
                        enabled: !0,
                        phase: "write",
                        fn: function() {},
                        effect: function(t) {
                            var e = t.state,
                                n = t.instance,
                                o = t.options,
                                i = o.scroll,
                                s = void 0 === i || i,
                                a = o.resize,
                                u = void 0 === a || a,
                                l = r(e.elements.popper),
                                c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
                            return s && c.forEach((function(t) {
                                    t.addEventListener("scroll", n.update, q)
                                })), u && l.addEventListener("resize", n.update, q),
                                function() {
                                    s && c.forEach((function(t) {
                                        t.removeEventListener("scroll", n.update, q)
                                    })), u && l.removeEventListener("resize", n.update, q)
                                }
                        },
                        data: {}
                    }, {
                        name: "popperOffsets",
                        enabled: !0,
                        phase: "read",
                        fn: function(t) {
                            var e = t.state,
                                n = t.name;
                            e.modifiersData[n] = K({
                                reference: e.rects.reference,
                                element: e.rects.popper,
                                strategy: "absolute",
                                placement: e.placement
                            })
                        },
                        data: {}
                    }, {
                        name: "computeStyles",
                        enabled: !0,
                        phase: "beforeWrite",
                        fn: function(t) {
                            var e = t.state,
                                n = t.options,
                                r = n.gpuAcceleration,
                                o = void 0 === r || r,
                                i = n.adaptive,
                                s = void 0 === i || i,
                                a = n.roundOffsets,
                                u = void 0 === a || a,
                                l = {
                                    placement: J(e.placement),
                                    variation: Y(e.placement),
                                    popper: e.elements.popper,
                                    popperRect: e.rects.popper,
                                    gpuAcceleration: o,
                                    isFixed: "fixed" === e.options.strategy
                                };
                            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, X(Object.assign({}, l, {
                                offsets: e.modifiersData.popperOffsets,
                                position: e.options.strategy,
                                adaptive: s,
                                roundOffsets: u
                            })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, X(Object.assign({}, l, {
                                offsets: e.modifiersData.arrow,
                                position: "absolute",
                                adaptive: !1,
                                roundOffsets: u
                            })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
                                "data-popper-placement": e.placement
                            })
                        },
                        data: {}
                    }, Z, Q, {
                        name: "flip",
                        enabled: !0,
                        phase: "main",
                        fn: function(t) {
                            var e = t.state,
                                n = t.options,
                                r = t.name;
                            if (!e.modifiersData[r]._skip) {
                                for (var o = n.mainAxis, i = void 0 === o || o, s = n.altAxis, a = void 0 === s || s, u = n.fallbackPlacements, l = n.padding, c = n.boundary, p = n.rootBoundary, d = n.altBoundary, f = n.flipVariations, h = void 0 === f || f, m = n.allowedAutoPlacements, g = e.options.placement, y = J(g), v = u || (y === g || !h ? [et(g)] : function(t) {
                                        if (J(t) === T) return [];
                                        var e = et(t);
                                        return [rt(t), e, rt(e)]
                                    }(g)), b = [g].concat(v).reduce((function(t, n) {
                                        return t.concat(J(n) === T ? function(t, e) {
                                            void 0 === e && (e = {});
                                            var n = e,
                                                r = n.placement,
                                                o = n.boundary,
                                                i = n.rootBoundary,
                                                s = n.padding,
                                                a = n.flipVariations,
                                                u = n.allowedAutoPlacements,
                                                l = void 0 === u ? I : u,
                                                c = Y(r),
                                                p = c ? a ? z : z.filter((function(t) {
                                                    return Y(t) === c
                                                })) : B,
                                                d = p.filter((function(t) {
                                                    return l.indexOf(t) >= 0
                                                }));
                                            0 === d.length && (d = p);
                                            var f = d.reduce((function(e, n) {
                                                return e[n] = ct(t, {
                                                    placement: n,
                                                    boundary: o,
                                                    rootBoundary: i,
                                                    padding: s
                                                })[J(n)], e
                                            }), {});
                                            return Object.keys(f).sort((function(t, e) {
                                                return f[t] - f[e]
                                            }))
                                        }(e, {
                                            placement: n,
                                            boundary: c,
                                            rootBoundary: p,
                                            padding: l,
                                            flipVariations: h,
                                            allowedAutoPlacements: m
                                        }) : n)
                                    }), []), D = e.rects.reference, w = e.rects.popper, x = new Map, k = !0, E = b[0], C = 0; C < b.length; C++) {
                                    var S = b[C],
                                        N = J(S),
                                        R = Y(S) === j,
                                        P = [A, O].indexOf(N) >= 0,
                                        $ = P ? "width" : "height",
                                        L = ct(e, {
                                            placement: S,
                                            boundary: c,
                                            rootBoundary: p,
                                            altBoundary: d,
                                            padding: l
                                        }),
                                        H = P ? R ? M : F : R ? O : A;
                                    D[$] > w[$] && (H = et(H));
                                    var W = et(H),
                                        _ = [];
                                    if (i && _.push(L[N] <= 0), a && _.push(L[H] <= 0, L[W] <= 0), _.every((function(t) {
                                            return t
                                        }))) {
                                        E = S, k = !1;
                                        break
                                    }
                                    x.set(S, _)
                                }
                                if (k)
                                    for (var V = function(t) {
                                            var e = b.find((function(e) {
                                                var n = x.get(e);
                                                if (n) return n.slice(0, t).every((function(t) {
                                                    return t
                                                }))
                                            }));
                                            if (e) return E = e, "break"
                                        }, q = h ? 3 : 1; q > 0; q--) {
                                        if ("break" === V(q)) break
                                    }
                                e.placement !== E && (e.modifiersData[r]._skip = !0, e.placement = E, e.reset = !0)
                            }
                        },
                        requiresIfExists: ["offset"],
                        data: {
                            _skip: !1
                        }
                    }, dt, ft, {
                        name: "hide",
                        enabled: !0,
                        phase: "main",
                        requiresIfExists: ["preventOverflow"],
                        fn: function(t) {
                            var e = t.state,
                                n = t.name,
                                r = e.rects.reference,
                                o = e.rects.popper,
                                i = e.modifiersData.preventOverflow,
                                s = ct(e, {
                                    elementContext: "reference"
                                }),
                                a = ct(e, {
                                    altBoundary: !0
                                }),
                                u = ht(s, r),
                                l = ht(a, o, i),
                                c = mt(u),
                                p = mt(l);
                            e.modifiersData[n] = {
                                referenceClippingOffsets: u,
                                popperEscapeOffsets: l,
                                isReferenceHidden: c,
                                hasPopperEscaped: p
                            }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                                "data-popper-reference-hidden": c,
                                "data-popper-escaped": p
                            })
                        }
                    }]
                }),
                yt = "tippy-content",
                vt = "tippy-backdrop",
                bt = "tippy-arrow",
                Dt = "tippy-svg-arrow",
                wt = {
                    passive: !0,
                    capture: !0
                },
                xt = function() {
                    return document.body
                };

            function kt(t, e, n) {
                if (Array.isArray(t)) {
                    var r = t[e];
                    return null == r ? Array.isArray(n) ? n[e] : n : r
                }
                return t
            }

            function Et(t, e) {
                var n = {}.toString.call(t);
                return 0 === n.indexOf("[object") && n.indexOf(e + "]") > -1
            }

            function Ct(t, e) {
                return "function" === typeof t ? t.apply(void 0, e) : t
            }

            function St(t, e) {
                return 0 === e ? t : function(r) {
                    clearTimeout(n), n = setTimeout((function() {
                        t(r)
                    }), e)
                };
                var n
            }

            function At(t) {
                return [].concat(t)
            }

            function Ot(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function Mt(t) {
                return t.split("-")[0]
            }

            function Ft(t) {
                return [].slice.call(t)
            }

            function Tt(t) {
                return Object.keys(t).reduce((function(e, n) {
                    return void 0 !== t[n] && (e[n] = t[n]), e
                }), {})
            }

            function Bt() {
                return document.createElement("div")
            }

            function jt(t) {
                return ["Element", "Fragment"].some((function(e) {
                    return Et(t, e)
                }))
            }

            function Nt(t) {
                return Et(t, "MouseEvent")
            }

            function Rt(t) {
                return !(!t || !t._tippy || t._tippy.reference !== t)
            }

            function Pt(t) {
                return jt(t) ? [t] : function(t) {
                    return Et(t, "NodeList")
                }(t) ? Ft(t) : Array.isArray(t) ? t : Ft(document.querySelectorAll(t))
            }

            function zt(t, e) {
                t.forEach((function(t) {
                    t && (t.style.transitionDuration = e + "ms")
                }))
            }

            function It(t, e) {
                t.forEach((function(t) {
                    t && t.setAttribute("data-state", e)
                }))
            }

            function $t(t) {
                var e, n = At(t)[0];
                return null != n && null != (e = n.ownerDocument) && e.body ? n.ownerDocument : document
            }

            function Lt(t, e, n) {
                var r = e + "EventListener";
                ["transitionend", "webkitTransitionEnd"].forEach((function(e) {
                    t[r](e, n)
                }))
            }

            function Ht(t, e) {
                for (var n = e; n;) {
                    var r;
                    if (t.contains(n)) return !0;
                    n = null == n.getRootNode || null == (r = n.getRootNode()) ? void 0 : r.host
                }
                return !1
            }
            var Wt = {
                    isTouch: !1
                },
                _t = 0;

            function Vt() {
                Wt.isTouch || (Wt.isTouch = !0, window.performance && document.addEventListener("mousemove", qt))
            }

            function qt() {
                var t = performance.now();
                t - _t < 20 && (Wt.isTouch = !1, document.removeEventListener("mousemove", qt)), _t = t
            }

            function Jt() {
                var t = document.activeElement;
                if (Rt(t)) {
                    var e = t._tippy;
                    t.blur && !e.state.isVisible && t.blur()
                }
            }
            var Yt = !!("undefined" !== typeof window && "undefined" !== typeof document) && !!window.msCrypto;
            var Ut = {
                    animateFill: !1,
                    followCursor: !1,
                    inlinePositioning: !1,
                    sticky: !1
                },
                Kt = Object.assign({
                    appendTo: xt,
                    aria: {
                        content: "auto",
                        expanded: "auto"
                    },
                    delay: 0,
                    duration: [300, 250],
                    getReferenceClientRect: null,
                    hideOnClick: !0,
                    ignoreAttributes: !1,
                    interactive: !1,
                    interactiveBorder: 2,
                    interactiveDebounce: 0,
                    moveTransition: "",
                    offset: [0, 10],
                    onAfterUpdate: function() {},
                    onBeforeUpdate: function() {},
                    onCreate: function() {},
                    onDestroy: function() {},
                    onHidden: function() {},
                    onHide: function() {},
                    onMount: function() {},
                    onShow: function() {},
                    onShown: function() {},
                    onTrigger: function() {},
                    onUntrigger: function() {},
                    onClickOutside: function() {},
                    placement: "top",
                    plugins: [],
                    popperOptions: {},
                    render: null,
                    showOnCreate: !1,
                    touch: !0,
                    trigger: "mouseenter focus",
                    triggerTarget: null
                }, Ut, {
                    allowHTML: !1,
                    animation: "fade",
                    arrow: !0,
                    content: "",
                    inertia: !1,
                    maxWidth: 350,
                    role: "tooltip",
                    theme: "",
                    zIndex: 9999
                }),
                Gt = Object.keys(Kt);

            function Xt(t) {
                var e = (t.plugins || []).reduce((function(e, n) {
                    var r, o = n.name,
                        i = n.defaultValue;
                    o && (e[o] = void 0 !== t[o] ? t[o] : null != (r = Kt[o]) ? r : i);
                    return e
                }), {});
                return Object.assign({}, t, e)
            }

            function Zt(t, e) {
                var n = Object.assign({}, e, {
                    content: Ct(e.content, [t])
                }, e.ignoreAttributes ? {} : function(t, e) {
                    return (e ? Object.keys(Xt(Object.assign({}, Kt, {
                        plugins: e
                    }))) : Gt).reduce((function(e, n) {
                        var r = (t.getAttribute("data-tippy-" + n) || "").trim();
                        if (!r) return e;
                        if ("content" === n) e[n] = r;
                        else try {
                            e[n] = JSON.parse(r)
                        } catch (o) {
                            e[n] = r
                        }
                        return e
                    }), {})
                }(t, e.plugins));
                return n.aria = Object.assign({}, Kt.aria, n.aria), n.aria = {
                    expanded: "auto" === n.aria.expanded ? e.interactive : n.aria.expanded,
                    content: "auto" === n.aria.content ? e.interactive ? null : "describedby" : n.aria.content
                }, n
            }

            function Qt(t, e) {
                t.innerHTML = e
            }

            function te(t) {
                var e = Bt();
                return !0 === t ? e.className = bt : (e.className = Dt, jt(t) ? e.appendChild(t) : Qt(e, t)), e
            }

            function ee(t, e) {
                jt(e.content) ? (Qt(t, ""), t.appendChild(e.content)) : "function" !== typeof e.content && (e.allowHTML ? Qt(t, e.content) : t.textContent = e.content)
            }

            function ne(t) {
                var e = t.firstElementChild,
                    n = Ft(e.children);
                return {
                    box: e,
                    content: n.find((function(t) {
                        return t.classList.contains(yt)
                    })),
                    arrow: n.find((function(t) {
                        return t.classList.contains(bt) || t.classList.contains(Dt)
                    })),
                    backdrop: n.find((function(t) {
                        return t.classList.contains(vt)
                    }))
                }
            }

            function re(t) {
                var e = Bt(),
                    n = Bt();
                n.className = "tippy-box", n.setAttribute("data-state", "hidden"), n.setAttribute("tabindex", "-1");
                var r = Bt();

                function o(n, r) {
                    var o = ne(e),
                        i = o.box,
                        s = o.content,
                        a = o.arrow;
                    r.theme ? i.setAttribute("data-theme", r.theme) : i.removeAttribute("data-theme"), "string" === typeof r.animation ? i.setAttribute("data-animation", r.animation) : i.removeAttribute("data-animation"), r.inertia ? i.setAttribute("data-inertia", "") : i.removeAttribute("data-inertia"), i.style.maxWidth = "number" === typeof r.maxWidth ? r.maxWidth + "px" : r.maxWidth, r.role ? i.setAttribute("role", r.role) : i.removeAttribute("role"), n.content === r.content && n.allowHTML === r.allowHTML || ee(s, t.props), r.arrow ? a ? n.arrow !== r.arrow && (i.removeChild(a), i.appendChild(te(r.arrow))) : i.appendChild(te(r.arrow)) : a && i.removeChild(a)
                }
                return r.className = yt, r.setAttribute("data-state", "hidden"), ee(r, t.props), e.appendChild(n), n.appendChild(r), o(t.props, t.props), {
                    popper: e,
                    onUpdate: o
                }
            }
            re.$$tippy = !0;
            var oe = 1,
                ie = [],
                se = [];

            function ae(t, e) {
                var n, r, o, i, s, a, u, l, c = Zt(t, Object.assign({}, Kt, Xt(Tt(e)))),
                    p = !1,
                    d = !1,
                    f = !1,
                    h = !1,
                    m = [],
                    g = St(Y, c.interactiveDebounce),
                    y = oe++,
                    v = (l = c.plugins).filter((function(t, e) {
                        return l.indexOf(t) === e
                    })),
                    b = {
                        id: y,
                        reference: t,
                        popper: Bt(),
                        popperInstance: null,
                        props: c,
                        state: {
                            isEnabled: !0,
                            isVisible: !1,
                            isDestroyed: !1,
                            isMounted: !1,
                            isShown: !1
                        },
                        plugins: v,
                        clearDelayTimeouts: function() {
                            clearTimeout(n), clearTimeout(r), cancelAnimationFrame(o)
                        },
                        setProps: function(e) {
                            0;
                            if (b.state.isDestroyed) return;
                            j("onBeforeUpdate", [b, e]), q();
                            var n = b.props,
                                r = Zt(t, Object.assign({}, n, Tt(e), {
                                    ignoreAttributes: !0
                                }));
                            b.props = r, V(), n.interactiveDebounce !== r.interactiveDebounce && (P(), g = St(Y, r.interactiveDebounce));
                            n.triggerTarget && !r.triggerTarget ? At(n.triggerTarget).forEach((function(t) {
                                t.removeAttribute("aria-expanded")
                            })) : r.triggerTarget && t.removeAttribute("aria-expanded");
                            R(), B(), x && x(n, r);
                            b.popperInstance && (X(), Q().forEach((function(t) {
                                requestAnimationFrame(t._tippy.popperInstance.forceUpdate)
                            })));
                            j("onAfterUpdate", [b, e])
                        },
                        setContent: function(t) {
                            b.setProps({
                                content: t
                            })
                        },
                        show: function() {
                            0;
                            var t = b.state.isVisible,
                                e = b.state.isDestroyed,
                                n = !b.state.isEnabled,
                                r = Wt.isTouch && !b.props.touch,
                                o = kt(b.props.duration, 0, Kt.duration);
                            if (t || e || n || r) return;
                            if (O().hasAttribute("disabled")) return;
                            if (j("onShow", [b], !1), !1 === b.props.onShow(b)) return;
                            b.state.isVisible = !0, A() && (w.style.visibility = "visible");
                            B(), L(), b.state.isMounted || (w.style.transition = "none");
                            if (A()) {
                                var i = F(),
                                    s = i.box,
                                    u = i.content;
                                zt([s, u], 0)
                            }
                            a = function() {
                                    var t;
                                    if (b.state.isVisible && !h) {
                                        if (h = !0, w.offsetHeight, w.style.transition = b.props.moveTransition, A() && b.props.animation) {
                                            var e = F(),
                                                n = e.box,
                                                r = e.content;
                                            zt([n, r], o), It([n, r], "visible")
                                        }
                                        N(), R(), Ot(se, b), null == (t = b.popperInstance) || t.forceUpdate(), j("onMount", [b]), b.props.animation && A() && function(t, e) {
                                            W(t, e)
                                        }(o, (function() {
                                            b.state.isShown = !0, j("onShown", [b])
                                        }))
                                    }
                                },
                                function() {
                                    var t, e = b.props.appendTo,
                                        n = O();
                                    t = b.props.interactive && e === xt || "parent" === e ? n.parentNode : Ct(e, [n]);
                                    t.contains(w) || t.appendChild(w);
                                    b.state.isMounted = !0, X(), !1
                                }()
                        },
                        hide: function() {
                            0;
                            var t = !b.state.isVisible,
                                e = b.state.isDestroyed,
                                n = !b.state.isEnabled,
                                r = kt(b.props.duration, 1, Kt.duration);
                            if (t || e || n) return;
                            if (j("onHide", [b], !1), !1 === b.props.onHide(b)) return;
                            b.state.isVisible = !1, b.state.isShown = !1, h = !1, p = !1, A() && (w.style.visibility = "hidden");
                            if (P(), H(), B(!0), A()) {
                                var o = F(),
                                    i = o.box,
                                    s = o.content;
                                b.props.animation && (zt([i, s], r), It([i, s], "hidden"))
                            }
                            N(), R(), b.props.animation ? A() && function(t, e) {
                                W(t, (function() {
                                    !b.state.isVisible && w.parentNode && w.parentNode.contains(w) && e()
                                }))
                            }(r, b.unmount) : b.unmount()
                        },
                        hideWithInteractivity: function(t) {
                            0;
                            M().addEventListener("mousemove", g), Ot(ie, g), g(t)
                        },
                        enable: function() {
                            b.state.isEnabled = !0
                        },
                        disable: function() {
                            b.hide(), b.state.isEnabled = !1
                        },
                        unmount: function() {
                            0;
                            b.state.isVisible && b.hide();
                            if (!b.state.isMounted) return;
                            Z(), Q().forEach((function(t) {
                                t._tippy.unmount()
                            })), w.parentNode && w.parentNode.removeChild(w);
                            se = se.filter((function(t) {
                                return t !== b
                            })), b.state.isMounted = !1, j("onHidden", [b])
                        },
                        destroy: function() {
                            0;
                            if (b.state.isDestroyed) return;
                            b.clearDelayTimeouts(), b.unmount(), q(), delete t._tippy, b.state.isDestroyed = !0, j("onDestroy", [b])
                        }
                    };
                if (!c.render) return b;
                var D = c.render(b),
                    w = D.popper,
                    x = D.onUpdate;
                w.setAttribute("data-tippy-root", ""), w.id = "tippy-" + b.id, b.popper = w, t._tippy = b, w._tippy = b;
                var k = v.map((function(t) {
                        return t.fn(b)
                    })),
                    E = t.hasAttribute("aria-expanded");
                return V(), R(), B(), j("onCreate", [b]), c.showOnCreate && tt(), w.addEventListener("mouseenter", (function() {
                    b.props.interactive && b.state.isVisible && b.clearDelayTimeouts()
                })), w.addEventListener("mouseleave", (function() {
                    b.props.interactive && b.props.trigger.indexOf("mouseenter") >= 0 && M().addEventListener("mousemove", g)
                })), b;

                function C() {
                    var t = b.props.touch;
                    return Array.isArray(t) ? t : [t, 0]
                }

                function S() {
                    return "hold" === C()[0]
                }

                function A() {
                    var t;
                    return !(null == (t = b.props.render) || !t.$$tippy)
                }

                function O() {
                    return u || t
                }

                function M() {
                    var t = O().parentNode;
                    return t ? $t(t) : document
                }

                function F() {
                    return ne(w)
                }

                function T(t) {
                    return b.state.isMounted && !b.state.isVisible || Wt.isTouch || i && "focus" === i.type ? 0 : kt(b.props.delay, t ? 0 : 1, Kt.delay)
                }

                function B(t) {
                    void 0 === t && (t = !1), w.style.pointerEvents = b.props.interactive && !t ? "" : "none", w.style.zIndex = "" + b.props.zIndex
                }

                function j(t, e, n) {
                    var r;
                    (void 0 === n && (n = !0), k.forEach((function(n) {
                        n[t] && n[t].apply(n, e)
                    })), n) && (r = b.props)[t].apply(r, e)
                }

                function N() {
                    var e = b.props.aria;
                    if (e.content) {
                        var n = "aria-" + e.content,
                            r = w.id;
                        At(b.props.triggerTarget || t).forEach((function(t) {
                            var e = t.getAttribute(n);
                            if (b.state.isVisible) t.setAttribute(n, e ? e + " " + r : r);
                            else {
                                var o = e && e.replace(r, "").trim();
                                o ? t.setAttribute(n, o) : t.removeAttribute(n)
                            }
                        }))
                    }
                }

                function R() {
                    !E && b.props.aria.expanded && At(b.props.triggerTarget || t).forEach((function(t) {
                        b.props.interactive ? t.setAttribute("aria-expanded", b.state.isVisible && t === O() ? "true" : "false") : t.removeAttribute("aria-expanded")
                    }))
                }

                function P() {
                    M().removeEventListener("mousemove", g), ie = ie.filter((function(t) {
                        return t !== g
                    }))
                }

                function z(e) {
                    if (!Wt.isTouch || !f && "mousedown" !== e.type) {
                        var n = e.composedPath && e.composedPath()[0] || e.target;
                        if (!b.props.interactive || !Ht(w, n)) {
                            if (At(b.props.triggerTarget || t).some((function(t) {
                                    return Ht(t, n)
                                }))) {
                                if (Wt.isTouch) return;
                                if (b.state.isVisible && b.props.trigger.indexOf("click") >= 0) return
                            } else j("onClickOutside", [b, e]);
                            !0 === b.props.hideOnClick && (b.clearDelayTimeouts(), b.hide(), d = !0, setTimeout((function() {
                                d = !1
                            })), b.state.isMounted || H())
                        }
                    }
                }

                function I() {
                    f = !0
                }

                function $() {
                    f = !1
                }

                function L() {
                    var t = M();
                    t.addEventListener("mousedown", z, !0), t.addEventListener("touchend", z, wt), t.addEventListener("touchstart", $, wt), t.addEventListener("touchmove", I, wt)
                }

                function H() {
                    var t = M();
                    t.removeEventListener("mousedown", z, !0), t.removeEventListener("touchend", z, wt), t.removeEventListener("touchstart", $, wt), t.removeEventListener("touchmove", I, wt)
                }

                function W(t, e) {
                    var n = F().box;

                    function r(t) {
                        t.target === n && (Lt(n, "remove", r), e())
                    }
                    if (0 === t) return e();
                    Lt(n, "remove", s), Lt(n, "add", r), s = r
                }

                function _(e, n, r) {
                    void 0 === r && (r = !1), At(b.props.triggerTarget || t).forEach((function(t) {
                        t.addEventListener(e, n, r), m.push({
                            node: t,
                            eventType: e,
                            handler: n,
                            options: r
                        })
                    }))
                }

                function V() {
                    var t;
                    S() && (_("touchstart", J, {
                        passive: !0
                    }), _("touchend", U, {
                        passive: !0
                    })), (t = b.props.trigger, t.split(/\s+/).filter(Boolean)).forEach((function(t) {
                        if ("manual" !== t) switch (_(t, J), t) {
                            case "mouseenter":
                                _("mouseleave", U);
                                break;
                            case "focus":
                                _(Yt ? "focusout" : "blur", K);
                                break;
                            case "focusin":
                                _("focusout", K)
                        }
                    }))
                }

                function q() {
                    m.forEach((function(t) {
                        var e = t.node,
                            n = t.eventType,
                            r = t.handler,
                            o = t.options;
                        e.removeEventListener(n, r, o)
                    })), m = []
                }

                function J(t) {
                    var e, n = !1;
                    if (b.state.isEnabled && !G(t) && !d) {
                        var r = "focus" === (null == (e = i) ? void 0 : e.type);
                        i = t, u = t.currentTarget, R(), !b.state.isVisible && Nt(t) && ie.forEach((function(e) {
                            return e(t)
                        })), "click" === t.type && (b.props.trigger.indexOf("mouseenter") < 0 || p) && !1 !== b.props.hideOnClick && b.state.isVisible ? n = !0 : tt(t), "click" === t.type && (p = !n), n && !r && et(t)
                    }
                }

                function Y(t) {
                    var e = t.target,
                        n = O().contains(e) || w.contains(e);
                    if ("mousemove" !== t.type || !n) {
                        var r = Q().concat(w).map((function(t) {
                            var e, n = null == (e = t._tippy.popperInstance) ? void 0 : e.state;
                            return n ? {
                                popperRect: t.getBoundingClientRect(),
                                popperState: n,
                                props: c
                            } : null
                        })).filter(Boolean);
                        (function(t, e) {
                            var n = e.clientX,
                                r = e.clientY;
                            return t.every((function(t) {
                                var e = t.popperRect,
                                    o = t.popperState,
                                    i = t.props.interactiveBorder,
                                    s = Mt(o.placement),
                                    a = o.modifiersData.offset;
                                if (!a) return !0;
                                var u = "bottom" === s ? a.top.y : 0,
                                    l = "top" === s ? a.bottom.y : 0,
                                    c = "right" === s ? a.left.x : 0,
                                    p = "left" === s ? a.right.x : 0,
                                    d = e.top - r + u > i,
                                    f = r - e.bottom - l > i,
                                    h = e.left - n + c > i,
                                    m = n - e.right - p > i;
                                return d || f || h || m
                            }))
                        })(r, t) && (P(), et(t))
                    }
                }

                function U(t) {
                    G(t) || b.props.trigger.indexOf("click") >= 0 && p || (b.props.interactive ? b.hideWithInteractivity(t) : et(t))
                }

                function K(t) {
                    b.props.trigger.indexOf("focusin") < 0 && t.target !== O() || b.props.interactive && t.relatedTarget && w.contains(t.relatedTarget) || et(t)
                }

                function G(t) {
                    return !!Wt.isTouch && S() !== t.type.indexOf("touch") >= 0
                }

                function X() {
                    Z();
                    var e = b.props,
                        n = e.popperOptions,
                        r = e.placement,
                        o = e.offset,
                        i = e.getReferenceClientRect,
                        s = e.moveTransition,
                        u = A() ? ne(w).arrow : null,
                        l = i ? {
                            getBoundingClientRect: i,
                            contextElement: i.contextElement || O()
                        } : t,
                        c = {
                            name: "$$tippy",
                            enabled: !0,
                            phase: "beforeWrite",
                            requires: ["computeStyles"],
                            fn: function(t) {
                                var e = t.state;
                                if (A()) {
                                    var n = F().box;
                                    ["placement", "reference-hidden", "escaped"].forEach((function(t) {
                                        "placement" === t ? n.setAttribute("data-placement", e.placement) : e.attributes.popper["data-popper-" + t] ? n.setAttribute("data-" + t, "") : n.removeAttribute("data-" + t)
                                    })), e.attributes.popper = {}
                                }
                            }
                        },
                        p = [{
                            name: "offset",
                            options: {
                                offset: o
                            }
                        }, {
                            name: "preventOverflow",
                            options: {
                                padding: {
                                    top: 2,
                                    bottom: 2,
                                    left: 5,
                                    right: 5
                                }
                            }
                        }, {
                            name: "flip",
                            options: {
                                padding: 5
                            }
                        }, {
                            name: "computeStyles",
                            options: {
                                adaptive: !s
                            }
                        }, c];
                    A() && u && p.push({
                        name: "arrow",
                        options: {
                            element: u,
                            padding: 3
                        }
                    }), p.push.apply(p, (null == n ? void 0 : n.modifiers) || []), b.popperInstance = gt(l, w, Object.assign({}, n, {
                        placement: r,
                        onFirstUpdate: a,
                        modifiers: p
                    }))
                }

                function Z() {
                    b.popperInstance && (b.popperInstance.destroy(), b.popperInstance = null)
                }

                function Q() {
                    return Ft(w.querySelectorAll("[data-tippy-root]"))
                }

                function tt(t) {
                    b.clearDelayTimeouts(), t && j("onTrigger", [b, t]), L();
                    var e = T(!0),
                        r = C(),
                        o = r[0],
                        i = r[1];
                    Wt.isTouch && "hold" === o && i && (e = i), e ? n = setTimeout((function() {
                        b.show()
                    }), e) : b.show()
                }

                function et(t) {
                    if (b.clearDelayTimeouts(), j("onUntrigger", [b, t]), b.state.isVisible) {
                        if (!(b.props.trigger.indexOf("mouseenter") >= 0 && b.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(t.type) >= 0 && p)) {
                            var e = T(!1);
                            e ? r = setTimeout((function() {
                                b.state.isVisible && b.hide()
                            }), e) : o = requestAnimationFrame((function() {
                                b.hide()
                            }))
                        }
                    } else H()
                }
            }

            function ue(t, e) {
                void 0 === e && (e = {});
                var n = Kt.plugins.concat(e.plugins || []);
                document.addEventListener("touchstart", Vt, wt), window.addEventListener("blur", Jt);
                var r = Object.assign({}, e, {
                        plugins: n
                    }),
                    o = Pt(t).reduce((function(t, e) {
                        var n = e && ae(e, r);
                        return n && t.push(n), t
                    }), []);
                return jt(t) ? o[0] : o
            }
            ue.defaultProps = Kt, ue.setDefaultProps = function(t) {
                Object.keys(t).forEach((function(e) {
                    Kt[e] = t[e]
                }))
            }, ue.currentInput = Wt;
            Object.assign({}, Z, {
                effect: function(t) {
                    var e = t.state,
                        n = {
                            popper: {
                                position: e.options.strategy,
                                left: "0",
                                top: "0",
                                margin: "0"
                            },
                            arrow: {
                                position: "absolute"
                            },
                            reference: {}
                        };
                    Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow)
                }
            });
            ue.setDefaultProps({
                render: re
            });
            var le = ue
        },
        53975: function(t, e, n) {
            "use strict";
            n.d(e, {
                ML: function() {
                    return Qt
                },
                hj: function() {
                    return ut
                },
                VK: function() {
                    return Q
                },
                vc: function() {
                    return ie
                },
                NB: function() {
                    return se
                },
                DK: function() {
                    return ae
                },
                nU: function() {
                    return J
                },
                XP: function() {
                    return Mt
                },
                Ov: function() {
                    return le
                },
                b5: function() {
                    return Ft
                },
                Kk: function() {
                    return Tt
                },
                QC: function() {
                    return Pt
                },
                Nl: function() {
                    return $
                },
                IH: function() {
                    return mt
                },
                tI: function() {
                    return zt
                },
                EG: function() {
                    return Ht
                },
                xh: function() {
                    return yt
                },
                Cf: function() {
                    return te
                },
                K9: function() {
                    return ue
                },
                P1: function() {
                    return _
                },
                x2: function() {
                    return ee
                },
                pr: function() {
                    return Wt
                },
                DS: function() {
                    return re
                },
                zK: function() {
                    return ne
                },
                S0: function() {
                    return oe
                }
            });
            var r = n(60314),
                o = n(98715),
                i = n(80326),
                s = n(31506),
                a = n(85804);
            const u = (t, e) => !t.selection.empty && (e && e(t.tr.deleteSelection().scrollIntoView()), !0);

            function l(t, e) {
                let {
                    $cursor: n
                } = t.selection;
                return !n || (e ? !e.endOfTextblock("backward", t) : n.parentOffset > 0) ? null : n
            }
            const c = (t, e, n) => {
                let o = l(t, n);
                if (!o) return !1;
                let i = f(o);
                if (!i) {
                    let n = o.blockRange(),
                        r = n && (0, a.k9)(n);
                    return null != r && (e && e(t.tr.lift(n, r).scrollIntoView()), !0)
                }
                let u = i.nodeBefore;
                if (!u.type.spec.isolating && C(t, i, e)) return !0;
                if (0 == o.parent.content.size && (p(u, "end") || r.qv.isSelectable(u))) {
                    let n = (0, a.dR)(t.doc, o.before(), o.after(), s.p2.empty);
                    if (n && n.slice.size < n.to - n.from) {
                        if (e) {
                            let o = t.tr.step(n);
                            o.setSelection(p(u, "end") ? r.Y1.findFrom(o.doc.resolve(o.mapping.map(i.pos, -1)), -1) : r.qv.create(o.doc, i.pos - u.nodeSize)), e(o.scrollIntoView())
                        }
                        return !0
                    }
                }
                return !(!u.isAtom || i.depth != o.depth - 1) && (e && e(t.tr.delete(i.pos - u.nodeSize, i.pos).scrollIntoView()), !0)
            };

            function p(t, e, n = !1) {
                for (let r = t; r; r = "start" == e ? r.firstChild : r.lastChild) {
                    if (r.isTextblock) return !0;
                    if (n && 1 != r.childCount) return !1
                }
                return !1
            }
            const d = (t, e, n) => {
                let {
                    $head: o,
                    empty: i
                } = t.selection, s = o;
                if (!i) return !1;
                if (o.parent.isTextblock) {
                    if (n ? !n.endOfTextblock("backward", t) : o.parentOffset > 0) return !1;
                    s = f(o)
                }
                let a = s && s.nodeBefore;
                return !(!a || !r.qv.isSelectable(a)) && (e && e(t.tr.setSelection(r.qv.create(t.doc, s.pos - a.nodeSize)).scrollIntoView()), !0)
            };

            function f(t) {
                if (!t.parent.type.spec.isolating)
                    for (let e = t.depth - 1; e >= 0; e--) {
                        if (t.index(e) > 0) return t.doc.resolve(t.before(e + 1));
                        if (t.node(e).type.spec.isolating) break
                    }
                return null
            }

            function h(t, e) {
                let {
                    $cursor: n
                } = t.selection;
                return !n || (e ? !e.endOfTextblock("forward", t) : n.parentOffset < n.parent.content.size) ? null : n
            }
            const m = (t, e, n) => {
                    let o = h(t, n);
                    if (!o) return !1;
                    let i = y(o);
                    if (!i) return !1;
                    let u = i.nodeAfter;
                    if (C(t, i, e)) return !0;
                    if (0 == o.parent.content.size && (p(u, "start") || r.qv.isSelectable(u))) {
                        let n = (0, a.dR)(t.doc, o.before(), o.after(), s.p2.empty);
                        if (n && n.slice.size < n.to - n.from) {
                            if (e) {
                                let o = t.tr.step(n);
                                o.setSelection(p(u, "start") ? r.Y1.findFrom(o.doc.resolve(o.mapping.map(i.pos)), 1) : r.qv.create(o.doc, o.mapping.map(i.pos))), e(o.scrollIntoView())
                            }
                            return !0
                        }
                    }
                    return !(!u.isAtom || i.depth != o.depth - 1) && (e && e(t.tr.delete(i.pos, i.pos + u.nodeSize).scrollIntoView()), !0)
                },
                g = (t, e, n) => {
                    let {
                        $head: o,
                        empty: i
                    } = t.selection, s = o;
                    if (!i) return !1;
                    if (o.parent.isTextblock) {
                        if (n ? !n.endOfTextblock("forward", t) : o.parentOffset < o.parent.content.size) return !1;
                        s = y(o)
                    }
                    let a = s && s.nodeAfter;
                    return !(!a || !r.qv.isSelectable(a)) && (e && e(t.tr.setSelection(r.qv.create(t.doc, s.pos)).scrollIntoView()), !0)
                };

            function y(t) {
                if (!t.parent.type.spec.isolating)
                    for (let e = t.depth - 1; e >= 0; e--) {
                        let n = t.node(e);
                        if (t.index(e) + 1 < n.childCount) return t.doc.resolve(t.after(e + 1));
                        if (n.type.spec.isolating) break
                    }
                return null
            }
            const v = (t, e) => {
                let {
                    $head: n,
                    $anchor: r
                } = t.selection;
                return !(!n.parent.type.spec.code || !n.sameParent(r)) && (e && e(t.tr.insertText("\n").scrollIntoView()), !0)
            };

            function b(t) {
                for (let e = 0; e < t.edgeCount; e++) {
                    let {
                        type: n
                    } = t.edge(e);
                    if (n.isTextblock && !n.hasRequiredAttrs()) return n
                }
                return null
            }
            const D = (t, e) => {
                    let {
                        $head: n,
                        $anchor: o
                    } = t.selection;
                    if (!n.parent.type.spec.code || !n.sameParent(o)) return !1;
                    let i = n.node(-1),
                        s = n.indexAfter(-1),
                        a = b(i.contentMatchAt(s));
                    if (!a || !i.canReplaceWith(s, s, a)) return !1;
                    if (e) {
                        let o = n.after(),
                            i = t.tr.replaceWith(o, o, a.createAndFill());
                        i.setSelection(r.Y1.near(i.doc.resolve(o), 1)), e(i.scrollIntoView())
                    }
                    return !0
                },
                w = (t, e) => {
                    let n = t.selection,
                        {
                            $from: o,
                            $to: i
                        } = n;
                    if (n instanceof r.C1 || o.parent.inlineContent || i.parent.inlineContent) return !1;
                    let s = b(i.parent.contentMatchAt(i.indexAfter()));
                    if (!s || !s.isTextblock) return !1;
                    if (e) {
                        let n = (!o.parentOffset && i.index() < i.parent.childCount ? o : i).pos,
                            a = t.tr.insert(n, s.createAndFill());
                        a.setSelection(r.Bs.create(a.doc, n + 1)), e(a.scrollIntoView())
                    }
                    return !0
                },
                x = (t, e) => {
                    let {
                        $cursor: n
                    } = t.selection;
                    if (!n || n.parent.content.size) return !1;
                    if (n.depth > 1 && n.after() != n.end(-1)) {
                        let r = n.before();
                        if ((0, a.Ax)(t.doc, r)) return e && e(t.tr.split(r).scrollIntoView()), !0
                    }
                    let r = n.blockRange(),
                        o = r && (0, a.k9)(r);
                    return null != o && (e && e(t.tr.lift(r, o).scrollIntoView()), !0)
                };
            const k = (t, e) => {
                let {
                    $from: n,
                    $to: o
                } = t.selection;
                if (t.selection instanceof r.qv && t.selection.node.isBlock) return !(!n.parentOffset || !(0, a.Ax)(t.doc, n.pos)) && (e && e(t.tr.split(n.pos).scrollIntoView()), !0);
                if (!n.parent.isBlock) return !1;
                if (e) {
                    let i = o.parentOffset == o.parent.content.size,
                        s = t.tr;
                    (t.selection instanceof r.Bs || t.selection instanceof r.C1) && s.deleteSelection();
                    let u = 0 == n.depth ? null : b(n.node(-1).contentMatchAt(n.indexAfter(-1))),
                        l = E && E(o.parent, i),
                        c = l ? [l] : i && u ? [{
                            type: u
                        }] : void 0,
                        p = (0, a.Ax)(s.doc, s.mapping.map(n.pos), 1, c);
                    if (c || p || !(0, a.Ax)(s.doc, s.mapping.map(n.pos), 1, u ? [{
                            type: u
                        }] : void 0) || (u && (c = [{
                            type: u
                        }]), p = !0), p && (s.split(s.mapping.map(n.pos), 1, c), !i && !n.parentOffset && n.parent.type != u)) {
                        let t = s.mapping.map(n.before()),
                            e = s.doc.resolve(t);
                        u && n.node(-1).canReplaceWith(e.index(), e.index() + 1, u) && s.setNodeMarkup(s.mapping.map(n.before()), u)
                    }
                    e(s.scrollIntoView())
                }
                return !0
            };
            var E;

            function C(t, e, n) {
                let o, i, u = e.nodeBefore,
                    l = e.nodeAfter;
                if (u.type.spec.isolating || l.type.spec.isolating) return !1;
                if (function(t, e, n) {
                        let r = e.nodeBefore,
                            o = e.nodeAfter,
                            i = e.index();
                        return !!(r && o && r.type.compatibleContent(o.type)) && (!r.content.size && e.parent.canReplace(i - 1, i) ? (n && n(t.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !(!e.parent.canReplace(i, i + 1) || !o.isTextblock && !(0, a.Mn)(t.doc, e.pos)) && (n && n(t.tr.clearIncompatible(e.pos, r.type, r.contentMatchAt(r.childCount)).join(e.pos).scrollIntoView()), !0))
                    }(t, e, n)) return !0;
                let c = e.parent.canReplace(e.index(), e.index() + 1);
                if (c && (o = (i = u.contentMatchAt(u.childCount)).findWrapping(l.type)) && i.matchType(o[0] || l.type).validEnd) {
                    if (n) {
                        let r = e.pos + l.nodeSize,
                            i = s.HY.empty;
                        for (let t = o.length - 1; t >= 0; t--) i = s.HY.from(o[t].create(null, i));
                        i = s.HY.from(u.copy(i));
                        let c = t.tr.step(new a.FC(e.pos - 1, r, e.pos, r, new s.p2(i, 1, 0), o.length, !0)),
                            p = r + 2 * o.length;
                        (0, a.Mn)(c.doc, p) && c.join(p), n(c.scrollIntoView())
                    }
                    return !0
                }
                let d = r.Y1.findFrom(e, 1),
                    f = d && d.$from.blockRange(d.$to),
                    h = f && (0, a.k9)(f);
                if (null != h && h >= e.depth) return n && n(t.tr.lift(f, h).scrollIntoView()), !0;
                if (c && p(l, "start", !0) && p(u, "end")) {
                    let r = u,
                        o = [];
                    for (; o.push(r), !r.isTextblock;) r = r.lastChild;
                    let i = l,
                        c = 1;
                    for (; !i.isTextblock; i = i.firstChild) c++;
                    if (r.canReplace(r.childCount, r.childCount, i.content)) {
                        if (n) {
                            let r = s.HY.empty;
                            for (let t = o.length - 1; t >= 0; t--) r = s.HY.from(o[t].copy(r));
                            n(t.tr.step(new a.FC(e.pos - o.length, e.pos + l.nodeSize, e.pos + c, e.pos + l.nodeSize - c, new s.p2(r, o.length, 0), 0, !0)).scrollIntoView())
                        }
                        return !0
                    }
                }
                return !1
            }

            function S(t) {
                return function(e, n) {
                    let o = e.selection,
                        i = t < 0 ? o.$from : o.$to,
                        s = i.depth;
                    for (; i.node(s).isInline;) {
                        if (!s) return !1;
                        s--
                    }
                    return !!i.node(s).isTextblock && (n && n(e.tr.setSelection(r.Bs.create(e.doc, t < 0 ? i.start(s) : i.end(s)))), !0)
                }
            }
            const A = S(-1),
                O = S(1);

            function M(t, e = null) {
                return function(n, r) {
                    let o = !1;
                    for (let i = 0; i < n.selection.ranges.length && !o; i++) {
                        let {
                            $from: {
                                pos: r
                            },
                            $to: {
                                pos: s
                            }
                        } = n.selection.ranges[i];
                        n.doc.nodesBetween(r, s, ((r, i) => {
                            if (o) return !1;
                            if (r.isTextblock && !r.hasMarkup(t, e))
                                if (r.type == t) o = !0;
                                else {
                                    let e = n.doc.resolve(i),
                                        r = e.index();
                                    o = e.parent.canReplaceWith(r, r + 1, t)
                                }
                        }))
                    }
                    if (!o) return !1;
                    if (r) {
                        let o = n.tr;
                        for (let r = 0; r < n.selection.ranges.length; r++) {
                            let {
                                $from: {
                                    pos: i
                                },
                                $to: {
                                    pos: s
                                }
                            } = n.selection.ranges[r];
                            o.setBlockType(i, s, t, e)
                        }
                        r(o.scrollIntoView())
                    }
                    return !0
                }
            }

            function F(...t) {
                return function(e, n, r) {
                    for (let o = 0; o < t.length; o++)
                        if (t[o](e, n, r)) return !0;
                    return !1
                }
            }
            let T = F(u, c, d),
                B = F(u, m, g);
            const j = {
                    Enter: F(v, w, x, k),
                    "Mod-Enter": D,
                    Backspace: T,
                    "Mod-Backspace": T,
                    "Shift-Backspace": T,
                    Delete: B,
                    "Mod-Delete": B,
                    "Mod-a": (t, e) => (e && e(t.tr.setSelection(new r.C1(t.doc))), !0)
                },
                N = {
                    "Ctrl-h": j.Backspace,
                    "Alt-Backspace": j["Mod-Backspace"],
                    "Ctrl-d": j.Delete,
                    "Ctrl-Alt-Backspace": j["Mod-Delete"],
                    "Alt-Delete": j["Mod-Delete"],
                    "Alt-d": j["Mod-Delete"],
                    "Ctrl-a": A,
                    "Ctrl-e": O
                };
            for (let ce in j) N[ce] = j[ce];
            "undefined" != typeof navigator ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !("undefined" == typeof os || !os.platform) && os.platform();

            function R(t, e = null) {
                return function(n, r) {
                    let {
                        $from: o,
                        $to: i
                    } = n.selection, u = o.blockRange(i), l = !1, c = u;
                    if (!u) return !1;
                    if (u.depth >= 2 && o.node(u.depth - 1).type.compatibleContent(t) && 0 == u.startIndex) {
                        if (0 == o.index(u.depth - 1)) return !1;
                        let t = n.doc.resolve(u.start - 2);
                        c = new s.Ts(t, t, u.depth), u.endIndex < u.parent.childCount && (u = new s.Ts(o, n.doc.resolve(i.end(u.depth)), u.depth)), l = !0
                    }
                    let p = (0, a.nd)(c, t, e, u);
                    return !!p && (r && r(function(t, e, n, r, o) {
                        let i = s.HY.empty;
                        for (let a = n.length - 1; a >= 0; a--) i = s.HY.from(n[a].type.create(n[a].attrs, i));
                        t.step(new a.FC(e.start - (r ? 2 : 0), e.end, e.start, e.end, new s.p2(i, 0, 0), n.length, !0));
                        let u = 0;
                        for (let s = 0; s < n.length; s++) n[s].type == o && (u = s + 1);
                        let l = n.length - u,
                            c = e.start + n.length - (r ? 2 : 0),
                            p = e.parent;
                        for (let s = e.startIndex, d = e.endIndex, f = !0; s < d; s++, f = !1) !f && (0, a.Ax)(t.doc, c, l) && (t.split(c, l), c += 2 * l), c += p.child(s).nodeSize;
                        return t
                    }(n.tr, u, p, l, t).scrollIntoView()), !0)
                }
            }

            function P(t) {
                return function(e, n) {
                    let {
                        $from: r,
                        $to: o
                    } = e.selection, i = r.blockRange(o, (e => e.childCount > 0 && e.firstChild.type == t));
                    return !!i && (!n || (r.node(i.depth - 1).type == t ? function(t, e, n, r) {
                        let o = t.tr,
                            i = r.end,
                            u = r.$to.end(r.depth);
                        i < u && (o.step(new a.FC(i - 1, u, i, u, new s.p2(s.HY.from(n.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new s.Ts(o.doc.resolve(r.$from.pos), o.doc.resolve(u), r.depth));
                        const l = (0, a.k9)(r);
                        if (null == l) return !1;
                        o.lift(r, l);
                        let c = o.mapping.map(i, -1) - 1;
                        (0, a.Mn)(o.doc, c) && o.join(c);
                        return e(o.scrollIntoView()), !0
                    }(e, n, t, i) : function(t, e, n) {
                        let r = t.tr,
                            o = n.parent;
                        for (let s = n.end, a = n.endIndex - 1, m = n.startIndex; a > m; a--) s -= o.child(a).nodeSize, r.delete(s - 1, s + 1);
                        let i = r.doc.resolve(n.start),
                            u = i.nodeAfter;
                        if (r.mapping.map(n.end) != n.start + i.nodeAfter.nodeSize) return !1;
                        let l = 0 == n.startIndex,
                            c = n.endIndex == o.childCount,
                            p = i.node(-1),
                            d = i.index(-1);
                        if (!p.canReplace(d + (l ? 0 : 1), d + 1, u.content.append(c ? s.HY.empty : s.HY.from(o)))) return !1;
                        let f = i.pos,
                            h = f + u.nodeSize;
                        return r.step(new a.FC(f - (l ? 1 : 0), h + (c ? 1 : 0), f + 1, h - 1, new s.p2((l ? s.HY.empty : s.HY.from(o.copy(s.HY.empty))).append(c ? s.HY.empty : s.HY.from(o.copy(s.HY.empty))), l ? 0 : 1, c ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0
                    }(e, n, i)))
                }
            }

            function z(t) {
                const {
                    state: e,
                    transaction: n
                } = t;
                let {
                    selection: r
                } = n, {
                    doc: o
                } = n, {
                    storedMarks: i
                } = n;
                return { ...e,
                    apply: e.apply.bind(e),
                    applyTransaction: e.applyTransaction.bind(e),
                    filterTransaction: e.filterTransaction,
                    plugins: e.plugins,
                    schema: e.schema,
                    reconfigure: e.reconfigure.bind(e),
                    toJSON: e.toJSON.bind(e),
                    get storedMarks() {
                        return i
                    },
                    get selection() {
                        return r
                    },
                    get doc() {
                        return o
                    },
                    get tr() {
                        return r = n.selection, o = n.doc, i = n.storedMarks, n
                    }
                }
            }
            class I {
                constructor(t) {
                    this.editor = t.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = t.state
                }
                get hasCustomState() {
                    return !!this.customState
                }
                get state() {
                    return this.customState || this.editor.state
                }
                get commands() {
                    const {
                        rawCommands: t,
                        editor: e,
                        state: n
                    } = this, {
                        view: r
                    } = e, {
                        tr: o
                    } = n, i = this.buildProps(o);
                    return Object.fromEntries(Object.entries(t).map((([t, e]) => [t, (...t) => {
                        const n = e(...t)(i);
                        return o.getMeta("preventDispatch") || this.hasCustomState || r.dispatch(o), n
                    }])))
                }
                get chain() {
                    return () => this.createChain()
                }
                get can() {
                    return () => this.createCan()
                }
                createChain(t, e = !0) {
                    const {
                        rawCommands: n,
                        editor: r,
                        state: o
                    } = this, {
                        view: i
                    } = r, s = [], a = !!t, u = t || o.tr, l = { ...Object.fromEntries(Object.entries(n).map((([t, n]) => [t, (...t) => {
                            const r = this.buildProps(u, e),
                                o = n(...t)(r);
                            return s.push(o), l
                        }]))),
                        run: () => (a || !e || u.getMeta("preventDispatch") || this.hasCustomState || i.dispatch(u), s.every((t => !0 === t)))
                    };
                    return l
                }
                createCan(t) {
                    const {
                        rawCommands: e,
                        state: n
                    } = this, r = t || n.tr, o = this.buildProps(r, false), i = Object.fromEntries(Object.entries(e).map((([t, e]) => [t, (...t) => e(...t)({ ...o,
                        dispatch: void 0
                    })])));
                    return { ...i,
                        chain: () => this.createChain(r, false)
                    }
                }
                buildProps(t, e = !0) {
                    const {
                        rawCommands: n,
                        editor: r,
                        state: o
                    } = this, {
                        view: i
                    } = r, s = {
                        tr: t,
                        editor: r,
                        view: i,
                        state: z({
                            state: o,
                            transaction: t
                        }),
                        dispatch: e ? () => {} : void 0,
                        chain: () => this.createChain(t, e),
                        can: () => this.createCan(t),
                        get commands() {
                            return Object.fromEntries(Object.entries(n).map((([t, e]) => [t, (...t) => e(...t)(s)])))
                        }
                    };
                    return s
                }
            }

            function $(t, e, n) {
                if (void 0 === t.config[e] && t.parent) return $(t.parent, e, n);
                if ("function" === typeof t.config[e]) {
                    return t.config[e].bind({ ...n,
                        parent: t.parent ? $(t.parent, e, n) : null
                    })
                }
                return t.config[e]
            }

            function L(t) {
                return {
                    baseExtensions: t.filter((t => "extension" === t.type)),
                    nodeExtensions: t.filter((t => "node" === t.type)),
                    markExtensions: t.filter((t => "mark" === t.type))
                }
            }

            function H(t) {
                const e = [],
                    {
                        nodeExtensions: n,
                        markExtensions: r
                    } = L(t),
                    o = [...n, ...r],
                    i = {
                        default: null,
                        rendered: !0,
                        renderHTML: null,
                        parseHTML: null,
                        keepOnSplit: !0,
                        isRequired: !1
                    };
                return t.forEach((t => {
                    const n = $(t, "addGlobalAttributes", {
                        name: t.name,
                        options: t.options,
                        storage: t.storage
                    });
                    if (!n) return;
                    n().forEach((t => {
                        t.types.forEach((n => {
                            Object.entries(t.attributes).forEach((([t, r]) => {
                                e.push({
                                    type: n,
                                    name: t,
                                    attribute: { ...i,
                                        ...r
                                    }
                                })
                            }))
                        }))
                    }))
                })), o.forEach((t => {
                    const n = {
                            name: t.name,
                            options: t.options,
                            storage: t.storage
                        },
                        r = $(t, "addAttributes", n);
                    if (!r) return;
                    const o = r();
                    Object.entries(o).forEach((([n, r]) => {
                        const o = { ...i,
                            ...r
                        };
                        "function" === typeof(null === o || void 0 === o ? void 0 : o.default) && (o.default = o.default()), (null === o || void 0 === o ? void 0 : o.isRequired) && void 0 === (null === o || void 0 === o ? void 0 : o.default) && delete o.default, e.push({
                            type: t.name,
                            name: n,
                            attribute: o
                        })
                    }))
                })), e
            }

            function W(t, e) {
                if ("string" === typeof t) {
                    if (!e.nodes[t]) throw Error(`There is no node type named '${t}'. Maybe you forgot to add the extension?`);
                    return e.nodes[t]
                }
                return t
            }

            function _(...t) {
                return t.filter((t => !!t)).reduce(((t, e) => {
                    const n = { ...t
                    };
                    return Object.entries(e).forEach((([t, e]) => {
                        if (n[t])
                            if ("class" === t) {
                                const r = e ? e.split(" ") : [],
                                    o = n[t] ? n[t].split(" ") : [],
                                    i = r.filter((t => !o.includes(t)));
                                n[t] = [...o, ...i].join(" ")
                            } else n[t] = "style" === t ? [n[t], e].join("; ") : e;
                        else n[t] = e
                    })), n
                }), {})
            }

            function V(t, e) {
                return e.filter((t => t.attribute.rendered)).map((e => e.attribute.renderHTML ? e.attribute.renderHTML(t.attrs) || {} : {
                    [e.name]: t.attrs[e.name]
                })).reduce(((t, e) => _(t, e)), {})
            }

            function q(t) {
                return "function" === typeof t
            }

            function J(t, e, ...n) {
                return q(t) ? e ? t.bind(e)(...n) : t(...n) : t
            }

            function Y(t, e) {
                return t.style ? t : { ...t,
                    getAttrs: n => {
                        const r = t.getAttrs ? t.getAttrs(n) : t.attrs;
                        if (!1 === r) return !1;
                        const o = e.reduce(((t, e) => {
                            const r = e.attribute.parseHTML ? e.attribute.parseHTML(n) : function(t) {
                                return "string" !== typeof t ? t : t.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(t) : "true" === t || "false" !== t && t
                            }(n.getAttribute(e.name));
                            return null === r || void 0 === r ? t : { ...t,
                                [e.name]: r
                            }
                        }), {});
                        return { ...r,
                            ...o
                        }
                    }
                }
            }

            function U(t) {
                return Object.fromEntries(Object.entries(t).filter((([t, e]) => ("attrs" !== t || ! function(t = {}) {
                    return 0 === Object.keys(t).length && t.constructor === Object
                }(e)) && (null !== e && void 0 !== e))))
            }

            function K(t, e) {
                var n;
                const r = H(t),
                    {
                        nodeExtensions: o,
                        markExtensions: i
                    } = L(t),
                    a = null === (n = o.find((t => $(t, "topNode")))) || void 0 === n ? void 0 : n.name,
                    u = Object.fromEntries(o.map((n => {
                        const o = r.filter((t => t.type === n.name)),
                            i = {
                                name: n.name,
                                options: n.options,
                                storage: n.storage,
                                editor: e
                            },
                            s = U({ ...t.reduce(((t, e) => {
                                    const r = $(e, "extendNodeSchema", i);
                                    return { ...t,
                                        ...r ? r(n) : {}
                                    }
                                }), {}),
                                content: J($(n, "content", i)),
                                marks: J($(n, "marks", i)),
                                group: J($(n, "group", i)),
                                inline: J($(n, "inline", i)),
                                atom: J($(n, "atom", i)),
                                selectable: J($(n, "selectable", i)),
                                draggable: J($(n, "draggable", i)),
                                code: J($(n, "code", i)),
                                defining: J($(n, "defining", i)),
                                isolating: J($(n, "isolating", i)),
                                attrs: Object.fromEntries(o.map((t => {
                                    var e;
                                    return [t.name, {
                                        default: null === (e = null === t || void 0 === t ? void 0 : t.attribute) || void 0 === e ? void 0 : e.default
                                    }]
                                })))
                            }),
                            a = J($(n, "parseHTML", i));
                        a && (s.parseDOM = a.map((t => Y(t, o))));
                        const u = $(n, "renderHTML", i);
                        u && (s.toDOM = t => u({
                            node: t,
                            HTMLAttributes: V(t, o)
                        }));
                        const l = $(n, "renderText", i);
                        return l && (s.toText = l), [n.name, s]
                    }))),
                    l = Object.fromEntries(i.map((n => {
                        const o = r.filter((t => t.type === n.name)),
                            i = {
                                name: n.name,
                                options: n.options,
                                storage: n.storage,
                                editor: e
                            },
                            s = U({ ...t.reduce(((t, e) => {
                                    const r = $(e, "extendMarkSchema", i);
                                    return { ...t,
                                        ...r ? r(n) : {}
                                    }
                                }), {}),
                                inclusive: J($(n, "inclusive", i)),
                                excludes: J($(n, "excludes", i)),
                                group: J($(n, "group", i)),
                                spanning: J($(n, "spanning", i)),
                                code: J($(n, "code", i)),
                                attrs: Object.fromEntries(o.map((t => {
                                    var e;
                                    return [t.name, {
                                        default: null === (e = null === t || void 0 === t ? void 0 : t.attribute) || void 0 === e ? void 0 : e.default
                                    }]
                                })))
                            }),
                            a = J($(n, "parseHTML", i));
                        a && (s.parseDOM = a.map((t => Y(t, o))));
                        const u = $(n, "renderHTML", i);
                        return u && (s.toDOM = t => u({
                            mark: t,
                            HTMLAttributes: V(t, o)
                        })), [n.name, s]
                    })));
                return new s.V_({
                    topNode: a,
                    nodes: u,
                    marks: l
                })
            }

            function G(t, e) {
                return e.nodes[t] || e.marks[t] || null
            }

            function X(t, e) {
                return Array.isArray(e) ? e.some((e => ("string" === typeof e ? e : e.name) === t.name)) : e
            }

            function Z(t) {
                return "[object RegExp]" === Object.prototype.toString.call(t)
            }
            class Q {
                constructor(t) {
                    this.find = t.find, this.handler = t.handler
                }
            }

            function tt(t) {
                var e;
                const {
                    editor: n,
                    from: r,
                    to: o,
                    text: i,
                    rules: s,
                    plugin: a
                } = t, {
                    view: u
                } = n;
                if (u.composing) return !1;
                const l = u.state.doc.resolve(r);
                if (l.parent.type.spec.code || (null === (e = l.nodeBefore || l.nodeAfter) || void 0 === e ? void 0 : e.marks.find((t => t.type.spec.code)))) return !1;
                let c = !1;
                const p = ((t, e = 500) => {
                    let n = "";
                    const r = t.parentOffset;
                    return t.parent.nodesBetween(Math.max(0, r - e), r, ((t, e, o, i) => {
                        var s, a;
                        const u = (null === (a = (s = t.type.spec).toText) || void 0 === a ? void 0 : a.call(s, {
                            node: t,
                            pos: e,
                            parent: o,
                            index: i
                        })) || t.textContent || "%leaf%";
                        n += u.slice(0, Math.max(0, r - e))
                    })), n
                })(l) + i;
                return s.forEach((t => {
                    if (c) return;
                    const e = ((t, e) => {
                        if (Z(e)) return e.exec(t);
                        const n = e(t);
                        if (!n) return null;
                        const r = [n.text];
                        return r.index = n.index, r.input = t, r.data = n.data, n.replaceWith && (n.text.includes(n.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(n.replaceWith)), r
                    })(p, t.find);
                    if (!e) return;
                    const s = u.state.tr,
                        l = z({
                            state: u.state,
                            transaction: s
                        }),
                        d = {
                            from: r - (e[0].length - i.length),
                            to: o
                        },
                        {
                            commands: f,
                            chain: h,
                            can: m
                        } = new I({
                            editor: n,
                            state: l
                        });
                    null !== t.handler({
                        state: l,
                        range: d,
                        match: e,
                        commands: f,
                        chain: h,
                        can: m
                    }) && s.steps.length && (s.setMeta(a, {
                        transform: s,
                        from: r,
                        to: o,
                        text: i
                    }), u.dispatch(s), c = !0)
                })), c
            }

            function et(t) {
                const {
                    editor: e,
                    rules: n
                } = t, o = new r.Sy({
                    state: {
                        init: () => null,
                        apply(t, e) {
                            const n = t.getMeta(o);
                            return n || (t.selectionSet || t.docChanged ? null : e)
                        }
                    },
                    props: {
                        handleTextInput: (t, r, i, s) => tt({
                            editor: e,
                            from: r,
                            to: i,
                            text: s,
                            rules: n,
                            plugin: o
                        }),
                        handleDOMEvents: {
                            compositionend: t => (setTimeout((() => {
                                const {
                                    $cursor: r
                                } = t.state.selection;
                                r && tt({
                                    editor: e,
                                    from: r.pos,
                                    to: r.pos,
                                    text: "",
                                    rules: n,
                                    plugin: o
                                })
                            })), !1)
                        },
                        handleKeyDown(t, r) {
                            if ("Enter" !== r.key) return !1;
                            const {
                                $cursor: i
                            } = t.state.selection;
                            return !!i && tt({
                                editor: e,
                                from: i.pos,
                                to: i.pos,
                                text: "\n",
                                rules: n,
                                plugin: o
                            })
                        }
                    },
                    isInputRules: !0
                });
                return o
            }
            class nt {
                constructor(t) {
                    this.find = t.find, this.handler = t.handler
                }
            }

            function rt(t) {
                const {
                    editor: e,
                    state: n,
                    from: r,
                    to: o,
                    rule: i
                } = t, {
                    commands: s,
                    chain: a,
                    can: u
                } = new I({
                    editor: e,
                    state: n
                }), l = [];
                n.doc.nodesBetween(r, o, ((t, e) => {
                    if (!t.isTextblock || t.type.spec.code) return;
                    const c = Math.max(r, e),
                        p = Math.min(o, e + t.content.size);
                    ((t, e) => {
                        if (Z(e)) return [...t.matchAll(e)];
                        const n = e(t);
                        return n ? n.map((e => {
                            const n = [e.text];
                            return n.index = e.index, n.input = t, n.data = e.data, e.replaceWith && (e.text.includes(e.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), n.push(e.replaceWith)), n
                        })) : []
                    })(t.textBetween(c - e, p - e, void 0, "\ufffc"), i.find).forEach((t => {
                        if (void 0 === t.index) return;
                        const e = c + t.index + 1,
                            r = e + t[0].length,
                            o = {
                                from: n.tr.mapping.map(e),
                                to: n.tr.mapping.map(r)
                            },
                            p = i.handler({
                                state: n,
                                range: o,
                                match: t,
                                commands: s,
                                chain: a,
                                can: u
                            });
                        l.push(p)
                    }))
                }));
                return l.every((t => null !== t))
            }

            function ot(t) {
                const {
                    editor: e,
                    rules: n
                } = t;
                let o = null,
                    i = !1,
                    s = !1;
                return n.map((t => new r.Sy({
                    view(t) {
                        const e = e => {
                            var n;
                            o = (null === (n = t.dom.parentElement) || void 0 === n ? void 0 : n.contains(e.target)) ? t.dom.parentElement : null
                        };
                        return window.addEventListener("dragstart", e), {
                            destroy() {
                                window.removeEventListener("dragstart", e)
                            }
                        }
                    },
                    props: {
                        handleDOMEvents: {
                            drop: t => (s = o === t.dom.parentElement, !1),
                            paste: (t, e) => {
                                var n;
                                const r = null === (n = e.clipboardData) || void 0 === n ? void 0 : n.getData("text/html");
                                return i = !!(null === r || void 0 === r ? void 0 : r.includes("data-pm-slice")), !1
                            }
                        }
                    },
                    appendTransaction: (n, r, o) => {
                        const a = n[0],
                            u = "paste" === a.getMeta("uiEvent") && !i,
                            l = "drop" === a.getMeta("uiEvent") && !s;
                        if (!u && !l) return;
                        const c = r.doc.content.findDiffStart(o.doc.content),
                            p = r.doc.content.findDiffEnd(o.doc.content);
                        if ("number" !== typeof c || !p || c === p.b) return;
                        const d = o.tr,
                            f = z({
                                state: o,
                                transaction: d
                            });
                        return rt({
                            editor: e,
                            state: f,
                            from: Math.max(c - 1, 0),
                            to: p.b - 1,
                            rule: t
                        }) && d.steps.length ? d : void 0
                    }
                })))
            }
            class it {
                constructor(t, e) {
                    this.splittableMarks = [], this.editor = e, this.extensions = it.resolve(t), this.schema = K(this.extensions, e), this.extensions.forEach((t => {
                        var e;
                        this.editor.extensionStorage[t.name] = t.storage;
                        const n = {
                            name: t.name,
                            options: t.options,
                            storage: t.storage,
                            editor: this.editor,
                            type: G(t.name, this.schema)
                        };
                        if ("mark" === t.type) {
                            (null === (e = J($(t, "keepOnSplit", n))) || void 0 === e || e) && this.splittableMarks.push(t.name)
                        }
                        const r = $(t, "onBeforeCreate", n);
                        r && this.editor.on("beforeCreate", r);
                        const o = $(t, "onCreate", n);
                        o && this.editor.on("create", o);
                        const i = $(t, "onUpdate", n);
                        i && this.editor.on("update", i);
                        const s = $(t, "onSelectionUpdate", n);
                        s && this.editor.on("selectionUpdate", s);
                        const a = $(t, "onTransaction", n);
                        a && this.editor.on("transaction", a);
                        const u = $(t, "onFocus", n);
                        u && this.editor.on("focus", u);
                        const l = $(t, "onBlur", n);
                        l && this.editor.on("blur", l);
                        const c = $(t, "onDestroy", n);
                        c && this.editor.on("destroy", c)
                    }))
                }
                static resolve(t) {
                    const e = it.sort(it.flatten(t)),
                        n = function(t) {
                            const e = t.filter(((e, n) => t.indexOf(e) !== n));
                            return [...new Set(e)]
                        }(e.map((t => t.name)));
                    return n.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${n.map((t=>`'${t}'`)).join(", ")}]. This can lead to issues.`), e
                }
                static flatten(t) {
                    return t.map((t => {
                        const e = $(t, "addExtensions", {
                            name: t.name,
                            options: t.options,
                            storage: t.storage
                        });
                        return e ? [t, ...this.flatten(e())] : t
                    })).flat(10)
                }
                static sort(t) {
                    return t.sort(((t, e) => {
                        const n = $(t, "priority") || 100,
                            r = $(e, "priority") || 100;
                        return n > r ? -1 : n < r ? 1 : 0
                    }))
                }
                get commands() {
                    return this.extensions.reduce(((t, e) => {
                        const n = $(e, "addCommands", {
                            name: e.name,
                            options: e.options,
                            storage: e.storage,
                            editor: this.editor,
                            type: G(e.name, this.schema)
                        });
                        return n ? { ...t,
                            ...n()
                        } : t
                    }), {})
                }
                get plugins() {
                    const {
                        editor: t
                    } = this, e = it.sort([...this.extensions].reverse()), n = [], r = [], o = e.map((e => {
                        const o = {
                                name: e.name,
                                options: e.options,
                                storage: e.storage,
                                editor: t,
                                type: G(e.name, this.schema)
                            },
                            s = [],
                            a = $(e, "addKeyboardShortcuts", o);
                        let u = {};
                        if ("mark" === e.type && e.config.exitable && (u.ArrowRight = () => ie.handleExit({
                                editor: t,
                                mark: e
                            })), a) {
                            const e = Object.fromEntries(Object.entries(a()).map((([e, n]) => [e, () => n({
                                editor: t
                            })])));
                            u = { ...u,
                                ...e
                            }
                        }
                        const l = (0, i.h)(u);
                        s.push(l);
                        const c = $(e, "addInputRules", o);
                        X(e, t.options.enableInputRules) && c && n.push(...c());
                        const p = $(e, "addPasteRules", o);
                        X(e, t.options.enablePasteRules) && p && r.push(...p());
                        const d = $(e, "addProseMirrorPlugins", o);
                        if (d) {
                            const t = d();
                            s.push(...t)
                        }
                        return s
                    })).flat();
                    return [et({
                        editor: t,
                        rules: n
                    }), ...ot({
                        editor: t,
                        rules: r
                    }), ...o]
                }
                get attributes() {
                    return H(this.extensions)
                }
                get nodeViews() {
                    const {
                        editor: t
                    } = this, {
                        nodeExtensions: e
                    } = L(this.extensions);
                    return Object.fromEntries(e.filter((t => !!$(t, "addNodeView"))).map((e => {
                        const n = this.attributes.filter((t => t.type === e.name)),
                            r = {
                                name: e.name,
                                options: e.options,
                                storage: e.storage,
                                editor: t,
                                type: W(e.name, this.schema)
                            },
                            o = $(e, "addNodeView", r);
                        if (!o) return [];
                        return [e.name, (r, i, s, a) => {
                            const u = V(r, n);
                            return o()({
                                editor: t,
                                node: r,
                                getPos: s,
                                decorations: a,
                                HTMLAttributes: u,
                                extension: e
                            })
                        }]
                    })))
                }
            }

            function st(t) {
                return "Object" === function(t) {
                    return Object.prototype.toString.call(t).slice(8, -1)
                }(t) && (t.constructor === Object && Object.getPrototypeOf(t) === Object.prototype)
            }

            function at(t, e) {
                const n = { ...t
                };
                return st(t) && st(e) && Object.keys(e).forEach((r => {
                    st(e[r]) ? r in t ? n[r] = at(t[r], e[r]) : Object.assign(n, {
                        [r]: e[r]
                    }) : Object.assign(n, {
                        [r]: e[r]
                    })
                })), n
            }
            class ut {
                constructor(t = {}) {
                    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
                        name: this.name,
                        defaultOptions: {}
                    }, this.config = { ...this.config,
                        ...t
                    }, this.name = this.config.name, t.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = J($(this, "addOptions", {
                        name: this.name
                    }))), this.storage = J($(this, "addStorage", {
                        name: this.name,
                        options: this.options
                    })) || {}
                }
                static create(t = {}) {
                    return new ut(t)
                }
                configure(t = {}) {
                    const e = this.extend();
                    return e.options = at(this.options, t), e.storage = J($(e, "addStorage", {
                        name: e.name,
                        options: e.options
                    })), e
                }
                extend(t = {}) {
                    const e = new ut(t);
                    return e.parent = this, this.child = e, e.name = t.name ? t.name : e.parent.name, t.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${e.name}".`), e.options = J($(e, "addOptions", {
                        name: e.name
                    })), e.storage = J($(e, "addStorage", {
                        name: e.name,
                        options: e.options
                    })), e
                }
            }

            function lt(t, e, n) {
                const {
                    from: r,
                    to: o
                } = e, {
                    blockSeparator: i = "\n\n",
                    textSerializers: s = {}
                } = n || {};
                let a = "",
                    u = !0;
                return t.nodesBetween(r, o, ((t, n, l, c) => {
                    var p;
                    const d = null === s || void 0 === s ? void 0 : s[t.type.name];
                    d ? (t.isBlock && !u && (a += i, u = !0), l && (a += d({
                        node: t,
                        pos: n,
                        parent: l,
                        index: c,
                        range: e
                    }))) : t.isText ? (a += null === (p = null === t || void 0 === t ? void 0 : t.text) || void 0 === p ? void 0 : p.slice(Math.max(r, n) - n, o - n), u = !1) : t.isBlock && !u && (a += i, u = !0)
                })), a
            }

            function ct(t) {
                return Object.fromEntries(Object.entries(t.nodes).filter((([, t]) => t.spec.toText)).map((([t, e]) => [t, e.spec.toText])))
            }
            const pt = ut.create({
                name: "clipboardTextSerializer",
                addProseMirrorPlugins() {
                    return [new r.Sy({
                        key: new r.H$("clipboardTextSerializer"),
                        props: {
                            clipboardTextSerializer: () => {
                                const {
                                    editor: t
                                } = this, {
                                    state: e,
                                    schema: n
                                } = t, {
                                    doc: r,
                                    selection: o
                                } = e, {
                                    ranges: i
                                } = o, s = Math.min(...i.map((t => t.$from.pos))), a = Math.max(...i.map((t => t.$to.pos)));
                                return lt(r, {
                                    from: s,
                                    to: a
                                }, {
                                    textSerializers: ct(n)
                                })
                            }
                        }
                    })]
                }
            });

            function dt(t, e, n = {
                strict: !0
            }) {
                const r = Object.keys(e);
                return !r.length || r.every((r => n.strict ? e[r] === t[r] : Z(e[r]) ? e[r].test(t[r]) : e[r] === t[r]))
            }

            function ft(t, e, n = {}) {
                return t.find((t => t.type === e && dt(t.attrs, n)))
            }

            function ht(t, e, n = {}) {
                return !!ft(t, e, n)
            }

            function mt(t, e, n = {}) {
                if (!t || !e) return;
                let r = t.parent.childAfter(t.parentOffset);
                if (t.parentOffset === r.offset && 0 !== r.offset && (r = t.parent.childBefore(t.parentOffset)), !r.node) return;
                const o = ft([...r.node.marks], e, n);
                if (!o) return;
                let i = r.index,
                    s = t.start() + r.offset,
                    a = i + 1,
                    u = s + r.node.nodeSize;
                for (ft([...r.node.marks], e, n); i > 0 && o.isInSet(t.parent.child(i - 1).marks);) i -= 1, s -= t.parent.child(i).nodeSize;
                for (; a < t.parent.childCount && ht([...t.parent.child(a).marks], e, n);) u += t.parent.child(a).nodeSize, a += 1;
                return {
                    from: s,
                    to: u
                }
            }

            function gt(t, e) {
                if ("string" === typeof t) {
                    if (!e.marks[t]) throw Error(`There is no mark type named '${t}'. Maybe you forgot to add the extension?`);
                    return e.marks[t]
                }
                return t
            }

            function yt(t) {
                return t instanceof r.Bs
            }

            function vt(t = 0, e = 0, n = 0) {
                return Math.min(Math.max(t, e), n)
            }

            function bt(t, e = null) {
                if (!e) return null;
                const n = r.Y1.atStart(t),
                    o = r.Y1.atEnd(t);
                if ("start" === e || !0 === e) return n;
                if ("end" === e) return o;
                const i = n.from,
                    s = o.to;
                return "all" === e ? r.Bs.create(t, vt(0, i, s), vt(t.content.size, i, s)) : r.Bs.create(t, vt(e, i, s), vt(e, i, s))
            }

            function Dt() {
                return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document
            }

            function wt(t) {
                const e = `<body>${t}</body>`;
                return (new window.DOMParser).parseFromString(e, "text/html").body
            }

            function xt(t, e, n) {
                if (n = {
                        slice: !0,
                        parseOptions: {},
                        ...n
                    }, "object" === typeof t && null !== t) try {
                    return Array.isArray(t) && t.length > 0 ? s.HY.fromArray(t.map((t => e.nodeFromJSON(t)))) : e.nodeFromJSON(t)
                } catch (r) {
                    return console.warn("[tiptap warn]: Invalid content.", "Passed value:", t, "Error:", r), xt("", e, n)
                }
                if ("string" === typeof t) {
                    const r = s.aw.fromSchema(e);
                    return n.slice ? r.parseSlice(wt(t), n.parseOptions).content : r.parse(wt(t), n.parseOptions)
                }
                return xt("", e, n)
            }

            function kt() {
                return "undefined" !== typeof navigator && /Mac/.test(navigator.platform)
            }

            function Et(t, e, n = {}) {
                const {
                    from: r,
                    to: o,
                    empty: i
                } = t.selection, s = e ? W(e, t.schema) : null, a = [];
                t.doc.nodesBetween(r, o, ((t, e) => {
                    if (t.isText) return;
                    const n = Math.max(r, e),
                        i = Math.min(o, e + t.nodeSize);
                    a.push({
                        node: t,
                        from: n,
                        to: i
                    })
                }));
                const u = o - r,
                    l = a.filter((t => !s || s.name === t.node.type.name)).filter((t => dt(t.node.attrs, n, {
                        strict: !1
                    })));
                if (i) return !!l.length;
                return l.reduce(((t, e) => t + e.to - e.from), 0) >= u
            }

            function Ct(t, e) {
                return e.nodes[t] ? "node" : e.marks[t] ? "mark" : null
            }

            function St(t, e) {
                const n = "string" === typeof e ? [e] : e;
                return Object.keys(t).reduce(((e, r) => (n.includes(r) || (e[r] = t[r]), e)), {})
            }

            function At(t, e, n = {}) {
                return xt(t, e, {
                    slice: !1,
                    parseOptions: n
                })
            }

            function Ot(t, e) {
                const n = gt(e, t.schema),
                    {
                        from: r,
                        to: o,
                        empty: i
                    } = t.selection,
                    s = [];
                i ? (t.storedMarks && s.push(...t.storedMarks), s.push(...t.selection.$head.marks())) : t.doc.nodesBetween(r, o, (t => {
                    s.push(...t.marks)
                }));
                const a = s.find((t => t.type.name === n.name));
                return a ? { ...a.attrs
                } : {}
            }

            function Mt(t, e) {
                const n = new a.wx(t);
                return e.forEach((t => {
                    t.steps.forEach((t => {
                        n.step(t)
                    }))
                })), n
            }

            function Ft(t, e, n) {
                const r = [];
                return t.nodesBetween(e.from, e.to, ((t, e) => {
                    n(t) && r.push({
                        node: t,
                        pos: e
                    })
                })), r
            }

            function Tt(t) {
                return e => function(t, e) {
                    for (let n = t.depth; n > 0; n -= 1) {
                        const r = t.node(n);
                        if (e(r)) return {
                            pos: n > 0 ? t.before(n) : 0,
                            start: t.start(n),
                            depth: n,
                            node: r
                        }
                    }
                }(e.$from, t)
            }

            function Bt(t, e) {
                const n = s.PW.fromSchema(e).serializeFragment(t),
                    r = document.implementation.createHTMLDocument().createElement("div");
                return r.appendChild(n), r.innerHTML
            }

            function jt(t, e) {
                return lt(t, {
                    from: 0,
                    to: t.content.size
                }, e)
            }

            function Nt(t, e) {
                const n = Ct("string" === typeof e ? e : e.name, t.schema);
                return "node" === n ? function(t, e) {
                    const n = W(e, t.schema),
                        {
                            from: r,
                            to: o
                        } = t.selection,
                        i = [];
                    t.doc.nodesBetween(r, o, (t => {
                        i.push(t)
                    }));
                    const s = i.reverse().find((t => t.type.name === n.name));
                    return s ? { ...s.attrs
                    } : {}
                }(t, e) : "mark" === n ? Ot(t, e) : {}
            }

            function Rt(t) {
                const e = function(t, e = JSON.stringify) {
                    const n = {};
                    return t.filter((t => {
                        const r = e(t);
                        return !Object.prototype.hasOwnProperty.call(n, r) && (n[r] = !0)
                    }))
                }(t);
                return 1 === e.length ? e : e.filter(((t, n) => !e.filter(((t, e) => e !== n)).some((e => t.oldRange.from >= e.oldRange.from && t.oldRange.to <= e.oldRange.to && t.newRange.from >= e.newRange.from && t.newRange.to <= e.newRange.to))))
            }

            function Pt(t) {
                const {
                    mapping: e,
                    steps: n
                } = t, r = [];
                return e.maps.forEach(((t, o) => {
                    const i = [];
                    if (t.ranges.length) t.forEach(((t, e) => {
                        i.push({
                            from: t,
                            to: e
                        })
                    }));
                    else {
                        const {
                            from: t,
                            to: e
                        } = n[o];
                        if (void 0 === t || void 0 === e) return;
                        i.push({
                            from: t,
                            to: e
                        })
                    }
                    i.forEach((({
                        from: t,
                        to: n
                    }) => {
                        const i = e.slice(o).map(t, -1),
                            s = e.slice(o).map(n),
                            a = e.invert().map(i, -1),
                            u = e.invert().map(s);
                        r.push({
                            oldRange: {
                                from: a,
                                to: u
                            },
                            newRange: {
                                from: i,
                                to: s
                            }
                        })
                    }))
                })), Rt(r)
            }

            function zt(t, e, n) {
                const r = [];
                return t === e ? n.resolve(t).marks().forEach((e => {
                    const o = mt(n.resolve(t - 1), e.type);
                    o && r.push({
                        mark: e,
                        ...o
                    })
                })) : n.nodesBetween(t, e, ((t, e) => {
                    r.push(...t.marks.map((n => ({
                        from: e,
                        to: e + t.nodeSize,
                        mark: n
                    }))))
                })), r
            }

            function It(t, e, n) {
                return Object.fromEntries(Object.entries(n).filter((([n]) => {
                    const r = t.find((t => t.type === e && t.name === n));
                    return !!r && r.attribute.keepOnSplit
                })))
            }

            function $t(t, e, n = {}) {
                const {
                    empty: r,
                    ranges: o
                } = t.selection, i = e ? gt(e, t.schema) : null;
                if (r) return !!(t.storedMarks || t.selection.$from.marks()).filter((t => !i || i.name === t.type.name)).find((t => dt(t.attrs, n, {
                    strict: !1
                })));
                let s = 0;
                const a = [];
                if (o.forEach((({
                        $from: e,
                        $to: n
                    }) => {
                        const r = e.pos,
                            o = n.pos;
                        t.doc.nodesBetween(r, o, ((t, e) => {
                            if (!t.isText && !t.marks.length) return;
                            const n = Math.max(r, e),
                                i = Math.min(o, e + t.nodeSize);
                            s += i - n, a.push(...t.marks.map((t => ({
                                mark: t,
                                from: n,
                                to: i
                            }))))
                        }))
                    })), 0 === s) return !1;
                const u = a.filter((t => !i || i.name === t.mark.type.name)).filter((t => dt(t.mark.attrs, n, {
                        strict: !1
                    }))).reduce(((t, e) => t + e.to - e.from), 0),
                    l = a.filter((t => !i || t.mark.type !== i && t.mark.type.excludes(i))).reduce(((t, e) => t + e.to - e.from), 0);
                return (u > 0 ? u + l : u) >= s
            }

            function Lt(t, e) {
                const {
                    nodeExtensions: n
                } = L(e), r = n.find((e => e.name === t));
                if (!r) return !1;
                const o = J($(r, "group", {
                    name: r.name,
                    options: r.options,
                    storage: r.storage
                }));
                return "string" === typeof o && o.split(" ").includes("list")
            }

            function Ht(t) {
                return t instanceof r.qv
            }

            function Wt(t, e, n) {
                const r = t.state.doc.content.size,
                    o = vt(e, 0, r),
                    i = vt(n, 0, r),
                    s = t.coordsAtPos(o),
                    a = t.coordsAtPos(i, -1),
                    u = Math.min(s.top, a.top),
                    l = Math.max(s.bottom, a.bottom),
                    c = Math.min(s.left, a.left),
                    p = Math.max(s.right, a.right),
                    d = {
                        top: u,
                        bottom: l,
                        left: c,
                        right: p,
                        width: p - c,
                        height: l - u,
                        x: c,
                        y: u
                    };
                return { ...d,
                    toJSON: () => d
                }
            }

            function _t(t, e) {
                const n = t.storedMarks || t.selection.$to.parentOffset && t.selection.$from.marks();
                if (n) {
                    const r = n.filter((t => null === e || void 0 === e ? void 0 : e.includes(t.type.name)));
                    t.tr.ensureMarks(r)
                }
            }
            const Vt = (t, e) => {
                    const n = Tt((t => t.type === e))(t.selection);
                    if (!n) return !0;
                    const r = t.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
                    if (void 0 === r) return !0;
                    const o = t.doc.nodeAt(r);
                    return n.node.type !== (null === o || void 0 === o ? void 0 : o.type) || !(0, a.Mn)(t.doc, n.pos) || (t.join(n.pos), !0)
                },
                qt = (t, e) => {
                    const n = Tt((t => t.type === e))(t.selection);
                    if (!n) return !0;
                    const r = t.doc.resolve(n.start).after(n.depth);
                    if (void 0 === r) return !0;
                    const o = t.doc.nodeAt(r);
                    return n.node.type !== (null === o || void 0 === o ? void 0 : o.type) || !(0, a.Mn)(t.doc, r) || (t.join(r), !0)
                };
            var Jt = Object.freeze({
                __proto__: null,
                blur: () => ({
                    editor: t,
                    view: e
                }) => (requestAnimationFrame((() => {
                    var n;
                    t.isDestroyed || (e.dom.blur(), null === (n = null === window || void 0 === window ? void 0 : window.getSelection()) || void 0 === n || n.removeAllRanges())
                })), !0),
                clearContent: (t = !1) => ({
                    commands: e
                }) => e.setContent("", t),
                clearNodes: () => ({
                    state: t,
                    tr: e,
                    dispatch: n
                }) => {
                    const {
                        selection: r
                    } = e, {
                        ranges: o
                    } = r;
                    return !n || (o.forEach((({
                        $from: n,
                        $to: r
                    }) => {
                        t.doc.nodesBetween(n.pos, r.pos, ((t, n) => {
                            if (t.type.isText) return;
                            const {
                                doc: r,
                                mapping: o
                            } = e, i = r.resolve(o.map(n)), s = r.resolve(o.map(n + t.nodeSize)), u = i.blockRange(s);
                            if (!u) return;
                            const l = (0, a.k9)(u);
                            if (t.type.isTextblock) {
                                const {
                                    defaultType: t
                                } = i.parent.contentMatchAt(i.index());
                                e.setNodeMarkup(u.start, t)
                            }(l || 0 === l) && e.lift(u, l)
                        }))
                    })), !0)
                },
                command: t => e => t(e),
                createParagraphNear: () => ({
                    state: t,
                    dispatch: e
                }) => w(t, e),
                cut: (t, e) => ({
                    editor: n,
                    tr: o
                }) => {
                    const {
                        state: i
                    } = n, s = i.doc.slice(t.from, t.to);
                    o.deleteRange(t.from, t.to);
                    const a = o.mapping.map(e);
                    return o.insert(a, s.content), o.setSelection(new r.Bs(o.doc.resolve(a - 1))), !0
                },
                deleteCurrentNode: () => ({
                    tr: t,
                    dispatch: e
                }) => {
                    const {
                        selection: n
                    } = t, r = n.$anchor.node();
                    if (r.content.size > 0) return !1;
                    const o = t.selection.$anchor;
                    for (let i = o.depth; i > 0; i -= 1) {
                        if (o.node(i).type === r.type) {
                            if (e) {
                                const e = o.before(i),
                                    n = o.after(i);
                                t.delete(e, n).scrollIntoView()
                            }
                            return !0
                        }
                    }
                    return !1
                },
                deleteNode: t => ({
                    tr: e,
                    state: n,
                    dispatch: r
                }) => {
                    const o = W(t, n.schema),
                        i = e.selection.$anchor;
                    for (let t = i.depth; t > 0; t -= 1) {
                        if (i.node(t).type === o) {
                            if (r) {
                                const n = i.before(t),
                                    r = i.after(t);
                                e.delete(n, r).scrollIntoView()
                            }
                            return !0
                        }
                    }
                    return !1
                },
                deleteRange: t => ({
                    tr: e,
                    dispatch: n
                }) => {
                    const {
                        from: r,
                        to: o
                    } = t;
                    return n && e.delete(r, o), !0
                },
                deleteSelection: () => ({
                    state: t,
                    dispatch: e
                }) => u(t, e),
                enter: () => ({
                    commands: t
                }) => t.keyboardShortcut("Enter"),
                exitCode: () => ({
                    state: t,
                    dispatch: e
                }) => D(t, e),
                extendMarkRange: (t, e = {}) => ({
                    tr: n,
                    state: o,
                    dispatch: i
                }) => {
                    const s = gt(t, o.schema),
                        {
                            doc: a,
                            selection: u
                        } = n,
                        {
                            $from: l,
                            from: c,
                            to: p
                        } = u;
                    if (i) {
                        const t = mt(l, s, e);
                        if (t && t.from <= c && t.to >= p) {
                            const e = r.Bs.create(a, t.from, t.to);
                            n.setSelection(e)
                        }
                    }
                    return !0
                },
                first: t => e => {
                    const n = "function" === typeof t ? t(e) : t;
                    for (let t = 0; t < n.length; t += 1)
                        if (n[t](e)) return !0;
                    return !1
                },
                focus: (t = null, e = {}) => ({
                    editor: n,
                    view: r,
                    tr: o,
                    dispatch: i
                }) => {
                    e = {
                        scrollIntoView: !0,
                        ...e
                    };
                    const s = () => {
                        Dt() && r.dom.focus(), requestAnimationFrame((() => {
                            n.isDestroyed || (r.focus(), (null === e || void 0 === e ? void 0 : e.scrollIntoView) && n.commands.scrollIntoView())
                        }))
                    };
                    if (r.hasFocus() && null === t || !1 === t) return !0;
                    if (i && null === t && !yt(n.state.selection)) return s(), !0;
                    const a = bt(o.doc, t) || n.state.selection,
                        u = n.state.selection.eq(a);
                    return i && (u || o.setSelection(a), u && o.storedMarks && o.setStoredMarks(o.storedMarks), s()), !0
                },
                forEach: (t, e) => n => t.every(((t, r) => e(t, { ...n,
                    index: r
                }))),
                insertContent: (t, e) => ({
                    tr: n,
                    commands: r
                }) => r.insertContentAt({
                    from: n.selection.from,
                    to: n.selection.to
                }, t, e),
                insertContentAt: (t, e, n) => ({
                    tr: o,
                    dispatch: i,
                    editor: s
                }) => {
                    if (i) {
                        n = {
                            parseOptions: {},
                            updateSelection: !0,
                            ...n
                        };
                        const i = xt(e, s.schema, {
                            parseOptions: {
                                preserveWhitespace: "full",
                                ...n.parseOptions
                            }
                        });
                        if ("<>" === i.toString()) return !0;
                        let {
                            from: u,
                            to: l
                        } = "number" === typeof t ? {
                            from: t,
                            to: t
                        } : {
                            from: t.from,
                            to: t.to
                        }, c = !0, p = !0;
                        if ((i.toString().startsWith("<") ? i : [i]).forEach((t => {
                                t.check(), c = !!c && (t.isText && 0 === t.marks.length), p = !!p && t.isBlock
                            })), u === l && p) {
                            const {
                                parent: t
                            } = o.doc.resolve(u);
                            t.isTextblock && !t.type.spec.code && !t.childCount && (u -= 1, l += 1)
                        }
                        c ? Array.isArray(e) ? o.insertText(e.map((t => t.text || "")).join(""), u, l) : "object" === typeof e && e && e.text ? o.insertText(e.text, u, l) : o.insertText(e, u, l) : o.replaceWith(u, l, i), n.updateSelection && function(t, e, n) {
                            const o = t.steps.length - 1;
                            if (o < e) return;
                            const i = t.steps[o];
                            if (!(i instanceof a.Pu || i instanceof a.FC)) return;
                            const s = t.mapping.maps[o];
                            let u = 0;
                            s.forEach(((t, e, n, r) => {
                                0 === u && (u = r)
                            })), t.setSelection(r.Y1.near(t.doc.resolve(u), n))
                        }(o, o.steps.length - 1, -1)
                    }
                    return !0
                },
                joinUp: () => ({
                    state: t,
                    dispatch: e
                }) => ((t, e) => {
                    let n, o = t.selection,
                        i = o instanceof r.qv;
                    if (i) {
                        if (o.node.isTextblock || !(0, a.Mn)(t.doc, o.from)) return !1;
                        n = o.from
                    } else if (n = (0, a.GJ)(t.doc, o.from, -1), null == n) return !1;
                    if (e) {
                        let o = t.tr.join(n);
                        i && o.setSelection(r.qv.create(o.doc, n - t.doc.resolve(n).nodeBefore.nodeSize)), e(o.scrollIntoView())
                    }
                    return !0
                })(t, e),
                joinDown: () => ({
                    state: t,
                    dispatch: e
                }) => ((t, e) => {
                    let n, o = t.selection;
                    if (o instanceof r.qv) {
                        if (o.node.isTextblock || !(0, a.Mn)(t.doc, o.to)) return !1;
                        n = o.to
                    } else if (n = (0, a.GJ)(t.doc, o.to, 1), null == n) return !1;
                    return e && e(t.tr.join(n).scrollIntoView()), !0
                })(t, e),
                joinBackward: () => ({
                    state: t,
                    dispatch: e
                }) => c(t, e),
                joinForward: () => ({
                    state: t,
                    dispatch: e
                }) => m(t, e),
                joinItemBackward: () => ({
                    tr: t,
                    state: e,
                    dispatch: n
                }) => {
                    try {
                        const r = (0, a.GJ)(e.doc, e.selection.$from.pos, -1);
                        return null !== r && void 0 !== r && (t.join(r, 2), n && n(t), !0)
                    } catch {
                        return !1
                    }
                },
                joinItemForward: () => ({
                    state: t,
                    dispatch: e,
                    tr: n
                }) => {
                    try {
                        const r = (0, a.GJ)(t.doc, t.selection.$from.pos, 1);
                        return null !== r && void 0 !== r && (n.join(r, 2), e && e(n), !0)
                    } catch (r) {
                        return !1
                    }
                },
                keyboardShortcut: t => ({
                    editor: e,
                    view: n,
                    tr: r,
                    dispatch: o
                }) => {
                    const i = function(t) {
                            const e = t.split(/-(?!$)/);
                            let n, r, o, i, s = e[e.length - 1];
                            "Space" === s && (s = " ");
                            for (let a = 0; a < e.length - 1; a += 1) {
                                const t = e[a];
                                if (/^(cmd|meta|m)$/i.test(t)) i = !0;
                                else if (/^a(lt)?$/i.test(t)) n = !0;
                                else if (/^(c|ctrl|control)$/i.test(t)) r = !0;
                                else if (/^s(hift)?$/i.test(t)) o = !0;
                                else {
                                    if (!/^mod$/i.test(t)) throw new Error(`Unrecognized modifier name: ${t}`);
                                    Dt() || kt() ? i = !0 : r = !0
                                }
                            }
                            return n && (s = `Alt-${s}`), r && (s = `Ctrl-${s}`), i && (s = `Meta-${s}`), o && (s = `Shift-${s}`), s
                        }(t).split(/-(?!$)/),
                        s = i.find((t => !["Alt", "Ctrl", "Meta", "Shift"].includes(t))),
                        a = new KeyboardEvent("keydown", {
                            key: "Space" === s ? " " : s,
                            altKey: i.includes("Alt"),
                            ctrlKey: i.includes("Ctrl"),
                            metaKey: i.includes("Meta"),
                            shiftKey: i.includes("Shift"),
                            bubbles: !0,
                            cancelable: !0
                        }),
                        u = e.captureTransaction((() => {
                            n.someProp("handleKeyDown", (t => t(n, a)))
                        }));
                    return null === u || void 0 === u || u.steps.forEach((t => {
                        const e = t.map(r.mapping);
                        e && o && r.maybeStep(e)
                    })), !0
                },
                lift: (t, e = {}) => ({
                    state: n,
                    dispatch: r
                }) => !!Et(n, W(t, n.schema), e) && ((t, e) => {
                    let {
                        $from: n,
                        $to: r
                    } = t.selection, o = n.blockRange(r), i = o && (0, a.k9)(o);
                    return null != i && (e && e(t.tr.lift(o, i).scrollIntoView()), !0)
                })(n, r),
                liftEmptyBlock: () => ({
                    state: t,
                    dispatch: e
                }) => x(t, e),
                liftListItem: t => ({
                    state: e,
                    dispatch: n
                }) => P(W(t, e.schema))(e, n),
                newlineInCode: () => ({
                    state: t,
                    dispatch: e
                }) => v(t, e),
                resetAttributes: (t, e) => ({
                    tr: n,
                    state: r,
                    dispatch: o
                }) => {
                    let i = null,
                        s = null;
                    const a = Ct("string" === typeof t ? t : t.name, r.schema);
                    return !!a && ("node" === a && (i = W(t, r.schema)), "mark" === a && (s = gt(t, r.schema)), o && n.selection.ranges.forEach((t => {
                        r.doc.nodesBetween(t.$from.pos, t.$to.pos, ((t, r) => {
                            i && i === t.type && n.setNodeMarkup(r, void 0, St(t.attrs, e)), s && t.marks.length && t.marks.forEach((o => {
                                s === o.type && n.addMark(r, r + t.nodeSize, s.create(St(o.attrs, e)))
                            }))
                        }))
                    })), !0)
                },
                scrollIntoView: () => ({
                    tr: t,
                    dispatch: e
                }) => (e && t.scrollIntoView(), !0),
                selectAll: () => ({
                    tr: t,
                    commands: e
                }) => e.setTextSelection({
                    from: 0,
                    to: t.doc.content.size
                }),
                selectNodeBackward: () => ({
                    state: t,
                    dispatch: e
                }) => d(t, e),
                selectNodeForward: () => ({
                    state: t,
                    dispatch: e
                }) => g(t, e),
                selectParentNode: () => ({
                    state: t,
                    dispatch: e
                }) => ((t, e) => {
                    let n, {
                            $from: o,
                            to: i
                        } = t.selection,
                        s = o.sharedDepth(i);
                    return 0 != s && (n = o.before(s), e && e(t.tr.setSelection(r.qv.create(t.doc, n))), !0)
                })(t, e),
                selectTextblockEnd: () => ({
                    state: t,
                    dispatch: e
                }) => O(t, e),
                selectTextblockStart: () => ({
                    state: t,
                    dispatch: e
                }) => A(t, e),
                setContent: (t, e = !1, n = {}) => ({
                    tr: r,
                    editor: o,
                    dispatch: i
                }) => {
                    const {
                        doc: s
                    } = r, a = At(t, o.schema, n);
                    return i && r.replaceWith(0, s.content.size, a).setMeta("preventUpdate", !e), !0
                },
                setMark: (t, e = {}) => ({
                    tr: n,
                    state: r,
                    dispatch: o
                }) => {
                    const {
                        selection: i
                    } = n, {
                        empty: s,
                        ranges: a
                    } = i, u = gt(t, r.schema);
                    if (o)
                        if (s) {
                            const t = Ot(r, u);
                            n.addStoredMark(u.create({ ...t,
                                ...e
                            }))
                        } else a.forEach((t => {
                            const o = t.$from.pos,
                                i = t.$to.pos;
                            r.doc.nodesBetween(o, i, ((t, r) => {
                                const s = Math.max(r, o),
                                    a = Math.min(r + t.nodeSize, i);
                                t.marks.find((t => t.type === u)) ? t.marks.forEach((t => {
                                    u === t.type && n.addMark(s, a, u.create({ ...t.attrs,
                                        ...e
                                    }))
                                })) : n.addMark(s, a, u.create(e))
                            }))
                        }));
                    return function(t, e, n) {
                        var r;
                        const {
                            selection: o
                        } = e;
                        let i = null;
                        if (yt(o) && (i = o.$cursor), i) {
                            const e = null !== (r = t.storedMarks) && void 0 !== r ? r : i.marks();
                            return !!n.isInSet(e) || !e.some((t => t.type.excludes(n)))
                        }
                        const {
                            ranges: s
                        } = o;
                        return s.some((({
                            $from: e,
                            $to: r
                        }) => {
                            let o = 0 === e.depth && t.doc.inlineContent && t.doc.type.allowsMarkType(n);
                            return t.doc.nodesBetween(e.pos, r.pos, ((t, e, r) => {
                                if (o) return !1;
                                if (t.isInline) {
                                    const e = !r || r.type.allowsMarkType(n),
                                        i = !!n.isInSet(t.marks) || !t.marks.some((t => t.type.excludes(n)));
                                    o = e && i
                                }
                                return !o
                            })), o
                        }))
                    }(r, n, u)
                },
                setMeta: (t, e) => ({
                    tr: n
                }) => (n.setMeta(t, e), !0),
                setNode: (t, e = {}) => ({
                    state: n,
                    dispatch: r,
                    chain: o
                }) => {
                    const i = W(t, n.schema);
                    return i.isTextblock ? o().command((({
                        commands: t
                    }) => !!M(i, e)(n) || t.clearNodes())).command((({
                        state: t
                    }) => M(i, e)(t, r))).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1)
                },
                setNodeSelection: t => ({
                    tr: e,
                    dispatch: n
                }) => {
                    if (n) {
                        const {
                            doc: n
                        } = e, o = vt(t, 0, n.content.size), i = r.qv.create(n, o);
                        e.setSelection(i)
                    }
                    return !0
                },
                setTextSelection: t => ({
                    tr: e,
                    dispatch: n
                }) => {
                    if (n) {
                        const {
                            doc: n
                        } = e, {
                            from: o,
                            to: i
                        } = "number" === typeof t ? {
                            from: t,
                            to: t
                        } : t, s = r.Bs.atStart(n).from, a = r.Bs.atEnd(n).to, u = vt(o, s, a), l = vt(i, s, a), c = r.Bs.create(n, u, l);
                        e.setSelection(c)
                    }
                    return !0
                },
                sinkListItem: t => ({
                    state: e,
                    dispatch: n
                }) => {
                    const r = W(t, e.schema);
                    return (o = r, function(t, e) {
                        let {
                            $from: n,
                            $to: r
                        } = t.selection, i = n.blockRange(r, (t => t.childCount > 0 && t.firstChild.type == o));
                        if (!i) return !1;
                        let u = i.startIndex;
                        if (0 == u) return !1;
                        let l = i.parent,
                            c = l.child(u - 1);
                        if (c.type != o) return !1;
                        if (e) {
                            let n = c.lastChild && c.lastChild.type == l.type,
                                r = s.HY.from(n ? o.create() : null),
                                u = new s.p2(s.HY.from(o.create(null, s.HY.from(l.type.create(null, r)))), n ? 3 : 1, 0),
                                p = i.start,
                                d = i.end;
                            e(t.tr.step(new a.FC(p - (n ? 3 : 1), d, p, d, u, 1, !0)).scrollIntoView())
                        }
                        return !0
                    })(e, n);
                    var o
                },
                splitBlock: ({
                    keepMarks: t = !0
                } = {}) => ({
                    tr: e,
                    state: n,
                    dispatch: o,
                    editor: i
                }) => {
                    const {
                        selection: s,
                        doc: u
                    } = e, {
                        $from: l,
                        $to: c
                    } = s, p = It(i.extensionManager.attributes, l.node().type.name, l.node().attrs);
                    if (s instanceof r.qv && s.node.isBlock) return !(!l.parentOffset || !(0, a.Ax)(u, l.pos)) && (o && (t && _t(n, i.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
                    if (!l.parent.isBlock) return !1;
                    if (o) {
                        const o = c.parentOffset === c.parent.content.size;
                        s instanceof r.Bs && e.deleteSelection();
                        const u = 0 === l.depth ? void 0 : function(t) {
                            for (let e = 0; e < t.edgeCount; e += 1) {
                                const {
                                    type: n
                                } = t.edge(e);
                                if (n.isTextblock && !n.hasRequiredAttrs()) return n
                            }
                            return null
                        }(l.node(-1).contentMatchAt(l.indexAfter(-1)));
                        let d = o && u ? [{
                                type: u,
                                attrs: p
                            }] : void 0,
                            f = (0, a.Ax)(e.doc, e.mapping.map(l.pos), 1, d);
                        if (d || f || !(0, a.Ax)(e.doc, e.mapping.map(l.pos), 1, u ? [{
                                type: u
                            }] : void 0) || (f = !0, d = u ? [{
                                type: u,
                                attrs: p
                            }] : void 0), f && (e.split(e.mapping.map(l.pos), 1, d), u && !o && !l.parentOffset && l.parent.type !== u)) {
                            const t = e.mapping.map(l.before()),
                                n = e.doc.resolve(t);
                            l.node(-1).canReplaceWith(n.index(), n.index() + 1, u) && e.setNodeMarkup(e.mapping.map(l.before()), u)
                        }
                        t && _t(n, i.extensionManager.splittableMarks), e.scrollIntoView()
                    }
                    return !0
                },
                splitListItem: t => ({
                    tr: e,
                    state: n,
                    dispatch: o,
                    editor: i
                }) => {
                    var u;
                    const l = W(t, n.schema),
                        {
                            $from: c,
                            $to: p
                        } = n.selection,
                        d = n.selection.node;
                    if (d && d.isBlock || c.depth < 2 || !c.sameParent(p)) return !1;
                    const f = c.node(-1);
                    if (f.type !== l) return !1;
                    const h = i.extensionManager.attributes;
                    if (0 === c.parent.content.size && c.node(-1).childCount === c.indexAfter(-1)) {
                        if (2 === c.depth || c.node(-3).type !== l || c.index(-2) !== c.node(-2).childCount - 1) return !1;
                        if (o) {
                            let t = s.HY.empty;
                            const n = c.index(-1) ? 1 : c.index(-2) ? 2 : 3;
                            for (let e = c.depth - n; e >= c.depth - 3; e -= 1) t = s.HY.from(c.node(e).copy(t));
                            const o = c.indexAfter(-1) < c.node(-2).childCount ? 1 : c.indexAfter(-2) < c.node(-3).childCount ? 2 : 3,
                                i = It(h, c.node().type.name, c.node().attrs),
                                a = (null === (u = l.contentMatch.defaultType) || void 0 === u ? void 0 : u.createAndFill(i)) || void 0;
                            t = t.append(s.HY.from(l.createAndFill(null, a) || void 0));
                            const p = c.before(c.depth - (n - 1));
                            e.replace(p, c.after(-o), new s.p2(t, 4 - n, 0));
                            let d = -1;
                            e.doc.nodesBetween(p, e.doc.content.size, ((t, e) => {
                                if (d > -1) return !1;
                                t.isTextblock && 0 === t.content.size && (d = e + 1)
                            })), d > -1 && e.setSelection(r.Bs.near(e.doc.resolve(d))), e.scrollIntoView()
                        }
                        return !0
                    }
                    const m = p.pos === c.end() ? f.contentMatchAt(0).defaultType : null,
                        g = It(h, f.type.name, f.attrs),
                        y = It(h, c.node().type.name, c.node().attrs);
                    e.delete(c.pos, p.pos);
                    const v = m ? [{
                        type: l,
                        attrs: g
                    }, {
                        type: m,
                        attrs: y
                    }] : [{
                        type: l,
                        attrs: g
                    }];
                    if (!(0, a.Ax)(e.doc, c.pos, 2)) return !1;
                    if (o) {
                        const {
                            selection: t,
                            storedMarks: r
                        } = n, {
                            splittableMarks: s
                        } = i.extensionManager, a = r || t.$to.parentOffset && t.$from.marks();
                        if (e.split(c.pos, 2, v).scrollIntoView(), !a || !o) return !0;
                        const u = a.filter((t => s.includes(t.type.name)));
                        e.ensureMarks(u)
                    }
                    return !0
                },
                toggleList: (t, e, n, r = {}) => ({
                    editor: o,
                    tr: i,
                    state: s,
                    dispatch: a,
                    chain: u,
                    commands: l,
                    can: c
                }) => {
                    const {
                        extensions: p,
                        splittableMarks: d
                    } = o.extensionManager, f = W(t, s.schema), h = W(e, s.schema), {
                        selection: m,
                        storedMarks: g
                    } = s, {
                        $from: y,
                        $to: v
                    } = m, b = y.blockRange(v), D = g || m.$to.parentOffset && m.$from.marks();
                    if (!b) return !1;
                    const w = Tt((t => Lt(t.type.name, p)))(m);
                    if (b.depth >= 1 && w && b.depth - w.depth <= 1) {
                        if (w.node.type === f) return l.liftListItem(h);
                        if (Lt(w.node.type.name, p) && f.validContent(w.node.content) && a) return u().command((() => (i.setNodeMarkup(w.pos, f), !0))).command((() => Vt(i, f))).command((() => qt(i, f))).run()
                    }
                    return n && D && a ? u().command((() => {
                        const t = c().wrapInList(f, r),
                            e = D.filter((t => d.includes(t.type.name)));
                        return i.ensureMarks(e), !!t || l.clearNodes()
                    })).wrapInList(f, r).command((() => Vt(i, f))).command((() => qt(i, f))).run() : u().command((() => !!c().wrapInList(f, r) || l.clearNodes())).wrapInList(f, r).command((() => Vt(i, f))).command((() => qt(i, f))).run()
                },
                toggleMark: (t, e = {}, n = {}) => ({
                    state: r,
                    commands: o
                }) => {
                    const {
                        extendEmptyMarkRange: i = !1
                    } = n, s = gt(t, r.schema);
                    return $t(r, s, e) ? o.unsetMark(s, {
                        extendEmptyMarkRange: i
                    }) : o.setMark(s, e)
                },
                toggleNode: (t, e, n = {}) => ({
                    state: r,
                    commands: o
                }) => {
                    const i = W(t, r.schema),
                        s = W(e, r.schema);
                    return Et(r, i, n) ? o.setNode(s) : o.setNode(i, n)
                },
                toggleWrap: (t, e = {}) => ({
                    state: n,
                    commands: r
                }) => {
                    const o = W(t, n.schema);
                    return Et(n, o, e) ? r.lift(o) : r.wrapIn(o, e)
                },
                undoInputRule: () => ({
                    state: t,
                    dispatch: e
                }) => {
                    const n = t.plugins;
                    for (let r = 0; r < n.length; r += 1) {
                        const o = n[r];
                        let i;
                        if (o.spec.isInputRules && (i = o.getState(t))) {
                            if (e) {
                                const e = t.tr,
                                    n = i.transform;
                                for (let t = n.steps.length - 1; t >= 0; t -= 1) e.step(n.steps[t].invert(n.docs[t]));
                                if (i.text) {
                                    const n = e.doc.resolve(i.from).marks();
                                    e.replaceWith(i.from, i.to, t.schema.text(i.text, n))
                                } else e.delete(i.from, i.to)
                            }
                            return !0
                        }
                    }
                    return !1
                },
                unsetAllMarks: () => ({
                    tr: t,
                    dispatch: e
                }) => {
                    const {
                        selection: n
                    } = t, {
                        empty: r,
                        ranges: o
                    } = n;
                    return r || e && o.forEach((e => {
                        t.removeMark(e.$from.pos, e.$to.pos)
                    })), !0
                },
                unsetMark: (t, e = {}) => ({
                    tr: n,
                    state: r,
                    dispatch: o
                }) => {
                    var i;
                    const {
                        extendEmptyMarkRange: s = !1
                    } = e, {
                        selection: a
                    } = n, u = gt(t, r.schema), {
                        $from: l,
                        empty: c,
                        ranges: p
                    } = a;
                    if (!o) return !0;
                    if (c && s) {
                        let {
                            from: t,
                            to: e
                        } = a;
                        const r = null === (i = l.marks().find((t => t.type === u))) || void 0 === i ? void 0 : i.attrs,
                            o = mt(l, u, r);
                        o && (t = o.from, e = o.to), n.removeMark(t, e, u)
                    } else p.forEach((t => {
                        n.removeMark(t.$from.pos, t.$to.pos, u)
                    }));
                    return n.removeStoredMark(u), !0
                },
                updateAttributes: (t, e = {}) => ({
                    tr: n,
                    state: r,
                    dispatch: o
                }) => {
                    let i = null,
                        s = null;
                    const a = Ct("string" === typeof t ? t : t.name, r.schema);
                    return !!a && ("node" === a && (i = W(t, r.schema)), "mark" === a && (s = gt(t, r.schema)), o && n.selection.ranges.forEach((t => {
                        const o = t.$from.pos,
                            a = t.$to.pos;
                        r.doc.nodesBetween(o, a, ((t, r) => {
                            i && i === t.type && n.setNodeMarkup(r, void 0, { ...t.attrs,
                                ...e
                            }), s && t.marks.length && t.marks.forEach((i => {
                                if (s === i.type) {
                                    const u = Math.max(r, o),
                                        l = Math.min(r + t.nodeSize, a);
                                    n.addMark(u, l, s.create({ ...i.attrs,
                                        ...e
                                    }))
                                }
                            }))
                        }))
                    })), !0)
                },
                wrapIn: (t, e = {}) => ({
                    state: n,
                    dispatch: r
                }) => function(t, e = null) {
                    return function(n, r) {
                        let {
                            $from: o,
                            $to: i
                        } = n.selection, s = o.blockRange(i), u = s && (0, a.nd)(s, t, e);
                        return !!u && (r && r(n.tr.wrap(s, u).scrollIntoView()), !0)
                    }
                }(W(t, n.schema), e)(n, r),
                wrapInList: (t, e = {}) => ({
                    state: n,
                    dispatch: r
                }) => R(W(t, n.schema), e)(n, r)
            });
            const Yt = ut.create({
                    name: "commands",
                    addCommands: () => ({ ...Jt
                    })
                }),
                Ut = ut.create({
                    name: "editable",
                    addProseMirrorPlugins() {
                        return [new r.Sy({
                            key: new r.H$("editable"),
                            props: {
                                editable: () => this.editor.options.editable
                            }
                        })]
                    }
                }),
                Kt = ut.create({
                    name: "focusEvents",
                    addProseMirrorPlugins() {
                        const {
                            editor: t
                        } = this;
                        return [new r.Sy({
                            key: new r.H$("focusEvents"),
                            props: {
                                handleDOMEvents: {
                                    focus: (e, n) => {
                                        t.isFocused = !0;
                                        const r = t.state.tr.setMeta("focus", {
                                            event: n
                                        }).setMeta("addToHistory", !1);
                                        return e.dispatch(r), !1
                                    },
                                    blur: (e, n) => {
                                        t.isFocused = !1;
                                        const r = t.state.tr.setMeta("blur", {
                                            event: n
                                        }).setMeta("addToHistory", !1);
                                        return e.dispatch(r), !1
                                    }
                                }
                            }
                        })]
                    }
                }),
                Gt = ut.create({
                    name: "keymap",
                    addKeyboardShortcuts() {
                        const t = () => this.editor.commands.first((({
                                commands: t
                            }) => [() => t.undoInputRule(), () => t.command((({
                                tr: e
                            }) => {
                                const {
                                    selection: n,
                                    doc: o
                                } = e, {
                                    empty: i,
                                    $anchor: s
                                } = n, {
                                    pos: a,
                                    parent: u
                                } = s, l = s.parent.isTextblock ? e.doc.resolve(a - 1) : s, c = l.parent.type.spec.isolating, p = s.pos - s.parentOffset, d = c && 1 === l.parent.childCount ? p === s.pos : r.Y1.atStart(o).from === a;
                                return !(!(i && d && u.type.isTextblock) || u.textContent.length) && t.clearNodes()
                            })), () => t.deleteSelection(), () => t.joinBackward(), () => t.selectNodeBackward()])),
                            e = () => this.editor.commands.first((({
                                commands: t
                            }) => [() => t.deleteSelection(), () => t.deleteCurrentNode(), () => t.joinForward(), () => t.selectNodeForward()])),
                            n = {
                                Enter: () => this.editor.commands.first((({
                                    commands: t
                                }) => [() => t.newlineInCode(), () => t.createParagraphNear(), () => t.liftEmptyBlock(), () => t.splitBlock()])),
                                "Mod-Enter": () => this.editor.commands.exitCode(),
                                Backspace: t,
                                "Mod-Backspace": t,
                                "Shift-Backspace": t,
                                Delete: e,
                                "Mod-Delete": e,
                                "Mod-a": () => this.editor.commands.selectAll()
                            },
                            o = { ...n
                            },
                            i = { ...n,
                                "Ctrl-h": t,
                                "Alt-Backspace": t,
                                "Ctrl-d": e,
                                "Ctrl-Alt-Backspace": e,
                                "Alt-Delete": e,
                                "Alt-d": e,
                                "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
                                "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
                            };
                        return Dt() || kt() ? i : o
                    },
                    addProseMirrorPlugins() {
                        return [new r.Sy({
                            key: new r.H$("clearDocument"),
                            appendTransaction: (t, e, n) => {
                                if (!(t.some((t => t.docChanged)) && !e.doc.eq(n.doc))) return;
                                const {
                                    empty: o,
                                    from: i,
                                    to: s
                                } = e.selection, a = r.Y1.atStart(e.doc).from, u = r.Y1.atEnd(e.doc).to;
                                if (o || !(i === a && s === u)) return;
                                if (!(0 === n.doc.textBetween(0, n.doc.content.size, " ", " ").length)) return;
                                const l = n.tr,
                                    c = z({
                                        state: n,
                                        transaction: l
                                    }),
                                    {
                                        commands: p
                                    } = new I({
                                        editor: this.editor,
                                        state: c
                                    });
                                return p.clearNodes(), l.steps.length ? l : void 0
                            }
                        })]
                    }
                }),
                Xt = ut.create({
                    name: "tabindex",
                    addProseMirrorPlugins() {
                        return [new r.Sy({
                            key: new r.H$("tabindex"),
                            props: {
                                attributes: this.editor.isEditable ? {
                                    tabindex: "0"
                                } : {}
                            }
                        })]
                    }
                });
            var Zt = Object.freeze({
                __proto__: null,
                ClipboardTextSerializer: pt,
                Commands: Yt,
                Editable: Ut,
                FocusEvents: Kt,
                Keymap: Gt,
                Tabindex: Xt
            });
            class Qt extends class {
                constructor() {
                    this.callbacks = {}
                }
                on(t, e) {
                    return this.callbacks[t] || (this.callbacks[t] = []), this.callbacks[t].push(e), this
                }
                emit(t, ...e) {
                    const n = this.callbacks[t];
                    return n && n.forEach((t => t.apply(this, e))), this
                }
                off(t, e) {
                    const n = this.callbacks[t];
                    return n && (e ? this.callbacks[t] = n.filter((t => t !== e)) : delete this.callbacks[t]), this
                }
                removeAllListeners() {
                    this.callbacks = {}
                }
            } {
                constructor(t = {}) {
                    super(), this.isFocused = !1, this.extensionStorage = {}, this.options = {
                        element: document.createElement("div"),
                        content: "",
                        injectCSS: !0,
                        injectNonce: void 0,
                        extensions: [],
                        autofocus: !1,
                        editable: !0,
                        editorProps: {},
                        parseOptions: {},
                        enableInputRules: !0,
                        enablePasteRules: !0,
                        enableCoreExtensions: !0,
                        onBeforeCreate: () => null,
                        onCreate: () => null,
                        onUpdate: () => null,
                        onSelectionUpdate: () => null,
                        onTransaction: () => null,
                        onFocus: () => null,
                        onBlur: () => null,
                        onDestroy: () => null
                    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(t), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", {
                        editor: this
                    }), this.createView(), this.injectCSS(), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), window.setTimeout((() => {
                        this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", {
                            editor: this
                        }))
                    }), 0)
                }
                get storage() {
                    return this.extensionStorage
                }
                get commands() {
                    return this.commandManager.commands
                }
                chain() {
                    return this.commandManager.chain()
                }
                can() {
                    return this.commandManager.can()
                }
                injectCSS() {
                    this.options.injectCSS && document && (this.css = function(t, e, n) {
                        const r = document.querySelector(`style[data-tiptap-style${n?`-${n}`:""}]`);
                        if (null !== r) return r;
                        const o = document.createElement("style");
                        return e && o.setAttribute("nonce", e), o.setAttribute("data-tiptap-style" + (n ? `-${n}` : ""), ""), o.innerHTML = t, document.getElementsByTagName("head")[0].appendChild(o), o
                    }('.ProseMirror {\n  position: relative;\n}\n\n.ProseMirror {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  white-space: break-spaces;\n  -webkit-font-variant-ligatures: none;\n  font-variant-ligatures: none;\n  font-feature-settings: "liga" 0; /* the above doesn\'t seem to work in Edge */\n}\n\n.ProseMirror [contenteditable="false"] {\n  white-space: normal;\n}\n\n.ProseMirror [contenteditable="false"] [contenteditable="true"] {\n  white-space: pre-wrap;\n}\n\n.ProseMirror pre {\n  white-space: pre-wrap;\n}\n\nimg.ProseMirror-separator {\n  display: inline !important;\n  border: none !important;\n  margin: 0 !important;\n  width: 1px !important;\n  height: 1px !important;\n}\n\n.ProseMirror-gapcursor {\n  display: none;\n  pointer-events: none;\n  position: absolute;\n  margin: 0;\n}\n\n.ProseMirror-gapcursor:after {\n  content: "";\n  display: block;\n  position: absolute;\n  top: -2px;\n  width: 20px;\n  border-top: 1px solid black;\n  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;\n}\n\n@keyframes ProseMirror-cursor-blink {\n  to {\n    visibility: hidden;\n  }\n}\n\n.ProseMirror-hideselection *::selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection *::-moz-selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection * {\n  caret-color: transparent;\n}\n\n.ProseMirror-focused .ProseMirror-gapcursor {\n  display: block;\n}\n\n.tippy-box[data-animation=fade][data-state=hidden] {\n  opacity: 0\n}', this.options.injectNonce))
                }
                setOptions(t = {}) {
                    this.options = { ...this.options,
                        ...t
                    }, this.view && this.state && !this.isDestroyed && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state))
                }
                setEditable(t, e = !0) {
                    this.setOptions({
                        editable: t
                    }), e && this.emit("update", {
                        editor: this,
                        transaction: this.state.tr
                    })
                }
                get isEditable() {
                    return this.options.editable && this.view && this.view.editable
                }
                get state() {
                    return this.view.state
                }
                registerPlugin(t, e) {
                    const n = q(e) ? e(t, [...this.state.plugins]) : [...this.state.plugins, t],
                        r = this.state.reconfigure({
                            plugins: n
                        });
                    this.view.updateState(r)
                }
                unregisterPlugin(t) {
                    if (this.isDestroyed) return;
                    const e = "string" === typeof t ? `${t}$` : t.key,
                        n = this.state.reconfigure({
                            plugins: this.state.plugins.filter((t => !t.key.startsWith(e)))
                        });
                    this.view.updateState(n)
                }
                createExtensionManager() {
                    const t = [...this.options.enableCoreExtensions ? Object.values(Zt) : [], ...this.options.extensions].filter((t => ["extension", "node", "mark"].includes(null === t || void 0 === t ? void 0 : t.type)));
                    this.extensionManager = new it(t, this)
                }
                createCommandManager() {
                    this.commandManager = new I({
                        editor: this
                    })
                }
                createSchema() {
                    this.schema = this.extensionManager.schema
                }
                createView() {
                    const t = At(this.options.content, this.schema, this.options.parseOptions),
                        e = bt(t, this.options.autofocus);
                    this.view = new o.tk(this.options.element, { ...this.options.editorProps,
                        dispatchTransaction: this.dispatchTransaction.bind(this),
                        state: r.yy.create({
                            doc: t,
                            selection: e || void 0
                        })
                    });
                    const n = this.state.reconfigure({
                        plugins: this.extensionManager.plugins
                    });
                    this.view.updateState(n), this.createNodeViews(), this.prependClass();
                    this.view.dom.editor = this
                }
                createNodeViews() {
                    this.view.setProps({
                        nodeViews: this.extensionManager.nodeViews
                    })
                }
                prependClass() {
                    this.view.dom.className = `tiptap ${this.view.dom.className}`
                }
                captureTransaction(t) {
                    this.isCapturingTransaction = !0, t(), this.isCapturingTransaction = !1;
                    const e = this.capturedTransaction;
                    return this.capturedTransaction = null, e
                }
                dispatchTransaction(t) {
                    if (this.view.isDestroyed) return;
                    if (this.isCapturingTransaction) return this.capturedTransaction ? void t.steps.forEach((t => {
                        var e;
                        return null === (e = this.capturedTransaction) || void 0 === e ? void 0 : e.step(t)
                    })) : void(this.capturedTransaction = t);
                    const e = this.state.apply(t),
                        n = !this.state.selection.eq(e.selection);
                    this.view.updateState(e), this.emit("transaction", {
                        editor: this,
                        transaction: t
                    }), n && this.emit("selectionUpdate", {
                        editor: this,
                        transaction: t
                    });
                    const r = t.getMeta("focus"),
                        o = t.getMeta("blur");
                    r && this.emit("focus", {
                        editor: this,
                        event: r.event,
                        transaction: t
                    }), o && this.emit("blur", {
                        editor: this,
                        event: o.event,
                        transaction: t
                    }), t.docChanged && !t.getMeta("preventUpdate") && this.emit("update", {
                        editor: this,
                        transaction: t
                    })
                }
                getAttributes(t) {
                    return Nt(this.state, t)
                }
                isActive(t, e) {
                    const n = "string" === typeof t ? t : null,
                        r = "string" === typeof t ? e : t;
                    return function(t, e, n = {}) {
                        if (!e) return Et(t, null, n) || $t(t, null, n);
                        const r = Ct(e, t.schema);
                        return "node" === r ? Et(t, e, n) : "mark" === r && $t(t, e, n)
                    }(this.state, n, r)
                }
                getJSON() {
                    return this.state.doc.toJSON()
                }
                getHTML() {
                    return Bt(this.state.doc.content, this.schema)
                }
                getText(t) {
                    const {
                        blockSeparator: e = "\n\n",
                        textSerializers: n = {}
                    } = t || {};
                    return jt(this.state.doc, {
                        blockSeparator: e,
                        textSerializers: { ...ct(this.schema),
                            ...n
                        }
                    })
                }
                get isEmpty() {
                    return function(t) {
                        var e;
                        const n = null === (e = t.type.createAndFill()) || void 0 === e ? void 0 : e.toJSON(),
                            r = t.toJSON();
                        return JSON.stringify(n) === JSON.stringify(r)
                    }(this.state.doc)
                }
                getCharacterCount() {
                    return console.warn('[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.'), this.state.doc.content.size - 2
                }
                destroy() {
                    this.emit("destroy"), this.view && this.view.destroy(), this.removeAllListeners()
                }
                get isDestroyed() {
                    var t;
                    return !(null === (t = this.view) || void 0 === t ? void 0 : t.docView)
                }
            }

            function te(t) {
                return new Q({
                    find: t.find,
                    handler: ({
                        state: e,
                        range: n,
                        match: r
                    }) => {
                        const o = J(t.getAttributes, void 0, r);
                        if (!1 === o || null === o) return null;
                        const {
                            tr: i
                        } = e, s = r[r.length - 1], a = r[0];
                        if (s) {
                            const r = a.search(/\S/),
                                u = n.from + a.indexOf(s),
                                l = u + s.length;
                            if (zt(n.from, n.to, e.doc).filter((e => e.mark.type.excluded.find((n => n === t.type && n !== e.mark.type)))).filter((t => t.to > u)).length) return null;
                            l < n.to && i.delete(l, n.to), u > n.from && i.delete(n.from + r, u);
                            const c = n.from + r + s.length;
                            i.addMark(n.from + r, c, t.type.create(o || {})), i.removeStoredMark(t.type)
                        }
                    }
                })
            }

            function ee(t) {
                return new Q({
                    find: t.find,
                    handler: ({
                        state: e,
                        range: n,
                        match: r
                    }) => {
                        const o = J(t.getAttributes, void 0, r) || {},
                            {
                                tr: i
                            } = e,
                            s = n.from;
                        let a = n.to;
                        const u = t.type.create(o);
                        if (r[1]) {
                            let t = s + r[0].lastIndexOf(r[1]);
                            t > a ? t = a : a = t + r[1].length;
                            const e = r[0][r[0].length - 1];
                            i.insertText(e, s + r[0].length - 1), i.replaceWith(t, a, u)
                        } else r[0] && i.insert(s - 1, t.type.create(o)).delete(i.mapping.map(s), i.mapping.map(a));
                        i.scrollIntoView()
                    }
                })
            }

            function ne(t) {
                return new Q({
                    find: t.find,
                    handler: ({
                        state: e,
                        range: n,
                        match: r
                    }) => {
                        const o = e.doc.resolve(n.from),
                            i = J(t.getAttributes, void 0, r) || {};
                        if (!o.node(-1).canReplaceWith(o.index(-1), o.indexAfter(-1), t.type)) return null;
                        e.tr.delete(n.from, n.to).setBlockType(n.from, n.from, t.type, i)
                    }
                })
            }

            function re(t) {
                return new Q({
                    find: t.find,
                    handler: ({
                        state: e,
                        range: n,
                        match: r
                    }) => {
                        let o = t.replace,
                            i = n.from;
                        const s = n.to;
                        if (r[1]) {
                            const t = r[0].lastIndexOf(r[1]);
                            o += r[0].slice(t + r[1].length), i += t;
                            const e = i - s;
                            e > 0 && (o = r[0].slice(t - e, t) + o, i = s)
                        }
                        e.tr.insertText(o, i, s)
                    }
                })
            }

            function oe(t) {
                return new Q({
                    find: t.find,
                    handler: ({
                        state: e,
                        range: n,
                        match: r,
                        chain: o
                    }) => {
                        const i = J(t.getAttributes, void 0, r) || {},
                            s = e.tr.delete(n.from, n.to),
                            u = s.doc.resolve(n.from).blockRange(),
                            l = u && (0, a.nd)(u, t.type, i);
                        if (!l) return null;
                        if (s.wrap(u, l), t.keepMarks && t.editor) {
                            const {
                                selection: n,
                                storedMarks: r
                            } = e, {
                                splittableMarks: o
                            } = t.editor.extensionManager, i = r || n.$to.parentOffset && n.$from.marks();
                            if (i) {
                                const t = i.filter((t => o.includes(t.type.name)));
                                s.ensureMarks(t)
                            }
                        }
                        if (t.keepAttributes) {
                            const e = "bulletList" === t.type.name || "orderedList" === t.type.name ? "listItem" : "taskList";
                            o().updateAttributes(e, i).run()
                        }
                        const c = s.doc.resolve(n.from - 1).nodeBefore;
                        c && c.type === t.type && (0, a.Mn)(s.doc, n.from - 1) && (!t.joinPredicate || t.joinPredicate(r, c)) && s.join(n.from - 1)
                    }
                })
            }
            class ie {
                constructor(t = {}) {
                    this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
                        name: this.name,
                        defaultOptions: {}
                    }, this.config = { ...this.config,
                        ...t
                    }, this.name = this.config.name, t.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = J($(this, "addOptions", {
                        name: this.name
                    }))), this.storage = J($(this, "addStorage", {
                        name: this.name,
                        options: this.options
                    })) || {}
                }
                static create(t = {}) {
                    return new ie(t)
                }
                configure(t = {}) {
                    const e = this.extend();
                    return e.options = at(this.options, t), e.storage = J($(e, "addStorage", {
                        name: e.name,
                        options: e.options
                    })), e
                }
                extend(t = {}) {
                    const e = new ie(t);
                    return e.parent = this, this.child = e, e.name = t.name ? t.name : e.parent.name, t.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${e.name}".`), e.options = J($(e, "addOptions", {
                        name: e.name
                    })), e.storage = J($(e, "addStorage", {
                        name: e.name,
                        options: e.options
                    })), e
                }
                static handleExit({
                    editor: t,
                    mark: e
                }) {
                    const {
                        tr: n
                    } = t.state, r = t.state.selection.$from;
                    if (r.pos === r.end()) {
                        const o = r.marks();
                        if (!!!o.find((t => (null === t || void 0 === t ? void 0 : t.type.name) === e.name))) return !1;
                        const i = o.find((t => (null === t || void 0 === t ? void 0 : t.type.name) === e.name));
                        return i && n.removeStoredMark(i), n.insertText(" ", r.pos), t.view.dispatch(n), !0
                    }
                    return !1
                }
            }
            class se {
                constructor(t = {}) {
                    this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
                        name: this.name,
                        defaultOptions: {}
                    }, this.config = { ...this.config,
                        ...t
                    }, this.name = this.config.name, t.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = J($(this, "addOptions", {
                        name: this.name
                    }))), this.storage = J($(this, "addStorage", {
                        name: this.name,
                        options: this.options
                    })) || {}
                }
                static create(t = {}) {
                    return new se(t)
                }
                configure(t = {}) {
                    const e = this.extend();
                    return e.options = at(this.options, t), e.storage = J($(e, "addStorage", {
                        name: e.name,
                        options: e.options
                    })), e
                }
                extend(t = {}) {
                    const e = new se(t);
                    return e.parent = this, this.child = e, e.name = t.name ? t.name : e.parent.name, t.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${e.name}".`), e.options = J($(e, "addOptions", {
                        name: e.name
                    })), e.storage = J($(e, "addStorage", {
                        name: e.name,
                        options: e.options
                    })), e
                }
            }
            class ae {
                constructor(t, e, n) {
                    this.isDragging = !1, this.component = t, this.editor = e.editor, this.options = {
                        stopEvent: null,
                        ignoreMutation: null,
                        ...n
                    }, this.extension = e.extension, this.node = e.node, this.decorations = e.decorations, this.getPos = e.getPos, this.mount()
                }
                mount() {}
                get dom() {
                    return this.editor.view.dom
                }
                get contentDOM() {
                    return null
                }
                onDragStart(t) {
                    var e, n, o, i, s, a, u;
                    const {
                        view: l
                    } = this.editor, c = t.target, p = 3 === c.nodeType ? null === (e = c.parentElement) || void 0 === e ? void 0 : e.closest("[data-drag-handle]") : c.closest("[data-drag-handle]");
                    if (!this.dom || (null === (n = this.contentDOM) || void 0 === n ? void 0 : n.contains(c)) || !p) return;
                    let d = 0,
                        f = 0;
                    if (this.dom !== p) {
                        const e = this.dom.getBoundingClientRect(),
                            n = p.getBoundingClientRect(),
                            r = null !== (o = t.offsetX) && void 0 !== o ? o : null === (i = t.nativeEvent) || void 0 === i ? void 0 : i.offsetX,
                            u = null !== (s = t.offsetY) && void 0 !== s ? s : null === (a = t.nativeEvent) || void 0 === a ? void 0 : a.offsetY;
                        d = n.x - e.x + r, f = n.y - e.y + u
                    }
                    null === (u = t.dataTransfer) || void 0 === u || u.setDragImage(this.dom, d, f);
                    const h = r.qv.create(l.state.doc, this.getPos()),
                        m = l.state.tr.setSelection(h);
                    l.dispatch(m)
                }
                stopEvent(t) {
                    var e;
                    if (!this.dom) return !1;
                    if ("function" === typeof this.options.stopEvent) return this.options.stopEvent({
                        event: t
                    });
                    const n = t.target;
                    if (!(this.dom.contains(n) && !(null === (e = this.contentDOM) || void 0 === e ? void 0 : e.contains(n)))) return !1;
                    const o = t.type.startsWith("drag"),
                        i = "drop" === t.type;
                    if ((["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(n.tagName) || n.isContentEditable) && !i && !o) return !0;
                    const {
                        isEditable: s
                    } = this.editor, {
                        isDragging: a
                    } = this, u = !!this.node.type.spec.draggable, l = r.qv.isSelectable(this.node), c = "copy" === t.type, p = "paste" === t.type, d = "cut" === t.type, f = "mousedown" === t.type;
                    if (!u && l && o && t.preventDefault(), u && o && !a) return t.preventDefault(), !1;
                    if (u && s && !a && f) {
                        const t = n.closest("[data-drag-handle]");
                        t && (this.dom === t || this.dom.contains(t)) && (this.isDragging = !0, document.addEventListener("dragend", (() => {
                            this.isDragging = !1
                        }), {
                            once: !0
                        }), document.addEventListener("drop", (() => {
                            this.isDragging = !1
                        }), {
                            once: !0
                        }), document.addEventListener("mouseup", (() => {
                            this.isDragging = !1
                        }), {
                            once: !0
                        }))
                    }
                    return !(a || i || c || p || d || f && l)
                }
                ignoreMutation(t) {
                    if (!this.dom || !this.contentDOM) return !0;
                    if ("function" === typeof this.options.ignoreMutation) return this.options.ignoreMutation({
                        mutation: t
                    });
                    if (this.node.isLeaf || this.node.isAtom) return !0;
                    if ("selection" === t.type) return !1;
                    if (this.dom.contains(t.target) && "childList" === t.type && (Dt() || "Android" === navigator.platform || /android/i.test(navigator.userAgent)) && this.editor.isFocused) {
                        if ([...Array.from(t.addedNodes), ...Array.from(t.removedNodes)].every((t => t.isContentEditable))) return !1
                    }
                    return this.contentDOM === t.target && "attributes" === t.type || !this.contentDOM.contains(t.target)
                }
                updateAttributes(t) {
                    this.editor.commands.command((({
                        tr: e
                    }) => {
                        const n = this.getPos();
                        return e.setNodeMarkup(n, void 0, { ...this.node.attrs,
                            ...t
                        }), !0
                    }))
                }
                deleteNode() {
                    const t = this.getPos(),
                        e = t + this.node.nodeSize;
                    this.editor.commands.deleteRange({
                        from: t,
                        to: e
                    })
                }
            }

            function ue(t) {
                return new nt({
                    find: t.find,
                    handler: ({
                        state: e,
                        range: n,
                        match: r
                    }) => {
                        const o = J(t.getAttributes, void 0, r);
                        if (!1 === o || null === o) return null;
                        const {
                            tr: i
                        } = e, s = r[r.length - 1], a = r[0];
                        let u = n.to;
                        if (s) {
                            const r = a.search(/\S/),
                                l = n.from + a.indexOf(s),
                                c = l + s.length;
                            if (zt(n.from, n.to, e.doc).filter((e => e.mark.type.excluded.find((n => n === t.type && n !== e.mark.type)))).filter((t => t.to > l)).length) return null;
                            c < n.to && i.delete(c, n.to), l > n.from && i.delete(n.from + r, l), u = n.from + r + s.length, i.addMark(n.from + r, u, t.type.create(o || {})), i.removeStoredMark(t.type)
                        }
                    }
                })
            }

            function le(t) {
                return t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
        },
        14346: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return r
                }
            });
            const r = n(53975).NB.create({
                name: "doc",
                topNode: !0,
                content: "block+"
            })
        },
        3588: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return u
                }
            });
            var r = n(53975),
                o = n(60314),
                i = n(85804);

            function s(t = {}) {
                return new o.Sy({
                    view: e => new a(e, t)
                })
            }
            class a {
                constructor(t, e) {
                    var n;
                    this.editorView = t, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = null !== (n = e.width) && void 0 !== n ? n : 1, this.color = !1 === e.color ? void 0 : e.color || "black", this.class = e.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((e => {
                        let n = t => {
                            this[e](t)
                        };
                        return t.dom.addEventListener(e, n), {
                            name: e,
                            handler: n
                        }
                    }))
                }
                destroy() {
                    this.handlers.forEach((({
                        name: t,
                        handler: e
                    }) => this.editorView.dom.removeEventListener(t, e)))
                }
                update(t, e) {
                    null != this.cursorPos && e.doc != t.state.doc && (this.cursorPos > t.state.doc.content.size ? this.setCursor(null) : this.updateOverlay())
                }
                setCursor(t) {
                    t != this.cursorPos && (this.cursorPos = t, null == t ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay())
                }
                updateOverlay() {
                    let t, e = this.editorView.state.doc.resolve(this.cursorPos),
                        n = !e.parent.inlineContent;
                    if (n) {
                        let n = e.nodeBefore,
                            r = e.nodeAfter;
                        if (n || r) {
                            let e = this.editorView.nodeDOM(this.cursorPos - (n ? n.nodeSize : 0));
                            if (e) {
                                let o = e.getBoundingClientRect(),
                                    i = n ? o.bottom : o.top;
                                n && r && (i = (i + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2), t = {
                                    left: o.left,
                                    right: o.right,
                                    top: i - this.width / 2,
                                    bottom: i + this.width / 2
                                }
                            }
                        }
                    }
                    if (!t) {
                        let e = this.editorView.coordsAtPos(this.cursorPos);
                        t = {
                            left: e.left - this.width / 2,
                            right: e.left + this.width / 2,
                            top: e.top,
                            bottom: e.bottom
                        }
                    }
                    let r, o, i = this.editorView.dom.offsetParent;
                    if (this.element || (this.element = i.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", n), this.element.classList.toggle("prosemirror-dropcursor-inline", !n), !i || i == document.body && "static" == getComputedStyle(i).position) r = -pageXOffset, o = -pageYOffset;
                    else {
                        let t = i.getBoundingClientRect();
                        r = t.left - i.scrollLeft, o = t.top - i.scrollTop
                    }
                    this.element.style.left = t.left - r + "px", this.element.style.top = t.top - o + "px", this.element.style.width = t.right - t.left + "px", this.element.style.height = t.bottom - t.top + "px"
                }
                scheduleRemoval(t) {
                    clearTimeout(this.timeout), this.timeout = setTimeout((() => this.setCursor(null)), t)
                }
                dragover(t) {
                    if (!this.editorView.editable) return;
                    let e = this.editorView.posAtCoords({
                            left: t.clientX,
                            top: t.clientY
                        }),
                        n = e && e.inside >= 0 && this.editorView.state.doc.nodeAt(e.inside),
                        r = n && n.type.spec.disableDropCursor,
                        o = "function" == typeof r ? r(this.editorView, e, t) : r;
                    if (e && !o) {
                        let t = e.pos;
                        if (this.editorView.dragging && this.editorView.dragging.slice) {
                            let e = (0, i.nj)(this.editorView.state.doc, t, this.editorView.dragging.slice);
                            null != e && (t = e)
                        }
                        this.setCursor(t), this.scheduleRemoval(5e3)
                    }
                }
                dragend() {
                    this.scheduleRemoval(20)
                }
                drop() {
                    this.scheduleRemoval(20)
                }
                dragleave(t) {
                    t.target != this.editorView.dom && this.editorView.dom.contains(t.relatedTarget) || this.setCursor(null)
                }
            }
            const u = r.hj.create({
                name: "dropCursor",
                addOptions: () => ({
                    color: "currentColor",
                    width: 1,
                    class: void 0
                }),
                addProseMirrorPlugins() {
                    return [s(this.options)]
                }
            })
        },
        98919: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return m
                }
            });
            var r = n(53975),
                o = n(80326),
                i = n(60314),
                s = n(31506),
                a = n(98715);
            class u extends i.Y1 {
                constructor(t) {
                    super(t, t)
                }
                map(t, e) {
                    let n = t.resolve(e.map(this.head));
                    return u.valid(n) ? new u(n) : i.Y1.near(n)
                }
                content() {
                    return s.p2.empty
                }
                eq(t) {
                    return t instanceof u && t.head == this.head
                }
                toJSON() {
                    return {
                        type: "gapcursor",
                        pos: this.head
                    }
                }
                static fromJSON(t, e) {
                    if ("number" != typeof e.pos) throw new RangeError("Invalid input for GapCursor.fromJSON");
                    return new u(t.resolve(e.pos))
                }
                getBookmark() {
                    return new l(this.anchor)
                }
                static valid(t) {
                    let e = t.parent;
                    if (e.isTextblock || ! function(t) {
                            for (let e = t.depth; e >= 0; e--) {
                                let n = t.index(e),
                                    r = t.node(e);
                                if (0 != n)
                                    for (let t = r.child(n - 1);; t = t.lastChild) {
                                        if (0 == t.childCount && !t.inlineContent || t.isAtom || t.type.spec.isolating) return !0;
                                        if (t.inlineContent) return !1
                                    } else if (r.type.spec.isolating) return !0
                            }
                            return !0
                        }(t) || ! function(t) {
                            for (let e = t.depth; e >= 0; e--) {
                                let n = t.indexAfter(e),
                                    r = t.node(e);
                                if (n != r.childCount)
                                    for (let t = r.child(n);; t = t.firstChild) {
                                        if (0 == t.childCount && !t.inlineContent || t.isAtom || t.type.spec.isolating) return !0;
                                        if (t.inlineContent) return !1
                                    } else if (r.type.spec.isolating) return !0
                            }
                            return !0
                        }(t)) return !1;
                    let n = e.type.spec.allowGapCursor;
                    if (null != n) return n;
                    let r = e.contentMatchAt(t.index()).defaultType;
                    return r && r.isTextblock
                }
                static findGapCursorFrom(t, e, n = !1) {
                    t: for (;;) {
                        if (!n && u.valid(t)) return t;
                        let r = t.pos,
                            o = null;
                        for (let n = t.depth;; n--) {
                            let i = t.node(n);
                            if (e > 0 ? t.indexAfter(n) < i.childCount : t.index(n) > 0) {
                                o = i.child(e > 0 ? t.indexAfter(n) : t.index(n) - 1);
                                break
                            }
                            if (0 == n) return null;
                            r += e;
                            let s = t.doc.resolve(r);
                            if (u.valid(s)) return s
                        }
                        for (;;) {
                            let s = e > 0 ? o.firstChild : o.lastChild;
                            if (!s) {
                                if (o.isAtom && !o.isText && !i.qv.isSelectable(o)) {
                                    t = t.doc.resolve(r + o.nodeSize * e), n = !1;
                                    continue t
                                }
                                break
                            }
                            o = s, r += e;
                            let a = t.doc.resolve(r);
                            if (u.valid(a)) return a
                        }
                        return null
                    }
                }
            }
            u.prototype.visible = !1, u.findFrom = u.findGapCursorFrom, i.Y1.jsonID("gapcursor", u);
            class l {
                constructor(t) {
                    this.pos = t
                }
                map(t) {
                    return new l(t.map(this.pos))
                }
                resolve(t) {
                    let e = t.resolve(this.pos);
                    return u.valid(e) ? new u(e) : i.Y1.near(e)
                }
            }
            const c = (0, o.$)({
                ArrowLeft: p("horiz", -1),
                ArrowRight: p("horiz", 1),
                ArrowUp: p("vert", -1),
                ArrowDown: p("vert", 1)
            });

            function p(t, e) {
                const n = "vert" == t ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
                return function(t, r, o) {
                    let s = t.selection,
                        a = e > 0 ? s.$to : s.$from,
                        l = s.empty;
                    if (s instanceof i.Bs) {
                        if (!o.endOfTextblock(n) || 0 == a.depth) return !1;
                        l = !1, a = t.doc.resolve(e > 0 ? a.after() : a.before())
                    }
                    let c = u.findGapCursorFrom(a, e, l);
                    return !!c && (r && r(t.tr.setSelection(new u(c))), !0)
                }
            }

            function d(t, e, n) {
                if (!t || !t.editable) return !1;
                let r = t.state.doc.resolve(e);
                if (!u.valid(r)) return !1;
                let o = t.posAtCoords({
                    left: n.clientX,
                    top: n.clientY
                });
                return !(o && o.inside > -1 && i.qv.isSelectable(t.state.doc.nodeAt(o.inside))) && (t.dispatch(t.state.tr.setSelection(new u(r))), !0)
            }

            function f(t, e) {
                if ("insertCompositionText" != e.inputType || !(t.state.selection instanceof u)) return !1;
                let {
                    $from: n
                } = t.state.selection, r = n.parent.contentMatchAt(n.index()).findWrapping(t.state.schema.nodes.text);
                if (!r) return !1;
                let o = s.HY.empty;
                for (let i = r.length - 1; i >= 0; i--) o = s.HY.from(r[i].createAndFill(null, o));
                let a = t.state.tr.replace(n.pos, n.pos, new s.p2(o, 0, 0));
                return a.setSelection(i.Bs.near(a.doc.resolve(n.pos + 1))), t.dispatch(a), !1
            }

            function h(t) {
                if (!(t.selection instanceof u)) return null;
                let e = document.createElement("div");
                return e.className = "ProseMirror-gapcursor", a.EH.create(t.doc, [a.p.widget(t.selection.head, e, {
                    key: "gapcursor"
                })])
            }
            const m = r.hj.create({
                name: "gapCursor",
                addProseMirrorPlugins: () => [new i.Sy({
                    props: {
                        decorations: h,
                        createSelectionBetween: (t, e, n) => e.pos == n.pos && u.valid(n) ? new u(n) : null,
                        handleClick: d,
                        handleKeyDown: c,
                        handleDOMEvents: {
                            beforeinput: f
                        }
                    }
                })],
                extendNodeSchema(t) {
                    var e;
                    const n = {
                        name: t.name,
                        options: t.options,
                        storage: t.storage
                    };
                    return {
                        allowGapCursor: null !== (e = (0, r.nU)((0, r.Nl)(t, "allowGapCursor", n))) && void 0 !== e ? e : null
                    }
                }
            })
        },
        1124: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return S
                }
            });
            var r = n(53975),
                o = 200,
                i = function() {};
            i.prototype.append = function(t) {
                return t.length ? (t = i.from(t), !this.length && t || t.length < o && this.leafAppend(t) || this.length < o && t.leafPrepend(this) || this.appendInner(t)) : this
            }, i.prototype.prepend = function(t) {
                return t.length ? i.from(t).append(this) : this
            }, i.prototype.appendInner = function(t) {
                return new a(this, t)
            }, i.prototype.slice = function(t, e) {
                return void 0 === t && (t = 0), void 0 === e && (e = this.length), t >= e ? i.empty : this.sliceInner(Math.max(0, t), Math.min(this.length, e))
            }, i.prototype.get = function(t) {
                if (!(t < 0 || t >= this.length)) return this.getInner(t)
            }, i.prototype.forEach = function(t, e, n) {
                void 0 === e && (e = 0), void 0 === n && (n = this.length), e <= n ? this.forEachInner(t, e, n, 0) : this.forEachInvertedInner(t, e, n, 0)
            }, i.prototype.map = function(t, e, n) {
                void 0 === e && (e = 0), void 0 === n && (n = this.length);
                var r = [];
                return this.forEach((function(e, n) {
                    return r.push(t(e, n))
                }), e, n), r
            }, i.from = function(t) {
                return t instanceof i ? t : t && t.length ? new s(t) : i.empty
            };
            var s = function(t) {
                function e(e) {
                    t.call(this), this.values = e
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var n = {
                    length: {
                        configurable: !0
                    },
                    depth: {
                        configurable: !0
                    }
                };
                return e.prototype.flatten = function() {
                    return this.values
                }, e.prototype.sliceInner = function(t, n) {
                    return 0 == t && n == this.length ? this : new e(this.values.slice(t, n))
                }, e.prototype.getInner = function(t) {
                    return this.values[t]
                }, e.prototype.forEachInner = function(t, e, n, r) {
                    for (var o = e; o < n; o++)
                        if (!1 === t(this.values[o], r + o)) return !1
                }, e.prototype.forEachInvertedInner = function(t, e, n, r) {
                    for (var o = e - 1; o >= n; o--)
                        if (!1 === t(this.values[o], r + o)) return !1
                }, e.prototype.leafAppend = function(t) {
                    if (this.length + t.length <= o) return new e(this.values.concat(t.flatten()))
                }, e.prototype.leafPrepend = function(t) {
                    if (this.length + t.length <= o) return new e(t.flatten().concat(this.values))
                }, n.length.get = function() {
                    return this.values.length
                }, n.depth.get = function() {
                    return 0
                }, Object.defineProperties(e.prototype, n), e
            }(i);
            i.empty = new s([]);
            var a = function(t) {
                    function e(e, n) {
                        t.call(this), this.left = e, this.right = n, this.length = e.length + n.length, this.depth = Math.max(e.depth, n.depth) + 1
                    }
                    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
                        return this.left.flatten().concat(this.right.flatten())
                    }, e.prototype.getInner = function(t) {
                        return t < this.left.length ? this.left.get(t) : this.right.get(t - this.left.length)
                    }, e.prototype.forEachInner = function(t, e, n, r) {
                        var o = this.left.length;
                        return !(e < o && !1 === this.left.forEachInner(t, e, Math.min(n, o), r)) && (!(n > o && !1 === this.right.forEachInner(t, Math.max(e - o, 0), Math.min(this.length, n) - o, r + o)) && void 0)
                    }, e.prototype.forEachInvertedInner = function(t, e, n, r) {
                        var o = this.left.length;
                        return !(e > o && !1 === this.right.forEachInvertedInner(t, e - o, Math.max(n, o) - o, r + o)) && (!(n < o && !1 === this.left.forEachInvertedInner(t, Math.min(e, o), n, r)) && void 0)
                    }, e.prototype.sliceInner = function(t, e) {
                        if (0 == t && e == this.length) return this;
                        var n = this.left.length;
                        return e <= n ? this.left.slice(t, e) : t >= n ? this.right.slice(t - n, e - n) : this.left.slice(t, n).append(this.right.slice(0, e - n))
                    }, e.prototype.leafAppend = function(t) {
                        var n = this.right.leafAppend(t);
                        if (n) return new e(this.left, n)
                    }, e.prototype.leafPrepend = function(t) {
                        var n = this.left.leafPrepend(t);
                        if (n) return new e(n, this.right)
                    }, e.prototype.appendInner = function(t) {
                        return this.left.depth >= Math.max(this.right.depth, t.depth) + 1 ? new e(this.left, new e(this.right, t)) : new e(this, t)
                    }, e
                }(i),
                u = i,
                l = n(85804),
                c = n(60314);
            class p {
                constructor(t, e) {
                    this.items = t, this.eventCount = e
                }
                popEvent(t, e) {
                    if (0 == this.eventCount) return null;
                    let n, r, o = this.items.length;
                    for (;; o--) {
                        if (this.items.get(o - 1).selection) {
                            --o;
                            break
                        }
                    }
                    e && (n = this.remapping(o, this.items.length), r = n.maps.length);
                    let i, s, a = t.tr,
                        u = [],
                        l = [];
                    return this.items.forEach(((t, e) => {
                        if (!t.step) return n || (n = this.remapping(o, e + 1), r = n.maps.length), r--, void l.push(t);
                        if (n) {
                            l.push(new d(t.map));
                            let e, o = t.step.map(n.slice(r));
                            o && a.maybeStep(o).doc && (e = a.mapping.maps[a.mapping.maps.length - 1], u.push(new d(e, void 0, void 0, u.length + l.length))), r--, e && n.appendMap(e, r)
                        } else a.maybeStep(t.step);
                        return t.selection ? (i = n ? t.selection.map(n.slice(r)) : t.selection, s = new p(this.items.slice(0, o).append(l.reverse().concat(u)), this.eventCount - 1), !1) : void 0
                    }), this.items.length, 0), {
                        remaining: s,
                        transform: a,
                        selection: i
                    }
                }
                addTransform(t, e, n, r) {
                    let o = [],
                        i = this.eventCount,
                        s = this.items,
                        a = !r && s.length ? s.get(s.length - 1) : null;
                    for (let l = 0; l < t.steps.length; l++) {
                        let n, u = t.steps[l].invert(t.docs[l]),
                            c = new d(t.mapping.maps[l], u, e);
                        (n = a && a.merge(c)) && (c = n, l ? o.pop() : s = s.slice(0, s.length - 1)), o.push(c), e && (i++, e = void 0), r || (a = c)
                    }
                    let u = i - n.depth;
                    return u > h && (s = function(t, e) {
                        let n;
                        return t.forEach(((t, r) => {
                            if (t.selection && 0 == e--) return n = r, !1
                        })), t.slice(n)
                    }(s, u), i -= u), new p(s.append(o), i)
                }
                remapping(t, e) {
                    let n = new l.vs;
                    return this.items.forEach(((e, r) => {
                        let o = null != e.mirrorOffset && r - e.mirrorOffset >= t ? n.maps.length - e.mirrorOffset : void 0;
                        n.appendMap(e.map, o)
                    }), t, e), n
                }
                addMaps(t) {
                    return 0 == this.eventCount ? this : new p(this.items.append(t.map((t => new d(t)))), this.eventCount)
                }
                rebased(t, e) {
                    if (!this.eventCount) return this;
                    let n = [],
                        r = Math.max(0, this.items.length - e),
                        o = t.mapping,
                        i = t.steps.length,
                        s = this.eventCount;
                    this.items.forEach((t => {
                        t.selection && s--
                    }), r);
                    let a = e;
                    this.items.forEach((e => {
                        let r = o.getMirror(--a);
                        if (null == r) return;
                        i = Math.min(i, r);
                        let u = o.maps[r];
                        if (e.step) {
                            let i = t.steps[r].invert(t.docs[r]),
                                l = e.selection && e.selection.map(o.slice(a + 1, r));
                            l && s++, n.push(new d(u, i, l))
                        } else n.push(new d(u))
                    }), r);
                    let u = [];
                    for (let p = e; p < i; p++) u.push(new d(o.maps[p]));
                    let l = this.items.slice(0, r).append(u).append(n),
                        c = new p(l, s);
                    return c.emptyItemCount() > 500 && (c = c.compress(this.items.length - n.length)), c
                }
                emptyItemCount() {
                    let t = 0;
                    return this.items.forEach((e => {
                        e.step || t++
                    })), t
                }
                compress(t = this.items.length) {
                    let e = this.remapping(0, t),
                        n = e.maps.length,
                        r = [],
                        o = 0;
                    return this.items.forEach(((i, s) => {
                        if (s >= t) r.push(i), i.selection && o++;
                        else if (i.step) {
                            let t = i.step.map(e.slice(n)),
                                s = t && t.getMap();
                            if (n--, s && e.appendMap(s, n), t) {
                                let a = i.selection && i.selection.map(e.slice(n));
                                a && o++;
                                let u, l = new d(s.invert(), t, a),
                                    c = r.length - 1;
                                (u = r.length && r[c].merge(l)) ? r[c] = u: r.push(l)
                            }
                        } else i.map && n--
                    }), this.items.length, 0), new p(u.from(r.reverse()), o)
                }
            }
            p.empty = new p(u.empty, 0);
            class d {
                constructor(t, e, n, r) {
                    this.map = t, this.step = e, this.selection = n, this.mirrorOffset = r
                }
                merge(t) {
                    if (this.step && t.step && !t.selection) {
                        let e = t.step.merge(this.step);
                        if (e) return new d(e.getMap().invert(), e, this.selection)
                    }
                }
            }
            class f {
                constructor(t, e, n, r, o) {
                    this.done = t, this.undone = e, this.prevRanges = n, this.prevTime = r, this.prevComposition = o
                }
            }
            const h = 20;

            function m(t) {
                let e = [];
                return t.forEach(((t, n, r, o) => e.push(r, o))), e
            }

            function g(t, e) {
                if (!t) return null;
                let n = [];
                for (let r = 0; r < t.length; r += 2) {
                    let o = e.map(t[r], 1),
                        i = e.map(t[r + 1], -1);
                    o <= i && n.push(o, i)
                }
                return n
            }

            function y(t, e, n, r) {
                let o = D(e),
                    i = w.get(e).spec.config,
                    s = (r ? t.undone : t.done).popEvent(e, o);
                if (!s) return;
                let a = s.selection.resolve(s.transform.doc),
                    u = (r ? t.done : t.undone).addTransform(s.transform, e.selection.getBookmark(), i, o),
                    l = new f(r ? u : s.remaining, r ? s.remaining : u, null, 0, -1);
                n(s.transform.setSelection(a).setMeta(w, {
                    redo: r,
                    historyState: l
                }).scrollIntoView())
            }
            let v = !1,
                b = null;

            function D(t) {
                let e = t.plugins;
                if (b != e) {
                    v = !1, b = e;
                    for (let t = 0; t < e.length; t++)
                        if (e[t].spec.historyPreserveItems) {
                            v = !0;
                            break
                        }
                }
                return v
            }
            const w = new c.H$("history"),
                x = new c.H$("closeHistory");

            function k(t = {}) {
                return t = {
                    depth: t.depth || 100,
                    newGroupDelay: t.newGroupDelay || 500
                }, new c.Sy({
                    key: w,
                    state: {
                        init: () => new f(p.empty, p.empty, null, 0, -1),
                        apply: (e, n, r) => function(t, e, n, r) {
                            let o, i = n.getMeta(w);
                            if (i) return i.historyState;
                            n.getMeta(x) && (t = new f(t.done, t.undone, null, 0, -1));
                            let s = n.getMeta("appendedTransaction");
                            if (0 == n.steps.length) return t;
                            if (s && s.getMeta(w)) return s.getMeta(w).redo ? new f(t.done.addTransform(n, void 0, r, D(e)), t.undone, m(n.mapping.maps[n.steps.length - 1]), t.prevTime, t.prevComposition) : new f(t.done, t.undone.addTransform(n, void 0, r, D(e)), null, t.prevTime, t.prevComposition);
                            if (!1 === n.getMeta("addToHistory") || s && !1 === s.getMeta("addToHistory")) return (o = n.getMeta("rebased")) ? new f(t.done.rebased(n, o), t.undone.rebased(n, o), g(t.prevRanges, n.mapping), t.prevTime, t.prevComposition) : new f(t.done.addMaps(n.mapping.maps), t.undone.addMaps(n.mapping.maps), g(t.prevRanges, n.mapping), t.prevTime, t.prevComposition); {
                                let o = n.getMeta("composition"),
                                    i = 0 == t.prevTime || !s && t.prevComposition != o && (t.prevTime < (n.time || 0) - r.newGroupDelay || ! function(t, e) {
                                        if (!e) return !1;
                                        if (!t.docChanged) return !0;
                                        let n = !1;
                                        return t.mapping.maps[0].forEach(((t, r) => {
                                            for (let o = 0; o < e.length; o += 2) t <= e[o + 1] && r >= e[o] && (n = !0)
                                        })), n
                                    }(n, t.prevRanges)),
                                    a = s ? g(t.prevRanges, n.mapping) : m(n.mapping.maps[n.steps.length - 1]);
                                return new f(t.done.addTransform(n, i ? e.selection.getBookmark() : void 0, r, D(e)), p.empty, a, n.time, null == o ? t.prevComposition : o)
                            }
                        }(n, r, e, t)
                    },
                    config: t,
                    props: {
                        handleDOMEvents: {
                            beforeinput(t, e) {
                                let n = e.inputType,
                                    r = "historyUndo" == n ? E : "historyRedo" == n ? C : null;
                                return !!r && (e.preventDefault(), r(t.state, t.dispatch))
                            }
                        }
                    }
                })
            }
            const E = (t, e) => {
                    let n = w.getState(t);
                    return !(!n || 0 == n.done.eventCount) && (e && y(n, t, e, !1), !0)
                },
                C = (t, e) => {
                    let n = w.getState(t);
                    return !(!n || 0 == n.undone.eventCount) && (e && y(n, t, e, !0), !0)
                };
            const S = r.hj.create({
                name: "history",
                addOptions: () => ({
                    depth: 100,
                    newGroupDelay: 500
                }),
                addCommands: () => ({
                    undo: () => ({
                        state: t,
                        dispatch: e
                    }) => E(t, e),
                    redo: () => ({
                        state: t,
                        dispatch: e
                    }) => C(t, e)
                }),
                addProseMirrorPlugins() {
                    return [k(this.options)]
                },
                addKeyboardShortcuts() {
                    return {
                        "Mod-z": () => this.editor.commands.undo(),
                        "Mod-Z": () => this.editor.commands.undo(),
                        "Mod-y": () => this.editor.commands.redo(),
                        "Mod-Y": () => this.editor.commands.redo(),
                        "Shift-Mod-z": () => this.editor.commands.redo(),
                        "Shift-Mod-Z": () => this.editor.commands.redo(),
                        "Mod-\u044f": () => this.editor.commands.undo(),
                        "Shift-Mod-\u044f": () => this.editor.commands.redo()
                    }
                }
            })
        },
        20729: function(t, e, n) {
            "use strict";
            n.d(e, {
                M_: function() {
                    return m
                },
                T5: function() {
                    return h
                },
                fW: function() {
                    return y
                },
                jE: function() {
                    return c
                },
                kg: function() {
                    return u
                }
            });
            var r = n(70079),
                o = n(99581),
                i = n(53975);
            const s = ({
                renderers: t
            }) => r.createElement(r.Fragment, null, Object.entries(t).map((([t, e]) => o.createPortal(e.reactElement, e.element, t))));
            class a extends r.Component {
                constructor(t) {
                    super(t), this.editorContentRef = r.createRef(), this.initialized = !1, this.state = {
                        renderers: {}
                    }
                }
                componentDidMount() {
                    this.init()
                }
                componentDidUpdate() {
                    this.init()
                }
                init() {
                    const {
                        editor: t
                    } = this.props;
                    if (t && t.options.element) {
                        if (t.contentComponent) return;
                        const e = this.editorContentRef.current;
                        e.append(...t.options.element.childNodes), t.setOptions({
                            element: e
                        }), t.contentComponent = this, t.createNodeViews(), this.initialized = !0
                    }
                }
                maybeFlushSync(t) {
                    this.initialized ? (0, o.flushSync)(t) : t()
                }
                setRenderer(t, e) {
                    this.maybeFlushSync((() => {
                        this.setState((({
                            renderers: n
                        }) => ({
                            renderers: { ...n,
                                [t]: e
                            }
                        })))
                    }))
                }
                removeRenderer(t) {
                    this.maybeFlushSync((() => {
                        this.setState((({
                            renderers: e
                        }) => {
                            const n = { ...e
                            };
                            return delete n[t], {
                                renderers: n
                            }
                        }))
                    }))
                }
                componentWillUnmount() {
                    const {
                        editor: t
                    } = this.props;
                    if (!t) return;
                    if (this.initialized = !1, t.isDestroyed || t.view.setProps({
                            nodeViews: {}
                        }), t.contentComponent = null, !t.options.element.firstChild) return;
                    const e = document.createElement("div");
                    e.append(...t.options.element.childNodes), t.setOptions({
                        element: e
                    })
                }
                render() {
                    const {
                        editor: t,
                        ...e
                    } = this.props;
                    return r.createElement(r.Fragment, null, r.createElement("div", {
                        ref: this.editorContentRef,
                        ...e
                    }), r.createElement(s, {
                        renderers: this.state.renderers
                    }))
                }
            }
            const u = r.memo((t => {
                const e = r.useMemo((() => Math.floor(4294967295 * Math.random()).toString()), [t.editor]);
                return r.createElement(a, {
                    key: e,
                    ...t
                })
            }));
            class l extends i.ML {
                constructor() {
                    super(...arguments), this.contentComponent = null
                }
            }
            const c = (t = {}, e = []) => {
                    const [n, o] = (0, r.useState)(null), i = function() {
                        const [, t] = (0, r.useState)(0);
                        return () => t((t => t + 1))
                    }(), {
                        onBeforeCreate: s,
                        onBlur: a,
                        onCreate: u,
                        onDestroy: c,
                        onFocus: p,
                        onSelectionUpdate: d,
                        onTransaction: f,
                        onUpdate: h
                    } = t, m = (0, r.useRef)(s), g = (0, r.useRef)(a), y = (0, r.useRef)(u), v = (0, r.useRef)(c), b = (0, r.useRef)(p), D = (0, r.useRef)(d), w = (0, r.useRef)(f), x = (0, r.useRef)(h);
                    return (0, r.useEffect)((() => {
                        n && (s && (n.off("beforeCreate", m.current), n.on("beforeCreate", s), m.current = s), a && (n.off("blur", g.current), n.on("blur", a), g.current = a), u && (n.off("create", y.current), n.on("create", u), y.current = u), c && (n.off("destroy", v.current), n.on("destroy", c), v.current = c), p && (n.off("focus", b.current), n.on("focus", p), b.current = p), d && (n.off("selectionUpdate", D.current), n.on("selectionUpdate", d), D.current = d), f && (n.off("transaction", w.current), n.on("transaction", f), w.current = f), h && (n.off("update", x.current), n.on("update", h), x.current = h))
                    }), [s, a, u, c, p, d, f, h, n]), (0, r.useEffect)((() => {
                        let e = !0;
                        const n = new l(t);
                        return o(n), n.on("transaction", (() => {
                            requestAnimationFrame((() => {
                                requestAnimationFrame((() => {
                                    e && i()
                                }))
                            }))
                        })), () => {
                            e = !1
                        }
                    }), e), (0, r.useEffect)((() => () => {
                        null === n || void 0 === n || n.destroy()
                    }), [n]), n
                },
                p = (0, r.createContext)({
                    editor: null
                }),
                d = (p.Consumer, (0, r.createContext)({
                    onDragStart: void 0
                })),
                f = () => (0, r.useContext)(d),
                h = r.forwardRef(((t, e) => {
                    const {
                        onDragStart: n
                    } = f(), o = t.as || "div";
                    return r.createElement(o, { ...t,
                        ref: e,
                        "data-node-view-wrapper": "",
                        onDragStart: n,
                        style: {
                            whiteSpace: "normal",
                            ...t.style
                        }
                    })
                }));
            class m {
                constructor(t, {
                    editor: e,
                    props: n = {},
                    as: r = "div",
                    className: o = "",
                    attrs: i
                }) {
                    this.ref = null, this.id = Math.floor(4294967295 * Math.random()).toString(), this.component = t, this.editor = e, this.props = n, this.element = document.createElement(r), this.element.classList.add("react-renderer"), o && this.element.classList.add(...o.split(" ")), i && Object.keys(i).forEach((t => {
                        this.element.setAttribute(t, i[t])
                    })), this.render()
                }
                render() {
                    var t, e;
                    const n = this.component,
                        o = this.props;
                    (function(t) {
                        return !("function" !== typeof t || !t.prototype || !t.prototype.isReactComponent)
                    }(n) || function(t) {
                        var e;
                        return !("object" !== typeof t || "Symbol(react.forward_ref)" !== (null === (e = t.$$typeof) || void 0 === e ? void 0 : e.toString()))
                    }(n)) && (o.ref = t => {
                        this.ref = t
                    }), this.reactElement = r.createElement(n, { ...o
                    }), null === (e = null === (t = this.editor) || void 0 === t ? void 0 : t.contentComponent) || void 0 === e || e.setRenderer(this.id, this)
                }
                updateProps(t = {}) {
                    this.props = { ...this.props,
                        ...t
                    }, this.render()
                }
                destroy() {
                    var t, e;
                    null === (e = null === (t = this.editor) || void 0 === t ? void 0 : t.contentComponent) || void 0 === e || e.removeRenderer(this.id)
                }
            }
            class g extends i.DK {
                mount() {
                    const t = {
                        editor: this.editor,
                        node: this.node,
                        decorations: this.decorations,
                        selected: !1,
                        extension: this.extension,
                        getPos: () => this.getPos(),
                        updateAttributes: (t = {}) => this.updateAttributes(t),
                        deleteNode: () => this.deleteNode()
                    };
                    if (!this.component.displayName) {
                        const t = t => t.charAt(0).toUpperCase() + t.substring(1);
                        this.component.displayName = t(this.extension.name)
                    }
                    const e = t => {
                        const e = this.component,
                            n = this.onDragStart.bind(this);
                        return r.createElement(r.Fragment, null, r.createElement(d.Provider, {
                            value: {
                                onDragStart: n,
                                nodeViewContentRef: t => {
                                    t && this.contentDOMElement && t.firstChild !== this.contentDOMElement && t.appendChild(this.contentDOMElement)
                                }
                            }
                        }, r.createElement(e, { ...t
                        })))
                    };
                    e.displayName = "ReactNodeView", this.contentDOMElement = this.node.isLeaf ? null : document.createElement(this.node.isInline ? "span" : "div"), this.contentDOMElement && (this.contentDOMElement.style.whiteSpace = "inherit");
                    let n = this.node.isInline ? "span" : "div";
                    this.options.as && (n = this.options.as);
                    const {
                        className: o = ""
                    } = this.options;
                    this.handleSelectionUpdate = this.handleSelectionUpdate.bind(this), this.editor.on("selectionUpdate", this.handleSelectionUpdate), this.renderer = new m(e, {
                        editor: this.editor,
                        props: t,
                        as: n,
                        className: `node-${this.node.type.name} ${o}`.trim(),
                        attrs: this.options.attrs
                    })
                }
                get dom() {
                    var t;
                    if (this.renderer.element.firstElementChild && !(null === (t = this.renderer.element.firstElementChild) || void 0 === t ? void 0 : t.hasAttribute("data-node-view-wrapper"))) throw Error("Please use the NodeViewWrapper component for your node view.");
                    return this.renderer.element
                }
                get contentDOM() {
                    return this.node.isLeaf ? null : this.contentDOMElement
                }
                handleSelectionUpdate() {
                    const {
                        from: t,
                        to: e
                    } = this.editor.state.selection;
                    t <= this.getPos() && e >= this.getPos() + this.node.nodeSize ? this.selectNode() : this.deselectNode()
                }
                update(t, e) {
                    const n = t => {
                        this.renderer.updateProps(t)
                    };
                    if (t.type !== this.node.type) return !1;
                    if ("function" === typeof this.options.update) {
                        const r = this.node,
                            o = this.decorations;
                        return this.node = t, this.decorations = e, this.options.update({
                            oldNode: r,
                            oldDecorations: o,
                            newNode: t,
                            newDecorations: e,
                            updateProps: () => n({
                                node: t,
                                decorations: e
                            })
                        })
                    }
                    return t === this.node && this.decorations === e || (this.node = t, this.decorations = e, n({
                        node: t,
                        decorations: e
                    })), !0
                }
                selectNode() {
                    this.renderer.updateProps({
                        selected: !0
                    })
                }
                deselectNode() {
                    this.renderer.updateProps({
                        selected: !1
                    })
                }
                destroy() {
                    this.renderer.destroy(), this.editor.off("selectionUpdate", this.handleSelectionUpdate), this.contentDOMElement = null
                }
            }

            function y(t, e) {
                return n => n.editor.contentComponent ? new g(t, n, e) : {}
            }
        },
        81972: function(t, e, n) {
            "use strict";
            n.d(e, {
                ZP: function() {
                    return a
                }
            });
            var r = n(60314),
                o = n(98715),
                i = n(53975);
            const s = new r.H$("suggestion");

            function a({
                pluginKey: t = s,
                editor: e,
                char: n = "@",
                allowSpaces: a = !1,
                allowedPrefixes: u = [" "],
                startOfLine: l = !1,
                decorationTag: c = "span",
                decorationClass: p = "suggestion",
                command: d = (() => null),
                items: f = (() => []),
                render: h = (() => ({})),
                allow: m = (() => !0)
            }) {
                let g;
                const y = null === h || void 0 === h ? void 0 : h(),
                    v = new r.Sy({
                        key: t,
                        view() {
                            return {
                                update: async (t, n) => {
                                    var r, o, i, s, a, u, l;
                                    const c = null === (r = this.key) || void 0 === r ? void 0 : r.getState(n),
                                        p = null === (o = this.key) || void 0 === o ? void 0 : o.getState(t.state),
                                        h = c.active && p.active && c.range.from !== p.range.from,
                                        m = !c.active && p.active,
                                        v = c.active && !p.active,
                                        b = m || h,
                                        D = !m && !v && c.query !== p.query && !h,
                                        w = v || h;
                                    if (!b && !D && !w) return;
                                    const x = w && !b ? c : p,
                                        k = t.dom.querySelector(`[data-decoration-id="${x.decorationId}"]`);
                                    g = {
                                        editor: e,
                                        range: x.range,
                                        query: x.query,
                                        text: x.text,
                                        items: [],
                                        command: t => {
                                            d({
                                                editor: e,
                                                range: x.range,
                                                props: t
                                            })
                                        },
                                        decorationNode: k,
                                        clientRect: k ? () => {
                                            var n;
                                            const {
                                                decorationId: r
                                            } = null === (n = this.key) || void 0 === n ? void 0 : n.getState(e.state), o = t.dom.querySelector(`[data-decoration-id="${r}"]`);
                                            return (null === o || void 0 === o ? void 0 : o.getBoundingClientRect()) || null
                                        } : null
                                    }, b && (null === (i = null === y || void 0 === y ? void 0 : y.onBeforeStart) || void 0 === i || i.call(y, g)), D && (null === (s = null === y || void 0 === y ? void 0 : y.onBeforeUpdate) || void 0 === s || s.call(y, g)), (D || b) && (g.items = await f({
                                        editor: e,
                                        query: x.query
                                    })), w && (null === (a = null === y || void 0 === y ? void 0 : y.onExit) || void 0 === a || a.call(y, g)), D && (null === (u = null === y || void 0 === y ? void 0 : y.onUpdate) || void 0 === u || u.call(y, g)), b && (null === (l = null === y || void 0 === y ? void 0 : y.onStart) || void 0 === l || l.call(y, g))
                                },
                                destroy: () => {
                                    var t;
                                    g && (null === (t = null === y || void 0 === y ? void 0 : y.onExit) || void 0 === t || t.call(y, g))
                                }
                            }
                        },
                        state: {
                            init: () => ({
                                active: !1,
                                range: {
                                    from: 0,
                                    to: 0
                                },
                                query: null,
                                text: null,
                                composing: !1
                            }),
                            apply(t, r, o, s) {
                                const {
                                    isEditable: c
                                } = e, {
                                    composing: p
                                } = e.view, {
                                    selection: d
                                } = t, {
                                    empty: f,
                                    from: h
                                } = d, g = { ...r
                                };
                                if (g.composing = p, c && (f || e.view.composing)) {
                                    !(h < r.range.from || h > r.range.to) || p || r.composing || (g.active = !1);
                                    const t = function(t) {
                                            var e;
                                            const {
                                                char: n,
                                                allowSpaces: r,
                                                allowedPrefixes: o,
                                                startOfLine: s,
                                                $position: a
                                            } = t, u = (0, i.Ov)(n), l = new RegExp(`\\s${u}$`), c = s ? "^" : "", p = r ? new RegExp(`${c}${u}.*?(?=\\s${u}|$)`, "gm") : new RegExp(`${c}(?:^)?${u}[^\\s${u}]*`, "gm"), d = (null === (e = a.nodeBefore) || void 0 === e ? void 0 : e.isText) && a.nodeBefore.text;
                                            if (!d) return null;
                                            const f = a.pos - d.length,
                                                h = Array.from(d.matchAll(p)).pop();
                                            if (!h || void 0 === h.input || void 0 === h.index) return null;
                                            const m = h.input.slice(Math.max(0, h.index - 1), h.index),
                                                g = new RegExp(`^[${null===o||void 0===o?void 0:o.join("")}\0]?$`).test(m);
                                            if (null !== o && !g) return null;
                                            const y = f + h.index;
                                            let v = y + h[0].length;
                                            return r && l.test(d.slice(v - 1, v + 1)) && (h[0] += " ", v += 1), y < a.pos && v >= a.pos ? {
                                                range: {
                                                    from: y,
                                                    to: v
                                                },
                                                query: h[0].slice(n.length),
                                                text: h[0]
                                            } : null
                                        }({
                                            char: n,
                                            allowSpaces: a,
                                            allowedPrefixes: u,
                                            startOfLine: l,
                                            $position: d.$from
                                        }),
                                        o = `id_${Math.floor(4294967295*Math.random())}`;
                                    t && m({
                                        editor: e,
                                        state: s,
                                        range: t.range
                                    }) ? (g.active = !0, g.decorationId = r.decorationId ? r.decorationId : o, g.range = t.range, g.query = t.query, g.text = t.text) : g.active = !1
                                } else g.active = !1;
                                return g.active || (g.decorationId = null, g.range = {
                                    from: 0,
                                    to: 0
                                }, g.query = null, g.text = null), g
                            }
                        },
                        props: {
                            handleKeyDown(t, e) {
                                var n;
                                const {
                                    active: r,
                                    range: o
                                } = v.getState(t.state);
                                return r && (null === (n = null === y || void 0 === y ? void 0 : y.onKeyDown) || void 0 === n ? void 0 : n.call(y, {
                                    view: t,
                                    event: e,
                                    range: o
                                })) || !1
                            },
                            decorations(t) {
                                const {
                                    active: e,
                                    range: n,
                                    decorationId: r
                                } = v.getState(t);
                                return e ? o.EH.create(t.doc, [o.p.inline(n.from, n.to, {
                                    nodeName: c,
                                    class: p,
                                    "data-decoration-id": r
                                })]) : null
                            }
                        }
                    });
                return v
            }
        },
        35888: function(t, e, n) {
            "use strict";

            function r(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }
            n.d(e, {
                Z: function() {
                    return r
                }
            })
        },
        1019: function(t, e, n) {
            "use strict";

            function r(t) {
                return r = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, r(t)
            }
            n.d(e, {
                Z: function() {
                    return r
                }
            })
        },
        29755: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return o
                }
            });
            var r = n(67912);

            function o(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (0, r.Z)(t, e)
            }
        },
        83630: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return i
                }
            });
            var r = n(6722),
                o = n(35888);

            function i(t, e) {
                if (e && ("object" === r(e) || "function" === typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return (0, o.Z)(t)
            }
        },
        67912: function(t, e, n) {
            "use strict";

            function r(t, e) {
                return r = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, r(t, e)
            }
            n.d(e, {
                Z: function() {
                    return r
                }
            })
        },
        88264: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return a
                }
            });
            var r = n(1019),
                o = n(67912);

            function i() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }

            function s(t, e, n) {
                return s = i() ? Reflect.construct : function(t, e, n) {
                    var r = [null];
                    r.push.apply(r, e);
                    var i = new(Function.bind.apply(t, r));
                    return n && (0, o.Z)(i, n.prototype), i
                }, s.apply(null, arguments)
            }

            function a(t) {
                var e = "function" === typeof Map ? new Map : void 0;
                return a = function(t) {
                    if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
                    var n;
                    if ("function" !== typeof t) throw new TypeError("Super expression must either be null or a function");
                    if ("undefined" !== typeof e) {
                        if (e.has(t)) return e.get(t);
                        e.set(t, i)
                    }

                    function i() {
                        return s(t, arguments, (0, r.Z)(this).constructor)
                    }
                    return i.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: i,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), (0, o.Z)(i, t)
                }, a(t)
            }
        },
        80326: function(t, e, n) {
            "use strict";
            n.d(e, {
                $: function() {
                    return l
                },
                h: function() {
                    return u
                }
            });
            var r = n(21865),
                o = n(60314);
            const i = "undefined" != typeof navigator && /Mac|iP(hone|[oa]d)/.test(navigator.platform);

            function s(t) {
                let e, n, r, o, s = t.split(/-(?!$)/),
                    a = s[s.length - 1];
                "Space" == a && (a = " ");
                for (let u = 0; u < s.length - 1; u++) {
                    let t = s[u];
                    if (/^(cmd|meta|m)$/i.test(t)) o = !0;
                    else if (/^a(lt)?$/i.test(t)) e = !0;
                    else if (/^(c|ctrl|control)$/i.test(t)) n = !0;
                    else if (/^s(hift)?$/i.test(t)) r = !0;
                    else {
                        if (!/^mod$/i.test(t)) throw new Error("Unrecognized modifier name: " + t);
                        i ? o = !0 : n = !0
                    }
                }
                return e && (a = "Alt-" + a), n && (a = "Ctrl-" + a), o && (a = "Meta-" + a), r && (a = "Shift-" + a), a
            }

            function a(t, e, n = !0) {
                return e.altKey && (t = "Alt-" + t), e.ctrlKey && (t = "Ctrl-" + t), e.metaKey && (t = "Meta-" + t), n && e.shiftKey && (t = "Shift-" + t), t
            }

            function u(t) {
                return new o.Sy({
                    props: {
                        handleKeyDown: l(t)
                    }
                })
            }

            function l(t) {
                let e = function(t) {
                    let e = Object.create(null);
                    for (let n in t) e[s(n)] = t[n];
                    return e
                }(t);
                return function(t, n) {
                    let o, i = (0, r.YG)(n),
                        s = e[a(i, n)];
                    if (s && s(t.state, t.dispatch, t)) return !0;
                    if (1 == i.length && " " != i) {
                        if (n.shiftKey) {
                            let r = e[a(i, n, !1)];
                            if (r && r(t.state, t.dispatch, t)) return !0
                        }
                        if ((n.shiftKey || n.altKey || n.metaKey || i.charCodeAt(0) > 127) && (o = r.ue[n.keyCode]) && o != i) {
                            let r = e[a(o, n)];
                            if (r && r(t.state, t.dispatch, t)) return !0
                        }
                    }
                    return !1
                }
            }
        },
        31506: function(t, e, n) {
            "use strict";

            function r(t) {
                this.content = t
            }
            n.d(e, {
                aw: function() {
                    return X
                },
                PW: function() {
                    return at
                },
                HY: function() {
                    return a
                },
                vc: function() {
                    return p
                },
                ZU: function() {
                    return U
                },
                NB: function() {
                    return T
                },
                Ts: function() {
                    return M
                },
                e4: function() {
                    return d
                },
                V_: function() {
                    return K
                },
                p2: function() {
                    return f
                }
            }), r.prototype = {
                constructor: r,
                find: function(t) {
                    for (var e = 0; e < this.content.length; e += 2)
                        if (this.content[e] === t) return e;
                    return -1
                },
                get: function(t) {
                    var e = this.find(t);
                    return -1 == e ? void 0 : this.content[e + 1]
                },
                update: function(t, e, n) {
                    var o = n && n != t ? this.remove(n) : this,
                        i = o.find(t),
                        s = o.content.slice();
                    return -1 == i ? s.push(n || t, e) : (s[i + 1] = e, n && (s[i] = n)), new r(s)
                },
                remove: function(t) {
                    var e = this.find(t);
                    if (-1 == e) return this;
                    var n = this.content.slice();
                    return n.splice(e, 2), new r(n)
                },
                addToStart: function(t, e) {
                    return new r([t, e].concat(this.remove(t).content))
                },
                addToEnd: function(t, e) {
                    var n = this.remove(t).content.slice();
                    return n.push(t, e), new r(n)
                },
                addBefore: function(t, e, n) {
                    var o = this.remove(e),
                        i = o.content.slice(),
                        s = o.find(t);
                    return i.splice(-1 == s ? i.length : s, 0, e, n), new r(i)
                },
                forEach: function(t) {
                    for (var e = 0; e < this.content.length; e += 2) t(this.content[e], this.content[e + 1])
                },
                prepend: function(t) {
                    return (t = r.from(t)).size ? new r(t.content.concat(this.subtract(t).content)) : this
                },
                append: function(t) {
                    return (t = r.from(t)).size ? new r(this.subtract(t).content.concat(t.content)) : this
                },
                subtract: function(t) {
                    var e = this;
                    t = r.from(t);
                    for (var n = 0; n < t.content.length; n += 2) e = e.remove(t.content[n]);
                    return e
                },
                toObject: function() {
                    var t = {};
                    return this.forEach((function(e, n) {
                        t[e] = n
                    })), t
                },
                get size() {
                    return this.content.length >> 1
                }
            }, r.from = function(t) {
                if (t instanceof r) return t;
                var e = [];
                if (t)
                    for (var n in t) e.push(n, t[n]);
                return new r(e)
            };
            var o = r;

            function i(t, e, n) {
                for (let r = 0;; r++) {
                    if (r == t.childCount || r == e.childCount) return t.childCount == e.childCount ? null : n;
                    let o = t.child(r),
                        s = e.child(r);
                    if (o != s) {
                        if (!o.sameMarkup(s)) return n;
                        if (o.isText && o.text != s.text) {
                            for (let t = 0; o.text[t] == s.text[t]; t++) n++;
                            return n
                        }
                        if (o.content.size || s.content.size) {
                            let t = i(o.content, s.content, n + 1);
                            if (null != t) return t
                        }
                        n += o.nodeSize
                    } else n += o.nodeSize
                }
            }

            function s(t, e, n, r) {
                for (let o = t.childCount, i = e.childCount;;) {
                    if (0 == o || 0 == i) return o == i ? null : {
                        a: n,
                        b: r
                    };
                    let a = t.child(--o),
                        u = e.child(--i),
                        l = a.nodeSize;
                    if (a != u) {
                        if (!a.sameMarkup(u)) return {
                            a: n,
                            b: r
                        };
                        if (a.isText && a.text != u.text) {
                            let t = 0,
                                e = Math.min(a.text.length, u.text.length);
                            for (; t < e && a.text[a.text.length - t - 1] == u.text[u.text.length - t - 1];) t++, n--, r--;
                            return {
                                a: n,
                                b: r
                            }
                        }
                        if (a.content.size || u.content.size) {
                            let t = s(a.content, u.content, n - 1, r - 1);
                            if (t) return t
                        }
                        n -= l, r -= l
                    } else n -= l, r -= l
                }
            }
            class a {
                constructor(t, e) {
                    if (this.content = t, this.size = e || 0, null == e)
                        for (let n = 0; n < t.length; n++) this.size += t[n].nodeSize
                }
                nodesBetween(t, e, n, r = 0, o) {
                    for (let i = 0, s = 0; s < e; i++) {
                        let a = this.content[i],
                            u = s + a.nodeSize;
                        if (u > t && !1 !== n(a, r + s, o || null, i) && a.content.size) {
                            let o = s + 1;
                            a.nodesBetween(Math.max(0, t - o), Math.min(a.content.size, e - o), n, r + o)
                        }
                        s = u
                    }
                }
                descendants(t) {
                    this.nodesBetween(0, this.size, t)
                }
                textBetween(t, e, n, r) {
                    let o = "",
                        i = !0;
                    return this.nodesBetween(t, e, ((s, a) => {
                        s.isText ? (o += s.text.slice(Math.max(t, a) - a, e - a), i = !n) : s.isLeaf ? (r ? o += "function" === typeof r ? r(s) : r : s.type.spec.leafText && (o += s.type.spec.leafText(s)), i = !n) : !i && s.isBlock && (o += n, i = !0)
                    }), 0), o
                }
                append(t) {
                    if (!t.size) return this;
                    if (!this.size) return t;
                    let e = this.lastChild,
                        n = t.firstChild,
                        r = this.content.slice(),
                        o = 0;
                    for (e.isText && e.sameMarkup(n) && (r[r.length - 1] = e.withText(e.text + n.text), o = 1); o < t.content.length; o++) r.push(t.content[o]);
                    return new a(r, this.size + t.size)
                }
                cut(t, e = this.size) {
                    if (0 == t && e == this.size) return this;
                    let n = [],
                        r = 0;
                    if (e > t)
                        for (let o = 0, i = 0; i < e; o++) {
                            let s = this.content[o],
                                a = i + s.nodeSize;
                            a > t && ((i < t || a > e) && (s = s.isText ? s.cut(Math.max(0, t - i), Math.min(s.text.length, e - i)) : s.cut(Math.max(0, t - i - 1), Math.min(s.content.size, e - i - 1))), n.push(s), r += s.nodeSize), i = a
                        }
                    return new a(n, r)
                }
                cutByIndex(t, e) {
                    return t == e ? a.empty : 0 == t && e == this.content.length ? this : new a(this.content.slice(t, e))
                }
                replaceChild(t, e) {
                    let n = this.content[t];
                    if (n == e) return this;
                    let r = this.content.slice(),
                        o = this.size + e.nodeSize - n.nodeSize;
                    return r[t] = e, new a(r, o)
                }
                addToStart(t) {
                    return new a([t].concat(this.content), this.size + t.nodeSize)
                }
                addToEnd(t) {
                    return new a(this.content.concat(t), this.size + t.nodeSize)
                }
                eq(t) {
                    if (this.content.length != t.content.length) return !1;
                    for (let e = 0; e < this.content.length; e++)
                        if (!this.content[e].eq(t.content[e])) return !1;
                    return !0
                }
                get firstChild() {
                    return this.content.length ? this.content[0] : null
                }
                get lastChild() {
                    return this.content.length ? this.content[this.content.length - 1] : null
                }
                get childCount() {
                    return this.content.length
                }
                child(t) {
                    let e = this.content[t];
                    if (!e) throw new RangeError("Index " + t + " out of range for " + this);
                    return e
                }
                maybeChild(t) {
                    return this.content[t] || null
                }
                forEach(t) {
                    for (let e = 0, n = 0; e < this.content.length; e++) {
                        let r = this.content[e];
                        t(r, n, e), n += r.nodeSize
                    }
                }
                findDiffStart(t, e = 0) {
                    return i(this, t, e)
                }
                findDiffEnd(t, e = this.size, n = t.size) {
                    return s(this, t, e, n)
                }
                findIndex(t, e = -1) {
                    if (0 == t) return l(0, t);
                    if (t == this.size) return l(this.content.length, t);
                    if (t > this.size || t < 0) throw new RangeError(`Position ${t} outside of fragment (${this})`);
                    for (let n = 0, r = 0;; n++) {
                        let o = r + this.child(n).nodeSize;
                        if (o >= t) return o == t || e > 0 ? l(n + 1, o) : l(n, r);
                        r = o
                    }
                }
                toString() {
                    return "<" + this.toStringInner() + ">"
                }
                toStringInner() {
                    return this.content.join(", ")
                }
                toJSON() {
                    return this.content.length ? this.content.map((t => t.toJSON())) : null
                }
                static fromJSON(t, e) {
                    if (!e) return a.empty;
                    if (!Array.isArray(e)) throw new RangeError("Invalid input for Fragment.fromJSON");
                    return new a(e.map(t.nodeFromJSON))
                }
                static fromArray(t) {
                    if (!t.length) return a.empty;
                    let e, n = 0;
                    for (let r = 0; r < t.length; r++) {
                        let o = t[r];
                        n += o.nodeSize, r && o.isText && t[r - 1].sameMarkup(o) ? (e || (e = t.slice(0, r)), e[e.length - 1] = o.withText(e[e.length - 1].text + o.text)) : e && e.push(o)
                    }
                    return new a(e || t, n)
                }
                static from(t) {
                    if (!t) return a.empty;
                    if (t instanceof a) return t;
                    if (Array.isArray(t)) return this.fromArray(t);
                    if (t.attrs) return new a([t], t.nodeSize);
                    throw new RangeError("Can not convert " + t + " to a Fragment" + (t.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""))
                }
            }
            a.empty = new a([], 0);
            const u = {
                index: 0,
                offset: 0
            };

            function l(t, e) {
                return u.index = t, u.offset = e, u
            }

            function c(t, e) {
                if (t === e) return !0;
                if (!t || "object" != typeof t || !e || "object" != typeof e) return !1;
                let n = Array.isArray(t);
                if (Array.isArray(e) != n) return !1;
                if (n) {
                    if (t.length != e.length) return !1;
                    for (let n = 0; n < t.length; n++)
                        if (!c(t[n], e[n])) return !1
                } else {
                    for (let n in t)
                        if (!(n in e) || !c(t[n], e[n])) return !1;
                    for (let n in e)
                        if (!(n in t)) return !1
                }
                return !0
            }
            class p {
                constructor(t, e) {
                    this.type = t, this.attrs = e
                }
                addToSet(t) {
                    let e, n = !1;
                    for (let r = 0; r < t.length; r++) {
                        let o = t[r];
                        if (this.eq(o)) return t;
                        if (this.type.excludes(o.type)) e || (e = t.slice(0, r));
                        else {
                            if (o.type.excludes(this.type)) return t;
                            !n && o.type.rank > this.type.rank && (e || (e = t.slice(0, r)), e.push(this), n = !0), e && e.push(o)
                        }
                    }
                    return e || (e = t.slice()), n || e.push(this), e
                }
                removeFromSet(t) {
                    for (let e = 0; e < t.length; e++)
                        if (this.eq(t[e])) return t.slice(0, e).concat(t.slice(e + 1));
                    return t
                }
                isInSet(t) {
                    for (let e = 0; e < t.length; e++)
                        if (this.eq(t[e])) return !0;
                    return !1
                }
                eq(t) {
                    return this == t || this.type == t.type && c(this.attrs, t.attrs)
                }
                toJSON() {
                    let t = {
                        type: this.type.name
                    };
                    for (let e in this.attrs) {
                        t.attrs = this.attrs;
                        break
                    }
                    return t
                }
                static fromJSON(t, e) {
                    if (!e) throw new RangeError("Invalid input for Mark.fromJSON");
                    let n = t.marks[e.type];
                    if (!n) throw new RangeError(`There is no mark type ${e.type} in this schema`);
                    return n.create(e.attrs)
                }
                static sameSet(t, e) {
                    if (t == e) return !0;
                    if (t.length != e.length) return !1;
                    for (let n = 0; n < t.length; n++)
                        if (!t[n].eq(e[n])) return !1;
                    return !0
                }
                static setFrom(t) {
                    if (!t || Array.isArray(t) && 0 == t.length) return p.none;
                    if (t instanceof p) return [t];
                    let e = t.slice();
                    return e.sort(((t, e) => t.type.rank - e.type.rank)), e
                }
            }
            p.none = [];
            class d extends Error {}
            class f {
                constructor(t, e, n) {
                    this.content = t, this.openStart = e, this.openEnd = n
                }
                get size() {
                    return this.content.size - this.openStart - this.openEnd
                }
                insertAt(t, e) {
                    let n = m(this.content, t + this.openStart, e);
                    return n && new f(n, this.openStart, this.openEnd)
                }
                removeBetween(t, e) {
                    return new f(h(this.content, t + this.openStart, e + this.openStart), this.openStart, this.openEnd)
                }
                eq(t) {
                    return this.content.eq(t.content) && this.openStart == t.openStart && this.openEnd == t.openEnd
                }
                toString() {
                    return this.content + "(" + this.openStart + "," + this.openEnd + ")"
                }
                toJSON() {
                    if (!this.content.size) return null;
                    let t = {
                        content: this.content.toJSON()
                    };
                    return this.openStart > 0 && (t.openStart = this.openStart), this.openEnd > 0 && (t.openEnd = this.openEnd), t
                }
                static fromJSON(t, e) {
                    if (!e) return f.empty;
                    let n = e.openStart || 0,
                        r = e.openEnd || 0;
                    if ("number" != typeof n || "number" != typeof r) throw new RangeError("Invalid input for Slice.fromJSON");
                    return new f(a.fromJSON(t, e.content), n, r)
                }
                static maxOpen(t, e = !0) {
                    let n = 0,
                        r = 0;
                    for (let o = t.firstChild; o && !o.isLeaf && (e || !o.type.spec.isolating); o = o.firstChild) n++;
                    for (let o = t.lastChild; o && !o.isLeaf && (e || !o.type.spec.isolating); o = o.lastChild) r++;
                    return new f(t, n, r)
                }
            }

            function h(t, e, n) {
                let {
                    index: r,
                    offset: o
                } = t.findIndex(e), i = t.maybeChild(r), {
                    index: s,
                    offset: a
                } = t.findIndex(n);
                if (o == e || i.isText) {
                    if (a != n && !t.child(s).isText) throw new RangeError("Removing non-flat range");
                    return t.cut(0, e).append(t.cut(n))
                }
                if (r != s) throw new RangeError("Removing non-flat range");
                return t.replaceChild(r, i.copy(h(i.content, e - o - 1, n - o - 1)))
            }

            function m(t, e, n, r) {
                let {
                    index: o,
                    offset: i
                } = t.findIndex(e), s = t.maybeChild(o);
                if (i == e || s.isText) return r && !r.canReplace(o, o, n) ? null : t.cut(0, e).append(n).append(t.cut(e));
                let a = m(s.content, e - i - 1, n);
                return a && t.replaceChild(o, s.copy(a))
            }

            function g(t, e, n) {
                if (n.openStart > t.depth) throw new d("Inserted content deeper than insertion position");
                if (t.depth - n.openStart != e.depth - n.openEnd) throw new d("Inconsistent open depths");
                return y(t, e, n, 0)
            }

            function y(t, e, n, r) {
                let o = t.index(r),
                    i = t.node(r);
                if (o == e.index(r) && r < t.depth - n.openStart) {
                    let s = y(t, e, n, r + 1);
                    return i.copy(i.content.replaceChild(o, s))
                }
                if (n.content.size) {
                    if (n.openStart || n.openEnd || t.depth != r || e.depth != r) {
                        let {
                            start: o,
                            end: s
                        } = function(t, e) {
                            let n = e.depth - t.openStart,
                                r = e.node(n).copy(t.content);
                            for (let o = n - 1; o >= 0; o--) r = e.node(o).copy(a.from(r));
                            return {
                                start: r.resolveNoCache(t.openStart + n),
                                end: r.resolveNoCache(r.content.size - t.openEnd - n)
                            }
                        }(n, t);
                        return x(i, k(t, o, s, e, r))
                    } {
                        let r = t.parent,
                            o = r.content;
                        return x(r, o.cut(0, t.parentOffset).append(n.content).append(o.cut(e.parentOffset)))
                    }
                }
                return x(i, E(t, e, r))
            }

            function v(t, e) {
                if (!e.type.compatibleContent(t.type)) throw new d("Cannot join " + e.type.name + " onto " + t.type.name)
            }

            function b(t, e, n) {
                let r = t.node(n);
                return v(r, e.node(n)), r
            }

            function D(t, e) {
                let n = e.length - 1;
                n >= 0 && t.isText && t.sameMarkup(e[n]) ? e[n] = t.withText(e[n].text + t.text) : e.push(t)
            }

            function w(t, e, n, r) {
                let o = (e || t).node(n),
                    i = 0,
                    s = e ? e.index(n) : o.childCount;
                t && (i = t.index(n), t.depth > n ? i++ : t.textOffset && (D(t.nodeAfter, r), i++));
                for (let a = i; a < s; a++) D(o.child(a), r);
                e && e.depth == n && e.textOffset && D(e.nodeBefore, r)
            }

            function x(t, e) {
                return t.type.checkContent(e), t.copy(e)
            }

            function k(t, e, n, r, o) {
                let i = t.depth > o && b(t, e, o + 1),
                    s = r.depth > o && b(n, r, o + 1),
                    u = [];
                return w(null, t, o, u), i && s && e.index(o) == n.index(o) ? (v(i, s), D(x(i, k(t, e, n, r, o + 1)), u)) : (i && D(x(i, E(t, e, o + 1)), u), w(e, n, o, u), s && D(x(s, E(n, r, o + 1)), u)), w(r, null, o, u), new a(u)
            }

            function E(t, e, n) {
                let r = [];
                if (w(null, t, n, r), t.depth > n) {
                    D(x(b(t, e, n + 1), E(t, e, n + 1)), r)
                }
                return w(e, null, n, r), new a(r)
            }
            f.empty = new f(a.empty, 0, 0);
            class C {
                constructor(t, e, n) {
                    this.pos = t, this.path = e, this.parentOffset = n, this.depth = e.length / 3 - 1
                }
                resolveDepth(t) {
                    return null == t ? this.depth : t < 0 ? this.depth + t : t
                }
                get parent() {
                    return this.node(this.depth)
                }
                get doc() {
                    return this.node(0)
                }
                node(t) {
                    return this.path[3 * this.resolveDepth(t)]
                }
                index(t) {
                    return this.path[3 * this.resolveDepth(t) + 1]
                }
                indexAfter(t) {
                    return t = this.resolveDepth(t), this.index(t) + (t != this.depth || this.textOffset ? 1 : 0)
                }
                start(t) {
                    return 0 == (t = this.resolveDepth(t)) ? 0 : this.path[3 * t - 1] + 1
                }
                end(t) {
                    return t = this.resolveDepth(t), this.start(t) + this.node(t).content.size
                }
                before(t) {
                    if (!(t = this.resolveDepth(t))) throw new RangeError("There is no position before the top-level node");
                    return t == this.depth + 1 ? this.pos : this.path[3 * t - 1]
                }
                after(t) {
                    if (!(t = this.resolveDepth(t))) throw new RangeError("There is no position after the top-level node");
                    return t == this.depth + 1 ? this.pos : this.path[3 * t - 1] + this.path[3 * t].nodeSize
                }
                get textOffset() {
                    return this.pos - this.path[this.path.length - 1]
                }
                get nodeAfter() {
                    let t = this.parent,
                        e = this.index(this.depth);
                    if (e == t.childCount) return null;
                    let n = this.pos - this.path[this.path.length - 1],
                        r = t.child(e);
                    return n ? t.child(e).cut(n) : r
                }
                get nodeBefore() {
                    let t = this.index(this.depth),
                        e = this.pos - this.path[this.path.length - 1];
                    return e ? this.parent.child(t).cut(0, e) : 0 == t ? null : this.parent.child(t - 1)
                }
                posAtIndex(t, e) {
                    e = this.resolveDepth(e);
                    let n = this.path[3 * e],
                        r = 0 == e ? 0 : this.path[3 * e - 1] + 1;
                    for (let o = 0; o < t; o++) r += n.child(o).nodeSize;
                    return r
                }
                marks() {
                    let t = this.parent,
                        e = this.index();
                    if (0 == t.content.size) return p.none;
                    if (this.textOffset) return t.child(e).marks;
                    let n = t.maybeChild(e - 1),
                        r = t.maybeChild(e);
                    if (!n) {
                        let t = n;
                        n = r, r = t
                    }
                    let o = n.marks;
                    for (var i = 0; i < o.length; i++) !1 !== o[i].type.spec.inclusive || r && o[i].isInSet(r.marks) || (o = o[i--].removeFromSet(o));
                    return o
                }
                marksAcross(t) {
                    let e = this.parent.maybeChild(this.index());
                    if (!e || !e.isInline) return null;
                    let n = e.marks,
                        r = t.parent.maybeChild(t.index());
                    for (var o = 0; o < n.length; o++) !1 !== n[o].type.spec.inclusive || r && n[o].isInSet(r.marks) || (n = n[o--].removeFromSet(n));
                    return n
                }
                sharedDepth(t) {
                    for (let e = this.depth; e > 0; e--)
                        if (this.start(e) <= t && this.end(e) >= t) return e;
                    return 0
                }
                blockRange(t = this, e) {
                    if (t.pos < this.pos) return t.blockRange(this);
                    for (let n = this.depth - (this.parent.inlineContent || this.pos == t.pos ? 1 : 0); n >= 0; n--)
                        if (t.pos <= this.end(n) && (!e || e(this.node(n)))) return new M(this, t, n);
                    return null
                }
                sameParent(t) {
                    return this.pos - this.parentOffset == t.pos - t.parentOffset
                }
                max(t) {
                    return t.pos > this.pos ? t : this
                }
                min(t) {
                    return t.pos < this.pos ? t : this
                }
                toString() {
                    let t = "";
                    for (let e = 1; e <= this.depth; e++) t += (t ? "/" : "") + this.node(e).type.name + "_" + this.index(e - 1);
                    return t + ":" + this.parentOffset
                }
                static resolve(t, e) {
                    if (!(e >= 0 && e <= t.content.size)) throw new RangeError("Position " + e + " out of range");
                    let n = [],
                        r = 0,
                        o = e;
                    for (let i = t;;) {
                        let {
                            index: t,
                            offset: e
                        } = i.content.findIndex(o), s = o - e;
                        if (n.push(i, t, r + e), !s) break;
                        if (i = i.child(t), i.isText) break;
                        o = s - 1, r += e + 1
                    }
                    return new C(e, n, o)
                }
                static resolveCached(t, e) {
                    for (let r = 0; r < S.length; r++) {
                        let n = S[r];
                        if (n.pos == e && n.doc == t) return n
                    }
                    let n = S[A] = C.resolve(t, e);
                    return A = (A + 1) % O, n
                }
            }
            let S = [],
                A = 0,
                O = 12;
            class M {
                constructor(t, e, n) {
                    this.$from = t, this.$to = e, this.depth = n
                }
                get start() {
                    return this.$from.before(this.depth + 1)
                }
                get end() {
                    return this.$to.after(this.depth + 1)
                }
                get parent() {
                    return this.$from.node(this.depth)
                }
                get startIndex() {
                    return this.$from.index(this.depth)
                }
                get endIndex() {
                    return this.$to.indexAfter(this.depth)
                }
            }
            const F = Object.create(null);
            class T {
                constructor(t, e, n, r = p.none) {
                    this.type = t, this.attrs = e, this.marks = r, this.content = n || a.empty
                }
                get nodeSize() {
                    return this.isLeaf ? 1 : 2 + this.content.size
                }
                get childCount() {
                    return this.content.childCount
                }
                child(t) {
                    return this.content.child(t)
                }
                maybeChild(t) {
                    return this.content.maybeChild(t)
                }
                forEach(t) {
                    this.content.forEach(t)
                }
                nodesBetween(t, e, n, r = 0) {
                    this.content.nodesBetween(t, e, n, r, this)
                }
                descendants(t) {
                    this.nodesBetween(0, this.content.size, t)
                }
                get textContent() {
                    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "")
                }
                textBetween(t, e, n, r) {
                    return this.content.textBetween(t, e, n, r)
                }
                get firstChild() {
                    return this.content.firstChild
                }
                get lastChild() {
                    return this.content.lastChild
                }
                eq(t) {
                    return this == t || this.sameMarkup(t) && this.content.eq(t.content)
                }
                sameMarkup(t) {
                    return this.hasMarkup(t.type, t.attrs, t.marks)
                }
                hasMarkup(t, e, n) {
                    return this.type == t && c(this.attrs, e || t.defaultAttrs || F) && p.sameSet(this.marks, n || p.none)
                }
                copy(t = null) {
                    return t == this.content ? this : new T(this.type, this.attrs, t, this.marks)
                }
                mark(t) {
                    return t == this.marks ? this : new T(this.type, this.attrs, this.content, t)
                }
                cut(t, e = this.content.size) {
                    return 0 == t && e == this.content.size ? this : this.copy(this.content.cut(t, e))
                }
                slice(t, e = this.content.size, n = !1) {
                    if (t == e) return f.empty;
                    let r = this.resolve(t),
                        o = this.resolve(e),
                        i = n ? 0 : r.sharedDepth(e),
                        s = r.start(i),
                        a = r.node(i).content.cut(r.pos - s, o.pos - s);
                    return new f(a, r.depth - i, o.depth - i)
                }
                replace(t, e, n) {
                    return g(this.resolve(t), this.resolve(e), n)
                }
                nodeAt(t) {
                    for (let e = this;;) {
                        let {
                            index: n,
                            offset: r
                        } = e.content.findIndex(t);
                        if (e = e.maybeChild(n), !e) return null;
                        if (r == t || e.isText) return e;
                        t -= r + 1
                    }
                }
                childAfter(t) {
                    let {
                        index: e,
                        offset: n
                    } = this.content.findIndex(t);
                    return {
                        node: this.content.maybeChild(e),
                        index: e,
                        offset: n
                    }
                }
                childBefore(t) {
                    if (0 == t) return {
                        node: null,
                        index: 0,
                        offset: 0
                    };
                    let {
                        index: e,
                        offset: n
                    } = this.content.findIndex(t);
                    if (n < t) return {
                        node: this.content.child(e),
                        index: e,
                        offset: n
                    };
                    let r = this.content.child(e - 1);
                    return {
                        node: r,
                        index: e - 1,
                        offset: n - r.nodeSize
                    }
                }
                resolve(t) {
                    return C.resolveCached(this, t)
                }
                resolveNoCache(t) {
                    return C.resolve(this, t)
                }
                rangeHasMark(t, e, n) {
                    let r = !1;
                    return e > t && this.nodesBetween(t, e, (t => (n.isInSet(t.marks) && (r = !0), !r))), r
                }
                get isBlock() {
                    return this.type.isBlock
                }
                get isTextblock() {
                    return this.type.isTextblock
                }
                get inlineContent() {
                    return this.type.inlineContent
                }
                get isInline() {
                    return this.type.isInline
                }
                get isText() {
                    return this.type.isText
                }
                get isLeaf() {
                    return this.type.isLeaf
                }
                get isAtom() {
                    return this.type.isAtom
                }
                toString() {
                    if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
                    let t = this.type.name;
                    return this.content.size && (t += "(" + this.content.toStringInner() + ")"), j(this.marks, t)
                }
                contentMatchAt(t) {
                    let e = this.type.contentMatch.matchFragment(this.content, 0, t);
                    if (!e) throw new Error("Called contentMatchAt on a node with invalid content");
                    return e
                }
                canReplace(t, e, n = a.empty, r = 0, o = n.childCount) {
                    let i = this.contentMatchAt(t).matchFragment(n, r, o),
                        s = i && i.matchFragment(this.content, e);
                    if (!s || !s.validEnd) return !1;
                    for (let a = r; a < o; a++)
                        if (!this.type.allowsMarks(n.child(a).marks)) return !1;
                    return !0
                }
                canReplaceWith(t, e, n, r) {
                    if (r && !this.type.allowsMarks(r)) return !1;
                    let o = this.contentMatchAt(t).matchType(n),
                        i = o && o.matchFragment(this.content, e);
                    return !!i && i.validEnd
                }
                canAppend(t) {
                    return t.content.size ? this.canReplace(this.childCount, this.childCount, t.content) : this.type.compatibleContent(t.type)
                }
                check() {
                    this.type.checkContent(this.content);
                    let t = p.none;
                    for (let e = 0; e < this.marks.length; e++) t = this.marks[e].addToSet(t);
                    if (!p.sameSet(t, this.marks)) throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((t=>t.type.name))}`);
                    this.content.forEach((t => t.check()))
                }
                toJSON() {
                    let t = {
                        type: this.type.name
                    };
                    for (let e in this.attrs) {
                        t.attrs = this.attrs;
                        break
                    }
                    return this.content.size && (t.content = this.content.toJSON()), this.marks.length && (t.marks = this.marks.map((t => t.toJSON()))), t
                }
                static fromJSON(t, e) {
                    if (!e) throw new RangeError("Invalid input for Node.fromJSON");
                    let n = null;
                    if (e.marks) {
                        if (!Array.isArray(e.marks)) throw new RangeError("Invalid mark data for Node.fromJSON");
                        n = e.marks.map(t.markFromJSON)
                    }
                    if ("text" == e.type) {
                        if ("string" != typeof e.text) throw new RangeError("Invalid text node in JSON");
                        return t.text(e.text, n)
                    }
                    let r = a.fromJSON(t, e.content);
                    return t.nodeType(e.type).create(e.attrs, r, n)
                }
            }
            T.prototype.text = void 0;
            class B extends T {
                constructor(t, e, n, r) {
                    if (super(t, e, null, r), !n) throw new RangeError("Empty text nodes are not allowed");
                    this.text = n
                }
                toString() {
                    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : j(this.marks, JSON.stringify(this.text))
                }
                get textContent() {
                    return this.text
                }
                textBetween(t, e) {
                    return this.text.slice(t, e)
                }
                get nodeSize() {
                    return this.text.length
                }
                mark(t) {
                    return t == this.marks ? this : new B(this.type, this.attrs, this.text, t)
                }
                withText(t) {
                    return t == this.text ? this : new B(this.type, this.attrs, t, this.marks)
                }
                cut(t = 0, e = this.text.length) {
                    return 0 == t && e == this.text.length ? this : this.withText(this.text.slice(t, e))
                }
                eq(t) {
                    return this.sameMarkup(t) && this.text == t.text
                }
                toJSON() {
                    let t = super.toJSON();
                    return t.text = this.text, t
                }
            }

            function j(t, e) {
                for (let n = t.length - 1; n >= 0; n--) e = t[n].type.name + "(" + e + ")";
                return e
            }
            class N {
                constructor(t) {
                    this.validEnd = t, this.next = [], this.wrapCache = []
                }
                static parse(t, e) {
                    let n = new R(t, e);
                    if (null == n.next) return N.empty;
                    let r = P(n);
                    n.next && n.err("Unexpected trailing text");
                    let o = function(t) {
                        let e = Object.create(null);
                        return n(W(t, 0));

                        function n(r) {
                            let o = [];
                            r.forEach((e => {
                                t[e].forEach((({
                                    term: e,
                                    to: n
                                }) => {
                                    if (!e) return;
                                    let r;
                                    for (let t = 0; t < o.length; t++) o[t][0] == e && (r = o[t][1]);
                                    W(t, n).forEach((t => {
                                        r || o.push([e, r = []]), -1 == r.indexOf(t) && r.push(t)
                                    }))
                                }))
                            }));
                            let i = e[r.join(",")] = new N(r.indexOf(t.length - 1) > -1);
                            for (let t = 0; t < o.length; t++) {
                                let r = o[t][1].sort(H);
                                i.next.push({
                                    type: o[t][0],
                                    next: e[r.join(",")] || n(r)
                                })
                            }
                            return i
                        }
                    }(function(t) {
                        let e = [
                            []
                        ];
                        return o(i(t, 0), n()), e;

                        function n() {
                            return e.push([]) - 1
                        }

                        function r(t, n, r) {
                            let o = {
                                term: r,
                                to: n
                            };
                            return e[t].push(o), o
                        }

                        function o(t, e) {
                            t.forEach((t => t.to = e))
                        }

                        function i(t, e) {
                            if ("choice" == t.type) return t.exprs.reduce(((t, n) => t.concat(i(n, e))), []);
                            if ("seq" != t.type) {
                                if ("star" == t.type) {
                                    let s = n();
                                    return r(e, s), o(i(t.expr, s), s), [r(s)]
                                }
                                if ("plus" == t.type) {
                                    let s = n();
                                    return o(i(t.expr, e), s), o(i(t.expr, s), s), [r(s)]
                                }
                                if ("opt" == t.type) return [r(e)].concat(i(t.expr, e));
                                if ("range" == t.type) {
                                    let s = e;
                                    for (let e = 0; e < t.min; e++) {
                                        let e = n();
                                        o(i(t.expr, s), e), s = e
                                    }
                                    if (-1 == t.max) o(i(t.expr, s), s);
                                    else
                                        for (let e = t.min; e < t.max; e++) {
                                            let e = n();
                                            r(s, e), o(i(t.expr, s), e), s = e
                                        }
                                    return [r(s)]
                                }
                                if ("name" == t.type) return [r(e, void 0, t.value)];
                                throw new Error("Unknown expr type")
                            }
                            for (let r = 0;; r++) {
                                let s = i(t.exprs[r], e);
                                if (r == t.exprs.length - 1) return s;
                                o(s, e = n())
                            }
                        }
                    }(r));
                    return function(t, e) {
                        for (let n = 0, r = [t]; n < r.length; n++) {
                            let t = r[n],
                                o = !t.validEnd,
                                i = [];
                            for (let e = 0; e < t.next.length; e++) {
                                let {
                                    type: n,
                                    next: s
                                } = t.next[e];
                                i.push(n.name), !o || n.isText || n.hasRequiredAttrs() || (o = !1), -1 == r.indexOf(s) && r.push(s)
                            }
                            o && e.err("Only non-generatable nodes (" + i.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)")
                        }
                    }(o, n), o
                }
                matchType(t) {
                    for (let e = 0; e < this.next.length; e++)
                        if (this.next[e].type == t) return this.next[e].next;
                    return null
                }
                matchFragment(t, e = 0, n = t.childCount) {
                    let r = this;
                    for (let o = e; r && o < n; o++) r = r.matchType(t.child(o).type);
                    return r
                }
                get inlineContent() {
                    return 0 != this.next.length && this.next[0].type.isInline
                }
                get defaultType() {
                    for (let t = 0; t < this.next.length; t++) {
                        let {
                            type: e
                        } = this.next[t];
                        if (!e.isText && !e.hasRequiredAttrs()) return e
                    }
                    return null
                }
                compatible(t) {
                    for (let e = 0; e < this.next.length; e++)
                        for (let n = 0; n < t.next.length; n++)
                            if (this.next[e].type == t.next[n].type) return !0;
                    return !1
                }
                fillBefore(t, e = !1, n = 0) {
                    let r = [this];
                    return function o(i, s) {
                        let u = i.matchFragment(t, n);
                        if (u && (!e || u.validEnd)) return a.from(s.map((t => t.createAndFill())));
                        for (let t = 0; t < i.next.length; t++) {
                            let {
                                type: e,
                                next: n
                            } = i.next[t];
                            if (!e.isText && !e.hasRequiredAttrs() && -1 == r.indexOf(n)) {
                                r.push(n);
                                let t = o(n, s.concat(e));
                                if (t) return t
                            }
                        }
                        return null
                    }(this, [])
                }
                findWrapping(t) {
                    for (let n = 0; n < this.wrapCache.length; n += 2)
                        if (this.wrapCache[n] == t) return this.wrapCache[n + 1];
                    let e = this.computeWrapping(t);
                    return this.wrapCache.push(t, e), e
                }
                computeWrapping(t) {
                    let e = Object.create(null),
                        n = [{
                            match: this,
                            type: null,
                            via: null
                        }];
                    for (; n.length;) {
                        let r = n.shift(),
                            o = r.match;
                        if (o.matchType(t)) {
                            let t = [];
                            for (let e = r; e.type; e = e.via) t.push(e.type);
                            return t.reverse()
                        }
                        for (let t = 0; t < o.next.length; t++) {
                            let {
                                type: i,
                                next: s
                            } = o.next[t];
                            i.isLeaf || i.hasRequiredAttrs() || i.name in e || r.type && !s.validEnd || (n.push({
                                match: i.contentMatch,
                                type: i,
                                via: r
                            }), e[i.name] = !0)
                        }
                    }
                    return null
                }
                get edgeCount() {
                    return this.next.length
                }
                edge(t) {
                    if (t >= this.next.length) throw new RangeError(`There's no ${t}th edge in this content match`);
                    return this.next[t]
                }
                toString() {
                    let t = [];
                    return function e(n) {
                        t.push(n);
                        for (let r = 0; r < n.next.length; r++) - 1 == t.indexOf(n.next[r].next) && e(n.next[r].next)
                    }(this), t.map(((e, n) => {
                        let r = n + (e.validEnd ? "*" : " ") + " ";
                        for (let o = 0; o < e.next.length; o++) r += (o ? ", " : "") + e.next[o].type.name + "->" + t.indexOf(e.next[o].next);
                        return r
                    })).join("\n")
                }
            }
            N.empty = new N(!0);
            class R {
                constructor(t, e) {
                    this.string = t, this.nodeTypes = e, this.inline = null, this.pos = 0, this.tokens = t.split(/\s*(?=\b|\W|$)/), "" == this.tokens[this.tokens.length - 1] && this.tokens.pop(), "" == this.tokens[0] && this.tokens.shift()
                }
                get next() {
                    return this.tokens[this.pos]
                }
                eat(t) {
                    return this.next == t && (this.pos++ || !0)
                }
                err(t) {
                    throw new SyntaxError(t + " (in content expression '" + this.string + "')")
                }
            }

            function P(t) {
                let e = [];
                do {
                    e.push(z(t))
                } while (t.eat("|"));
                return 1 == e.length ? e[0] : {
                    type: "choice",
                    exprs: e
                }
            }

            function z(t) {
                let e = [];
                do {
                    e.push(I(t))
                } while (t.next && ")" != t.next && "|" != t.next);
                return 1 == e.length ? e[0] : {
                    type: "seq",
                    exprs: e
                }
            }

            function I(t) {
                let e = function(t) {
                    if (t.eat("(")) {
                        let e = P(t);
                        return t.eat(")") || t.err("Missing closing paren"), e
                    }
                    if (!/\W/.test(t.next)) {
                        let e = function(t, e) {
                            let n = t.nodeTypes,
                                r = n[e];
                            if (r) return [r];
                            let o = [];
                            for (let i in n) {
                                let t = n[i];
                                t.groups.indexOf(e) > -1 && o.push(t)
                            }
                            0 == o.length && t.err("No node type or group '" + e + "' found");
                            return o
                        }(t, t.next).map((e => (null == t.inline ? t.inline = e.isInline : t.inline != e.isInline && t.err("Mixing inline and block content"), {
                            type: "name",
                            value: e
                        })));
                        return t.pos++, 1 == e.length ? e[0] : {
                            type: "choice",
                            exprs: e
                        }
                    }
                    t.err("Unexpected token '" + t.next + "'")
                }(t);
                for (;;)
                    if (t.eat("+")) e = {
                        type: "plus",
                        expr: e
                    };
                    else if (t.eat("*")) e = {
                    type: "star",
                    expr: e
                };
                else if (t.eat("?")) e = {
                    type: "opt",
                    expr: e
                };
                else {
                    if (!t.eat("{")) break;
                    e = L(t, e)
                }
                return e
            }

            function $(t) {
                /\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
                let e = Number(t.next);
                return t.pos++, e
            }

            function L(t, e) {
                let n = $(t),
                    r = n;
                return t.eat(",") && (r = "}" != t.next ? $(t) : -1), t.eat("}") || t.err("Unclosed braced range"), {
                    type: "range",
                    min: n,
                    max: r,
                    expr: e
                }
            }

            function H(t, e) {
                return e - t
            }

            function W(t, e) {
                let n = [];
                return function e(r) {
                    let o = t[r];
                    if (1 == o.length && !o[0].term) return e(o[0].to);
                    n.push(r);
                    for (let t = 0; t < o.length; t++) {
                        let {
                            term: r,
                            to: i
                        } = o[t];
                        r || -1 != n.indexOf(i) || e(i)
                    }
                }(e), n.sort(H)
            }

            function _(t) {
                let e = Object.create(null);
                for (let n in t) {
                    let r = t[n];
                    if (!r.hasDefault) return null;
                    e[n] = r.default
                }
                return e
            }

            function V(t, e) {
                let n = Object.create(null);
                for (let r in t) {
                    let o = e && e[r];
                    if (void 0 === o) {
                        let e = t[r];
                        if (!e.hasDefault) throw new RangeError("No value supplied for attribute " + r);
                        o = e.default
                    }
                    n[r] = o
                }
                return n
            }

            function q(t) {
                let e = Object.create(null);
                if (t)
                    for (let n in t) e[n] = new Y(t[n]);
                return e
            }
            class J {
                constructor(t, e, n) {
                    this.name = t, this.schema = e, this.spec = n, this.markSet = null, this.groups = n.group ? n.group.split(" ") : [], this.attrs = q(n.attrs), this.defaultAttrs = _(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(n.inline || "text" == t), this.isText = "text" == t
                }
                get isInline() {
                    return !this.isBlock
                }
                get isTextblock() {
                    return this.isBlock && this.inlineContent
                }
                get isLeaf() {
                    return this.contentMatch == N.empty
                }
                get isAtom() {
                    return this.isLeaf || !!this.spec.atom
                }
                get whitespace() {
                    return this.spec.whitespace || (this.spec.code ? "pre" : "normal")
                }
                hasRequiredAttrs() {
                    for (let t in this.attrs)
                        if (this.attrs[t].isRequired) return !0;
                    return !1
                }
                compatibleContent(t) {
                    return this == t || this.contentMatch.compatible(t.contentMatch)
                }
                computeAttrs(t) {
                    return !t && this.defaultAttrs ? this.defaultAttrs : V(this.attrs, t)
                }
                create(t = null, e, n) {
                    if (this.isText) throw new Error("NodeType.create can't construct text nodes");
                    return new T(this, this.computeAttrs(t), a.from(e), p.setFrom(n))
                }
                createChecked(t = null, e, n) {
                    return e = a.from(e), this.checkContent(e), new T(this, this.computeAttrs(t), e, p.setFrom(n))
                }
                createAndFill(t = null, e, n) {
                    if (t = this.computeAttrs(t), (e = a.from(e)).size) {
                        let t = this.contentMatch.fillBefore(e);
                        if (!t) return null;
                        e = t.append(e)
                    }
                    let r = this.contentMatch.matchFragment(e),
                        o = r && r.fillBefore(a.empty, !0);
                    return o ? new T(this, t, e.append(o), p.setFrom(n)) : null
                }
                validContent(t) {
                    let e = this.contentMatch.matchFragment(t);
                    if (!e || !e.validEnd) return !1;
                    for (let n = 0; n < t.childCount; n++)
                        if (!this.allowsMarks(t.child(n).marks)) return !1;
                    return !0
                }
                checkContent(t) {
                    if (!this.validContent(t)) throw new RangeError(`Invalid content for node ${this.name}: ${t.toString().slice(0,50)}`)
                }
                allowsMarkType(t) {
                    return null == this.markSet || this.markSet.indexOf(t) > -1
                }
                allowsMarks(t) {
                    if (null == this.markSet) return !0;
                    for (let e = 0; e < t.length; e++)
                        if (!this.allowsMarkType(t[e].type)) return !1;
                    return !0
                }
                allowedMarks(t) {
                    if (null == this.markSet) return t;
                    let e;
                    for (let n = 0; n < t.length; n++) this.allowsMarkType(t[n].type) ? e && e.push(t[n]) : e || (e = t.slice(0, n));
                    return e ? e.length ? e : p.none : t
                }
                static compile(t, e) {
                    let n = Object.create(null);
                    t.forEach(((t, r) => n[t] = new J(t, e, r)));
                    let r = e.spec.topNode || "doc";
                    if (!n[r]) throw new RangeError("Schema is missing its top node type ('" + r + "')");
                    if (!n.text) throw new RangeError("Every schema needs a 'text' type");
                    for (let o in n.text.attrs) throw new RangeError("The text node type should not have attributes");
                    return n
                }
            }
            class Y {
                constructor(t) {
                    this.hasDefault = Object.prototype.hasOwnProperty.call(t, "default"), this.default = t.default
                }
                get isRequired() {
                    return !this.hasDefault
                }
            }
            class U {
                constructor(t, e, n, r) {
                    this.name = t, this.rank = e, this.schema = n, this.spec = r, this.attrs = q(r.attrs), this.excluded = null;
                    let o = _(this.attrs);
                    this.instance = o ? new p(this, o) : null
                }
                create(t = null) {
                    return !t && this.instance ? this.instance : new p(this, V(this.attrs, t))
                }
                static compile(t, e) {
                    let n = Object.create(null),
                        r = 0;
                    return t.forEach(((t, o) => n[t] = new U(t, r++, e, o))), n
                }
                removeFromSet(t) {
                    for (var e = 0; e < t.length; e++) t[e].type == this && (t = t.slice(0, e).concat(t.slice(e + 1)), e--);
                    return t
                }
                isInSet(t) {
                    for (let e = 0; e < t.length; e++)
                        if (t[e].type == this) return t[e]
                }
                excludes(t) {
                    return this.excluded.indexOf(t) > -1
                }
            }
            class K {
                constructor(t) {
                    this.cached = Object.create(null);
                    let e = this.spec = {};
                    for (let r in t) e[r] = t[r];
                    e.nodes = o.from(t.nodes), e.marks = o.from(t.marks || {}), this.nodes = J.compile(this.spec.nodes, this), this.marks = U.compile(this.spec.marks, this);
                    let n = Object.create(null);
                    for (let r in this.nodes) {
                        if (r in this.marks) throw new RangeError(r + " can not be both a node and a mark");
                        let t = this.nodes[r],
                            e = t.spec.content || "",
                            o = t.spec.marks;
                        t.contentMatch = n[e] || (n[e] = N.parse(e, this.nodes)), t.inlineContent = t.contentMatch.inlineContent, t.markSet = "_" == o ? null : o ? G(this, o.split(" ")) : "" != o && t.inlineContent ? null : []
                    }
                    for (let r in this.marks) {
                        let t = this.marks[r],
                            e = t.spec.excludes;
                        t.excluded = null == e ? [t] : "" == e ? [] : G(this, e.split(" "))
                    }
                    this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = Object.create(null)
                }
                node(t, e = null, n, r) {
                    if ("string" == typeof t) t = this.nodeType(t);
                    else {
                        if (!(t instanceof J)) throw new RangeError("Invalid node type: " + t);
                        if (t.schema != this) throw new RangeError("Node type from different schema used (" + t.name + ")")
                    }
                    return t.createChecked(e, n, r)
                }
                text(t, e) {
                    let n = this.nodes.text;
                    return new B(n, n.defaultAttrs, t, p.setFrom(e))
                }
                mark(t, e) {
                    return "string" == typeof t && (t = this.marks[t]), t.create(e)
                }
                nodeFromJSON(t) {
                    return T.fromJSON(this, t)
                }
                markFromJSON(t) {
                    return p.fromJSON(this, t)
                }
                nodeType(t) {
                    let e = this.nodes[t];
                    if (!e) throw new RangeError("Unknown node type: " + t);
                    return e
                }
            }

            function G(t, e) {
                let n = [];
                for (let r = 0; r < e.length; r++) {
                    let o = e[r],
                        i = t.marks[o],
                        s = i;
                    if (i) n.push(i);
                    else
                        for (let e in t.marks) {
                            let r = t.marks[e];
                            ("_" == o || r.spec.group && r.spec.group.split(" ").indexOf(o) > -1) && n.push(s = r)
                        }
                    if (!s) throw new SyntaxError("Unknown mark type: '" + e[r] + "'")
                }
                return n
            }
            class X {
                constructor(t, e) {
                    this.schema = t, this.rules = e, this.tags = [], this.styles = [], e.forEach((t => {
                        t.tag ? this.tags.push(t) : t.style && this.styles.push(t)
                    })), this.normalizeLists = !this.tags.some((e => {
                        if (!/^(ul|ol)\b/.test(e.tag) || !e.node) return !1;
                        let n = t.nodes[e.node];
                        return n.contentMatch.matchType(n)
                    }))
                }
                parse(t, e = {}) {
                    let n = new rt(this, e, !1);
                    return n.addAll(t, e.from, e.to), n.finish()
                }
                parseSlice(t, e = {}) {
                    let n = new rt(this, e, !0);
                    return n.addAll(t, e.from, e.to), f.maxOpen(n.finish())
                }
                matchTag(t, e, n) {
                    for (let r = n ? this.tags.indexOf(n) + 1 : 0; r < this.tags.length; r++) {
                        let n = this.tags[r];
                        if (ot(t, n.tag) && (void 0 === n.namespace || t.namespaceURI == n.namespace) && (!n.context || e.matchesContext(n.context))) {
                            if (n.getAttrs) {
                                let e = n.getAttrs(t);
                                if (!1 === e) continue;
                                n.attrs = e || void 0
                            }
                            return n
                        }
                    }
                }
                matchStyle(t, e, n, r) {
                    for (let o = r ? this.styles.indexOf(r) + 1 : 0; o < this.styles.length; o++) {
                        let r = this.styles[o],
                            i = r.style;
                        if (!(0 != i.indexOf(t) || r.context && !n.matchesContext(r.context) || i.length > t.length && (61 != i.charCodeAt(t.length) || i.slice(t.length + 1) != e))) {
                            if (r.getAttrs) {
                                let t = r.getAttrs(e);
                                if (!1 === t) continue;
                                r.attrs = t || void 0
                            }
                            return r
                        }
                    }
                }
                static schemaRules(t) {
                    let e = [];

                    function n(t) {
                        let n = null == t.priority ? 50 : t.priority,
                            r = 0;
                        for (; r < e.length; r++) {
                            let t = e[r];
                            if ((null == t.priority ? 50 : t.priority) < n) break
                        }
                        e.splice(r, 0, t)
                    }
                    for (let r in t.marks) {
                        let e = t.marks[r].spec.parseDOM;
                        e && e.forEach((t => {
                            n(t = it(t)), t.mark || t.ignore || t.clearMark || (t.mark = r)
                        }))
                    }
                    for (let r in t.nodes) {
                        let e = t.nodes[r].spec.parseDOM;
                        e && e.forEach((t => {
                            n(t = it(t)), t.node || t.ignore || t.mark || (t.node = r)
                        }))
                    }
                    return e
                }
                static fromSchema(t) {
                    return t.cached.domParser || (t.cached.domParser = new X(t, X.schemaRules(t)))
                }
            }
            const Z = {
                    address: !0,
                    article: !0,
                    aside: !0,
                    blockquote: !0,
                    canvas: !0,
                    dd: !0,
                    div: !0,
                    dl: !0,
                    fieldset: !0,
                    figcaption: !0,
                    figure: !0,
                    footer: !0,
                    form: !0,
                    h1: !0,
                    h2: !0,
                    h3: !0,
                    h4: !0,
                    h5: !0,
                    h6: !0,
                    header: !0,
                    hgroup: !0,
                    hr: !0,
                    li: !0,
                    noscript: !0,
                    ol: !0,
                    output: !0,
                    p: !0,
                    pre: !0,
                    section: !0,
                    table: !0,
                    tfoot: !0,
                    ul: !0
                },
                Q = {
                    head: !0,
                    noscript: !0,
                    object: !0,
                    script: !0,
                    style: !0,
                    title: !0
                },
                tt = {
                    ol: !0,
                    ul: !0
                };

            function et(t, e, n) {
                return null != e ? (e ? 1 : 0) | ("full" === e ? 2 : 0) : t && "pre" == t.whitespace ? 3 : -5 & n
            }
            class nt {
                constructor(t, e, n, r, o, i, s) {
                    this.type = t, this.attrs = e, this.marks = n, this.pendingMarks = r, this.solid = o, this.options = s, this.content = [], this.activeMarks = p.none, this.stashMarks = [], this.match = i || (4 & s ? null : t.contentMatch)
                }
                findWrapping(t) {
                    if (!this.match) {
                        if (!this.type) return [];
                        let e = this.type.contentMatch.fillBefore(a.from(t));
                        if (!e) {
                            let e, n = this.type.contentMatch;
                            return (e = n.findWrapping(t.type)) ? (this.match = n, e) : null
                        }
                        this.match = this.type.contentMatch.matchFragment(e)
                    }
                    return this.match.findWrapping(t.type)
                }
                finish(t) {
                    if (!(1 & this.options)) {
                        let t, e = this.content[this.content.length - 1];
                        if (e && e.isText && (t = /[ \t\r\n\u000c]+$/.exec(e.text))) {
                            let n = e;
                            e.text.length == t[0].length ? this.content.pop() : this.content[this.content.length - 1] = n.withText(n.text.slice(0, n.text.length - t[0].length))
                        }
                    }
                    let e = a.from(this.content);
                    return !t && this.match && (e = e.append(this.match.fillBefore(a.empty, !0))), this.type ? this.type.create(this.attrs, e, this.marks) : e
                }
                popFromStashMark(t) {
                    for (let e = this.stashMarks.length - 1; e >= 0; e--)
                        if (t.eq(this.stashMarks[e])) return this.stashMarks.splice(e, 1)[0]
                }
                applyPending(t) {
                    for (let e = 0, n = this.pendingMarks; e < n.length; e++) {
                        let r = n[e];
                        (this.type ? this.type.allowsMarkType(r.type) : st(r.type, t)) && !r.isInSet(this.activeMarks) && (this.activeMarks = r.addToSet(this.activeMarks), this.pendingMarks = r.removeFromSet(this.pendingMarks))
                    }
                }
                inlineContext(t) {
                    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : t.parentNode && !Z.hasOwnProperty(t.parentNode.nodeName.toLowerCase())
                }
            }
            class rt {
                constructor(t, e, n) {
                    this.parser = t, this.options = e, this.isOpen = n, this.open = 0;
                    let r, o = e.topNode,
                        i = et(null, e.preserveWhitespace, 0) | (n ? 4 : 0);
                    r = o ? new nt(o.type, o.attrs, p.none, p.none, !0, e.topMatch || o.type.contentMatch, i) : new nt(n ? null : t.schema.topNodeType, null, p.none, p.none, !0, null, i), this.nodes = [r], this.find = e.findPositions, this.needsBlock = !1
                }
                get top() {
                    return this.nodes[this.open]
                }
                addDOM(t) {
                    3 == t.nodeType ? this.addTextNode(t) : 1 == t.nodeType && this.addElement(t)
                }
                withStyleRules(t, e) {
                    let n = t.getAttribute("style");
                    if (!n) return e();
                    let r = this.readStyles(function(t) {
                        let e, n = /\s*([\w-]+)\s*:\s*([^;]+)/g,
                            r = [];
                        for (; e = n.exec(t);) r.push(e[1], e[2].trim());
                        return r
                    }(n));
                    if (!r) return;
                    let [o, i] = r, s = this.top;
                    for (let a = 0; a < i.length; a++) this.removePendingMark(i[a], s);
                    for (let a = 0; a < o.length; a++) this.addPendingMark(o[a]);
                    e();
                    for (let a = 0; a < o.length; a++) this.removePendingMark(o[a], s);
                    for (let a = 0; a < i.length; a++) this.addPendingMark(i[a])
                }
                addTextNode(t) {
                    let e = t.nodeValue,
                        n = this.top;
                    if (2 & n.options || n.inlineContext(t) || /[^ \t\r\n\u000c]/.test(e)) {
                        if (1 & n.options) e = 2 & n.options ? e.replace(/\r\n?/g, "\n") : e.replace(/\r?\n|\r/g, " ");
                        else if (e = e.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(e) && this.open == this.nodes.length - 1) {
                            let r = n.content[n.content.length - 1],
                                o = t.previousSibling;
                            (!r || o && "BR" == o.nodeName || r.isText && /[ \t\r\n\u000c]$/.test(r.text)) && (e = e.slice(1))
                        }
                        e && this.insertNode(this.parser.schema.text(e)), this.findInText(t)
                    } else this.findInside(t)
                }
                addElement(t, e) {
                    let n, r = t.nodeName.toLowerCase();
                    tt.hasOwnProperty(r) && this.parser.normalizeLists && function(t) {
                        for (let e = t.firstChild, n = null; e; e = e.nextSibling) {
                            let t = 1 == e.nodeType ? e.nodeName.toLowerCase() : null;
                            t && tt.hasOwnProperty(t) && n ? (n.appendChild(e), e = n) : "li" == t ? n = e : t && (n = null)
                        }
                    }(t);
                    let o = this.options.ruleFromNode && this.options.ruleFromNode(t) || (n = this.parser.matchTag(t, this, e));
                    if (o ? o.ignore : Q.hasOwnProperty(r)) this.findInside(t), this.ignoreFallback(t);
                    else if (!o || o.skip || o.closeParent) {
                        o && o.closeParent ? this.open = Math.max(0, this.open - 1) : o && o.skip.nodeType && (t = o.skip);
                        let e, n = this.top,
                            i = this.needsBlock;
                        if (Z.hasOwnProperty(r)) n.content.length && n.content[0].isInline && this.open && (this.open--, n = this.top), e = !0, n.type || (this.needsBlock = !0);
                        else if (!t.firstChild) return void this.leafFallback(t);
                        o && o.skip ? this.addAll(t) : this.withStyleRules(t, (() => this.addAll(t))), e && this.sync(n), this.needsBlock = i
                    } else this.withStyleRules(t, (() => {
                        this.addElementByRule(t, o, !1 === o.consuming ? n : void 0)
                    }))
                }
                leafFallback(t) {
                    "BR" == t.nodeName && this.top.type && this.top.type.inlineContent && this.addTextNode(t.ownerDocument.createTextNode("\n"))
                }
                ignoreFallback(t) {
                    "BR" != t.nodeName || this.top.type && this.top.type.inlineContent || this.findPlace(this.parser.schema.text("-"))
                }
                readStyles(t) {
                    let e = p.none,
                        n = p.none;
                    for (let r = 0; r < t.length; r += 2)
                        for (let o;;) {
                            let i = this.parser.matchStyle(t[r], t[r + 1], this, o);
                            if (!i) break;
                            if (i.ignore) return null;
                            if (i.clearMark ? this.top.pendingMarks.concat(this.top.activeMarks).forEach((t => {
                                    i.clearMark(t) && (n = t.addToSet(n))
                                })) : e = this.parser.schema.marks[i.mark].create(i.attrs).addToSet(e), !1 !== i.consuming) break;
                            o = i
                        }
                    return [e, n]
                }
                addElementByRule(t, e, n) {
                    let r, o, i;
                    if (e.node) o = this.parser.schema.nodes[e.node], o.isLeaf ? this.insertNode(o.create(e.attrs)) || this.leafFallback(t) : r = this.enter(o, e.attrs || null, e.preserveWhitespace);
                    else {
                        i = this.parser.schema.marks[e.mark].create(e.attrs), this.addPendingMark(i)
                    }
                    let s = this.top;
                    if (o && o.isLeaf) this.findInside(t);
                    else if (n) this.addElement(t, n);
                    else if (e.getContent) this.findInside(t), e.getContent(t, this.parser.schema).forEach((t => this.insertNode(t)));
                    else {
                        let n = t;
                        "string" == typeof e.contentElement ? n = t.querySelector(e.contentElement) : "function" == typeof e.contentElement ? n = e.contentElement(t) : e.contentElement && (n = e.contentElement), this.findAround(t, n, !0), this.addAll(n)
                    }
                    r && this.sync(s) && this.open--, i && this.removePendingMark(i, s)
                }
                addAll(t, e, n) {
                    let r = e || 0;
                    for (let o = e ? t.childNodes[e] : t.firstChild, i = null == n ? null : t.childNodes[n]; o != i; o = o.nextSibling, ++r) this.findAtPoint(t, r), this.addDOM(o);
                    this.findAtPoint(t, r)
                }
                findPlace(t) {
                    let e, n;
                    for (let r = this.open; r >= 0; r--) {
                        let o = this.nodes[r],
                            i = o.findWrapping(t);
                        if (i && (!e || e.length > i.length) && (e = i, n = o, !i.length)) break;
                        if (o.solid) break
                    }
                    if (!e) return !1;
                    this.sync(n);
                    for (let r = 0; r < e.length; r++) this.enterInner(e[r], null, !1);
                    return !0
                }
                insertNode(t) {
                    if (t.isInline && this.needsBlock && !this.top.type) {
                        let t = this.textblockFromContext();
                        t && this.enterInner(t)
                    }
                    if (this.findPlace(t)) {
                        this.closeExtra();
                        let e = this.top;
                        e.applyPending(t.type), e.match && (e.match = e.match.matchType(t.type));
                        let n = e.activeMarks;
                        for (let r = 0; r < t.marks.length; r++) e.type && !e.type.allowsMarkType(t.marks[r].type) || (n = t.marks[r].addToSet(n));
                        return e.content.push(t.mark(n)), !0
                    }
                    return !1
                }
                enter(t, e, n) {
                    let r = this.findPlace(t.create(e));
                    return r && this.enterInner(t, e, !0, n), r
                }
                enterInner(t, e = null, n = !1, r) {
                    this.closeExtra();
                    let o = this.top;
                    o.applyPending(t), o.match = o.match && o.match.matchType(t);
                    let i = et(t, r, o.options);
                    4 & o.options && 0 == o.content.length && (i |= 4), this.nodes.push(new nt(t, e, o.activeMarks, o.pendingMarks, n, null, i)), this.open++
                }
                closeExtra(t = !1) {
                    let e = this.nodes.length - 1;
                    if (e > this.open) {
                        for (; e > this.open; e--) this.nodes[e - 1].content.push(this.nodes[e].finish(t));
                        this.nodes.length = this.open + 1
                    }
                }
                finish() {
                    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(this.isOpen || this.options.topOpen)
                }
                sync(t) {
                    for (let e = this.open; e >= 0; e--)
                        if (this.nodes[e] == t) return this.open = e, !0;
                    return !1
                }
                get currentPos() {
                    this.closeExtra();
                    let t = 0;
                    for (let e = this.open; e >= 0; e--) {
                        let n = this.nodes[e].content;
                        for (let e = n.length - 1; e >= 0; e--) t += n[e].nodeSize;
                        e && t++
                    }
                    return t
                }
                findAtPoint(t, e) {
                    if (this.find)
                        for (let n = 0; n < this.find.length; n++) this.find[n].node == t && this.find[n].offset == e && (this.find[n].pos = this.currentPos)
                }
                findInside(t) {
                    if (this.find)
                        for (let e = 0; e < this.find.length; e++) null == this.find[e].pos && 1 == t.nodeType && t.contains(this.find[e].node) && (this.find[e].pos = this.currentPos)
                }
                findAround(t, e, n) {
                    if (t != e && this.find)
                        for (let r = 0; r < this.find.length; r++)
                            if (null == this.find[r].pos && 1 == t.nodeType && t.contains(this.find[r].node)) {
                                e.compareDocumentPosition(this.find[r].node) & (n ? 2 : 4) && (this.find[r].pos = this.currentPos)
                            }
                }
                findInText(t) {
                    if (this.find)
                        for (let e = 0; e < this.find.length; e++) this.find[e].node == t && (this.find[e].pos = this.currentPos - (t.nodeValue.length - this.find[e].offset))
                }
                matchesContext(t) {
                    if (t.indexOf("|") > -1) return t.split(/\s*\|\s*/).some(this.matchesContext, this);
                    let e = t.split("/"),
                        n = this.options.context,
                        r = !this.isOpen && (!n || n.parent.type == this.nodes[0].type),
                        o = -(n ? n.depth + 1 : 0) + (r ? 0 : 1),
                        i = (t, s) => {
                            for (; t >= 0; t--) {
                                let a = e[t];
                                if ("" == a) {
                                    if (t == e.length - 1 || 0 == t) continue;
                                    for (; s >= o; s--)
                                        if (i(t - 1, s)) return !0;
                                    return !1
                                } {
                                    let t = s > 0 || 0 == s && r ? this.nodes[s].type : n && s >= o ? n.node(s - o).type : null;
                                    if (!t || t.name != a && -1 == t.groups.indexOf(a)) return !1;
                                    s--
                                }
                            }
                            return !0
                        };
                    return i(e.length - 1, this.open)
                }
                textblockFromContext() {
                    let t = this.options.context;
                    if (t)
                        for (let e = t.depth; e >= 0; e--) {
                            let n = t.node(e).contentMatchAt(t.indexAfter(e)).defaultType;
                            if (n && n.isTextblock && n.defaultAttrs) return n
                        }
                    for (let e in this.parser.schema.nodes) {
                        let t = this.parser.schema.nodes[e];
                        if (t.isTextblock && t.defaultAttrs) return t
                    }
                }
                addPendingMark(t) {
                    let e = function(t, e) {
                        for (let n = 0; n < e.length; n++)
                            if (t.eq(e[n])) return e[n]
                    }(t, this.top.pendingMarks);
                    e && this.top.stashMarks.push(e), this.top.pendingMarks = t.addToSet(this.top.pendingMarks)
                }
                removePendingMark(t, e) {
                    for (let n = this.open; n >= 0; n--) {
                        let r = this.nodes[n];
                        if (r.pendingMarks.lastIndexOf(t) > -1) r.pendingMarks = t.removeFromSet(r.pendingMarks);
                        else {
                            r.activeMarks = t.removeFromSet(r.activeMarks);
                            let e = r.popFromStashMark(t);
                            e && r.type && r.type.allowsMarkType(e.type) && (r.activeMarks = e.addToSet(r.activeMarks))
                        }
                        if (r == e) break
                    }
                }
            }

            function ot(t, e) {
                return (t.matches || t.msMatchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector).call(t, e)
            }

            function it(t) {
                let e = {};
                for (let n in t) e[n] = t[n];
                return e
            }

            function st(t, e) {
                let n = e.schema.nodes;
                for (let r in n) {
                    let o = n[r];
                    if (!o.allowsMarkType(t)) continue;
                    let i = [],
                        s = t => {
                            i.push(t);
                            for (let n = 0; n < t.edgeCount; n++) {
                                let {
                                    type: r,
                                    next: o
                                } = t.edge(n);
                                if (r == e) return !0;
                                if (i.indexOf(o) < 0 && s(o)) return !0
                            }
                        };
                    if (s(o.contentMatch)) return !0
                }
            }
            class at {
                constructor(t, e) {
                    this.nodes = t, this.marks = e
                }
                serializeFragment(t, e = {}, n) {
                    n || (n = lt(e).createDocumentFragment());
                    let r = n,
                        o = [];
                    return t.forEach((t => {
                        if (o.length || t.marks.length) {
                            let n = 0,
                                i = 0;
                            for (; n < o.length && i < t.marks.length;) {
                                let e = t.marks[i];
                                if (this.marks[e.type.name]) {
                                    if (!e.eq(o[n][0]) || !1 === e.type.spec.spanning) break;
                                    n++, i++
                                } else i++
                            }
                            for (; n < o.length;) r = o.pop()[1];
                            for (; i < t.marks.length;) {
                                let n = t.marks[i++],
                                    s = this.serializeMark(n, t.isInline, e);
                                s && (o.push([n, r]), r.appendChild(s.dom), r = s.contentDOM || s.dom)
                            }
                        }
                        r.appendChild(this.serializeNodeInner(t, e))
                    })), n
                }
                serializeNodeInner(t, e) {
                    let {
                        dom: n,
                        contentDOM: r
                    } = at.renderSpec(lt(e), this.nodes[t.type.name](t));
                    if (r) {
                        if (t.isLeaf) throw new RangeError("Content hole not allowed in a leaf node spec");
                        this.serializeFragment(t.content, e, r)
                    }
                    return n
                }
                serializeNode(t, e = {}) {
                    let n = this.serializeNodeInner(t, e);
                    for (let r = t.marks.length - 1; r >= 0; r--) {
                        let o = this.serializeMark(t.marks[r], t.isInline, e);
                        o && ((o.contentDOM || o.dom).appendChild(n), n = o.dom)
                    }
                    return n
                }
                serializeMark(t, e, n = {}) {
                    let r = this.marks[t.type.name];
                    return r && at.renderSpec(lt(n), r(t, e))
                }
                static renderSpec(t, e, n = null) {
                    if ("string" == typeof e) return {
                        dom: t.createTextNode(e)
                    };
                    if (null != e.nodeType) return {
                        dom: e
                    };
                    if (e.dom && null != e.dom.nodeType) return e;
                    let r, o = e[0],
                        i = o.indexOf(" ");
                    i > 0 && (n = o.slice(0, i), o = o.slice(i + 1));
                    let s = n ? t.createElementNS(n, o) : t.createElement(o),
                        a = e[1],
                        u = 1;
                    if (a && "object" == typeof a && null == a.nodeType && !Array.isArray(a)) {
                        u = 2;
                        for (let t in a)
                            if (null != a[t]) {
                                let e = t.indexOf(" ");
                                e > 0 ? s.setAttributeNS(t.slice(0, e), t.slice(e + 1), a[t]) : s.setAttribute(t, a[t])
                            }
                    }
                    for (let l = u; l < e.length; l++) {
                        let o = e[l];
                        if (0 === o) {
                            if (l < e.length - 1 || l > u) throw new RangeError("Content hole must be the only child of its parent node");
                            return {
                                dom: s,
                                contentDOM: s
                            }
                        } {
                            let {
                                dom: e,
                                contentDOM: i
                            } = at.renderSpec(t, o, n);
                            if (s.appendChild(e), i) {
                                if (r) throw new RangeError("Multiple content holes");
                                r = i
                            }
                        }
                    }
                    return {
                        dom: s,
                        contentDOM: r
                    }
                }
                static fromSchema(t) {
                    return t.cached.domSerializer || (t.cached.domSerializer = new at(this.nodesFromSchema(t), this.marksFromSchema(t)))
                }
                static nodesFromSchema(t) {
                    let e = ut(t.nodes);
                    return e.text || (e.text = t => t.text), e
                }
                static marksFromSchema(t) {
                    return ut(t.marks)
                }
            }

            function ut(t) {
                let e = {};
                for (let n in t) {
                    let r = t[n].spec.toDOM;
                    r && (e[n] = r)
                }
                return e
            }

            function lt(t) {
                return t.document || window.document
            }
        },
        60314: function(t, e, n) {
            "use strict";
            n.d(e, {
                Bs: function() {
                    return c
                },
                C1: function() {
                    return h
                },
                H$: function() {
                    return O
                },
                Sy: function() {
                    return C
                },
                Y1: function() {
                    return s
                },
                qv: function() {
                    return d
                },
                yy: function() {
                    return k
                }
            });
            var r = n(31506),
                o = n(85804);
            const i = Object.create(null);
            class s {
                constructor(t, e, n) {
                    this.$anchor = t, this.$head = e, this.ranges = n || [new a(t.min(e), t.max(e))]
                }
                get anchor() {
                    return this.$anchor.pos
                }
                get head() {
                    return this.$head.pos
                }
                get from() {
                    return this.$from.pos
                }
                get to() {
                    return this.$to.pos
                }
                get $from() {
                    return this.ranges[0].$from
                }
                get $to() {
                    return this.ranges[0].$to
                }
                get empty() {
                    let t = this.ranges;
                    for (let e = 0; e < t.length; e++)
                        if (t[e].$from.pos != t[e].$to.pos) return !1;
                    return !0
                }
                content() {
                    return this.$from.doc.slice(this.from, this.to, !0)
                }
                replace(t, e = r.p2.empty) {
                    let n = e.content.lastChild,
                        o = null;
                    for (let r = 0; r < e.openEnd; r++) o = n, n = n.lastChild;
                    let i = t.steps.length,
                        s = this.ranges;
                    for (let a = 0; a < s.length; a++) {
                        let {
                            $from: u,
                            $to: l
                        } = s[a], c = t.mapping.slice(i);
                        t.replaceRange(c.map(u.pos), c.map(l.pos), a ? r.p2.empty : e), 0 == a && y(t, i, (n ? n.isInline : o && o.isTextblock) ? -1 : 1)
                    }
                }
                replaceWith(t, e) {
                    let n = t.steps.length,
                        r = this.ranges;
                    for (let o = 0; o < r.length; o++) {
                        let {
                            $from: i,
                            $to: s
                        } = r[o], a = t.mapping.slice(n), u = a.map(i.pos), l = a.map(s.pos);
                        o ? t.deleteRange(u, l) : (t.replaceRangeWith(u, l, e), y(t, n, e.isInline ? -1 : 1))
                    }
                }
                static findFrom(t, e, n = !1) {
                    let r = t.parent.inlineContent ? new c(t) : g(t.node(0), t.parent, t.pos, t.index(), e, n);
                    if (r) return r;
                    for (let o = t.depth - 1; o >= 0; o--) {
                        let r = e < 0 ? g(t.node(0), t.node(o), t.before(o + 1), t.index(o), e, n) : g(t.node(0), t.node(o), t.after(o + 1), t.index(o) + 1, e, n);
                        if (r) return r
                    }
                    return null
                }
                static near(t, e = 1) {
                    return this.findFrom(t, e) || this.findFrom(t, -e) || new h(t.node(0))
                }
                static atStart(t) {
                    return g(t, t, 0, 0, 1) || new h(t)
                }
                static atEnd(t) {
                    return g(t, t, t.content.size, t.childCount, -1) || new h(t)
                }
                static fromJSON(t, e) {
                    if (!e || !e.type) throw new RangeError("Invalid input for Selection.fromJSON");
                    let n = i[e.type];
                    if (!n) throw new RangeError(`No selection type ${e.type} defined`);
                    return n.fromJSON(t, e)
                }
                static jsonID(t, e) {
                    if (t in i) throw new RangeError("Duplicate use of selection JSON ID " + t);
                    return i[t] = e, e.prototype.jsonID = t, e
                }
                getBookmark() {
                    return c.between(this.$anchor, this.$head).getBookmark()
                }
            }
            s.prototype.visible = !0;
            class a {
                constructor(t, e) {
                    this.$from = t, this.$to = e
                }
            }
            let u = !1;

            function l(t) {
                u || t.parent.inlineContent || (u = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + t.parent.type.name + ")"))
            }
            class c extends s {
                constructor(t, e = t) {
                    l(t), l(e), super(t, e)
                }
                get $cursor() {
                    return this.$anchor.pos == this.$head.pos ? this.$head : null
                }
                map(t, e) {
                    let n = t.resolve(e.map(this.head));
                    if (!n.parent.inlineContent) return s.near(n);
                    let r = t.resolve(e.map(this.anchor));
                    return new c(r.parent.inlineContent ? r : n, n)
                }
                replace(t, e = r.p2.empty) {
                    if (super.replace(t, e), e == r.p2.empty) {
                        let e = this.$from.marksAcross(this.$to);
                        e && t.ensureMarks(e)
                    }
                }
                eq(t) {
                    return t instanceof c && t.anchor == this.anchor && t.head == this.head
                }
                getBookmark() {
                    return new p(this.anchor, this.head)
                }
                toJSON() {
                    return {
                        type: "text",
                        anchor: this.anchor,
                        head: this.head
                    }
                }
                static fromJSON(t, e) {
                    if ("number" != typeof e.anchor || "number" != typeof e.head) throw new RangeError("Invalid input for TextSelection.fromJSON");
                    return new c(t.resolve(e.anchor), t.resolve(e.head))
                }
                static create(t, e, n = e) {
                    let r = t.resolve(e);
                    return new this(r, n == e ? r : t.resolve(n))
                }
                static between(t, e, n) {
                    let r = t.pos - e.pos;
                    if (n && !r || (n = r >= 0 ? 1 : -1), !e.parent.inlineContent) {
                        let t = s.findFrom(e, n, !0) || s.findFrom(e, -n, !0);
                        if (!t) return s.near(e, n);
                        e = t.$head
                    }
                    return t.parent.inlineContent || (0 == r || (t = (s.findFrom(t, -n, !0) || s.findFrom(t, n, !0)).$anchor).pos < e.pos != r < 0) && (t = e), new c(t, e)
                }
            }
            s.jsonID("text", c);
            class p {
                constructor(t, e) {
                    this.anchor = t, this.head = e
                }
                map(t) {
                    return new p(t.map(this.anchor), t.map(this.head))
                }
                resolve(t) {
                    return c.between(t.resolve(this.anchor), t.resolve(this.head))
                }
            }
            class d extends s {
                constructor(t) {
                    let e = t.nodeAfter,
                        n = t.node(0).resolve(t.pos + e.nodeSize);
                    super(t, n), this.node = e
                }
                map(t, e) {
                    let {
                        deleted: n,
                        pos: r
                    } = e.mapResult(this.anchor), o = t.resolve(r);
                    return n ? s.near(o) : new d(o)
                }
                content() {
                    return new r.p2(r.HY.from(this.node), 0, 0)
                }
                eq(t) {
                    return t instanceof d && t.anchor == this.anchor
                }
                toJSON() {
                    return {
                        type: "node",
                        anchor: this.anchor
                    }
                }
                getBookmark() {
                    return new f(this.anchor)
                }
                static fromJSON(t, e) {
                    if ("number" != typeof e.anchor) throw new RangeError("Invalid input for NodeSelection.fromJSON");
                    return new d(t.resolve(e.anchor))
                }
                static create(t, e) {
                    return new d(t.resolve(e))
                }
                static isSelectable(t) {
                    return !t.isText && !1 !== t.type.spec.selectable
                }
            }
            d.prototype.visible = !1, s.jsonID("node", d);
            class f {
                constructor(t) {
                    this.anchor = t
                }
                map(t) {
                    let {
                        deleted: e,
                        pos: n
                    } = t.mapResult(this.anchor);
                    return e ? new p(n, n) : new f(n)
                }
                resolve(t) {
                    let e = t.resolve(this.anchor),
                        n = e.nodeAfter;
                    return n && d.isSelectable(n) ? new d(e) : s.near(e)
                }
            }
            class h extends s {
                constructor(t) {
                    super(t.resolve(0), t.resolve(t.content.size))
                }
                replace(t, e = r.p2.empty) {
                    if (e == r.p2.empty) {
                        t.delete(0, t.doc.content.size);
                        let e = s.atStart(t.doc);
                        e.eq(t.selection) || t.setSelection(e)
                    } else super.replace(t, e)
                }
                toJSON() {
                    return {
                        type: "all"
                    }
                }
                static fromJSON(t) {
                    return new h(t)
                }
                map(t) {
                    return new h(t)
                }
                eq(t) {
                    return t instanceof h
                }
                getBookmark() {
                    return m
                }
            }
            s.jsonID("all", h);
            const m = {
                map() {
                    return this
                },
                resolve: t => new h(t)
            };

            function g(t, e, n, r, o, i = !1) {
                if (e.inlineContent) return c.create(t, n);
                for (let s = r - (o > 0 ? 0 : 1); o > 0 ? s < e.childCount : s >= 0; s += o) {
                    let r = e.child(s);
                    if (r.isAtom) {
                        if (!i && d.isSelectable(r)) return d.create(t, n - (o < 0 ? r.nodeSize : 0))
                    } else {
                        let e = g(t, r, n + o, o < 0 ? r.childCount : 0, o, i);
                        if (e) return e
                    }
                    n += r.nodeSize * o
                }
                return null
            }

            function y(t, e, n) {
                let r = t.steps.length - 1;
                if (r < e) return;
                let i, a = t.steps[r];
                (a instanceof o.Pu || a instanceof o.FC) && (t.mapping.maps[r].forEach(((t, e, n, r) => {
                    null == i && (i = r)
                })), t.setSelection(s.near(t.doc.resolve(i), n)))
            }
            class v extends o.wx {
                constructor(t) {
                    super(t.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = Object.create(null), this.time = Date.now(), this.curSelection = t.selection, this.storedMarks = t.storedMarks
                }
                get selection() {
                    return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection
                }
                setSelection(t) {
                    if (t.$from.doc != this.doc) throw new RangeError("Selection passed to setSelection must point at the current document");
                    return this.curSelection = t, this.curSelectionFor = this.steps.length, this.updated = -3 & (1 | this.updated), this.storedMarks = null, this
                }
                get selectionSet() {
                    return (1 & this.updated) > 0
                }
                setStoredMarks(t) {
                    return this.storedMarks = t, this.updated |= 2, this
                }
                ensureMarks(t) {
                    return r.vc.sameSet(this.storedMarks || this.selection.$from.marks(), t) || this.setStoredMarks(t), this
                }
                addStoredMark(t) {
                    return this.ensureMarks(t.addToSet(this.storedMarks || this.selection.$head.marks()))
                }
                removeStoredMark(t) {
                    return this.ensureMarks(t.removeFromSet(this.storedMarks || this.selection.$head.marks()))
                }
                get storedMarksSet() {
                    return (2 & this.updated) > 0
                }
                addStep(t, e) {
                    super.addStep(t, e), this.updated = -3 & this.updated, this.storedMarks = null
                }
                setTime(t) {
                    return this.time = t, this
                }
                replaceSelection(t) {
                    return this.selection.replace(this, t), this
                }
                replaceSelectionWith(t, e = !0) {
                    let n = this.selection;
                    return e && (t = t.mark(this.storedMarks || (n.empty ? n.$from.marks() : n.$from.marksAcross(n.$to) || r.vc.none))), n.replaceWith(this, t), this
                }
                deleteSelection() {
                    return this.selection.replace(this), this
                }
                insertText(t, e, n) {
                    let r = this.doc.type.schema;
                    if (null == e) return t ? this.replaceSelectionWith(r.text(t), !0) : this.deleteSelection(); {
                        if (null == n && (n = e), n = null == n ? e : n, !t) return this.deleteRange(e, n);
                        let o = this.storedMarks;
                        if (!o) {
                            let t = this.doc.resolve(e);
                            o = n == e ? t.marks() : t.marksAcross(this.doc.resolve(n))
                        }
                        return this.replaceRangeWith(e, n, r.text(t, o)), this.selection.empty || this.setSelection(s.near(this.selection.$to)), this
                    }
                }
                setMeta(t, e) {
                    return this.meta["string" == typeof t ? t : t.key] = e, this
                }
                getMeta(t) {
                    return this.meta["string" == typeof t ? t : t.key]
                }
                get isGeneric() {
                    for (let t in this.meta) return !1;
                    return !0
                }
                scrollIntoView() {
                    return this.updated |= 4, this
                }
                get scrolledIntoView() {
                    return (4 & this.updated) > 0
                }
            }

            function b(t, e) {
                return e && t ? t.bind(e) : t
            }
            class D {
                constructor(t, e, n) {
                    this.name = t, this.init = b(e.init, n), this.apply = b(e.apply, n)
                }
            }
            const w = [new D("doc", {
                init: t => t.doc || t.schema.topNodeType.createAndFill(),
                apply: t => t.doc
            }), new D("selection", {
                init: (t, e) => t.selection || s.atStart(e.doc),
                apply: t => t.selection
            }), new D("storedMarks", {
                init: t => t.storedMarks || null,
                apply: (t, e, n, r) => r.selection.$cursor ? t.storedMarks : null
            }), new D("scrollToSelection", {
                init: () => 0,
                apply: (t, e) => t.scrolledIntoView ? e + 1 : e
            })];
            class x {
                constructor(t, e) {
                    this.schema = t, this.plugins = [], this.pluginsByKey = Object.create(null), this.fields = w.slice(), e && e.forEach((t => {
                        if (this.pluginsByKey[t.key]) throw new RangeError("Adding different instances of a keyed plugin (" + t.key + ")");
                        this.plugins.push(t), this.pluginsByKey[t.key] = t, t.spec.state && this.fields.push(new D(t.key, t.spec.state, t))
                    }))
                }
            }
            class k {
                constructor(t) {
                    this.config = t
                }
                get schema() {
                    return this.config.schema
                }
                get plugins() {
                    return this.config.plugins
                }
                apply(t) {
                    return this.applyTransaction(t).state
                }
                filterTransaction(t, e = -1) {
                    for (let n = 0; n < this.config.plugins.length; n++)
                        if (n != e) {
                            let e = this.config.plugins[n];
                            if (e.spec.filterTransaction && !e.spec.filterTransaction.call(e, t, this)) return !1
                        }
                    return !0
                }
                applyTransaction(t) {
                    if (!this.filterTransaction(t)) return {
                        state: this,
                        transactions: []
                    };
                    let e = [t],
                        n = this.applyInner(t),
                        r = null;
                    for (;;) {
                        let o = !1;
                        for (let i = 0; i < this.config.plugins.length; i++) {
                            let s = this.config.plugins[i];
                            if (s.spec.appendTransaction) {
                                let a = r ? r[i].n : 0,
                                    u = r ? r[i].state : this,
                                    l = a < e.length && s.spec.appendTransaction.call(s, a ? e.slice(a) : e, u, n);
                                if (l && n.filterTransaction(l, i)) {
                                    if (l.setMeta("appendedTransaction", t), !r) {
                                        r = [];
                                        for (let t = 0; t < this.config.plugins.length; t++) r.push(t < i ? {
                                            state: n,
                                            n: e.length
                                        } : {
                                            state: this,
                                            n: 0
                                        })
                                    }
                                    e.push(l), n = n.applyInner(l), o = !0
                                }
                                r && (r[i] = {
                                    state: n,
                                    n: e.length
                                })
                            }
                        }
                        if (!o) return {
                            state: n,
                            transactions: e
                        }
                    }
                }
                applyInner(t) {
                    if (!t.before.eq(this.doc)) throw new RangeError("Applying a mismatched transaction");
                    let e = new k(this.config),
                        n = this.config.fields;
                    for (let r = 0; r < n.length; r++) {
                        let o = n[r];
                        e[o.name] = o.apply(t, this[o.name], this, e)
                    }
                    return e
                }
                get tr() {
                    return new v(this)
                }
                static create(t) {
                    let e = new x(t.doc ? t.doc.type.schema : t.schema, t.plugins),
                        n = new k(e);
                    for (let r = 0; r < e.fields.length; r++) n[e.fields[r].name] = e.fields[r].init(t, n);
                    return n
                }
                reconfigure(t) {
                    let e = new x(this.schema, t.plugins),
                        n = e.fields,
                        r = new k(e);
                    for (let o = 0; o < n.length; o++) {
                        let e = n[o].name;
                        r[e] = this.hasOwnProperty(e) ? this[e] : n[o].init(t, r)
                    }
                    return r
                }
                toJSON(t) {
                    let e = {
                        doc: this.doc.toJSON(),
                        selection: this.selection.toJSON()
                    };
                    if (this.storedMarks && (e.storedMarks = this.storedMarks.map((t => t.toJSON()))), t && "object" == typeof t)
                        for (let n in t) {
                            if ("doc" == n || "selection" == n) throw new RangeError("The JSON fields `doc` and `selection` are reserved");
                            let r = t[n],
                                o = r.spec.state;
                            o && o.toJSON && (e[n] = o.toJSON.call(r, this[r.key]))
                        }
                    return e
                }
                static fromJSON(t, e, n) {
                    if (!e) throw new RangeError("Invalid input for EditorState.fromJSON");
                    if (!t.schema) throw new RangeError("Required config field 'schema' missing");
                    let o = new x(t.schema, t.plugins),
                        i = new k(o);
                    return o.fields.forEach((o => {
                        if ("doc" == o.name) i.doc = r.NB.fromJSON(t.schema, e.doc);
                        else if ("selection" == o.name) i.selection = s.fromJSON(i.doc, e.selection);
                        else if ("storedMarks" == o.name) e.storedMarks && (i.storedMarks = e.storedMarks.map(t.schema.markFromJSON));
                        else {
                            if (n)
                                for (let r in n) {
                                    let s = n[r],
                                        a = s.spec.state;
                                    if (s.key == o.name && a && a.fromJSON && Object.prototype.hasOwnProperty.call(e, r)) return void(i[o.name] = a.fromJSON.call(s, t, e[r], i))
                                }
                            i[o.name] = o.init(t, i)
                        }
                    })), i
                }
            }

            function E(t, e, n) {
                for (let r in t) {
                    let o = t[r];
                    o instanceof Function ? o = o.bind(e) : "handleDOMEvents" == r && (o = E(o, e, {})), n[r] = o
                }
                return n
            }
            class C {
                constructor(t) {
                    this.spec = t, this.props = {}, t.props && E(t.props, this, this.props), this.key = t.key ? t.key.key : A("plugin")
                }
                getState(t) {
                    return t[this.key]
                }
            }
            const S = Object.create(null);

            function A(t) {
                return t in S ? t + "$" + ++S[t] : (S[t] = 0, t + "$")
            }
            class O {
                constructor(t = "key") {
                    this.key = A(t)
                }
                get(t) {
                    return t.config.pluginsByKey[this.key]
                }
                getState(t) {
                    return t[this.key]
                }
            }
        },
        85804: function(t, e, n) {
            "use strict";
            n.d(e, {
                Ax: function() {
                    return E
                },
                FC: function() {
                    return v
                },
                GJ: function() {
                    return A
                },
                Mn: function() {
                    return C
                },
                Pu: function() {
                    return y
                },
                dR: function() {
                    return M
                },
                k9: function() {
                    return w
                },
                nd: function() {
                    return x
                },
                nj: function() {
                    return O
                },
                vs: function() {
                    return u
                },
                wx: function() {
                    return W
                }
            });
            var r = n(31506);
            const o = Math.pow(2, 16);

            function i(t) {
                return 65535 & t
            }
            class s {
                constructor(t, e, n) {
                    this.pos = t, this.delInfo = e, this.recover = n
                }
                get deleted() {
                    return (8 & this.delInfo) > 0
                }
                get deletedBefore() {
                    return (5 & this.delInfo) > 0
                }
                get deletedAfter() {
                    return (6 & this.delInfo) > 0
                }
                get deletedAcross() {
                    return (4 & this.delInfo) > 0
                }
            }
            class a {
                constructor(t, e = !1) {
                    if (this.ranges = t, this.inverted = e, !t.length && a.empty) return a.empty
                }
                recover(t) {
                    let e = 0,
                        n = i(t);
                    if (!this.inverted)
                        for (let r = 0; r < n; r++) e += this.ranges[3 * r + 2] - this.ranges[3 * r + 1];
                    return this.ranges[3 * n] + e + function(t) {
                        return (t - (65535 & t)) / o
                    }(t)
                }
                mapResult(t, e = 1) {
                    return this._map(t, e, !1)
                }
                map(t, e = 1) {
                    return this._map(t, e, !0)
                }
                _map(t, e, n) {
                    let r = 0,
                        i = this.inverted ? 2 : 1,
                        a = this.inverted ? 1 : 2;
                    for (let u = 0; u < this.ranges.length; u += 3) {
                        let l = this.ranges[u] - (this.inverted ? r : 0);
                        if (l > t) break;
                        let c = this.ranges[u + i],
                            p = this.ranges[u + a],
                            d = l + c;
                        if (t <= d) {
                            let i = l + r + ((c ? t == l ? -1 : t == d ? 1 : e : e) < 0 ? 0 : p);
                            if (n) return i;
                            let a = t == (e < 0 ? l : d) ? null : u / 3 + (t - l) * o,
                                f = t == l ? 2 : t == d ? 1 : 4;
                            return (e < 0 ? t != l : t != d) && (f |= 8), new s(i, f, a)
                        }
                        r += p - c
                    }
                    return n ? t + r : new s(t + r, 0, null)
                }
                touches(t, e) {
                    let n = 0,
                        r = i(e),
                        o = this.inverted ? 2 : 1,
                        s = this.inverted ? 1 : 2;
                    for (let i = 0; i < this.ranges.length; i += 3) {
                        let e = this.ranges[i] - (this.inverted ? n : 0);
                        if (e > t) break;
                        let a = this.ranges[i + o];
                        if (t <= e + a && i == 3 * r) return !0;
                        n += this.ranges[i + s] - a
                    }
                    return !1
                }
                forEach(t) {
                    let e = this.inverted ? 2 : 1,
                        n = this.inverted ? 1 : 2;
                    for (let r = 0, o = 0; r < this.ranges.length; r += 3) {
                        let i = this.ranges[r],
                            s = i - (this.inverted ? o : 0),
                            a = i + (this.inverted ? 0 : o),
                            u = this.ranges[r + e],
                            l = this.ranges[r + n];
                        t(s, s + u, a, a + l), o += l - u
                    }
                }
                invert() {
                    return new a(this.ranges, !this.inverted)
                }
                toString() {
                    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges)
                }
                static offset(t) {
                    return 0 == t ? a.empty : new a(t < 0 ? [0, -t, 0] : [0, 0, t])
                }
            }
            a.empty = new a([]);
            class u {
                constructor(t = [], e, n = 0, r = t.length) {
                    this.maps = t, this.mirror = e, this.from = n, this.to = r
                }
                slice(t = 0, e = this.maps.length) {
                    return new u(this.maps, this.mirror, t, e)
                }
                copy() {
                    return new u(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to)
                }
                appendMap(t, e) {
                    this.to = this.maps.push(t), null != e && this.setMirror(this.maps.length - 1, e)
                }
                appendMapping(t) {
                    for (let e = 0, n = this.maps.length; e < t.maps.length; e++) {
                        let r = t.getMirror(e);
                        this.appendMap(t.maps[e], null != r && r < e ? n + r : void 0)
                    }
                }
                getMirror(t) {
                    if (this.mirror)
                        for (let e = 0; e < this.mirror.length; e++)
                            if (this.mirror[e] == t) return this.mirror[e + (e % 2 ? -1 : 1)]
                }
                setMirror(t, e) {
                    this.mirror || (this.mirror = []), this.mirror.push(t, e)
                }
                appendMappingInverted(t) {
                    for (let e = t.maps.length - 1, n = this.maps.length + t.maps.length; e >= 0; e--) {
                        let r = t.getMirror(e);
                        this.appendMap(t.maps[e].invert(), null != r && r > e ? n - r - 1 : void 0)
                    }
                }
                invert() {
                    let t = new u;
                    return t.appendMappingInverted(this), t
                }
                map(t, e = 1) {
                    if (this.mirror) return this._map(t, e, !0);
                    for (let n = this.from; n < this.to; n++) t = this.maps[n].map(t, e);
                    return t
                }
                mapResult(t, e = 1) {
                    return this._map(t, e, !1)
                }
                _map(t, e, n) {
                    let r = 0;
                    for (let o = this.from; o < this.to; o++) {
                        let n = this.maps[o].mapResult(t, e);
                        if (null != n.recover) {
                            let e = this.getMirror(o);
                            if (null != e && e > o && e < this.to) {
                                o = e, t = this.maps[e].recover(n.recover);
                                continue
                            }
                        }
                        r |= n.delInfo, t = n.pos
                    }
                    return n ? t : new s(t, r, null)
                }
            }
            const l = Object.create(null);
            class c {
                getMap() {
                    return a.empty
                }
                merge(t) {
                    return null
                }
                static fromJSON(t, e) {
                    if (!e || !e.stepType) throw new RangeError("Invalid input for Step.fromJSON");
                    let n = l[e.stepType];
                    if (!n) throw new RangeError(`No step type ${e.stepType} defined`);
                    return n.fromJSON(t, e)
                }
                static jsonID(t, e) {
                    if (t in l) throw new RangeError("Duplicate use of step JSON ID " + t);
                    return l[t] = e, e.prototype.jsonID = t, e
                }
            }
            class p {
                constructor(t, e) {
                    this.doc = t, this.failed = e
                }
                static ok(t) {
                    return new p(t, null)
                }
                static fail(t) {
                    return new p(null, t)
                }
                static fromReplace(t, e, n, o) {
                    try {
                        return p.ok(t.replace(e, n, o))
                    } catch (i) {
                        if (i instanceof r.e4) return p.fail(i.message);
                        throw i
                    }
                }
            }

            function d(t, e, n) {
                let o = [];
                for (let r = 0; r < t.childCount; r++) {
                    let i = t.child(r);
                    i.content.size && (i = i.copy(d(i.content, e, i))), i.isInline && (i = e(i, n, r)), o.push(i)
                }
                return r.HY.fromArray(o)
            }
            class f extends c {
                constructor(t, e, n) {
                    super(), this.from = t, this.to = e, this.mark = n
                }
                apply(t) {
                    let e = t.slice(this.from, this.to),
                        n = t.resolve(this.from),
                        o = n.node(n.sharedDepth(this.to)),
                        i = new r.p2(d(e.content, ((t, e) => t.isAtom && e.type.allowsMarkType(this.mark.type) ? t.mark(this.mark.addToSet(t.marks)) : t), o), e.openStart, e.openEnd);
                    return p.fromReplace(t, this.from, this.to, i)
                }
                invert() {
                    return new h(this.from, this.to, this.mark)
                }
                map(t) {
                    let e = t.mapResult(this.from, 1),
                        n = t.mapResult(this.to, -1);
                    return e.deleted && n.deleted || e.pos >= n.pos ? null : new f(e.pos, n.pos, this.mark)
                }
                merge(t) {
                    return t instanceof f && t.mark.eq(this.mark) && this.from <= t.to && this.to >= t.from ? new f(Math.min(this.from, t.from), Math.max(this.to, t.to), this.mark) : null
                }
                toJSON() {
                    return {
                        stepType: "addMark",
                        mark: this.mark.toJSON(),
                        from: this.from,
                        to: this.to
                    }
                }
                static fromJSON(t, e) {
                    if ("number" != typeof e.from || "number" != typeof e.to) throw new RangeError("Invalid input for AddMarkStep.fromJSON");
                    return new f(e.from, e.to, t.markFromJSON(e.mark))
                }
            }
            c.jsonID("addMark", f);
            class h extends c {
                constructor(t, e, n) {
                    super(), this.from = t, this.to = e, this.mark = n
                }
                apply(t) {
                    let e = t.slice(this.from, this.to),
                        n = new r.p2(d(e.content, (t => t.mark(this.mark.removeFromSet(t.marks))), t), e.openStart, e.openEnd);
                    return p.fromReplace(t, this.from, this.to, n)
                }
                invert() {
                    return new f(this.from, this.to, this.mark)
                }
                map(t) {
                    let e = t.mapResult(this.from, 1),
                        n = t.mapResult(this.to, -1);
                    return e.deleted && n.deleted || e.pos >= n.pos ? null : new h(e.pos, n.pos, this.mark)
                }
                merge(t) {
                    return t instanceof h && t.mark.eq(this.mark) && this.from <= t.to && this.to >= t.from ? new h(Math.min(this.from, t.from), Math.max(this.to, t.to), this.mark) : null
                }
                toJSON() {
                    return {
                        stepType: "removeMark",
                        mark: this.mark.toJSON(),
                        from: this.from,
                        to: this.to
                    }
                }
                static fromJSON(t, e) {
                    if ("number" != typeof e.from || "number" != typeof e.to) throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
                    return new h(e.from, e.to, t.markFromJSON(e.mark))
                }
            }
            c.jsonID("removeMark", h);
            class m extends c {
                constructor(t, e) {
                    super(), this.pos = t, this.mark = e
                }
                apply(t) {
                    let e = t.nodeAt(this.pos);
                    if (!e) return p.fail("No node at mark step's position");
                    let n = e.type.create(e.attrs, null, this.mark.addToSet(e.marks));
                    return p.fromReplace(t, this.pos, this.pos + 1, new r.p2(r.HY.from(n), 0, e.isLeaf ? 0 : 1))
                }
                invert(t) {
                    let e = t.nodeAt(this.pos);
                    if (e) {
                        let t = this.mark.addToSet(e.marks);
                        if (t.length == e.marks.length) {
                            for (let n = 0; n < e.marks.length; n++)
                                if (!e.marks[n].isInSet(t)) return new m(this.pos, e.marks[n]);
                            return new m(this.pos, this.mark)
                        }
                    }
                    return new g(this.pos, this.mark)
                }
                map(t) {
                    let e = t.mapResult(this.pos, 1);
                    return e.deletedAfter ? null : new m(e.pos, this.mark)
                }
                toJSON() {
                    return {
                        stepType: "addNodeMark",
                        pos: this.pos,
                        mark: this.mark.toJSON()
                    }
                }
                static fromJSON(t, e) {
                    if ("number" != typeof e.pos) throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
                    return new m(e.pos, t.markFromJSON(e.mark))
                }
            }
            c.jsonID("addNodeMark", m);
            class g extends c {
                constructor(t, e) {
                    super(), this.pos = t, this.mark = e
                }
                apply(t) {
                    let e = t.nodeAt(this.pos);
                    if (!e) return p.fail("No node at mark step's position");
                    let n = e.type.create(e.attrs, null, this.mark.removeFromSet(e.marks));
                    return p.fromReplace(t, this.pos, this.pos + 1, new r.p2(r.HY.from(n), 0, e.isLeaf ? 0 : 1))
                }
                invert(t) {
                    let e = t.nodeAt(this.pos);
                    return e && this.mark.isInSet(e.marks) ? new m(this.pos, this.mark) : this
                }
                map(t) {
                    let e = t.mapResult(this.pos, 1);
                    return e.deletedAfter ? null : new g(e.pos, this.mark)
                }
                toJSON() {
                    return {
                        stepType: "removeNodeMark",
                        pos: this.pos,
                        mark: this.mark.toJSON()
                    }
                }
                static fromJSON(t, e) {
                    if ("number" != typeof e.pos) throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
                    return new g(e.pos, t.markFromJSON(e.mark))
                }
            }
            c.jsonID("removeNodeMark", g);
            class y extends c {
                constructor(t, e, n, r = !1) {
                    super(), this.from = t, this.to = e, this.slice = n, this.structure = r
                }
                apply(t) {
                    return this.structure && b(t, this.from, this.to) ? p.fail("Structure replace would overwrite content") : p.fromReplace(t, this.from, this.to, this.slice)
                }
                getMap() {
                    return new a([this.from, this.to - this.from, this.slice.size])
                }
                invert(t) {
                    return new y(this.from, this.from + this.slice.size, t.slice(this.from, this.to))
                }
                map(t) {
                    let e = t.mapResult(this.from, 1),
                        n = t.mapResult(this.to, -1);
                    return e.deletedAcross && n.deletedAcross ? null : new y(e.pos, Math.max(e.pos, n.pos), this.slice)
                }
                merge(t) {
                    if (!(t instanceof y) || t.structure || this.structure) return null;
                    if (this.from + this.slice.size != t.from || this.slice.openEnd || t.slice.openStart) {
                        if (t.to != this.from || this.slice.openStart || t.slice.openEnd) return null; {
                            let e = this.slice.size + t.slice.size == 0 ? r.p2.empty : new r.p2(t.slice.content.append(this.slice.content), t.slice.openStart, this.slice.openEnd);
                            return new y(t.from, this.to, e, this.structure)
                        }
                    } {
                        let e = this.slice.size + t.slice.size == 0 ? r.p2.empty : new r.p2(this.slice.content.append(t.slice.content), this.slice.openStart, t.slice.openEnd);
                        return new y(this.from, this.to + (t.to - t.from), e, this.structure)
                    }
                }
                toJSON() {
                    let t = {
                        stepType: "replace",
                        from: this.from,
                        to: this.to
                    };
                    return this.slice.size && (t.slice = this.slice.toJSON()), this.structure && (t.structure = !0), t
                }
                static fromJSON(t, e) {
                    if ("number" != typeof e.from || "number" != typeof e.to) throw new RangeError("Invalid input for ReplaceStep.fromJSON");
                    return new y(e.from, e.to, r.p2.fromJSON(t, e.slice), !!e.structure)
                }
            }
            c.jsonID("replace", y);
            class v extends c {
                constructor(t, e, n, r, o, i, s = !1) {
                    super(), this.from = t, this.to = e, this.gapFrom = n, this.gapTo = r, this.slice = o, this.insert = i, this.structure = s
                }
                apply(t) {
                    if (this.structure && (b(t, this.from, this.gapFrom) || b(t, this.gapTo, this.to))) return p.fail("Structure gap-replace would overwrite content");
                    let e = t.slice(this.gapFrom, this.gapTo);
                    if (e.openStart || e.openEnd) return p.fail("Gap is not a flat range");
                    let n = this.slice.insertAt(this.insert, e.content);
                    return n ? p.fromReplace(t, this.from, this.to, n) : p.fail("Content does not fit in gap")
                }
                getMap() {
                    return new a([this.from, this.gapFrom - this.from, this.insert, this.gapTo, this.to - this.gapTo, this.slice.size - this.insert])
                }
                invert(t) {
                    let e = this.gapTo - this.gapFrom;
                    return new v(this.from, this.from + this.slice.size + e, this.from + this.insert, this.from + this.insert + e, t.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure)
                }
                map(t) {
                    let e = t.mapResult(this.from, 1),
                        n = t.mapResult(this.to, -1),
                        r = t.map(this.gapFrom, -1),
                        o = t.map(this.gapTo, 1);
                    return e.deletedAcross && n.deletedAcross || r < e.pos || o > n.pos ? null : new v(e.pos, n.pos, r, o, this.slice, this.insert, this.structure)
                }
                toJSON() {
                    let t = {
                        stepType: "replaceAround",
                        from: this.from,
                        to: this.to,
                        gapFrom: this.gapFrom,
                        gapTo: this.gapTo,
                        insert: this.insert
                    };
                    return this.slice.size && (t.slice = this.slice.toJSON()), this.structure && (t.structure = !0), t
                }
                static fromJSON(t, e) {
                    if ("number" != typeof e.from || "number" != typeof e.to || "number" != typeof e.gapFrom || "number" != typeof e.gapTo || "number" != typeof e.insert) throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
                    return new v(e.from, e.to, e.gapFrom, e.gapTo, r.p2.fromJSON(t, e.slice), e.insert, !!e.structure)
                }
            }

            function b(t, e, n) {
                let r = t.resolve(e),
                    o = n - e,
                    i = r.depth;
                for (; o > 0 && i > 0 && r.indexAfter(i) == r.node(i).childCount;) i--, o--;
                if (o > 0) {
                    let t = r.node(i).maybeChild(r.indexAfter(i));
                    for (; o > 0;) {
                        if (!t || t.isLeaf) return !0;
                        t = t.firstChild, o--
                    }
                }
                return !1
            }

            function D(t, e, n) {
                return (0 == e || t.canReplace(e, t.childCount)) && (n == t.childCount || t.canReplace(0, n))
            }

            function w(t) {
                let e = t.parent.content.cutByIndex(t.startIndex, t.endIndex);
                for (let n = t.depth;; --n) {
                    let r = t.$from.node(n),
                        o = t.$from.index(n),
                        i = t.$to.indexAfter(n);
                    if (n < t.depth && r.canReplace(o, i, e)) return n;
                    if (0 == n || r.type.spec.isolating || !D(r, o, i)) break
                }
                return null
            }

            function x(t, e, n = null, r = t) {
                let o = function(t, e) {
                        let {
                            parent: n,
                            startIndex: r,
                            endIndex: o
                        } = t, i = n.contentMatchAt(r).findWrapping(e);
                        if (!i) return null;
                        let s = i.length ? i[0] : e;
                        return n.canReplaceWith(r, o, s) ? i : null
                    }(t, e),
                    i = o && function(t, e) {
                        let {
                            parent: n,
                            startIndex: r,
                            endIndex: o
                        } = t, i = n.child(r), s = e.contentMatch.findWrapping(i.type);
                        if (!s) return null;
                        let a = (s.length ? s[s.length - 1] : e).contentMatch;
                        for (let u = r; a && u < o; u++) a = a.matchType(n.child(u).type);
                        return a && a.validEnd ? s : null
                    }(r, e);
                return i ? o.map(k).concat({
                    type: e,
                    attrs: n
                }).concat(i.map(k)) : null
            }

            function k(t) {
                return {
                    type: t,
                    attrs: null
                }
            }

            function E(t, e, n = 1, r) {
                let o = t.resolve(e),
                    i = o.depth - n,
                    s = r && r[r.length - 1] || o.parent;
                if (i < 0 || o.parent.type.spec.isolating || !o.parent.canReplace(o.index(), o.parent.childCount) || !s.type.validContent(o.parent.content.cutByIndex(o.index(), o.parent.childCount))) return !1;
                for (let l = o.depth - 1, c = n - 2; l > i; l--, c--) {
                    let t = o.node(l),
                        e = o.index(l);
                    if (t.type.spec.isolating) return !1;
                    let n = t.content.cutByIndex(e, t.childCount),
                        i = r && r[c + 1];
                    i && (n = n.replaceChild(0, i.type.create(i.attrs)));
                    let s = r && r[c] || t;
                    if (!t.canReplace(e + 1, t.childCount) || !s.type.validContent(n)) return !1
                }
                let a = o.indexAfter(i),
                    u = r && r[0];
                return o.node(i).canReplaceWith(a, a, u ? u.type : o.node(i + 1).type)
            }

            function C(t, e) {
                let n = t.resolve(e),
                    r = n.index();
                return S(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1)
            }

            function S(t, e) {
                return !(!t || !e || t.isLeaf || !t.canAppend(e))
            }

            function A(t, e, n = -1) {
                let r = t.resolve(e);
                for (let o = r.depth;; o--) {
                    let t, i, s = r.index(o);
                    if (o == r.depth ? (t = r.nodeBefore, i = r.nodeAfter) : n > 0 ? (t = r.node(o + 1), s++, i = r.node(o).maybeChild(s)) : (t = r.node(o).maybeChild(s - 1), i = r.node(o + 1)), t && !t.isTextblock && S(t, i) && r.node(o).canReplace(s, s + 1)) return e;
                    if (0 == o) break;
                    e = n < 0 ? r.before(o) : r.after(o)
                }
            }

            function O(t, e, n) {
                let r = t.resolve(e);
                if (!n.content.size) return e;
                let o = n.content;
                for (let i = 0; i < n.openStart; i++) o = o.firstChild.content;
                for (let i = 1; i <= (0 == n.openStart && n.size ? 2 : 1); i++)
                    for (let t = r.depth; t >= 0; t--) {
                        let e = t == r.depth ? 0 : r.pos <= (r.start(t + 1) + r.end(t + 1)) / 2 ? -1 : 1,
                            n = r.index(t) + (e > 0 ? 1 : 0),
                            s = r.node(t),
                            a = !1;
                        if (1 == i) a = s.canReplace(n, n, o);
                        else {
                            let t = s.contentMatchAt(n).findWrapping(o.firstChild.type);
                            a = t && s.canReplaceWith(n, n, t[0])
                        }
                        if (a) return 0 == e ? r.pos : e < 0 ? r.before(t + 1) : r.after(t + 1)
                    }
                return null
            }

            function M(t, e, n = e, o = r.p2.empty) {
                if (e == n && !o.size) return null;
                let i = t.resolve(e),
                    s = t.resolve(n);
                return F(i, s, o) ? new y(e, n, o) : new T(i, s, o).fit()
            }

            function F(t, e, n) {
                return !n.openStart && !n.openEnd && t.start() == e.start() && t.parent.canReplace(t.index(), e.index(), n.content)
            }
            c.jsonID("replaceAround", v);
            class T {
                constructor(t, e, n) {
                    this.$from = t, this.$to = e, this.unplaced = n, this.frontier = [], this.placed = r.HY.empty;
                    for (let r = 0; r <= t.depth; r++) {
                        let e = t.node(r);
                        this.frontier.push({
                            type: e.type,
                            match: e.contentMatchAt(t.indexAfter(r))
                        })
                    }
                    for (let o = t.depth; o > 0; o--) this.placed = r.HY.from(t.node(o).copy(this.placed))
                }
                get depth() {
                    return this.frontier.length - 1
                }
                fit() {
                    for (; this.unplaced.size;) {
                        let t = this.findFittable();
                        t ? this.placeNodes(t) : this.openMore() || this.dropNode()
                    }
                    let t = this.mustMoveInline(),
                        e = this.placed.size - this.depth - this.$from.depth,
                        n = this.$from,
                        o = this.close(t < 0 ? this.$to : n.doc.resolve(t));
                    if (!o) return null;
                    let i = this.placed,
                        s = n.depth,
                        a = o.depth;
                    for (; s && a && 1 == i.childCount;) i = i.firstChild.content, s--, a--;
                    let u = new r.p2(i, s, a);
                    return t > -1 ? new v(n.pos, t, this.$to.pos, this.$to.end(), u, e) : u.size || n.pos != this.$to.pos ? new y(n.pos, o.pos, u) : null
                }
                findFittable() {
                    let t = this.unplaced.openStart;
                    for (let e = this.unplaced.content, n = 0, r = this.unplaced.openEnd; n < t; n++) {
                        let o = e.firstChild;
                        if (e.childCount > 1 && (r = 0), o.type.spec.isolating && r <= n) {
                            t = n;
                            break
                        }
                        e = o.content
                    }
                    for (let e = 1; e <= 2; e++)
                        for (let n = 1 == e ? t : this.unplaced.openStart; n >= 0; n--) {
                            let t, o = null;
                            n ? (o = N(this.unplaced.content, n - 1).firstChild, t = o.content) : t = this.unplaced.content;
                            let i = t.firstChild;
                            for (let s = this.depth; s >= 0; s--) {
                                let t, {
                                        type: a,
                                        match: u
                                    } = this.frontier[s],
                                    l = null;
                                if (1 == e && (i ? u.matchType(i.type) || (l = u.fillBefore(r.HY.from(i), !1)) : o && a.compatibleContent(o.type))) return {
                                    sliceDepth: n,
                                    frontierDepth: s,
                                    parent: o,
                                    inject: l
                                };
                                if (2 == e && i && (t = u.findWrapping(i.type))) return {
                                    sliceDepth: n,
                                    frontierDepth: s,
                                    parent: o,
                                    wrap: t
                                };
                                if (o && u.matchType(o.type)) break
                            }
                        }
                }
                openMore() {
                    let {
                        content: t,
                        openStart: e,
                        openEnd: n
                    } = this.unplaced, o = N(t, e);
                    return !(!o.childCount || o.firstChild.isLeaf) && (this.unplaced = new r.p2(t, e + 1, Math.max(n, o.size + e >= t.size - n ? e + 1 : 0)), !0)
                }
                dropNode() {
                    let {
                        content: t,
                        openStart: e,
                        openEnd: n
                    } = this.unplaced, o = N(t, e);
                    if (o.childCount <= 1 && e > 0) {
                        let i = t.size - e <= e + o.size;
                        this.unplaced = new r.p2(B(t, e - 1, 1), e - 1, i ? e - 1 : n)
                    } else this.unplaced = new r.p2(B(t, e, 1), e, n)
                }
                placeNodes({
                    sliceDepth: t,
                    frontierDepth: e,
                    parent: n,
                    inject: o,
                    wrap: i
                }) {
                    for (; this.depth > e;) this.closeFrontierNode();
                    if (i)
                        for (let r = 0; r < i.length; r++) this.openFrontierNode(i[r]);
                    let s = this.unplaced,
                        a = n ? n.content : s.content,
                        u = s.openStart - t,
                        l = 0,
                        c = [],
                        {
                            match: p,
                            type: d
                        } = this.frontier[e];
                    if (o) {
                        for (let t = 0; t < o.childCount; t++) c.push(o.child(t));
                        p = p.matchFragment(o)
                    }
                    let f = a.size + t - (s.content.size - s.openEnd);
                    for (; l < a.childCount;) {
                        let t = a.child(l),
                            e = p.matchType(t.type);
                        if (!e) break;
                        l++, (l > 1 || 0 == u || t.content.size) && (p = e, c.push(R(t.mark(d.allowedMarks(t.marks)), 1 == l ? u : 0, l == a.childCount ? f : -1)))
                    }
                    let h = l == a.childCount;
                    h || (f = -1), this.placed = j(this.placed, e, r.HY.from(c)), this.frontier[e].match = p, h && f < 0 && n && n.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
                    for (let r = 0, m = a; r < f; r++) {
                        let t = m.lastChild;
                        this.frontier.push({
                            type: t.type,
                            match: t.contentMatchAt(t.childCount)
                        }), m = t.content
                    }
                    this.unplaced = h ? 0 == t ? r.p2.empty : new r.p2(B(s.content, t - 1, 1), t - 1, f < 0 ? s.openEnd : t - 1) : new r.p2(B(s.content, t, l), s.openStart, s.openEnd)
                }
                mustMoveInline() {
                    if (!this.$to.parent.isTextblock) return -1;
                    let t, e = this.frontier[this.depth];
                    if (!e.type.isTextblock || !P(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth) return -1;
                    let {
                        depth: n
                    } = this.$to, r = this.$to.after(n);
                    for (; n > 1 && r == this.$to.end(--n);) ++r;
                    return r
                }
                findCloseLevel(t) {
                    t: for (let e = Math.min(this.depth, t.depth); e >= 0; e--) {
                        let {
                            match: n,
                            type: r
                        } = this.frontier[e], o = e < t.depth && t.end(e + 1) == t.pos + (t.depth - (e + 1)), i = P(t, e, r, n, o);
                        if (i) {
                            for (let n = e - 1; n >= 0; n--) {
                                let {
                                    match: e,
                                    type: r
                                } = this.frontier[n], o = P(t, n, r, e, !0);
                                if (!o || o.childCount) continue t
                            }
                            return {
                                depth: e,
                                fit: i,
                                move: o ? t.doc.resolve(t.after(e + 1)) : t
                            }
                        }
                    }
                }
                close(t) {
                    let e = this.findCloseLevel(t);
                    if (!e) return null;
                    for (; this.depth > e.depth;) this.closeFrontierNode();
                    e.fit.childCount && (this.placed = j(this.placed, e.depth, e.fit)), t = e.move;
                    for (let n = e.depth + 1; n <= t.depth; n++) {
                        let e = t.node(n),
                            r = e.type.contentMatch.fillBefore(e.content, !0, t.index(n));
                        this.openFrontierNode(e.type, e.attrs, r)
                    }
                    return t
                }
                openFrontierNode(t, e = null, n) {
                    let o = this.frontier[this.depth];
                    o.match = o.match.matchType(t), this.placed = j(this.placed, this.depth, r.HY.from(t.create(e, n))), this.frontier.push({
                        type: t,
                        match: t.contentMatch
                    })
                }
                closeFrontierNode() {
                    let t = this.frontier.pop().match.fillBefore(r.HY.empty, !0);
                    t.childCount && (this.placed = j(this.placed, this.frontier.length, t))
                }
            }

            function B(t, e, n) {
                return 0 == e ? t.cutByIndex(n, t.childCount) : t.replaceChild(0, t.firstChild.copy(B(t.firstChild.content, e - 1, n)))
            }

            function j(t, e, n) {
                return 0 == e ? t.append(n) : t.replaceChild(t.childCount - 1, t.lastChild.copy(j(t.lastChild.content, e - 1, n)))
            }

            function N(t, e) {
                for (let n = 0; n < e; n++) t = t.firstChild.content;
                return t
            }

            function R(t, e, n) {
                if (e <= 0) return t;
                let o = t.content;
                return e > 1 && (o = o.replaceChild(0, R(o.firstChild, e - 1, 1 == o.childCount ? n - 1 : 0))), e > 0 && (o = t.type.contentMatch.fillBefore(o).append(o), n <= 0 && (o = o.append(t.type.contentMatch.matchFragment(o).fillBefore(r.HY.empty, !0)))), t.copy(o)
            }

            function P(t, e, n, r, o) {
                let i = t.node(e),
                    s = o ? t.indexAfter(e) : t.index(e);
                if (s == i.childCount && !n.compatibleContent(i.type)) return null;
                let a = r.fillBefore(i.content, !0, s);
                return a && ! function(t, e, n) {
                    for (let r = n; r < e.childCount; r++)
                        if (!t.allowsMarks(e.child(r).marks)) return !0;
                    return !1
                }(n, i.content, s) ? a : null
            }

            function z(t) {
                return t.spec.defining || t.spec.definingForContent
            }

            function I(t, e, n, o, i) {
                if (e < n) {
                    let r = t.firstChild;
                    t = t.replaceChild(0, r.copy(I(r.content, e + 1, n, o, r)))
                }
                if (e > o) {
                    let e = i.contentMatchAt(0),
                        n = e.fillBefore(t).append(t);
                    t = n.append(e.matchFragment(n).fillBefore(r.HY.empty, !0))
                }
                return t
            }

            function $(t, e) {
                let n = [];
                for (let r = Math.min(t.depth, e.depth); r >= 0; r--) {
                    let o = t.start(r);
                    if (o < t.pos - (t.depth - r) || e.end(r) > e.pos + (e.depth - r) || t.node(r).type.spec.isolating || e.node(r).type.spec.isolating) break;
                    (o == e.start(r) || r == t.depth && r == e.depth && t.parent.inlineContent && e.parent.inlineContent && r && e.start(r - 1) == o - 1) && n.push(r)
                }
                return n
            }
            class L extends c {
                constructor(t, e, n) {
                    super(), this.pos = t, this.attr = e, this.value = n
                }
                apply(t) {
                    let e = t.nodeAt(this.pos);
                    if (!e) return p.fail("No node at attribute step's position");
                    let n = Object.create(null);
                    for (let r in e.attrs) n[r] = e.attrs[r];
                    n[this.attr] = this.value;
                    let o = e.type.create(n, null, e.marks);
                    return p.fromReplace(t, this.pos, this.pos + 1, new r.p2(r.HY.from(o), 0, e.isLeaf ? 0 : 1))
                }
                getMap() {
                    return a.empty
                }
                invert(t) {
                    return new L(this.pos, this.attr, t.nodeAt(this.pos).attrs[this.attr])
                }
                map(t) {
                    let e = t.mapResult(this.pos, 1);
                    return e.deletedAfter ? null : new L(e.pos, this.attr, this.value)
                }
                toJSON() {
                    return {
                        stepType: "attr",
                        pos: this.pos,
                        attr: this.attr,
                        value: this.value
                    }
                }
                static fromJSON(t, e) {
                    if ("number" != typeof e.pos || "string" != typeof e.attr) throw new RangeError("Invalid input for AttrStep.fromJSON");
                    return new L(e.pos, e.attr, e.value)
                }
            }
            c.jsonID("attr", L);
            let H = class extends Error {};
            H = function t(e) {
                let n = Error.call(this, e);
                return n.__proto__ = t.prototype, n
            }, (H.prototype = Object.create(Error.prototype)).constructor = H, H.prototype.name = "TransformError";
            class W {
                constructor(t) {
                    this.doc = t, this.steps = [], this.docs = [], this.mapping = new u
                }
                get before() {
                    return this.docs.length ? this.docs[0] : this.doc
                }
                step(t) {
                    let e = this.maybeStep(t);
                    if (e.failed) throw new H(e.failed);
                    return this
                }
                maybeStep(t) {
                    let e = t.apply(this.doc);
                    return e.failed || this.addStep(t, e.doc), e
                }
                get docChanged() {
                    return this.steps.length > 0
                }
                addStep(t, e) {
                    this.docs.push(this.doc), this.steps.push(t), this.mapping.appendMap(t.getMap()), this.doc = e
                }
                replace(t, e = t, n = r.p2.empty) {
                    let o = M(this.doc, t, e, n);
                    return o && this.step(o), this
                }
                replaceWith(t, e, n) {
                    return this.replace(t, e, new r.p2(r.HY.from(n), 0, 0))
                }
                delete(t, e) {
                    return this.replace(t, e, r.p2.empty)
                }
                insert(t, e) {
                    return this.replaceWith(t, t, e)
                }
                replaceRange(t, e, n) {
                    return function(t, e, n, o) {
                        if (!o.size) return t.deleteRange(e, n);
                        let i = t.doc.resolve(e),
                            s = t.doc.resolve(n);
                        if (F(i, s, o)) return t.step(new y(e, n, o));
                        let a = $(i, t.doc.resolve(n));
                        0 == a[a.length - 1] && a.pop();
                        let u = -(i.depth + 1);
                        a.unshift(u);
                        for (let r = i.depth, f = i.pos - 1; r > 0; r--, f--) {
                            let t = i.node(r).type.spec;
                            if (t.defining || t.definingAsContext || t.isolating) break;
                            a.indexOf(r) > -1 ? u = r : i.before(r) == f && a.splice(1, 0, -r)
                        }
                        let l = a.indexOf(u),
                            c = [],
                            p = o.openStart;
                        for (let r = o.content, f = 0;; f++) {
                            let t = r.firstChild;
                            if (c.push(t), f == o.openStart) break;
                            r = t.content
                        }
                        for (let r = p - 1; r >= 0; r--) {
                            let t = c[r].type,
                                e = z(t);
                            if (e && i.node(l).type != t) p = r;
                            else if (e || !t.isTextblock) break
                        }
                        for (let f = o.openStart; f >= 0; f--) {
                            let e = (f + p + 1) % (o.openStart + 1),
                                u = c[e];
                            if (u)
                                for (let c = 0; c < a.length; c++) {
                                    let p = a[(c + l) % a.length],
                                        d = !0;
                                    p < 0 && (d = !1, p = -p);
                                    let f = i.node(p - 1),
                                        h = i.index(p - 1);
                                    if (f.canReplaceWith(h, h, u.type, u.marks)) return t.replace(i.before(p), d ? s.after(p) : n, new r.p2(I(o.content, 0, o.openStart, e), e, o.openEnd))
                                }
                        }
                        let d = t.steps.length;
                        for (let r = a.length - 1; r >= 0 && (t.replace(e, n, o), !(t.steps.length > d)); r--) {
                            let t = a[r];
                            t < 0 || (e = i.before(t), n = s.after(t))
                        }
                    }(this, t, e, n), this
                }
                replaceRangeWith(t, e, n) {
                    return function(t, e, n, o) {
                        if (!o.isInline && e == n && t.doc.resolve(e).parent.content.size) {
                            let r = function(t, e, n) {
                                let r = t.resolve(e);
                                if (r.parent.canReplaceWith(r.index(), r.index(), n)) return e;
                                if (0 == r.parentOffset)
                                    for (let o = r.depth - 1; o >= 0; o--) {
                                        let t = r.index(o);
                                        if (r.node(o).canReplaceWith(t, t, n)) return r.before(o + 1);
                                        if (t > 0) return null
                                    }
                                if (r.parentOffset == r.parent.content.size)
                                    for (let o = r.depth - 1; o >= 0; o--) {
                                        let t = r.indexAfter(o);
                                        if (r.node(o).canReplaceWith(t, t, n)) return r.after(o + 1);
                                        if (t < r.node(o).childCount) return null
                                    }
                                return null
                            }(t.doc, e, o.type);
                            null != r && (e = n = r)
                        }
                        t.replaceRange(e, n, new r.p2(r.HY.from(o), 0, 0))
                    }(this, t, e, n), this
                }
                deleteRange(t, e) {
                    return function(t, e, n) {
                        let r = t.doc.resolve(e),
                            o = t.doc.resolve(n),
                            i = $(r, o);
                        for (let s = 0; s < i.length; s++) {
                            let e = i[s],
                                n = s == i.length - 1;
                            if (n && 0 == e || r.node(e).type.contentMatch.validEnd) return t.delete(r.start(e), o.end(e));
                            if (e > 0 && (n || r.node(e - 1).canReplace(r.index(e - 1), o.indexAfter(e - 1)))) return t.delete(r.before(e), o.after(e))
                        }
                        for (let s = 1; s <= r.depth && s <= o.depth; s++)
                            if (e - r.start(s) == r.depth - s && n > r.end(s) && o.end(s) - n != o.depth - s) return t.delete(r.before(s), n);
                        t.delete(e, n)
                    }(this, t, e), this
                }
                lift(t, e) {
                    return function(t, e, n) {
                        let {
                            $from: o,
                            $to: i,
                            depth: s
                        } = e, a = o.before(s + 1), u = i.after(s + 1), l = a, c = u, p = r.HY.empty, d = 0;
                        for (let m = s, g = !1; m > n; m--) g || o.index(m) > 0 ? (g = !0, p = r.HY.from(o.node(m).copy(p)), d++) : l--;
                        let f = r.HY.empty,
                            h = 0;
                        for (let m = s, g = !1; m > n; m--) g || i.after(m + 1) < i.end(m) ? (g = !0, f = r.HY.from(i.node(m).copy(f)), h++) : c++;
                        t.step(new v(l, c, a, u, new r.p2(p.append(f), d, h), p.size - d, !0))
                    }(this, t, e), this
                }
                join(t, e = 1) {
                    return function(t, e, n) {
                        let o = new y(e - n, e + n, r.p2.empty, !0);
                        t.step(o)
                    }(this, t, e), this
                }
                wrap(t, e) {
                    return function(t, e, n) {
                        let o = r.HY.empty;
                        for (let a = n.length - 1; a >= 0; a--) {
                            if (o.size) {
                                let t = n[a].type.contentMatch.matchFragment(o);
                                if (!t || !t.validEnd) throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper")
                            }
                            o = r.HY.from(n[a].type.create(n[a].attrs, o))
                        }
                        let i = e.start,
                            s = e.end;
                        t.step(new v(i, s, i, s, new r.p2(o, 0, 0), n.length, !0))
                    }(this, t, e), this
                }
                setBlockType(t, e = t, n, o = null) {
                    return function(t, e, n, o, i) {
                        if (!o.isTextblock) throw new RangeError("Type given to setBlockType should be a textblock");
                        let s = t.steps.length;
                        t.doc.nodesBetween(e, n, ((e, n) => {
                            if (e.isTextblock && !e.hasMarkup(o, i) && function(t, e, n) {
                                    let r = t.resolve(e),
                                        o = r.index();
                                    return r.parent.canReplaceWith(o, o + 1, n)
                                }(t.doc, t.mapping.slice(s).map(n), o)) {
                                t.clearIncompatible(t.mapping.slice(s).map(n, 1), o);
                                let a = t.mapping.slice(s),
                                    u = a.map(n, 1),
                                    l = a.map(n + e.nodeSize, 1);
                                return t.step(new v(u, l, u + 1, l - 1, new r.p2(r.HY.from(o.create(i, null, e.marks)), 0, 0), 1, !0)), !1
                            }
                        }))
                    }(this, t, e, n, o), this
                }
                setNodeMarkup(t, e, n = null, o) {
                    return function(t, e, n, o, i) {
                        let s = t.doc.nodeAt(e);
                        if (!s) throw new RangeError("No node at given position");
                        n || (n = s.type);
                        let a = n.create(o, null, i || s.marks);
                        if (s.isLeaf) return t.replaceWith(e, e + s.nodeSize, a);
                        if (!n.validContent(s.content)) throw new RangeError("Invalid content for node type " + n.name);
                        t.step(new v(e, e + s.nodeSize, e + 1, e + s.nodeSize - 1, new r.p2(r.HY.from(a), 0, 0), 1, !0))
                    }(this, t, e, n, o), this
                }
                setNodeAttribute(t, e, n) {
                    return this.step(new L(t, e, n)), this
                }
                addNodeMark(t, e) {
                    return this.step(new m(t, e)), this
                }
                removeNodeMark(t, e) {
                    if (!(e instanceof r.vc)) {
                        let n = this.doc.nodeAt(t);
                        if (!n) throw new RangeError("No node at position " + t);
                        if (!(e = e.isInSet(n.marks))) return this
                    }
                    return this.step(new g(t, e)), this
                }
                split(t, e = 1, n) {
                    return function(t, e, n = 1, o) {
                        let i = t.doc.resolve(e),
                            s = r.HY.empty,
                            a = r.HY.empty;
                        for (let u = i.depth, l = i.depth - n, c = n - 1; u > l; u--, c--) {
                            s = r.HY.from(i.node(u).copy(s));
                            let t = o && o[c];
                            a = r.HY.from(t ? t.type.create(t.attrs, a) : i.node(u).copy(a))
                        }
                        t.step(new y(e, e, new r.p2(s.append(a), n, n), !0))
                    }(this, t, e, n), this
                }
                addMark(t, e, n) {
                    return function(t, e, n, r) {
                        let o, i, s = [],
                            a = [];
                        t.doc.nodesBetween(e, n, ((t, u, l) => {
                            if (!t.isInline) return;
                            let c = t.marks;
                            if (!r.isInSet(c) && l.type.allowsMarkType(r.type)) {
                                let l = Math.max(u, e),
                                    p = Math.min(u + t.nodeSize, n),
                                    d = r.addToSet(c);
                                for (let t = 0; t < c.length; t++) c[t].isInSet(d) || (o && o.to == l && o.mark.eq(c[t]) ? o.to = p : s.push(o = new h(l, p, c[t])));
                                i && i.to == l ? i.to = p : a.push(i = new f(l, p, r))
                            }
                        })), s.forEach((e => t.step(e))), a.forEach((e => t.step(e)))
                    }(this, t, e, n), this
                }
                removeMark(t, e, n) {
                    return function(t, e, n, o) {
                        let i = [],
                            s = 0;
                        t.doc.nodesBetween(e, n, ((t, a) => {
                            if (!t.isInline) return;
                            s++;
                            let u = null;
                            if (o instanceof r.ZU) {
                                let e, n = t.marks;
                                for (; e = o.isInSet(n);)(u || (u = [])).push(e), n = e.removeFromSet(n)
                            } else o ? o.isInSet(t.marks) && (u = [o]) : u = t.marks;
                            if (u && u.length) {
                                let r = Math.min(a + t.nodeSize, n);
                                for (let t = 0; t < u.length; t++) {
                                    let n, o = u[t];
                                    for (let t = 0; t < i.length; t++) {
                                        let e = i[t];
                                        e.step == s - 1 && o.eq(i[t].style) && (n = e)
                                    }
                                    n ? (n.to = r, n.step = s) : i.push({
                                        style: o,
                                        from: Math.max(a, e),
                                        to: r,
                                        step: s
                                    })
                                }
                            }
                        })), i.forEach((e => t.step(new h(e.from, e.to, e.style))))
                    }(this, t, e, n), this
                }
                clearIncompatible(t, e, n) {
                    return function(t, e, n, o = n.contentMatch) {
                        let i = t.doc.nodeAt(e),
                            s = [],
                            a = e + 1;
                        for (let u = 0; u < i.childCount; u++) {
                            let e = i.child(u),
                                l = a + e.nodeSize,
                                c = o.matchType(e.type);
                            if (c) {
                                o = c;
                                for (let r = 0; r < e.marks.length; r++) n.allowsMarkType(e.marks[r].type) || t.step(new h(a, l, e.marks[r]))
                            } else s.push(new y(a, l, r.p2.empty));
                            a = l
                        }
                        if (!o.validEnd) {
                            let e = o.fillBefore(r.HY.empty, !0);
                            t.replace(a, a, new r.p2(e, 0, 0))
                        }
                        for (let r = s.length - 1; r >= 0; r--) t.step(s[r])
                    }(this, t, e, n), this
                }
            }
        },
        21865: function(t, e, n) {
            "use strict";
            n.d(e, {
                YG: function() {
                    return l
                },
                ue: function() {
                    return r
                }
            });
            for (var r = {
                    8: "Backspace",
                    9: "Tab",
                    10: "Enter",
                    12: "NumLock",
                    13: "Enter",
                    16: "Shift",
                    17: "Control",
                    18: "Alt",
                    20: "CapsLock",
                    27: "Escape",
                    32: " ",
                    33: "PageUp",
                    34: "PageDown",
                    35: "End",
                    36: "Home",
                    37: "ArrowLeft",
                    38: "ArrowUp",
                    39: "ArrowRight",
                    40: "ArrowDown",
                    44: "PrintScreen",
                    45: "Insert",
                    46: "Delete",
                    59: ";",
                    61: "=",
                    91: "Meta",
                    92: "Meta",
                    106: "*",
                    107: "+",
                    108: ",",
                    109: "-",
                    110: ".",
                    111: "/",
                    144: "NumLock",
                    145: "ScrollLock",
                    160: "Shift",
                    161: "Shift",
                    162: "Control",
                    163: "Control",
                    164: "Alt",
                    165: "Alt",
                    173: "-",
                    186: ";",
                    187: "=",
                    188: ",",
                    189: "-",
                    190: ".",
                    191: "/",
                    192: "`",
                    219: "[",
                    220: "\\",
                    221: "]",
                    222: "'"
                }, o = {
                    48: ")",
                    49: "!",
                    50: "@",
                    51: "#",
                    52: "$",
                    53: "%",
                    54: "^",
                    55: "&",
                    56: "*",
                    57: "(",
                    59: ":",
                    61: "+",
                    173: "_",
                    186: ":",
                    187: "+",
                    188: "<",
                    189: "_",
                    190: ">",
                    191: "?",
                    192: "~",
                    219: "{",
                    220: "|",
                    221: "}",
                    222: '"'
                }, i = "undefined" != typeof navigator && /Mac/.test(navigator.platform), s = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), a = 0; a < 10; a++) r[48 + a] = r[96 + a] = String(a);
            for (a = 1; a <= 24; a++) r[a + 111] = "F" + a;
            for (a = 65; a <= 90; a++) r[a] = String.fromCharCode(a + 32), o[a] = String.fromCharCode(a);
            for (var u in r) o.hasOwnProperty(u) || (o[u] = r[u]);

            function l(t) {
                var e = !(i && t.metaKey && t.shiftKey && !t.ctrlKey && !t.altKey || s && t.shiftKey && t.key && 1 == t.key.length || "Unidentified" == t.key) && t.key || (t.shiftKey ? o : r)[t.keyCode] || t.key || "Unidentified";
                return "Esc" == e && (e = "Escape"), "Del" == e && (e = "Delete"), "Left" == e && (e = "ArrowLeft"), "Up" == e && (e = "ArrowUp"), "Right" == e && (e = "ArrowRight"), "Down" == e && (e = "ArrowDown"), e
            }
        }
    }
]);