const students = [
  {
    name: 'Panatėja',
    surname: 'Sulindytė',
    faculty: 'Informatikos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Operacinės sistemos',
        credits: 6,
        marks: [10, 7, 7, 6, 9]
      },
      {
        title: 'Algoritmų analizė',
        credits: 9,
        marks: [8, 8, 6, 4, 6]
      },
      {
        title: 'Tikimybės ir Statistika',
        credits: 6,
        marks: [9, 7, 8, 9, 6]
      },
      {
        title: 'Inžinerinis projektas',
        credits: 3,
        marks: [10, 8, 9, 8]
      },
      {
        title: 'Kompiuterių architektūra',
        credits: 6,
        marks: [6, 8, 7, 8, 8]
      }
    ]
  },
  {
    name: 'Serbentautas',
    surname: 'Bordiūras',
    faculty: 'Informatikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [7, 6, 9, 10, 8]
      },
      {
        title: 'Duomenų struktūros',
        credits: 6,
        marks: [7, 8, 9, 4, 8]
      },
      {
        title: 'Skaitmeninė logika',
        credits: 6,
        marks: [6, 8, 10, 9, 9]
      },
      {
        title: 'Objektinis programavimas',
        credits: 6,
        marks: [10, 8, 9, 8, 8]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [6, 7, 8, 8, 8]
      }
    ]
  },
  {
    name: 'Laptokas',
    surname: 'Klavianskas',
    faculty: 'Informatikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [9, 8, 10, 9, 10]
      },
      {
        title: 'Duomenų struktūros',
        credits: 6,
        marks: [9, 9, 10, 10, 8]
      },
      {
        title: 'Skaitmeninė logika',
        credits: 6,
        marks: [10, 10, 10, 9, 10]
      },
      {
        title: 'Objektinis programavimas',
        credits: 6,
        marks: [9, 8, 9, 10, 10]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [8, 9, 8, 10, 8]
      }
    ]
  },
  {
    name: 'Skaistė',
    surname: 'Kolbaitė',
    faculty: 'Chemijos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Organinė chemija',
        credits: 6,
        marks: [9, 9, 10, 9, 8]
      },
      {
        title: 'Inžinerinės medžiagos',
        credits: 3,
        marks: [10, 10, 10, 9, 9]
      },
      {
        title: 'Entalpija ir Entropija',
        credits: 6,
        marks: [9, 9, 9, 9]
      },
      {
        title: 'Polimerų atmainos ir produktai',
        credits: 9,
        marks: [10, 9, 8, 10, 7]
      },
      {
        title: 'Pramoninė chemija',
        credits: 6,
        marks: [9, 10, 10, 10, 9]
      }
    ]
  },
  {
    name: 'Cilindras',
    surname: 'Katalizatorius',
    faculty: 'Chemijos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Organinė chemija',
        credits: 6,
        marks: [6, 8, 9, 4, 8]
      },
      {
        title: 'Inžinerinės medžiagos',
        credits: 3,
        marks: [9, 8, 7, 8, 10]
      },
      {
        title: 'Entalpija ir Entropija',
        credits: 6,
        marks: [7, 8, 9, 10, 6]
      },
      {
        title: 'Polimerų atmainos ir produktai',
        credits: 9,
        marks: [8, 9, 6, 4]
      },
      {
        title: 'Pramoninė chemija',
        credits: 6,
        marks: [8, 7, 9, 5, 9]
      }
    ]
  },
  {
    name: 'Grandinius',
    surname: 'Varžauskas',
    faculty: 'Elektros ir elektronikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [8, 9, 9, 9, 9]
      },
      {
        title: 'Elektos grandinės',
        credits: 6,
        marks: [8, 7, 9, 9, 10]
      },
      {
        title: 'Elektros tinklai',
        credits: 6,
        marks: [9, 9, 8, 8, 10]
      },
      {
        title: 'Braižyba',
        credits: 6,
        marks: [6, 8, 9, 8, 7]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [9, 9, 9, 10, 8]
      }
    ]
  },
];

console.groupEnd();

console.groupCollapsed('1. Atspausdinti visus Informatikos fakulteto studentus');
{
  const printAllITStudents = students.filter(faculty => faculty.faculty === 'Informatikos fakultetas');
  console.log(printAllITStudents);
}
console.groupEnd();

