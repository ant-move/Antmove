'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-disable no-undef */
window.onload = function () {
    pageLoad(); // 初始化页面

    fileInfo(); // 页面转换详情

    maskClose(); // 关闭弹窗

};

function pageLoad() {
    projectResult();
    concepteleMade(); // 汇总
    temelatetable();
    openingMade();
    supportiveness();
    footerMade();
}
// 汇总
function concepteleMade() {
    var conceptele = '';
    conceptele = '<div class="itembox">\n                    <div class="topname">\u603B\u6570</div>\n                    <div class="botval">' + pageData.concept['modelAll'] + '</div>\n                </div>\n                <div class="itembox">\n                    <div class="topname">\u5B8C\u5168\u8F6C\u6362<i class="iconfont icon-zhengque"></i></div>\n                    <div class="botval">' + pageData.concept['completely'] + '</div>\n                </div>\n                <div class="itembox">\n                    <div class="topname">\u90E8\u5206\u8F6C\u6362<i class="iconfont icon-warning"></i></div>\n                    <div class="botval">' + pageData.concept['partial'] + '</div>\n                </div>\n                <div class="itembox">\n                    <div class="topname">\u4E0D\u652F\u6301<i class="iconfont icon-cuowu"></i></div>\n                    <div class="botval">' + pageData.concept['notsupport'] + '</div>\n                </div>';
    var circleBox = document.querySelector('.rep-allbox');
    circleBox.innerHTML = conceptele;
}

function fileDetails(templete, type) {
    var liItemObj = {
        templete: "模板文件",
        jsonModular: "json文件",
        otherModular: "其他文件",
        jsModular: "脚本文件",
        wxssModular: "样式文件",
        modularWxs: "自定义脚本",
        unsupported: "不支持文件",
        supportPart: "部分支持"
    };
    var keyArr = Object.keys(templete);
    if (keyArr.length === 0) {
        return false;
    }
    var tabBox = document.querySelector('.tab-box');
    var ulBox = tabBox.querySelector(".ul");
    var firstLi = ulBox.querySelectorAll("li")[0];
    if (firstLi) {
        firstLi.classList.add('actived');
    }
    var liItem = document.createElement("li");
    liItem.classList.add("tab-item");
    liItem.setAttribute("data-type", type);
    liItem.innerHTML = liItemObj[type];

    ulBox.appendChild(liItem);
    var cardBox = tabBox.querySelector('.card-box');
    var firstCard = cardBox.querySelectorAll(".table-info")[0];
    if (firstCard) {
        firstCard.classList.add('actived');
    }
    var tableInfo = document.createElement("div");
    tableInfo.classList.add('table-info');
    tableInfo.classList.add(type);

    var table = document.createElement("table");
    table.classList.add("table");
    var thead = document.createElement("thead");
    thead.classList.add("table-head");
    thead.innerHTML = '<tr class="pages">\n                            <th>\u6587\u4EF6\u8DEF\u5F84</th>\n                            <th>\u8F6C\u6362\u7ED3\u679C</th>\n                        </tr>';
    var tbody = document.createElement("tbody");
    var tbodyData = "";
    var unsupportedNum = 0;

    // 排序
    var warningArr = [];
    var errorArr = [];
    var successArr = [];
    keyArr.forEach(function (key) {
        if (templete[key].status === 1) {
            successArr.push(key);
        } else if (templete[key].status === 2) {
            warningArr.push(key);
        } else if (templete[key].status === 3) {
            errorArr.push(key);
        }
    });

    keyArr = errorArr.concat(warningArr).concat(successArr);

    var spanColor = 'warn';
    keyArr.forEach(function (key) {
        var icon = "";
        if (templete[key].status === 1) {
            icon = '<i class="iconfont icon-zhengque"></i>';
        } else if (templete[key].status === 2) {
            icon = '<i class="iconfont icon-warning"></i>';
        } else if (templete[key].status === 3) {
            icon = '<i class="iconfont icon-cuowu"></i>';
        }

        tbodyData = tbodyData + ('<tr>\n                        <td class="file-path">\n                            ' + key + '\n                        </td>\n                        \n                        <td class="apges">\n                            ' + icon + '\n                        </td>\n                    </tr>');

        if (templete[key].supportType && templete[key].supportType !== 1) {
            unsupportedNum++;
        }

        if (templete[key].supportType === 3) {
            spanColor = "err";
        }
    });

    tbody.innerHTML = tbodyData;
    var span = document.createElement("span");
    span.classList.add('num');

    liItem.appendChild(span);
    unsupportedNum = unsupportedNum || "";
    spanColor = unsupportedNum ? spanColor : "none";
    span.innerHTML = unsupportedNum;
    span.classList.add(spanColor);
    table.appendChild(thead);
    table.appendChild(tbody);
    tableInfo.appendChild(table);
    cardBox.appendChild(tableInfo);

    liItem.addEventListener("click", function () {
        ulBox.querySelectorAll('li').forEach(function (ele) {
            ele.classList.remove('actived');
        });

        cardBox.querySelectorAll(".table-info").forEach(function (ele) {
            ele.classList.remove('actived');
        });

        var cardName = liItem.getAttribute("data-type");
        cardBox.querySelector('.' + cardName).classList.add("actived");
        liItem.classList.add("actived");
    });
}

