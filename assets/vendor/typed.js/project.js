var projects = [
    ['Picea', [
        '/assets/img/mental_health.png',
        'A mental health conferencing web app',
        ['JavaScript', 'AWS', 'axios', 'Serverless Framework'],
        'https://github.com/KCui0327/Picea'
        ]
    ],
    ['Branch', [
        '/assets/img/branch.png',
        'A web app to allow underprivileged communities to receive high quality tutoring and mentorship',
        ['Python', 'Flask', 'axios', 'JavaScript', 'TypeScript', 'CSS', 'axios'],
        'https://github.com/KCui0327/Branch'
        ]
    ],
    ['contentsift', [
        '/assets/img/contentsift.png',
        'Web extension to filter out fake news in X (formerly Twitter)',
        ['JavaScript', 'React', 'Python', 'Microsoft Azure', 'axios'],
        'https://github.com/KCui0327/contentsift'
        ]
    ],
    ['ECE 297 Mapping Software', [
        '/assets/img/ece297.png',
        'Mapping Software for ECE297 Course',
        ['C++', 'OpenStreetMap (OSM)'],
        'https://github.com/KCui0327/ece297-hashmapper-showcase'
        ]
    ]
];

var projects_late = [
    ['shakesafe', [
        '/assets/img/shakesafe.png',
        'Andriod App and rescue device for rescue efforts in earthquakes',
        ['Kotlin', 'C++', 'Arduino', 'OpenAI GPT 3 API', 'Google Maps API', 'Dropbox API'],
        'https://github.com/KCui0327/shakesafe'
        ]
    ],
    ['forgetful', [
        '/assets/img/forgetful.png',
        'A to-do list',
        ['Python', 'SQLite'],
        'https://github.com/KCui0327/forgetful'
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
    document.getElementById("title1").innerHTML = projects[(i + 0) % len][0];
    document.getElementById("pic1").src = projects[(i + 0) % len][1][0];
    document.getElementById("description1").innerHTML = projects[(i + 0) % len][1][1];
    document.getElementById("repo1").href = projects[(i + 0) % len][1][3];

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

    var tools = document.getElementById("tools3")
    tools.innerHTML = ''
    projects[(i + 2) % len][1][2].forEach(function(tool) {
        var list = document.createElement('li');
        list.innerHTML = tool;
        tools.append(list);
    });

    i++;
}

setInterval(rotateProjects, 2000);
