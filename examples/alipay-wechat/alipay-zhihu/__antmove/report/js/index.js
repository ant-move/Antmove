/* eslint-disable no-undef */
window.onload = function () {
    pageLoad(); // 初始化页面

    fileInfo(); // 页面转换详情

    maskClose(); // 关闭弹窗


};



function pageLoad () {
    projectResult();
    concepteleMade(); // 汇总
    temelatetable();
    openingMade();
    supportiveness();
    footerMade();
}
// 汇总
function concepteleMade () {
    let conceptele = '';
    conceptele = `<div class="itembox">
                    <div class="topname">总数</div>
                    <div class="botval">${pageData.concept['modelAll']}</div>
                </div>
                <div class="itembox">
                    <div class="topname">完全转换<i class="iconfont icon-zhengque"></i></div>
                    <div class="botval">${pageData.concept['completely']}</div>
                </div>
                <div class="itembox">
                    <div class="topname">部分转换<i class="iconfont icon-warning"></i></div>
                    <div class="botval">${pageData.concept['partial']}</div>
                </div>
                <div class="itembox">
                    <div class="topname">不支持<i class="iconfont icon-cuowu"></i></div>
                    <div class="botval">${pageData.concept['notsupport']}</div>
                </div>`;
    const circleBox = document.querySelector('.rep-allbox');
    circleBox.innerHTML = conceptele;
}

function fileDetails (templete, type) {
    const liItemObj = {
        templete: "模板文件",
        jsonModular: "json文件",
        otherModular: "其他文件",
        jsModular: "脚本文件",
        wxssModular: "样式文件",
        modularWxs: "自定义脚本",
        unsupported: "不支持文件",
        supportPart: "部分支持"
    };
    let keyArr = Object.keys(templete);
    if (keyArr.length === 0) {
        return false;
    }
    const tabBox = document.querySelector('.tab-box');
    const ulBox = tabBox.querySelector(".ul");
    const firstLi = ulBox.querySelectorAll("li")[0];
    if (firstLi) {
        firstLi.classList.add('actived');
    }
    const liItem = document.createElement("li");
    liItem.classList.add("tab-item");
    liItem.setAttribute("data-type", type);
    liItem.innerHTML = liItemObj[type];

    ulBox.appendChild(liItem);
    const cardBox = tabBox.querySelector('.card-box');
    const firstCard = cardBox.querySelectorAll(".table-info")[0];
    if (firstCard) {
        firstCard.classList.add('actived');
    }
    const tableInfo = document.createElement("div");
    tableInfo.classList.add('table-info');
    tableInfo.classList.add(type);

    const table = document.createElement("table");
    table.classList.add("table");
    const thead = document.createElement("thead");
    thead.classList.add("table-head");
    thead.innerHTML = `<tr class="pages">
                            <th>文件路径</th>
                            <th>转换结果</th>
                        </tr>`;
    const tbody = document.createElement("tbody");
    let tbodyData = "";
    let unsupportedNum = 0;

    // 排序
    let warningArr = [];
    let errorArr = [];
    let successArr = [];
    keyArr.forEach( key => {
        if (templete[key].status === 1) {
            successArr.push(key);
        } else if (templete[key].status === 2) {
            warningArr.push(key);
        } else if (templete[key].status === 3) {
            errorArr.push(key);
        }
    });

    keyArr = errorArr.concat(warningArr).concat(successArr);

    let spanColor = 'warn';
    keyArr.forEach(key => {
        let icon = "";
        if (templete[key].status === 1) {
            icon = '<i class="iconfont icon-zhengque"></i>';
        } else if (templete[key].status === 2) {
            icon = '<i class="iconfont icon-warning"></i>';
        } else if (templete[key].status === 3) {
            icon = '<i class="iconfont icon-cuowu"></i>';
        }

        tbodyData = tbodyData + `<tr>
                        <td class="file-path">
                            ${key}
                        </td>
                        
                        <td class="apges">
                            ${icon}
                        </td>
                    </tr>`;

        if (templete[key].supportType && templete[key].supportType !== 1) {
            unsupportedNum++;
        }

        if (templete[key].supportType === 3) {
            spanColor = "err";
        }

    });

    tbody.innerHTML = tbodyData;
    const span = document.createElement("span");
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

    liItem.addEventListener("click", () => {
        ulBox.querySelectorAll('li').forEach(ele => {
            ele.classList.remove('actived');

        });

        cardBox.querySelectorAll(".table-info").forEach(ele => {
            ele.classList.remove('actived');

        });

        let cardName = liItem.getAttribute("data-type");
        cardBox.querySelector(`.${cardName}`).classList.add("actived");
        liItem.classList.add("actived");
    });
}


