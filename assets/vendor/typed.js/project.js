var projects = [
    ['ECE 297 Mapping Software', [
        'https://kcui0327.github.io/PRA1-ECE444/assets/img/ece297.png',
        'Mapping Software for ECE297 Course',
        ['C++', 'OpenStreetMap (OSM)'],
        'https://github.com/KCui0327/ece297-hashmapper-showcase',
        '2023-04'
        ]
    ],
    ['Picea', [
        'https://kcui0327.github.io/PRA1-ECE444/assets/img/mental_health.png',
        'A mental health conferencing web app',
        ['JavaScript', 'AWS', 'axios', 'Serverless Framework'],
        'https://github.com/KCui0327/Picea',
        '2024-02'
        ]
    ],
    ['Branch', [
        'https://kcui0327.github.io/PRA1-ECE444/assets/img/branch.png',
        'A web app for tutoring and mentorship',
        ['Python', 'Flask', 'axios', 'JavaScript', 'TypeScript', 'CSS', 'axios'],
        'https://github.com/KCui0327/Branch',
        '2024-10'
        ]
    ],
    ['contentsift', [
        'https://kcui0327.github.io/PRA1-ECE444/assets/img/contentsift.png',
        'Web extension to filter out fake news in X (formerly Twitter)',
        ['JavaScript', 'React', 'Python', 'Microsoft Azure', 'axios'],
        'https://github.com/KCui0327/contentsift',
        '2024-03'
        ]
    ],
];

var projects_late = [
    ['shakesafe', [
        'https://kcui0327.github.io/PRA1-ECE444/assets/img/shakesafe.png',
        'Andriod App and rescue device for rescue efforts in earthquakes',
        ['Kotlin', 'C++', 'Arduino', 'OpenAI GPT 3 API', 'Google Maps API', 'Dropbox API'],
        'https://github.com/KCui0327/shakesafe',
        '2023-03'
        ]
    ],
    ['forgetful', [
        'https://kcui0327.github.io/PRA1-ECE444/assets/img/forgetful.png',
        'A to-do list',
        ['Python', 'SQLite'],
        'https://github.com/KCui0327/forgetful',
        '2022-12'
        ]
    ]
]

var i = 1;

function loadMore() {
    document.getElementById('load_button').style.visibility = 'hidden';
    projects = projects.concat(projects_late);
}

function rotateProjects() {
    var len = projects.length;
    projects.sort((a,b) => {
        const date1 = new Date(a[1][4]);
        const date2 = new Date(b[1][4]);
    
        return date2 - date1;
    });
    document.getElementById("title1").innerHTML = projects[(i + 0) % len][0];
    document.getElementById("pic1").src = projects[(i + 0) % len][1][0];
    document.getElementById("description1").innerHTML = projects[(i + 0) % len][1][1];
    document.getElementById("repo1").href = projects[(i + 0) % len][1][3];
    document.getElementById("date1").innerHTML = projects[(i + 0) % len][1][4];

    var tools = document.getElementById("tools1")
    tools.innerHTML = ''
    projects[(i + 0) % len][1][2].forEach(function(tool) {
        var list = document.createElement('li');
        list.innerHTML = tool;
        tools.append(list);
    });

    document.getElementById("title2").innerHTML = projects[(i + 1) % len][0];
    document.getElementById("pic2").src = projects[(i + 1) % len][1][0];
    document.getElementById("description2").innerHTML = projects[(i + 1) % len][1][1];
    document.getElementById("repo2").href = projects[(i + 1) % len][1][3];
    document.getElementById("date2").innerHTML = projects[(i + 1) % len][1][4];

    var tools = document.getElementById("tools2")
    tools.innerHTML = ''
    projects[(i + 1) % len][1][2].forEach(function(tool) {
        var list = document.createElement('li');
        list.innerHTML = tool;
        tools.append(list);
    });

    document.getElementById("title3").innerHTML = projects[(i + 2) % len][0];
    document.getElementById("pic3").src = projects[(i + 2) % len][1][0];
    document.getElementById("description3").innerHTML = projects[(i + 2) % len][1][1];
    document.getElementById("repo3").href = projects[(i + 2) % len][1][3];
    document.getElementById("date3").innerHTML = projects[(i + 2) % len][1][4];


    var tools = document.getElementById("tools3")
    tools.innerHTML = ''
    projects[(i + 2) % len][1][2].forEach(function(tool) {
        var list = document.createElement('li');
        list.innerHTML = tool;
        tools.append(list);
    });

    i++;
}

rotateProjects();

setInterval(rotateProjects, 2000);
