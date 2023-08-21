function Author({name, courses}){
    return (
        <>
            <p><b>Nome do Autor:</b> {name} </p>
            <p><b>Curso:</b> {courses.name} </p>
            <p><b>Preço:</b> {courses.price} </p>
            <p><b>Carga Horária:</b> {courses.workload} </p>
        </>
    );
}

export default Author;