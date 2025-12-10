import React from 'react';
import Link from "next/link";

interface ItemNavProps {
    page: { href: string, name: string }
    isActive: boolean;
}

const ItemNav: React.FC<ItemNavProps> = ({page,isActive}) => {
    return (
        <Link
            key={page.href}
            href={page.href}
            style={{  color: 'white', display: 'block', fontWeight:isActive?"bold":"normal",textDecoration:"none" }}

        >
            {page.name}
        </Link>
    );
};

export default ItemNav;