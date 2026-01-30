import React, { useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
    const POSTS_PER_PAGE = 10;

    const categories = [
        "All Resources",
        "Business Growth",
        "Content Marketing",
        "Copywriting",
        "Digital Marketing",
        "Newsroom",
        "SEM",
        "SEO",
        "Social Media",
    ];

    // ✅ BLOG DATA (ALL CATEGORIES – MIN 4 EACH)
    const blogs = [
        // SEO
        {
            id: 1,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2025/07/AI-Generated-Content-for-Healthcare-SEO.jpg.webp",
            category: "SEO",
            date: "2025-01-20",
            url: "/blog-details"
        },
        {
            id: 2,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "hhttps://www.heroesofdigital.com/wp-content/uploads/2025/02/Local-SEO-Strategies-that-work-scaled-1.webp",
            category: "SEO",
            date: "2025-01-18",
            url: "/blog-details"
        },
        {
            id: 3,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2025/04/Guaranteed-SEO-Services-Why-SEO-Guarantees-Dont-Work-scaled-1.webp",
            category: "SEO",
            date: "2025-01-15",
            url: "/blog-details"
        },
        {
            id: 4,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2025/02/Local-SEO-Strategies-that-work-scaled-1.webp",
            category: "SEO",
            date: "2025-01-10",
            url: "/blog-details"
        },

        // Business Growth
        {
            id: 5,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2025/07/AI-Generated-Content-for-Healthcare-SEO.jpg.webp",
            category: "Business Growth",
            date: "2025-01-21",
            url: "/blog-details"
        },
        {
            id: 6,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2025/02/Trends-and-Insights-to-Make-2025-in-Digital-Marketing-scaled-1.webp",
            category: "Business Growth",
            date: "2025-01-17",
            url: "/blog-details"
        },
        {
            id: 7,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2025/04/Guaranteed-SEO-Services-Why-SEO-Guarantees-Dont-Work-scaled-1.webp",
            category: "Business Growth",
            date: "2025-01-13",
            url: "/blog-details"
        },
        {
            id: 8,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2025/02/Local-SEO-Strategies-that-work-scaled-1.webp",
            category: "Business Growth",
            date: "2025-01-09",
            url: "/blog-details"
        },

        // Content Marketing
        {
            id: 9,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2025/02/Trends-and-Insights-to-Make-2025-in-Digital-Marketing-scaled-1.webp",
            category: "Content Marketing",
            date: "2025-01-22",
            url: "/blog-details"
        },
        {
            id: 10,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2025/04/Guaranteed-SEO-Services-Why-SEO-Guarantees-Dont-Work-scaled-1.webp",
            category: "Content Marketing",
            date: "2025-01-19",
            url: "/blog-details"
        },
        {
            id: 11,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2024/12/Unique-Ways-to-Find-Trending-SEO-Keywords-Without-Tools-scaled-1.webp",
            category: "Content Marketing",
            date: "2025-01-14",
            url: "/blog-details"
        },
        {
            id: 12,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2025/02/Trends-and-Insights-to-Make-2025-in-Digital-Marketing-scaled-1.webp",
            category: "Content Marketing",
            date: "2025-01-08",
            url: "/blog-details"
        },

        // Copywriting
        {
            id: 13,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2025/04/Guaranteed-SEO-Services-Why-SEO-Guarantees-Dont-Work-scaled-1.webp",
            category: "Copywriting",
            date: "2025-01-23",
            url: "/blog-details"
        },
        {
            id: 14,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2025/02/Local-SEO-Strategies-that-work-scaled-1.webp",
            category: "Copywriting",
            date: "2025-01-16",
            url: "/blog-details"
        },
        {
            id: 15,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2025/07/AI-Generated-Content-for-Healthcare-SEO.jpg.webp",
            category: "Copywriting",
            date: "2025-01-12",
            url: "/blog-details"
        },
        {
            id: 16,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2025/02/Trends-and-Insights-to-Make-2025-in-Digital-Marketing-scaled-1.webp",
            category: "Copywriting",
            date: "2025-01-07",
            url: "/blog-details"
        },

        // Digital Marketing
        {
            id: 17,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2025/04/Guaranteed-SEO-Services-Why-SEO-Guarantees-Dont-Work-scaled-1.webp",
            category: "Digital Marketing",
            date: "2025-01-24",
            url: "/blog-details"
        },
        {
            id: 18,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2025/07/AI-Generated-Content-for-Healthcare-SEO.jpg.webp",
            category: "Digital Marketing",
            date: "2025-01-18",
            url: "/blog-details"
        },
        {
            id: 19,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2025/04/Guaranteed-SEO-Services-Why-SEO-Guarantees-Dont-Work-scaled-1.webp",
            category: "Digital Marketing",
            date: "2025-01-11",
            url: "/blog-details"
        },
        {
            id: 20,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2025/02/Local-SEO-Strategies-that-work-scaled-1.webp",
            category: "Digital Marketing",
            date: "2025-01-06",
            url: "/blog-details"
        },

        // Newsroom
        {
            id: 21,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2025/04/Guaranteed-SEO-Services-Why-SEO-Guarantees-Dont-Work-scaled-1.webp",
            category: "Newsroom",
            date: "2025-01-25",
            url: "/blog-details"
        },
        {
            id: 22,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2025/07/AI-Generated-Content-for-Healthcare-SEO.jpg.webp",
            category: "Newsroom",
            date: "2025-01-19",
            url: "/blog-details"
        },
        {
            id: 23,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2025/04/Guaranteed-SEO-Services-Why-SEO-Guarantees-Dont-Work-scaled-1.webp",
            category: "Newsroom",
            date: "2025-01-12",
            url: "/blog-details"
        },
        {
            id: 24,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2025/02/Local-SEO-Strategies-that-work-scaled-1.webp",
            category: "Newsroom",
            date: "2025-01-05",
            url: "/blog-details"
        },

        // SEM
        {
            id: 25,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2025/07/AI-Generated-Content-for-Healthcare-SEO.jpg.webp",
            category: "SEM",
            date: "2025-01-26",
            url: "/blog-details"
        },
        {
            id: 26,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2025/04/Guaranteed-SEO-Services-Why-SEO-Guarantees-Dont-Work-scaled-1.webp",
            category: "SEM",
            date: "2025-01-20",
            url: "/blog-details"
        },
        {
            id: 27,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2025/02/Local-SEO-Strategies-that-work-scaled-1.webp",
            category: "SEM",
            date: "2025-01-13",
            url: "/blog-details"
        },
        {
            id: 28,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2025/07/AI-Generated-Content-for-Healthcare-SEO.jpg.webp",
            category: "SEM",
            date: "2025-01-04",
            url: "/blog-details"
        },

        // Social Media
        {
            id: 29,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2025/04/Guaranteed-SEO-Services-Why-SEO-Guarantees-Dont-Work-scaled-1.webp",
            category: "Social Media",
            date: "2025-01-27",
            url: "/blog-details"
        },
        {
            id: 30,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2025/07/AI-Generated-Content-for-Healthcare-SEO.jpg.webp",
            category: "Social Media",
            date: "2025-01-21",
            url: "/blog-details"
        },
        {
            id: 31,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2025/04/Guaranteed-SEO-Services-Why-SEO-Guarantees-Dont-Work-scaled-1.webp",
            category: "Social Media",
            date: "2025-01-14",
            url: "/blog-details"
        },
        {
            id: 32,
            title: "How to Check Your Google Rankings (And What They Actually Mean for Your Business)",
            para: "TL;DR Googling your own business name won’t give you an accurate view of how you’re really ranking. Search results are...",
            image: "https://www.heroesofdigital.com/wp-content/uploads/2025/07/AI-Generated-Content-for-Healthcare-SEO.jpg.webp",
            category: "Social Media",
            date: "2025-01-03",
            url: "/blog-details"
        },
    ];

    const [activeCategory, setActiveCategory] = useState("All Resources");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredBlogs =
        activeCategory === "All Resources"
            ? blogs
            : blogs.filter((b) => b.category === activeCategory);

    const sortedBlogs = [...filteredBlogs].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const paginatedBlogs = sortedBlogs.slice(startIndex, startIndex + POSTS_PER_PAGE);

    const topBlog = paginatedBlogs[0];
    const otherBlogs = paginatedBlogs.slice(1);
    const totalPages = Math.ceil(sortedBlogs.length / POSTS_PER_PAGE);

    return (
        <div className="blog-landing-page">
            <div className="container">
                <div className="bolg-land-tittle">
                    <h1>Blog & resources</h1>
                </div>
            </div>
            <div className="all-post-page-smp">
                <div className="container py-5">
                    {/* CATEGORY TABS */}
                    <ul className="nav nav-tabs mb-4">
                        {categories.map((cat) => (
                            <li className="nav-item" key={cat}>
                                <button
                                    className={`nav-link ${activeCategory === cat ? "active" : ""}`}
                                    onClick={() => {
                                        setActiveCategory(cat);
                                        setCurrentPage(1);
                                    }}
                                >
                                    {cat}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* TOP RECENT BLOG */}
                    {topBlog && (
                        <div className="recent-post-blogs">
                            <div className="row recent-post-roral">
                                <div className="col-md-7">

                                    <div className="main-recent-post-smp">
                                        <Link to={topBlog.url} className="text-decoration-none">
                                            <div className="main-top-blog-link">
                                                <img src={topBlog.image} alt={topBlog.title} className="w-100 mb-3" />
                                                <h3>{topBlog.title}</h3>
                                                <p>{topBlog.para}</p>
                                                <span className="badge bg-primary me-2">{topBlog.category}</span>
                                                <span>{topBlog.date}</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="arelated-post-group-smp">
                                        <div className="rela-post-smp">
                                            <h3><Link to={topBlog.url} className="text-decoration-none">5 SEO Fixes to Get Your Clinic Found on Google</Link></h3>
                                            <ul className="post-categoris-new">
                                                <li><span className="badge bg-primary me-2">{topBlog.category}</span></li>
                                                <li><span>{topBlog.date}</span></li>
                                            </ul>
                                        </div>
                                        <div className="rela-post-smp">
                                            <h3><Link to={topBlog.url} className="text-decoration-none">How to Optimise Your Website For Google AI Overview and Get Featured</Link></h3>
                                            <ul className="post-categoris-new">
                                                <li><span className="badge bg-primary me-2">{topBlog.category}</span></li>
                                                <li><span>{topBlog.date}</span></li>
                                            </ul>
                                        </div>
                                        <div className="rela-post-smp">
                                            <h3><Link to={topBlog.url} className="text-decoration-none">Healthcare SEO Needs More Than Just AI Content</Link></h3>
                                            <ul className="post-categoris-new">
                                                <li><span className="badge bg-primary me-2">{topBlog.category}</span></li>
                                                <li><span>{topBlog.date}</span></li>
                                            </ul>
                                        </div>
                                        <div className="rela-post-smp">
                                            <h3><Link to={topBlog.url} className="text-decoration-none">Healthcare SEO Needs More Than Just AI Content</Link></h3>
                                            <ul className="post-categoris-new">
                                                <li><span className="badge bg-primary me-2">{topBlog.category}</span></li>
                                                <li><span>{topBlog.date}</span></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    )}

                    {/* BLOG GRID */}
                    <div className="row">
                        {otherBlogs.map((blog) => (
                            <div className="col-md-4 mb-4" key={blog.id}>
                                <div className="blog-card-smp-box">
                                    <Link to={blog.url} className="text-decoration-none">
                                        <img src={blog.image} alt={blog.title} className="card-img-top" />
                                        <div className="card-body">
                                            <h5>{blog.title}</h5>
                                            <span className="badge bg-secondary me-2">{blog.category}</span>
                                            <span>{blog.date}</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* PAGINATION */}
                    {totalPages > 1 && (
                        <ul className="pagination justify-content-center mt-4">
                            {[...Array(totalPages)].map((_, i) => (
                                <li className={`page-item ${currentPage === i + 1 ? "active" : ""}`} key={i}>
                                    <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                                        {i + 1}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
