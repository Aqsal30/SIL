const Live = (props) =>{
    var prev = null;
    var tim = props.tim;
    return props.matche.map((data,i)=>{
        return <>
        
        {data.date == prev ? 
            <>
            </>
            :
            <div className="text-transparent text-xs">
            <p className="text-5xl mt-10 text-white font-poppins font-bold">{data.date}</p>
                {prev = data.date}
            </div>
            
        }

        <div key={i} className="w-full h-60 ml-auto mr-auto mb-10 border-2 border-white bg-skor flex flex-col">

        <div className="h-[80%] w-full flex flex-row items-center">
            
            <div className="w-[1%] h-full bg-green-600"></div>
            <div className="w-[14%] h-full flex flex-col items-center bg-skor">
            {data.cons == "Live" ? 
            <div className="bg-black border-2 border-red-600 rounded-full w-[70%] h-[20%] flex flex-row mt-auto">
            <div className="w-5 h-5 rounded-full mt-auto ml-auto mb-auto bg-red-600"></div>
            <p className="m-auto text-2xl font-poppins font-bold text-red-600">{data.cons}</p>
            </div>
            :
            <div></div>} 
                <p className="m-auto text-3xl font-poppins font-bold text-white">{data.skor1} - {data.skor2} </p>
            </div>
            <div className="w-[25%] h-full flex justify-center items-center "><p className="text-4xl font-poppins font-bold text-white">{data.Tim1}</p></div>
            {tim.map((date, i) =>{
                            
                                return(
                            <>
                            {date.Nama ==  data.Tim1 ? 
                            <div className="w-[10%] h-full flex justify-center items-center "><img src={'/images/' + date.Logo}/></div>
                            : <></>}
                            </>
            )})}
                            <div className="w-[10%] h-full ml-auto mr-auto flex justify-center items-center"><p className="text-4xl font-poppins font-bold text-white">VS</p></div>
            {tim.map((date, i) =>{
                            
                                return(
                            <>
                            {date.Nama ==  data.Tim2 ? <div className="w-[10%] h-full flex justify-center items-center "><img src={'/images/' + date.Logo}/></div>
                            : <></>}
                           
                            </>
            )})}


            <div className="w-[25%] h-full flex justify-center items-center "><p className="text-4xl font-poppins font-bold text-white">{data.Tim2}</p></div>
            <div className="w-[10%]"></div>
        </div>
        <div className="h-[20%] w-full flex items-center justify-center">
            <p className="text-4xl font-poppins font-bold text-white">{data.bracket}</p>
        </div>
        </div>
        </>
    
    })
    
}

const skor = ({matche}) => {
    return Live(matche);
}
export default skor