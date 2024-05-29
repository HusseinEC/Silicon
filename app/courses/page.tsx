import SearchFilters from "../components/searchbox/SearchFilters";

export default function Courses() {
    return (
      <section className="courses">
        <div className="contianer">
            <div className="header">
                <h1>Courses</h1>
                <SearchFilters/>
            </div>
            
        </div>
      </section>
    );
}