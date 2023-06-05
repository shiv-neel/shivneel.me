import Head from 'next/head'
import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import { HiExternalLink } from 'react-icons/hi'

const About = () => {
	return (
		<>
			<Head>
				<title>About Me</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Box>
				<p className='text-4xl font-bold mb-6'>About Me</p>
				<p className='mt-2 leading-relaxed text-sm'>
					Hey there, I&apos;m Shiv. I&apos;m currently in my final semester of
					my computer science bachelor&apos;s degree at Iowa State University. I
					currently intern at Workiva, Inc. as a Software Engineer, and have a
					total of <strong>2 years work experience</strong>. I plan to get a
					Master&apos;s degree in Business Administration (MBA) within the next
					few years to learn how to effectively build and manage teams.
					<br />
					<br />
					I have been fascinated with automobiles since childhood. I dream of a
					future in which vehicles are 100% safe for us tomorrow, and
					sustainable for our grandchildren the day after. While many may
					dismiss this vision as naive optimism, I would argue that we are
					already witnessing the beginnings of this vision&apos;s manifestation.
					<br />
					<br />
					Automakers are developing autonomous vehicles with more rational
					driving patterns than humans, and as we discover more sustainable
					renewable energy sources, we are already developing vehicles that need
					not rely on the{' '}
					<a
						href='https://rentar.com/efficient-engines-thermodynamics-combustion-efficiency/#:~:text=The%20reasons%20combustion%20engines%20are,(power)%20by%20burning%20fuel.'
						className='underline text-gray-400'
						target='_blank'
					>
						rather inefficient internal combustion process.
					</a>
					<br />
					<br />
					I&apos;m extremely grateful to be alive during this &apos;automotive
					revolution&apos;, so to speak. I&apos;m excited to continue developing
					my technical skills as a software engineer, so that I can one day also
					be a part of the revolution my inner child always dreamed of.
				</p>
			</Box>
		</>
	)
}

export default About
