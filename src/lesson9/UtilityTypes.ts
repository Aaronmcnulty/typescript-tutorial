

interface Assignment {
    studentId: string, 
    title: string, 
    grade: number,
    verified?: boolean,
}


const updateAssignment = (assign: Assignment, propsToUpdate: 
    //Uses partial utility type to update single property of Assignment object.
    Partial<Assignment>): Assignment => {
        return {...assign, ...propsToUpdate}
    }

const assign1: Assignment = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
}

//Will log assign1 object with grade updated but assign1 is not mutated. 
console.log(updateAssignment(assign1, {grade: 95}))
//Will create a new object using assign1 and then updates the 'grade' property. 
const assignGraded: Assignment = updateAssignment(assign1, {grade: 100}) 
console.log(assignGraded)
console.log(assign1)


//Required and Readonly

const recordsAssignment = (assign: 
    //Required to complete the function and won't work otherwise.
    Required<Assignment>): Assignment => {
        // send to database, etc
        return assign
    }

// assignVerified.grade = 88 <-- Wont update as it was created with the 'Readonly' utility type.
const assignVerified: Readonly<Assignment> = {
    ...assignGraded, verified: true 
}


recordsAssignment({...assignGraded, verified: true})


//RECORD 

//We let typescript know its a record and the key/value pair are both strings.
const hexColorMap: Record<string, string> = {
    red: "FF00000",
    green: "00FF00",
    blue: "0000FF",
}

//We create Students and LetterGrade types with union type of string literals
type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

//We can create a final grades object with the key/value pair being 'Student: LetterGrade'.
const finalGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    Kelly: "U"
}

//This can also be created using an interface.

//Created the 'Grades type and specify it has two properties that expect a number.
interface Grades {
    assign1: number,
    assign2: number,
}

//Creates 'gradeData' object which expects 'Students' string as key and 'Grades' object as the value
const gradeData: Record<Students, Grades> = {
    Sara: {assign1: 85, assign2: 93}, 
    Kelly: {assign1: 76, assign2: 15}, 
}

/////

//PICK AND OMIT 

// 'Picks' only the specified properties from the original 'Assignment' interface.
type AssignResult = Pick<Assignment, "studentId" | "grade"> 

const score: AssignResult = {
    studentId: "k123", 
    grade: 85,
}

//'Omits the specified properties from the orginal 'Assignment' type
type AssignPreview = Omit<Assignment, "grade" | "verified">

//Requires both of the properties that were 'NOT' omitted.
const preview: AssignPreview = {
    studentId: "k123",
    title: "Final Project",
}


//EXCLUDE AND EXTRACT

type adjustGrade = Exclude<LetterGrades, "U">

type highGrades = Extract<LetterGrades, "A" | "B">

//NON-NULLABLE

type AllPossibleGrades = 'Dave' | 'John' | null | undefined

//Removes the nullable types eg 'null', 'undefined'.
type NamesOnly = NonNullable<AllPossibleGrades>


//RETURN TYPE

/*
type newAssign = {title: string, points: number } <-- usualy we create the type first 
if we change the function we have to update the types.
*/

//If we might change we can put the type after which will update if we change the function
const createNewAssign = (title: string, points: number) => {
    return {title, points}
}
// NewAssign will always equal the return type of the function.
type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign)

//PARAMETERS

type AssignParams = Parameters<typeof createNewAssign> 

const assignArgs: AssignParams = ["Generics", 100]

const tsAssign2: NewAssign = createNewAssign(...assignArgs)
console.log(tsAssign2)

//AWAITED - Helps us with the ReturnType of a Promise

interface User {
    id: number, 
    name: string,
    username: string, 
    email: string, 
}

 const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
 }

 //We can get the return type accuratley using 'Awaited'
 type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

 fetchUsers().then(users => console.log(users))

