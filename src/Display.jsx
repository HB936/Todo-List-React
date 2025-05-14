function Display(props) {
    const disp = props.items.map(
        (t, i) => {
            return <div key={i} className="position-relative card bg-dark text-white m-2 p-3">
                {t}
                <div className="position-absolute end-0 me-3 btn text-white top-0 mt-2" onClick={()=>props.remHandler(i)}>x</div>
            </div>
        }
    )
    return (
        <>
            <div>
                {disp}
            </div>
        </>
    )
}

export default Display