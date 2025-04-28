export default function Table({
    children}
:Readonly<{children: React.ReactNode}>){
    return (
        <table className="min-w-full divide-y divide-gray-200  dark:divide-gray-700">
            {children}
        </table>
    );
}