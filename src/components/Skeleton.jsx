



const Skeleton = ({cls, children, loading}) => {
    
    if(loading) {
        return (
            <div className={`rounded   ${cls }`}>
                
            </div>
        )
    } 
    return (
        <>
        {children}
        </>
    )
    
}

export default Skeleton