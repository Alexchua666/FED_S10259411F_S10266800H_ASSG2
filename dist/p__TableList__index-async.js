((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['p__TableList__index'],
{ "src/pages/TableList/components/UpdateForm.tsx": function (module, exports, __mako_require__){
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
var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
var _max = __mako_require__("src/.umi/exports.ts");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const UpdateForm = (props)=>{
    _s();
    const { values = {} } = props; // Ensure values are always an object
    const intl = (0, _max.useIntl)();
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.StepsForm, {
        stepsProps: {
            size: 'small'
        },
        stepsFormRender: (dom, submitter)=>{
            return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Modal, {
                width: 640,
                styles: {
                    body: {
                        padding: '32px 40px 48px'
                    }
                },
                destroyOnClose: true,
                title: intl.formatMessage({
                    id: 'pages.searchTable.updateForm.ruleConfig',
                    defaultMessage: '规则配置'
                }),
                open: props.updateModalOpen,
                footer: submitter,
                onCancel: ()=>{
                    props.onCancel();
                },
                children: dom
            }, void 0, false, {
                fileName: "src/pages/TableList/components/UpdateForm.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, void 0);
        },
        onFinish: props.onSubmit,
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.StepsForm.StepForm, {
            initialValues: {
                name: (values === null || values === void 0 ? void 0 : values.name) || '',
                desc: (values === null || values === void 0 ? void 0 : values.desc) || ''
            },
            title: intl.formatMessage({
                id: 'pages.searchTable.updateForm.basicConfig',
                defaultMessage: '基本信息'
            })
        }, void 0, false, {
            fileName: "src/pages/TableList/components/UpdateForm.tsx",
            lineNumber: 63,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "src/pages/TableList/components/UpdateForm.tsx",
        lineNumber: 33,
        columnNumber: 7
    }, this);
};
_s(UpdateForm, "rlSgSjbewJ1PrR/Ile8g/kr050o=", false, function() {
    return [
        _max.useIntl
    ];
});
_c = UpdateForm;
var _default = UpdateForm;
var _c;
$RefreshReg$(_c, "UpdateForm");
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
"src/pages/TableList/index.tsx": function (module, exports, __mako_require__){
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
var _api = __mako_require__("src/services/ant-design-pro/api.ts");
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
__mako_require__("src/.umi/exports.ts");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _UpdateForm = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/TableList/components/UpdateForm.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
/**

 * @en-US Add node

 * @zh-CN 添加节点

 * @param fields

 */ const handleAdd = async (fields)=>{
    const hide = _antd.message.loading('正在添加');
    try {
        await (0, _api.addRule)({
            ...fields
        });
        hide();
        _antd.message.success('Added successfully');
        return true;
    } catch (error) {
        hide();
        _antd.message.error('Adding failed, please try again!');
        return false;
    }
};
/**

 * @en-US Update node

 * @zh-CN 更新节点

 *

 * @param fields

 */ const handleUpdate = async (fields)=>{
    const hide = _antd.message.loading('Configuring');
    try {
        await (0, _api.updateRule)({
            name: fields.name,
            desc: fields.desc,
            key: fields.key
        });
        hide();
        _antd.message.success('Configuration is successful');
        return true;
    } catch (error) {
        hide();
        _antd.message.error('Configuration failed, please try again!');
        return false;
    }
};
/**

 *  Delete node

 * @zh-CN 删除节点

 *

 * @param selectedRows

 */ const handleRemove = async (selectedRows)=>{
    const hide = _antd.message.loading('正在删除');
    if (!selectedRows) return true;
    try {
        await (0, _api.removeRule)({
            key: selectedRows.map((row)=>row.key)
        });
        hide();
        _antd.message.success('Deleted successfully and will refresh soon');
        return true;
    } catch (error) {
        hide();
        _antd.message.error('Delete failed, please try again');
        return false;
    }
};
const TableList = ()=>{
    _s();
    /**

   * @en-US Pop-up window of new window

   * @zh-CN 新建窗口的弹窗

   *  */ const [createModalOpen, handleModalOpen] = (0, _react.useState)(false);
    /**

   * @en-US The pop-up window of the distribution update window

   * @zh-CN 分布更新窗口的弹窗

   * */ const [updateModalOpen, handleUpdateModalOpen] = (0, _react.useState)(false);
    const [showDetail, setShowDetail] = (0, _react.useState)(false);
    const actionRef = (0, _react.useRef)();
    const [currentRow, setCurrentRow] = (0, _react.useState)();
    const [selectedRowsState, setSelectedRows] = (0, _react.useState)([]);
    /**

   * @en-US International configuration

   * @zh-CN 国际化配置

   * */ const columns = [
        {
            title: 'User name',
            dataIndex: 'name',
            render: (dom, entity)=>{
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                    onClick: ()=>{
                        setCurrentRow(entity);
                        setShowDetail(true);
                    },
                    children: [
                        "            ",
                        dom,
                        "          "
                    ]
                }, void 0, true, {
                    fileName: "src/pages/TableList/index.tsx",
                    lineNumber: 225,
                    columnNumber: 11
                }, this);
            }
        },
        {
            title: 'Adress',
            dataIndex: 'name',
            render: (dom, entity)=>{
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                    onClick: ()=>{
                        setCurrentRow(entity);
                        setShowDetail(true);
                    },
                    children: [
                        "            ",
                        dom,
                        "          "
                    ]
                }, void 0, true, {
                    fileName: "src/pages/TableList/index.tsx",
                    lineNumber: 257,
                    columnNumber: 11
                }, this);
            }
        },
        {
            title: 'status',
            dataIndex: 'status',
            hideInForm: true,
            valueEnum: {
                0: {
                    text: 'Arrived at Logistics',
                    status: 'Default'
                },
                1: {
                    text: 'Hand over',
                    status: 'Processing'
                },
                2: {
                    text: 'Delivered',
                    status: 'Success'
                },
                3: {
                    text: '异常',
                    status: 'Error'
                }
            }
        },
        {
            title: 'extimate reaching date',
            sorter: true,
            dataIndex: 'updatedAt',
            valueType: 'dateTime',
            renderFormItem: (item, { defaultRender, ...rest }, form)=>{
                const status = form.getFieldValue('status');
                if (`${status}` === '0') return false;
                if (`${status}` === '3') return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Input, {
                    ...rest,
                    placeholder: '请输入异常原因！'
                }, void 0, false, {
                    fileName: "src/pages/TableList/index.tsx",
                    lineNumber: 347,
                    columnNumber: 18
                }, this);
                return defaultRender(item);
            }
        },
        {
            title: '操作',
            dataIndex: 'option',
            valueType: 'option',
            render: (_, record)=>[
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                        onClick: ()=>{
                            handleUpdateModalOpen(true);
                            setCurrentRow(record);
                        },
                        children: "          配置         "
                    }, "config", false, {
                        fileName: "src/pages/TableList/index.tsx",
                        lineNumber: 367,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                        href: "https://procomponents.ant.design/",
                        children: "          订阅警报         "
                    }, "subscribeAlert", false, {
                        fileName: "src/pages/TableList/index.tsx",
                        lineNumber: 385,
                        columnNumber: 9
                    }, this)
                ]
        }
    ];
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.PageContainer, {
        children: [
            "      ",
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProTable, {
                headerTitle: '查询表格',
                actionRef: actionRef,
                rowKey: "key",
                search: {
                    labelWidth: 120
                },
                toolBarRender: ()=>[
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                            type: "primary",
                            onClick: ()=>{
                                handleModalOpen(true);
                            },
                            children: [
                                "            ",
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.PlusOutlined, {}, void 0, false, {
                                    fileName: "src/pages/TableList/index.tsx",
                                    lineNumber: 431,
                                    columnNumber: 13
                                }, void 0),
                                " 新建           "
                            ]
                        }, "primary", true, {
                            fileName: "src/pages/TableList/index.tsx",
                            lineNumber: 417,
                            columnNumber: 11
                        }, void 0)
                    ],
                request: _api.rule,
                columns: columns,
                rowSelection: {
                    onChange: (_, selectedRows)=>{
                        setSelectedRows(selectedRows);
                    }
                }
            }, void 0, false, {
                fileName: "src/pages/TableList/index.tsx",
                lineNumber: 401,
                columnNumber: 7
            }, this),
            "      ",
            (selectedRowsState === null || selectedRowsState === void 0 ? void 0 : selectedRowsState.length) > 0 && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.FooterToolbar, {
                extra: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    children: [
                        "              已选择",
                        ' ',
                        "              ",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            style: {
                                fontWeight: 600
                            },
                            children: [
                                "                ",
                                selectedRowsState.length,
                                "              "
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/TableList/index.tsx",
                            lineNumber: 463,
                            columnNumber: 15
                        }, void 0),
                        ' ',
                        "              项                  ",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                            children: [
                                "                服务调用次数总计 ",
                                selectedRowsState.reduce((pre, item)=>pre + item.callNo, 0),
                                " 万               "
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/TableList/index.tsx",
                            lineNumber: 479,
                            columnNumber: 15
                        }, void 0),
                        "            "
                    ]
                }, void 0, true, {
                    fileName: "src/pages/TableList/index.tsx",
                    lineNumber: 459,
                    columnNumber: 13
                }, void 0),
                children: [
                    "          ",
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                        onClick: async ()=>{
                            var _actionRef_current_reloadAndRest, _actionRef_current;
                            await handleRemove(selectedRowsState);
                            setSelectedRows([]);
                            (_actionRef_current = actionRef.current) === null || _actionRef_current === void 0 || (_actionRef_current_reloadAndRest = _actionRef_current.reloadAndRest) === null || _actionRef_current_reloadAndRest === void 0 || _actionRef_current_reloadAndRest.call(_actionRef_current);
                        },
                        children: "            批量删除           "
                    }, void 0, false, {
                        fileName: "src/pages/TableList/index.tsx",
                        lineNumber: 491,
                        columnNumber: 11
                    }, this),
                    "          ",
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                        type: "primary",
                        children: "批量审批"
                    }, void 0, false, {
                        fileName: "src/pages/TableList/index.tsx",
                        lineNumber: 509,
                        columnNumber: 11
                    }, this),
                    "        "
                ]
            }, void 0, true, {
                fileName: "src/pages/TableList/index.tsx",
                lineNumber: 455,
                columnNumber: 9
            }, this),
            "      ",
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ModalForm, {
                title: '新建规则',
                width: "400px",
                open: createModalOpen,
                onOpenChange: handleModalOpen,
                onFinish: async (value)=>{
                    const success = await handleAdd(value);
                    if (success) {
                        handleModalOpen(false);
                        if (actionRef.current) actionRef.current.reload();
                    }
                },
                children: [
                    "        ",
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        rules: [
                            {
                                required: true,
                                message: '规则名称为必填项'
                            }
                        ],
                        width: "md",
                        name: "name"
                    }, void 0, false, {
                        fileName: "src/pages/TableList/index.tsx",
                        lineNumber: 545,
                        columnNumber: 9
                    }, this),
                    "        ",
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormTextArea, {
                        width: "md",
                        name: "desc"
                    }, void 0, false, {
                        fileName: "src/pages/TableList/index.tsx",
                        lineNumber: 565,
                        columnNumber: 9
                    }, this),
                    "      "
                ]
            }, void 0, true, {
                fileName: "src/pages/TableList/index.tsx",
                lineNumber: 515,
                columnNumber: 7
            }, this),
            "      ",
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_UpdateForm.default, {
                onSubmit: async (value)=>{
                    const success = await handleUpdate(value);
                    if (success) {
                        handleUpdateModalOpen(false);
                        setCurrentRow(undefined);
                        if (actionRef.current) actionRef.current.reload();
                    }
                },
                onCancel: ()=>{
                    handleUpdateModalOpen(false);
                    if (!showDetail) setCurrentRow(undefined);
                },
                updateModalOpen: updateModalOpen,
                values: currentRow || {}
            }, void 0, false, {
                fileName: "src/pages/TableList/index.tsx",
                lineNumber: 569,
                columnNumber: 7
            }, this),
            "      ",
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Drawer, {
                width: 600,
                open: showDetail,
                onClose: ()=>{
                    setCurrentRow(undefined);
                    setShowDetail(false);
                },
                closable: false,
                children: [
                    "        ",
                    (currentRow === null || currentRow === void 0 ? void 0 : currentRow.name) && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProDescriptions, {
                        column: 2,
                        title: currentRow === null || currentRow === void 0 ? void 0 : currentRow.name,
                        request: async ()=>({
                                data: currentRow || {}
                            }),
                        params: {
                            id: currentRow === null || currentRow === void 0 ? void 0 : currentRow.name
                        },
                        columns: columns
                    }, void 0, false, {
                        fileName: "src/pages/TableList/index.tsx",
                        lineNumber: 631,
                        columnNumber: 11
                    }, this),
                    "      "
                ]
            }, void 0, true, {
                fileName: "src/pages/TableList/index.tsx",
                lineNumber: 611,
                columnNumber: 7
            }, this),
            "    "
        ]
    }, void 0, true, {
        fileName: "src/pages/TableList/index.tsx",
        lineNumber: 399,
        columnNumber: 5
    }, this);
};
_s(TableList, "eQvFD1Beh76gQIMXuttWvTRMY9Y=");
_c = TableList;
var _default = TableList;
var _c;
$RefreshReg$(_c, "TableList");
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
//# sourceMappingURL=p__TableList__index-async.js.map