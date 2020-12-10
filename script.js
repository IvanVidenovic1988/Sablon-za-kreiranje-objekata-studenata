function Student(name, address, phone, course) {

    this.name = name;
    this.address = address;
    this.phone = phone;
    this.course = course;
    
    this.getInfo = function() {

        return "Name: " + this.name + "\n" +
               "Address: " + this.address + "\n" +
               // `Address: ${this.address} \n` +
               "Phone: " + this.phone + "\n" +
               "Course: " + this.course
    }
}

const stud1 = new Student("Ivan", "Javorska 2", "069/107-29-21", "Front-End Development");
const stud2 = new Student("Milos", "Javorska 2a", "069/107-29-21", "Back-End Development");
const stud3 = new Student("Aleksandar", "Javorska 2a", "069/107-29-21", "UI/UX Design");

const stud1Info = stud1.getInfo();
const stud2Info = stud2.getInfo();
const stud3Info = stud3.getInfo();

console.log(stud1Info);
console.log(stud2Info);
console.log(stud3Info);


