//Traffic Widget
var trafficData = {
    labels: ['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
    datasets: [
        {
            data: [750,1250,1000,1500,2000,1500,1750,1250,1750,2000,1750,2250],
            backgroundColor: 'rgba(227,227,246, 0.7)',
            lineTension: 0,
            pointBorderColor: '#7477BF',
            pointRadius: 6,
            pointBorderWidth: 2,
            pointBackgroundColor: '#fff'
        }
    ]
};

var traffic = document.getElementById("traffic-widget").getContext("2d");
var trafficChart = new Chart(traffic, {
    type: 'line',
    data: trafficData,
    animation: {
        animateScale: true
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    max: 2500,
                    min: 500,
                    stepSize: 500
                },
                gridLines: {
                    drawTicks: false,
                    color: '#cdcdcd'
                }
            }],
            xAxes: [{
                gridLines: {
                    drawTicks: false,
                    color: '#cdcdcd'
                }
            }]
        }
    }
});



//Daily Traffic Widget

var dailyTrafficData = {
    labels: ['S','M','T','W','R','F','S'],
    datasets: [
        {
            data: [50,100,175,125,225,200,100],
            backgroundColor: '#7477BF'
        }
    ]
};

var dailyTraffic = document.getElementById("daily-traffic-widget").getContext("2d");
var dailyTrafficChart = new Chart(dailyTraffic, {
    type: 'bar',
    data: dailyTrafficData,
    animation: {
        animateScale: true
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                type: 'linear',
                ticks: {
                    max: 250,
                    min: 0,
                    stepSize: 50
                },
                gridLines: {
                    drawTicks: false,
                    color: '#cdcdcd'
                }
            }],
            xAxes: [{
                gridLines: {
                    drawTicks: false,
                    color: '#cdcdcd'
                }
            }]
        }
    }
});


//Mobile Users Widget

var mobileData = {
    labels: [
        'Phones',
        'Tablets',
        'Desktops'
    ],
    datasets: [
        {
            data: [20,20,60],
            backgroundColor: [
                '#73b0be',
                '#7EBEA2',
                '#7477BF'
            ]
        }
    ]
};


var mobileUsers = document.getElementById("mobile-users-widget").getContext("2d");
var mobileChart = new Chart(mobileUsers, {
    type: 'doughnut',
    data: mobileData,
    animation: {
        animateScale: true
    },
    options: {
        elements: {
            arc: {
                borderWidth: 0
            }
        },
        legend: {
            labels: {
                boxWidth: 15
            }
        }
    }
});


//New Members Widget

var newMembers = document.getElementById("new-member-list");

var newMemberData = [
    {"first_name": "Pete",
      "last_name": "Wrigley",
      "image": "http://www.radfaces.com/images/avatars/little-pete-wrigley.jpg",
      "email": "pete.wrigley@example.com",
      "date": "10/15/15"}, 
    {"first_name": "Aeon",
      "last_name": "Flux",
      "image": "http://www.radfaces.com/images/avatars/aeon-flux.jpg",
      "email": "aeon.flux@example.com",
      "date": "10/16/15"},
    {"first_name": "Alan",
      "last_name": "Frog",
      "image": "http://www.radfaces.com/images/avatars/alan-frog.jpg",
      "email": "alan.frog@example.com",
      "date": "10/20/15"},
    {"first_name": "Amanda",
      "last_name": "Bynes",
      "image": "http://www.radfaces.com/images/avatars/amanda-bynes.jpg",
      "email": "amanda.bynes@example.com",
      "date": "10/21/15"}, 
    {"first_name": "April",
      "last_name": "O'Neil",
      "image": "http://www.radfaces.com/images/avatars/april-oneil.jpg",
      "email": "april.oneil@example.com",
      "date": "10/22/15"}
    ];

   










