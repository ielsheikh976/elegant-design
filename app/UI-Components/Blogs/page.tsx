"use client";


function Blogs({ params }: { params: { id: string } }) {
    return (
        <div>
            Blogs{params.id}
        </div>
    );
}

export default Blogs;