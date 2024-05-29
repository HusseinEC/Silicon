import CourseItem from "./CourseItem";
import { Course } from "@/app/interfaces/coursesTypes";

export default async function CourseItems() {
     const res = await fetch('')
     const courses:Course[] = await res.json()

    return (
    <div className="course-items">
        {
            courses.map(course => <CourseItem key={course.id} item={course}/>)
        }
    </div>
    );
}
  