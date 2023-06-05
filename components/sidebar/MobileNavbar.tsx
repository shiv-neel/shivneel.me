import React, { useState } from 'react'
import { Box, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { BsHouseFill, BsFillLightbulbFill } from 'react-icons/bs'
import { MdContactPage } from 'react-icons/md'
import Logo from '../Logo'
import { SidebarProps } from './Sidebar'

const MobileNavbar: React.FC<SidebarProps> = ({ pageIndex, setPageIndex }) => {
	const offsets = [12, 64, 116]
	return (
		<Box className='flex gap-3 w-1/6 ml-6 mb-12 -mt-24'>
			<motion.div animate={{ x: offsets[pageIndex] }}>
				<Box
					className='w-10 h-10 p-2 rounded-md cursor-pointer absolute z-1'
					bgColor='#000000'
				></Box>
			</motion.div>
			<MenuOption
				pageIndex={0}
				setPageIndex={setPageIndex}
				icon={<BsHouseFill className='bg-transparent text-white text-2xl' />}
				text='Home'
			/>
			<MenuOption
				pageIndex={1}
				setPageIndex={setPageIndex}
				icon={
					<BsFillLightbulbFill className='bg-transparent text-white text-2xl' />
				}
				text='About'
			/>
			<MenuOption
				pageIndex={2}
				setPageIndex={setPageIndex}
				icon={<MdContactPage className='bg-transparent text-white text-2xl' />}
				text='Resume'
			/>
		</Box>
	)
}

interface MenuOptionProps extends SidebarProps {
	icon: JSX.Element
	text: string
}

const MenuOption: React.FC<MenuOptionProps> = ({
	pageIndex,
	setPageIndex,
	icon,
}) => {
	return (
		<Box
			className='flex items-center gap-7 w-40 p-2 rounded-md cursor-pointer z-50 bg-transparent'
			onClick={() => setPageIndex(pageIndex)}
		>
			{icon}
		</Box>
	)
}
export default MobileNavbar
