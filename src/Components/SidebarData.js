import React from 'react';
import {FiAirplay} from 'react-icons/fi';
import {IoIcons} from 'react-icons/lib/io';
import {RiIcons} from 'react-icons/lib/ri';

export const SidebarData = [
    {
        title: 'Overview',
        path: '/overview',
        icons: <FaIcons.FaFillHome />,
        iconsClosed: <RiIcons.RiArrowDownSFill />,
        iconsOpened: <RiIcons.RiArrowUpSFill />,
       
},
{
    title: 'Candidates',
    path: '/candidate',
    icons: <FaIcons.FaFillHome />,
    iconsClosed: <RiIcons.RiArrowDownSFill />,
    iconsOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
        {
            title: 'Active',
            path: '/candidates/active',
            icon: <IoIcons.IoIosPaper />,
        },
        {
            title: 'Favourite',
            path: '/candidates/favourite',
            icon: <IoIcons.IoIosPaper />,
        },
        {
            title: 'Archieved',
            path: '/candidates/archieved',
            icon: <IoIcons.IoIosPaper />,
        },
        {
            title: 'Pending',
            path: '/candidates/pending',
            icon: <IoIcons.IoIosPaper />,
        },
        {
            title: 'Completed',
            path: '/candidates/completed',
            icon: <IoIcons.IoIosPaper />,
        },
        {
            title: 'All',
            path: '/candidates/all',
            icon: <IoIcons.IoIosPaper />,
        },
    ]
},
{
    title: 'Test Configuration',
    path: '/test configuration',
    icons: <FaIcons.FaFillHome />,
    iconsClosed: <RiIcons.RiArrowDownSFill />,
    iconsOpened: <RiIcons.RiArrowUpSFill />,
},
{
    title: 'Profiles',
    path: '/profiles',
    icons: <FaIcons.FaFillHome />,
    iconsClosed: <RiIcons.RiArrowDownSFill />,
    iconsOpened: <RiIcons.RiArrowUpSFill />,
},
{
    title: 'Connected Accounts',
    path: '/connected accounts',
    icons: <FaIcons.AiFillHome />,
    iconsClosed: <RiIcons.RiArrowDownSFill />,
    iconsOpened: <RiIcons.RiArrowUpSFill />,
},
{
    title: 'Products',
    path: '/products',
    icons: <FaIcons.FaFillHome />,
    iconsClosed: <RiIcons.RiArrowDownSFill />,
    iconsOpened: <RiIcons.RiArrowUpSFill />,
},
{
    title: 'Analytics',
    path: '/analytics',
    icons: <FaIcons.FaFillHome />,
    iconsClosed: <RiIcons.RiArrowDownSFill />,
    iconsOpened: <RiIcons.RiArrowUpSFill />,
},
{
    title: 'Reports',
    path: '/reports',
    icons: <FaIcons.FaFillHome />,
    iconsClosed: <RiIcons.RiArrowDownSFill />,
    iconsOpened: <RiIcons.RiArrowUpSFill />,
},
{
    title: 'Billing',
    path: '/billing',
    icons: <AiIcons.AiFillHome />,
    iconsClosed: <RiIcons.RiArrowDownSFill />,
    iconsOpened: <RiIcons.RiArrowUpSFill />,
},
]
