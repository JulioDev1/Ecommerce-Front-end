export interface IPage{
    pageIndexes:number;
    onClick: ()=> void;
    selected:string;

}
export default function PageNumber({pageIndexes, onClick,  selected}:IPage){
    return (
        <button onClick={onClick} key={pageIndexes} className={`${selected} size-7 rounded-lg border-1 border-gray-200`}>{pageIndexes}</button>
    )
}