function openingMade() {
    var openingData = pageData.opening;
    var keyArr = Object.keys(openingData);
    if (keyArr.length === 0) {
        return false;
    }
    var tabBox = document.querySelector('.tab-box');
    var ulBox = tabBox.querySelector(".ul");
    var firstLi = ulBox.querySelectorAll("li")[0];
    if (firstLi) {
        firstLi.classList.add('actived');
    }
    var liItem = document.createElement("li");

    var span = document.createElement("span");
    span.classList.add('num');
    liItem.classList.add("tab-item");
    liItem.setAttribute("data-type", 'openability');
    liItem.innerHTML = '开放能力';

    ulBox.appendChild(liItem);
    var cardBox = tabBox.querySelector('.card-box');
    var firstCard = cardBox.querySelectorAll(".table-info")[0];
    if (firstCard) {
        firstCard.classList.add('actived');
    }
    var tableInfo = document.createElement("div");
    tableInfo.classList.add('table-info');
    tableInfo.classList.add('openability');

    var table = document.createElement("table");
    table.classList.add("table");
    var thead = document.createElement("thead");
    thead.classList.add("table-head");
    thead.innerHTML = '<tr>\n                            <th>\u80FD\u529B\u540D\u79F0</th>\n                            <th>\u9875\u9762\u8DEF\u5F84</th>\n                            <th>\u5982\u4F55\u89E3\u51B3</th>\n                            <th>\u8F6C\u6362\u7ED3\u679C</th>\n                        </tr>';
    var tbody = document.createElement("tbody");
    var tbodyData = "";

    var unsupportedNum = 0;
    var spanColor = 'warn';
    // 排序
    var zhengqueArr = keyArr.filter(function (key) {
        return openingData[key].status === 1;
    });

    var warningArr = keyArr.filter(function (key) {
        return openingData[key].status === 2;
    });

    var cuowuArr = keyArr.filter(function (key) {
        return openingData[key].status === 3;
    });

    var newKeyArr = cuowuArr.concat(warningArr, zhengqueArr);

    newKeyArr.forEach(function (key) {
        var icon = "";
        if (openingData[key].status === 1) {
            icon = '<i class="iconfont icon-zhengque"></i>';
        } else if (openingData[key].status === 2) {
            icon = '<i class="iconfont icon-warning"></i>';
        } else if (openingData[key].status === 3) {
            icon = '<i class="iconfont icon-cuowu"></i>';
        }

        tbodyData = tbodyData + ('<tr>\n                        <td>' + key + '</td>\n                        <td>' + openingData[key].pathArr.join("、") + '</td>\n                        <td>\n                            <div class="show-instruct" data-path="' + openingData[key].docpath + '">\n                                \u67E5\u770B\u76F8\u5173\u80FD\u529B\n                            </div>\n                        </td>\n                        \n                        <td class="apges">\n                            ' + icon + '\n                        </td>\n                    </tr>');
        if (openingData[key].status !== 1) {
            unsupportedNum++;
        }
        if (openingData[key].status === 3) {
            spanColor = 'err';
        }
    });

    unsupportedNum = unsupportedNum || "";
    spanColor = unsupportedNum ? spanColor : "none";
    span.innerText = unsupportedNum;
    span.classList.add(spanColor);
    liItem.appendChild(span);

    tbody.innerHTML = tbodyData;

    table.appendChild(thead);
    table.appendChild(tbody);
    tableInfo.appendChild(table);
    cardBox.appendChild(tableInfo);

    liItem.addEventListener("click", function () {
        ulBox.querySelectorAll('li').forEach(function (ele) {
            ele.classList.remove('actived');
        });

        cardBox.querySelectorAll(".table-info").forEach(function (ele) {
            ele.classList.remove('actived');
        });

        cardBox.querySelector('.openability').classList.add("actived");
        liItem.classList.add("actived");

        cardBox.querySelectorAll('.show-instruct').forEach(function (ele) {
            ele.addEventListener("click", function () {
                var path = ele.getAttribute("data-path");
                window.location.href = path;
            });
        });
    });
}

