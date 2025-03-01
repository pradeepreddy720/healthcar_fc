import React from 'react';

const menuItems= [{
    id: 1,
    title: 'Home',
    url: '/',
},{
    id: 2,
    title: 'Health Topics',
    url: '/health-topics',
},{
    id: 3,
    title: 'Services',
    url: '/services',
},{
    id: 4,
    title: 'Contact',
    url: '/contact',
}]

const HorizontalMenu = () => {
    return (
      <nav className="horizontal-menu">
        <ul>
            {menuItems.map(item => (
                <li key={item.id}>
                <a href={`#${item.url}`}>{item.title}</a>
                </li>
            ))}
        </ul>
      </nav>
    );
  };

  export default HorizontalMenu;