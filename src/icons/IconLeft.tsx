interface Props {
    onClick: (p:number)=>void
}
export const IconLeft = ({onClick}: Props)=> <svg onClick={()=>onClick(1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="5.5" stroke="currentColor" className="hover:animate-pulse mr-3 w-8 h-8">
<path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>

