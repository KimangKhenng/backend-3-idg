import { faker } from '@faker-js/faker';
import { dbConnect } from './database/db.js';
import { courseModel } from './models/course.model.js';
import { teacherModel } from './models/teacher.model.js';
import { userModel } from './models/user.model.js';
import { stockModel } from './models/stock.model.js';

dbConnect().catch((err) => {
    console.log(err)
})

const numberOfCourse = 10000
const numberOfTeacher = 150
const numberOfUser = 50
const numberOfStock = 1000

const courseIds = []
const teacherIds = []
const userIds = []
for (let i = 0; i < numberOfUser; i++) {
    let user = new userModel({
        name: faker.person.fullName(),
        username: faker.internet.username(),
        email: faker.internet.email(),
        role: faker.helpers.arrayElement(["member", "admin", "editor"]),
        password: faker.internet.password(),
        age: faker.number.int({ min: 10, max: 100 })
    })
    userIds.push(user._id)
    await user.save()
}
console.log(`${numberOfUser} users generated`)

for (let i = 0; i < numberOfStock; i++) {
    let stock = new stockModel({
        name: faker.commerce.productName(),
        price: faker.number.float({ max: 1000 }),
        quantity: faker.number.int({ min: 5, max: 10 }),
        byUser: faker.helpers.arrayElement(userIds)
    })
    await stock.save()
}
console.log(`${numberOfStock} stocks generated`)

for (let i = 0; i < numberOfCourse; i++) {
    let course = new courseModel({
        title: faker.book.title(),
        description: faker.lorem.paragraph(),
        credit: faker.number.int({ max: 100 })
    })
    courseIds.push(course._id)
    await course.save()
}
console.log(`${numberOfCourse} courses generated`)

for (let i = 0; i < numberOfTeacher; i++) {
    let teacher = new teacherModel({
        name: faker.person.fullName(),
        subject: faker.person.jobTitle(),
        yearsOfExperience: faker.number.int({ max: 30 })
    })
    teacherIds.push(teacher._id)
    await teacher.save()
}

let courses = await courseModel.find()
courses.forEach(async (item) => {
    item.taughtBy = faker.helpers.arrayElements(teacherIds, { min: 1, max: 4 })
    await item.save()
})

let teachers = await teacherModel.find()
teachers.forEach(async (item) => {
    item.courses = faker.helpers.arrayElements(courseIds, { min: 2, max: 5 })
    await item.save()
})

console.log(`${numberOfTeacher} teacher generated`)

