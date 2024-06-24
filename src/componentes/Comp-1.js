function Comp1(proops) {
    return (
        <div>
            <h1>Objeto selecconado: </h1>
            <div>
                <h3>{proops.obj.id}</h3>
                <p>{proops.obj.postId}</p>
                <p>{proops.obj.name}</p>
                <p>{proops.obj.email}</p>
                <p>{proops.obj.body}</p>
            </div>
        </div>
        
    );
}; 

export default Comp1;

