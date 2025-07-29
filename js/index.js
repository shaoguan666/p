/**
 * Created by Administrator on 2017/5/17.
 */

$(function(){
    // index();
    $(".index_nav ul li").each(function(index){
        $(this).click(function(){
            $(this).addClass("nav_active").siblings().removeClass("nav_active");
            $(".index_tabs .inner").eq(index).fadeIn().siblings("div").stop().hide();
            if(index==1){
                yingXiao();
            }else if(index==2){
                shouRu();
            }else if(index==3){
                AnQuan();
            }else if(index==4){
                user();
            }else if(index==5){
                manage();
            }
        })
    });
    $(".tabs ul li").each(function(index){
       $(this).click(function(){
           $(".tabs ul li div .div").removeClass("tabs_active");
           $(this).find("div .div").addClass("tabs_active");
           $(".tabs_map>div").eq(index).fadeIn().siblings("div").stop().hide();
       })
   });
    $(".middle_top_bot ul li").each(function(){
        $(this).click(function(){
            $(".middle_top_bot ul li").removeClass("middle_top_bot_active");
            $(this).addClass("middle_top_bot_active");
        })
    });

});

function user(){
    //游客来源分析
    $(function(){
        var myChart = echarts.init($("#container1")[0]);
        var option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                x: 'center',
                y:"16",
                data: ['本地用户','外地用户','新注册用户','活跃用户','非活跃用户'],
                textStyle:{
                    color:"#e9ebee"
                }
            },
            series : [
                {
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    name: '',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {
                            value:500,
                            name:'本地用户',
                            itemStyle:{
                                normal:{
                                    color:"#2864ab"
                                }
                            }
                        },
                        {
                            value:300,
                            name:'外地用户',
                            itemStyle:{
                                normal:{
                                    color:"#1afffd"
                                }
                            }
                        },
                        {
                            value:150,
                            name:'新注册用户',
                            itemStyle:{
                                normal:{
                                    color:"#2e7cff"
                                }
                            }
                        }
                        ,
                        {
                            value:80,
                            name:'活跃用户',
                            itemStyle:{
                                normal:{
                                    color:"#ffcb89"
                                }
                            }
                        }
                        ,
                        {
                            value:50,
                            name:'非活跃用户',
                            itemStyle:{
                                normal:{
                                    color:"#005ea1"
                                }
                            }
                        }

                    ]
                }
            ]
        };



        myChart.setOption(option);
    });

//游客性别分析
    $(function(){
        var myChart = echarts.init($("#container2")[0]);
        var option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                y:"16",
                data: ['男性用户','女性用户'],
                textStyle:{
                    color:"#e9ebee"
                }
            },
            series : [
                {
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    name: '',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:70, name:'男性用户',
                            itemStyle:{
                                normal:{
                                    color:"#2865aa"
                                }
                            }},
                        {value:30, name:'女性用户',
                            itemStyle:{
                                normal:{
                                    color:"#ff81cb"
                                }
                            }}
                    ]
                }
            ]
        };



        myChart.setOption(option);
    });

//游客年龄分析
    $(function(){
        var myChart = echarts.init($("#container3")[0]);
        var option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'right',
                y:"16",
                data: ['18-24岁','25-34岁','35-44岁','45-54岁','55岁以上'],
                textStyle:{
                    color:"#e9ebee"
                }
            },
            series : [
                {
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    name: '',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:150, name:'18-24岁',
                            itemStyle:{
                                normal:{
                                    color:"#45c0ff"
                                }
                            }},
                        {value:300, name:'25-34岁',
                            itemStyle:{
                                normal:{
                                    color:"#e15828"
                                }
                            }},
                        {value:250, name:'35-44岁',
                            itemStyle:{
                                normal:{
                                    color:"#005ea1"
                                }
                            }},
                        {value:100, name:'45-54岁',
                            itemStyle:{
                                normal:{
                                    color:"#ff81cb"
                                }
                            }},
                        {value:50, name:'55岁以上',
                            itemStyle:{
                                normal:{
                                    color:"#2e7cff"
                                }
                            }}
                    ]
                }
            ]
        };


        myChart.setOption(option);
    });

//散客——团队分析
    $(function(){
        var myChart = echarts.init(document.getElementById('container4'));
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            //legend: {
            //    data:['散客（万人）','团队（万人）'],
            //    y:'20',
            //    textStyle: { fontWeight: 'bold', color: '#a4a7ab' }
            //},
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }
            ],
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'总登录次数',
                    type:'bar',
                    stack: '总登录次数',
                    barWidth:'30',
                    data:[1500, 1600, 1400, 1700, 1800, 1900, 2000, 1950, 1850, 1750, 1650, 1550],
                    itemStyle:{
                        normal:{
                            color:"#1afffd"
                        }
                    }
                },
                {
                    name:'活跃用户登录次数',
                    type:'bar',
                    stack: '总登录次数',
                    data:[1000, 1100, 900, 1200, 1300, 1400, 1500, 1450, 1350, 1250, 1150, 1050],
                    itemStyle:{
                        normal:{
                            color:"#2e7cff"
                        }
                    }
                }
            ]
        };


        myChart.setOption(option);
    });

//天气游客数据分析
    $(function(){
        var myChart = echarts.init(document.getElementById('container5'));
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            //legend: {
            //    data:['散客人数（万人）','团队人数（万人）'],
            //    textStyle: { fontWeight: 'bold', color: '#a4a7ab' }
            //},
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['正常', '轻度异常', '中度异常', '重度异常'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'正常运行设备数量',
                    type:'bar',
                    data:[1000, 800, 600, 400],
                    itemStyle:{
                        normal:{
                            color:"#2e7cff"
                        }
                    }
                },
                {
                    name:'异常设备数量',
                    type:'bar',
                    stack: '广告',
                    data:[50, 100, 150, 200],
                    itemStyle:{
                        normal:{
                            color:"#0ad5ff"
                        }
                    }
                }
            ]
        };


        myChart.setOption(option);
    });

