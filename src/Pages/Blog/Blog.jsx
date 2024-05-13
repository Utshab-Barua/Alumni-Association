import { Link } from "react-router-dom";
import moment from 'moment';
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import useBlogs from "../../Hooks/useBlogs";


const Blog = () => {
    const { allBlogs } = useBlogs();
    console.log(allBlogs);
    return (
        <section>
            <SectionHeader title="Blogs" description="Read recent blogs of alumnies!" />



            <div className="px-5 lg:px-12 grid grid-cols-1 lg:grid-cols-4 gap-10 flex-col lg:flex-row">

                {
                    allBlogs?.map(blog => <>

                        <div className="card w-96 glass" key={blog?._id}>
                            <figure><img src={blog?.thumbnails} alt="thumbnails!" className="w-full h-60" /></figure>
                            <div className="card-body">
                                <h2 className="card-title brandFont text-primary">{blog?.title}</h2>
                                <p className="font-bold">Posted By: <span className="text-primary">{blog?.author}</span></p>
                                <p className="text-sm font-semibold">{blog?.short_description?.length > 250 ? blog?.short_description?.slice(0, 250) : blog?.short_description}...</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary" onClick={() => document.getElementById(blog?._id).showModal()}>Show more!</button>
                                </div>
                            </div>
                        </div>
                        <dialog id={blog?._id} className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <figure><img src={blog?.thumbnails} alt="photo" className="mt-10 rounded-md" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {blog?.title}
                                    </h2>
                                    <p>{blog?.details}</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline font-semibold"><span className='brandFont font-semibold text-primary'>Date: </span> {moment(blog?.date).format("L")}</div>
                                        <div className="badge badge-outline font-semibold"><span className='brandFont font-semibold text-primary'>Posted By: </span> {blog?.author}</div>
                                    </div>
                                </div>
                            </div>
                        </dialog>
                    </>)
                }
            </div>
        </section>
    );
};

export default Blog;