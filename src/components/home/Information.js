import React from 'react'

const Information = ({ selectedValue }) => {


    const informations = [{
        name: 'BMW',
        info: 'Bayerische Motoren Werke AG, commonly referred to as BMW, is a German multinational company which produces luxury vehicles and motorcycles. The company was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 until 1918 and again from 1933 to 1945.'
    },
    {
        name: 'Jaguar',
        info: 'Jaguar is the luxury vehicle brand of Jaguar Land Rover, a British multinational car manufacturer with its headquarters in Whitley, Coventry, England.'
    },
    {
        name: 'Ferrari',
        info: 'Ferrari is an Italian luxury sports car manufacturer based in Maranello, Italy. Founded by Enzo Ferrari in 1939 out of the Alfa Romeo race division as Auto Avio Costruzioni, the company built its first car in 1940.'
    },
    {
        name: 'Tesla',
        info: 'Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. Teslas current products include electric cars, battery energy storage from home to grid scale, solar panels and solar roof tiles, as well as other related products and services.'
    },
    {
        name: 'Honda',
        info: 'The Honda Motor Company, Ltd. is a Japanese public multinational conglomerate corporation primarily known as a manufacturer of automobiles, motorcycles, and power equipment.'
    },
    {
        name: 'null',
        info: "Please Select from DropDown"
    }

    ]

    return (<div>
        {informations.map(item => {
            if (item.name == selectedValue)
                return <p>{item.info}</p>

        })}
    </div>)
}

export default Information