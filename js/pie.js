

// var myChart = echarts.init(document.getElementById("main"));
var s1= echarts.init(document.querySelector(".stock1 .sto_left"));
var s2= echarts.init(document.querySelector(".stock2 .sto_left"));
var s3= echarts.init(document.querySelector(".stock3 .sto_left"));
var option = {
    title: {
        text: '80%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#0580f2',
            fontSize: '90'
        }
    },
    color: ['rgba(176, 212, 251, 1)'], 
    legend: {
        show: true,
        itemGap: 12,
        data: ['01', '02']
    },
   
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
        radius: ['50%', '66%'],
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
        hoverAnimation: false, 
        data: [{
            value: 80,
            name: '01',
            itemStyle: {
                normal: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#367bec' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                } 
            }
        }, {
            name: '02',
            value: 20
        }]
    }]
}
// #00cefc
  s1.setOption({
    title: {
        text: '45%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#000',
            fontSize: '24'
        }
    },
    color: ['rgba(176, 212, 251, 1)'], 
    legend: {
        show: false,
        itemGap: 12,
        data: ['01', '02']
    },
   
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
        radius: ['70%','90%'],
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
        hoverAnimation: false, 
          data: [{
            value: 80,
            name: '01',
            itemStyle: {
                normal: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#ff9a0b' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#ff9a0b' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                } 
            }
        }, {
            name: '02',
            value: 55
        }]
    }]
});
   s2.setOption({
    title: {
        text: '78%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#000',
            fontSize: '24'
        }
    },
    color: ['rgba(176, 212, 251, 1)'], 
    legend: {
        show: false,
        itemGap: 12,
        data: ['01', '02']
    },
   
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
        radius: ['70%','90%'],
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
        hoverAnimation: false, 
          data: [{
            value: 80,
            name: '01',
            itemStyle: {
                normal: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#28ca89' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#28ca89' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                } 
            }
        }, {
            name: '02',
            value: 22
        }]
    }]
});

     s3.setOption({
    title: {
        text: '58%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#000',
            fontSize: '24'
        }
    },
    color: ['rgba(176, 212, 251, 1)'], 
    legend: {
        show: false,
        itemGap: 12,
        data: ['01', '02']
    },
   
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
        radius: ['70%','90%'],
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
        hoverAnimation: false, 
          data: [{
            value: 80,
            name: '01',
            itemStyle: {
                normal: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#528dff' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#528dff' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                } 
            }
        }, {
            name: '02',
            value: 42
        }]
    }]
});
     // http://gallery.echartsjs.com/editor.html?c=xBkgbvUmhUG