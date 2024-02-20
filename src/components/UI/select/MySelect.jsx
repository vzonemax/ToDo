import React from "react"

const MySelect = ({ options, defaultValue, value, onChange }) => {

    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map((opt) => 
                <option key={opt.value} value={opt.value}>
                    {opt.name}
                </option>
            )}
        </select>
    )
}

export default MySelect