'use client'
import { useState } from "react";

export default function SearchFilters() {
    const [categories, setCategories] = useState([])

    return (
        <form id="form-filters">
        <select>
            <option>All categories</option>
        </select>
        <div className="input-search-group">
            <input id="searchQuery" name="searchQuery" placeholder="Search courses"/>
            <i className="fa-regular fa-search"></i>
        </div>
    </form>
    );
}
  