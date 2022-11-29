// A list of families with a salary over 5000 START
const salaryOverFiveThousend = families.filter(filterFamily=>filterFamily.salary>5000).map(nameOfFather=> nameOfFather.firstname + " " + nameOfFather.lastname)
// A list of families with a salary over 5000 END

// Total number of male children START
const boysNames = families.map(family => family.childrens.filter(kids => kids.gender === "boy"))
// Total number of male children END

//Total number of girls START
const girlsNames = families.map(family => family.childrens.filter(child => child.gender === "girl"))
// Total number of girls END

// Number of children under 8 years old START
const childrenUnder8Age = families.map(allChild => allChild.childrens.filter(childs => childs.age < 8))
// Number of children under 8 years old END

// The names of the mothers START
const namesOfMother= families.map((allFamily)=> allFamily.childrens.filter((childs)=> childs.age > 8))
//The names of the mothers  END. 

export {
    salaryOverFiveThousend,
    boysNames,
    girlsNames,
    childrenUnder8Age,
    namesOfMother
};