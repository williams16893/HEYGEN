"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6200], {
        56200: function(t, e, n) {
            n.d(e, {
                tv: function() {
                    return A
                }
            });
            var r, o = n(70079),
                s = Object.defineProperty,
                i = Object.getOwnPropertySymbols,
                a = Object.prototype.hasOwnProperty,
                l = Object.prototype.propertyIsEnumerable,
                h = (t, e, n) => e in t ? s(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : t[e] = n,
                u = (t, e) => {
                    for (var n in e || (e = {})) a.call(e, n) && h(t, n, e[n]);
                    if (i)
                        for (var n of i(e)) l.call(e, n) && h(t, n, e[n]);
                    return t
                },
                c = (t, e) => {
                    var n = {};
                    for (var r in t) a.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                    if (null != t && i)
                        for (var r of i(t)) e.indexOf(r) < 0 && l.call(t, r) && (n[r] = t[r]);
                    return n
                };
            (t => {
                const e = class {
                    constructor(t, n, r, o) {
                        if (this.version = t, this.errorCorrectionLevel = n, this.modules = [], this.isFunction = [], t < e.MIN_VERSION || t > e.MAX_VERSION) throw new RangeError("Version value out of range");
                        if (o < -1 || o > 7) throw new RangeError("Mask value out of range");
                        this.size = 4 * t + 17;
                        let i = [];
                        for (let e = 0; e < this.size; e++) i.push(!1);
                        for (let e = 0; e < this.size; e++) this.modules.push(i.slice()), this.isFunction.push(i.slice());
                        this.drawFunctionPatterns();
                        const a = this.addEccAndInterleave(r);
                        if (this.drawCodewords(a), -1 == o) {
                            let t = 1e9;
                            for (let e = 0; e < 8; e++) {
                                this.applyMask(e), this.drawFormatBits(e);
                                const n = this.getPenaltyScore();
                                n < t && (o = e, t = n), this.applyMask(e)
                            }
                        }
                        s(0 <= o && o <= 7), this.mask = o, this.applyMask(o), this.drawFormatBits(o), this.isFunction = []
                    }
                    static encodeText(n, r) {
                        const o = t.QrSegment.makeSegments(n);
                        return e.encodeSegments(o, r)
                    }
                    static encodeBinary(n, r) {
                        const o = t.QrSegment.makeBytes(n);
                        return e.encodeSegments([o], r)
                    }
                    static encodeSegments(t, n, o = 1, i = 40, l = -1, h = !0) {
                        if (!(e.MIN_VERSION <= o && o <= i && i <= e.MAX_VERSION) || l < -1 || l > 7) throw new RangeError("Invalid value");
                        let u, c;
                        for (u = o;; u++) {
                            const r = 8 * e.getNumDataCodewords(u, n),
                                o = a.getTotalBits(t, u);
                            if (o <= r) {
                                c = o;
                                break
                            }
                            if (u >= i) throw new RangeError("Data too long")
                        }
                        for (const r of [e.Ecc.MEDIUM, e.Ecc.QUARTILE, e.Ecc.HIGH]) h && c <= 8 * e.getNumDataCodewords(u, r) && (n = r);
                        let d = [];
                        for (const e of t) {
                            r(e.mode.modeBits, 4, d), r(e.numChars, e.mode.numCharCountBits(u), d);
                            for (const t of e.getData()) d.push(t)
                        }
                        s(d.length == c);
                        const f = 8 * e.getNumDataCodewords(u, n);
                        s(d.length <= f), r(0, Math.min(4, f - d.length), d), r(0, (8 - d.length % 8) % 8, d), s(d.length % 8 == 0);
                        for (let e = 236; d.length < f; e ^= 253) r(e, 8, d);
                        let m = [];
                        for (; 8 * m.length < d.length;) m.push(0);
                        return d.forEach(((t, e) => m[e >>> 3] |= t << 7 - (7 & e))), new e(u, n, m, l)
                    }
                    getModule(t, e) {
                        return 0 <= t && t < this.size && 0 <= e && e < this.size && this.modules[e][t]
                    }
                    getModules() {
                        return this.modules
                    }
                    drawFunctionPatterns() {
                        for (let n = 0; n < this.size; n++) this.setFunctionModule(6, n, n % 2 == 0), this.setFunctionModule(n, 6, n % 2 == 0);
                        this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
                        const t = this.getAlignmentPatternPositions(),
                            e = t.length;
                        for (let n = 0; n < e; n++)
                            for (let r = 0; r < e; r++) 0 == n && 0 == r || 0 == n && r == e - 1 || n == e - 1 && 0 == r || this.drawAlignmentPattern(t[n], t[r]);
                        this.drawFormatBits(0), this.drawVersion()
                    }
                    drawFormatBits(t) {
                        const e = this.errorCorrectionLevel.formatBits << 3 | t;
                        let n = e;
                        for (let o = 0; o < 10; o++) n = n << 1 ^ 1335 * (n >>> 9);
                        const r = 21522 ^ (e << 10 | n);
                        s(r >>> 15 == 0);
                        for (let s = 0; s <= 5; s++) this.setFunctionModule(8, s, o(r, s));
                        this.setFunctionModule(8, 7, o(r, 6)), this.setFunctionModule(8, 8, o(r, 7)), this.setFunctionModule(7, 8, o(r, 8));
                        for (let s = 9; s < 15; s++) this.setFunctionModule(14 - s, 8, o(r, s));
                        for (let s = 0; s < 8; s++) this.setFunctionModule(this.size - 1 - s, 8, o(r, s));
                        for (let s = 8; s < 15; s++) this.setFunctionModule(8, this.size - 15 + s, o(r, s));
                        this.setFunctionModule(8, this.size - 8, !0)
                    }
                    drawVersion() {
                        if (this.version < 7) return;
                        let t = this.version;
                        for (let n = 0; n < 12; n++) t = t << 1 ^ 7973 * (t >>> 11);
                        const e = this.version << 12 | t;
                        s(e >>> 18 == 0);
                        for (let n = 0; n < 18; n++) {
                            const t = o(e, n),
                                r = this.size - 11 + n % 3,
                                s = Math.floor(n / 3);
                            this.setFunctionModule(r, s, t), this.setFunctionModule(s, r, t)
                        }
                    }
                    drawFinderPattern(t, e) {
                        for (let n = -4; n <= 4; n++)
                            for (let r = -4; r <= 4; r++) {
                                const o = Math.max(Math.abs(r), Math.abs(n)),
                                    s = t + r,
                                    i = e + n;
                                0 <= s && s < this.size && 0 <= i && i < this.size && this.setFunctionModule(s, i, 2 != o && 4 != o)
                            }
                    }
                    drawAlignmentPattern(t, e) {
                        for (let n = -2; n <= 2; n++)
                            for (let r = -2; r <= 2; r++) this.setFunctionModule(t + r, e + n, 1 != Math.max(Math.abs(r), Math.abs(n)))
                    }
                    setFunctionModule(t, e, n) {
                        this.modules[e][t] = n, this.isFunction[e][t] = !0
                    }
                    addEccAndInterleave(t) {
                        const n = this.version,
                            r = this.errorCorrectionLevel;
                        if (t.length != e.getNumDataCodewords(n, r)) throw new RangeError("Invalid argument");
                        const o = e.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][n],
                            i = e.ECC_CODEWORDS_PER_BLOCK[r.ordinal][n],
                            a = Math.floor(e.getNumRawDataModules(n) / 8),
                            l = o - a % o,
                            h = Math.floor(a / o);
                        let u = [];
                        const c = e.reedSolomonComputeDivisor(i);
                        for (let s = 0, f = 0; s < o; s++) {
                            let n = t.slice(f, f + h - i + (s < l ? 0 : 1));
                            f += n.length;
                            const r = e.reedSolomonComputeRemainder(n, c);
                            s < l && n.push(0), u.push(n.concat(r))
                        }
                        let d = [];
                        for (let e = 0; e < u[0].length; e++) u.forEach(((t, n) => {
                            (e != h - i || n >= l) && d.push(t[e])
                        }));
                        return s(d.length == a), d
                    }
                    drawCodewords(t) {
                        if (t.length != Math.floor(e.getNumRawDataModules(this.version) / 8)) throw new RangeError("Invalid argument");
                        let n = 0;
                        for (let e = this.size - 1; e >= 1; e -= 2) {
                            6 == e && (e = 5);
                            for (let r = 0; r < this.size; r++)
                                for (let s = 0; s < 2; s++) {
                                    const i = e - s,
                                        a = 0 == (e + 1 & 2) ? this.size - 1 - r : r;
                                    !this.isFunction[a][i] && n < 8 * t.length && (this.modules[a][i] = o(t[n >>> 3], 7 - (7 & n)), n++)
                                }
                        }
                        s(n == 8 * t.length)
                    }
                    applyMask(t) {
                        if (t < 0 || t > 7) throw new RangeError("Mask value out of range");
                        for (let e = 0; e < this.size; e++)
                            for (let n = 0; n < this.size; n++) {
                                let r;
                                switch (t) {
                                    case 0:
                                        r = (n + e) % 2 == 0;
                                        break;
                                    case 1:
                                        r = e % 2 == 0;
                                        break;
                                    case 2:
                                        r = n % 3 == 0;
                                        break;
                                    case 3:
                                        r = (n + e) % 3 == 0;
                                        break;
                                    case 4:
                                        r = (Math.floor(n / 3) + Math.floor(e / 2)) % 2 == 0;
                                        break;
                                    case 5:
                                        r = n * e % 2 + n * e % 3 == 0;
                                        break;
                                    case 6:
                                        r = (n * e % 2 + n * e % 3) % 2 == 0;
                                        break;
                                    case 7:
                                        r = ((n + e) % 2 + n * e % 3) % 2 == 0;
                                        break;
                                    default:
                                        throw new Error("Unreachable")
                                }!this.isFunction[e][n] && r && (this.modules[e][n] = !this.modules[e][n])
                            }
                    }
                    getPenaltyScore() {
                        let t = 0;
                        for (let s = 0; s < this.size; s++) {
                            let n = !1,
                                r = 0,
                                o = [0, 0, 0, 0, 0, 0, 0];
                            for (let i = 0; i < this.size; i++) this.modules[s][i] == n ? (r++, 5 == r ? t += e.PENALTY_N1 : r > 5 && t++) : (this.finderPenaltyAddHistory(r, o), n || (t += this.finderPenaltyCountPatterns(o) * e.PENALTY_N3), n = this.modules[s][i], r = 1);
                            t += this.finderPenaltyTerminateAndCount(n, r, o) * e.PENALTY_N3
                        }
                        for (let s = 0; s < this.size; s++) {
                            let n = !1,
                                r = 0,
                                o = [0, 0, 0, 0, 0, 0, 0];
                            for (let i = 0; i < this.size; i++) this.modules[i][s] == n ? (r++, 5 == r ? t += e.PENALTY_N1 : r > 5 && t++) : (this.finderPenaltyAddHistory(r, o), n || (t += this.finderPenaltyCountPatterns(o) * e.PENALTY_N3), n = this.modules[i][s], r = 1);
                            t += this.finderPenaltyTerminateAndCount(n, r, o) * e.PENALTY_N3
                        }
                        for (let s = 0; s < this.size - 1; s++)
                            for (let n = 0; n < this.size - 1; n++) {
                                const r = this.modules[s][n];
                                r == this.modules[s][n + 1] && r == this.modules[s + 1][n] && r == this.modules[s + 1][n + 1] && (t += e.PENALTY_N2)
                            }
                        let n = 0;
                        for (const e of this.modules) n = e.reduce(((t, e) => t + (e ? 1 : 0)), n);
                        const r = this.size * this.size,
                            o = Math.ceil(Math.abs(20 * n - 10 * r) / r) - 1;
                        return s(0 <= o && o <= 9), t += o * e.PENALTY_N4, s(0 <= t && t <= 2568888), t
                    }
                    getAlignmentPatternPositions() {
                        if (1 == this.version) return []; {
                            const t = Math.floor(this.version / 7) + 2,
                                e = 32 == this.version ? 26 : 2 * Math.ceil((4 * this.version + 4) / (2 * t - 2));
                            let n = [6];
                            for (let r = this.size - 7; n.length < t; r -= e) n.splice(1, 0, r);
                            return n
                        }
                    }
                    static getNumRawDataModules(t) {
                        if (t < e.MIN_VERSION || t > e.MAX_VERSION) throw new RangeError("Version number out of range");
                        let n = (16 * t + 128) * t + 64;
                        if (t >= 2) {
                            const e = Math.floor(t / 7) + 2;
                            n -= (25 * e - 10) * e - 55, t >= 7 && (n -= 36)
                        }
                        return s(208 <= n && n <= 29648), n
                    }
                    static getNumDataCodewords(t, n) {
                        return Math.floor(e.getNumRawDataModules(t) / 8) - e.ECC_CODEWORDS_PER_BLOCK[n.ordinal][t] * e.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][t]
                    }
                    static reedSolomonComputeDivisor(t) {
                        if (t < 1 || t > 255) throw new RangeError("Degree out of range");
                        let n = [];
                        for (let e = 0; e < t - 1; e++) n.push(0);
                        n.push(1);
                        let r = 1;
                        for (let o = 0; o < t; o++) {
                            for (let t = 0; t < n.length; t++) n[t] = e.reedSolomonMultiply(n[t], r), t + 1 < n.length && (n[t] ^= n[t + 1]);
                            r = e.reedSolomonMultiply(r, 2)
                        }
                        return n
                    }
                    static reedSolomonComputeRemainder(t, n) {
                        let r = n.map((t => 0));
                        for (const o of t) {
                            const t = o ^ r.shift();
                            r.push(0), n.forEach(((n, o) => r[o] ^= e.reedSolomonMultiply(n, t)))
                        }
                        return r
                    }
                    static reedSolomonMultiply(t, e) {
                        if (t >>> 8 != 0 || e >>> 8 != 0) throw new RangeError("Byte out of range");
                        let n = 0;
                        for (let r = 7; r >= 0; r--) n = n << 1 ^ 285 * (n >>> 7), n ^= (e >>> r & 1) * t;
                        return s(n >>> 8 == 0), n
                    }
                    finderPenaltyCountPatterns(t) {
                        const e = t[1];
                        s(e <= 3 * this.size);
                        const n = e > 0 && t[2] == e && t[3] == 3 * e && t[4] == e && t[5] == e;
                        return (n && t[0] >= 4 * e && t[6] >= e ? 1 : 0) + (n && t[6] >= 4 * e && t[0] >= e ? 1 : 0)
                    }
                    finderPenaltyTerminateAndCount(t, e, n) {
                        return t && (this.finderPenaltyAddHistory(e, n), e = 0), e += this.size, this.finderPenaltyAddHistory(e, n), this.finderPenaltyCountPatterns(n)
                    }
                    finderPenaltyAddHistory(t, e) {
                        0 == e[0] && (t += this.size), e.pop(), e.unshift(t)
                    }
                };
                let n = e;

                function r(t, e, n) {
                    if (e < 0 || e > 31 || t >>> e != 0) throw new RangeError("Value out of range");
                    for (let r = e - 1; r >= 0; r--) n.push(t >>> r & 1)
                }

                function o(t, e) {
                    return 0 != (t >>> e & 1)
                }

                function s(t) {
                    if (!t) throw new Error("Assertion error")
                }
                n.MIN_VERSION = 1, n.MAX_VERSION = 40, n.PENALTY_N1 = 3, n.PENALTY_N2 = 3, n.PENALTY_N3 = 40, n.PENALTY_N4 = 10, n.ECC_CODEWORDS_PER_BLOCK = [
                    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
                    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
                    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
                    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
                ], n.NUM_ERROR_CORRECTION_BLOCKS = [
                    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
                    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
                    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
                    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
                ], t.QrCode = n;
                const i = class {
                    constructor(t, e, n) {
                        if (this.mode = t, this.numChars = e, this.bitData = n, e < 0) throw new RangeError("Invalid argument");
                        this.bitData = n.slice()
                    }
                    static makeBytes(t) {
                        let e = [];
                        for (const n of t) r(n, 8, e);
                        return new i(i.Mode.BYTE, t.length, e)
                    }
                    static makeNumeric(t) {
                        if (!i.isNumeric(t)) throw new RangeError("String contains non-numeric characters");
                        let e = [];
                        for (let n = 0; n < t.length;) {
                            const o = Math.min(t.length - n, 3);
                            r(parseInt(t.substr(n, o), 10), 3 * o + 1, e), n += o
                        }
                        return new i(i.Mode.NUMERIC, t.length, e)
                    }
                    static makeAlphanumeric(t) {
                        if (!i.isAlphanumeric(t)) throw new RangeError("String contains unencodable characters in alphanumeric mode");
                        let e, n = [];
                        for (e = 0; e + 2 <= t.length; e += 2) {
                            let o = 45 * i.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e));
                            o += i.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e + 1)), r(o, 11, n)
                        }
                        return e < t.length && r(i.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e)), 6, n), new i(i.Mode.ALPHANUMERIC, t.length, n)
                    }
                    static makeSegments(t) {
                        return "" == t ? [] : i.isNumeric(t) ? [i.makeNumeric(t)] : i.isAlphanumeric(t) ? [i.makeAlphanumeric(t)] : [i.makeBytes(i.toUtf8ByteArray(t))]
                    }
                    static makeEci(t) {
                        let e = [];
                        if (t < 0) throw new RangeError("ECI assignment value out of range");
                        if (t < 128) r(t, 8, e);
                        else if (t < 16384) r(2, 2, e), r(t, 14, e);
                        else {
                            if (!(t < 1e6)) throw new RangeError("ECI assignment value out of range");
                            r(6, 3, e), r(t, 21, e)
                        }
                        return new i(i.Mode.ECI, 0, e)
                    }
                    static isNumeric(t) {
                        return i.NUMERIC_REGEX.test(t)
                    }
                    static isAlphanumeric(t) {
                        return i.ALPHANUMERIC_REGEX.test(t)
                    }
                    getData() {
                        return this.bitData.slice()
                    }
                    static getTotalBits(t, e) {
                        let n = 0;
                        for (const r of t) {
                            const t = r.mode.numCharCountBits(e);
                            if (r.numChars >= 1 << t) return 1 / 0;
                            n += 4 + t + r.bitData.length
                        }
                        return n
                    }
                    static toUtf8ByteArray(t) {
                        t = encodeURI(t);
                        let e = [];
                        for (let n = 0; n < t.length; n++) "%" != t.charAt(n) ? e.push(t.charCodeAt(n)) : (e.push(parseInt(t.substr(n + 1, 2), 16)), n += 2);
                        return e
                    }
                };
                let a = i;
                a.NUMERIC_REGEX = /^[0-9]*$/, a.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, a.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", t.QrSegment = a
            })(r || (r = {})), (t => {
                let e;
                (t => {
                    const e = class {
                        constructor(t, e) {
                            this.ordinal = t, this.formatBits = e
                        }
                    };
                    let n = e;
                    n.LOW = new e(0, 1), n.MEDIUM = new e(1, 0), n.QUARTILE = new e(2, 3), n.HIGH = new e(3, 2), t.Ecc = n
                })(e = t.QrCode || (t.QrCode = {}))
            })(r || (r = {})), (t => {
                let e;
                (t => {
                    const e = class {
                        constructor(t, e) {
                            this.modeBits = t, this.numBitsCharCount = e
                        }
                        numCharCountBits(t) {
                            return this.numBitsCharCount[Math.floor((t + 7) / 17)]
                        }
                    };
                    let n = e;
                    n.NUMERIC = new e(1, [10, 12, 14]), n.ALPHANUMERIC = new e(2, [9, 11, 13]), n.BYTE = new e(4, [8, 16, 16]), n.KANJI = new e(8, [8, 10, 12]), n.ECI = new e(7, [0, 0, 0]), t.Mode = n
                })(e = t.QrSegment || (t.QrSegment = {}))
            })(r || (r = {}));
            var d = r,
                f = {
                    L: d.QrCode.Ecc.LOW,
                    M: d.QrCode.Ecc.MEDIUM,
                    Q: d.QrCode.Ecc.QUARTILE,
                    H: d.QrCode.Ecc.HIGH
                },
                m = 128,
                g = "L",
                E = "#FFFFFF",
                M = "#000000",
                w = !1;

            function C(t, e = 0) {
                const n = [];
                return t.forEach((function(t, r) {
                    let o = null;
                    t.forEach((function(s, i) {
                        if (!s && null !== o) return n.push(`M${o+e} ${r+e}h${i-o}v1H${o+e}z`), void(o = null);
                        if (i !== t.length - 1) s && null === o && (o = i);
                        else {
                            if (!s) return;
                            null === o ? n.push(`M${i+e},${r+e} h1v1H${i+e}z`) : n.push(`M${o+e},${r+e} h${i+1-o}v1H${o+e}z`)
                        }
                    }))
                })), n.join("")
            }

            function R(t, e) {
                return t.slice().map(((t, n) => n < e.y || n >= e.y + e.h ? t : t.map(((t, n) => (n < e.x || n >= e.x + e.w) && t))))
            }

            function N(t, e, n, r) {
                if (null == r) return null;
                const o = n ? 4 : 0,
                    s = t.length + 2 * o,
                    i = Math.floor(.1 * e),
                    a = s / e,
                    l = (r.width || i) * a,
                    h = (r.height || i) * a,
                    u = null == r.x ? t.length / 2 - l / 2 : r.x * a,
                    c = null == r.y ? t.length / 2 - h / 2 : r.y * a;
                let d = null;
                if (r.excavate) {
                    let t = Math.floor(u),
                        e = Math.floor(c);
                    d = {
                        x: t,
                        y: e,
                        w: Math.ceil(l + u - t),
                        h: Math.ceil(h + c - e)
                    }
                }
                return {
                    x: u,
                    y: c,
                    h: h,
                    w: l,
                    excavation: d
                }
            }! function() {
                try {
                    (new Path2D).addPath(new Path2D)
                } catch (t) {
                    return !1
                }
            }();

            function A(t) {
                const e = t,
                    {
                        value: n,
                        size: r = m,
                        level: s = g,
                        bgColor: i = E,
                        fgColor: a = M,
                        includeMargin: l = w,
                        imageSettings: h
                    } = e,
                    A = c(e, ["value", "size", "level", "bgColor", "fgColor", "includeMargin", "imageSettings"]);
                let p = d.QrCode.encodeText(n, f[s]).getModules();
                const P = l ? 4 : 0,
                    v = p.length + 2 * P,
                    y = N(p, r, l, h);
                let I = null;
                null != h && null != y && (null != y.excavation && (p = R(p, y.excavation)), I = o.createElement("image", {
                    xlinkHref: h.src,
                    height: y.h,
                    width: y.w,
                    x: y.x + P,
                    y: y.y + P,
                    preserveAspectRatio: "none"
                }));
                const _ = C(p, P);
                return o.createElement("svg", u({
                    height: r,
                    width: r,
                    viewBox: `0 0 ${v} ${v}`
                }, A), o.createElement("path", {
                    fill: i,
                    d: `M0,0 h${v}v${v}H0z`,
                    shapeRendering: "crispEdges"
                }), o.createElement("path", {
                    fill: a,
                    d: _,
                    shapeRendering: "crispEdges"
                }), I)
            }
        }
    }
]);