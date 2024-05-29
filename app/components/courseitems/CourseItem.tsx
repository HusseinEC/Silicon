import { Course } from "@/app/interfaces/coursesTypes";
import AddBookmarkBtn from "../addbookmark/AddBookmarkBtn";
import Link from "next/link";

interface CourseItemProps {
    item:Course
}

export default function CourseItem({item}:CourseItemProps) {
    return (
    <Link href={`/courses/${item.id}`} className="course">
    
        <div className="bestseller">Best Seller</div>
        
        <AddBookmarkBtn itemId={item.id}/>

        <img src={item.image} alt={item.title} />

        <div className="content">
            <h5 className="title">{item.title}</h5>
            <p className="author">
            {
                item.authors.map(author => <span>{author}</span>)
            }
            </p>
            <div className="pricing">
                <div className="discount">{item.prices.dicsount}</div>
                <div className="price">{item.prices.price}</div>
            </div>
            <div className="footer">
                <div className="hours">
                    <i className="fa-regular fa-clock"></i> {item.hours} hours
                </div>
                <div className="likes">
                    <i className="fa-regular fa-thumbs-up"></i> {item.likesInProcent} ({item.likes})
                </div>
            </div>
        </div>
    </Link>
    );
}