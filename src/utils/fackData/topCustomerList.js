const topCustomerlist = [
    {
        id: 1,
        user_img: "/images/avatar/2.png",
        user_name: "Archie Cantones",
        user_email: "arcie.tones@gmail.com",
        user_status: "Completed",
        proposal: "Returning",
        date: "11/06/2023 10:53",
        is_active: {
            position: "active",
            color: "#17c666"
        },
        active_time: "2 min ago",
        is_message_read: false,
        color:"success"
    },

    {
        id: 2,
        user_img: "",
        user_name: "Holmes Cherryman",
        user_email: "golms.chan@gmail.com",
        user_status: "In Progress",
        proposal: "New",
        date: "11/06/2023 10:53",
        is_active: {
            position: "inactive",
            color: "#ea4d4d"
        },
        active_time: "5 min ago",
        is_message_read: false,
        color:"primary"
    },
    {
        id: 3,
        user_img: "/images/avatar/4.png",
        user_name: "Malanie Hanvey",
        user_email: "lanie.nveyn@gmail.com",
        user_status: "Completed",
        proposal: "Returning",
        date: "11/06/2023 10:53",
        is_active: {
            position: "active",
            color: "#17c666"
        },
        active_time: "7 min ago",
        is_message_read: true,
        color:"success"
    },
    {
        id: 4,
        user_img: "",
        user_name: "Kenneth Hune",
        user_email: "nneth.une@gmail.com",
        user_status: "Not Interested",
        proposal: "New",
        date: "11/06/2023 10:53",
        is_active: {
            position: "active",
            color: "#17c666"
        },
        active_time: "9 min ago",
        is_message_read: true,
        color:"primary"
    },
    {
        id: 5,
        user_img: "/images/avatar/6.png",
        user_name: "Valentine Maton",
        user_email: "alenine.aton@gmail.com",
        user_status: "Completed",
        proposal: "Returning",
        date: "11/06/2023 10:53",
        is_active: {
            position: "block",
            color: "#91a1b6"
        },
        active_time: "10 min ago",
        is_message_read: true,
        color:"success"
    },
]

export const topCustomerList = (startItem = 0, endItem = topCustomerlist.length) => {
    return topCustomerlist.slice(startItem, endItem)
}