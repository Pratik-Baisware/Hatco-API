const getAllOrders = async (req, res) => {
    res.status(200).json({
        "responseCode": 1,
        "action": "get_reservations",
        "orderNumber": 0,
        "response":
        {
            "reservations": [
                {
                    "orderNumber": "546823",
                    "orderOwner": "Pratik",
                    "lockers":
                        [
                            {
                                "lockerNumber": "1",
                                "lockerStatus": "Reserved"
                            }
                        ]
                },
                {
                    "orderNumber": "821354",
                    "orderOwner": "Sourabh",
                    "lockers":
                        [
                            {
                                "lockerNumber": "2",
                                "lockerStatus": "Reserved"
                            }
                        ]
                },
                {
                    "orderNumber": "501483",
                    "orderOwner": "Mrugesh",
                    "lockers":
                        [
                            {
                                "lockerNumber": "3",
                                "lockerStatus": "Reserved"
                            }
                        ]
                },
                {
                    "orderNumber": "546823",
                    "orderOwner": "Aniket",
                    "lockers":
                        [
                            {
                                "lockerNumber": "4",
                                "lockerStatus": "Reserved"
                            }
                        ]
                },
                {
                    "orderNumber": "821354",
                    "orderOwner": "Atendra",
                    "lockers":
                        [
                            {
                                "lockerNumber": "5",
                                "lockerStatus": "Reserved"
                            }
                        ]
                },
                {
                    "orderNumber": "501483",
                    "orderOwner": "Shashwat",
                    "lockers":
                        [
                            {
                                "lockerNumber": "6",
                                "lockerStatus": "Reserved"
                            }
                        ]
                },
                {
                    "orderNumber": "739483",
                    "orderOwner": "Abhijeet",
                    "lockers":
                        [
                            {
                                "lockerNumber": "7",
                                "lockerStatus": "Reserved"
                            }
                        ]
                },
                {
                    "orderNumber": "546843",
                    "orderOwner": "Akib",
                    "lockers":
                        [
                            {
                                "lockerNumber": "8",
                                "lockerStatus": "Reserved"
                            }
                        ]
                },
                {
                    "orderNumber": "821357",
                    "orderOwner": "Shubhangi",
                    "lockers":
                        [
                            {
                                "lockerNumber": "9",
                                "lockerStatus": "Reserved"
                            }
                        ]
                },
                {
                    "orderNumber": "587483",
                    "orderOwner": "Ruchita",
                    "lockers":
                        [
                            {
                                "lockerNumber": "10",
                                "lockerStatus": "Reserved"
                            }
                        ]
                },
                {
                    "orderNumber": "546623",
                    "orderOwner": "Prathamesh",
                    "lockers":
                        [
                            {
                                "lockerNumber": "11",
                                "lockerStatus": "Reserved"
                            }
                        ]
                },
                {
                    "orderNumber": "857354",
                    "orderOwner": "Sandip",
                    "lockers":
                        [
                            {
                                "lockerNumber": "12",
                                "lockerStatus": "Reserved"
                            }
                        ]
                },
            ]
        }
    });
};

const getAllOrdersDetails = async (req, res) => {
    res.status(200).json({
        "responseCode": 1,
        "action": "get_reservations",
        "orderNumber": 0,
        "response":
        {
            "reservations": [
                {
                    "orderNumber": "546823",
                    "orderOwner": "Pratik",
                    "lockers":
                        [
                            {
                                "lockerNumber": "1",
                                "lockerStatus": "Reserved"
                            }
                        ]
                },
                {
                    "orderNumber": "821354",
                    "orderOwner": "Sourabh",
                    "lockers":
                        [
                            {
                                "lockerNumber": "2",
                                "lockerStatus": "Reserved"
                            }
                        ]
                },
                {
                    "orderNumber": "501483",
                    "orderOwner": "Mrugesh",
                    "lockers":
                        [
                            {
                                "lockerNumber": "3",
                                "lockerStatus": "Reserved"
                            }
                        ]
                },
                {
                    "orderNumber": "546823",
                    "orderOwner": "Aniket",
                    "lockers":
                        [
                            {
                                "lockerNumber": "4",
                                "lockerStatus": "Reserved"
                            }
                        ]
                },
                {
                    "orderNumber": "821354",
                    "orderOwner": "Atendra",
                    "lockers":
                        [
                            {
                                "lockerNumber": "5",
                                "lockerStatus": "Reserved"
                            }
                        ]
                },
                {
                    "orderNumber": "501483",
                    "orderOwner": "Shashwat",
                    "lockers":
                        [
                            {
                                "lockerNumber": "6",
                                "lockerStatus": "Reserved"
                            }
                        ]
                },
                {
                    "orderNumber": "739483",
                    "orderOwner": "Abhijeet",
                    "lockers":
                        [
                            {
                                "lockerNumber": "7",
                                "lockerStatus": "Reserved"
                            }
                        ]
                },
                {
                    "orderNumber": "546843",
                    "orderOwner": "Akib",
                    "lockers":
                        [
                            {
                                "lockerNumber": "8",
                                "lockerStatus": "Reserved"
                            }
                        ]
                },
                {
                    "orderNumber": "821357",
                    "orderOwner": "Shubhangi",
                    "lockers":
                        [
                            {
                                "lockerNumber": "9",
                                "lockerStatus": "Reserved"
                            }
                        ]
                },
                {
                    "orderNumber": "587483",
                    "orderOwner": "Ruchita",
                    "lockers":
                        [
                            {
                                "lockerNumber": "10",
                                "lockerStatus": "Reserved"
                            }
                        ]
                },
                {
                    "orderNumber": "546623",
                    "orderOwner": "Prathamesh",
                    "lockers":
                        [
                            {
                                "lockerNumber": "11",
                                "lockerStatus": "Reserved"
                            }
                        ]
                },
                {
                    "orderNumber": "857354",
                    "orderOwner": "Sandip",
                    "lockers":
                        [
                            {
                                "lockerNumber": "12",
                                "lockerStatus": "Reserved"
                            }
                        ]
                },
            ]
        }
    });
};

module.exports = { getAllOrders, getAllOrdersDetails };