function openingMade () {
    const openingData = pageData.opening;
    const keyArr = Object.keys(openingData);
    if (keyArr.length === 0) {
        return false;
    }
    const tabBox = document.querySelector('.tab-box');
    const ulBox = tabBox.querySelector(".ul");
    const firstLi = ulBox.querySelectorAll("li")[0];
    if (firstLi) {
        firstLi.classList.add('actived');
    }
    const liItem = document.createElement("li");

    const span = document.createElement("span");
    span.classList.add('num');
    liItem.classList.add("tab-item");
    liItem.setAttribute("data-type", 'openability');
    liItem.innerHTML = '开放能力';

    ulBox.appendChild(liItem);
    const cardBox = tabBox.querySelector('.card-box');
    const firstCard = cardBox.querySelectorAll(".table-info")[0];
    if (firstCard) {
        firstCard.classList.add('actived');
    }
    const tableInfo = document.createElement("div");
    tableInfo.classList.add('table-info');
    tableInfo.classList.add('openability');

    const table = document.createElement("table");
    table.classList.add("table");
    const thead = document.createElement("thead");
    thead.classList.add("table-head");
    thead.innerHTML = `<tr>
                            <th>能力名称</th>
                            <th>页面路径</th>
                            <th>如何解决</th>
                            <th>转换结果</th>
                        </tr>`;
    const tbody = document.createElement("tbody");
    let tbodyData = "";

    let unsupportedNum = 0;
    let spanColor = 'warn';
    keyArr.forEach(key => {
        let icon = "";
        if (openingData[key].status === 1) {
            icon = '<i class="iconfont icon-zhengque"></i>';
        } else if (openingData[key].status === 2) {
            icon = '<i class="iconfont icon-warning"></i>';
        } else if (openingData[key].status === 3) {
            icon = '<i class="iconfont icon-cuowu"></i>';
        }
        tbodyData = tbodyData + `<tr>
                        <td>${key}</td>
                        <td>${openingData[key].pathArr.join("、")}</td>
                        <td>
                            <div class="show-instruct" data-path="${openingData[key].docpath}">
                                查看支付宝相关能力
                            </div>
                        </td>
                        
                        <td class="apges">
                            ${icon}
                        </td>
                    </tr>`;
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
        ulBox.querySelectorAll('li').forEach(ele => {
            ele.classList.remove('actived');

        });

        cardBox.querySelectorAll(".table-info").forEach(ele => {
            ele.classList.remove('actived');

        });

        cardBox.querySelector(`.openability`).classList.add("actived");
        liItem.classList.add("actived");

        cardBox.querySelectorAll('.show-instruct').forEach(ele => {
            ele.addEventListener("click", () => {
                const path = ele.getAttribute("data-path");
                window.location.href=path;
            });
        });

    });
}

