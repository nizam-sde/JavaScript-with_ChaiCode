/*      there are three type of data structures
        variables , arrays, objects
        de-structure can be done in both array & object        
        
        mostly when we recieve data from reactjs then to process that data 
        further and use as per need we use to de-structure data     */

        
const course = {
    courseDetails: "Full ReactJs With Api & ReactNative",
    price: "1,25,000",
    returnPolicy: true,
    inStock: "yes"
}
//course.courseName

const {courseDetails} = course
console.log(courseDetails);

//de-structuring (create a easy & direct call name)
const {courseDetails: courseName} = course
console.log(courseName);

