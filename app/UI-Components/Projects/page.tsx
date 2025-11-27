"use client";



function Projects({ params }: { params: { id: string } }) {
    return (
        <div>
            Projects{params.id}
        </div>
    );
}

export default Projects;