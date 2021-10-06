new gridjs.Grid({
    search: true,
    sort: true,
    columns: ["Name", "Height", "Mass", "Hair Color", "Skin Color", "Eye Color", "Birth Year", "Gender"],
    server: {
        url: 'https://swapi.dev/api/people/?page=1',
        then: data => data.results.map(results => [results.name, results.height, results.mass, results.hair_color, results.skin_color, results.eye_color, results.birth_year, results.gender])
      },
    style: {
        td: {
          border: '1px solid #ccc'
        },
        table: {
          'font-size': '15px'
        }},
}).render(document.getElementById("div1"));


new gridjs.Grid({
search: true,
sort: true,
columns: ["Name", "Height", "Mass", "Hair Color", "Skin Color", "Eye Color", "Birth Year", "Gender"],
server: {
    url: 'https://swapi.dev/api/people/?page=2',
    then: data => data.results.map(results => [results.name, results.height, results.mass, results.hair_color, results.skin_color, results.eye_color, results.birth_year, results.gender])
  },
style: {
    td: {
      border: '1px solid #ccc'
    },
    table: {
      'font-size': '15px'
    }},
}).render(document.getElementById("div2"));

new gridjs.Grid({
search: true,
sort: true,
columns: ["Name", "Height", "Mass", "Hair Color", "Skin Color", "Eye Color", "Birth Year", "Gender"],
server: {
  url: 'https://swapi.dev/api/people/?page=3',
  then: data => data.results.map(results => [results.name, results.height, results.mass, results.hair_color, results.skin_color, results.eye_color, results.birth_year, results.gender])
},
style: {
  td: {
    border: '1px solid #ccc'
  },
  table: {
    'font-size': '15px'
  }},
}).render(document.getElementById("div3"));

new gridjs.Grid({
search: true,
sort: true,
columns: ["Name", "Height", "Mass", "Hair Color", "Skin Color", "Eye Color", "Birth Year", "Gender"],
server: {
  url: 'https://swapi.dev/api/people/?page=4',
  then: data => data.results.map(results => [results.name, results.height, results.mass, results.hair_color, results.skin_color, results.eye_color, results.birth_year, results.gender])
},
style: {
  td: {
    border: '1px solid #ccc'
  },
  table: {
    'font-size': '15px'
  }},
}).render(document.getElementById("div4"));

new gridjs.Grid({
search: true,
sort: true,
columns: ["Name", "Height", "Mass", "Hair Color", "Skin Color", "Eye Color", "Birth Year", "Gender"],
server: {
  url: 'https://swapi.dev/api/people/?page=5',
  then: data => data.results.map(results => [results.name, results.height, results.mass, results.hair_color, results.skin_color, results.eye_color, results.birth_year, results.gender])
},
style: {
  td: {
    border: '1px solid #ccc'
  },
  table: {
    'font-size': '15px'
  }},
}).render(document.getElementById("div5"));

new gridjs.Grid({
search: true,
sort: true,
columns: ["Name", "Height", "Mass", "Hair Color", "Skin Color", "Eye Color", "Birth Year", "Gender"],
server: {
  url: 'https://swapi.dev/api/people/?page=6',
  then: data => data.results.map(results => [results.name, results.height, results.mass, results.hair_color, results.skin_color, results.eye_color, results.birth_year, results.gender])
},
style: {
  td: {
    border: '1px solid #ccc'
  },
  table: {
    'font-size': '15px'
  }},
}).render(document.getElementById("div6"));

new gridjs.Grid({
search: true,
sort: true,
columns: ["Name", "Height", "Mass", "Hair Color", "Skin Color", "Eye Color", "Birth Year", "Gender"],
server: {
  url: 'https://swapi.dev/api/people/?page=7',
  then: data => data.results.map(results => [results.name, results.height, results.mass, results.hair_color, results.skin_color, results.eye_color, results.birth_year, results.gender])
},
style: {
  td: {
    border: '1px solid #ccc'
  },
  table: {
    'font-size': '15px'
  }},
}).render(document.getElementById("div7"));

new gridjs.Grid({
search: true,
sort: true,
columns: ["Name", "Height", "Mass", "Hair Color", "Skin Color", "Eye Color", "Birth Year", "Gender"],
server: {
  url: 'https://swapi.dev/api/people/?page=8',
  then: data => data.results.map(results => [results.name, results.height, results.mass, results.hair_color, results.skin_color, results.eye_color, results.birth_year, results.gender])
},
style: {
  td: {
    border: '1px solid #ccc'
  },
  table: {
    'font-size': '15px'
  }},
}).render(document.getElementById("div8"));

new gridjs.Grid({
search: true,
sort: true,
columns: ["Name", "Height", "Mass", "Hair Color", "Skin Color", "Eye Color", "Birth Year", "Gender"],
server: {
  url: 'https://swapi.dev/api/people/?page=9',
  then: data => data.results.map(results => [results.name, results.height, results.mass, results.hair_color, results.skin_color, results.eye_color, results.birth_year, results.gender])
},
style: {
  td: {
    border: '1px solid #ccc'
  },
  table: {
    'font-size': '15px'
  }},
}).render(document.getElementById("div9"));

$('.targetDiv').hide();

jQuery(function() {
jQuery('.showSingle').click(function() {
jQuery('.targetDiv').hide();
jQuery('#div' + $(this).attr('target')).show();
});
});
