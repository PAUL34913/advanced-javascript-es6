let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 73, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, english: 88, maths: 97, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
  ];
  
  
  
  const biggest = students.reduce((acc, curr) => {  
    if (!acc.name) {
        acc = { name: curr.name, max: curr.results.english };
    } else if (curr.results.english > acc.max) {
        acc = { name: curr.name, max: curr.results.english };
        }
    
    return acc;
  }, {});
  console.log(biggest);
  console.table(students[0].teacher);

let x = 5;


console.assert(x !== 5, 'Yes!');
console.assert(x === 5, 'No!');