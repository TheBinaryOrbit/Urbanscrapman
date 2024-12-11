import React, { useState } from 'react'

const data = [
    {
        "id": 2,
        "title": "Normal Recyclables",
        "icon": "",
        "unit_label": "Piece",
        "unit_price": 0,
        "custom_price": "",
        "service_area_id": null,
        "is_active": true,
        "is_archived": false,
        "parent": -1,
        "priority": 1,
        "updated_at": 1714413400,
        "created_at": 1674166855,
        "children": [
            {
                "id": 170,
                "title": "Office Paper",
                "icon": "https://ikc.edgekit.net/h1rxzpffx/scrapuncle/assets/papers_rorTDynz7.png?updatedAt=1710451407122",
                "unit_label": "kg",
                "unit_price": 14,
                "custom_price": null,
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 2,
                "priority": 1,
                "updated_at": 1714570701,
                "created_at": 0
            },
            {
                "id": 7,
                "title": "Newspaper",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/newspaper-report.png",
                "unit_label": "kg",
                "unit_price": 14,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 2,
                "priority": 1,
                "updated_at": 1722793315,
                "created_at": 1674166855
            },
            {
                "id": 8,
                "title": "Copies/Books",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapecox/Books.webp",
                "unit_label": "kg",
                "unit_price": 12,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 2,
                "priority": 2,
                "updated_at": 1729013776,
                "created_at": 1674166855
            },
            {
                "id": 9,
                "title": "Cardboard",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/box.png",
                "unit_label": "kg",
                "unit_price": 8,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 2,
                "priority": 3,
                "updated_at": 1729073010,
                "created_at": 1674166855
            },
            {
                "id": 10,
                "title": "PET Bottles",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/bin.png",
                "unit_label": "kg",
                "unit_price": 8,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 2,
                "priority": 4,
                "updated_at": 1728851888,
                "created_at": 1674166855
            },
            {
                "id": 11,
                "title": "Iron",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/beam.png",
                "unit_label": "kg",
                "unit_price": 26,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 2,
                "priority": 5,
                "updated_at": 1729072995,
                "created_at": 1674166855
            },
            {
                "id": 12,
                "title": "Steel Utensils",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/hook.png",
                "unit_label": "kg",
                "unit_price": 40,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 2,
                "priority": 6,
                "updated_at": 1729013672,
                "created_at": 1674166855
            },
            {
                "id": 13,
                "title": "Aluminium",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/beer.png",
                "unit_label": "kg",
                "unit_price": 105,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 2,
                "priority": 7,
                "updated_at": 1674166855,
                "created_at": 1674166855
            },
            {
                "id": 14,
                "title": "Brass",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/brass-nuckle.png",
                "unit_label": "kg",
                "unit_price": 305,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 2,
                "priority": 8,
                "updated_at": 1674166855,
                "created_at": 1674166855
            },
            {
                "id": 15,
                "title": "Copper",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/wire.png",
                "unit_label": "kg",
                "unit_price": 425,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 2,
                "priority": 9,
                "updated_at": 1674166855,
                "created_at": 1674166855
            }
        ]
    },
    {
        "id": 3,
        "title": "Large Appliances",
        "icon": "",
        "unit_label": "Piece",
        "unit_price": 0,
        "custom_price": "",
        "service_area_id": null,
        "is_active": true,
        "is_archived": false,
        "parent": -1,
        "priority": 3,
        "updated_at": 1714413336,
        "created_at": 1674166855,
        "children": [
            {
                "id": 17,
                "title": "Split AC ",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/air-conditioner.png",
                "unit_label": "piece",
                "unit_price": 4350,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 3,
                "priority": 1,
                "updated_at": 1729013908,
                "created_at": 1674166855
            },
            {
                "id": 27,
                "title": "Window AC ",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/air-conditioner(1).png",
                "unit_label": "piece",
                "unit_price": 4150,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 3,
                "priority": 2,
                "updated_at": 1729013640,
                "created_at": 1674166855
            },
            {
                "id": 16,
                "title": "SPLIT/WINDOW",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/air-conditioner.png",
                "unit_label": "piece",
                "unit_price": 3500,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 3,
                "priority": 3,
                "updated_at": 1729013651,
                "created_at": 1674166855
            },
            {
                "id": 18,
                "title": "WINDOW/SPLIT",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/air-conditioner.png",
                "unit_label": "piece",
                "unit_price": 5600,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 3,
                "priority": 4,
                "updated_at": 1729013835,
                "created_at": 1674166855
            },
            {
                "id": 24,
                "title": "Washing Machine",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/smart-washing-machine.png",
                "unit_label": "piece",
                "unit_price": 1500,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 3,
                "priority": 4,
                "updated_at": 1729013594,
                "created_at": 1674166855
            },
            {
                "id": 23,
                "title": "Washing Machine",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/smart-washing-machine.png",
                "unit_label": "piece",
                "unit_price": 1000,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 3,
                "priority": 5,
                "updated_at": 1729013933,
                "created_at": 1674166855
            },
            {
                "id": 22,
                "title": "Semi Automatic",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/smart-washing-machine.png",
                "unit_label": "piece",
                "unit_price": 1000,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 3,
                "priority": 6,
                "updated_at": 1729013708,
                "created_at": 1674166855
            },
            {
                "id": 21,
                "title": "Geyser",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/water-heater.png",
                "unit_label": "kg",
                "unit_price": 20,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 3,
                "priority": 7,
                "updated_at": 1674166855,
                "created_at": 1674166855
            },
            {
                "id": 20,
                "title": "Single Door Fridge ",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/fridge.png",
                "unit_label": "piece",
                "unit_price": 1100,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 3,
                "priority": 8,
                "updated_at": 1728825579,
                "created_at": 1674166855
            },
            {
                "id": 19,
                "title": "Double Door Fridge ",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/fridge.png",
                "unit_label": "piece",
                "unit_price": 1350,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 3,
                "priority": 9,
                "updated_at": 1729013749,
                "created_at": 1674166855
            },
            {
                "id": 25,
                "title": "Iron Cooler",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/ventilation.png",
                "unit_label": "kg",
                "unit_price": 31,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 3,
                "priority": 10,
                "updated_at": 1728825735,
                "created_at": 1674166855
            },
            {
                "id": 26,
                "title": "Plastic cooler",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/ventilation.png",
                "unit_label": "kg",
                "unit_price": 15,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 3,
                "priority": 11,
                "updated_at": 1688588312,
                "created_at": 1674166855
            }
        ]
    },
    {
        "id": 4,
        "title": "Small Appliances",
        "icon": "",
        "unit_label": "Piece",
        "unit_price": 0,
        "custom_price": "",
        "service_area_id": null,
        "is_active": true,
        "is_archived": false,
        "parent": -1,
        "priority": 3,
        "updated_at": 1714413518,
        "created_at": 1674166855,
        "children": [
            {
                "id": 37,
                "title": "Printer",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/printer.png",
                "unit_label": "kg",
                "unit_price": 20,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 4,
                "priority": 0,
                "updated_at": 1714571380,
                "created_at": 1674166855
            },
            {
                "id": 36,
                "title": "Plastic E-waste ",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/lamp.png",
                "unit_label": "kg",
                "unit_price": 15,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 4,
                "priority": 0,
                "updated_at": 1714571433,
                "created_at": 1674166855
            },
            {
                "id": 35,
                "title": "Metal E-waste",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/radiation.png",
                "unit_label": "kg",
                "unit_price": 30,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 4,
                "priority": 0,
                "updated_at": 1714571445,
                "created_at": 1674166855
            },
            {
                "id": 34,
                "title": "CRT TV ",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/television.png",
                "unit_label": "piece",
                "unit_price": 200,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 4,
                "priority": 3,
                "updated_at": 1728825952,
                "created_at": 1674166855
            },
            {
                "id": 33,
                "title": "Ceiling Fan",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/fan.png",
                "unit_label": "Kg",
                "unit_price": 40,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 4,
                "priority": 5,
                "updated_at": 1714571389,
                "created_at": 1674166855
            },
            {
                "id": 32,
                "title": "Motors ",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/generator(1).png",
                "unit_label": "kg",
                "unit_price": 35,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 4,
                "priority": 6,
                "updated_at": 1674166855,
                "created_at": 1674166855
            },
            {
                "id": 31,
                "title": "Microwave",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/microwave.png",
                "unit_label": "piece",
                "unit_price": 350,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 4,
                "priority": 7,
                "updated_at": 1729013950,
                "created_at": 1674166855
            },
            {
                "id": 30,
                "title": "UPS",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/generator.png",
                "unit_label": "piece",
                "unit_price": 180,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 4,
                "priority": 8,
                "updated_at": 1674166855,
                "created_at": 1674166855
            },
            {
                "id": 29,
                "title": "Inverter",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/engine.png",
                "unit_label": "Kg",
                "unit_price": 42,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 4,
                "priority": 9,
                "updated_at": 1674166855,
                "created_at": 1674166855
            },
            {
                "id": 28,
                "title": "Battery",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/battery.png",
                "unit_label": "kg",
                "unit_price": 81,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 4,
                "priority": 10,
                "updated_at": 1729013942,
                "created_at": 1674166855
            }
        ]
    },
    {
        "id": 5,
        "title": "Mobiles & Computers",
        "icon": "",
        "unit_label": "Piece",
        "unit_price": 0,
        "custom_price": "",
        "service_area_id": null,
        "is_active": true,
        "is_archived": false,
        "parent": -1,
        "priority": 4,
        "updated_at": 1714413571,
        "created_at": 1674166855,
        "children": [
            {
                "id": 41,
                "title": "Scrap Laptop ",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/black-laptop.png",
                "unit_label": "piece",
                "unit_price": 300,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 5,
                "priority": 4,
                "updated_at": 1688589589,
                "created_at": 1674166855
            },
            {
                "id": 40,
                "title": "CRT Monitor",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/computer(2).png",
                "unit_label": "piece",
                "unit_price": 150,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 5,
                "priority": 5,
                "updated_at": 1674166855,
                "created_at": 1674166855
            },
            {
                "id": 39,
                "title": "LCD Monitor",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/computer(2).png",
                "unit_label": "Kg",
                "unit_price": 20,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 5,
                "priority": 6,
                "updated_at": 1674166855,
                "created_at": 1674166855
            },
            {
                "id": 38,
                "title": "Computer CPU",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/computer(2).png",
                "unit_label": "piece",
                "unit_price": 200,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 5,
                "priority": 7,
                "updated_at": 1674166855,
                "created_at": 1674166855
            }
        ]
    },
    {
        "id": 6,
        "title": "Others",
        "icon": "",
        "unit_label": " ",
        "unit_price": 0,
        "custom_price": "",
        "service_area_id": null,
        "is_active": true,
        "is_archived": false,
        "parent": -1,
        "priority": 6,
        "updated_at": 1714413524,
        "created_at": 1674166855,
        "children": [
            {
                "id": 169,
                "title": "Bike",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapecox/BikeIcon.webp",
                "unit_label": "Piece",
                "unit_price": 2100,
                "custom_price": null,
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 6,
                "priority": 0,
                "updated_at": 1712424062,
                "created_at": 1676743013
            },
            {
                "id": 43,
                "title": "Car",
                "icon": "https://ikp.edgekit.net/h1rxzpffx/swapecox/CarIcon.webp",
                "unit_label": "piece",
                "unit_price": 20000,
                "custom_price": "",
                "service_area_id": null,
                "is_active": true,
                "is_archived": false,
                "parent": 6,
                "priority": 2,
                "updated_at": 1683024643,
                "created_at": 1674166855
            }
        ]
    }
]
const Rates = () => {
    return (
        <div className='w-full h-fit  py-10 pt-36  p-10'>
            {
                data.map((sec) => {
                    return (
                        <>
                            <h1 className="w-full text-center md:text-left sm:px-16 font-palyfair text-2xl md:text-3xl lg:text-3xl py-3 font-bold text-green-600" data-aos="fade-up">{sec.title}</h1>
                            <div className='w-full h-fit  py-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
                                {
                                    sec.children.map((item, index) => <Card key={index} name={item.title} price={item.unit_price} unit={item.unit_label} icon={item.icon} />)
                                }
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}


const Card = ({ icon, name, price, unit }) => {
    const [display , setdisplat] = useState(false)
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out  px-10 bor p-4  mx-auto cursor-pointer ">
            <div className="flex items-center justify-center">
                <img
                    src={icon}
                    className="w-10 h-10 object-contain"
                />
            </div>
            <div className="text-center mt-4">
                <p className="text-xl font-semibold text-gray-700">RS {price}/{unit}</p>
            </div>
            <div className="text-center mt-2 ">
                <p className="text-lg font-medium text-gray-900">{name}</p>
            </div>
        </div>
    )
}
export default Rates
