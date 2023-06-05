import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Home from '../../pages'
import About from '../../pages/about'
import Resume from '../../pages/resume'

const Layout = ({ children }: any) => {
	const [pageIndex, setPageIndex] = useState(0)
	const pageIndexMap = [<Home key={0} />, <About key={1} />, <Resume key={2} />]
	return (
		<Box className=''>
			<Box className='flex w-2/3 mt-40 mx-auto'>
				<Sidebar pageIndex={pageIndex} setPageIndex={setPageIndex} />
				<Box>{pageIndexMap[pageIndex]}</Box>
			</Box>
		</Box>
	)
}

export default Layout
