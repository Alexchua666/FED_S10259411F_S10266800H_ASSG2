((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['src/.umi/plugin-layout/Layout.tsx'],
{ "src/.umi/plugin-layout/Exception.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _max = __mako_require__("src/.umi/exports.ts");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const Exception = (props)=>{
    var _props_route, _props_route1;
    return(// render custom 404
    !props.route && (props.noFound || props.notFound) || ((_props_route = props.route) === null || _props_route === void 0 ? void 0 : _props_route.unaccessible) && (props.unAccessible || props.noAccessible) || (!props.route || ((_props_route1 = props.route) === null || _props_route1 === void 0 ? void 0 : _props_route1.unaccessible)) && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Result, {
        status: props.route ? '403' : '404',
        title: props.route ? '403' : '404',
        subTitle: props.route ? '抱歉，你无权访问该页面' : '抱歉，你访问的页面不存在',
        extra: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
            type: "primary",
            onClick: ()=>_max.history.push('/'),
            children: "返回首页"
        }, void 0, false, {
            fileName: "src/.umi/plugin-layout/Exception.tsx",
            lineNumber: 27,
            columnNumber: 9
        }, void 0)
    }, void 0, false, {
        fileName: "src/.umi/plugin-layout/Exception.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this) || // normal render
    props.children);
};
_c = Exception;
var _default = Exception;
var _c;
$RefreshReg$(_c, "Exception");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/.umi/plugin-layout/Layout.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
/// <reference types="C:/Users/chuaz/Desktop/api_alex/api_alex/alex/node_modules/@ant-design/pro-components" />
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return Component$$;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _max = __mako_require__("src/.umi/exports.ts");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
"";
var _Logo = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/.umi/plugin-layout/Logo.tsx"));
var _Exception = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/.umi/plugin-layout/Exception.tsx"));
var _rightRender = __mako_require__("src/.umi/plugin-layout/rightRender.tsx");
var _pluginmodel = __mako_require__("src/.umi/plugin-model/index.tsx");
var _pluginaccess = __mako_require__("src/.umi/plugin-access/index.tsx");
var _pluginlocale = __mako_require__("src/.umi/plugin-locale/index.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
// 过滤出需要显示的路由, 这里的filterFn 指 不希望显示的层级
const filterRoutes = (routes, filterFn)=>{
    if (routes.length === 0) return [];
    let newRoutes = [];
    for (const route of routes){
        const newRoute = {
            ...route
        };
        if (filterFn(route)) {
            if (Array.isArray(newRoute.routes)) newRoutes.push(...filterRoutes(newRoute.routes, filterFn));
        } else {
            if (Array.isArray(newRoute.children)) {
                newRoute.children = filterRoutes(newRoute.children, filterFn);
                newRoute.routes = newRoute.children;
            }
            newRoutes.push(newRoute);
        }
    }
    return newRoutes;
};
// 格式化路由 处理因 wrapper 导致的 菜单 path 不一致
const mapRoutes = (routes)=>{
    if (routes.length === 0) return [];
    return routes.map((route)=>{
        // 需要 copy 一份, 否则会污染原始数据
        const newRoute = {
            ...route
        };
        if (route.originPath) newRoute.path = route.originPath;
        if (Array.isArray(route.routes)) newRoute.routes = mapRoutes(route.routes);
        if (Array.isArray(route.children)) newRoute.children = mapRoutes(route.children);
        return newRoute;
    });
};
function Component$$(props) {
    _s();
    const location = (0, _max.useLocation)();
    const navigate = (0, _max.useNavigate)();
    const { clientRoutes, pluginManager } = (0, _max.useAppData)();
    const initialInfo = _pluginmodel.useModel && (0, _pluginmodel.useModel)('@@initialState') || {
        initialState: undefined,
        loading: false,
        setInitialState: null
    };
    const { initialState, loading, setInitialState } = initialInfo;
    const userConfig = {
        "locale": true,
        "navTheme": "light",
        "colorPrimary": "#1890ff",
        "layout": "mix",
        "contentWidth": "Fluid",
        "fixedHeader": false,
        "fixSiderbar": true,
        "colorWeak": false,
        "title": "Ant Design Pro",
        "pwa": true,
        "logo": "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
        "iconfontUrl": "",
        "token": {}
    };
    const { formatMessage } = (0, _pluginlocale.useIntl)();
    const runtimeConfig = pluginManager.applyPlugins({
        key: 'layout',
        type: 'modify',
        initialValue: {
            ...initialInfo
        }
    });
    // 现在的 layout 及 wrapper 实现是通过父路由的形式实现的, 会导致路由数据多了冗余层级, proLayout 消费时, 无法正确展示菜单, 这里对冗余数据进行过滤操作
    const newRoutes = filterRoutes(clientRoutes.filter((route)=>route.id === 'ant-design-pro-layout'), (route)=>{
        return !!route.isLayout && route.id !== 'ant-design-pro-layout' || !!route.isWrapper;
    });
    const [route] = (0, _pluginaccess.useAccessMarkedRoutes)(mapRoutes(newRoutes));
    const matchedRoute = (0, _react.useMemo)(()=>{
        var _matchRoutes_pop, _matchRoutes_pop1, _matchRoutes;
        return (_matchRoutes = (0, _max.matchRoutes)(route.children, location.pathname)) === null || _matchRoutes === void 0 ? void 0 : (_matchRoutes_pop1 = _matchRoutes.pop) === null || _matchRoutes_pop1 === void 0 ? void 0 : (_matchRoutes_pop = _matchRoutes_pop1.call(_matchRoutes)) === null || _matchRoutes_pop === void 0 ? void 0 : _matchRoutes_pop.route;
    }, [
        location.pathname
    ]);
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProLayout, {
        route: route,
        location: location,
        title: userConfig.title || 'ant-design-pro',
        navTheme: "dark",
        siderWidth: 256,
        onMenuHeaderClick: (e)=>{
            e.stopPropagation();
            e.preventDefault();
            navigate('/');
        },
        formatMessage: userConfig.formatMessage || formatMessage,
        menu: {
            locale: userConfig.locale
        },
        logo: _Logo.default,
        menuItemRender: (menuItemProps, defaultDom)=>{
            if (menuItemProps.isUrl || menuItemProps.children) return defaultDom;
            if (menuItemProps.path && location.pathname !== menuItemProps.path) return(// handle wildcard route path, for example /slave/* from qiankun
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.Link, {
                to: menuItemProps.path.replace('/*', ''),
                target: menuItemProps.target,
                children: defaultDom
            }, void 0, false, {
                fileName: "src/.umi/plugin-layout/Layout.tsx",
                lineNumber: 137,
                columnNumber: 13
            }, void 0));
            return defaultDom;
        },
        itemRender: (route, _, routes)=>{
            const { breadcrumbName, title, path } = route;
            const label = title || breadcrumbName;
            const last = routes[routes.length - 1];
            if (last) {
                if (last.path === path || last.linkPath === path) return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                    children: label
                }, void 0, false, {
                    fileName: "src/.umi/plugin-layout/Layout.tsx",
                    lineNumber: 150,
                    columnNumber: 20
                }, void 0);
            }
            return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.Link, {
                to: path,
                children: label
            }, void 0, false, {
                fileName: "src/.umi/plugin-layout/Layout.tsx",
                lineNumber: 153,
                columnNumber: 16
            }, void 0);
        },
        disableContentMargin: true,
        fixSiderbar: true,
        fixedHeader: true,
        ...runtimeConfig,
        rightContentRender: runtimeConfig.rightContentRender !== false && ((layoutProps)=>{
            const dom = (0, _rightRender.getRightRenderContent)({
                runtimeConfig,
                loading,
                initialState,
                setInitialState
            });
            if (runtimeConfig.rightContentRender) return runtimeConfig.rightContentRender(layoutProps, dom, {
                // BREAK CHANGE userConfig > runtimeConfig
                userConfig,
                runtimeConfig,
                loading,
                initialState,
                setInitialState
            });
            return dom;
        }),
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_Exception.default, {
            route: matchedRoute,
            noFound: runtimeConfig === null || runtimeConfig === void 0 ? void 0 : runtimeConfig.noFound,
            notFound: runtimeConfig === null || runtimeConfig === void 0 ? void 0 : runtimeConfig.notFound,
            unAccessible: runtimeConfig === null || runtimeConfig === void 0 ? void 0 : runtimeConfig.unAccessible,
            noAccessible: runtimeConfig === null || runtimeConfig === void 0 ? void 0 : runtimeConfig.noAccessible,
            children: runtimeConfig.childrenRender ? runtimeConfig.childrenRender(/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.Outlet, {}, void 0, false, {
                fileName: "src/.umi/plugin-layout/Layout.tsx",
                lineNumber: 190,
                columnNumber: 42
            }, this), props) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.Outlet, {}, void 0, false, {
                fileName: "src/.umi/plugin-layout/Layout.tsx",
                lineNumber: 191,
                columnNumber: 13
            }, this)
        }, void 0, false, {
            fileName: "src/.umi/plugin-layout/Layout.tsx",
            lineNumber: 182,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/.umi/plugin-layout/Layout.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_s(Component$$, "pxyibY4jsmhKpD8b+fagMzVuQLM=", false, function() {
    return [
        _max.useLocation,
        _max.useNavigate,
        _max.useAppData,
        _pluginmodel.useModel,
        _pluginlocale.useIntl,
        _pluginaccess.useAccessMarkedRoutes
    ];
});
_c = Component$$;
var _c;
$RefreshReg$(_c, "Component$$");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/.umi/plugin-layout/Logo.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const LogoIcon = ()=>{
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 200 200",
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("defs", {
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("linearGradient", {
                        id: "linearGradient-1",
                        x1: "62.102%",
                        x2: "108.197%",
                        y1: "0%",
                        y2: "37.864%",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("stop", {
                                offset: "0%",
                                stopColor: "#4285EB"
                            }, void 0, false, {
                                fileName: "src/.umi/plugin-layout/Logo.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("stop", {
                                offset: "100%",
                                stopColor: "#2EC7FF"
                            }, void 0, false, {
                                fileName: "src/.umi/plugin-layout/Logo.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/.umi/plugin-layout/Logo.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("linearGradient", {
                        id: "linearGradient-2",
                        x1: "69.644%",
                        x2: "54.043%",
                        y1: "0%",
                        y2: "108.457%",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("stop", {
                                offset: "0%",
                                stopColor: "#29CDFF"
                            }, void 0, false, {
                                fileName: "src/.umi/plugin-layout/Logo.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("stop", {
                                offset: "37.86%",
                                stopColor: "#148EFF"
                            }, void 0, false, {
                                fileName: "src/.umi/plugin-layout/Logo.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("stop", {
                                offset: "100%",
                                stopColor: "#0A60FF"
                            }, void 0, false, {
                                fileName: "src/.umi/plugin-layout/Logo.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/.umi/plugin-layout/Logo.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("linearGradient", {
                        id: "linearGradient-3",
                        x1: "69.691%",
                        x2: "16.723%",
                        y1: "-12.974%",
                        y2: "117.391%",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("stop", {
                                offset: "0%",
                                stopColor: "#FA816E"
                            }, void 0, false, {
                                fileName: "src/.umi/plugin-layout/Logo.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("stop", {
                                offset: "41.473%",
                                stopColor: "#F74A5C"
                            }, void 0, false, {
                                fileName: "src/.umi/plugin-layout/Logo.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("stop", {
                                offset: "100%",
                                stopColor: "#F51D2C"
                            }, void 0, false, {
                                fileName: "src/.umi/plugin-layout/Logo.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/.umi/plugin-layout/Logo.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("linearGradient", {
                        id: "linearGradient-4",
                        x1: "68.128%",
                        x2: "30.44%",
                        y1: "-35.691%",
                        y2: "114.943%",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("stop", {
                                offset: "0%",
                                stopColor: "#FA8E7D"
                            }, void 0, false, {
                                fileName: "src/.umi/plugin-layout/Logo.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("stop", {
                                offset: "51.264%",
                                stopColor: "#F74A5C"
                            }, void 0, false, {
                                fileName: "src/.umi/plugin-layout/Logo.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("stop", {
                                offset: "100%",
                                stopColor: "#F51D2C"
                            }, void 0, false, {
                                fileName: "src/.umi/plugin-layout/Logo.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/.umi/plugin-layout/Logo.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/.umi/plugin-layout/Logo.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("g", {
                fill: "none",
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: "1",
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("g", {
                    transform: "translate(-20 -20)",
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("g", {
                        transform: "translate(20 20)",
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("g", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("g", {
                                    fillRule: "nonzero",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("g", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                                                    fill: "url(#linearGradient-1)",
                                                    d: "M91.588 4.177L4.18 91.513a11.981 11.981 0 000 16.974l87.408 87.336a12.005 12.005 0 0016.989 0l36.648-36.618c4.209-4.205 4.209-11.023 0-15.228-4.208-4.205-11.031-4.205-15.24 0l-27.783 27.76c-1.17 1.169-2.945 1.169-4.114 0l-69.802-69.744c-1.17-1.169-1.17-2.942 0-4.11l69.802-69.745c1.17-1.169 2.944-1.169 4.114 0l27.783 27.76c4.209 4.205 11.032 4.205 15.24 0 4.209-4.205 4.209-11.022 0-15.227L108.581 4.056c-4.719-4.594-12.312-4.557-16.993.12z"
                                                }, void 0, false, {
                                                    fileName: "src/.umi/plugin-layout/Logo.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                                                    fill: "url(#linearGradient-2)",
                                                    d: "M91.588 4.177L4.18 91.513a11.981 11.981 0 000 16.974l87.408 87.336a12.005 12.005 0 0016.989 0l36.648-36.618c4.209-4.205 4.209-11.023 0-15.228-4.208-4.205-11.031-4.205-15.24 0l-27.783 27.76c-1.17 1.169-2.945 1.169-4.114 0l-69.802-69.744c-1.17-1.169-1.17-2.942 0-4.11l69.802-69.745c2.912-2.51 7.664-7.596 14.642-8.786 5.186-.883 10.855 1.062 17.009 5.837L108.58 4.056c-4.719-4.594-12.312-4.557-16.993.12z"
                                                }, void 0, false, {
                                                    fileName: "src/.umi/plugin-layout/Logo.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/.umi/plugin-layout/Logo.tsx",
                                            lineNumber: 64,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                                            fill: "url(#linearGradient-3)",
                                            d: "M153.686 135.855c4.208 4.205 11.031 4.205 15.24 0l27.034-27.012c4.7-4.696 4.7-12.28 0-16.974l-27.27-27.15c-4.218-4.2-11.043-4.195-15.254.013-4.209 4.205-4.209 11.022 0 15.227l18.418 18.403c1.17 1.169 1.17 2.943 0 4.111l-18.168 18.154c-4.209 4.205-4.209 11.023 0 15.228z"
                                        }, void 0, false, {
                                            fileName: "src/.umi/plugin-layout/Logo.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/.umi/plugin-layout/Logo.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ellipse", {
                                    cx: "100.519",
                                    cy: "100.437",
                                    fill: "url(#linearGradient-4)",
                                    rx: "23.6",
                                    ry: "23.581"
                                }, void 0, false, {
                                    fileName: "src/.umi/plugin-layout/Logo.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/.umi/plugin-layout/Logo.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "src/.umi/plugin-layout/Logo.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "src/.umi/plugin-layout/Logo.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/.umi/plugin-layout/Logo.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/.umi/plugin-layout/Logo.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
};
_c = LogoIcon;
var _default = LogoIcon;
var _c;
$RefreshReg$(_c, "LogoIcon");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/.umi/plugin-layout/rightRender.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "getRightRenderContent", {
    enumerable: true,
    get: function() {
        return getRightRenderContent;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var _pluginlocale = __mako_require__("src/.umi/plugin-locale/index.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
function getRightRenderContent(opts) {
    var _opts_initialState, _opts_initialState1, _opts_initialState2, _opts_initialState3, _opts_initialState4;
    if (opts.runtimeConfig.rightRender) return opts.runtimeConfig.rightRender(opts.initialState, opts.setInitialState, opts.runtimeConfig);
    const showAvatar = ((_opts_initialState = opts.initialState) === null || _opts_initialState === void 0 ? void 0 : _opts_initialState.avatar) || ((_opts_initialState1 = opts.initialState) === null || _opts_initialState1 === void 0 ? void 0 : _opts_initialState1.name) || opts.runtimeConfig.logout;
    const disableAvatarImg = ((_opts_initialState2 = opts.initialState) === null || _opts_initialState2 === void 0 ? void 0 : _opts_initialState2.avatar) === false;
    const nameClassName = disableAvatarImg ? 'umi-plugin-layout-name umi-plugin-layout-hide-avatar-img' : 'umi-plugin-layout-name';
    const avatar = showAvatar ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
        className: "umi-plugin-layout-action",
        children: [
            !disableAvatarImg ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Avatar, {
                size: "small",
                className: "umi-plugin-layout-avatar",
                src: ((_opts_initialState3 = opts.initialState) === null || _opts_initialState3 === void 0 ? void 0 : _opts_initialState3.avatar) || "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",
                alt: "avatar"
            }, void 0, false, {
                fileName: "src/.umi/plugin-layout/rightRender.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this) : null,
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                className: nameClassName,
                children: (_opts_initialState4 = opts.initialState) === null || _opts_initialState4 === void 0 ? void 0 : _opts_initialState4.name
            }, void 0, false, {
                fileName: "src/.umi/plugin-layout/rightRender.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/.umi/plugin-layout/rightRender.tsx",
        lineNumber: 28,
        columnNumber: 7
    }, this) : null;
    if (opts.loading) return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: "umi-plugin-layout-right",
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Spin, {
            size: "small",
            style: {
                marginLeft: 8,
                marginRight: 8
            }
        }, void 0, false, {
            fileName: "src/.umi/plugin-layout/rightRender.tsx",
            lineNumber: 49,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "src/.umi/plugin-layout/rightRender.tsx",
        lineNumber: 48,
        columnNumber: 7
    }, this);
    // 如果没有打开Locale，并且头像为空就取消掉这个返回的内容
    const langMenu = {
        className: "umi-plugin-layout-menu",
        selectedKeys: [],
        items: [
            {
                key: "logout",
                label: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.LogoutOutlined, {}, void 0, false, {
                            fileName: "src/.umi/plugin-layout/rightRender.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this),
                        "退出登录"
                    ]
                }, void 0, true),
                onClick: ()=>{
                    var _opts_runtimeConfig_logout, _opts_runtimeConfig;
                    opts === null || opts === void 0 || (_opts_runtimeConfig = opts.runtimeConfig) === null || _opts_runtimeConfig === void 0 || (_opts_runtimeConfig_logout = _opts_runtimeConfig.logout) === null || _opts_runtimeConfig_logout === void 0 || _opts_runtimeConfig_logout.call(_opts_runtimeConfig, opts.initialState);
                }
            }
        ]
    };
    // antd@5 和  4.24 之后推荐使用 menu，性能更好
    let dropdownProps;
    if (_antd.version.startsWith("5.") || _antd.version.startsWith("4.24.")) dropdownProps = {
        menu: langMenu
    };
    else if (_antd.version.startsWith("3.")) dropdownProps = {
        overlay: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Menu, {
            children: langMenu.items.map((item)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Menu.Item, {
                    onClick: item.onClick,
                    children: item.label
                }, item.key, false, {
                    fileName: "src/.umi/plugin-layout/rightRender.tsx",
                    lineNumber: 83,
                    columnNumber: 13
                }, this))
        }, void 0, false, {
            fileName: "src/.umi/plugin-layout/rightRender.tsx",
            lineNumber: 81,
            columnNumber: 9
        }, this)
    };
    else dropdownProps = {
        overlay: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Menu, {
            ...langMenu
        }, void 0, false, {
            fileName: "src/.umi/plugin-layout/rightRender.tsx",
            lineNumber: 91,
            columnNumber: 32
        }, this)
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: "umi-plugin-layout-right anticon",
        children: [
            opts.runtimeConfig.logout ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Dropdown, {
                ...dropdownProps,
                overlayClassName: "umi-plugin-layout-container",
                children: avatar
            }, void 0, false, {
                fileName: "src/.umi/plugin-layout/rightRender.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this) : avatar,
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_pluginlocale.SelectLang, {}, void 0, false, {
                fileName: "src/.umi/plugin-layout/rightRender.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/.umi/plugin-layout/rightRender.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
 }]);
//# sourceMappingURL=src__umi_plugin-layout_Layout_tsx-async.js.map