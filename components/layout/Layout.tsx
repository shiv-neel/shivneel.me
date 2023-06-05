import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Home from '../../pages'
import About from '../../pages/about'
import Resume from '../../pages/resume'
import MobileNavbar from '../sidebar/MobileNavbar'

const Layout = ({ children }: any) => {
	const [pageIndex, setPageIndex] = useState(0)
	const pageIndexMap = [<Home key={0} />, <About key={1} />, <Resume key={2} />]
	if (typeof window == undefined) return <></>
	const getWidth = () => window.innerWidth
	const [width, setWidth] = useState(getWidth())

	useEffect(() => {
		const updateDimension = () => setWidth(getWidth())
		window.addEventListener('resize', updateDimension)
	}, [width])
	return (
		<Box className=''>
			{width > 768 ? (
				<Box className='flex w-2/3 mt-40 mx-auto'>
					<Sidebar pageIndex={pageIndex} setPageIndex={setPageIndex} />
					<Box>{pageIndexMap[pageIndex]}</Box>
				</Box>
			) : (
				<Box className='flex flex-col w-full mt-40 mx-auto'>
					<MobileNavbar pageIndex={pageIndex} setPageIndex={setPageIndex} />
					<Box className='w-4/5 mx-auto'>{pageIndexMap[pageIndex]}</Box>
				</Box>
			)}
		</Box>
	)
}

export default Layout