//游客出行交通方式分析
    $(function(){
        var myChart = echarts.init($("#container6")[0]);
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data:['摄像头','NVR','服务器','交换机','传感器','无人机'],

                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'设备数量',
                    type:'bar',
                    barWidth:'30',
                    data:[1200, 800, 500, 300, 200, 100],
                    itemStyle: {
                        normal: {
                            color:"#0aff6c"
                        }
                    }

                }
            ]
        };
        myChart.setOption(option);
    });

    //不同时间段入园情况
    $(function(){
        var myChart = echarts.init($("#container9")[0]);
        var option = {
            tooltip: {   //提示框，鼠标悬浮交互时的信息提示
                show: true,
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            legend: {
                data: [],
                orient: 'vertical',
                textStyle: { fontWeight: 'bold', color: '#a4a7ab' }
            },

            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['00:00-04:00', '04:00-08:00', '08:00-12:00', '12:00-16:00', '16:00-20:00', '20:00-24:00'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        //rotate:20,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }

            ],
            yAxis: [
                {
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '事件数量',
                    type: 'line',
                    stack: '事件数量',
                    data: [50, 150, 300, 450, 200, 80],
                    itemStyle: {
                        normal: {
                            color: '#02bcbc'
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
    });

//不同月份游客数量情况
    $(function(){
        var myChart = echarts.init($("#container10")[0]);
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],

                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'事件总数',
                    type:'bar',
                    barWidth:'30',
                    data:[100, 120, 150, 180, 200, 220, 250, 230, 210, 190, 170, 150],
                    itemStyle: {
                        normal: {
                            color:"#269fec"
                        }
                    }

                }
            ]
        };
        myChart.setOption(option);
    });

//不同月份游客走势情况
    $(function(){
        var myChart = echarts.init(document.getElementById('container11'));
        var option = {
            tooltip : {
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }

                }
            ],
            series : [
                {
                    name:'处理事件数量',
                    type:'line',
                    stack: '数量',
                    data:[100, 110, 130, 150, 170, 190, 220, 200, 180, 160, 140, 120],
                    itemStyle: {
                        normal: {
                            color:"#e15828"
                        }
                    }
                },
                {
                    name:'未处理事件数量',
                    type:'line',
                    stack: '数量',
                    data:[20, 15, 10, 8, 5, 3, 2, 5, 8, 10, 12, 15],
                    itemStyle:{
                        normal:{
                            color:"#2e7cff"
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    });

//出行方式排行
    $(function(){
        var myChart = echarts.init($("#container12")[0]);
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            xAxis:  {
                type: 'value',
                x:'180',
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#a4a7ab'
                    }
                }
            },
            yAxis: {
                type: 'category',
                data: ['网络摄像机','NVR','服务器','交换机','环境传感器'],
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#a4a7ab'
                    }
                }
            },
            series: [
                {
                    name: '设备数量',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [5000, 3000, 1500, 800, 600],
                    itemStyle: {
                        normal: {
                            color:"#ff7d0a"
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    });

}
function manage(){

//工作人员性别分析
    $(function(){
        var myChart = echarts.init($("#userContainerSex")[0]);
        var option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                y:"16",
                data: ['正常','异常'],
                textStyle:{
                    color:"#e9ebee"
                }
            },
            series : [
                {
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    name: '',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:90, name:'正常',
                            itemStyle:{
                                normal:{
                                    color:"#2865aa"
                                }
                            }},
                        {value:10, name:'异常',
                            itemStyle:{
                                normal:{
                                    color:"#ff81cb"
                                }
                            }}
                    ]
                }
            ]
        };



        myChart.setOption(option);
    });

//工作人员来源分析
    $(function(){
        var myChart = echarts.init($("#userContainerManage")[0]);
        var option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                x: 'center',
                y:"16",
                data:['摄像头', 'NVR', '服务器', '交换机', '传感器', '无人机'],
                textStyle:{
                    color:"#e9ebee"
                }
            },
            series : [
                {
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    name: '',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {
                            value:500,
                            name:'摄像头',
                            itemStyle:{
                                normal:{
                                    color:"#1afffd"
                                }
                            }
                        },
                        {
                            value:300,
                            name:'NVR',
                            itemStyle:{
                                normal:{
                                    color:"#2e7cff"
                                }
                            }
                        },
                        {
                            value:150,
                            name:'服务器',
                            itemStyle:{
                                normal:{
                                    color:"#ffcb89"
                                }
                            }
                        }
                        ,
                        {
                            value:80,
                            name:'交换机',
                            itemStyle:{
                                normal:{
                                    color:"#005ea1"
                                }
                            }
                        }
                        ,
                        {
                            value:50,
                            name:'传感器',
                            itemStyle:{
                                normal:{
                                    color:"#0ad5ff"
                                }
                            }
                        },
                        {
                            value:30,
                            name:'无人机',
                            itemStyle:{
                                normal:{
                                    color:"#feb602"
                                }
                            }
                        }

                    ]
                }
            ]
        };


        myChart.setOption(option);
    });

//工作人员年龄分析
    $(function(){
        var myChart = echarts.init($("#userContainerAge")[0]);
        var option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'right',
                y:"16",
                data: ['正常','轻度异常','中度异常','重度异常','严重故障'],
                textStyle:{
                    color:"#e9ebee"
                }
            },
            series : [
                {
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    name: '',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:600, name:'正常',
                            itemStyle:{
                                normal:{
                                    color:"#0ad5ff"
                                }
                            }},
                        {value:200, name:'轻度异常',
                            itemStyle:{
                                normal:{
                                    color:"#005ea1"
                                }
                            }},
                        {value:100, name:'中度异常',
                            itemStyle:{
                                normal:{
                                    color:"#ffcb89"
                                }
                            }},
                        {value:50, name:'重度异常',
                            itemStyle:{
                                normal:{
                                    color:"#2e7cff"
                                }
                            }},
                        {value:20, name:'严重故障',
                            itemStyle:{
                                normal:{
                                    color:"#1afffd"
                                }
                            }}
                    ]
                }
            ]
        };


        myChart.setOption(option);
    });


