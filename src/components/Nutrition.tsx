export const Nutrition = () => {
    return (
        <div className="w-full text-[#545352]">
            <h1 className="items-stretch text-2xl">Nutrition</h1>
            <p className="font-outfit">The table below shows nutritional values per serving without the additional fillings.</p>

            <table className="mx-auto table-fixed font-outfit">
                <tr className="bottomBorder">
                    <td className="tableFormat">Calories</td>
                    <td className="tableFormat text-nutmeg font-600">277kcal</td>
                </tr>
                <tr className="bottomBorder">
                    <td className="tableFormat">Carbs</td>
                    <td className="tableFormat text-nutmeg font-600">0g</td>
                </tr>
                <tr className="bottomBorder">
                    <td className="tableFormat">Protein</td>
                    <td className="tableFormat text-nutmeg font-600">20g</td>
                </tr>
                <tr className="bottomBorder">
                    <td className="tableFormat">Fat</td>
                    <td className="tableFormat text-nutmeg font-600">22g</td>
                </tr>
            </table>

        </div>
    )
}
