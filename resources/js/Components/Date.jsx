const Live = (matche) =>{
    return matche.map((data,i)=>{
        return <div div key={i}>  
        <div className="w-[90%] h-[5%] ml-auto mr-auto ">
            <p className="text-5xl text-white font-poppins font-bold">{data.date}</p>
        </div>
        </div>
    })
}

const skor = ({matche}) => {
    return Live(matche);
}
export default skor