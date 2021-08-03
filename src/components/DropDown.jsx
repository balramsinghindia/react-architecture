

const DropDown = ({values,label}) =>{
    return (
        <>
            <label>{label}</label>
            <select name="city" >
                        {values.map((value,index)=>{
                            return (<option key={index}>{value}</option>)
                        })}
            </select>
        </>
    )
}
export default DropDown;