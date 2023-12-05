import React from 'react'

const NavigationLink = ({ href, text, router }) => {
    const isActive = router.asPath === (href === "/home" ? "/" : href);
    return (
        <Link href={href === "/home" ? "/" : href} passHref>
            <a
                href={href === "/home" ? "/" : href}
                className={`${isActive && "nav_item_active"} nav_item`}
            >
                {text}
            </a>
        </Link>
    );
}

export default NavigationLink