console.groupCollapsed('2. Atspausdinti visus Chemijos fakulteto studentus');
{
  const printAllChemistryStudents = students.filter(faculty => faculty.faculty === 'Chemijos fakultetas');
  console.log(printAllChemistryStudents);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinti visus Elektros ir elektronikos fakulteto studentus');
{
  const printAllElStudents = students.filter(faculty => faculty.faculty === 'Elektros ir elektronikos fakultetas');
  console.log(printAllElStudents);
}
console.groupEnd();

console.groupCollapsed('4. Atspausdinti visų Informatikos fakulteto studentų vidurkius');
{
  // const addStudentSemesterCreditCount = student => ({
  //   ...student,
  //   avg: student.modules.reduce((weigthedAvgSum, module) => weigthedAvgSum + module.marks.reduce((avg, mark) => avg + mark / module.marks.length, 0) * module.credits, 0) / student.modules.reduce((creditSum, module) => creditSum + module.credits, 0)
  // semesterCreditCount: student.modules.reduce((creditSum, module) => creditSum + module.credits, 0),
  // weigthedmoduleAvgSum: student.modules.reduce((weigthedAvgSum, module) => weigthedAvgSum + module.marks.reduce((avg, mark) => avg + mark / module.marks.length, 0) * module.credits, 0)
  // })


  // const changeStudentModuleWithMarks = student => {
  //   return {
  //     fullname: student.fullname,
  //     marks: student.modules.reduce((markArr, module) => {
  //       return [...markArr, ...module.marks];
  //     }, [])
  //   }
  // }

  // const changeStudentMarkArrayToAvg = student => {
  //   return {
  //     fullname: student.fullname,
  //     avg: student.marks.reduce((avg, mark) => avg + mark / student.marks.length, 0)
  //   }
  // }

  // const roundStudentAvgOnePointAfterComma = student => {
  //   return {
  //     fullname: student.fullname,
  //     avg: Math.round(student.avg * 10) / 10
  //   }
  // }

  const result = students
    .filter(s => s.faculty === 'Informatikos fakultetas')
    .map(({ name, surname, modules }) => ({ fullname: name + ' ' + surname, modules }))
    .map(({ fullname, modules }) => ({
      fullname,
      avg: Math.round(
        modules.reduce((avgSum, { marks, credits }) => avgSum + marks.reduce((avg, mark) => avg + mark / marks.length, 0) * credits, 0) / modules.reduce((creditSum, module) => creditSum + module.credits, 0) * 10
      ) / 10
    }))
  // .map(changeStudentModuleWithMarks)
  // .map(changeStudentMarkArrayToAvg)
  // .map(roundStudentAvgOnePointAfterComma);

  console.table(result);
}
console.groupEnd();

console.groupCollapsed('5. Atspausdinti visų Chemijos fakulteto studentų vidurkius');
{
  const chemResult = students
    .filter(s => s.faculty === 'Chemijos fakultetas')
    .map(({ name, surname, modules }) => ({ fullname: name + ' ' + surname, modules }))
    .map(({ fullname, modules }) => ({
      fullname,
      avg: Math.round(
        modules.reduce((avgSum, { marks, credits }) => avgSum + marks.reduce((avg, mark) => avg + mark / marks.length, 0) * credits, 0) / modules.reduce((creditSum, module) => creditSum + module.credits, 0) * 10
      ) / 10
    }));
  console.table(chemResult);
}

console.groupEnd();

console.groupCollapsed('6. Atspausdinti visų Elektros ir elektronikos fakulteto studentų vidurkius');
{
  const elElecResults = students
    .filter(stud => stud.faculty === 'Elektros ir elektronikos fakultetas')
    .map(({ name, surname, modules }) => ({ fullname: name + ' ' + surname, modules }))
    .map(({ fullname, modules }) => ({
      fullname,
      avg: Math.round(
        modules.reduce((avgSum, { marks, credits }) => avgSum + marks.reduce((avg, mark) => avg + mark / marks.length, 0) * credits, 0) / modules.reduce((creditSum, module) => creditSum + module.credits, 0) * 10
      ) / 10
    }))
  console.table(elElecResults);
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinti tik pirmo kurso studentus');
{
  const pirmakursiai = students.filter(course => course.course === 1);
  console.table(pirmakursiai);
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinti tik antro kurso studentus');
{
  const antrakursiai = students.filter(course => course.course === 2);
  console.table(antrakursiai);
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinti tik trečio kurso studentus');
{
  const treciakursiai = students.filter(course => course.course === 3);
  console.table(treciakursiai);
}
console.groupEnd();

console.groupCollapsed('10. Atspausdinti tik ketvirto kurso studentus');
{
  const diplomantai = students.filter(course => course.course === 4);
  console.table(diplomantai);
}
console.groupEnd();

// ACARGĖJ
console.groupCollapsed('11. Iš students masyvo atrinkti ir atspausdinti visų studentų vidurkius');
{
  const allStudentsAvg = students
    .map(({ name, surname, modules }) => ({ fullname: name + ' ' + surname, modules }))
    .map(({ fullname, modules }) => ({
      fullname,
      avg: Math.round(
        modules.reduce((avgSum, { marks, credits }) => avgSum + marks.reduce((avg, mark) => avg + mark / marks.length, 0) * credits, 0) / modules.reduce((creditSum, module) => creditSum + module.credits, 0) * 10
      ) / 10
    }))
  console.table(allStudentsAvg);
}

