function Input(props){
    const check=(e)=>{
        if(e.key=="Enter" && e.target.value!=""){
            props.addHandler(e.target.value)
            e.target.value=""
        }
    }

    return(
        <>
            <div className="form-control">
                <input onKeyUp={check} className="form-control" type="text" />
            </div>
        </>
    )
}

export default Input