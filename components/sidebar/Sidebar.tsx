import React, { useState } from 'react'
import { Box, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { BsHouseFill, BsFillLightbulbFill } from 'react-icons/bs'
import { MdContactPage } from 'react-icons/md'
import Logo from '../Logo'

interface SidebarProps {
	pageIndex: number
	setPageIndex: React.Dispatch<React.SetStateAction<number>>
}

const Sidebar: React.FC<SidebarProps> = ({ pageIndex, setPageIndex }) => {
	const offsets = [10, 58, 106]
	return (
		<Box className='lg:mr-12 mr-6 flex flex-col gap-3 xl:ml-60'>
			<Box className='flex justify-center'>
				<Logo />
			</Box>
			<motion.div animate={{ y: offsets[pageIndex] }}>
				<Box
					className='w-40 h-10 p-2 rounded-md cursor-pointer absolute z-1 back'
					bgColor='#000000'
				></Box>
			</motion.div>
			<MenuOption
				pageIndex={0}
				setPageIndex={setPageIndex}
				icon={<BsHouseFill className='bg-transparent text-white' />}
				text='Home'
			/>
			<MenuOption
				pageIndex={1}
				setPageIndex={setPageIndex}
				icon={<BsFillLightbulbFill className='bg-transparent text-white' />}
				text='About'
			/>
			<MenuOption
				pageIndex={2}
				setPageIndex={setPageIndex}
				icon={<MdContactPage className='bg-transparent text-white' />}
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
	text,
}) => {
	return (
		<Box
			className='flex items-center gap-7 w-40 p-2 rounded-md cursor-pointer z-50 bg-transparent'
			onClick={() => setPageIndex(pageIndex)}
		>
			{icon}
			<p className='text-sm bg-transparent'>{text}</p>
		</Box>
	)
}
export default Sidebar