function supportiveness () {
    const supportPart = {},
        unsupported = {};
    Object.keys(pageData.transforms).forEach(key => {
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

function temelatetable () {
    const templete = {},
        jsModular = {},
        wxssModular = {},
        jsonModular = {},
        modularWxs = {},
        otherModular = {};
    for (let key in pageData.transforms) {
        if (pageData.transforms[key].type === 'templete') {
            templete[key] = { ...pageData.transforms[key] };
            templete[key].supportType = templete[key].status;
        } else if (pageData.transforms[key].type === 'jsModular') {
            jsModular[key] = { ...pageData.transforms[key] };
            jsModular[key].supportType = jsModular[key].status;
        } else if (pageData.transforms[key].type === 'wxssModular') {
            wxssModular[key] = { ...pageData.transforms[key] };
            wxssModular[key].supportType = wxssModular[key].status;
        } else if (pageData.transforms[key].type === 'jsonModular') {
            jsonModular[key] = { ...pageData.transforms[key] };
            jsonModular[key].supportType = jsonModular[key].status;

        } else if (pageData.transforms[key].type === 'otherModular') {
            otherModular[key] = { ...pageData.transforms[key] };
            otherModular[key].supportType = otherModular[key].status;
        } else if (pageData.transforms[key].type === 'modularWxs') {
            modularWxs[key] = { ...pageData.transforms[key] };
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

function fileInfo () {
    const mask = document.querySelector('.mask');
    const maskTitle = mask.querySelector('.title');
    const pagePath = document.querySelectorAll('.file-path');
    const tableBox = mask.querySelector(".table-box");
    pagePath.forEach(ele => {
        ele.addEventListener('click', () => {
            if ('templete' === pageData.transforms[ele.innerText].type) {
                tableBox.querySelector('#col1').innerText = '组件名';
                tableBox.querySelector('#col2').innerText = '不支持属性';

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
            const myTbody = tableBox.querySelector('tbody');
            if (pageData.transforms[ele.innerText].components.length > 0) {
                pageData.transforms[ele.innerText].components.forEach(item => {
                    const newtr = document.createElement('tr');
                    let newtrStr = "";
                    let opations = "";
                    item.attrs.forEach(its => {
                        opations += `<div class="opation-item">
                                        ${its}
                                    </div>`;
                    });
                    newtrStr += `<td class="name">
                                    ${item.name}
                                </td>
                                <td class="opations">
                                    ${opations}
                                </td>
                                <td class="result" path="${item.doc}">
                                    帮助文档
                                </td>`;
                    newtr.innerHTML = newtrStr;

                    myTbody.appendChild(newtr);
                });
            } else {
                let newtrStr = "";
                let newtr = document.createElement('tr');
                newtrStr = `<td class="name" colspan="3">
                                完整支持
                                </td>`;
                newtr.innerHTML = newtrStr;
                myTbody.appendChild(newtr);
            }


            mask.classList.remove('hide');

            const helpDoc = mask.querySelectorAll('.result');
            helpDoc.forEach(ele => {
                ele.addEventListener('click', function () {
                    let path = this.getAttribute("path");
                    window.open(path);
                });
            });
        });
    });
}

function maskClose () {
    const mask = document.querySelector('.mask');
    const tableBox = mask.querySelector(".table-box");
    mask.querySelector('.close').addEventListener('click', () => {
        tableBox.querySelector("table").innerHTML = `<thead>
                                                        <tr>
                                                            <th class="name header" id="col1">组件名</th>
                                                            <th class="opations header"  id="col2">不支持属性</th>
                                                            <th class="result header"  id="col3">如何解决</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                    </tbody>`;
        mask.classList.add('hide');
    });
}

function projectResult () {
    const myProject = document.querySelector("#project");
    const surroundings = {};
    let tableInfo = "";
    for (let key in pageData.surroundings) {

        surroundings[pageData.surroundings[key].name] = pageData.surroundings[key].val;
    }
    pageData.tableInfo = Object.assign(pageData.tableInfo, surroundings);

    Object.keys(pageData.tableInfo).forEach(key => {
        tableInfo = tableInfo + `<tr>
                                    <td class="text-left">
                                        ${key}
                                    </td>
                                    <td class="text-right">
                                        ${pageData.tableInfo[key]}
                                    </td>
                                </tr>`;



    });
    myProject.querySelector("tbody").innerHTML = tableInfo;
}

function footerMade () {
    document.querySelector(".foot-cont").innerText = `Power by antmove v${pageData.toolVs}`;
}