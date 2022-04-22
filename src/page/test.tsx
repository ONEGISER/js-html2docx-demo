import { Button } from 'antd';
import { useEffect, useState } from 'react';
import htmlDocx from 'html-docx-js/dist/html-docx';
import saveAs from 'file-saver';
import * as echarts from "echarts"
const PPage = (props: any) => {
    const [canvas, setCanvas] = useState("")
    useEffect(() => {
        let base = +new Date(1968, 9, 3);
        let oneDay = 24 * 3600 * 1000;
        let date = [];
        let data = [Math.random() * 300];
        for (let i = 1; i < 20000; i++) {
            var now = new Date((base += oneDay));
            date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
            data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
        }
        const option = {
            color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
            title: {
                text: 'Gradient Stacked Area Chart'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'Line 1',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(128, 255, 165)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(1, 191, 236)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [140, 232, 101, 264, 90, 340, 250]
                },
                {
                    name: 'Line 2',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(0, 221, 255)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(77, 119, 255)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [120, 282, 111, 234, 220, 340, 310]
                },
                {
                    name: 'Line 3',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(55, 162, 255)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(116, 21, 219)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [320, 132, 201, 334, 190, 130, 220]
                },
                {
                    name: 'Line 4',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(255, 0, 135)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(135, 0, 157)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [220, 402, 231, 134, 190, 230, 120]
                },
                {
                    name: 'Line 5',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    label: {
                        show: true,
                        position: 'top'
                    },
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(255, 191, 0)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(224, 62, 76)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [220, 302, 181, 234, 210, 290, 150]
                }
            ]
        };
        const charts = echarts.init(document.getElementById("echarts"))
        charts.setOption(option)
        console.log(canvas);
        setTimeout(() => {
            const canvas = charts.getDataURL({ type: "png" })
            setCanvas(canvas)
        }, 1000)

        return componentWillUnmount
    }, [])

    function componentWillUnmount() {

    }

    function exportDocx() {
        const element = document.getElementById("test")
        // const content = element.innerHTML
        // // const content = ` <div class="ant-table-wrapper"><div class="ant-spin-nested-loading"><div class="ant-spin-container"><div class="ant-table" style="border:1px solid red;"><div class="ant-table-container"><div class="ant-table-content"><table style="table-layout: auto;"><colgroup></colgroup><thead class="ant-table-thead"><tr><th class="ant-table-cell">Name</th><th class="ant-table-cell">Age</th><th class="ant-table-cell">Address</th><th class="ant-table-cell">Tags</th><th class="ant-table-cell">Action</th></tr></thead><tbody class="ant-table-tbody"><tr data-row-key="1" class="ant-table-row ant-table-row-level-0"><td class="ant-table-cell"><a>John Brown</a></td><td class="ant-table-cell">32</td><td class="ant-table-cell">New York No. 1 Lake Park</td><td class="ant-table-cell"><span class="ant-tag ant-tag-green">NICE</span><span class="ant-tag ant-tag-geekblue">DEVELOPER</span></td><td class="ant-table-cell"><div class="ant-space ant-space-horizontal ant-space-align-center" style="gap: 16px;"><div class="ant-space-item" style=""><a>Invite John Brown</a></div><div class="ant-space-item"><a>Delete</a></div></div></td></tr><tr data-row-key="2" class="ant-table-row ant-table-row-level-0"><td class="ant-table-cell"><a>Jim Green</a></td><td class="ant-table-cell">42</td><td class="ant-table-cell">London No. 1 Lake Park</td><td class="ant-table-cell"><span class="ant-tag ant-tag-volcano">LOSER</span></td><td class="ant-table-cell"><div class="ant-space ant-space-horizontal ant-space-align-center" style="gap: 16px;"><div class="ant-space-item" style=""><a>Invite Jim Green</a></div><div class="ant-space-item"><a>Delete</a></div></div></td></tr><tr data-row-key="3" class="ant-table-row ant-table-row-level-0"><td class="ant-table-cell"><a>Joe Black</a></td><td class="ant-table-cell">32</td><td class="ant-table-cell">Sidney No. 1 Lake Park</td><td class="ant-table-cell"><span class="ant-tag ant-tag-green">COOL</span><span class="ant-tag ant-tag-geekblue">TEACHER</span></td><td class="ant-table-cell"><div class="ant-space ant-space-horizontal ant-space-align-center" style="gap: 16px;"><div class="ant-space-item" style=""><a>Invite Joe Black</a></div><div class="ant-space-item"><a>Delete</a></div></div></td></tr></tbody></table></div></div></div><ul class="ant-pagination ant-table-pagination ant-table-pagination-right" unselectable="unselectable"><li title="上一页" class="ant-pagination-prev ant-pagination-disabled" aria-disabled="true"><button class="ant-pagination-item-link" type="button" tabindex="-1" disabled=""><span role="img" aria-label="left" class="anticon anticon-left"><svg viewBox="64 64 896 896" focusable="false" data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg></span></button></li><li title="1" class="ant-pagination-item ant-pagination-item-1 ant-pagination-item-active" tabindex="0"><a rel="nofollow">1</a></li><li title="下一页" class="ant-pagination-next ant-pagination-disabled" aria-disabled="true"><button class="ant-pagination-item-link" type="button" tabindex="-1" disabled=""><span role="img" aria-label="right" class="anticon anticon-right"><svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg></span></button></li></ul></div></div></div>`;
        // const page = `<!DOCTYPE html><html>${content}</html>`
        // const converted = htmlDocx.asBlob(page);
        // // 用 FielSaver.js里的保存方法 进行输出
        // saveAs(converted, 'test.docx');
        const regularImages = element.querySelectorAll("img");
        //获取canvas 
        const canvas = document.createElement('canvas');
        // 对应的CanvasRenderingContext2D对象(画笔) 
        const ctx = canvas.getContext('2d');
        let index = 0;
        [].forEach.call(regularImages, function (imgElement) {
            // 图片跨域问题
            const img = new Image() //创建新的图片对象 
            // 设置跨区标识 
            img.setAttribute("crossOrigin", 'Anonymous');
            // 图片添加时间戳 禁止磁盘加载 解决跨域问题 跨域前提 图片服务器返回有跨域标识 Access-Control-Allow-Origin: *
            const src = imgElement.getAttribute("src")
            if (src.indexOf("data:image") > -1) {
                index++;
            } else {
                img.src = src + "?t=" + new Date().getTime();
                // 等待图片加载完毕
                img.onload = function () {
                    //图片加载完，再draw 和 toDataURL
                    // preparing canvas for drawing
                    canvas.width = imgElement.width;
                    canvas.height = imgElement.height;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                    ctx.drawImage(img, 0, 0);
                    // 如果图片不支持跨域 这里就会失败 可以做提示
                    const base64 = canvas.toDataURL("image/png");
                    imgElement.setAttribute('src', base64);

                    index++;
                    if (index === regularImages.length) {
                        // 当图片全部加载完毕可以执行生成 doc
                        const str1 = `<!DOCTYPE html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns:m="http://schemas.microsoft.com/office/2004/12/omml"= xmlns="http://www.w3.org/TR/REC-html40"><head>
                        <style><!-- @page{mso-footer: f1;mso-header: h1;}@page Section1{}div.Section1 { page:Section1; }p.MsoHeader,p.MsoFooter { border:0px; text-align:center}table#tableHdFt{margin:0in 0in 0in 900in;width:1px;height:1px;}--></style>
                        <xml><w:WordDocument><w:View>Print</w:View><w:Zoom>100</w:Zoom><w:DoNotOptimizeForBrowser/></w:WordDocument></xml>
                        </head><body><div class=Section1>`


                        const str2 = `<table id=\'tableHdFt\' border=\'0\' cellspacing=\'0\' cellpadding=\'0\'>
                        <tr style=\'\'>
                        <td style=\'height:1pt;width:1px;overflow:hidden;mso-height-rule:exactly;mso-width-rule:exactly;\'>
                        <div style=\'mso-element:footer; text-align:center;position:relative;z-index:-1\' id=f1 >
                        	<!--[if supportFields]>
                        		<span class=MsoPageNumber>
                        			<span style=\'mso-element:field-begin\'></span>PAGE<span style=\'mso-element:field-end\'></span>/<span style=\'mso-element:field-begin\'></span>NUMPAGES</span><span style=\'mso-element:field-end\'></span>
                        		</span>
                        	<![endif]-->
                        </div>
                        <div style=\'mso-element:header; text-align:center;position:relative;z-index:-1\' id=h1>
                        	<span style="text-align:center; font-size:24px; font-weight:bold; font-family:宋体"> 2021 年 11月份微信汇款<br>合计:11元</span>
                        </div>
                        </td></tr></table>
                        </div></body>
                        </html>`

                        canvas.remove();
                        const content = `${str1}<body>${element.innerHTML}${str2}</body>`
                        const converted = htmlDocx.asBlob(content);
                        saveAs(converted, 'test.docx');
                    }
                };
            }
        })

    }
    const thStyle = { border: "1px solid" }
    return <div style={{ width: "100%", height: "100%", position: "relative" }} >
        <div id="test">
            <h1 style={{ color: "red", fontSize: 30 }}>
                一、概述
            </h1>
            <p style={{ textIndent: 28, fontSize: 14 }}>
               我是概述。
            </p>
            <h2>
                1.1基本状况
            </h2>
            <p style={{ textIndent: 28, fontSize: 14 }}>
                我是基本情况。
            </p>
            <table style={{ justifyContent: "center", width: "100%", borderCollapse: "collapse" }} cellSpacing={"0"} cellPadding={"0"}>
                <tr style={{ justifyContent: "center" }} >
                    <th colSpan={6}>干线检测里程统计表    表1-1</th></tr>
                <tr >
                    <th style={thStyle}>序号</th>
                    <th style={thStyle}>线路编号</th>
                    <th style={thStyle}>线路名称</th>
                    <th style={thStyle}>起点桩号</th>
                    <th style={thStyle}>终点桩号</th>
                    <th style={thStyle}>里程(km)</th>
                </tr>
                <tr>
                    <td rowSpan={3} style={thStyle}>1</td>
                    <td rowSpan={3} style={thStyle}>G24</td>
                    <td rowSpan={3} style={thStyle}>例子-马关</td>
                    <td style={thStyle}>K204+944</td>
                    <td style={thStyle}>K222+175</td>
                    <td rowSpan={3} style={thStyle}>622.017</td>
                </tr>
                <tr>
                    <td style={thStyle}>K256+171</td>
                    <td style={thStyle}>K121+800</td>
                </tr>
                <tr>
                    <td style={thStyle}>K1266+600	</td>
                    <td style={thStyle}>K252+757</td>
                </tr>
            </table>
            <div style={{ width: "100%" }}>
                <div style={{ width: "50%", float: "left" }}>
                    <img src={require("./imgs/1.jpg").default}></img>
                </div>
                <div style={{ width: "50%", float: "left" }}>
                    <img src={require("./imgs/2.jpg").default}></img>
                </div>
            </div>

            <h2>
                我是标题2
            </h2>

            <h3>
                我是标题3
            </h3>

            <div id="echarts" style={{ width: 500, height: 300, position: "relative", display: "none" }}>

            </div>
            {canvas && <img src={canvas}></img>}
        </div>

        <div style={{ position: "absolute", top: 10, right: 10 }}>
            <Button type="primary" onClick={exportDocx}>导出</Button>
        </div>
    </div >
}
export default PPage