function supportiveness() {
    var supportPart = {},
        unsupported = {};
    Object.keys(pageData.transforms).forEach(function (key) {
        if (pageData.transforms[key].status === 2) {
            supportPart[key] = pageData.transforms[key];
        }

        if (pageData.transforms[key].status === 3) {
            unsupported[key] = pageData.transforms[key];
        }
    });
    fileDetails(supportPart, 'supportPart');
    fileDetails(unsupported, 'unsupported');
}

function temelatetable() {
    var templete = {},
        jsModular = {},
        wxssModular = {},
        jsonModular = {},
        modularWxs = {},
        otherModular = {};
    for (var key in pageData.transforms) {
        if (pageData.transforms[key].type === 'templete') {
            templete[key] = _extends({}, pageData.transforms[key]);
            templete[key].supportType = templete[key].status;
        } else if (pageData.transforms[key].type === 'jsModular') {
            jsModular[key] = _extends({}, pageData.transforms[key]);
            jsModular[key].supportType = jsModular[key].status;
        } else if (pageData.transforms[key].type === 'wxssModular') {
            wxssModular[key] = _extends({}, pageData.transforms[key]);
            wxssModular[key].supportType = wxssModular[key].status;
        } else if (pageData.transforms[key].type === 'jsonModular') {
            jsonModular[key] = _extends({}, pageData.transforms[key]);
            jsonModular[key].supportType = jsonModular[key].status;
        } else if (pageData.transforms[key].type === 'otherModular') {
            otherModular[key] = _extends({}, pageData.transforms[key]);
            otherModular[key].supportType = otherModular[key].status;
        } else if (pageData.transforms[key].type === 'modularWxs') {
            modularWxs[key] = _extends({}, pageData.transforms[key]);
            modularWxs[key].supportType = modularWxs[key].status;
        }
    }
    fileDetails(templete, 'templete');
    fileDetails(jsModular, 'jsModular');
    fileDetails(wxssModular, 'wxssModular');
    fileDetails(jsonModular, 'jsonModular');
    fileDetails(otherModular, 'otherModular');
    fileDetails(modularWxs, 'modularWxs');
}