//景区个部门出勤情况分析
    $(function(){
        var myChart = echarts.init($("#userContainerAttendance")[0]);
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: function (params) {
                    var tar = params[0];
                    return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                }
            },
            grid:{
              borderWidth:0
            },
            xAxis : [
                {
                    type : 'category',
                    data:['网络摄像机', 'NVR', '服务器', '交换机', '传感器', '无人机'],
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine:{show: false}
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine:{show: false}
                }
            ],
            series : [
                {
                    name:'设备在线率（%）',
                    type:'bar',
                    barWidth:'30',
                    data:[95, 90, 85, 80, 75, 70],
                    itemStyle: {
                        normal: {
                            color:"#1afffd"
                        }
                    }

                }
            ]
        };


        myChart.setOption(option);
    });

//个人出勤率排行
    $(function(){
        var myChart = echarts.init($("#userContainerPersonal")[0]);
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            xAxis:  {
                type: 'value',
                x:'180',
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#a4a7ab'
                    }
                }
            },
            yAxis: {
                type: 'category',
                data: ['摄像头A','NVR-01','服务器C','交换机X','传感器Y'],
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#a4a7ab'
                    }
                }
            },
            series: [
                {
                    name:'设备健康度（%）',
                    type:'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [98, 95, 92, 88, 85],
                    itemStyle: {
                        normal: {
                            color:"#45c0ff"
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    });

//不同月份人员流动情况
    $(function(){
        var myChart = echarts.init(document.getElementById('userContainerFlow'));
        var option = {
            tooltip : {
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }

                }
            ],
            series : [
                {
                    name:'总运行时间(小时)',
                    type:'line',
                    stack: '小时',
                    data:[700, 680, 720, 750, 780, 800, 820, 810, 790, 760, 730, 700],
                    itemStyle: {
                        normal: {
                            color:"#1afffd"
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    });

//景区个部门违规操作分析
    $(function(){
        var myChart = echarts.init($("#userContainerIllegal")[0]);
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data:['网络摄像机', 'NVR', '服务器', '交换机', '传感器', '无人机'],

                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'故障次数（次）',
                    type:'bar',
                    barWidth:'30',
                    data:[10, 5, 2, 8, 3, 1],
                    itemStyle: {
                        normal: {
                            color:"#269fec"
                        }
                    }

                }
            ]
        };
        myChart.setOption(option);
    });

//不同月份各部门被投诉分析
    $(function(){
        var myChart = echarts.init(document.getElementById('userContainerComplaint'));
        var option = {
            tooltip : {
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }

                }
            ],
            series : [
                {
                    name:'网络摄像机故障数',
                    type:'line',
                    stack: '故障数',
                    data:[10, 8, 12, 15, 10, 18, 20, 15, 12, 10, 8, 5],
                    itemStyle: {
                        normal: {
                            color:"#45c0ff"
                        }
                    }
                },
                {
                    name:'NVR故障数',
                    type:'line',
                    stack: '故障数',
                    data:[5, 3, 4, 6, 8, 7, 5, 4, 3, 2, 1, 3],
                    itemStyle: {
                        normal: {
                            color:"#0ad5ff"
                        }
                    }
                },
                {
                    name:'服务器故障数',
                    type:'line',
                    stack: '故障数',
                    data:[2, 1, 3, 2, 4, 3, 2, 1, 2, 1, 0, 1],
                    itemStyle: {
                        normal: {
                            color:"#005ea1"
                        }
                    }
                },
                {
                    name:'交换机故障数',
                    type:'line',
                    stack: '故障数',
                    data:[1, 2, 1, 0, 1, 2, 1, 0, 1, 0, 0, 1],
                    itemStyle: {
                        normal: {
                            color:"#ffcb89"
                        }
                    }
                },
                {
                    name:'传感器故障数',
                    type:'line',
                    stack: '故障数',
                    data:[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                    itemStyle: {
                        normal: {
                            color:"#2e7cff"
                        }
                    }
                },
                {
                    name:'无人机故障数',
                    type:'line',
                    stack: '故障数',
                    data:[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                    itemStyle: {
                        normal: {
                            color:"#1afffd"
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    });

//员工奖惩分析
    $(function(){
        var myChart = echarts.init(document.getElementById('userContainerPrize'));
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            //legend: {
            //    data:['散客人数（万人）','团队人数（万人）'],
            //    textStyle: { fontWeight: 'bold', color: '#a4a7ab' }
            //},
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['摄像头', 'NVR', '服务器', '交换机', '传感器', '无人机','总计'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'正常运行时间（小时）',
                    type:'bar',
                    data:[720, 710, 700, 690, 680, 670, 700],
                    itemStyle:{
                        normal:{
                            color:"#1afffd"
                        }
                    }
                },
                {
                    name:'故障时间（小时）',
                    type:'bar',
                    stack: '广告',
                    data:[5, 10, 15, 8, 12, 10, 10],
                    itemStyle:{
                        normal:{
                            color:"#2e7cff"
                        }
                    }
                }
            ]
        };


        myChart.setOption(option);
    });

//设备故障原因分析
    $(function(){
        var myChart = echarts.init(document.getElementById('userContainerReason'));
        var option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['硬件故障','软件故障','网络问题','人为操作','环境因素'],
                textStyle:{
                    color:"#e9ebee"
                }
            },
            series : [
                {
                    name: '故障原因',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:400, name:'硬件故障',
                            itemStyle:{
                                normal:{
                                    color:"#1afffd"
                                }
                            }},
                        {value:200, name:'软件故障',
                            itemStyle:{
                                normal:{
                                    color:"#2e7cff"
                                }
                            }},
                        {value:100, name:'网络问题',
                            itemStyle:{
                                normal:{
                                    color:"#ffcb89"
                                }
                            }},
                        {value:50, name:'人为操作',
                            itemStyle:{
                                normal:{
                                    color:"#005ea1"
                                }
                            }},
                        {value:30, name:'环境因素',
                            itemStyle:{
                                normal:{
                                    color:"#45c0ff"
                                }
                            }}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    });

//故障处理情况分析
    $(function(){
        var myChart = echarts.init(document.getElementById('userContainerHandle'));
        var option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'right',
                data: ['已修复','待处理','处理中','无法修复'],
                textStyle:{
                    color:"#e9ebee"
                }
            },
            series : [
                {
                    name: '处理情况',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:500, name:'已修复',
                            itemStyle:{
                                normal:{
                                    color:"#2e7cff"
                                }
                            }},
                        {value:100, name:'待处理',
                            itemStyle:{
                                normal:{
                                    color:"#ffcb89"
                                }
                            }},
                        {value:50, name:'处理中',
                            itemStyle:{
                                normal:{
                                    color:"#2864ab"
                                }
                            }},
                        {value:20, name:'无法修复',
                            itemStyle:{
                                normal:{
                                    color:"#e15828"
                                }
                            }}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    });
}

function yingXiao(){
// 营销分析
// 24小时购买时间分析
    $(function(){
        var myChart = echarts.init($("#buyTime")[0]);
        var option = {
            tooltip: {   //提示框，鼠标悬浮交互时的信息提示
                show: true,
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y:30,
                x2:30,
                y2:40,
                borderWidth: 0
            },
            legend: {
                data: [],
                orient: 'vertical',
                textStyle: { fontWeight: 'bold', color: '#a4a7ab' }
            },

            calculable: false,
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }

            ],
            yAxis: [
                {
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '',
                    type: 'line',
                    stack: '24小时购买时间',
                    data: [200, 220, 250, 300, 350, 400, 450, 500, 550, 600, 620, 600, 580, 550, 500, 450, 400, 350, 300, 250, 220, 200, 180, 150],
                    itemStyle: {
                        normal: {
                            color: '#02bcbc'
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
    });
// 套餐类型分析
    $(function(){
        var myChart = echarts.init($("#Package01")[0]);
        option = {
            legend: {
                orient : 'vertical',
                x : 'left',
                data:['套餐A','套餐B','套餐C','套餐D','套餐E'], textStyle:{
                    color:"#e9ebee"

                }
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        show: true,
                        type: ['pie', 'funnel'],
                        option: {
                            funnel: {
                                x: '25%',
                                width: '50%',
                                funnelAlign: 'left',
                                max: 1548
                            }
                        }
                    },
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : false,
            series : [
                {
                    name:'套餐',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:600, name:'车辆监控',
                            itemStyle: {
                                normal: {
                                    color:"#1afffd"
                                }
                            }},
                        {value:450, name:'环境监测',
                            itemStyle: {
                                normal: {
                                    color:"#2e7cff"
                                }
                            }},
                        {value:300, name:'人员识别',
                            itemStyle: {
                                normal: {
                                    color:"#ffcb89"
                                }
                            }},
                        {value:200, name:'行为分析',
                            itemStyle: {
                                normal: {
                                    color:"#005ea1"
                                }
                            }},
                        {value:100, name:'区域预警',
                            itemStyle: {
                                normal: {
                                    color:"#0ad5ff"
                                }
                            }}
                    ]
                }
            ]
        };


        myChart.setOption(option);
    });
// 渠道分析
    $(function(){
        var myChart = echarts.init($("#rode01")[0]);
        option = {


            legend: {
                orient : 'vertical',
                x : 'left',
                data:['摄像头','传感器','无人机','NVR','服务器','交换机','PC','显示器'], textStyle:{
                    color:"#e9ebee"

                }
            },

            calculable : false,
            series : [

                {
                    name:'面积模式',
                    type:'pie',
                    radius : '60%',
                    center: ['50%', '60%'],
                    roseType : 'area',
                    x: '50%',               // for funnel
                    max: 40,                // for funnel
                    sort : 'ascending',     // for funnel
                    data:[
                        {value:25, name:'摄像头',
                            itemStyle: {
                                normal: {
                                    color:"#45c0ff"
                                }
                            }},
                        {value:15, name:'传感器',
                            itemStyle: {
                                normal: {
                                    color:"#e15828"
                                }
                            }},
                        {value:30, name:'无人机',
                            itemStyle: {
                                normal: {
                                    color:"#ff81cb"
                                }
                            }},
                        {value:35, name:'NVR',
                            itemStyle: {
                                normal: {
                                    color:"#2e7cff"
                                }
                            }},
                        {value:20, name:'服务器',
                            itemStyle: {
                                normal: {
                                    color:"#feb602"
                                }
                            }},
                        {value:10, name:'交换机',
                            itemStyle: {
                                normal: {
                                    color:"#ff7d0a"
                                }
                            }},
                        {value:5, name:'PC',
                            itemStyle: {
                                normal: {
                                    color:"#1afffd"
                                }
                            }},
                        {value:8, name:'显示器',
                            itemStyle: {
                                normal: {
                                    color:"#2e7cff"
                                }
                            }}
                    ]
                }
            ]
        };


        myChart.setOption(option);
    });
// 订退分析
    $(function(){
        var myChart = echarts.init($("#bookAret")[0]);
        option = {

            tooltip : {
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y:30,
                x2:30,
                y2:40,
                borderWidth: 0
            },
            legend: {
                data:['未处理事件数','已处理事件数'],
                textStyle:{
                    color:"#e9ebee"

                }
            },

            calculable : false,
            xAxis : [
                {
                    type : 'category',
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#a4a7ab',
                        align: 'center'
                    },
                    splitLine: {
                        show: false
                    },
                }
                }

            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine: {
                        show: false
                    },
                }
            ],
            series : [
                {
                    name:'未处理事件数',
                    type:'bar',
                    data:[20, 30, 15, 25, 18, 10, 35, 22, 12, 8, 28, 40],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'已处理事件数',
                    type:'bar',
                    data:[800, 950, 1100, 850, 1300, 900, 750, 1150, 1600, 900, 1700, 2400],
                    markPoint : {
                        data : [
                            {name : '月最高', value : 2400, xAxis: 12, yAxis: 2400, symbolSize:18},
                            {name : '月最低', value : 750, xAxis: 7, yAxis: 750}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name : '平均值'}
                        ]
                    }
                }
            ]
        };


        myChart.setOption(option);
    });
// 按月进行趋势分析
    $(function(){
        var myChart = echarts.init($("#bookBmonth")[0]);
        var option = {
            tooltip: {   //提示框，鼠标悬浮交互时的信息提示
                show: true,
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y:30,
                x2:30,
                y2:40,
                borderWidth: 0
            },
            legend: {
                data: [],
                orient: 'vertical',
                textStyle: { fontWeight: 'bold', color: '#a4a7ab' }
            },

            calculable: false,
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }

            ],
            yAxis: [
                {
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '事件数量',
                    type: 'line',
                    stack: '事件数量',
                    data:[800, 750, 900, 820, 1100, 950, 700, 1000, 1500, 850, 1600, 2200],
                    itemStyle: {
                        normal: {
                            color: '#02bcbc'
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
    });
// 气候与订单分析
    $(function(){
        var myChart = echarts.init($("#whearAbook")[0]);
        option = {
            tooltip : {
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y:30,
                x2:30,
                y2:20,
                borderWidth: 0
            },

            calculable : false,
            legend: {
                data:['事件数量','平均响应时间'],
                textStyle:{
                    color:"#e9ebee"

                }
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }

                }
            ],
            yAxis : [
                {
                    type : 'value',

                    name : '事件数量',
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine: {
                        show: false
                    },
                },
                {
                    type : 'value',
                    name : '平均响应时间 (分钟)',
                    axisLabel : {
                        formatter: '{value} 分钟',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine: {
                        show: false
                    },
                },

            ],
            series : [

                {
                    name:'事件数量',
                    type:'bar',
                    data:[120, 150, 180, 200, 220, 250, 280, 300, 280, 250, 200, 180],
                    itemStyle: {
                        normal: {
                            color:"#0ad5ff"
                        }
                    }
                },
                {
                    name:'平均响应时间',
                    type:'line',
                    yAxisIndex: 1,
                    data:[15, 12, 10, 8, 7, 6, 5, 4, 6, 8, 10, 13],
                    itemStyle: {
                        normal: {
                            color:"#1afffd"
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
    });
// 交通与订单分析
    $(function(){
        var myChart = echarts.init($("#rodeAbook")[0]);
        option = {
            tooltip : {
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y:30,
                x2:30,
                y2:20,
                borderWidth: 0
            },

            calculable : false,
            legend: {
                data:['事件数量','故障数量'],
                textStyle:{
                    color:"#e9ebee"

                }
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['周一','周二','周三','周四','周五','周六','周日'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }

                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name : '事件数量',
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine: {
                        show: false
                    },
                },
                {
                    type : 'value',
                    name : '故障数量',
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine: {
                        show: false
                    },
                },

            ],
            series : [

                {
                    name:'事件数量',
                    type:'bar',
                    stack: '数量',
                    data:[150, 180, 200, 220, 250, 280, 300],
                    itemStyle: {
                        normal: {
                            color:"#ffcb89"
                        }
                    }
                },
                {
                    name:'故障数量',
                    type:'bar',
                    stack: '数量',
                    data:[20, 30, 15, 25, 18, 10, 35],
                    itemStyle: {
                        normal: {
                            color:"#005ea1"
                        }
                    }
                },

                {
                    name:'事件趋势',
                    type:'line',
                    yAxisIndex: 1,
                    data:[170, 210, 215, 245, 268, 290, 335],
                    itemStyle: {
                        normal: {
                            color:"#0ad5ff"
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
    });
// 季节与订单分析
    $(function(){
        var myChart = echarts.init($("#seaAbook01")[0]);
        option = {


            legend: {
                orient : 'vertical',
                x : 'left',
                data:['春季','夏季','秋季','冬季'], textStyle:{
                    color:"#e9ebee"

                }
            },

            calculable : false,
            series : [

                {
                    name:'事件类型分布',
                    type:'pie',
                    radius : '70%',
                    center: ['50%', '60%'],
                    splitLine:{show: false},
                    roseType : 'area',
                    x: '50%',               // for funnel
                    max: 40,                // for funnel
                    sort : 'ascending',     // for funnel
                    data:[
                        {value:800, name:'入侵警报',
                            itemStyle: {
                                normal: {
                                    color:"#2e7cff"
                                }
                            }},
                        {value:600, name:'设备故障',
                            itemStyle: {
                                normal: {
                                    color:"#ffcb89"
                                }
                            }},
                        {value:1200, name:'异常行为',
                            itemStyle: {
                                normal: {
                                    color:"#005ea1"
                                }
                            }},
                        {value:1500, name:'环境异常',
                            itemStyle: {
                                normal: {
                                    color:"#0ad5ff"
                                }
                            }}
                    ]
                }
            ]
        };


        myChart.setOption(option);
    });
// 活动与订单分析
    $(function(){
        var myChart = echarts.init($("#actionBook")[0]);
        option = {
            tooltip : {
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y:30,
                x2:30,
                y2:20,
                borderWidth: 0
            },

            calculable : false,
            legend: {
                data:['误报','漏报','有效事件','重复事件'],
                textStyle:{
                    color:"#e9ebee"

                }
            },
            xAxis : [
                {
                    type : 'category',
                    splitLine : {show : false},
                    data : ['周一','周二','周三','周四','周五','周六','周日'],
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            align: 'center'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    position: 'right',
                    splitLine : {show : false},
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            align: 'center'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'误报',
                    type:'bar',
                    data:[50, 40, 60, 30, 70, 45, 55],
                    itemStyle: {
                        normal: {
                            color:"#2e7cff"
                        }
                    }
                },
                {
                    name:'漏报',
                    type:'bar',
                    tooltip : {trigger: 'item'},
                    stack: '广告',
                    data:[10, 15, 8, 12, 5, 20, 18],
                    itemStyle: {
                        normal: {
                            color:"#feb602"
                        }
                    }
                },
                {
                    name:'有效事件',
                    type:'bar',
                    tooltip : {trigger: 'item'},
                    stack: '广告',
                    data:[200, 220, 180, 250, 280, 300, 260],
                    itemStyle: {
                        normal: {
                            color:"#ffcb89"
                        }
                    }
                },
                {
                    name:'重复事件',
                    type:'bar',
                    tooltip : {trigger: 'item'},
                    stack: '广告',
                    data:[30, 25, 35, 20, 40, 30, 28],
                    itemStyle: {
                        normal: {
                            color:"#005ea1"
                        }
                    }
                },

                {
                    name:'事件总数',
                    type:'line',
                    data:[290, 300, 283, 317, 395, 395, 361],
                    itemStyle: {
                        normal: {
                            color:"#0ad5ff"
                        }
                    }
                },

                {
                    name:'事件细分',
                    type:'pie',
                    tooltip : {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    center: [100,80],
                    radius : [0, 30],
                    itemStyle :　{
                        normal : {
                            labelLine : {
                                length : 20
                            }
                        }
                    },
                    data:[
                        {value:100, name:'车辆异常',
                            itemStyle: {
                                normal: {
                                    color:"#1afffd"
                                }
                            }},
                        {value:80, name:'人员异常',
                            itemStyle: {
                                normal: {
                                    color:"#2e7cff"
                                }
                            }},
                        {value:60, name:'网络攻击',
                            itemStyle: {
                                normal: {
                                    color:"#ffcb89"
                                }
                            }},
                        {value:50, name:'环境污染',
                            itemStyle: {
                                normal: {
                                    color:"#005ea1"
                                }
                            }}
                    ]
                }
            ]
        };


        myChart.setOption(option);
    });
// 特殊时间点与订单分析
    $(function(){
        var myChart = echarts.init($("#sperceBook01")[0]);
        option = {

            tooltip : {
                trigger: 'axis',
                formatter: function (params) {
                    var res = params[0].seriesName + ' ' + params[0].name;
                    res += '<br/>  0-05 : ' + params[0].value[0] + '  06-12 : ' + params[0].value[3];
                    res += '<br/>   13-18: ' + params[0].value[1] + '  19-24 : ' + params[0].value[2];
                    return res;
                }
            },
            grid: {
                x: 46,
                y:30,
                x2:30,
                y2:20,
                borderWidth: 0
            },
            legend: {
                data:['事件数量'],
                textStyle:{
                    color:"#e9ebee"

                }
            },

            dataZoom : {
                show : true,
                realtime: true,
                start : 50,
                end : 100
            },
            xAxis : [
                {
                    type : 'category',
                    textStyle: {
                        color: '#a4a7ab',

                    },
                    boundaryGap : true,
                    axisTick: {onGap:false},
                    splitLine: {show:false},
                    data : [
                        "2023/10/01", "2023/10/02", "2023/10/03", "2023/10/04", "2023/10/05",
                        "2023/10/06", "2023/10/07", "2023/10/08", "2023/10/09", "2023/10/10",
                        "2023/10/11", "2023/10/12", "2023/10/13", "2023/10/14", "2023/10/15",
                        "2023/10/16", "2023/10/17", "2023/10/18", "2023/10/19", "2023/10/20",
                        "2023/10/21", "2023/10/22", "2023/10/23", "2023/10/24", "2023/10/25",
                        "2023/10/26", "2023/10/27", "2023/10/28", "2023/10/29", "2023/10/30",
                        "2023/10/31"
                    ]
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    textStyle: {
                        color: '#a4a7ab',

                    },
                    scale:true,
                    boundaryGap: [0.01, 0.01],
                    splitLine: {
                        show: false
                    },
                }
            ],
            series : [
                {
                    name:'事件数',
                    type:'bar',
                    data:[ // 事件数量
                        [20,18,15,22],
                        [25,20,18,28],
                        [30,25,20,35],
                        [32,28,22,38],
                        [35,30,25,40],
                        [40,35,30,45],
                        [42,38,32,48],
                        [45,40,35,50],
                        [48,42,38,52],
                        [50,45,40,55],
                        [52,48,42,58],
                        [55,50,45,60],
                        [58,52,48,62],
                        [60,55,50,65],
                        [62,58,52,68],
                        [65,60,55,70],
                        [68,62,58,72],
                        [70,65,60,75],
                        [72,68,62,78],
                        [75,70,65,80],
                        [78,72,68,82],
                        [80,75,70,85],
                        [82,78,72,88],
                        [85,80,75,90],
                        [88,82,78,92],
                        [90,85,80,95],
                        [92,88,82,98],
                        [95,90,85,100],
                        [98,92,88,102],
                        [100,95,90,105],
                        [102,98,92,108]
                    ]
                }
            ]
        };


        myChart.setOption(option);
    });


}

function shouRu(){
// 收入支出分析
// 收入渠道分析
    $(function(){
        var myChart = echarts.init($("#zhanbi02")[0]);
        var option = {

            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: function (params) {
                    var tar = params[0];
                    return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                }
            },
            grid:{
              borderWidth:0
            },
            xAxis : [
                {
                    type : 'category',

                    data : ['总收入','渠道A','渠道B','渠道C','渠道D','渠道E'],
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine:{show: false}
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine:{show: false}
                }
            ],
            series : [
                {
                    name:'总收入',
                    type:'bar',
                    stack: '总量',
                    itemStyle:{
                        normal:{
                            barBorderColor:'rgba(0,0,0,0)',
                            color:'rgba(0,0,0,0)'
                        },
                        emphasis:{
                            barBorderColor:'rgba(0,0,0,0)',
                            color:'rgba(0,0,0,0)'
                        }
                    },
                    data:[0, 1700, 1400, 1200, 300, 0]
                },
                {
                    name:'渠道',
                    type:'bar',
                    stack: '总量',
                    data:[2900, 1200, 300, 200, 900, 300],
                    itemStyle: {
                        normal: {
                            color: '#2481ff'
                        }
                    }
                }
            ]
        };


        myChart.setOption(option);
    });
// 支出渠道分析
    $(function(){
        var myChart = echarts.init($("#zhanbi03")[0]);
        option = {

            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: function (params) {
                    var tar = params[0];
                    return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                }
            },

            xAxis : [
                {
                    type : 'category',
                    splitLine: {show:false},
                    data : ['总收入','渠道A','渠道B','渠道C','渠道D','渠道E'],
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine:{show: false}
                }
            ],
            grid:{
                borderWidth:0
            },
            yAxis : [
                {
                    type : 'value',
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine:{show: false}
                }
            ],
            series : [
                {
                    name:'总收入',
                    type:'bar',
                    stack: '总量',
                    itemStyle: {
                        normal: {
                            color: '#1afffd'
                        }
                    },
                    data:[0, 1700, 1400, 1200, 300, 0]
                },
                {
                    name:'渠道',
                    type:'bar',
                    stack: '总量',
                    itemStyle:{
                        normal:{
                                color:'#28a3e1'

                        }
                    },
                    data:[2900, 1200, 300, 200, 900, 300]
                }
            ]
        };


        myChart.setOption(option);
    });
// 营销投入与销售量分析
    $(function(){
        var myChart = echarts.init($("#allAly01")[0]);
        option = {
            title : {
                text: '销售量组成',
                textStyle:{
                    color:"#e9ebee"

                },

                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient : 'vertical',
                x : 'left',
                data:['销售A','销售B','销售C','销售D','销售E'],
                textStyle:{
                    color:"#e9ebee"

                }
            },

            calculable : false,
            series : [
                {
                    name:'销售组成',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'销售A',
                            itemStyle:{
                                normal:{
                                    color:'#1afffd'

                                }
                            }
                        },
                        {value:310, name:'销售B',
                            itemStyle:{
                                normal:{
                                    color:'#2e7cff'

                                }
                            }},
                        {value:234, name:'销售C',
                            itemStyle:{
                                normal:{
                                    color:'#ffcb89'

                                }
                            }},
                        {value:135, name:'销售D',
                            itemStyle:{
                                normal:{
                                    color:'#005ea1'

                                }
                            }},
                        {value:1548, name:'销售E',
                            itemStyle:{
                                normal:{
                                    color:'#0ad5ff'

                                }
                            }}
                    ]
                }
            ]
        };


        myChart.setOption(option);
    });
    $(function(){
        var myChart = echarts.init($("#allAly02")[0]);
        option = {
            title : {
                text: '营销投入组成',
                textStyle:{
                    color:"#e9ebee"

                },

                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient : 'vertical',
                x : 'left',
                data:['投入A','投入B','投入C','投入D','投入E','投入F','投入G','投入H','投入J'],
                textStyle:{
                    color:"#e9ebee"

                }
            },

            calculable : false,
            series : [
                {
                    name:'销售组成',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'投入A',
                            itemStyle:{
                                normal:{
                                    color:'#06b8f8'

                                }
                            }},
                        {value:310, name:'投入B',
                            itemStyle:{
                                normal:{
                                    color:'#ff5c58'

                                }
                            }},
                        {value:234, name:'投入C',
                            itemStyle:{
                                normal:{
                                    color:'#ffffb3'

                                }
                            }},
                        {value:135, name:'投入D',
                            itemStyle:{
                                normal:{
                                    color:'#fee581'

                                }
                            }},
                        {value:1548, name:'投入E',
                            itemStyle:{
                                normal:{
                                    color:'#1afffd'

                                }
                            }},
                        {value:135, name:'投入F',
                            itemStyle:{
                                normal:{
                                    color:'#1ec7f1'

                                }
                            }},
                        {value:135, name:'投入G',
                            itemStyle:{
                                normal:{
                                    color:'#e15828'

                                }
                            }},
                        {value:135, name:'投入H',
                            itemStyle:{
                                normal:{
                                    color:'#28a3e1'

                                }
                            }},
                        {value:135, name:'投入J',
                            itemStyle:{
                                normal:{
                                    color:'#72e7d5'

                                }
                            }}
                    ]
                }
            ]
        };


        myChart.setOption(option);
    });
    $(function(){
        var myChart = echarts.init($("#allAly03")[0]);
        option = {
            title : {
                text: '销售量与投入量分析',
                textStyle:{
                    color:"#e9ebee"

                },
                x:'center'

            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                orient : 'vertical',
                x : 'left',
                data:['营销投入量','销售量'],
                textStyle:{
                    color:"#e9ebee"

                },
            },

            calculable : false,
            xAxis : [
                {
                    type : 'category',
                    splitLine:{show: false},
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine:{show: false},
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    }
                }
            ],
            grid:{
                borderWidth:0
            },
            series : [
                {
                    name:'营销投入量',
                    type:'bar',
                    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                    itemStyle: {
                        normal: {
                            color: '#2481ff'
                        }
                    },
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'销售量',
                    type:'bar',
                    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                    itemStyle: {
                        normal: {
                            color: '#1afffd'
                        }
                    },

                    markPoint : {
                        data : [
                            {name : '最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                            {name : '最低', value : 2.3, xAxis: 11, yAxis: 3}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name : '平均值'}
                        ]
                    }
                }
            ]
        };


        myChart.setOption(option);
    });
}

function AnQuan(){
    // 安全分析
// 事件趋势分析
    $(function(){
        var myChart = echarts.init($("#shijian01")[0]);
        option = {

            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c}"
            },
            legend: {
                x: 'center',
                data: ["事件数量趋势"],
                textStyle:{
                    color:"#e9ebee"

                }
            },
            xAxis: [
                {
                    type: "category",
                    name: "x",
                    splitLine:{show: false},
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                }
            ],
            grid:{
                borderWidth:0
            },
            yAxis: [
                {
                    type: "log",
                    name: "y",
                    splitLine:{show: false},
                    data : ['10','30','50','70','90','110','120','130','150','170','190','210','250'],
                    axisLabel : {

                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                }
            ],

            calculable: false,
            series: [
                {
                    name: "事件数量趋势",
                    type: "line",
                    data:[20, 35, 40, 55, 60, 75, 80, 90, 85, 70, 60, 45],
                    itemStyle: {
                        normal: {
                            color:"#0aabff"
                        }
                    }

                }

            ]
        };


        myChart.setOption(option);
    });
// 事件级别分析
    $(function(){
        var myChart = echarts.init($("#shijian02")[0]);
        var placeHoledStyle = {
            normal:{
                barBorderColor:'rgba(0,0,0,0)',
                color:'rgba(0,0,0,0)'
            },
            emphasis:{
                barBorderColor:'rgba(0,0,0,0)',
                color:'rgba(0,0,0,0)'
            }
        };
        var dataStyle = {
            normal: {
                label : {
                    show: true,
                    position: 'insideLeft',
                    formatter: '{c}%'
                }
            }
        };
        option = {

            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter : '{b}<br/>{a0}:{c0}%<br/>{a2}:{c2}%<br/>{a4}:{c4}%<br/>{a6}:{c6}%'
            },
            legend: {
                y: 55,
                data:['一级事件', '二级事件','三级事件', '四级事件'],
                textStyle:{
                    color:"#fff"

                }
            },

            grid: {
                y: 80,
                y2: 30
            },
            xAxis : [
                {
                    type : 'value',
                    position: 'top',
                    splitLine: {show: false},
                    axisLabel: {show: false}
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    splitLine: {show: false},
                    axisLabel : {

                        textStyle: {
                            color: '#fff',
                            align: 'right'
                        }
                    },
                    data : ['医疗事件', '消防事件', '民事事件', '刑事事件']
                }
            ],
            series : [
                {
                    name:'一级事件',
                    type:'bar',
                    stack: '总量',
                    data:[45, 30, 20, 10],
                    itemStyle: {
                        normal: {
                            color:"#1afffd"
                        }
                    }
                },
                {
                    name:'二级事件',
                    type:'bar',
                    stack: '总量',
                    itemStyle : dataStyle,
                    data:[35, 25, 15, 5],
                    itemStyle: {
                        normal: {
                            color:"#ffcb89"
                        }
                    }
                },
                {
                    name:'三级事件',
                    type:'bar',
                    stack: '总量',
                    itemStyle : dataStyle,
                    data:[25, 20, 10, 5],
                    itemStyle: {
                        normal: {
                            color:"#0ad5ff"
                        }
                    }
                },
                {
                    name:'四级事件',
                    type:'bar',
                    stack: '总量',
                    itemStyle : dataStyle,
                    data:[15, 10, 5, 2],
                    itemStyle: {
                        normal: {
                            color:"#ff81cb"
                        }
                    }
                },
                {
                    name:'严重',
                    type:'bar',
                    stack: '总量',
                    itemStyle : dataStyle,
                    data:[61, 41, 42, 30],
                    itemStyle: {
                        normal: {
                            color:"#ffcb89"
                        }
                    }
                },
                {
                    name:'严重',
                    type:'bar',
                    stack: '总量',
                    itemStyle: placeHoledStyle,
                    data:[39, 59, 58, 70],
                    itemStyle: {
                        normal: {
                            color:"#005ea1"
                        }
                    }
                },
                {
                    name:'一般',
                    type:'bar',
                    stack: '总量',
                    itemStyle : dataStyle,
                    data:[37, 35, 44, 60],
                    itemStyle: {
                        normal: {
                            color:"#0ad5ff"
                        }
                    }
                },
                {
                    name:'一般',
                    type:'bar',
                    stack: '总量',
                    itemStyle: placeHoledStyle,
                    data:[63, 65, 56, 40],
                    itemStyle: {
                        normal: {
                            color:"#e15828"
                        }
                    }
                },
                {
                    name:'轻微',
                    type:'bar',
                    stack: '总量',
                    itemStyle : dataStyle,
                    data:[71, 50, 31, 39],
                    itemStyle: {
                        normal: {
                            color:"#ff81cb"
                        }
                    }
                },
                {
                    name:'轻微',
                    type:'bar',
                    stack: '总量',
                    itemStyle: placeHoledStyle,
                    data:[29, 50, 69, 61],
                    itemStyle: {
                        normal: {
                            color:"#feb602"
                        }
                    }
                },
                {
                    name:'四级事件',
                    type:'bar',
                    stack: '总量',
                    itemStyle: placeHoledStyle,
                    data:[85, 90, 95, 98],
                    itemStyle: {
                        normal: {
                            color:"#feb602"
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    });
// 事件类型分析
    $(function(){
        var myChart = echarts.init($("#shijian03")[0]);
        var labelTop = {
            normal : {
                label : {
                    show : true,
                    position : 'center',
                    formatter : '{b}',
                    textStyle: {
                        baseline : 'bottom'
                    }
                },
                labelLine : {
                    show : false
                }
            }
        };
        var labelFromatter = {
            normal : {
                label : {
                    formatter : function (params){
                        return 100 - params.value + '%'
                    },
                    textStyle: {
                        baseline : 'top'
                    }
                }
            },
        }
        var labelBottom = {
            normal : {
                color: '#111b21',
                label : {
                    show : true,
                    position : 'center'
                },
                labelLine : {
                    show : false
                }
            },
            emphasis: {
                color: 'rgba(0,0,0,0)'
            }
        };
        var radius = [40, 55];
        option = {
            legend: {
                x : 'center',

                textStyle:{
                    color:"#fff"

                },
                data:[
                    '医疗','消防','民事','刑事','其它'

                ]
            },


            series : [
                {
                    type : 'pie',
                    center : ['10%', '30%'],
                    radius : radius,
                    x:'0%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:46, itemStyle : labelBottom},
                        {name:'设备故障', value:54,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['30%', '30%'],
                    radius : radius,
                    x:'20%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:65, itemStyle : labelBottom},
                        {name:'环境异常', value:35,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['50%', '30%'],
                    radius : radius,
                    x:'40%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:70, itemStyle : labelBottom},
                        {name:'网络攻击', value:30,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['70%', '30%'],
                    radius : radius,
                    x:'60%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:40, itemStyle : labelBottom},
                        {name:'人员异常', value:60,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['90%', '30%'],
                    radius : radius,
                    x:'80%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:55, itemStyle : labelBottom},
                        {name:'车辆异常', value:45,itemStyle : labelTop}
                    ]
                }
            ]
        };
        myChart.setOption(option);
    });
// 事发时间特征分析
    $(function(){
        var myChart = echarts.init($("#shijian04")[0]);
        option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:['平均响应时间'],
                textStyle:{
                    color:"#e9ebee"

                }
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name : '时间(分钟)',
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine: {show: false}
                }
            ],
            series : [
                {
                    name:'平均响应时间',
                    type:'line',
                    data:[15, 12, 10, 8, 7, 6, 5, 4, 6, 8, 10, 13],
                    itemStyle: {
                        normal: {
                            color:"#0ad5ff"
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
    });
}


