interface Props {
    onClick: (p:number)=>void
}
export const IconRight =  ({onClick}: Props)=> <svg onClick={()=>onClick(2)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="5.5" stroke="currentColor" className="hover:animate-pulse ml-3 w-8 h-8">
<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>