function fileInfo() {
    var mask = document.querySelector('.mask');
    var maskTitle = mask.querySelector('.title');
    var pagePath = document.querySelectorAll('.file-path');
    var tableBox = mask.querySelector(".table-box");
    pagePath.forEach(function (ele) {
        ele.addEventListener('click', function () {
            if ('templete' === pageData.transforms[ele.innerText].type) {
                tableBox.querySelector('#col1').innerText = '组件名';
                tableBox.querySelector('#col2').innerText = '不支持';
            } else if ('jsModular' === pageData.transforms[ele.innerText].type) {
                tableBox.querySelector('#col1').innerText = 'api/生命周期';
                tableBox.querySelector('#col2').innerText = '不支持的部分(参数/返回值)';
            } else if ('otherModular' === pageData.transforms[ele.innerText].type) {
                if (ele.innerText.indexOf('.js') !== -1) {
                    tableBox.querySelector('#col1').innerText = 'api/生命周期';
                    tableBox.querySelector('#col2').innerText = '不支持的部分(参数/返回值)';
                } else {
                    tableBox.querySelector('#col1').style = "display:none";
                    tableBox.querySelector('#col2').style = "display:none";
                    tableBox.querySelector('#col3').style = "display:none";
                }
            } else if ('jsonModular' === pageData.transforms[ele.innerText].type) {
                tableBox.querySelector('#col1').innerText = '属性名称';
                tableBox.querySelector('#col2').innerText = '支持程度';
                if (ele.innerText === 'app.json') {
                    tableBox.querySelector('#col2').innerText = '不支持子属性';
                }
            }

            maskTitle.innerText = ele.innerText;
            var myTbody = tableBox.querySelector('tbody');
            if (pageData.transforms[ele.innerText].components.length > 0) {
                pageData.transforms[ele.innerText].components.forEach(function (item) {
                    var newtr = document.createElement('tr');
                    var newtrStr = "";
                    var opations = "";
                    item.attrs.forEach(function (its) {

                        opations += '<div class="opation-item">\n                                        ' + its + '\n                                    </div>';
                    });

                    if (item.doc) {
                        if (item.doc !== '无') {
                            newtrStr += '<td class="name">\n                                    ' + item.name + '\n                                </td>\n                                <td class="opations">\n                                    ' + opations + '\n                                </td>\n                                <td class="result" path="' + item.doc + '">\n                                    \u5E2E\u52A9\u6587\u6863\n                                </td>';
                        } else {
                            newtrStr += '<td class="name">\n                                    ' + item.name + '\n                                </td>\n                                <td class="opations">\n                                    ' + opations + '\n                                </td>\n                                <td class="unsupported" path="">\n                                    \u6682\u4E0D\u652F\u6301\uFF0C\u8BF7\u5C1D\u8BD5\u5176\u4ED6\u5B9E\u73B0\u65B9\u5F0F\n                                </td>';
                        }
                    } else {
                        newtrStr += '<td class="name">\n                                    ' + item.name + '\n                                </td>\n                                <td class="opations">\n                                    ' + opations + '\n                                </td>\n                                <td class="unsupported">\n                                   \u6682\u4E0D\u652F\u6301\uFF0C\u8BF7\u5C1D\u8BD5\u5176\u4ED6\u5B9E\u73B0\u65B9\u5F0F\n                                </td>';
                    }
                    newtr.innerHTML = newtrStr;

                    myTbody.appendChild(newtr);
                });
            } else {
                var newtrStr = "";
                var newtr = document.createElement('tr');
                newtrStr = '<td class="name" colspan="3">\n                                \u5B8C\u6574\u652F\u6301\n                                </td>';
                newtr.innerHTML = newtrStr;
                myTbody.appendChild(newtr);
            }

            mask.classList.remove('hide');

            var helpDoc = mask.querySelectorAll('.result');
            helpDoc.forEach(function (ele) {
                ele.addEventListener('click', function () {
                    var path = this.getAttribute("path");
                    window.open(path);
                });
            });
        });
    });
}

function maskClose() {
    var mask = document.querySelector('.mask');
    var tableBox = mask.querySelector(".table-box");
    mask.querySelector('.close').addEventListener('click', function () {
        tableBox.querySelector("table").innerHTML = '<thead>\n                                                        <tr>\n                                                            <th class="name header" id="col1">\u7EC4\u4EF6\u540D</th>\n                                                            <th class="opations header"  id="col2">\u4E0D\u652F\u6301</th>\n                                                            <th class="result header"  id="col3">\u5982\u4F55\u89E3\u51B3</th>\n                                                        </tr>\n                                                    </thead>\n                                                    <tbody>\n                                                    </tbody>';
        mask.classList.add('hide');
    });
}

function projectResult() {
    var myProject = document.querySelector("#project");
    var surroundings = {};
    var tableInfo = "";
    for (var key in pageData.surroundings) {

        surroundings[pageData.surroundings[key].name] = pageData.surroundings[key].val;
    }
    pageData.tableInfo = Object.assign(pageData.tableInfo, surroundings);

    Object.keys(pageData.tableInfo).forEach(function (key) {
        tableInfo = tableInfo + ('<tr>\n                                    <td class="text-left">\n                                        ' + key + '\n                                    </td>\n                                    <td class="text-right">\n                                        ' + pageData.tableInfo[key] + '\n                                    </td>\n                                </tr>');
    });
    myProject.querySelector("tbody").innerHTML = tableInfo;
}

function footerMade() {
    document.querySelector(".foot-cont").innerText = 'Power by Antmove v' + pageData.toolVs;
}
