// api/teachers?subject=Math&minYear=5
import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    yearsOfExperience: {
        type: Number,
        required: true
    },
    courses: [
        { type: mongoose.Types.ObjectId, ref: 'Courses' }
    ]
}, {
    timestamps: true
});

teacherSchema.plugin(mongoosePaginate)

export const teacherModel = mongoose.model("Teachers", teacherSchema);
// export const teachers = [
//     { id: 201, name: "Mr. Smith", subject: "Math", yearsOfExperience: 10 },
//     { id: 202, name: "Ms. Johnson", subject: "English", yearsOfExperience: 5 },
//     { id: 203, name: "Dr. Lee", subject: "Science", yearsOfExperience: 15 },
//     { id: 204, name: "Mrs. Clark", subject: "Math", yearsOfExperience: 12 },
//     { id: 205, name: "Mr. Lewis", subject: "Physics", yearsOfExperience: 9 },
//     { id: 206, name: "Ms. Perez", subject: "English", yearsOfExperience: 7 },
//     { id: 207, name: "Dr. Hall", subject: "Biology", yearsOfExperience: 14 },
//     { id: 208, name: "Mrs. Allen", subject: "Geography", yearsOfExperience: 11 },
//     { id: 209, name: "Mr. Young", subject: "Computer Science", yearsOfExperience: 8 },
//     { id: 210, name: "Ms. Hernandez", subject: "Literature", yearsOfExperience: 6 },
//     { id: 211, name: "Mr. King", subject: "Math", yearsOfExperience: 13 },
//     { id: 212, name: "Mrs. Wright", subject: "Music", yearsOfExperience: 4 },
//     { id: 213, name: "Mr. Scott", subject: "Computer Science", yearsOfExperience: 10 },
//     { id: 214, name: "Ms. Adams", subject: "English", yearsOfExperience: 5 },
//     { id: 215, name: "Dr. Baker", subject: "Math", yearsOfExperience: 17 },
//     { id: 216, name: "Mrs. Nelson", subject: "Psychology", yearsOfExperience: 9 },
//     { id: 217, name: "Mr. Hill", subject: "Physical Education", yearsOfExperience: 10 },
//     { id: 218, name: "Ms. Green", subject: "Drama", yearsOfExperience: 3 },
//     { id: 219, name: "Dr. Carter", subject: "Anthropology", yearsOfExperience: 20 },
//     { id: 220, name: "Mr. Mitchell", subject: "Computer Science", yearsOfExperience: 12 },
//     { id: 221, name: "Ms. Roberts", subject: "English", yearsOfExperience: 7 },
//     { id: 222, name: "Dr. Campbell", subject: "Math", yearsOfExperience: 11 },
//     { id: 223, name: "Mrs. Parker", subject: "Environmental Science", yearsOfExperience: 8 },
//     { id: 224, name: "Mr. Evans", subject: "Engineering", yearsOfExperience: 6 },
//     { id: 225, name: "Ms. Edwards", subject: "Linguistics", yearsOfExperience: 5 },
//     { id: 226, name: "Dr. Collins", subject: "Physics", yearsOfExperience: 15 },
//     { id: 227, name: "Mrs. Stewart", subject: "Business", yearsOfExperience: 9 },
//     { id: 228, name: "Mr. Sanchez", subject: "French", yearsOfExperience: 6 },
//     { id: 229, name: "Ms. Morris", subject: "Spanish", yearsOfExperience: 10 },
//     { id: 230, name: "Dr. Rogers", subject: "German", yearsOfExperience: 14 },
//     { id: 231, name: "Mr. Reed", subject: "Japanese", yearsOfExperience: 7 },
//     { id: 232, name: "Ms. Cook", subject: "Mandarin", yearsOfExperience: 4 },
//     { id: 233, name: "Mrs. Morgan", subject: "Korean", yearsOfExperience: 6 },
//     { id: 234, name: "Dr. Bell", subject: "Ethics", yearsOfExperience: 13 },
//     { id: 235, name: "Mr. Murphy", subject: "Journalism", yearsOfExperience: 8 },
//     { id: 236, name: "Ms. Bailey", subject: "Graphic Design", yearsOfExperience: 5 },
//     { id: 237, name: "Dr. Rivera", subject: "Animation", yearsOfExperience: 10 },
//     { id: 238, name: "Mrs. Cooper", subject: "Film Studies", yearsOfExperience: 6 },
//     { id: 239, name: "Mr. Richardson", subject: "Photography", yearsOfExperience: 7 },
//     { id: 240, name: "Ms. Cox", subject: "Design Technology", yearsOfExperience: 9 },
//     { id: 241, name: "Dr. Howard", subject: "Architecture", yearsOfExperience: 18 },
//     { id: 242, name: "Mrs. Ward", subject: "Robotics", yearsOfExperience: 12 },
//     { id: 243, name: "Mr. Torres", subject: "AI & Machine Learning", yearsOfExperience: 6 },
//     { id: 244, name: "Ms. Peterson", subject: "Cybersecurity", yearsOfExperience: 7 },
//     { id: 245, name: "Dr. Gray", subject: "Quantum Computing", yearsOfExperience: 14 },
//     { id: 246, name: "Mrs. Ramirez", subject: "Blockchain", yearsOfExperience: 5 },
//     { id: 247, name: "Mr. James", subject: "Computer Science", yearsOfExperience: 8 },
//     { id: 248, name: "Ms. Watson", subject: "Game Design", yearsOfExperience: 9 },
//     { id: 249, name: "Dr. Brooks", subject: "Data Science", yearsOfExperience: 11 },
//     { id: 250, name: "Mrs. Kelly", subject: "Web Development", yearsOfExperience: 10 }
// ];