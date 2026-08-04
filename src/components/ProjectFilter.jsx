import '../styles/projectFilter.css'
function ProjectFilter({

    categories,

    selectedCategory,

    setSelectedCategory,

}) {

    return (

        <div className="project-filter">

            {categories.map(category => (

                <button

                    key={category}

                    className={
                        selectedCategory === category
                            ? "active"
                            : ""
                    }

                    onClick={() =>
                        setSelectedCategory(category)
                    }

                >

                    {category}

                </button>

            ))}

        </div>

    );

}

export default ProjectFilter;