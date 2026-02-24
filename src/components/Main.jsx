export default function Main(props) {
const {data} = props

    return (
        <div className="imgContainer">
            <img src={data.hdurl} alt="background blur" className="bgImageBlur" />
            
            <img src={data.hdurl} alt={data.title || "bg-img"} className="bgImage"/>
        </div>
    )
}