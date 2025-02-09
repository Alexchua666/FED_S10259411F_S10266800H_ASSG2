globalThis.makoModuleHotUpdate('p__Welcome', {
    modules: {
        "src/pages/Welcome.tsx": function(module, exports, __mako_require__) {
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
            var _reactrefresh = _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
            var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
            var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
            var _max = __mako_require__("src/.umi/exports.ts");
            var _antd = __mako_require__("node_modules/antd/es/index.js");
            var _react = _interop_require_default._(__mako_require__("node_modules/react/index.js"));
            var prevRefreshReg;
            var prevRefreshSig;
            prevRefreshReg = self.$RefreshReg$;
            prevRefreshSig = self.$RefreshSig$;
            self.$RefreshReg$ = (type, id)=>{
                _reactrefresh.register(type, module.id + id);
            };
            self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
            var _s = $RefreshSig$();
            var _s1 = $RefreshSig$();
            const InfoCard = ({ title, href, index, desc })=>{
                _s();
                const { useToken } = _antd.theme;
                const { token } = useToken();
                return (0, _jsxdevruntime.jsxDEV)("div", {
                    style: {
                        backgroundColor: token.colorBgContainer,
                        boxShadow: token.boxShadow,
                        borderRadius: '8px',
                        fontSize: '14px',
                        color: token.colorTextSecondary,
                        lineHeight: '22px',
                        padding: '16px 19px',
                        minWidth: '220px',
                        flex: 1
                    },
                    children: [
                        (0, _jsxdevruntime.jsxDEV)("div", {
                            style: {
                                display: 'flex',
                                gap: '4px',
                                alignItems: 'center'
                            },
                            children: [
                                (0, _jsxdevruntime.jsxDEV)("div", {
                                    style: {
                                        width: 48,
                                        height: 48,
                                        lineHeight: '22px',
                                        backgroundSize: '100%',
                                        textAlign: 'center',
                                        padding: '8px 16px 16px 12px',
                                        color: '#FFF',
                                        fontWeight: 'bold',
                                        backgroundImage: "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')"
                                    },
                                    children: index
                                }, void 0, false, {
                                    fileName: "src/pages/Welcome.tsx",
                                    lineNumber: 42,
                                    columnNumber: 9
                                }, this),
                                (0, _jsxdevruntime.jsxDEV)("div", {
                                    style: {
                                        fontSize: '16px',
                                        color: token.colorText,
                                        paddingBottom: 8
                                    },
                                    children: title
                                }, void 0, false, {
                                    fileName: "src/pages/Welcome.tsx",
                                    lineNumber: 58,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Welcome.tsx",
                            lineNumber: 35,
                            columnNumber: 7
                        }, this),
                        (0, _jsxdevruntime.jsxDEV)("div", {
                            style: {
                                fontSize: '14px',
                                color: token.colorTextSecondary,
                                textAlign: 'justify',
                                lineHeight: '22px',
                                marginBottom: 8
                            },
                            children: desc
                        }, void 0, false, {
                            fileName: "src/pages/Welcome.tsx",
                            lineNumber: 68,
                            columnNumber: 7
                        }, this),
                        (0, _jsxdevruntime.jsxDEV)("a", {
                            href: href,
                            target: "_blank",
                            rel: "noreferrer",
                            children: [
                                "了解更多 ",
                                '>'
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Welcome.tsx",
                            lineNumber: 79,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Welcome.tsx",
                    lineNumber: 22,
                    columnNumber: 5
                }, this);
            };
            _s(InfoCard, "CXYXngGSy/ueZ8bUn1vgrdGvaEo=", true);
            _c = InfoCard;
            const Welcome = ()=>{
                var _initialState_settings;
                _s1();
                const { token } = _antd.theme.useToken();
                const { initialState } = (0, _max.useModel)('@@initialState');
                return (0, _jsxdevruntime.jsxDEV)(_procomponents.PageContainer, {
                    children: (0, _jsxdevruntime.jsxDEV)(_antd.Card, {
                        style: {
                            borderRadius: 8
                        },
                        styles: {
                            body: {
                                backgroundImage: (initialState === null || initialState === void 0 ? void 0 : (_initialState_settings = initialState.settings) === null || _initialState_settings === void 0 ? void 0 : _initialState_settings.navTheme) === 'realDark' ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)' : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)'
                            }
                        },
                        children: (0, _jsxdevruntime.jsxDEV)("div", {
                            style: {
                                backgroundPosition: '100% -30%',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '274px auto',
                                backgroundImage: "url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')"
                            },
                            children: [
                                (0, _jsxdevruntime.jsxDEV)("div", {
                                    style: {
                                        fontSize: '20px',
                                        color: token.colorTextHeading
                                    },
                                    children: "欢迎使用 Ant Design Pro"
                                }, void 0, false, {
                                    fileName: "src/pages/Welcome.tsx",
                                    lineNumber: 113,
                                    columnNumber: 11
                                }, this),
                                (0, _jsxdevruntime.jsxDEV)("p", {
                                    style: {
                                        fontSize: '14px',
                                        color: token.colorTextSecondary,
                                        lineHeight: '22px',
                                        marginTop: 16,
                                        marginBottom: 32,
                                        width: '65%'
                                    },
                                    children: "Ant Design Pro 是一个整合了 umi，Ant Design 和 ProComponents 的脚手架方案。致力于在设计规范和基础组件的基础上，继续向上构建，提炼出典型模板/业务组件/配套设计资源，进一步提升企业级中后台产品设计研发过程中的『用户』和『设计者』的体验。"
                                }, void 0, false, {
                                    fileName: "src/pages/Welcome.tsx",
                                    lineNumber: 121,
                                    columnNumber: 11
                                }, this),
                                (0, _jsxdevruntime.jsxDEV)("div", {
                                    style: {
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: 16
                                    },
                                    children: [
                                        (0, _jsxdevruntime.jsxDEV)(InfoCard, {
                                            index: 1,
                                            href: "https://umijs.org/docs/introduce/introduce",
                                            title: "了解 umi",
                                            desc: "umi 是一个可扩展的企业级前端应用框架,umi 以路由为基础的，同时支持配置式路由和约定式路由，保证路由的功能完备，并以此进行功能扩展。"
                                        }, void 0, false, {
                                            fileName: "src/pages/Welcome.tsx",
                                            lineNumber: 141,
                                            columnNumber: 13
                                        }, this),
                                        (0, _jsxdevruntime.jsxDEV)(InfoCard, {
                                            index: 2,
                                            title: "了解 ant design",
                                            href: "https://ant.design",
                                            desc: "antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。"
                                        }, void 0, false, {
                                            fileName: "src/pages/Welcome.tsx",
                                            lineNumber: 147,
                                            columnNumber: 13
                                        }, this),
                                        (0, _jsxdevruntime.jsxDEV)(InfoCard, {
                                            index: 3,
                                            title: "了解 Pro Components",
                                            href: "https://procomponents.ant.design",
                                            desc: "ProComponents 是一个基于 Ant Design 做了更高抽象的模板组件，以 一个组件就是一个页面为开发理念，为中后台开发带来更好的体验。"
                                        }, void 0, false, {
                                            fileName: "src/pages/Welcome.tsx",
                                            lineNumber: 153,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/Welcome.tsx",
                                    lineNumber: 134,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Welcome.tsx",
                            lineNumber: 104,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/Welcome.tsx",
                        lineNumber: 91,
                        columnNumber: 7
                    }, this)
                }, void 0, false, {
                    fileName: "src/pages/Welcome.tsx",
                    lineNumber: 90,
                    columnNumber: 5
                }, this);
            };
            _s1(Welcome, "t4rumwICndEohNSyqYk3Pzlg18I=", false, function() {
                return [
                    _antd.theme.useToken,
                    _max.useModel
                ];
            });
            _c1 = Welcome;
            var _default = Welcome;
            var _c;
            var _c1;
            $RefreshReg$(_c, "InfoCard");
            $RefreshReg$(_c1, "Welcome");
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
        "src/.umi/exports.ts": function(module, exports, __mako_require__) {
            "use strict";
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            function _export(target, all) {
                for(var name in all)Object.defineProperty(target, name, {
                    enumerable: true,
                    get: all[name]
                });
            }
            __mako_require__.e(exports, {
                Access: function() {
                    return _pluginaccess.Access;
                },
                ApplyPluginsType: function() {
                    return _plugin.ApplyPluginsType;
                },
                FormattedDate: function() {
                    return _pluginlocale.FormattedDate;
                },
                FormattedDateParts: function() {
                    return _pluginlocale.FormattedDateParts;
                },
                FormattedDisplayName: function() {
                    return _pluginlocale.FormattedDisplayName;
                },
                FormattedHTMLMessage: function() {
                    return _pluginlocale.FormattedHTMLMessage;
                },
                FormattedList: function() {
                    return _pluginlocale.FormattedList;
                },
                FormattedMessage: function() {
                    return _pluginlocale.FormattedMessage;
                },
                FormattedNumber: function() {
                    return _pluginlocale.FormattedNumber;
                },
                FormattedNumberParts: function() {
                    return _pluginlocale.FormattedNumberParts;
                },
                FormattedPlural: function() {
                    return _pluginlocale.FormattedPlural;
                },
                FormattedRelativeTime: function() {
                    return _pluginlocale.FormattedRelativeTime;
                },
                FormattedTime: function() {
                    return _pluginlocale.FormattedTime;
                },
                FormattedTimeParts: function() {
                    return _pluginlocale.FormattedTimeParts;
                },
                Helmet: function() {
                    return _rendererreact.Helmet;
                },
                HelmetProvider: function() {
                    return _rendererreact.HelmetProvider;
                },
                IntlProvider: function() {
                    return _pluginlocale.IntlProvider;
                },
                Link: function() {
                    return _rendererreact.Link;
                },
                NavLink: function() {
                    return _rendererreact.NavLink;
                },
                Navigate: function() {
                    return _rendererreact.Navigate;
                },
                Outlet: function() {
                    return _rendererreact.Outlet;
                },
                PluginManager: function() {
                    return _plugin.PluginManager;
                },
                Provider: function() {
                    return _pluginmodel.Provider;
                },
                RawIntlProvider: function() {
                    return _pluginlocale.RawIntlProvider;
                },
                SelectLang: function() {
                    return _pluginlocale.SelectLang;
                },
                TestBrowser: function() {
                    return _testBrowser.TestBrowser;
                },
                UseRequestProvider: function() {
                    return _pluginrequest.UseRequestProvider;
                },
                __getRoot: function() {
                    return _rendererreact.__getRoot;
                },
                __useFetcher: function() {
                    return _rendererreact.__useFetcher;
                },
                addLocale: function() {
                    return _pluginlocale.addLocale;
                },
                createBrowserHistory: function() {
                    return _rendererreact.createBrowserHistory;
                },
                createHashHistory: function() {
                    return _rendererreact.createHashHistory;
                },
                createHistory: function() {
                    return _history.createHistory;
                },
                createMemoryHistory: function() {
                    return _rendererreact.createMemoryHistory;
                },
                createSearchParams: function() {
                    return _rendererreact.createSearchParams;
                },
                defineApp: function() {
                    return _defineApp.defineApp;
                },
                formatMessage: function() {
                    return _pluginlocale.formatMessage;
                },
                generatePath: function() {
                    return _rendererreact.generatePath;
                },
                getAllLocales: function() {
                    return _pluginlocale.getAllLocales;
                },
                getIntl: function() {
                    return _pluginlocale.getIntl;
                },
                getLocale: function() {
                    return _pluginlocale.getLocale;
                },
                getRequestInstance: function() {
                    return _pluginrequest.getRequestInstance;
                },
                history: function() {
                    return _history.history;
                },
                injectIntl: function() {
                    return _pluginlocale.injectIntl;
                },
                matchPath: function() {
                    return _rendererreact.matchPath;
                },
                matchRoutes: function() {
                    return _rendererreact.matchRoutes;
                },
                renderClient: function() {
                    return _rendererreact.renderClient;
                },
                request: function() {
                    return _pluginrequest.request;
                },
                resolvePath: function() {
                    return _rendererreact.resolvePath;
                },
                setLocale: function() {
                    return _pluginlocale.setLocale;
                },
                terminal: function() {
                    return _terminal.terminal;
                },
                useAccess: function() {
                    return _pluginaccess.useAccess;
                },
                useAccessMarkedRoutes: function() {
                    return _pluginaccess.useAccessMarkedRoutes;
                },
                useAppData: function() {
                    return _rendererreact.useAppData;
                },
                useClientLoaderData: function() {
                    return _rendererreact.useClientLoaderData;
                },
                useIntl: function() {
                    return _pluginlocale.useIntl;
                },
                useLoaderData: function() {
                    return _rendererreact.useLoaderData;
                },
                useLocation: function() {
                    return _rendererreact.useLocation;
                },
                useMatch: function() {
                    return _rendererreact.useMatch;
                },
                useModel: function() {
                    return _pluginmodel.useModel;
                },
                useNavigate: function() {
                    return _rendererreact.useNavigate;
                },
                useOutlet: function() {
                    return _rendererreact.useOutlet;
                },
                useOutletContext: function() {
                    return _rendererreact.useOutletContext;
                },
                useParams: function() {
                    return _rendererreact.useParams;
                },
                useRequest: function() {
                    return _pluginrequest.useRequest;
                },
                useResolvedPath: function() {
                    return _rendererreact.useResolvedPath;
                },
                useRouteData: function() {
                    return _rendererreact.useRouteData;
                },
                useRouteProps: function() {
                    return _rendererreact.useRouteProps;
                },
                useRoutes: function() {
                    return _rendererreact.useRoutes;
                },
                useSearchParams: function() {
                    return _rendererreact.useSearchParams;
                },
                useSelectedRoutes: function() {
                    return _rendererreact.useSelectedRoutes;
                },
                useServerInsertedHTML: function() {
                    return useServerInsertedHTML;
                },
                useServerLoaderData: function() {
                    return _rendererreact.useServerLoaderData;
                },
                withRouter: function() {
                    return _rendererreact.withRouter;
                }
            });
            var _export_star = __mako_require__("@swc/helpers/_/_export_star");
            var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
            var _reactrefresh = _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
            var _defineApp = __mako_require__("src/.umi/core/defineApp.ts");
            var _pluginaccess = __mako_require__("src/.umi/plugin-access/index.tsx");
            var _pluginlocale = __mako_require__("src/.umi/plugin-locale/index.ts");
            var _pluginmodel = __mako_require__("src/.umi/plugin-model/index.tsx");
            var _pluginrequest = __mako_require__("src/.umi/plugin-request/index.ts");
            _export_star._(__mako_require__("src/.umi/plugin-access/types.d.ts"), exports);
            _export_star._(__mako_require__("src/.umi/plugin-antd/types.d.ts"), exports);
            _export_star._(__mako_require__("src/.umi/plugin-layout/types.d.ts"), exports);
            _export_star._(__mako_require__("src/.umi/plugin-request/types.d.ts"), exports);
            var _rendererreact = __mako_require__("node_modules/@umijs/renderer-react/dist/index.js");
            var _plugin = __mako_require__("node_modules/umi/client/client/plugin.js");
            var _history = __mako_require__("src/.umi/core/history.ts");
            var _terminal = __mako_require__("src/.umi/core/terminal.ts");
            var _testBrowser = __mako_require__("src/.umi/testBrowser.tsx");
            var prevRefreshReg;
            var prevRefreshSig;
            prevRefreshReg = self.$RefreshReg$;
            prevRefreshSig = self.$RefreshSig$;
            self.$RefreshReg$ = (type, id)=>{
                _reactrefresh.register(type, module.id + id);
            };
            self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
            const useServerInsertedHTML = ()=>{};
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
        "node_modules/antd/es/index.js": function(module, exports, __mako_require__) {
            "use client";
            "use strict";
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            function _export(target, all) {
                for(var name in all)Object.defineProperty(target, name, {
                    enumerable: true,
                    get: all[name]
                });
            }
            __mako_require__.e(exports, {
                Affix: function() {
                    return _affix.default;
                },
                Alert: function() {
                    return _alert.default;
                },
                Anchor: function() {
                    return _anchor.default;
                },
                App: function() {
                    return _app.default;
                },
                AutoComplete: function() {
                    return _autocomplete.default;
                },
                Avatar: function() {
                    return _avatar.default;
                },
                BackTop: function() {
                    return _backtop.default;
                },
                Badge: function() {
                    return _badge.default;
                },
                Breadcrumb: function() {
                    return _breadcrumb.default;
                },
                Button: function() {
                    return _button.default;
                },
                Calendar: function() {
                    return _calendar.default;
                },
                Card: function() {
                    return _card.default;
                },
                Carousel: function() {
                    return _carousel.default;
                },
                Cascader: function() {
                    return _cascader.default;
                },
                Checkbox: function() {
                    return _checkbox.default;
                },
                Col: function() {
                    return _col.default;
                },
                Collapse: function() {
                    return _collapse.default;
                },
                ColorPicker: function() {
                    return _colorpicker.default;
                },
                ConfigProvider: function() {
                    return _configprovider.default;
                },
                DatePicker: function() {
                    return _datepicker.default;
                },
                Descriptions: function() {
                    return _descriptions.default;
                },
                Divider: function() {
                    return _divider.default;
                },
                Drawer: function() {
                    return _drawer.default;
                },
                Dropdown: function() {
                    return _dropdown.default;
                },
                Empty: function() {
                    return _empty.default;
                },
                Flex: function() {
                    return _flex.default;
                },
                FloatButton: function() {
                    return _floatbutton.default;
                },
                Form: function() {
                    return _form.default;
                },
                Grid: function() {
                    return _grid.default;
                },
                Image: function() {
                    return _image.default;
                },
                Input: function() {
                    return _input.default;
                },
                InputNumber: function() {
                    return _inputnumber.default;
                },
                Layout: function() {
                    return _layout.default;
                },
                List: function() {
                    return _list.default;
                },
                Mentions: function() {
                    return _mentions.default;
                },
                Menu: function() {
                    return _menu.default;
                },
                Modal: function() {
                    return _modal.default;
                },
                Pagination: function() {
                    return _pagination.default;
                },
                Popconfirm: function() {
                    return _popconfirm.default;
                },
                Popover: function() {
                    return _popover.default;
                },
                Progress: function() {
                    return _progress.default;
                },
                QRCode: function() {
                    return _qrcode.default;
                },
                Radio: function() {
                    return _radio.default;
                },
                Rate: function() {
                    return _rate.default;
                },
                Result: function() {
                    return _result.default;
                },
                Row: function() {
                    return _row.default;
                },
                Segmented: function() {
                    return _segmented.default;
                },
                Select: function() {
                    return _select.default;
                },
                Skeleton: function() {
                    return _skeleton.default;
                },
                Slider: function() {
                    return _slider.default;
                },
                Space: function() {
                    return _space.default;
                },
                Spin: function() {
                    return _spin.default;
                },
                Splitter: function() {
                    return _splitter.default;
                },
                Statistic: function() {
                    return _statistic.default;
                },
                Steps: function() {
                    return _steps.default;
                },
                Switch: function() {
                    return _switch.default;
                },
                Table: function() {
                    return _table.default;
                },
                Tabs: function() {
                    return _tabs.default;
                },
                Tag: function() {
                    return _tag.default;
                },
                TimePicker: function() {
                    return _timepicker.default;
                },
                Timeline: function() {
                    return _timeline.default;
                },
                Tooltip: function() {
                    return _tooltip.default;
                },
                Tour: function() {
                    return _tour.default;
                },
                Transfer: function() {
                    return _transfer.default;
                },
                Tree: function() {
                    return _tree.default;
                },
                TreeSelect: function() {
                    return _treeselect.default;
                },
                Typography: function() {
                    return _typography.default;
                },
                Upload: function() {
                    return _upload.default;
                },
                Watermark: function() {
                    return _watermark.default;
                },
                message: function() {
                    return _message.default;
                },
                notification: function() {
                    return _notification.default;
                },
                theme: function() {
                    return _theme.default;
                },
                version: function() {
                    return _version.default;
                }
            });
            var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
            var _affix = _interop_require_default._(__mako_require__("node_modules/antd/es/affix/index.js"));
            var _alert = _interop_require_default._(__mako_require__("node_modules/antd/es/alert/index.js"));
            var _anchor = _interop_require_default._(__mako_require__("node_modules/antd/es/anchor/index.js"));
            var _app = _interop_require_default._(__mako_require__("node_modules/antd/es/app/index.js"));
            var _autocomplete = _interop_require_default._(__mako_require__("node_modules/antd/es/auto-complete/index.js"));
            var _avatar = _interop_require_default._(__mako_require__("node_modules/antd/es/avatar/index.js"));
            var _backtop = _interop_require_default._(__mako_require__("node_modules/antd/es/back-top/index.js"));
            var _badge = _interop_require_default._(__mako_require__("node_modules/antd/es/badge/index.js"));
            var _breadcrumb = _interop_require_default._(__mako_require__("node_modules/antd/es/breadcrumb/index.js"));
            var _button = _interop_require_default._(__mako_require__("node_modules/antd/es/button/index.js"));
            var _calendar = _interop_require_default._(__mako_require__("node_modules/antd/es/calendar/index.js"));
            var _card = _interop_require_default._(__mako_require__("node_modules/antd/es/card/index.js"));
            var _carousel = _interop_require_default._(__mako_require__("node_modules/antd/es/carousel/index.js"));
            var _cascader = _interop_require_default._(__mako_require__("node_modules/antd/es/cascader/index.js"));
            var _checkbox = _interop_require_default._(__mako_require__("node_modules/antd/es/checkbox/index.js"));
            var _col = _interop_require_default._(__mako_require__("node_modules/antd/es/col/index.js"));
            var _collapse = _interop_require_default._(__mako_require__("node_modules/antd/es/collapse/index.js"));
            var _colorpicker = _interop_require_default._(__mako_require__("node_modules/antd/es/color-picker/index.js"));
            var _configprovider = _interop_require_default._(__mako_require__("node_modules/antd/es/config-provider/index.js"));
            var _datepicker = _interop_require_default._(__mako_require__("node_modules/antd/es/date-picker/index.js"));
            var _descriptions = _interop_require_default._(__mako_require__("node_modules/antd/es/descriptions/index.js"));
            var _divider = _interop_require_default._(__mako_require__("node_modules/antd/es/divider/index.js"));
            var _drawer = _interop_require_default._(__mako_require__("node_modules/antd/es/drawer/index.js"));
            var _dropdown = _interop_require_default._(__mako_require__("node_modules/antd/es/dropdown/index.js"));
            var _empty = _interop_require_default._(__mako_require__("node_modules/antd/es/empty/index.js"));
            var _flex = _interop_require_default._(__mako_require__("node_modules/antd/es/flex/index.js"));
            var _floatbutton = _interop_require_default._(__mako_require__("node_modules/antd/es/float-button/index.js"));
            var _form = _interop_require_default._(__mako_require__("node_modules/antd/es/form/index.js"));
            var _grid = _interop_require_default._(__mako_require__("node_modules/antd/es/grid/index.js"));
            var _image = _interop_require_default._(__mako_require__("node_modules/antd/es/image/index.js"));
            var _input = _interop_require_default._(__mako_require__("node_modules/antd/es/input/index.js"));
            var _inputnumber = _interop_require_default._(__mako_require__("node_modules/antd/es/input-number/index.js"));
            var _layout = _interop_require_default._(__mako_require__("node_modules/antd/es/layout/index.js"));
            var _list = _interop_require_default._(__mako_require__("node_modules/antd/es/list/index.js"));
            var _mentions = _interop_require_default._(__mako_require__("node_modules/antd/es/mentions/index.js"));
            var _menu = _interop_require_default._(__mako_require__("node_modules/antd/es/menu/index.js"));
            var _message = _interop_require_default._(__mako_require__("node_modules/antd/es/message/index.js"));
            var _modal = _interop_require_default._(__mako_require__("node_modules/antd/es/modal/index.js"));
            var _notification = _interop_require_default._(__mako_require__("node_modules/antd/es/notification/index.js"));
            var _pagination = _interop_require_default._(__mako_require__("node_modules/antd/es/pagination/index.js"));
            var _popconfirm = _interop_require_default._(__mako_require__("node_modules/antd/es/popconfirm/index.js"));
            var _popover = _interop_require_default._(__mako_require__("node_modules/antd/es/popover/index.js"));
            var _progress = _interop_require_default._(__mako_require__("node_modules/antd/es/progress/index.js"));
            var _qrcode = _interop_require_default._(__mako_require__("node_modules/antd/es/qr-code/index.js"));
            var _radio = _interop_require_default._(__mako_require__("node_modules/antd/es/radio/index.js"));
            var _rate = _interop_require_default._(__mako_require__("node_modules/antd/es/rate/index.js"));
            var _result = _interop_require_default._(__mako_require__("node_modules/antd/es/result/index.js"));
            var _row = _interop_require_default._(__mako_require__("node_modules/antd/es/row/index.js"));
            var _segmented = _interop_require_default._(__mako_require__("node_modules/antd/es/segmented/index.js"));
            var _select = _interop_require_default._(__mako_require__("node_modules/antd/es/select/index.js"));
            var _skeleton = _interop_require_default._(__mako_require__("node_modules/antd/es/skeleton/index.js"));
            var _slider = _interop_require_default._(__mako_require__("node_modules/antd/es/slider/index.js"));
            var _space = _interop_require_default._(__mako_require__("node_modules/antd/es/space/index.js"));
            var _spin = _interop_require_default._(__mako_require__("node_modules/antd/es/spin/index.js"));
            var _statistic = _interop_require_default._(__mako_require__("node_modules/antd/es/statistic/index.js"));
            var _steps = _interop_require_default._(__mako_require__("node_modules/antd/es/steps/index.js"));
            var _switch = _interop_require_default._(__mako_require__("node_modules/antd/es/switch/index.js"));
            var _table = _interop_require_default._(__mako_require__("node_modules/antd/es/table/index.js"));
            var _tabs = _interop_require_default._(__mako_require__("node_modules/antd/es/tabs/index.js"));
            var _tag = _interop_require_default._(__mako_require__("node_modules/antd/es/tag/index.js"));
            var _theme = _interop_require_default._(__mako_require__("node_modules/antd/es/theme/index.js"));
            var _timepicker = _interop_require_default._(__mako_require__("node_modules/antd/es/time-picker/index.js"));
            var _timeline = _interop_require_default._(__mako_require__("node_modules/antd/es/timeline/index.js"));
            var _tooltip = _interop_require_default._(__mako_require__("node_modules/antd/es/tooltip/index.js"));
            var _tour = _interop_require_default._(__mako_require__("node_modules/antd/es/tour/index.js"));
            var _transfer = _interop_require_default._(__mako_require__("node_modules/antd/es/transfer/index.js"));
            var _tree = _interop_require_default._(__mako_require__("node_modules/antd/es/tree/index.js"));
            var _treeselect = _interop_require_default._(__mako_require__("node_modules/antd/es/tree-select/index.js"));
            var _typography = _interop_require_default._(__mako_require__("node_modules/antd/es/typography/index.js"));
            var _upload = _interop_require_default._(__mako_require__("node_modules/antd/es/upload/index.js"));
            var _version = _interop_require_default._(__mako_require__("node_modules/antd/es/version/index.js"));
            var _watermark = _interop_require_default._(__mako_require__("node_modules/antd/es/watermark/index.js"));
            var _splitter = _interop_require_default._(__mako_require__("node_modules/antd/es/splitter/index.js"));
        },
        "node_modules/@ant-design/pro-components/es/index.js": function(module, exports, __mako_require__) {
            "use strict";
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            var _export_star = __mako_require__("@swc/helpers/_/_export_star");
            _export_star._(__mako_require__("node_modules/@ant-design/pro-components/node_modules/@ant-design/pro-card/es/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/pro-components/node_modules/@ant-design/pro-descriptions/es/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/pro-components/node_modules/@ant-design/pro-field/es/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/pro-components/node_modules/@ant-design/pro-form/es/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/pro-components/node_modules/@ant-design/pro-layout/es/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/pro-components/node_modules/@ant-design/pro-list/es/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/pro-components/node_modules/@ant-design/pro-provider/es/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/pro-components/node_modules/@ant-design/pro-skeleton/es/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/pro-components/node_modules/@ant-design/pro-table/es/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/pro-components/node_modules/@ant-design/pro-utils/es/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/pro-components/es/version.js"), exports);
        },
        "node_modules/react/jsx-dev-runtime.js": function(module, exports, __mako_require__) {
            'use strict';
            module.exports = __mako_require__("node_modules/react/cjs/react-jsx-dev-runtime.development.js");
        },
        "node_modules/react/index.js": function(module, exports, __mako_require__) {
            'use strict';
            module.exports = __mako_require__("node_modules/react/cjs/react.development.js");
        }
    }
}, function(runtime) {
    runtime._h = '1804020727326725344';
    runtime.updateEnsure2Map({
        "src/.umi/core/EmptyRoute.tsx": [
            "src/.umi/core/EmptyRoute.tsx"
        ],
        "src/.umi/plugin-layout/Layout.tsx": [
            "src/.umi/plugin-layout/Layout.tsx"
        ],
        "src/.umi/plugin-openapi/openapi.tsx": [
            "vendors",
            "src/.umi/plugin-openapi/openapi.tsx"
        ],
        "src/pages/404.tsx": [
            "p__404"
        ],
        "src/pages/Admin.tsx": [
            "p__Admin"
        ],
        "src/pages/TableList/index.tsx": [
            "p__TableList__index"
        ],
        "src/pages/User/Login/index.tsx": [
            "p__User__Login__index"
        ],
        "src/pages/Welcome.tsx": [
            "p__Welcome"
        ]
    });
    ;
});

//# sourceMappingURL=p__Welcome-async.4806474841827465560.hot-update.js.map