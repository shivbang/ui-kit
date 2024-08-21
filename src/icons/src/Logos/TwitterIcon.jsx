import React from "react";
import { createIcon } from "../helpers/icon";

export const TwitterIcon = createIcon((props) => {
    return (
        <svg viewBox="0 0 18 18" width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M15.75 4.677c-.496.22-1.03.368-1.59.436a2.776 2.776 0 001.217-1.533 5.53 5.53 0 01-1.759.672 2.77 2.77 0 00-4.72 2.527A7.865 7.865 0 013.19 3.884a2.768 2.768 0 00-.048 2.7c.215.402.526.745.905.998a2.763 2.763 0 01-1.254-.346v.035a2.77 2.77 0 002.222 2.716c-.408.11-.836.127-1.251.048a2.771 2.771 0 002.587 1.923 5.558 5.558 0 01-4.101 1.147 7.833 7.833 0 004.245 1.245c5.096 0 7.881-4.22 7.881-7.88 0-.12-.003-.24-.008-.359a5.63 5.63 0 001.38-1.432l.002-.002z"
                fill="#000"
            />
        </svg>
    );
});

TwitterIcon.tags = ["logo", "social media", "tweet"];