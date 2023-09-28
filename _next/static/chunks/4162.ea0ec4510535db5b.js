"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4162], {
        64162: function(n, e, r) {
            r.r(e), r.d(e, {
                GradientCanvas: function() {
                    return k
                }
            });
            var t = {};
            r.r(t), r.d(t, {
                fragment: function() {
                    return C
                },
                vertex: function() {
                    return w
                }
            });
            var i = {};
            r.r(i), r.d(i, {
                fragment: function() {
                    return N
                },
                vertex: function() {
                    return L
                }
            });
            var o = r(44605),
                a = r.n(o),
                c = r(50357),
                l = r(77759),
                f = r(91050),
                u = r(99309),
                g = r(70079),
                s = r(14017),
                v = r(62458),
                d = r(82680),
                m = r(37257),
                p = r(35888),
                _ = r(29755),
                x = r(83630),
                y = r(1019),
                h = r(51524);

            function z(n, e) {
                var r = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(n);
                    e && (t = t.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.push.apply(r, t)
                }
                return r
            }

            function P(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? z(Object(r), !0).forEach((function(e) {
                        (0, l.Z)(n, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : z(Object(r)).forEach((function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return n
            }

            function b(n) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (n) {
                        return !1
                    }
                }();
                return function() {
                    var r, t = (0, y.Z)(n);
                    if (e) {
                        var i = (0, y.Z)(this).constructor;
                        r = Reflect.construct(t, arguments, i)
                    } else r = t.apply(this, arguments);
                    return (0, x.Z)(this, r)
                }
            }

            function S(n) {
                var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);
                return e ? {
                    r: parseInt(e[1], 16),
                    g: parseInt(e[2], 16),
                    b: parseInt(e[3], 16)
                } : null
            }

            function T() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return n / 255
            }
            var C = "#define GLSLIFY 1\n#define STANDARD\n#ifdef PHYSICAL\n#define REFLECTIVITY\n#define CLEARCOAT\n#define TRANSMISSION\n#endif\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n\n#ifdef TRANSMISSION\nuniform float transmission;\n#endif\n#ifdef REFLECTIVITY\nuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\nuniform float clearcoat;\nuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\nuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n#ifdef USE_TANGENT\nvarying vec3 vTangent;\nvarying vec3 vBitangent;\n#endif\n#endif\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <color_pars_fragment>\n#include <common>\n#include <dithering_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <map_pars_fragment>\n#include <packing>\n#include <uv2_pars_fragment>\n#include <uv_pars_fragment>\n#include <bsdfs>\n#include <bumpmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <clipping_planes_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <shadowmap_pars_fragment>\n\nvarying vec3 vNormal;\nvarying float displacement;\nvarying vec3 vPos;\nvarying float vDistort;\n\nuniform float uC1r;\nuniform float uC1g;\nuniform float uC1b;\nuniform float uC2r;\nuniform float uC2g;\nuniform float uC2b;\nuniform float uC3r;\nuniform float uC3g;\nuniform float uC3b;\n\nvarying vec3 color1;\nvarying vec3 color2;\nvarying vec3 color3;\n\nfloat linearToRelativeLuminance2( const in vec3 color ) {\n    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n    return dot( weights, color.rgb );\n}\n\nvoid main() {\n  //-------- basic gradient ------------\n  vec3 color1 = vec3(uC1r, uC1g, uC1b);\n  vec3 color2 = vec3(uC2r, uC2g, uC2b);\n  vec3 color3 = vec3(uC3r, uC3g, uC3b);\n  float clearcoat = 1.0;\n  float clearcoatRoughness = 0.5;\n\n  #include <clipping_planes_fragment>\n\n  // Base color of the object. This is a mix of the colors based on the\n  // position. smoothstep is color1-color2 range from -3 to 3.\n  vec4 diffuseColor = vec4(\n      mix(mix(color1, color2, smoothstep(-3.0, 3.0, vPos.x)), color3, vPos.z),\n      1);\n\n  //-------- materiality ------------\n  ReflectedLight reflectedLight =\n      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));\n  vec3 totalEmissiveRadiance = emissive;\n\n  #ifdef TRANSMISSION\n    float totalTransmission = transmission;\n  #endif\n  #include <logdepthbuf_fragment>\n  #include <map_fragment>\n  #include <color_fragment>\n  #include <alphamap_fragment>\n  #include <alphatest_fragment>\n  #include <roughnessmap_fragment>\n  #include <metalnessmap_fragment>\n  #include <normal_fragment_begin>\n  #include <normal_fragment_maps>\n  #include <clearcoat_normal_fragment_begin>\n  #include <clearcoat_normal_fragment_maps>\n  #include <emissivemap_fragment>\n  #include <lights_physical_fragment>\n  #include <lights_fragment_begin>\n  #include <lights_fragment_maps>\n  #include <lights_fragment_end>\n  #include <aomap_fragment>\n    vec3 outgoingLight =\n        reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +\n        reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n  #ifdef TRANSMISSION\n    diffuseColor.a *=\n        mix(saturate(1. - totalTransmission +\n                    linearToRelativeLuminance2(reflectedLight.directSpecular +\n                                              reflectedLight.indirectSpecular)),\n            1.0, metalness);\n  #endif\n\n  #include <tonemapping_fragment>\n  #include <encodings_fragment>\n  #include <fog_fragment>\n  #include <premultiplied_alpha_fragment>\n  #include <dithering_fragment>\n\n  // The final color with the light reflected.\n  gl_FragColor = vec4(outgoingLight, diffuseColor.a);\n}\n",
                w = "#define GLSLIFY 1\n// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d)\n\n// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl\n\nvec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\nfloat cnoise(vec3 P)\n{\n  vec3 Pi0 = floor(P); // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\n//-------- start here ------------\n\nmat3 rotation3dY(float angle) {\n  float s = sin(angle);\n  float c = cos(angle);\n\n  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);\n}\n\nvec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }\n\nvarying vec3 vNormal;\nvarying float displacement;\nvarying vec3 vPos;\nvarying float vDistort;\n\nvarying vec2 vUv;\n\nuniform float uTime;\nuniform float uSpeed;\n\nuniform float uLoadingTime;\n\nuniform float uNoiseDensity;\nuniform float uNoiseStrength;\n\n#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n#ifdef USE_TANGENT\nvarying vec3 vTangent;\nvarying vec3 vBitangent;\n#endif\n#endif\n#include <clipping_planes_pars_vertex>\n#include <color_pars_vertex>\n#include <common>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <skinning_pars_vertex>\n#include <uv2_pars_vertex>\n#include <uv_pars_vertex>\n\nvoid main() {\n\n  #include <beginnormal_vertex>\n  #include <color_vertex>\n  #include <defaultnormal_vertex>\n  #include <morphnormal_vertex>\n  #include <skinbase_vertex>\n  #include <skinnormal_vertex>\n  #include <uv2_vertex>\n  #include <uv_vertex>\n  #ifndef FLAT_SHADED\n    vNormal = normalize(transformedNormal);\n  #ifdef USE_TANGENT\n    vTangent = normalize(transformedTangent);\n    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);\n  #endif\n  #endif\n  #include <begin_vertex>\n\n  #include <clipping_planes_vertex>\n  #include <displacementmap_vertex>\n  #include <logdepthbuf_vertex>\n  #include <morphtarget_vertex>\n  #include <project_vertex>\n  #include <skinning_vertex>\n    vViewPosition = -mvPosition.xyz;\n  #include <fog_vertex>\n  #include <shadowmap_vertex>\n  #include <worldpos_vertex>\n\n  //-------- start vertex ------------\n  vUv = uv;\n\n  float t = uTime * uSpeed;\n  // Create a sine wave from top to bottom of the sphere\n  float distortion = 0.75 * cnoise(0.43 * position * uNoiseDensity + t);\n\n  vec3 pos = position + normal * distortion * uNoiseStrength * uLoadingTime;\n  vPos = pos;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);\n}\n",
                N = "#define GLSLIFY 1\n#define STANDARD\n#ifdef PHYSICAL\n#define REFLECTIVITY\n#define CLEARCOAT\n#define TRANSMISSION\n#endif\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n\n#ifdef TRANSMISSION\nuniform float transmission;\n#endif\n#ifdef REFLECTIVITY\nuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\nuniform float clearcoat;\nuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\nuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n#ifdef USE_TANGENT\nvarying vec3 vTangent;\nvarying vec3 vBitangent;\n#endif\n#endif\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <color_pars_fragment>\n#include <common>\n#include <dithering_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <map_pars_fragment>\n#include <packing>\n#include <uv2_pars_fragment>\n#include <uv_pars_fragment>\n// #include <transmissionmap_pars_fragment>\n#include <bsdfs>\n#include <bumpmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <clipping_planes_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <shadowmap_pars_fragment>\n\nvarying vec3 vNormal;\nvarying float displacement;\nvarying vec3 vPos;\nvarying float vDistort;\n\nuniform float uC1r;\nuniform float uC1g;\nuniform float uC1b;\nuniform float uC2r;\nuniform float uC2g;\nuniform float uC2b;\nuniform float uC3r;\nuniform float uC3g;\nuniform float uC3b;\n\nvarying vec3 color1;\nvarying vec3 color2;\nvarying vec3 color3;\n\n// for npm package, need to add this manually\n// 'linearToRelativeLuminance' : function already has a body\nfloat linearToRelativeLuminance2( const in vec3 color ) {\n    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n    return dot( weights, color.rgb );\n}\n\nvoid main() {\n\n  //-------- basic gradient ------------\n  vec3 color1 = vec3(uC1r, uC1g, uC1b);\n  vec3 color2 = vec3(uC2r, uC2g, uC2b);\n  vec3 color3 = vec3(uC3r, uC3g, uC3b);\n  float clearcoat = 1.0;\n  float clearcoatRoughness = 0.5;\n\n  #include <clipping_planes_fragment>\n\n  vec4 diffuseColor = vec4(\n      mix(mix(color1, color2, smoothstep(-3.0, 3.0, vPos.x)), color3, vPos.z),\n      1);\n\n  //-------- materiality ------------\n  ReflectedLight reflectedLight =\n      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));\n  vec3 totalEmissiveRadiance = emissive;\n\n  #ifdef TRANSMISSION\n    float totalTransmission = transmission;\n  #endif\n  #include <logdepthbuf_fragment>\n  #include <map_fragment>\n  #include <color_fragment>\n  #include <alphamap_fragment>\n  #include <alphatest_fragment>\n  #include <roughnessmap_fragment>\n  #include <metalnessmap_fragment>\n  #include <normal_fragment_begin>\n  #include <normal_fragment_maps>\n  #include <clearcoat_normal_fragment_begin>\n  #include <clearcoat_normal_fragment_maps>\n  #include <emissivemap_fragment>\n  #include <lights_physical_fragment>\n  #include <lights_fragment_begin>\n  #include <lights_fragment_maps>\n  #include <lights_fragment_end>\n  #include <aomap_fragment>\n    vec3 outgoingLight =\n        reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +\n        reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\n  #ifdef TRANSMISSION\n    diffuseColor.a *=\n        mix(saturate(1. - totalTransmission +\n                    linearToRelativeLuminance2(reflectedLight.directSpecular +\n                                              reflectedLight.indirectSpecular)),\n            1.0, metalness);\n  #endif\n\n  #include <tonemapping_fragment>\n  #include <encodings_fragment>\n  #include <fog_fragment>\n  #include <premultiplied_alpha_fragment>\n  #include <dithering_fragment>\n\n  gl_FragColor = vec4(outgoingLight, diffuseColor.a);\n}\n",
                L = "#define GLSLIFY 1\n// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) \nvec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\nfloat cnoise(vec3 P)\n{\n  vec3 Pi0 = floor(P); // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n\n//-------- start here ------------\n\nmat3 rotation3dY(float angle) {\n  float s = sin(angle);\n  float c = cos(angle);\n\n  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);\n}\n\nvec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }\n\nvarying vec3 vNormal;\nvarying float displacement;\nvarying vec3 vPos;\nvarying float vDistort;\n\nuniform float uTime;\nuniform float uSpeed;\nuniform float uNoiseDensity;\nuniform float uNoiseStrength;\n\n#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n#ifdef USE_TANGENT\nvarying vec3 vTangent;\nvarying vec3 vBitangent;\n#endif\n#endif\n#include <clipping_planes_pars_vertex>\n#include <color_pars_vertex>\n#include <common>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <skinning_pars_vertex>\n#include <uv2_pars_vertex>\n#include <uv_pars_vertex>\n\nvoid main() {\n\n  #include <beginnormal_vertex>\n  #include <color_vertex>\n  #include <defaultnormal_vertex>\n  #include <morphnormal_vertex>\n  #include <skinbase_vertex>\n  #include <skinnormal_vertex>\n  #include <uv2_vertex>\n  #include <uv_vertex>\n  #ifndef FLAT_SHADED\n    vNormal = normalize(transformedNormal);\n  #ifdef USE_TANGENT\n    vTangent = normalize(transformedTangent);\n    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);\n  #endif\n  #endif\n  #include <begin_vertex>\n\n  #include <clipping_planes_vertex>\n  #include <displacementmap_vertex>\n  #include <logdepthbuf_vertex>\n  #include <morphtarget_vertex>\n  #include <project_vertex>\n  #include <skinning_vertex>\n    vViewPosition = -mvPosition.xyz;\n  #include <fog_vertex>\n  #include <shadowmap_vertex>\n  #include <worldpos_vertex>\n\n  //-------- start vertex ------------\n  float t = uTime * uSpeed;\n  // Create a sine wave from top to bottom of the sphere\n  float distortion = 0.75 * cnoise(0.43 * position * uNoiseDensity + t);\n\n  vec3 pos = position + normal * distortion * uNoiseStrength;\n  vPos = pos;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);\n}\n";

            function A(n) {
                var e = n.type,
                    r = n.color1,
                    o = n.color2,
                    a = n.color3,
                    c = n.uTime,
                    f = n.uSpeed,
                    u = n.uDensity,
                    x = n.uStrength,
                    y = n.uFrequency,
                    z = n.uAmplitude,
                    C = (0, g.useState)(!1),
                    w = C[0],
                    N = C[1],
                    L = "plane" === e ? t : i;
                (0, g.useEffect)((function() {
                    N(!1), setTimeout((function() {
                        N(!0)
                    }), 1)
                }), [r]);
                var A, D, O, E, j = (A = {
                    colors: [r, o, a],
                    uTime: c,
                    uSpeed: f,
                    uLoadingTime: 0,
                    uNoiseDensity: u,
                    uNoiseStrength: x,
                    uFrequency: y,
                    uAmplitude: z,
                    uIntensity: .5
                }, D = L.vertex, O = L.fragment, function(n) {
                    (0, _.Z)(r, n);
                    var e = b(r);

                    function r() {
                        var n;
                        (0, m.Z)(this, r);
                        var t = Array.isArray(A.colors) ? A.colors : ["#ffffff", "#ffffff", "#ffffff"],
                            i = S(t[0]),
                            o = S(t[1]),
                            a = S(t[2]),
                            c = {
                                uC1r: {
                                    value: T(null === i || void 0 === i ? void 0 : i.r)
                                },
                                uC1g: {
                                    value: T(null === i || void 0 === i ? void 0 : i.g)
                                },
                                uC1b: {
                                    value: T(null === i || void 0 === i ? void 0 : i.b)
                                },
                                uC2r: {
                                    value: T(null === o || void 0 === o ? void 0 : o.r)
                                },
                                uC2g: {
                                    value: T(null === o || void 0 === o ? void 0 : o.g)
                                },
                                uC2b: {
                                    value: T(null === o || void 0 === o ? void 0 : o.b)
                                },
                                uC3r: {
                                    value: T(null === a || void 0 === a ? void 0 : a.r)
                                },
                                uC3g: {
                                    value: T(null === a || void 0 === a ? void 0 : a.g)
                                },
                                uC3b: {
                                    value: T(null === a || void 0 === a ? void 0 : a.b)
                                }
                            },
                            f = Object.entries(A),
                            u = f.reduce((function(n, e) {
                                var r = (0, v.Z)(e, 2),
                                    t = r[0],
                                    i = r[1],
                                    o = h.UniformsUtils.clone((0, l.Z)({}, t, {
                                        value: i
                                    }));
                                return P(P({}, n), o)
                            }), {});
                        return (n = e.call(this, {
                            metalness: .2,
                            userData: u,
                            side: h.DoubleSide
                        })).onBeforeCompile = function(n) {
                            n.uniforms = P(P(P({}, n.uniforms), u), c), n.vertexShader = D, n.fragmentShader = O
                        }, f.forEach((function(e) {
                            var r = (0, v.Z)(e, 1)[0];
                            return Object.defineProperty((0, p.Z)(n), r, {
                                get: function() {
                                    return n.uniforms[r].value
                                },
                                set: function(e) {
                                    return n.uniforms[r].value = e
                                }
                            })
                        })), E && E((0, p.Z)(n)), n
                    }
                    return (0, d.Z)(r)
                }(h.MeshPhysicalMaterial));
                return (0, s.e)({
                    ColorShiftMaterial: j
                }), w
            }
            var D = new h.Clock;
            var O = r(35250),
                E = function(n) {
                    var e = n.type,
                        r = n.animate,
                        t = n.uTime,
                        i = n.uSpeed,
                        o = n.uStrength,
                        a = n.uDensity,
                        c = n.uFrequency,
                        l = n.uAmplitude,
                        f = n.positionX,
                        v = n.positionY,
                        d = n.positionZ,
                        m = n.color1,
                        p = n.color2,
                        _ = n.color3,
                        x = n.reflection,
                        y = A({
                            type: e,
                            color1: m,
                            color2: p,
                            color3: _,
                            uTime: t,
                            uSpeed: i,
                            uDensity: a,
                            uStrength: o,
                            uFrequency: c,
                            uAmplitude: l
                        }),
                        h = function(n) {
                            var e = n.animate,
                                r = (0, g.useRef)(),
                                t = (0, g.useRef)();
                            return (0, s.A)((function() {
                                if (r.current) {
                                    var n = D.getElapsedTime();
                                    e && (r.current.userData.uTime.value = n, void 0 !== t.current && (t.current.userData.uTime.value = n))
                                }
                            })), {
                                material: r,
                                linemat: t
                            }
                        }({
                            animate: r
                        }),
                        z = h.material;
                    return (0, O.jsx)("group", {
                        children: (0, O.jsxs)(u.q.mesh, {
                            position: [f, v, d],
                            children: ["plane" === e && (0, O.jsx)("planeGeometry", {
                                args: [10, 10, 1, 48]
                            }), "water" === e && (0, O.jsx)("planeGeometry", {
                                args: [10, 10, 48, 48]
                            }), y && (0, O.jsx)("colorShiftMaterial", {
                                ref: z,
                                roughness: 1 - x
                            })]
                        })
                    })
                },
                j = ["brightness"];

            function I(n, e) {
                var r = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(n);
                    e && (t = t.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.push.apply(r, t)
                }
                return r
            }

            function R(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? I(Object(r), !0).forEach((function(e) {
                        (0, l.Z)(n, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : I(Object(r)).forEach((function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return n
            }

            function F(n) {
                var e = n.brightness,
                    r = (0, f.Z)(n, j);
                return (0, O.jsxs)(O.Fragment, {
                    children: [(0, O.jsx)("ambientLight", {
                        intensity: e
                    }), (0, O.jsx)(E, R({}, r))]
                })
            }
            var k = function(n) {
                var e = n.color1,
                    r = void 0 === e ? "#ebedff" : e,
                    t = n.color2,
                    i = void 0 === t ? "#f3f2f8" : t,
                    o = n.color3,
                    l = void 0 === o ? "#e4f8ff" : o,
                    f = n.brightness,
                    u = void 0 === f ? 1.25 : f,
                    g = n.animate,
                    s = void 0 === g || g;
                return (0, O.jsxs)(O.Fragment, {
                    children: [(0, O.jsx)("div", {
                        className: "jsx-4095963553 canvas",
                        children: (0, O.jsx)(c.Xz, {
                            camera: {
                                fov: 30
                            },
                            children: (0, O.jsx)(F, {
                                brightness: u,
                                color1: r,
                                color2: i,
                                color3: l,
                                type: "water",
                                positionX: -1.4,
                                positionY: 0,
                                positionZ: 0,
                                uAmplitude: .5,
                                uDensity: 1,
                                uFrequency: .5,
                                uSpeed: .3,
                                uStrength: 7,
                                uTime: 1,
                                animate: s,
                                range: !0
                            })
                        })
                    }), (0, O.jsx)(a(), {
                        id: "4095963553",
                        children: [".canvas.jsx-4095963553{position:fixed;top:-5vh;left:-5vw;width:110vw;height:110vh;opacity:0.8;}"]
                    })]
                })
            }
        }
    }
]);