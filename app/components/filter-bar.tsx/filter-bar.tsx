export default function FilterBar(){
    return(
        <nav className="bg-white h-fit py-4 px-2 w-full">
            <select className="w-fit border-1 border-gray-100 rounded-sm" name="pets" id="pet-select">
                <option className="bg-white border-1 border-gray-100" value="">Tipo</option>
                <option value="">Tipo de produto</option>
            </select>
        </nav>
    )

}