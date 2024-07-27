
export default function Markdown(props){
    return(
        <a href="#" className="flex">
            <img className="h-10" src="src/assets/vite.svg"/>
            <span className="text-white font-bold text-xl p-1">{props.title}</span>
        </a>
    )
}